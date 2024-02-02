'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cbaf0ecbfbae241de30d7babd63f7020",
"assets/AssetManifest.json": "4fdf78d300e2ecc656d12758a01cc8b7",
"assets/assets/demo_data/candles_response_example.json": "10705353f3b35aadf34b4ef37f977072",
"assets/assets/fonts/icons/HermitageIcons.ttf": "f4581e040e828540f72c232500ac58fe",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Black.otf": "f180bcab9705cb31acf307493e48e659",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Bold.otf": "01a151b865c124f88ef147e5592bae76",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Medium.otf": "fb9b9cc0d18e37d34fee679aa55d7f3f",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Regular.otf": "5810cdf5bc7db8d0090a6c46890ee33b",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Semibold.otf": "e570ec818d03840bfd5072c83deb1b21",
"assets/assets/images/app_icon_development.png": "401530d3b5afd66bd3dc882c2d2a2856",
"assets/assets/images/app_icon_production.png": "eca718a4749d7411de85b1c5df041945",
"assets/assets/images/app_intro/img_onboarding_step_1.png": "30c8ed30dfb2b7488c9794a3dc0e7dd9",
"assets/assets/images/app_intro/img_onboarding_step_2.png": "8f0a6958e2589e1eea150f20a9516fda",
"assets/assets/images/app_intro/img_onboarding_step_3.png": "ecc975a17fc9a3df93c134de25b3c088",
"assets/assets/images/app_intro/img_onboarding_step_4.png": "420a0bfb1f4395943872803ded74a2b5",
"assets/assets/images/illustrations/congratulations.png": "4b94a250a6589e777346a16a7819a9e3",
"assets/assets/images/illustrations/study.png": "3f125c3092672b1d65a77a1672734b6f",
"assets/assets/images/img_lhermitage_logo.png": "48162e1d453246106a9c3e5b03daf26a",
"assets/assets/images/img_phone_pincode_error.png": "3507cb927131d43fd74a943b2e12ddb6",
"assets/assets/images/img_rosbank_evo_logo.png": "5112cf4d713a64c923072848b4d8d10a",
"assets/assets/images/img_rosbank_invest_logo.png": "7188bc3387600f0cf985de89a7be7007",
"assets/assets/images/img_rosbank_invest_logo_light.png": "86e49631cc607d23815252a262375e5b",
"assets/assets/images/img_rosbank_invest_logo_splash.png": "79da41d8663667aa90b6e940770d8254",
"assets/assets/images/img_rosbank_invest_logo_splash_light.png": "cefa8b271684ec79d138b718765c8972",
"assets/assets/images/img_splash_background.png": "2b475ff8bc9b4119738c48e7fe9d7908",
"assets/assets/images/img_splash_background_dark.png": "a19300be9be252960df975222a7a80c0",
"assets/assets/images/img_splash_error_background.png": "09b36f62fce9c0d69d17a613570dd703",
"assets/assets/images/img_suit_person.png": "42e239d67fb73b635544223d23bfe8de",
"assets/assets/images/img_withdrawal_icon.png": "1430f161bdf89f8f8fdeba695254223e",
"assets/assets/images/pwa_ios_install/change_name.png": "9fc0875068ed68f08e8a55d1b00440fd",
"assets/assets/images/pwa_ios_install/to_home.png": "1c96ec50ffe7a260ab8169ba1cfb1c8b",
"assets/assets/rive/rive_bell.riv": "090fb42b5fac9552e7f46f8654909a73",
"assets/assets/rive/rive_loader.riv": "6cb602e39280c6a4891a5167d205feb9",
"assets/assets/svg/icons/ic_add.svg": "2f3b44f9107cd45b8f92079d64bae61a",
"assets/assets/svg/icons/ic_arrow_down.svg": "dec947a4042c77b4e079f7248c5b6c32",
"assets/assets/svg/icons/ic_asc_sort.svg": "d21e8edaff9974a9f5edcc2fed317ac3",
"assets/assets/svg/icons/ic_attach.svg": "a403f1efe50ebc060cf26ff9a2356346",
"assets/assets/svg/icons/ic_back_arrow.svg": "dde40c8c82446af256a79bfa088ca9cb",
"assets/assets/svg/icons/ic_back_arrow_long.svg": "f7695bc7907be669611b7cbfa5c83551",
"assets/assets/svg/icons/ic_bell.svg": "93a03b79b999a420cae438efe112c1bf",
"assets/assets/svg/icons/ic_bell_filled.svg": "57cf461467e066a0777d116f4be7f7b4",
"assets/assets/svg/icons/ic_bookmark.svg": "6882b06de2510f81d8dc97d06589cbcf",
"assets/assets/svg/icons/ic_bookmarks_filler.svg": "6cdfe13bb628e1f55875b04727983b55",
"assets/assets/svg/icons/ic_calendar.svg": "1b535a0527c26e61df855215c9322751",
"assets/assets/svg/icons/ic_candle.svg": "86ff4dedb7125703822564a3c83d322f",
"assets/assets/svg/icons/ic_check.svg": "83cd164aae951913a18e8764f4f43313",
"assets/assets/svg/icons/ic_chevron_left.svg": "874760b9c6bad9754b574f65876e3dcc",
"assets/assets/svg/icons/ic_chevron_right.svg": "d4b9331267f864a262bec31a416b1a3c",
"assets/assets/svg/icons/ic_chevron_up.svg": "915c561084fc3c18480cd0a30a88ea25",
"assets/assets/svg/icons/ic_clock_hands.svg": "602ab238f654601c295477bb0d0675df",
"assets/assets/svg/icons/ic_close.svg": "71fa2efc0afe9804bacfaa348333628c",
"assets/assets/svg/icons/ic_content_copy.svg": "46be367127fd374a63cd6c72953dc016",
"assets/assets/svg/icons/ic_delete.svg": "2c93c3a84a00b4ba959e19a8fa6ead17",
"assets/assets/svg/icons/ic_desc_sort.svg": "58e21344e61ce824c1da6f520050039e",
"assets/assets/svg/icons/ic_diplomat.svg": "75a36e481b0ade65170b479d1217d381",
"assets/assets/svg/icons/ic_doc.svg": "3fd4aa11271c5f21f0b2c3c7af8b25a8",
"assets/assets/svg/icons/ic_doc_arrow_down.svg": "639771363206673afbfe0774c610b2a4",
"assets/assets/svg/icons/ic_doc_arrow_up.svg": "1023306f7f380955a35ffaaa35639e8d",
"assets/assets/svg/icons/ic_doc_old.svg": "317d136b84be4bf98f4825bf2eb8b4e1",
"assets/assets/svg/icons/ic_down.svg": "faecb1b21af9ab666ada56d9c56a6124",
"assets/assets/svg/icons/ic_empty_sheet.svg": "f20ad7d09a9301f2afd9026f50038d44",
"assets/assets/svg/icons/ic_exit.svg": "109cc4ba74098e0466b3ec59a5ba871c",
"assets/assets/svg/icons/ic_export.svg": "734ccd09a955a006718bbf64769f7c56",
"assets/assets/svg/icons/ic_face_id.svg": "cf5cbf7104e5fb384cbdeccfc88cb49d",
"assets/assets/svg/icons/ic_fingerprint.svg": "796c5233c57322d4a78a70dd2ddf4256",
"assets/assets/svg/icons/ic_format_list_bulleted.svg": "aa3df8883d3f5ad16bb33e3e937ddbbc",
"assets/assets/svg/icons/ic_graph_line.svg": "719fa9b9ac8332ecc302a48cd9476ce9",
"assets/assets/svg/icons/ic_info_circle.svg": "39ca09accb9d0bc238de5de290b91f8e",
"assets/assets/svg/icons/ic_ios_share.svg": "14cb558225560322de74a5bf2ae1d725",
"assets/assets/svg/icons/ic_key.svg": "fd0a3bf1b5414b8ce4d3f73d0545afbc",
"assets/assets/svg/icons/ic_lock.svg": "1607fdfcb7ade0ccddae1d9f5d46f8ef",
"assets/assets/svg/icons/ic_medal.svg": "e7f39c4e55f7bd4032374cfe3b7eb02a",
"assets/assets/svg/icons/ic_medal_outline.svg": "238b7b99d19fdd5b35a9a5766a8d46c2",
"assets/assets/svg/icons/ic_minus.svg": "17a19c5e4daa392263b4ad149c6f143e",
"assets/assets/svg/icons/ic_money_in.svg": "bacc8d398059c3eff36cc932411ccd44",
"assets/assets/svg/icons/ic_money_out.svg": "e90ea4605d952823edeb528a9960d803",
"assets/assets/svg/icons/ic_money_out_old.svg": "b14219fa6d8ec35ffe495a599e75f1d0",
"assets/assets/svg/icons/ic_more.svg": "70437bca0dbcb24ef81f551b96565ca8",
"assets/assets/svg/icons/ic_news.svg": "01299401f868e5d3526b14225802454d",
"assets/assets/svg/icons/ic_news_filler.svg": "536a158950d3f69c65bf836eb517bb67",
"assets/assets/svg/icons/ic_open_in_new.svg": "1ae759f3944f1f609a7baa34d5fe8bb3",
"assets/assets/svg/icons/ic_person.svg": "c1881f470d735908307d6cb9ce5bff25",
"assets/assets/svg/icons/ic_phone.svg": "2f875c91e6db2261ff1cc8ce0a173ce6",
"assets/assets/svg/icons/ic_plus.svg": "06f3999a867b41bffe9f0207b2a5a07c",
"assets/assets/svg/icons/ic_pwa_install.svg": "7cb48371c4029e00dfcefcc87b55cda6",
"assets/assets/svg/icons/ic_question_mark.svg": "b8c185928f0a8d627c7eb700e23cf663",
"assets/assets/svg/icons/ic_quotes.svg": "5a16304d309444bf1a3b40ce8006e720",
"assets/assets/svg/icons/ic_report.svg": "4325757c75f180c5ab972280a33da6e5",
"assets/assets/svg/icons/ic_requisites.svg": "c64695c33d03c7993d9c9d8fd819ece8",
"assets/assets/svg/icons/ic_search.svg": "12b4fb18073c8a6acc98c522ddb70af6",
"assets/assets/svg/icons/ic_settings.svg": "3bb78ecfa940cf14964a5c724ea5f824",
"assets/assets/svg/icons/ic_small_chevron_down.svg": "dd3497928d67346935107f0ef2fa8fe6",
"assets/assets/svg/icons/ic_speech_balloons.svg": "58bc3ccffd18415d75c652f2fa72d69e",
"assets/assets/svg/icons/ic_star_filled.svg": "241d99c9816784a7d64d384a7a556ac5",
"assets/assets/svg/icons/ic_star_outlined.svg": "cfbf4e87d177501f3a5b60220c984032",
"assets/assets/svg/icons/ic_star_sharp_filled.svg": "572bf0b52ac42191a1bd4362c4d14ec2",
"assets/assets/svg/icons/ic_story_close.svg": "931fbdf7bf5ba2c52208fde143124c59",
"assets/assets/svg/icons/ic_trash.svg": "b59483fab2502e72aca9f6daa668546e",
"assets/assets/svg/icons/ic_up.svg": "5e75b6e578b733ae1764e593a1a8252d",
"assets/assets/svg/icons/ic_wallet.svg": "092f1e5429e810beb22f0a6ec4a43f5b",
"assets/assets/svg/illustrations/ill_app_locked.svg": "0c7fcd2735579f9de931ff281815e12b",
"assets/assets/svg/illustrations/ill_arrival_money.svg": "cb1ef306d6f44cd442f26a5511064931",
"assets/assets/svg/illustrations/ill_blue_certificate.svg": "ea8ec511377da91c421e2613f6f3d1e6",
"assets/assets/svg/illustrations/ill_checkbox_empty.svg": "6f736ef0a1418f7601af9c00e852087f",
"assets/assets/svg/illustrations/ill_checkbox_filled.svg": "bdfbb696f4b7978b1109a17931f4b9e2",
"assets/assets/svg/illustrations/ill_clock.svg": "7fbf234f2e5a665084f8e59162176990",
"assets/assets/svg/illustrations/ill_cloud_warning.svg": "d266f6025e08df2e273ba81c54b172f8",
"assets/assets/svg/illustrations/ill_completed_form.svg": "ab022ea7e0b873dafe5684642236d13e",
"assets/assets/svg/illustrations/ill_document_failure.svg": "9aaeee79e016238c0a52d019c481114f",
"assets/assets/svg/illustrations/ill_error_cross.svg": "48f38cd5289a60213f7487015003d022",
"assets/assets/svg/illustrations/ill_gears.svg": "572ea118d214b2f175a0a776fa82ddc7",
"assets/assets/svg/illustrations/ill_internet_error.svg": "182debe40319bea91709fdfbe3bcd74a",
"assets/assets/svg/illustrations/ill_logo_rb_short.svg": "635e6f39b821abc093adbdd94048518e",
"assets/assets/svg/illustrations/ill_onboarding_18.svg": "b7b0ef2bd44327e09434c82560a4e7f8",
"assets/assets/svg/illustrations/ill_onboarding_18_dark.svg": "7ea24d320368016ab1aace558ebcba70",
"assets/assets/svg/illustrations/ill_onboarding_clock.svg": "ebd76f9d1aee967b60ee59938bebc9d1",
"assets/assets/svg/illustrations/ill_onboarding_clock_dark.svg": "584b14541659327f582405842c67a529",
"assets/assets/svg/illustrations/ill_onboarding_diamond.svg": "fb9a65f5852975aa3dc1d60b2ed78c73",
"assets/assets/svg/illustrations/ill_onboarding_diamond_dark.svg": "ad052913f2041d5a58633fca00475e32",
"assets/assets/svg/illustrations/ill_onboarding_error_cross.svg": "481f6689ce241ce2710b79b51b52698d",
"assets/assets/svg/illustrations/ill_onboarding_error_cross_dark.svg": "9ae00cbd2992f05138d7325f8bb620bb",
"assets/assets/svg/illustrations/ill_onboarding_not_resident.svg": "66592d1f88778e1afcae5d55e793d00c",
"assets/assets/svg/illustrations/ill_onboarding_not_resident_dark.svg": "bab5a455be248258ba2281fc106e6060",
"assets/assets/svg/illustrations/ill_onboarding_person_money.svg": "d0ceb7a43792d1c44f506eee65009a04",
"assets/assets/svg/illustrations/ill_onboarding_person_money_dark.svg": "720b019ba84fe7118cee4628d73c0030",
"assets/assets/svg/illustrations/ill_onboarding_refresh.svg": "fdfb8ed5a118e84b9b25aace3e1f7289",
"assets/assets/svg/illustrations/ill_onboarding_refresh_dark.svg": "46c389ae6297f1f78d11c097209c55c1",
"assets/assets/svg/illustrations/ill_onboarding_sand_clock.svg": "1c7424121369f027b608c217b231d75e",
"assets/assets/svg/illustrations/ill_onboarding_sand_clock_dark.svg": "16952cce1f6d3043634a5f06c3eacb31",
"assets/assets/svg/illustrations/ill_onboarding_shield.svg": "bbd207551ff591a5bdb33396c4b586c7",
"assets/assets/svg/illustrations/ill_onboarding_shield_dark.svg": "9735d987e5819989fdfa50e5ad478284",
"assets/assets/svg/illustrations/ill_person_success_circle.svg": "a81087922e25a9f30df834e8d3ad394c",
"assets/assets/svg/illustrations/ill_phone_refresh.svg": "994202d296e824f87ac0d608a7ecb7b8",
"assets/assets/svg/illustrations/ill_qualified_investor.svg": "60446d515ba039553fa7869fa7644f89",
"assets/assets/svg/illustrations/ill_rosbank_invest_muller_label.svg": "f9bf5b8a0c6ad669e3693c9125ece11c",
"assets/assets/svg/illustrations/ill_rosbank_invest_muller_label_light.svg": "20e0ad581b619c8cc15eaa2fe44567f1",
"assets/assets/svg/illustrations/ill_rosbank_logo.svg": "41f5a1ab5d8ef92bed664cd3c475b637",
"assets/assets/svg/illustrations/ill_rosbank_online_logo.svg": "39835e190a6579ecb133e4c535594a1c",
"assets/assets/svg/illustrations/ill_small_error_cross.svg": "21a80621a4cbe1d4a88f5c04bd2ffe6c",
"assets/assets/svg/illustrations/ill_tools_circle.svg": "1e52fee6334d9e6efde758ee06363103",
"assets/assets/svg/illustrations/ill_warning_triangle.svg": "fa7c086c5fa79ffcb9f3e1a6db945c96",
"assets/assets/svg/illustrations/ill_withdrawal_money.svg": "63ad7aa6ba561d056a0fef4c03f1bf2b",
"assets/assets/svg/illustrations/ill_yellow_bell.svg": "342e6641f82eccf34b5468b8c343d32e",
"assets/assets/svg/illustrations/ill_yellow_lock.svg": "d01c46b3d004411f352704934e495a4a",
"assets/assets/translations/ru.json": "e73171021677365bcafcb3aa512767a7",
"assets/FontManifest.json": "5f5cd186549cf1c88ec9372ea8182340",
"assets/fonts/MaterialIcons-Regular.otf": "84fc4107baff80c931faf0957053b5ee",
"assets/NOTICES": "cfd86cb370d1f4bc00e898a044bbc708",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "f45ee08f35918da331190eac7228b062",
"firebase-messaging-sw.js": "c319e06c5a121690a6a77405639eff96",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "7d6da9461a9b10a946fbb4dc871a4fb0",
"icons/Icon-512.png": "fc20876fcfbd5571d1320ebbb8e11e8f",
"icons/Icon-maskable-192.png": "ccd35871423826858843366b1a7bce30",
"icons/Icon-maskable-512.png": "5d49d17071ed0a6cae4b3a272a8d2c6f",
"icons/splash_screen_loader.gif": "78918a400f0537d173b6d5681c47b977",
"icons/splash_screen_logo.png": "79da41d8663667aa90b6e940770d8254",
"index.html": "854878fc8a3055388656b070909683c8",
"/": "854878fc8a3055388656b070909683c8",
"main.dart.js": "b0555d4be0db44d33a2a9de2b690cb1a",
"manifest.json": "e2ea0a558ab2d19c5f3a48d1b423248a",
"pwa_advertising/narrow/advertising0.jpeg": "2f4b6135b1d160b875d15402aadfb8fe",
"pwa_advertising/narrow/advertising1.jpeg": "9c99a8da49dacf2b8c0216cc4b60e038",
"pwa_advertising/narrow/advertising2.jpeg": "90cde3f71e6bdbf667adc751095f346f",
"pwa_advertising/narrow/advertising3.jpeg": "c92b62949bbea957b786123d62f71b05",
"pwa_advertising/narrow/advertising4.jpeg": "5e4f42f873ae891a297ad7f2a7273ecb",
"pwa_advertising/narrow/advertising5.jpeg": "911f806a23a16d146b5b96e4efd7b81d",
"pwa_advertising/narrow/advertising6.jpeg": "e50f3c2663373264d5bbae2e53989c74",
"r/fallback_deeplink/rbi_fallback_redirect.html": "36c2e39c6c1036fc3c48f890e4e3fffe",
"scripts/add_to_home_screen.js": "3d1dd2387d40d74b55508741c43bb9ad",
"scripts/indexed_db.js": "8b03c473d5e4f2fb89afcc96e5d5c308",
"scripts/web_authn.js": "0b47dcb3855ce8fe71f34771bbfc4091",
"version.json": "fe25fbc961718e44dad08633102120bc"};
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
