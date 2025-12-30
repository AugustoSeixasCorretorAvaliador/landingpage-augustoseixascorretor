// sw.js — service worker mínimo
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

// Listener vazio só para o Chrome marcar como PWA completo
self.addEventListener('fetch', () => {});