'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "032f886849dba168ad1221871ae893af",
"/": "032f886849dba168ad1221871ae893af",
"main.dart.js": "7833020efbaaeb8d18b8bbcb2d803cc6",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "28184e370240eb6fb8b1e5be6afe8356",
"assets/NOTICES": "5e17fdd1e46d9bf35b01cef4bc6d06c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "4552537dbccb872fd53a2084ab57c103",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8631d6312484b0e53f9c976ecab8c093",
"assets/fonts/MaterialIcons-Regular.otf": "2997cb0cf28980bb1ad673a038da02ef",
"assets/assets/svg/icon-phone.svg": "e1f2cf2a9ab0b7574fba3d4b3aacedc3",
"assets/assets/svg/icons8-youtube.svg": "2c047529b19c60a8b3d067d08df2ce48",
"assets/assets/svg/icon-design.svg": "a7b670ca766e02c561b2b5ca8e17ec41",
"assets/assets/svg/icon-quote.svg": "b2090abc9d08176ff998f7daa003dab7",
"assets/assets/svg/icon-photo.svg": "68642177370a7666c3f4071d83ebc2ce",
"assets/assets/svg/icons8-linkedin.svg": "de5fbed3689cfb760d0596b7df59d549",
"assets/assets/svg/icons8-facebook.svg": "0867656653e89cc53b75f5bf711d7128",
"assets/assets/svg/icons8-zalo.svg": "204090f946e3b3540cf5c3ac9302d694",
"assets/assets/svg/icon-dev.svg": "772f7e9763d8282ad7f28f19f28e2aec",
"assets/assets/svg/icons8-github.svg": "7267881cc04562b7b8b90a82f3178bd9",
"assets/assets/music/PINK_BLOOD.mp3": "d6fe641c976e9d5f71d1c30f640b6686",
"assets/assets/images/cd60b489047315.5de8bfb68125c.png": "8f3b17c8db5458a1ae1a333519ec7ca0",
"assets/assets/images/cover_wallpaper.jpg": "ab2fdd98f1fb9e308058b6b92924b132",
"assets/assets/images/cover_wallpaper_1.jpg": "d7ad715a9684571b704351d33c4e8a96",
"assets/assets/images/bg_1.webp": "e68527673b2044df224c869c9cdd525e",
"assets/assets/images/Img_error.png": "609b8670d829f1738735f3459e74e4f7",
"assets/assets/images/project/6_ckcsocial/8.jpg": "e32ec1167b464026566d5dadab6b735a",
"assets/assets/images/project/6_ckcsocial/9.jpg": "15d87ad829deaf93e206ced07fef004d",
"assets/assets/images/project/6_ckcsocial/10.jpg": "eeb5eebe42e74a821feae95dc77e208b",
"assets/assets/images/project/6_ckcsocial/4.jpg": "020fad32f5c0e1ddd74fc15c3e402e1f",
"assets/assets/images/project/6_ckcsocial/5.jpg": "f09bad1cab787aecf9a333334b7bba51",
"assets/assets/images/project/6_ckcsocial/7.jpg": "670e90425c28f896b6f78737fce194a8",
"assets/assets/images/project/6_ckcsocial/6.jpg": "8e5fcfad5af22523e73aff73fdeba864",
"assets/assets/images/project/6_ckcsocial/2.jpg": "99ca01753499c09fc892a7d9ff154c01",
"assets/assets/images/project/6_ckcsocial/3.jpg": "7afea959d52139216bee11e3f2ccc7d0",
"assets/assets/images/project/6_ckcsocial/1.png": "da65af411732b23c36f452ae37efb44f",
"assets/assets/images/project/myanime/1.webp": "860512cf06a75739320997a39b244ef8",
"assets/assets/images/project/5_getx_template/7.jpeg": "2dd0ec37363a795f6f667faeddaac517",
"assets/assets/images/project/5_getx_template/4.png": "0c7c78788baf00a4070723e1206752cd",
"assets/assets/images/project/5_getx_template/5.png": "debaccf4ca09c5e3d2d43856504b019f",
"assets/assets/images/project/5_getx_template/6.png": "bb1e0f8436229b347b88cceb904ce3c1",
"assets/assets/images/project/5_getx_template/2.png": "1d2a37d350fc335dc81ddcfdd4d92ece",
"assets/assets/images/project/5_getx_template/3.png": "cbc262590bd1eb08dae7fa409fd1670f",
"assets/assets/images/project/5_getx_template/1.png": "3d025f2eaada93af232f07d20bb7acef",
"assets/assets/images/project/0_snake_game_keylogger/4.png": "0ca777c407edb069b3583581bcbe36ef",
"assets/assets/images/project/0_snake_game_keylogger/5.png": "a9f08176905f500ee5a47203765094bc",
"assets/assets/images/project/0_snake_game_keylogger/2.png": "57c0094913a4528a74a26731d1c33e37",
"assets/assets/images/project/0_snake_game_keylogger/3.png": "3b83b700b4432e27b9ee5e48f0d1fa62",
"assets/assets/images/project/0_snake_game_keylogger/1.png": "863acc6693914b1a5b94fe756d1ba278",
"assets/assets/images/project/3_sort_manager_app/8.png": "99922ca00689bfd34516ad47a336139a",
"assets/assets/images/project/3_sort_manager_app/9.png": "f41a4deb5d5b92cfd46c95de4ee58838",
"assets/assets/images/project/3_sort_manager_app/11.png": "255033a714bb34f7ba1f69b5a7d23abd",
"assets/assets/images/project/3_sort_manager_app/10.png": "2524f835d642d04c6b5b51c64abf3dcc",
"assets/assets/images/project/3_sort_manager_app/4.png": "cc486efde0f7d50cc3d8a68ee605258d",
"assets/assets/images/project/3_sort_manager_app/5.png": "d6e80d15f7cb98c8e9e080cc9c0a7062",
"assets/assets/images/project/3_sort_manager_app/7.png": "09078e9c00f9260e3aa1dd58395356ad",
"assets/assets/images/project/3_sort_manager_app/6.png": "103ec210e02c564f9cb4f7a292b34fa6",
"assets/assets/images/project/3_sort_manager_app/2.png": "7ec23cadad14f85c4050bc31dc3883fd",
"assets/assets/images/project/3_sort_manager_app/3.png": "27e77429d1221868837800aba2dc764f",
"assets/assets/images/project/3_sort_manager_app/1.png": "bbf434e623c04dc3691d09718f79c468",
"assets/assets/images/project/1_winform_sale_manager/4.png": "39fc6d9ded2941c22ae9573d44104854",
"assets/assets/images/project/1_winform_sale_manager/5.png": "23be686eaf362a9e0018afe1b25e0806",
"assets/assets/images/project/1_winform_sale_manager/6.png": "b1007ebeddfa7e1a5e88975e939d4015",
"assets/assets/images/project/1_winform_sale_manager/2.png": "c19f5d43ba96405f9476220cda4556b8",
"assets/assets/images/project/1_winform_sale_manager/3.png": "9db494ea2ddd2cfcdfa781835e1cdccf",
"assets/assets/images/project/1_winform_sale_manager/1.png": "eb3a7d4addda6cab35ac3e0d03118bdb",
"assets/assets/images/project/2_ecommerce/flutter/8.png": "61ad146de8b7ee8ee1f066899d6be933",
"assets/assets/images/project/2_ecommerce/flutter/9.png": "10e01f2fb3e23c1dcdcd91c0d73f1d5e",
"assets/assets/images/project/2_ecommerce/flutter/12.png": "555813776f62112b30b22a75c81bb9e8",
"assets/assets/images/project/2_ecommerce/flutter/11.png": "fb549f167882d28a49fe7e0c0e46403e",
"assets/assets/images/project/2_ecommerce/flutter/10.png": "ac20167f5606d92b9d06d5fb8fb37860",
"assets/assets/images/project/2_ecommerce/flutter/4.png": "8f85220f4f774554cc0a6383c4179664",
"assets/assets/images/project/2_ecommerce/flutter/5.png": "2dbedc55c44df407501d7c23786a18a8",
"assets/assets/images/project/2_ecommerce/flutter/7.png": "e4088cf511f71be397b2237a56d073d1",
"assets/assets/images/project/2_ecommerce/flutter/6.png": "b36cc771cb09ec7e4ece05c472fc2139",
"assets/assets/images/project/2_ecommerce/flutter/2.png": "2e1a7bfb05dcbe2efd10ceadab443d07",
"assets/assets/images/project/2_ecommerce/flutter/3.png": "33ed74c03ef24b52584f08139cb2bb15",
"assets/assets/images/project/2_ecommerce/flutter/1.png": "80687d1cd5df1e956b80eb1bc543481d",
"assets/assets/images/project/2_ecommerce/laravel/8.png": "6cd6b6065775e4bbca4279484ba886d4",
"assets/assets/images/project/2_ecommerce/laravel/9.png": "af72ddb3fbce994239965d5c55f1cd5b",
"assets/assets/images/project/2_ecommerce/laravel/14.png": "840d257697a97fafc920a73b5915d869",
"assets/assets/images/project/2_ecommerce/laravel/12.png": "fe8f25d442608819429fd95823d4438d",
"assets/assets/images/project/2_ecommerce/laravel/13.png": "24a25fe72e02bf24821bf7ad6757a3f9",
"assets/assets/images/project/2_ecommerce/laravel/11.png": "881beb992a31e4a772ac8845b231a9e3",
"assets/assets/images/project/2_ecommerce/laravel/10.png": "e9cd5864068d730002ac5cd9b4f44296",
"assets/assets/images/project/2_ecommerce/laravel/4.png": "46f514451af023cb1728a30ced1a0252",
"assets/assets/images/project/2_ecommerce/laravel/5.png": "41f780b5005d7cb2ef5d6ee0ad3933fe",
"assets/assets/images/project/2_ecommerce/laravel/7.png": "c6177bc03a8f351691dd3cadea391349",
"assets/assets/images/project/2_ecommerce/laravel/6.png": "84abc1d7dce1db86798b8091bd815b0f",
"assets/assets/images/project/2_ecommerce/laravel/2.png": "70c5c6f9c4df1ac93fa54ff6cb781045",
"assets/assets/images/project/2_ecommerce/laravel/3.png": "f373fc10482af5d739c18b1b12988235",
"assets/assets/images/project/2_ecommerce/laravel/1.png": "70c6e57406f245b22469831156fea259",
"assets/assets/images/project/4_experterp_gmc/diagram/2.jpg": "40f1460e81c022cdf3770e37617c768f",
"assets/assets/images/project/4_experterp_gmc/diagram/3.jpg": "eaf11838a848ddb8e34998543551e7f1",
"assets/assets/images/project/4_experterp_gmc/diagram/1.jpg": "eb9050788c50293210868ce9c458ec82",
"assets/assets/images/project/4_experterp_gmc/crud/Logo_ExpertERP_48x48.png": "70f6987709783507a36ff59ff01da210",
"assets/assets/images/project/4_experterp_gmc/customize/1.mp4": "edf70ef2692c1e993e85ab7388e45f46",
"assets/assets/images/avatar.jpg": "93910e964345d4ba3ab8a74989a48a1e",
"assets/assets/images/59c40a134633419.61d95916e2702.png": "19d25630d6cb40672ac508798a8c0d34",
"assets/assets/images/background-3.png": "d3046e8e606ac8e61b48aa2bc9b25afc",
"assets/assets/translations/ja-JP.json": "0f3f73219b0bbc88ee5ea583817973cd",
"assets/assets/translations/en-US.json": "cb80bf5b6924f2eed8f83c2c6aade4d0",
"assets/assets/translations/vi-VN.json": "73c3cf526b7dfbd5aec4e693a55a66c2",
"assets/assets/gif/4b4.gif": "6546ebccb8ee02750919f7959ef21fce",
"assets/assets/gif/icons8-messenger.gif": "eb33440c19f9162e032b7b9579db417e",
"assets/assets/gif/icons8-fire.gif": "8a58c0f27c9d98ce8676704c2fb98d19",
"assets/assets/gif/icons8-mail.gif": "55f685ccd3d1208b79ed83fde4777924",
"assets/assets/gif/plant.gif": "4a47dd502428932e39ee5003235c57f4",
"assets/assets/gif/1e3e3738d81b9db4f6b6505b236a996a.gif": "ed17b4b9941668992bf9e97bd444e720",
"assets/assets/gif/icons8-task-completed.gif": "cf639d38e8ab4da9390f5973544da565",
"assets/assets/gif/sparkler.gif": "70e3a4d156bc33fe7ce7ba034a1bd0a4",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
