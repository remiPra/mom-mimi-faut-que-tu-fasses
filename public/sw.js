if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next/static/4KHPxftVmbxmDiQ192cvY/_buildManifest.js",revision:"bb063c5d0c0ca8013eda483e84f7f748"},{url:"/_next/static/4KHPxftVmbxmDiQ192cvY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-049e72a64e621877a80a.js",revision:"049e72a64e621877a80a"},{url:"/_next/static/chunks/675-8db57f8683a890bccf67.js",revision:"8db57f8683a890bccf67"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"895f067827ebe11ffe45"},{url:"/_next/static/chunks/main-ce5a29382c5a4abb59f8.js",revision:"ce5a29382c5a4abb59f8"},{url:"/_next/static/chunks/pages/_app-785bb78b6eaa17d3b065.js",revision:"785bb78b6eaa17d3b065"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"737a04e9a0da63c9d162"},{url:"/_next/static/chunks/pages/createTask-2475965866575d18a974.js",revision:"2475965866575d18a974"},{url:"/_next/static/chunks/pages/index-b0796f4f17e6405e5de6.js",revision:"b0796f4f17e6405e5de6"},{url:"/_next/static/chunks/pages/listTask-752a1bc24112a14afedd.js",revision:"752a1bc24112a14afedd"},{url:"/_next/static/chunks/pages/task/%5Bid%5D-777912c051b2ae630e38.js",revision:"777912c051b2ae630e38"},{url:"/_next/static/chunks/pages/updateTask/%5Bid%5D-38e3156b48733fc7424c.js",revision:"38e3156b48733fc7424c"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-90a60b87fd0d5fc150f2.js",revision:"90a60b87fd0d5fc150f2"},{url:"/_next/static/css/247f56a5045ec78e984c.css",revision:"247f56a5045ec78e984c"},{url:"/_next/static/css/d1f20e659fd82d7d4f59.css",revision:"d1f20e659fd82d7d4f59"},{url:"/_next/static/image/public/sopgie.7b2a8b34689c5ea12b07dc6bbe855e3a.jpg",revision:"f58a064b2f6b806fcae8b5a94e270456"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"902e8549c4bf3b958e95cec66ad4d8da"},{url:"/icon-256x256.png",revision:"b50cba089dba27836dc60f22c158f915"},{url:"/icon-384x384.png",revision:"e2d2393ed9e28e59631f10f84b68b450"},{url:"/icon-512x512.png",revision:"60553a5af4459b799b90a83de77ef37f"},{url:"/manifest.json",revision:"3b764c15ab2e0c1f63350dbd50f786e9"},{url:"/sopgie.jpg",revision:"f58a064b2f6b806fcae8b5a94e270456"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
