'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9afe78dcf8043550a826aedc94cd22b1",
"assets/assets/fonts/OpenSans-Bold.ttf": "d0d2737060b43dd07326a00e97bf4ee6",
"assets/assets/fonts/OpenSans-Regular.ttf": "ebe0fbcd13a1e4b1cea24fa992f28fbb",
"assets/assets/images/login/bottom.svg": "b78d561f9f6d0bb88050f68e5bd8141f",
"assets/assets/images/login/cloud.svg": "188e220d661573e4286b1ae8fc1e0ec8",
"assets/assets/images/login/flag.png": "fd9f0a7979f354c5fdfac2234e13e330",
"assets/assets/images/login/sun.svg": "14e8a787eacde92a3439972969f1aa3c",
"assets/assets/images/login/sun_cloud.svg": "0141ecf002cde8f569566925a7fd20e5",
"assets/assets/video/adlcp_rootv1p2.xsd": "d574ff030bbb0217dfab6a9c0e7a7795",
"assets/assets/video/analytics-frame.html": "720f8fd109feb2d463d8870da8d58c54",
"assets/assets/video/html5/data/css/output.min.css": "331839e7f7ba55ef1300290712fad1ce",
"assets/assets/video/html5/data/js/5oixPKAtAmK.js": "675c41d7a884f920023b9b91cbc4c00e",
"assets/assets/video/html5/data/js/5p73VMI39oW.js": "e8d9553cefe05bab7bfb58e99625eb17",
"assets/assets/video/html5/data/js/5x3V1IGWxmN.js": "ffc19b0ec8cdb1947a7aab1a5b5a1f11",
"assets/assets/video/html5/data/js/6gC5lf1cCRN.js": "cd71421f7d5f43bd5ed68c854e752605",
"assets/assets/video/html5/data/js/6JPWdxDlDve.js": "e8e04354cc72201e1c84f0e0f486401b",
"assets/assets/video/html5/data/js/6kdNMgRsF3W.js": "2c8f58d4e01828eecaa5f7900ded56a8",
"assets/assets/video/html5/data/js/6PrgB04uVzm.js": "0ec876c1c2c65f7b151690ecd5ace288",
"assets/assets/video/html5/data/js/6pUME6IZbjq.js": "3c2086a356ba5d9f71bec038200d02f9",
"assets/assets/video/html5/data/js/data.js": "411bfdddf9aeef7c62884073d16288e1",
"assets/assets/video/html5/data/js/frame.js": "e250b9f1559365e99aca15321d2d1750",
"assets/assets/video/html5/data/js/paths.js": "b4e45c267c940083686f6258c038d833",
"assets/assets/video/html5/lib/scripts/ds-bootstrap.min.js": "864fa9ffa6fac7c1b7cd2c1f92899b31",
"assets/assets/video/html5/lib/scripts/ds-frame.desktop.min.js": "acf70b7ec9db34e4f54be4618934e38a",
"assets/assets/video/html5/lib/scripts/ds-frame.mobile.min.js": "77f6660e57ae296e8c1df60b85ceeb7f",
"assets/assets/video/html5/lib/scripts/ds-slides.min.js": "e607cb2f794fd6bed98a46ab978638ec",
"assets/assets/video/html5/lib/stylesheets/desktop.min.css": "13be119fe247ee09311c7863d3e50b43",
"assets/assets/video/html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff": "72862e7cf19603ad24f26baf86dd0e08",
"assets/assets/video/html5/lib/stylesheets/mobile-fonts/open-sans-light.woff": "0d0d7107450f05b72a4507d0d7687dd1",
"assets/assets/video/html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff": "ce659615885f33d928eb7fe276574106",
"assets/assets/video/html5/lib/stylesheets/mobile.min.css": "e5a45851c29b42c1e2739293670625b6",
"assets/assets/video/imscp_rootv1p1p2.xsd": "ee6cf8dbdd91e8fdbb6b1aade679a315",
"assets/assets/video/imsmanifest.xml": "98f70774682a21670d8420ff08f64615",
"assets/assets/video/imsmd_rootv1p2p1.xsd": "5930c9d69201ba90900e759e2f8324bc",
"assets/assets/video/ims_xml.xsd": "89055bb2e625a93f60009de29d2b0e76",
"assets/assets/video/index_lms.html": "16dba860c7ed3386592939bf4e5f2731",
"assets/assets/video/lms/AICCComm.html": "9077c47325e1f42a27c0ee5b8f9f699a",
"assets/assets/video/lms/blank.html": "c35b4a8f5cf2e1698d7a6c3e4538bc16",
"assets/assets/video/lms/browsersniff.js": "e7efe9a9b85b56b49bb003179874d8e1",
"assets/assets/video/lms/goodbye.html": "c39444ad0d0b06b1816d6b8ed4e390a0",
"assets/assets/video/lms/scormdriver.js": "c3db8a4532c1befc4860b2e32f48e880",
"assets/assets/video/meta.xml": "15cf76a9fbe42e4bae086894f01ca5b5",
"assets/assets/video/mobile/5gUMURWpZFb_75_DX1600_DY1600_CX1061_CY900.png": "37eaf775563b015cf8409593046b452c",
"assets/assets/video/mobile/5kCeJoscxgK_75_DX118_DY118_CX88_CY72.png": "849145e7123616e5c58c84fed2ce53b5",
"assets/assets/video/mobile/5wocLIlouUd_75_DX1600_DY1600_CX1199_CY850.jpg": "f40329f8e82954bd4efbc3c29814ad14",
"assets/assets/video/mobile/62R4e7PHyf7_75_DX316_DY316_CX158_CY138.png": "b041f8a2884b11f1d190603a968476f3",
"assets/assets/video/mobile/6aDunM2pRtb_75_DX452_DY452_CX316_CY329.png": "71893bc8c52676294f3aaa59137dd36f",
"assets/assets/video/mobile/6CiTL1aVMUp_75_DX1600_DY1600_CX1060_CY900.png": "04b29733e140d2d883d0ce5b590ce158",
"assets/assets/video/mobile/6GdtuhCPClW_75_DX128_DY128_CX64_CY64.png": "6f84c506a0f5b06fb941529db9a85a8e",
"assets/assets/video/mobile/6gTvtY5aoo5_75_DX1600_DY1600_CX960_CY640.jpg": "18f7f8082bdcada05da7cd1f2dd87594",
"assets/assets/video/mobile/6gv3jFxVAYd_75_DX520_DY520_CX390_CY287.png": "831cb475c1d1a547529054f8fe04e7a8",
"assets/assets/video/mobile/6IYTxjK6YJQ_75_DX1600_DY1600_CX1060_CY900.png": "260fd6907b41832d7014de40ceedc2a0",
"assets/assets/video/mobile/6JkDarhnuLg_75_DX1600_DY1600_CX1060_CY900.png": "f734bbdb8e14e9b12ff8c36035c66722",
"assets/assets/video/mobile/6lorSCgBll2_75_DX1600_DY1600_CX1061_CY900.png": "3fc697e38ab4436a113ec3a191d6e8bb",
"assets/assets/video/mobile/6nERnGThpII_75_DX422_DY422_CX316_CY314.png": "4e35907ea091e2321364f47493d0f325",
"assets/assets/video/mobile/6p3dzW3HzHo_75_DX1600_DY1600_CX1061_CY900.png": "df14030899b189c84cdd79f2419cff40",
"assets/assets/video/mobile/6YfQQVwjof7_75_DX438_DY438_CX269_CY226.png": "5287874a8dfb2300751a6404d018ad96",
"assets/assets/video/story.html": "bff1d066714a7f935b432f2cfabd915f",
"assets/assets/video/story_content/5dB7kO1zlPO_44100_48_1.mp3": "bb1460d997f89e9c9cd1ea8e21967d62",
"assets/assets/video/story_content/5dTTyycbQkR_44100_48_1.mp3": "79e96091b8cee9f862c48110591fc1db",
"assets/assets/video/story_content/5pIsmNPFR62_44100_48_1.mp3": "6d66f38ec7e7e7df7e30ae691450ea60",
"assets/assets/video/story_content/5yEYWzJwEEI_44100_48_1.mp3": "6355ae0feee6c0461515178a2b6667c2",
"assets/assets/video/story_content/61GMbjQsmTa_44100_48_1.mp3": "1e9811abd4792a5f97cc9f0cd8573069",
"assets/assets/video/story_content/6Elmkn12bIi_44100_48_1.mp3": "f4c6d6071026f60e4545cf2c2215cc88",
"assets/assets/video/story_content/6gjapsGu8gk_44100_48_1.mp3": "a112b2049956d9b1e5b643b864e1da4f",
"assets/assets/video/story_content/6gKkkCR3uPW_44100_48_1.mp3": "4452f7c23ba75340434c5d3119bbd818",
"assets/assets/video/story_content/6iQcQWsRu7A_44100_48_1.mp3": "11396003b27cfec3e8ba36a08bd8d9e3",
"assets/assets/video/story_content/6J76vJNcxRi_44100_48_1.mp3": "81728935cdae0b9a85ba7ccf4a8c4041",
"assets/assets/video/story_content/6LfG9kyXNsk_44100_48_1.mp3": "cc7de5e328299f98db1288b83e162956",
"assets/assets/video/story_content/6NTkmqDPWJI_44100_48_1.mp3": "5233d6661c692329f75579dd36bc2a3f",
"assets/assets/video/story_content/6XkDKK8kAnb_44100_48_1.mp3": "de07d3cde71de4bc19d9c2239c4588da",
"assets/assets/video/story_content/thumbnail.jpg": "755416458ec63bd35572528b280a171c",
"assets/assets/video/story_content/user.js": "a85671704f0073177c1110ad8d5ff5ae",
"assets/FontManifest.json": "d1310609ef8a2b4d1ebe9c3fea09925d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7b999cdf164fda64c531ccd4fb48186c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c89a86a41a84abb816cc52ca4f3bc17",
"/": "8c89a86a41a84abb816cc52ca4f3bc17",
"main.dart.js": "46014c5c4ad258c021ce5582df2e7d2f",
"manifest.json": "f472c1d434dc55b1c1caee874de69ebc",
"version.json": "601b0f77c34b80d62359d81c84ee1216"
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
