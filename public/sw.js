if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const r=e=>i(e,t),o={module:{uri:t},exports:a,require:r};s[t]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next//static/media/sopgie.38a77b5a.jpg",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/server/middleware-manifest.json",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/SVvcFcxui22gkWAQKeYmG/_buildManifest.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/SVvcFcxui22gkWAQKeYmG/_middlewareManifest.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/SVvcFcxui22gkWAQKeYmG/_ssgManifest.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/0c428ae2-d08662e82aab8079.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/675-01c71045d12b72b8.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/main-836291d05e5f250c.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/_app-2f6928b514fadd2e.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/createTask-892e95357e4293d1.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/index-a635bb6aba68c1cc.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/listTask-ed41e1c61f43423f.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/task/%5Bid%5D-02f154e35c95bdf8.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/pages/updateTask/%5Bid%5D-df906e07cb37fec8.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/css/135ba991eabbb3ac.css",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/_next/static/css/535f62ffc36465a9.css",revision:"SVvcFcxui22gkWAQKeYmG"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"902e8549c4bf3b958e95cec66ad4d8da"},{url:"/icon-256x256.png",revision:"b50cba089dba27836dc60f22c158f915"},{url:"/icon-384x384.png",revision:"e2d2393ed9e28e59631f10f84b68b450"},{url:"/icon-512x512.png",revision:"60553a5af4459b799b90a83de77ef37f"},{url:"/manifest.json",revision:"3b764c15ab2e0c1f63350dbd50f786e9"},{url:"/sopgie.jpg",revision:"f58a064b2f6b806fcae8b5a94e270456"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
