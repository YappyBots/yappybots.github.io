/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef90c9acbe84d2520d5db6839faa432b"
  },
  {
    "url": "assets/css/0.styles.81599d89.css",
    "revision": "e40484aa38bc0eaa3e2910865a81d5c2"
  },
  {
    "url": "assets/img/default.b96bb3f2.svg",
    "revision": "b96bb3f2c8b254be13d408b6af4acefa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b0cc3feb.js",
    "revision": "c49152441c57d322c704d71266ad68c0"
  },
  {
    "url": "assets/js/2.77373c57.js",
    "revision": "24b6e48044bdbb8e5937e8c7521da424"
  },
  {
    "url": "assets/js/3.eed1498e.js",
    "revision": "5e376f01a45543fdc4d2e75a56cae556"
  },
  {
    "url": "assets/js/4.396cb0b3.js",
    "revision": "cde4a679b96ebf23ab8721432061f0b8"
  },
  {
    "url": "assets/js/5.311d4bc5.js",
    "revision": "9a2abeeed6df1e317c69f3184fb0e599"
  },
  {
    "url": "assets/js/6.6f40acf7.js",
    "revision": "4b04d15cc33a61c67c6c288ca155898f"
  },
  {
    "url": "assets/js/7.b695a64e.js",
    "revision": "17b51fbf002fd3e310e07a8c1c3604a3"
  },
  {
    "url": "assets/js/8.17dbedc2.js",
    "revision": "f1417706a5abc6b6ce9b3201c9086331"
  },
  {
    "url": "assets/js/9.e93fd8ae.js",
    "revision": "ada2b99842782fea6c72127d4006af06"
  },
  {
    "url": "assets/js/app.3d415204.js",
    "revision": "4f336c22801305a07c9f8ba098968b32"
  },
  {
    "url": "docs/github/contributing.html",
    "revision": "6414dba6d5939a93423a5d5abfc6c293"
  },
  {
    "url": "docs/github/index.html",
    "revision": "d617b562b02cb25276ef7c0a237e2560"
  },
  {
    "url": "docs/gitlab/index.html",
    "revision": "d72917ab19de3991fcbb6548f0e2f388"
  },
  {
    "url": "icon.svg",
    "revision": "13ed120ea272b4de9c7a20a0aa3d4257"
  },
  {
    "url": "index.html",
    "revision": "9926ef0f26335fa582cec7cb3c2a223d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
