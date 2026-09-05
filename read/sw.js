const CACHE_NAME = 'reader-shell-v1';

// Only the app shell itself is cached for offline access.
// Everything else -- RSS proxy calls, feed XML, the Vue CDN script, favicons --
// is left to hit the network untouched. CacheDB (IndexedDB) already handles
// feed-level caching with its own TTL, so the service worker deliberately
// does not duplicate or interfere with that.
const SHELL_FILES = ['reader.html', 'manifest.json'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            cache.addAll(SHELL_FILES.map(f => new URL(f, self.location).toString()))
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names =>
            Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    // Only intervene for same-origin GET requests to app-shell files.
    if (req.method !== 'GET' || url.origin !== self.location.origin) return;
    const isShellRequest = SHELL_FILES.some(f => url.pathname.endsWith(f));
    if (!isShellRequest) return;

    event.respondWith(
        caches.match(req).then(cached => cached || fetch(req))
    );
});