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
            starred: !!sourceConfig.starred,
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
            { name: 'Direct', url: url },
            { name: 'AllOrigins', url: `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}` },
            { name: 'CodeTabs', url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}` }
        ];

        for (const strat of strategies) {
            try {
                const res = await fetch(strat.url);
                if (res.ok) {
                    const text = await res.text();
                    if (text && text.trim().length > 0) {
                        return { text, strategy: strat.name };
                    }
                }
            } catch (e) { continue; }
        }
        console.log("Failed: "+ url)
        throw new Error(`Connection failed across all strategies`);
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
            const getTag = (tag) => el.querySelector(tag)?.textContent || "";
            
            // 2. Enhanced Link Extraction
            let link = getTag("link") || el.querySelector("link")?.getAttribute("href") || "";

            // 3. Content and Image Extraction (Merged Logic)
            const rawContent = getTag("content\\:encoded") || 
                               getTag("description") || 
                               getTag("summary") || 
                               getTag("content");
            
            const htmlDoc = parser.parseFromString(rawContent, 'text/html');
            const blurb = (htmlDoc.body.textContent || "").trim();

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
                image: image || null,
                sourceId: sourceBundle.id,
                sourceName: feedMeta.title,
                sourceStarred: sourceBundle.starred
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