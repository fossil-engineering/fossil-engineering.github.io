(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{8045:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.default=function(t){var e=t.src,i=t.sizes,o=t.unoptimized,s=void 0!==o&&o,d=t.priority,f=void 0!==d&&d,h=t.loading,v=t.lazyBoundary,w=void 0===v?"200px":v,A=t.className,S=t.quality,k=t.width,j=t.height,E=t.objectFit,_=t.objectPosition,I=t.onLoadingComplete,P=t.loader,D=void 0===P?O:P,L=t.placeholder,R=void 0===L?"empty":L,q=t.blurDataURL,N=function(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=i?"responsive":"intrinsic";"layout"in N&&(N.layout&&(C=N.layout),delete N.layout);var W="";if(function(t){return"object"===typeof t&&(y(t)||function(t){return void 0!==t.src}(t))}(e)){var B=y(e)?e.default:e;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(q=q||B.blurDataURL,W=B.src,(!C||"fill"!==C)&&(j=j||B.height,k=k||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}e="string"===typeof e?e:W;var M=z(k),U=z(j),H=z(S),T=!f&&("lazy"===h||"undefined"===typeof h);(e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,T=!1);m.has(e)&&(T=!1);0;var F,V=r(u.useIntersection({rootMargin:w,disabled:!T}),2),J=V[0],G=V[1],Q=!T||G,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:_},$="blur"===R?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===C)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if("undefined"!==typeof M&&"undefined"!==typeof U){var tt=U/M,et=isNaN(tt)?"100%":"".concat(100*tt,"%");"responsive"===C?(K.display="block",K.position="relative",Y=!0,X.paddingTop=et):"intrinsic"===C?(K.display="inline-block",K.position="relative",K.maxWidth="100%",Y=!0,X.maxWidth="100%",F='<svg width="'.concat(M,'" height="').concat(U,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(K.display="inline-block",K.position="relative",K.width=M,K.height=U)}else 0;var it={src:p,srcSet:void 0,sizes:void 0};Q&&(it=x({src:e,unoptimized:s,layout:C,width:M,quality:H,sizes:i,loader:D}));var nt=e;0;0;var rt=(n(b={},"imagesrcset",it.srcSet),n(b,"imagesizes",it.sizes),b);return a.default.createElement("span",{style:K},Y?a.default.createElement("span",{style:X},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(l.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},N,it,{decoding:"async","data-nimg":C,className:A,ref:function(t){J(t),function(t,e,i,n,r){if(!t)return;var o=function(){t.src!==p&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),m.add(e),r){var i=t.naturalWidth,o=t.naturalHeight;r({naturalWidth:i,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,nt,0,R,I)},style:g({},Z,$)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},N,x({src:e,unoptimized:s,layout:C,width:M,quality:H,sizes:i,loader:D}),{decoding:"async","data-nimg":C,style:Z,className:A,loading:h||"lazy"}))),f?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+it.src+it.srcSet+it.sizes,rel:"preload",as:"image",href:it.srcSet?void 0:it.src},rt))):null)};var a=f(i(1720)),c=f(i(5443)),l=i(6978),s=i(5809),u=i(7190);function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t){return t&&t.__esModule?t:{default:t}}function g(t){for(var e=arguments,i=function(i){var n=null!=e[i]?e[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){d(t,e,n[e])}))},n=1;n<arguments.length;n++)i(n);return t}var m=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=new URL("".concat(e).concat(E(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,r=t.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(E(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(E(i),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(t){return void 0!==t.default}var b,v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"}||s.imageConfigDefault,w=v.deviceSizes,A=v.imageSizes,S=v.loader,k=v.path,j=(v.domains,o(w).concat(o(A)));function x(t){var e=t.src,i=t.unoptimized,n=t.layout,r=t.width,a=t.quality,c=t.sizes,l=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){for(var n,r=/(^|\s)(1?\d?\d)vw/g,a=[];n=r.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c,l=.01*(c=Math).min.apply(c,o(a));return{widths:j.filter((function(t){return t>=w[0]*l})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:w,kind:"w"}:{widths:o(new Set([t,2*t].map((function(t){return j.find((function(e){return e>=t}))||j[j.length-1]})))),kind:"x"}}(r,n,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(t,i){return"".concat(l({src:e,quality:a,width:t})," ").concat("w"===d?t:i+1).concat(d)})).join(", "),src:l({src:e,quality:a,width:u[f]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function O(t){var e=h.get(S);if(e)return e(g({root:k},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(S))}function E(t){return"/"===t[0]?t.slice(1):t}w.sort((function(t,e){return t-e})),j.sort((function(t,e){return t-e}))},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,i){t.exports=i(8045)},1163:function(t,e,i){t.exports=i(387)}}]);