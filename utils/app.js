const { createApp, ref, computed } = Vue;

const STORAGE_KEY = 'art_reader_v1';

window.DOMAIN_TAGS = [
    'storage', 'database', 'distributed', 'streaming', 'caching',
    'networking', 'ml', 'observability', 'reliability', 'architecture',
    'analytics', 'search', 'consensus', 'api', 'infrastructure',
    'transactions', 'replication', 'scheduling',
];
window.COMPANY_LIST = [...new Set(window.ARTICLES.map(a => a.company))].sort();
window.TOTAL = window.ARTICLES.length;

const TAG_BASE_WEIGHT = {
    'infrastructure': 1.2,
};

function normaliseVotes(votes) {
    const counts = Object.values(votes);
    const sum = counts.reduce((acc, val) => acc + val, 0);
    
    if (sum === 0) return {};

    const normalised = {};
    for (const [tag, count] of Object.entries(votes)) {
        normalised[tag] = count / sum;
    }

    return normalised;
}

function buildTagAffinities(persisted) {
    const votes = {};
    const seen  = new Set();
    for (const [id, v] of Object.entries(persisted.votes || {})) {
        if (v !== 1 || seen.has(id)) continue;
        seen.add(id);
        const art = window.ARTICLES.find(a => a.id === id);
        if (art) art.tags.forEach(t => { votes[t] = (votes[t] || 0) + 1; });
    }

    for (const id of Object.keys(persisted.read || {})) {
        if (seen.has(id)) continue;   // already counted via like
        seen.add(id);
        const art = window.ARTICLES.find(a => a.id === id);
        if (art) art.tags.forEach(t => { votes[t] = (votes[t] || 0) + 1; });
    }

    return normaliseVotes(votes);  // { tag: vote_count }
}


function scoreArticle(art, affinities) {
    const base = 1;
    let product = 1;
    for (const tag of art.tags) {
        const b_t = TAG_BASE_WEIGHT[tag] ?? 1;
        const a_t = affinities[tag]      ?? 0;
        product *= (1 + b_t * a_t);
    }
    return base * product + 0.01 * Math.random();
}

function loadPersisted() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function savePersisted(p) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

createApp({
    setup() {
        const persisted = ref(loadPersisted());
        if (!persisted.value.read)  persisted.value.read  = {};
        if (!persisted.value.votes) persisted.value.votes = {};

        // UI state
        const viewMode      = ref('list');
        const search        = ref('');
        const activeCompany = ref('all');
        const activeTags    = ref([]);

        const INITIAL_ORDER = (() => {
            const p           = loadPersisted();
            const affinities  = buildTagAffinities(p);

            return window.ARTICLES
                .map(art => ({ id: art.id, score: scoreArticle(art, affinities) }))
                .sort((a, b) => b.score - a.score)
                .map(x => x.id);
        })();

        const liveAffinities = computed(() => buildTagAffinities(persisted.value));

        const articles = computed(() => {
            const q    = search.value.trim().toLowerCase();
            const co   = activeCompany.value;
            const tags = activeTags.value;

            return INITIAL_ORDER
                .map(id => window.ARTICLES.find(a => a.id === id))
                .filter(art => {
                    if (co !== 'all' && art.company !== co) return false;
                    if (tags.length && !tags.every(t => art.tags.includes(t))) return false;
                    if (q && ![art.title, art.summary, art.company, art.tags.join(' ')]
                        .join(' ').toLowerCase().includes(q)) return false;
                    return true;
                });
        });

        const stats = computed(() => ({
            read:  Object.keys(persisted.value.read).length,
            liked: Object.values(persisted.value.votes).filter(v => v === 1).length,
        }));

        const isRead   = id  => !!persisted.value.read[id];
        const isLiked  = id  => persisted.value.votes[id] === 1;
        const getScore = art => scoreArticle(art, liveAffinities.value);
        const getTagScore = tag => liveAffinities.value[tag] ?? 0;
        const getTagWeight = tag => TAG_BASE_WEIGHT[tag] ?? 1.0;

        const getFavicon = url => {
            try { return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=32`; }
            catch { return ''; }
        };
        const getCoFavicon = co => {
            const art = window.ARTICLES.find(a => a.company === co);
            return art ? getFavicon(art.url) : '';
        };
        const coCount   = co => co === 'all' ? window.ARTICLES.length : window.ARTICLES.filter(a => a.company === co).length;
        const getBadges = art => ['paper', 'foundational', 'book'].filter(b => art.tags.includes(b));

        function markRead(id) {
            if (!persisted.value.read[id]) {
                persisted.value.read[id] = true;
                savePersisted(persisted.value);
            }
        }

        function toggleLike(id) {
            if (persisted.value.votes[id] === 1) delete persisted.value.votes[id];
            else persisted.value.votes[id] = 1;
            savePersisted(persisted.value);
        }

        function toggleTag(tag) {
            const i = activeTags.value.indexOf(tag);
            i === -1 ? activeTags.value.push(tag) : activeTags.value.splice(i, 1);
        }

        function clearFilters() {
            search.value = '';
            activeCompany.value = 'all';
            activeTags.value = [];
        }

        return {
            COMPANY_LIST: window.COMPANY_LIST,
            DOMAIN_TAGS:  window.DOMAIN_TAGS,
            TOTAL:        window.TOTAL,
            viewMode, search, activeCompany, activeTags,
            articles, stats,
            isRead, isLiked, getScore, getTagScore, getTagWeight, getFavicon, getCoFavicon, coCount, getBadges,
            markRead, toggleLike, toggleTag, clearFilters,
        };
    }
}).mount('#app');