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
    "revision": "9ee6da22710dbbc0e4756c5640dd53c3"
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
    "url": "assets/js/6.61019ffd.js",
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
    "url": "assets/js/app.ba59c68e.js",
    "revision": "3a900e5f12c8d50eb0cd7c113affb411"
  },
  {
    "url": "github/contributing.html",
    "revision": "e099e2756e177b64d68ade2eff014d92"
  },
  {
    "url": "github/index.html",
    "revision": "80396adb5aba57b72146e5efbd4160b4"
  },
  {
    "url": "gitlab/index.html",
    "revision": "22a51735b18654f6b6a757b0d863cdbd"
  },
  {
    "url": "icon.svg",
    "revision": "13ed120ea272b4de9c7a20a0aa3d4257"
  },
  {
    "url": "index.html",
    "revision": "a542e58b68e56c4b83e2ff232f074b78"
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
