(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6501],{4972:function(e,t,n){var r,o,a;o=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):o(l.href)?r(e,t,n):a(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(o(e))r(e,n,s);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){a(c)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var a="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||a&&l||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,f=d.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});s.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,o):r)||(e.exports=a)},10865:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(36672),o=n(23420);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}},11218:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(42197),o=n(9166);function a(){const{prism:e}=(0,o.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},18423:(e,t,n)=>{"use strict";n.d(t,{f:()=>c});var r=n(36672),o=n(43796);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function s(e,t){const[n,s]=(0,r.useState)(),c=(0,r.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,r.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=a);const s=(0,o._q)(t),c=(0,o.Be)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return s(a,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}},34809:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},42357:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:r}=e,l=()=>"dark"===t?r?.altText??n?.altText:n?.altText,i=(0,s.default)(n?.url),u=(0,s.default)(r?.url);if(n&&r)return o.default.createElement(c.default,{alt:l(),sources:{light:i,dark:u},className:"openapi__logo"});if(n||r)return o.default.createElement(c.default,{alt:l(),sources:{light:i??u,dark:i??u},className:"openapi__logo"});return};const o=r(n(36672)),a=n(83181),s=r(n(14616)),c=r(n(93388))},54942:(e,t,n)=>{"use strict";n.d(t,{R:()=>s,x:()=>c});var r=n(36672);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},70219:(e,t,n)=>{"use strict";n.d(t,{Li:()=>p,M$:()=>b,Op:()=>m,_u:()=>f,wt:()=>d});var r=n(34809),o=n.n(r);const a=/title=(?<quote>["'])(?<title>.*?)\1/,s=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},l={...c,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},i=Object.keys(c);function u(e,t){const n=e.map((e=>{const{start:n,end:r}=l[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(a)?.groups.title??""}function f(e){return Boolean(e?.includes("showLineNumbers"))}function m(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:c}=t;if(c&&s.test(c)){const e=c.match(s).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=o()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":return u(["lua"],t);case"sql":return u(["lua","jsBlock"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(i,t)}}(r,a),d=n.split("\n"),f=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),p=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),b=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let o=0;o<d.length;){const e=d[o].match(l);if(!e){o+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?f[m[t]].range+=`${o},`:p[t]?f[p[t]].start=o:b[t]&&(f[b[t]].range+=`${f[b[t]].start}-${o-1},`),d.splice(o,1)}n=d.join("\n");const h={};return Object.entries(f).forEach((e=>{let[t,{range:n}]=e;o()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}function b(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}},77492:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n(36672)),a=r(n(4972));t.default=function(e){let{url:t,proxy:n}=e;return o.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},o.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),o.default.createElement("ul",{className:"export-dropdown dropdown__menu"},o.default.createElement("li",null,o.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},81794:(e,t,n)=>{"use strict";n.d(t,{i:()=>o});var r=n(50819);function o(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}}}]);