'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "9dfa60c42bbde91db9c3e9064a300998",
"manifest.json": "56b51c63ee49bd11a9bbd7f67e68a6b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "4bab770f3bb71609f347ba3346265d65",
"assets/NOTICES": "669e54bb1c33060168f743efc6a4b5e3",
"assets/AssetManifest.json": "31c9643be60611e7cd72b52429eb131b",
"assets/assets/fonts/seguisb.ttf": "bc74928e0b7d13379ccf0b39354e87ad",
"assets/assets/fonts/seguili.ttf": "5989bb884027d397cf27a15c18c26b95",
"assets/assets/fonts/segoeui.ttf": "d9076ed73f2501090da92fe3c72d3ce6",
"assets/assets/fonts/seguisbi.ttf": "3f0b609427347ed7f9d60c8c2f0b2e14",
"assets/assets/fonts/segoeuib.ttf": "299556cecd6b730bce8230f529e837a1",
"assets/assets/fonts/segoeuisl.ttf": "426088e434f43481b24859270171b906",
"assets/assets/fonts/seguibl.ttf": "868d9468768f1660600f840e3b864815",
"assets/assets/fonts/segoeuiz.ttf": "cb53f8068af6572a9ad4cc3c9a226704",
"assets/assets/fonts/segoeuil.ttf": "d44929d62a49114d494d1768893fcdf7",
"assets/assets/fonts/seguibli.ttf": "38b35433147fc7e2b286919b5cb8854e",
"assets/assets/fonts/segoeuii.ttf": "ac2711bc5bf8d5883fc4091ac738a19a",
"assets/assets/fonts/seguisli.ttf": "3b10d164be87745d556fddfb792096cd",
"assets/assets/images/shopping-basket.png": "afc49849be22c1cea20dbc6a3e4128a4",
"assets/assets/images/pate.jpg": "8b6d34851b4019d3a5a11659b29739ea",
"assets/assets/images/entree-froide-salade.jpg": "c610deb3234b605f150812c490ff345c",
"assets/assets/images/logo_normal.png": "64ac22b8a3604c4b1797ab3b003f1af4",
"assets/assets/images/icon-minus.png": "d7f9dac00ad3da63c8d14c59bbff927e",
"assets/assets/images/entrees_froides/salade%2520big%2520faim.jpg": "2fa18870f9ac6cdcb918e4bdfb7cc320",
"assets/assets/images/entrees_froides/salade%2520exotique.jpeg": "c47acb42c4475a629cf7e50b7454dcd0",
"assets/assets/images/entrees_froides/salade_nicoise.jpg": "f3313c8d4d292f57e5d581c992f9ca7b",
"assets/assets/images/entrees_froides/salade%2520improvis%25C3%25A9e.jpg": "c0eb9891339eadc5107eb73337388edf",
"assets/assets/images/entrees_froides/salade%2520cesar.png": "42bd61751b590bc0129f98bcabe63072",
"assets/assets/images/entrees_froides/salade-piemontaise.jpg": "9aa0bc13c9827b8a6f5f9f7e657b4080",
"assets/assets/images/logo-trait.png": "9fb5de7cc509d995eecaf5b1e2e6a775",
"assets/assets/images/icon-plus.png": "14a564807272921e103d2e354fc74316",
"assets/assets/images/bg.jpg": "f588ba265a9eeaa8d3c379b06e7ed320",
"assets/assets/images/icon-pakka_coudou.png": "9864765c8b4e54d84a7b5bdcd1602251",
"assets/assets/images/3.png": "ffe0eedad91ab1dc245c26863f0016c7",
"assets/assets/images/poisson/poisson_du_jour.jpg": "b9890e6407c72b0c8dbaf120653bb627",
"assets/assets/images/poisson/yassa_poisson.jpeg": "e5c482941dc8a3a291fecc9949c926eb",
"assets/assets/images/poisson/lotte_en_filet.jpeg": "369b7d7dc114c771c7205d94fe363a9c",
"assets/assets/images/poisson/poelee_sole.jpg": "5e024840c5f46bd8dae0d95374a1f7b5",
"assets/assets/images/poisson/grillade_daurade.jpg": "7e948cbd5e3c0db01aeea2cfcbf98f89",
"assets/assets/images/crepe.jpg": "254e8eb10a591c28baac7580698543dc",
"assets/assets/images/entreechaude.jpg": "695c7014962596d6a2f5bd487f6ce997",
"assets/assets/images/entrees_chaudes/aileron_de_poulet_pane.jpg": "c3d4aeca7f68423d0c5c99f0cb470fcb",
"assets/assets/images/entrees_chaudes/nems_au_poulet.jpg": "b0596c28227cfc19250006a29ebe9622",
"assets/assets/images/entrees_chaudes/poelee_de_crevettes.jpeg": "6e7d9d2ab1a9aa3d73fbdb6ade7f1c3a",
"assets/assets/images/entrees_chaudes/gratin_de_fruits_de_mer.jpeg": "5d10862c2325159ab1750342cbe3e8c0",
"assets/assets/images/entrees_chaudes/salade_de_chevre.jpg": "bbf8ba954b861bf54d4db4420a562809",
"assets/assets/images/1.png": "eb96b65308a8da6f889fd7d76c1892ab",
"assets/assets/images/volaille.png": "cec4ca98c91421be3f14d969ac451594",
"assets/assets/images/volaille/Duo_de_poulet_et_crevettes.jpg": "cdc9cdd5a11c22d855694794ae676309",
"assets/assets/images/volaille/dibi_poulet.jpg": "cca14d8548ace987e945e12923bc7559",
"assets/assets/images/volaille/demi_poulet_roti.jpeg": "569c9def7a89a27e5fcb489be16047b5",
"assets/assets/images/volaille/poulet_entier_roti.jpg": "fbac7532e37da9487b01ed413a3e7c18",
"assets/assets/images/volaille/poulet_wok.jpg": "bb3efcdef9122581d664b591affa1271",
"assets/assets/images/volaille/escaloppe_poulet.jpeg": "6b72bff472c285027ea85f276df04a82",
"assets/assets/images/volaille/burger.jpeg": "9e05561253b1358d47bb356d7df9d8c5",
"assets/assets/images/volaille/curry_express.jpg": "264f3971127b8a292d49406ef928dc31",
"assets/assets/images/volaille/yassa_poulet.jpeg": "8c872a099b5cd79ed5cbfd3ad9bf8bde",
"assets/assets/images/2.png": "bac7ef69944f39c1118e03bca9b73bb4",
"assets/assets/images/cercle.png": "84418c5c6c847bada1b66ddaa3554e27",
"assets/assets/images/5.png": "96158b765dec9872ac821243f9afdd89",
"assets/assets/images/Icon%2520feather-plus-square.png": "041ad79d2570f010fc8e75718caf66b7",
"assets/assets/images/Icon%2520feather-minus-square.png": "509f9010584131eb4b16ceb6683cbfcb",
"assets/assets/images/crepes/crepe_vegetarienne.jpg": "f18f0135611f80548cab1f6a32906034",
"assets/assets/images/crepes/crepe_parisienne.jpg": "a8137df6ba7cd1da54c124efecc30b9f",
"assets/assets/images/crepes/crepe.jpg": "a803b39fe2f27bb927c261c89d69e077",
"assets/assets/images/crepes/crepe_atlantique.jpeg": "42cba8a358a290fe8ad421bdedfd7948",
"assets/assets/images/crepes/crepe_bolognaise.jpg": "601ca05e6ef288af2dfb0465404def71",
"assets/assets/images/poisson.jpg": "7340aeabc0c72336a104d96804b711e4",
"assets/assets/images/4.png": "f3f6f40cf97acfce63a238254a0fefb0",
"assets/assets/images/Icon%2520awesome-shopping-basket.png": "9bd1c49af8d2c4a4104d4cb41dd7c4d7",
"assets/assets/images/pates/pate_fruit_mer.jpg": "42f8729bbbf2bb3f24d6e060481b237b",
"assets/assets/images/pates/tagliatelle.jpg": "5ebbb5d2870efe74b7e9c8dfc28b3660",
"assets/assets/images/pates/penne_arrabiata.jpg": "64a59e1bb645f52af07525a60b45bb53",
"assets/assets/images/pates/spaghettis_bolognaise.jpeg": "8539a7d4a866277dabf569ddbe81b244",
"assets/assets/images/pates/gratin_penne_poulet.jpeg": "c4b43047dcaa7a137b2abf064a672c28",
"assets/assets/images/logo.png": "6f7a2ee4211b878b4dced0b5dc70bf92",
"version.json": "af7ed3ad1d446cdff2a932efa0a242aa",
"index.html": "a661e82df23372a684ecc1ab7134285e",
"/": "a661e82df23372a684ecc1ab7134285e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
