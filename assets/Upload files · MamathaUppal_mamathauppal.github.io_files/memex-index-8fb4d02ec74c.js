"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["memex-index"],{36357:(e,t,n)=>{var i=n(7572);document.addEventListener("turbo:load",()=>{!function(){let e=document.getElementById("project-search-input");if(!e)return;let t=new URL(window.location.href,window.location.origin);t.searchParams.has("is_search")&&(t.searchParams.delete("is_search"),history.replaceState({},document.title,t.toString()),e?.focus(),e?.setSelectionRange(e.value.length,e.value.length),setTimeout(()=>{let e=document.getElementById("projects-search-results-text");e&&(0,i.C)(e)},1e3))}()})},7572:(e,t,n)=>{n.d(t,{C:()=>o,i:()=>l});var i=n(97156),r=n(97564),s=n(46493);function o(e,t){(0,r.G7)("primer_live_region_element")&&t?.element===void 0?(0,s.Cj)(e,{politeness:t?.assertive?"assertive":"polite"}):l((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function l(e,t){let{assertive:n,element:o}=t??{};(0,r.G7)("primer_live_region_element")&&void 0===o?(0,s.iP)(e,{politeness:n?"assertive":"polite"}):function(e,t,n){let r=n??i.XC?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");r&&(r.textContent===e?r.textContent=`${e}\u00A0`:r.textContent=e)}(e,n,o)}},27756:(e,t,n)=>{let i;function r(){if(!i)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return i}function s(){return i?.locale??"en-US"}n.d(t,{JK:()=>s,_$:()=>r}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{i=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},97564:(e,t,n)=>{n.d(t,{G7:()=>a,XY:()=>h,fQ:()=>l});var i=n(5225),r=n(27756);function s(){return new Set((0,r._$)().featureFlags.map(e=>e.toLowerCase()))}let o=n(97156).X3?s:(0,i.A)(s);function l(){return Array.from(o())}function a(e){return o().has(e.toLowerCase())}let h={isFeatureEnabled:a}},97156:(e,t,n)=>{n.d(t,{KJ:()=>i.KJ,Kn:()=>r.Kn,X3:()=>i.X3,XC:()=>r.XC,cg:()=>r.cg,fV:()=>r.fV,g5:()=>i.g5});var i=n(15572),r=n(86733)},86733:(e,t,n)=>{n.d(t,{Kn:()=>s,XC:()=>i,cg:()=>r,fV:()=>o});let i="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,s="undefined"==typeof history?void 0:history,o="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},15572:(e,t,n)=>{n.d(t,{KJ:()=>s,X3:()=>r,g5:()=>o});var i=n(86733);let r=void 0===i.XC,s=!r;function o(){return!!r||!!i.XC.querySelector('react-app[data-ssr="true"]')}},5225:(e,t,n)=>{function i(...e){return JSON.stringify(e,(e,t)=>"object"==typeof t?t:String(t))}function r(e,t={}){let{hash:n=i,cache:r=new Map}=t;return function(...t){let i=n.apply(this,t);if(r.has(i))return r.get(i);let s=e.apply(this,t);return s instanceof Promise&&(s=s.catch(e=>{throw r.delete(i),e})),r.set(i,s),s}}n.d(t,{A:()=>r})},46493:(e,t,n)=>{n.d(t,{Cj:()=>H,iP:()=>F});let i={Less:"less",Equal:"equal",Greater:"greater"};var r,s,o,l,a,h,c,u,d,p,f,m,v,g,w,y,C,E=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},b=(e,t,n)=>(E(e,t,"read from private field"),n?n.call(e):t.get(e)),T=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},k=(e,t,n,i)=>(E(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),S=(e,t,n)=>(E(e,t,"access private method"),n);let MinHeap=class MinHeap{constructor({compareFn:e}){T(this,o),T(this,a),T(this,r,void 0),T(this,s,void 0),k(this,r,e),k(this,s,[])}insert(e){b(this,s).push(e),S(this,a,h).call(this)}pop(){let e=b(this,s)[0];return b(this,s)[b(this,s).length-1]&&(b(this,s)[0]=b(this,s)[b(this,s).length-1],b(this,s).pop()),S(this,o,l).call(this),e}peek(){return b(this,s)[0]}delete(e){let t=b(this,s).indexOf(e);-1!==t&&(L(b(this,s),t,b(this,s).length-1),b(this,s).pop(),S(this,o,l).call(this))}clear(){k(this,s,[])}get size(){return b(this,s).length}};function x(e){return Math.floor((e-1)/2)}function L(e,t,n){let i=e[t];e[t]=e[n],e[n]=i}r=new WeakMap,s=new WeakMap,o=new WeakSet,l=function(){let e=0;for(;2*e+1<b(this,s).length;){let t=2*e+1;if(2*e+2<b(this,s).length&&b(this,r).call(this,b(this,s)[2*e+2],b(this,s)[2*e+1])===i.Less&&(t=2*e+2),b(this,r).call(this,b(this,s)[e],b(this,s)[t])===i.Less)break;L(b(this,s),e,t),e=t}},a=new WeakSet,h=function(){let e=b(this,s).length-1;for(;e>0&&b(this,r).call(this,b(this,s)[e],b(this,s)[x(e)])===i.Less;)L(b(this,s),e,x(e)),e=x(e)};var M=Object.defineProperty,P=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t,n)=>(P(e,"symbol"!=typeof t?t+"":t,n),n),X=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},_=(e,t,n)=>(X(e,t,"read from private field"),n?n.call(e):t.get(e)),j=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},A=(e,t,n,i)=>(X(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n);let Deferred=class Deferred{constructor(){W(this,c,"Deferred"),j(this,u,void 0),j(this,d,void 0),j(this,p,void 0),A(this,u,new Promise((e,t)=>{A(this,d,e),A(this,p,t)}))}then(e,t){return Promise.prototype.then.apply(_(this,u),[e,t])}catch(e){return Promise.prototype.catch.apply(_(this,u),[e])}finally(e){return Promise.prototype.finally.apply(_(this,u),[e])}resolve(e){_(this,d).call(this,e)}reject(e){_(this,p).call(this,e)}getPromise(){return _(this,u)}};c=Symbol.toStringTag,u=new WeakMap,d=new WeakMap,p=new WeakMap;var R=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},q=(e,t,n)=>(R(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},G=(e,t,n,i)=>(R(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),I=(e,t,n)=>(R(e,t,"access private method"),n);let LiveRegionElement=class LiveRegionElement extends HTMLElement{constructor(){if(super(),K(this,g),K(this,y),K(this,f,void 0),K(this,m,void 0),K(this,v,void 0),!this.shadowRoot){let e=(J||((J=document.createElement("template")).innerHTML=$),J);this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}G(this,f,!1),G(this,v,null),G(this,m,new MinHeap({compareFn:B}))}get delay(){let e=this.getAttribute("delay");return e?parseInt(e,10):150}set delay(e){this.setAttribute("delay",`${e}`)}announce(e,t={}){let{delayMs:n,politeness:i="polite"}=t,r=Date.now(),s=new Deferred,o={deferred:s,politeness:i,contents:e,scheduled:void 0!==n?r+n:r};return q(this,m).insert(o),I(this,g,w).call(this),{...s.getPromise(),cancel:()=>{q(this,m).delete(o),s.resolve()}}}announceFromElement(e,t){let n;let i=(n="",e.hasAttribute("aria-label")?n=e.getAttribute("aria-label"):e.innerText?n=e.innerText:e.textContent&&(n=e.textContent),n?n.trim():"");return""!==i?this.announce(i,t):{...Promise.resolve(),cancel:D}}getMessage(e="polite"){let t=this.shadowRoot?.getElementById(e);if(!t)throw Error("Unable to find container for message");return t.textContent}clear(){null!==q(this,v)&&(clearTimeout(q(this,v)),G(this,v,null)),q(this,m).clear()}};f=new WeakMap,m=new WeakMap,v=new WeakMap,g=new WeakSet,w=function(){if(q(this,f))return;let e=q(this,m).peek();if(!e)return;null!==q(this,v)&&(clearTimeout(q(this,v)),G(this,v,null));let t=Date.now();if(e.scheduled<=t){(e=q(this,m).pop())&&I(this,y,C).call(this,e),I(this,g,w).call(this);return}let n=e.scheduled-t;G(this,v,window.setTimeout(()=>{G(this,v,null),I(this,g,w).call(this)},n))},y=new WeakSet,C=function(e){G(this,f,!0);let{contents:t,deferred:n,politeness:i}=e,r=this.shadowRoot?.getElementById(i);if(!r)throw G(this,f,!1),Error(`Unable to find container for message. Expected a container with id="${i}"`);r.textContent===t?r.textContent=`${t}\xa0`:r.textContent=t,null!==q(this,v)&&clearTimeout(q(this,v)),n.resolve(),this.delay>0?G(this,v,window.setTimeout(()=>{G(this,v,null),G(this,f,!1),I(this,g,w).call(this)},this.delay)):(G(this,v,null),G(this,f,!1),I(this,g,w).call(this))};let J=null,$=`
<style>
:host {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
<div id="polite" aria-live="polite" aria-atomic="true"></div>
<div id="assertive" aria-live="assertive" aria-atomic="true"></div>
`;function B(e,t){return e.politeness===t.politeness?e.scheduled===t.scheduled?i.Equal:e.scheduled<t.scheduled?i.Less:i.Greater:"assertive"===e.politeness&&"assertive"!==t.politeness?i.Less:"assertive"!==e.politeness&&"assertive"===t.politeness?i.Greater:i.Equal}function D(){}function F(e,t={}){let n=N(t.from);if(!n){n=document.createElement("live-region"),t.appendTo?t.appendTo.appendChild(n):O(t.from).appendChild(n);let i=!1,r=()=>{i=!0};return{...V(U).then(()=>{if(!i){let i=n.announce(e,t);return r=i.cancel,i}}),cancel:()=>{r()}}}return n.announce(e,t)}function H(e,t={}){let n=N(t.from);if(!n){n=document.createElement("live-region"),t.appendTo?t.appendTo.appendChild(n):O(t.from).appendChild(n);let i=!1,r=()=>{i=!0};return{...V(U).then(()=>{if(!i){let i=n.announceFromElement(e,t);return r=i.cancel,i}}),cancel:()=>{r()}}}return n.announceFromElement(e,t)}function N(e){let t=null;return null!==(t=e?function(e){let t=e.closest("dialog"),n=e;for(;(n=n.parentElement)&&(!t||t.contains(n));)for(let e of n.childNodes)if(e instanceof LiveRegionElement)return e;return null}(e):null)||null!==(t=O(e).querySelector("live-region"))?t:null}function O(e){let t=document.body;if(e){let n=e.closest("dialog");n&&(t=n)}return t}customElements.get("live-region")||customElements.define("live-region",LiveRegionElement);let U=150;function V(e){return new Promise(t=>{setTimeout(t,e)})}}},e=>{e(e.s=36357)}]);
//# sourceMappingURL=memex-index-1f5ff8d6f621.js.map