(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{5688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7780:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>f});var r=a(5155),s=a(2115),n=(e,t,a,r,s,n,l,o)=>{let i=document.documentElement,m=["light","dark"];function c(t){var a;(Array.isArray(e)?e:[e]).forEach(e=>{let a="class"===e,r=a&&n?s.map(e=>n[e]||e):s;a?(i.classList.remove(...r),i.classList.add(n&&n[t]?n[t]:t)):i.setAttribute(e,t)}),a=t,o&&m.includes(a)&&(i.style.colorScheme=a)}if(r)c(r);else try{let e=localStorage.getItem(t)||a,r=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(r)}catch(e){}},l=["light","dark"],o="(prefers-color-scheme: dark)",i=s.createContext(void 0),m=e=>s.useContext(i)?s.createElement(s.Fragment,null,e.children):s.createElement(d,{...e}),c=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:m="theme",themes:d=c,defaultTheme:f=r?"system":"light",attribute:v="data-theme",value:p,children:g,nonce:_,scriptProps:S}=e,[k,E]=s.useState(()=>h(m,f)),[w,C]=s.useState(()=>"system"===k?b():k),T=p?Object.values(p):d,L=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=b());let s=p?p[t]:t,o=a?y(_):null,i=document.documentElement,m=e=>{"class"===e?(i.classList.remove(...T),s&&i.classList.add(s)):e.startsWith("data-")&&(s?i.setAttribute(e,s):i.removeAttribute(e))};if(Array.isArray(v)?v.forEach(m):m(v),n){let e=l.includes(f)?f:null,a=l.includes(t)?t:e;i.style.colorScheme=a}null==o||o()},[_]),N=s.useCallback(e=>{let t="function"==typeof e?e(k):e;E(t);try{localStorage.setItem(m,t)}catch(e){}},[k]),P=s.useCallback(e=>{C(b(e)),"system"===k&&r&&!t&&L("system")},[k,t]);s.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),s.useEffect(()=>{let e=e=>{e.key===m&&(e.newValue?E(e.newValue):N(f))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),s.useEffect(()=>{L(null!=t?t:k)},[t,k]);let A=s.useMemo(()=>({theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?w:k,themes:r?[...d,"system"]:d,systemTheme:r?w:void 0}),[k,N,t,w,r,d]);return s.createElement(i.Provider,{value:A},s.createElement(u,{forcedTheme:t,storageKey:m,attribute:v,enableSystem:r,enableColorScheme:n,defaultTheme:f,value:p,themes:d,nonce:_,scriptProps:S}),g)},u=s.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:r,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:m,themes:c,nonce:d,scriptProps:u}=e,h=JSON.stringify([r,a,i,t,c,m,l,o]).slice(1,-1);return s.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(h,")")}})}),h=(e,t)=>{let a;try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light");function f(e){let{children:t,...a}=e;return(0,r.jsx)(m,{...a,children:t})}},9324:()=>{},9432:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},9805:(e,t,a)=>{Promise.resolve().then(a.bind(a,7780)),Promise.resolve().then(a.t.bind(a,5688,23)),Promise.resolve().then(a.t.bind(a,9432,23)),Promise.resolve().then(a.t.bind(a,9324,23))}},e=>{var t=t=>e(e.s=t);e.O(0,[261,441,684,358],()=>t(9805)),_N_E=e.O()}]);