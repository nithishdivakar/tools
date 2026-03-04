const CacheDB = {
    DB_NAME: 'ReaderCache',
    STORE_NAME: 'feeds',
    TTL: 90 * 60 * 1000, // in ms

    async init() {
        return new Promise((resolve) => {
            const request = indexedDB.open(this.DB_NAME, 1);
            request.onupgradeneeded = (e) => {
                e.target.result.createObjectStore(this.STORE_NAME);
            };
            request.onsuccess = (e) => resolve(e.target.result);
        });
    },

    async get(url) {
        const db = await this.init();
        return new Promise((resolve) => {
            const req = db.transaction(this.STORE_NAME).objectStore(this.STORE_NAME).get(url);
            req.onsuccess = () => {
                const data = req.result;
                if (data && (Date.now() - data.timestamp < this.TTL)) {
                    resolve(data.bundle);
                } else {
                    resolve(null); // Expired or missing
                }
            };
        });
    },

    async set(url, bundle) {
        const db = await this.init();
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).put({ bundle, timestamp: Date.now() }, url);
    },

    async nuke() {
        const db = await this.init();
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        tx.objectStore(this.STORE_NAME).clear();
        console.log("Cache nuked.");
    },

    async cleanup() {
        const db = await this.init();
        const tx = db.transaction(this.STORE_NAME, 'readwrite');
        const store = tx.objectStore(this.STORE_NAME);
        const request = store.openCursor();

        request.onsuccess = (e) => {
            const cursor = e.target.result;
            if (cursor) {
                if (Date.now() - cursor.value.timestamp > this.TTL) {
                    cursor.delete(); // Physically removes expired entries
                }
                cursor.continue();
            }
        };
    },

    async count() {
        const db = await this.init();
        return new Promise((resolve) => {
            const req = db.transaction(this.STORE_NAME).objectStore(this.STORE_NAME).count();
            req.onsuccess = () => resolve(req.result);
        });
    },
};