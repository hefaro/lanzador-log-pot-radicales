const cacheName = 'mathsuite-v1';
const assets = [
  '/',
  '/index.html',
  '/bienvenida.html',
  '/potenciacion.html',
  '/radicacion.html',
  '/logaritmos.html',
  '/mixto.html',
  '/style.css',
  '/motor.js',
  '/banco_datos.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});