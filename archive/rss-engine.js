/**
 * RSS Engine - A self-sufficient module for fetching and parsing RSS/Atom feeds
 * using multiple proxy strategies to bypass CORS.
 */

const RSSEngine = {
    async process(sourceConfig) {
        const bundle = {
            id: sourceConfig.url,
            name: sourceConfig.name,
            url: sourceConfig.url,
            status: 'waiting',
            lastFetched: new Date(),
            strategyUsed: null,
            items: [],
            error: null,
            metadata: {
                title: sourceConfig.name,
                description: '',
                link: '',
                icon: ''
            }
        };

        try {
            const { text, strategy } = await this.fetchWithStrategy(sourceConfig.url);
            bundle.strategyUsed = strategy;
            
            const parsed = this.parse(text, bundle);
            bundle.items = parsed.items;
            bundle.metadata = { ...bundle.metadata, ...parsed.feedMeta };
            bundle.status = 'success';
        } catch (err) {
            bundle.status = 'error';
            bundle.error = err.message;
        }

        return bundle;
    },
    async fetchWithStrategy(url) {
        const strategies = [
            { name: 'CorsProxy.io', url: `https://corsproxy.io/?${encodeURIComponent(url)}` },
            { name: 'AllOrigins', url: `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}` },
            { name: 'ThingProxy', url: `http://thingproxy.freeboard.io/fetch/${url}` },
            { name: 'ThingProxys', url: `https://thingproxy.freeboard.io/fetch/${url}` },
            { name: 'CodeTabs', url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}` },
            { name: 'RSSBridge', url: `https://rss-bridge.org/bridge01/?action=display&bridge=FeedMergeBridge&format=Atom&url=${encodeURIComponent(url)}` },
            { name: 'FetchRSS', url: `https://fetchrss.com/rss/${encodeURIComponent(url)}` }
        ];

        // Shuffle and add Direct
        for (let i = strategies.length - 1; i > 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [strategies[i], strategies[j]] = [strategies[j], strategies[i]];
        }
        strategies.unshift({ name: 'Direct', url: url });
        strategies.unshift({ name: 'Mp', url: `https://red-snowflake-da20.47e73dbfc21166b.workers.dev/?url=${encodeURIComponent(url)}` });

        // Create ONE controller to rule them all
        const globalController = new AbortController();
        const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        
        const activePromises = [];

        try {
            for (const strat of strategies) {
                const strategyPromise = (async () => {
                    try {
                        // Pass the global signal to every fetch
                        const res = await fetch(strat.url, { signal: globalController.signal });
                        if (res.ok) {
                            const text = await res.text();
                            const lc = text.trimStart().toLowerCase();
                            if (text && (lc.includes('<rss') || lc.includes('<feed') || lc.includes('<channel'))) {
                                // SUCCESS! Kill all other pending fetches
                                globalController.abort(); 
                                return { text, strategy: strat.name };
                            }
                        }
                        console.log("Stratergy [" + strat.name + "] failed for " + strat.url);
                        throw new Error('Fail');
                    } catch (e) {
                        // Keep the promise "pending" forever if it fails/aborts 
                        // so it doesn't trigger Promise.any early
                        console.log("Stratergy [" + strat.name + "] failed for " + strat.url + e);
                        return await new Promise(() => {}); 
                    }
                })();

                activePromises.push(strategyPromise);

                // Wait 5s or until the current one (or any previous one) finishes
                const result = await Promise.race([
                    strategyPromise,
                    Promise.any(activePromises),
                    timeout(5000).then(() => 'STAGGER_NEXT')
                ]);

                if (result && result !== 'STAGGER_NEXT') {
                    return result;
                }
            }

            // Final fallback to wait for whoever wins
            return await Promise.any(activePromises);

        } catch (err) {
            console.log("All stratergies failed for "+ url)
            throw new Error("All strategies failed.");
        }
    },
    extractCleanText(htmlDoc) {
        // Select elements that usually represent a new line or block
        const blocks = htmlDoc.querySelectorAll('p, div, br, li, h1, h2, h3, h4, h5, h6, tr');

        blocks.forEach(el => {
            const tagName = el.tagName.toLowerCase();
            if (tagName === 'br') {
                el.replaceWith('\n');
            } else {
                // Add a newline after the element to separate it from following content
                el.after('\n');
            }
        });

        return (htmlDoc.body.textContent || "")
            .replace(/\n\s*\n/g, '\n\n') // Reduce excessive whitespace to double newlines
            .trim();
    },
    parse(xmlText, sourceBundle) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, "text/xml");
        
        if (doc.querySelector("parsererror")) throw new Error("Invalid XML format");

        // 1. Smarter Feed Title Extraction (from original logic)
        let feedTitle = doc.querySelector("channel > title, feed > title")?.textContent;
        if (feedTitle && (sourceBundle.name === 'Loading...' || !sourceBundle.name)) {
            feedTitle = feedTitle.split(/[:|-]/)[0].trim();
        } else {
            feedTitle = feedTitle || new URL(sourceBundle.url).hostname.replace('www.', '');
        }

        const feedMeta = {
            title: feedTitle,
            description: doc.querySelector("channel > description, feed > subtitle")?.textContent || '',
            link: doc.querySelector("channel > link, feed > link[rel='alternate']")?.getAttribute("href") || 
                  doc.querySelector("channel > link")?.textContent || '',
            icon: `https://www.google.com/s2/favicons?domain=${new URL(sourceBundle.url).hostname}&sz=64`
        };

        const entries = Array.from(doc.querySelectorAll("item, entry"));
        
        const items = entries.map(el => {
            const ingestionTime = Date.now();
            const getTag = (tag) => el.querySelector(tag)?.textContent || "";
            
            // 2. Enhanced Link Extraction
            let link = getTag("link") || el.querySelector("link")?.getAttribute("href") || "";

            // 3. Content and Image Extraction (Merged Logic)
            const rawContent = getTag("content\\:encoded") || 
                               getTag("description") || 
                               getTag("summary") || 
                               getTag("content");
            
            const htmlDoc = parser.parseFromString(rawContent, 'text/html');
            // const blurb = (htmlDoc.body.textContent || "").trim();
            const blurb = this.extractCleanText(htmlDoc);

            // 4. Detailed Image Extraction (from original logic)
            let image = el.querySelector("enclosure[type^='image']")?.getAttribute("url") || 
                        el.querySelector("media\\:content, content")?.getAttribute("url");
            
            if (!image) {
                const firstImg = htmlDoc.querySelector('img');
                if (firstImg) image = firstImg.getAttribute('src');
            }

            const dateStr = getTag("pubDate") || getTag("published") || getTag("updated");
            // const date = dateStr ? new Date(dateStr) : new Date();
            const date = dateStr ? new Date(dateStr) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

            return {
                id: link.trim() || Math.random().toString(36).substr(2, 9),
                title: getTag("title").trim() || "Untitled",
                link: link.trim(),
                date: isNaN(date.getTime()) ? new Date() : date,
                snippet: blurb,
                ingestedAt: ingestionTime,
                image: image || null,
                sourceId: sourceBundle.id,
                sourceName: feedMeta.title
            };
        });

        return { items, feedMeta };
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RSSEngine;
} else {
    window.RSSEngine = RSSEngine;
}