if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,f,n)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}})).then(e=>{const c=n(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/css/2.29c50361.css",revision:"1ace7e1b0339c99a0a64ba6099b74d99"},{url:"/css/app.60918e43.css",revision:"a150fbadc0feeb5686870a9b13c2df45"},{url:"/css/vendor.0653855f.css",revision:"7f4c764a887cbb316d497bf9234daa60"},{url:"/favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f9e3a827.woff",revision:"1a05986ec7181461674cfdacf4502b8a"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.a563f825.woff2",revision:"47abd1b169a850b18ede9c9590cdb35d"},{url:"/icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"/icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"/icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"/icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"/icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"/icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"/icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"/icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"/icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"/icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"/icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"/icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"/icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"/icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"/icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"/img/quasar-logo-full.68ae1645.svg",revision:"c3e886514c633b21c81db623874d06cd"},{url:"/index.html",revision:"f576b4b3945c61e405e977d8246c1bff"},{url:"/js/2.c640b588.js",revision:"d62d86e7dd7a18f95c3abd1d5161f153"},{url:"/js/3.077963a7.js",revision:"c249577e75ce13f1294d602a60c7f392"},{url:"/js/4.6e5bd2ec.js",revision:"62d8f95e98df09d0322127c32a19d642"},{url:"/js/5.1f7ac70e.js",revision:"c750a67ac3565f47d60689d4db7ef0ee"},{url:"/js/app.58eb29ff.js",revision:"fce90107b56da69c204e440482d3710f"},{url:"/js/vendor.3074c338.js",revision:"9d7dbaf7c0031a7d0421dede16e06093"},{url:"/manifest.json",revision:"05b254d9a3af32dbf375c42f9b6bc180"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
