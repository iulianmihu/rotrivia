const cacheName = 'rotrivia-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './events.js',
  './DragDropTouch.min.js',
  './imagini/clasa9.jpg',
  './imagini/clasa10.jpg',
  './imagini/clasa11.jpg',
  './imagini/clasa12.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});