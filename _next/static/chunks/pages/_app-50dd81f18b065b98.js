(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return u}});var r=n(1720);const a=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:c},u=e=>(0,r.useContext)(l)?r.default.createElement(r.Fragment,null,e.children):r.default.createElement(d,e),d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:s=["light","dark"],defaultTheme:u=(n?"system":"light"),attribute:d="data-theme",value:v,children:g,nonce:y})=>{const[b,w]=(0,r.useState)((()=>h(c,u))),[x,Z]=(0,r.useState)((()=>h(c))),O=v?Object.values(v):s,_=(0,r.useCallback)((e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());const o=v?v[r]:r,l=t?m():null,c=document.documentElement;if("class"===d?(c.classList.remove(...O),o&&c.classList.add(o)):o?c.setAttribute(d,o):c.removeAttribute(d),i){const e=a.includes(u)?u:null,t=a.includes(r)?r:e;c.style.colorScheme=t}null==l||l()}),[]),k=(0,r.useCallback)((e=>{w(e);try{localStorage.setItem(c,e)}catch(e){}}),[e]),j=(0,r.useCallback)((t=>{const r=p(t);Z(r),"system"===b&&n&&!e&&_("system")}),[b,e]);return(0,r.useEffect)((()=>{const e=window.matchMedia(o);return e.addListener(j),j(e),()=>e.removeListener(j)}),[j]),(0,r.useEffect)((()=>{const e=e=>{e.key===c&&k(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[k]),(0,r.useEffect)((()=>{_(null!=e?e:b)}),[e,b]),r.default.createElement(l.Provider,{value:{theme:b,setTheme:k,forcedTheme:e,resolvedTheme:"system"===b?x:b,themes:n?[...s,"system"]:s,systemTheme:n?x:void 0}},r.default.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:c,themes:s,defaultTheme:u,attribute:d,value:v,children:g,attrs:O,nonce:y}),g)},f=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:s,attrs:u,nonce:d})=>{const f="system"===c,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=l?a.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{const o=s?s[e]:e,i=t?e+"|| ''":`'${o}'`;let c="";return l&&r&&!t&&a.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||o?`c.add(${i})`:"null":o&&(c+=`d[s](n,${i})`),c},v=e?`!function(){${h}${p(e)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${f?"":"else{"+p(c,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(c,!1,!1)};}${m}}catch(t){}}();`;return r.default.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})}),(()=>!0)),h=(e,t)=>{if(i)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9329)}])},4373:function(e,t,n){"use strict";var r=n(1799),a=n(9534),o=n(7320),i=n(1664),l=n.n(i);t.Z=function(e){var t=e.href,n=(0,a.Z)(e,["href"]),i=t&&t.startsWith("/"),c=t&&t.startsWith("#");return i?(0,o.tZ)(l(),{href:t,children:(0,o.tZ)("a",(0,r.Z)({},n))}):c?(0,o.tZ)("a",(0,r.Z)({href:t},n)):(0,o.tZ)("a",(0,r.Z)({target:"_blank",rel:"noopener noreferrer",href:t},n))}},9072:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},6993:function(e,t,n){"use strict";n.d(t,{K:function(){return c}});var r=n(7320),a=n(4298),o=n.n(a),i=n(7059),l=n.n(i);t.Z=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(o(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(l().analytics.googleAnalyticsId)}),(0,r.tZ)(o(),{strategy:"lazyOnload",id:"google-analytics",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(l().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})};var c=function(e,t,n,r){var a;null===(a=window.gtag)||void 0===a||a.call(window,"event",e,{event_category:t,event_label:n,value:r})}},5363:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return u},K:function(){return d}});var o=n(7320),i=n(4298),l=n.n(i),c=n(7059),s=n.n(c),u=function(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)(l(),{strategy:"lazyOnload","data-domain":s().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,o.tZ)(l(),{strategy:"lazyOnload",id:"plausible",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},d=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o,i;return null===(i=window.plausible)||void 0===i?void 0:(o=i).call.apply(o,[window,e].concat(a(n)))}},6426:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(7320),a=n(4298),o=n.n(a),i=function(e,t){var n,r;return t?null===(n=window.sa_event)||void 0===n?void 0:n.call(window,e,t):null===(r=window.sa_event)||void 0===r?void 0:r.call(window,e)};t.Z=function(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(o(),{strategy:"lazyOnload",id:"simple-analytics",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,r.tZ)(o(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})}},4642:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o=n(7320),i=n(1720);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c;function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var m;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",s({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),u||(u=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),f||(f=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",p({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),m||(m=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n)return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},7059:function(e){"use strict";e.exports={title:"Fossil Engineering",showTitle:!1,author:"",headerTitle:"Fossil Engineering",description:"Let the code speak",language:"en-us",siteUrl:"https://fossil-engineering.github.io",siteRepo:"https://github.com/fossil-engineering/fossil-engineering.github.io",image:"/static/img/avatar.png",socialBanner:"/static/img/twitter-card.png",email:"people@fossil.com",github:"https://github.com/fossil-engineering",twitter:"",linkedin:"https://www.linkedin.com/company/fossilvietnamcareers/",locale:"en-US",analytics:{plausibleDataDomain:!1,simpleAnalytics:!1,googleAnalyticsId:"G-FP7VNJ2D7M"},newsletter:{provider:"https://fossil-engineering-subscribe.duyet.workers.dev"},comment:{provider:"giscus",giscusConfig:{repo:"fossil-engineering/fossil-engineering.github.io",repositoryId:"R_kgDOGZLjkg",category:"",categoryId:"",mapping:"pathname",reactions:"1",metadata:"1",theme:"light",darkTheme:"dark",themeURL:""},utterancesConfig:{repo:"",issueTerm:"",label:"",theme:"",darkTheme:""},disqus:{shortname:""}}}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(1720))&&a.__esModule?a:{default:a},i=n(6273),l=n(2725),c=n(3462),s=n(1018),u=n(7190),d=n(1210),f=n(8684);var h="undefined"!==typeof o.default.useTransition,m={};function p(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(a?"%"+a:"")]=!0}}var v=o.default.forwardRef((function(e,t){var n,a=e.href,v=e.as,g=e.children,y=e.prefetch,b=e.passHref,w=e.replace,x=e.shallow,Z=e.scroll,O=e.locale,_=e.onClick,k=e.onMouseEnter,j=e.legacyBehavior,C=void 0===j?!0!==Boolean(!1):j,M=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=g,!C||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var E=!1!==y,z=r(h?o.default.useTransition():[],2)[1],T=o.default.useContext(c.RouterContext),N=o.default.useContext(s.AppRouterContext);N&&(T=N);var S,L=o.default.useMemo((function(){var e=r(i.resolveHref(T,a,!0),2),t=e[0],n=e[1];return{href:t,as:v?i.resolveHref(T,v):n||t}}),[T,a,v]),A=L.href,B=L.as,$=o.default.useRef(A),P=o.default.useRef(B);C&&(S=o.default.Children.only(n));var H=C?S&&"object"===typeof S&&S.ref:t,I=r(u.useIntersection({rootMargin:"200px"}),3),R=I[0],X=I[1],D=I[2],V=o.default.useCallback((function(e){P.current===B&&$.current===A||(D(),P.current=B,$.current=A),R(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[B,H,A,D,R]);o.default.useEffect((function(){var e=X&&E&&i.isLocalURL(A),t="undefined"!==typeof O?O:T&&T.locale,n=m[A+"%"+B+(t?"%"+t:"")];e&&!n&&p(T,A,B,{locale:t})}),[B,A,X,O,E,T]);var F={ref:V,onClick:function(e){C||"function"!==typeof _||_(e),C&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var u=function(){t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:l})};s?s(u):u()}}(e,T,A,B,w,x,Z,O,N?z:void 0)},onMouseEnter:function(e){C||"function"!==typeof k||k(e),C&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),i.isLocalURL(A)&&p(T,A,B,{priority:!0})}};if(!C||b||"a"===S.type&&!("href"in S.props)){var K="undefined"!==typeof O?O:T&&T.locale,U=T&&T.isLocaleDomain&&d.getDomainLocale(B,K,T.locales,T.domainLocales);F.href=U||f.addBasePath(l.addLocale(B,K,T&&T.defaultLocale))}return C?o.default.cloneElement(S,F):o.default.createElement("a",Object.assign({},M,F),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!i,u=a.useRef(),d=r(a.useState(!1),2),f=d[0],h=d[1],m=r(a.useState(null),2),p=m[0],v=m[1];a.useEffect((function(){if(i){if(u.current&&(u.current(),u.current=void 0),s||f)return;return p&&p.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:a},c.push(n),l.set(n,t),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(p,(function(e){return e&&h(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p,s,n,t,f]);var g=a.useCallback((function(){h(!1)}),[]);return[v,f,g]};var a=n(1720),o=n(9311),i="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,a=(r=n(1720))&&r.__esModule?r:{default:r};var o=a.default.createContext(null);t.AppRouterContext=o;var i=a.default.createContext(null);t.AppTreeContext=i;var l=a.default.createContext(null);t.FullAppTreeContext=l},9329:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r,a=n(1799),o=n(7320),i=(n(7762),n(6870),n(2010)),l=n(9008),c=n.n(l),s=n(6993),u=n(5363),d=n(6426),f=n(7059),h=n.n(f),m=function(){return(0,o.BX)(o.HY,{children:[h().analytics.plausibleDataDomain&&(0,o.tZ)(u.Z,{}),h().analytics.simpleAnalytics&&(0,o.tZ)(d.Z,{}),h().analytics.googleAnalyticsId&&(0,o.tZ)(s.Z,{})]})},p=[{href:"/blog",title:"Blog"},{href:"/about",title:"About"}],v=n(1720);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y=function(e){return v.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:132.393,height:25.507,xmlSpace:"preserve"},e),r||(r=v.createElement("path",{d:"M89.751 10.925c-4.768-1.529-6.842-2.877-6.486-5.096.342-2.201 2.729-2.07 5.047-1.89 2.291.192 4.158.701 5.52 1.148.025.018.105-.004.121-.082.121-.806.559-2.943.678-3.675.018-.091-.068-.136-.113-.147C91.729.428 89.182-.052 86.137.004c-5.703.099-8.354 2.396-8.678 7.192-.191 2.799 1.748 5.893 5.777 7.227 4.029 1.334 6.904 2.087 6.486 4.57-.369 2.104-2.85 2.342-5.539 2.187-2.355-.144-4.348-.705-5.834-1.156-.107-.032-.172.021-.197.119-.111.864-.424 3.071-.531 3.849-.004.104.084.188.129.198 1.859.445 5.15 1.07 9.197 1.07 5.473 0 8.312-2.347 8.631-6.841.247-3.487-1.395-6.067-5.827-7.494zM65.068 10.925c-4.771-1.529-6.839-2.877-6.485-5.096.344-2.201 2.729-2.07 5.04-1.89 2.292.192 4.16.701 5.517 1.148.039.018.096-.004.113-.082.139-.806.566-2.943.691-3.675a.139.139 0 0 0-.111-.147C67.04.428 64.494-.052 61.454.004 55.75.103 53.101 2.4 52.766 7.196c-.188 2.8 1.753 5.896 5.774 7.23 4.024 1.334 6.898 2.086 6.494 4.567-.367 2.105-2.846 2.342-5.539 2.188-2.366-.142-4.346-.707-5.842-1.156-.096-.032-.168.021-.188.117-.11.867-.425 3.073-.53 3.853-.003.102.075.188.124.196a40.142 40.142 0 0 0 9.191 1.07c5.478 0 8.31-2.347 8.632-6.843.256-3.486-1.387-6.066-5.814-7.493zM17.998.555H1.468a.157.157 0 0 0-.162.155v23.971c0 .088.064.16.162.16H6.96a.156.156 0 0 0 .155-.16V15.71c0-.082.072-.16.162-.16h9.525c.092 0 .164-.064.164-.15v-3.708a.165.165 0 0 0-.164-.165H7.277a.16.16 0 0 1-.162-.162V4.74c0-.085.072-.16.162-.16h10.861a.154.154 0 0 0 .156-.157L18.168.711c-.012-.08-.09-.156-.17-.156zM109.023.537h-5.666c-.1 0-.16.068-.16.156v23.991c0 .084.061.149.16.149h5.666c.09 0 .154-.065.154-.149V.693a.152.152 0 0 0-.154-.156zM133.536 20.742h-9.395a.16.16 0 0 1-.158-.156L123.981.732c0-.099-.066-.161-.16-.161h-5.658a.157.157 0 0 0-.162.161v23.951c0 .084.076.147.162.147h15.186c.088 0 .164-.063.168-.147l.182-3.772c-.002-.098-.065-.169-.163-.169zM35.363.026c-7.436 0-11.493 4.878-11.493 12.743 0 7.857 4.059 12.738 11.493 12.738 7.433 0 11.487-4.881 11.487-12.738C46.85 4.787 42.901.026 35.363.026zm0 21.462c-5.05 0-5.749-4.193-5.749-8.719 0-4.52.699-8.714 5.749-8.714 5.044 0 5.738 4.192 5.738 8.714 0 4.525-.694 8.719-5.738 8.719z"})))},b=n(4373),w=n(9072),x=n(4642);function Z(){return(0,o.tZ)("footer",{children:(0,o.BX)("div",{className:"flex flex-col items-center mt-16",children:[(0,o.BX)("div",{className:"flex mb-3 space-x-4",children:[(0,o.tZ)(x.Z,{kind:"mail",href:"mailto:".concat(h().email),size:"6"}),(0,o.tZ)(x.Z,{kind:"github",href:h().github,size:"6"}),(0,o.tZ)(x.Z,{kind:"linkedin",href:h().linkedin,size:"6"}),(0,o.tZ)(x.Z,{kind:"twitter",href:h().twitter,size:"6"})]}),(0,o.BX)("div",{className:"flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,o.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,o.tZ)("div",{children:" \u2022 "}),(0,o.tZ)(b.Z,{href:"/",children:h().title})]}),(0,o.tZ)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:(0,o.tZ)(b.Z,{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"Tailwind Nextjs Theme"})})]})})}var O=function(){var e=(0,v.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,o.BX)("div",{className:"sm:hidden",children:[(0,o.tZ)("button",{type:"button",className:"w-8 h-8 py-1 ml-1 mr-1 rounded","aria-label":"Toggle Menu",onClick:r,children:(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,o.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,o.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,o.BX)("div",{className:"fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,o.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed w-full h-full cursor-auto focus:outline-none",onClick:r}),(0,o.tZ)("nav",{className:"fixed h-full mt-8",children:p.map((function(e){return(0,o.tZ)("div",{className:"px-12 py-4",children:(0,o.tZ)(b.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},_=function(){var e=(0,v.useState)(!1),t=e[0],n=e[1],r=(0,i.F)(),a=r.theme,l=r.setTheme,c=r.resolvedTheme;return(0,v.useEffect)((function(){return n(!0)}),[]),(0,o.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",onClick:function(){return l("dark"===a||"dark"===c?"light":"dark")},children:(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==c?(0,o.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,o.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},k=function(e){var t=e.children;return(0,o.tZ)(w.Z,{children:(0,o.BX)("div",{className:"flex flex-col justify-between h-screen",children:[(0,o.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,o.tZ)("div",{children:(0,o.tZ)(b.Z,{href:"/","aria-label":h().headerTitle,children:(0,o.BX)("div",{className:"flex items-center justify-between",children:[(0,o.tZ)("div",{className:"mr-3 logo",children:(0,o.tZ)(y,{})}),h().showTitle&&("string"===typeof h().headerTitle?(0,o.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:h().headerTitle}):h().headerTitle)]})})}),(0,o.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,o.tZ)("div",{className:"hidden sm:block",children:p.map((function(e){return(0,o.tZ)(b.Z,{href:e.href,className:"p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",children:e.title},e.title)}))}),(0,o.tZ)(_,{}),(0,o.tZ)(O,{})]})]}),(0,o.tZ)("main",{className:"mb-auto",children:t}),(0,o.tZ)(Z,{})]})})};function j(e){var t=e.Component,n=e.pageProps;return(0,o.BX)(i.f,{attribute:"class",children:[(0,o.tZ)(c(),{children:(0,o.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,o.tZ)(m,{}),(0,o.tZ)(k,{children:(0,o.tZ)(t,(0,a.Z)({},n))})]})}},6870:function(){},7762:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxDEV:function(){return o},jsxs:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var l,c,s={};for(c in t)"ref"==c?l=t[c]:s[c]=t[c];var u={type:e,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:i,__self:o};if("function"==typeof e&&(l=e.defaultProps))for(c in l)void 0===s[c]&&(s[c]=l[c]);return r.YM.vnode&&r.YM.vnode(u),u}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return a}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});n(1720);var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);