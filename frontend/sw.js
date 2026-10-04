// Service worker de Plume : il garde une copie des fichiers
// pour que l'application s'ouvre même sans connexion (dans le RER).

// Change ce numéro à chaque nouvelle version des fichiers.
const CACHE = "plume-v5";

const FICHIERS = [
  "./", "index.html", "connexion.html", "app.html",
  "css/styles.css",
  "js/lucide.min.js", "js/marked.min.js", "js/plume-data.js", "js/plume-app.js",
  "manifest.webmanifest", "icons/icon.svg",
];

// 1. Installation : on enregistre tous les fichiers dans le cache.
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)));
  self.skipWaiting();
});

// 2. Activation : on supprime les anciens caches.
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((noms) =>
      Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

// 3. Chaque requête : on essaie le réseau d'abord,
//    et si on est hors ligne, on prend la copie du cache.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((rep) => {
        const copie = rep.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copie));
        return rep;
      })
      .catch(() => caches.match(e.request))
  );
});
