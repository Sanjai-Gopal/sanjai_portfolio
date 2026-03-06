// ========================================
// FIXED SERVICE WORKER - NO RESPONSE CLONING ERRORS
// ========================================

const CACHE_NAME = 'sanjai-portfolio-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/animations.css',
    '/js/main.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Install event - cache core assets
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - FIXED: No response.clone() issues
self.addEventListener('fetch', event => {
    // Skip cross-origin requests like placeholder images
    if (event.request.url.includes('via.placeholder.com') || 
        event.request.url.includes('unsplash.com')) {
        // Don't cache external images, just fetch normally
        event.respondWith(fetch(event.request));
        return;
    }
    
    // For same-origin requests, use cache-first strategy
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then(response => {
                    // Don't cache if not valid
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // IMPORTANT: Clone response only once and store
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    
                    return response;
                });
            })
        );
    } else {
        // For external requests, just fetch normally
        event.respondWith(fetch(event.request));
    }
});

// Handle offline fallback
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match('/index.html');
            })
        );
    }
});
