/* ========================================
   SERVICE-WORKER.JS - Progressive Web App
   ======================================== */

const CACHE_NAME = 'sanjai-portfolio-v1';
const DYNAMIC_CACHE = 'sanjai-portfolio-dynamic-v1';
const API_CACHE = 'sanjai-portfolio-api-v1';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/private-cloud/',
    '/blog/',
    '/projects/',
    '/css/style.css',
    '/css/animations.css',
    '/css/themes/dark.css',
    '/css/themes/light.css',
    '/js/main.js',
    '/js/three.js',
    '/js/particles.js',
    '/js/chatbot.js',
    '/js/voice-nav.js',
    '/js/github-stats.js',
    '/js/projects.js',
    '/js/blog.js',
    '/js/contact.js',
    '/js/theme.js',
    '/js/utils.js',
    '/private-cloud/js/private-cloud.js',
    '/assets/images/profile/sanjai-main.jpg',
    '/assets/images/icons/icon-192.png',
    '/assets/images/icons/icon-512.png',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch(error => console.error('Service Worker: Cache failed', error))
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE && cache !== API_CACHE) {
                            console.log('Service Worker: Clearing old cache', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(handleAPIRequest(event.request));
        return;
    }

    // Handle image requests
    if (event.request.destination === 'image') {
        event.respondWith(handleImageRequest(event.request));
        return;
    }

    // Handle page requests
    if (event.request.mode === 'navigate') {
        event.respondWith(handlePageRequest(event.request));
        return;
    }

    // Default strategy: stale-while-revalidate
    event.respondWith(staleWhileRevalidate(event.request));
});

// Handle API requests with network-first strategy
async function handleAPIRequest(request) {
    try {
        // Try network first
        const networkResponse = await fetch(request);
        
        // Cache successful responses
        if (networkResponse.ok) {
            const cache = await caches.open(API_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        // Fallback to cache
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline fallback for API
        return new Response(
            JSON.stringify({ error: 'You are offline. Please check your connection.' }),
            { status: 503, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
        // Return cached image and update in background
        updateCache(request);
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        // Return fallback image
        return caches.match('/assets/images/fallback-image.jpg');
    }
}

// Handle page requests with network-first, cache-fallback strategy
async function handlePageRequest(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline page
        return caches.match('/offline.html');
    }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);
    
    const networkPromise = fetch(request)
        .then(response => {
            if (response.ok) {
                const cache = caches.open(DYNAMIC_CACHE);
                cache.then(c => c.put(request, response.clone()));
            }
            return response;
        })
        .catch(() => null);

    return cachedResponse || networkPromise;
}

// Update cache in background
async function updateCache(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response);
        }
    } catch (error) {
        console.log('Background update failed:', error);
    }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-files') {
        event.waitUntil(syncFiles());
    }
});

async function syncFiles() {
    try {
        const db = await openDB();
        const offlineFiles = await getOfflineFiles(db);
        
        for (const file of offlineFiles) {
            await uploadFile(file);
            await markFileSynced(db, file.id);
        }
        
        // Notify user
        self.registration.showNotification('Files Synced', {
            body: 'Your offline files have been uploaded successfully',
            icon: '/assets/images/icons/icon-192.png',
            badge: '/assets/images/icons/icon-192.png'
        });
    } catch (error) {
        console.error('Sync failed:', error);
    }
}

// Push notifications
self.addEventListener('push', (event) => {
    const options = {
        body: event.data.text(),
        icon: '/assets/images/icons/icon-192.png',
        badge: '/assets/images/icons/icon-192.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View',
                icon: '/assets/images/icons/icon-192.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/images/icons/icon-192.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Sanjai Portfolio', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Periodic background sync
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-content') {
        event.waitUntil(updateContent());
    }
});

async function updateContent() {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const keys = await cache.keys();
        
        for (const request of keys) {
            const response = await fetch(request);
            if (response.ok) {
                cache.put(request, response);
            }
        }
        
        console.log('Content updated successfully');
    } catch (error) {
        console.error('Content update failed:', error);
    }
}

// Helper functions for IndexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('OfflineSync', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('offlineFiles')) {
                db.createObjectStore('offlineFiles', { keyPath: 'id' });
            }
        };
    });
}

function getOfflineFiles(db) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['offlineFiles'], 'readonly');
        const store = transaction.objectStore('offlineFiles');
        const request = store.getAll();
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function markFileSynced(db, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['offlineFiles'], 'readwrite');
        const store = transaction.objectStore('offlineFiles');
        const request = store.delete(id);
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

async function uploadFile(file) {
    // Implement file upload logic
    console.log('Uploading file:', file);
}
