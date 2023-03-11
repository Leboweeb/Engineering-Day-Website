(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function y(){}const zt=t=>t;function it(t,e){for(const n in e)t[n]=e[n];return t}function kt(t){return t()}function lt(){return Object.create(null)}function he(t){t.forEach(kt)}function jt(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let je;function ge(t,e){return je||(je=document.createElement("a")),je.href=e,t===je.href}function Lt(t){return Object.keys(t).length===0}function Pt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(Pt(e,n))}const St=typeof window<"u";let It=St?()=>window.performance.now():()=>Date.now(),Et=St?t=>requestAnimationFrame(t):y;const _e=new Set;function Ct(t){_e.forEach(e=>{e.c(t)||(_e.delete(e),e.f())}),_e.size!==0&&Et(Ct)}function Tt(t){let e;return _e.size===0&&Et(Ct),{promise:new Promise(n=>{_e.add(e={c:t,f:n})}),abort(){_e.delete(e)}}}function u(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function me(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function ze(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function v(){return A(" ")}function At(){return A("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ot(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function rt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let ve;function ye(t){ve=t}function Nt(){if(!ve)throw new Error("Function called outside component initialization");return ve}function $t(t){Nt().$$.on_mount.push(t)}const de=[],Ce=[],Se=[],ot=[],qt=Promise.resolve();let Te=!1;function Qt(){Te||(Te=!0,qt.then(Mt))}function Oe(t){Se.push(t)}const Le=new Set;let fe=0;function Mt(){if(fe!==0)return;const t=ve;do{try{for(;fe<de.length;){const e=de[fe];fe++,ye(e),Bt(e.$$)}}catch(e){throw de.length=0,fe=0,e}for(ye(null),de.length=0,fe=0;Ce.length;)Ce.pop()();for(let e=0;e<Se.length;e+=1){const n=Se[e];Le.has(n)||(Le.add(n),n())}Se.length=0}while(de.length);for(;ot.length;)ot.pop()();Te=!1,Le.clear(),ye(t)}function Bt(t){if(t.fragment!==null){t.update(),he(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Oe)}}const Ee=new Set;let Z;function Ft(){Z={r:0,c:[],p:Z}}function Ht(){Z.r||he(Z.c),Z=Z.p}function M(t,e){t&&t.i&&(Ee.delete(t),t.i(e))}function D(t,e,n,i){if(t&&t.o){if(Ee.has(t))return;Ee.add(t),Z.c.push(()=>{Ee.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function $(t){t&&t.c()}function T(t,e,n,i){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),i||Oe(()=>{const r=t.$$.on_mount.map(kt).filter(jt);t.$$.on_destroy?t.$$.on_destroy.push(...r):he(r),t.$$.on_mount=[]}),o.forEach(Oe)}function O(t,e){const n=t.$$;n.fragment!==null&&(he(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(de.push(t),Qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,i,l,o,r,s=[-1]){const a=ve;ye(t);const d=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:l,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:lt(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};r&&r(d.root);let m=!1;if(d.ctx=n?n(t,e.props||{},(_,b,...k)=>{const C=k.length?k[0]:b;return d.ctx&&l(d.ctx[_],d.ctx[_]=C)&&(!d.skip_bound&&d.bound[_]&&d.bound[_](C),m&&Vt(t,_)),b}):[],d.update(),m=!0,he(d.before_update),d.fragment=i?i(d.ctx):!1,e.target){if(e.hydrate){const _=Ot(e.target);d.fragment&&d.fragment.l(_),_.forEach(w)}else d.fragment&&d.fragment.c();e.intro&&M(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),Mt()}ye(a)}class V{$destroy(){O(this,1),this.$destroy=y}$on(e,n){if(!jt(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="/Engineering-Day-Website/assets/bau-logo-4f578f4b.png",Gt="/Engineering-Day-Website/assets/ziad.jpeg_processed-ddf75dce.jpeg",Kt="/Engineering-Day-Website/assets/sari.jpeg_processed-0e695edd.jpeg",Jt="/Engineering-Day-Website/assets/sami.jpeg_processed-3d67ba2a.jpeg",Yt="/Engineering-Day-Website/assets/mohammad.jpeg_processed-0751bb87.jpeg",Xt="/Engineering-Day-Website/assets/saja.jpeg_processed-c1dc15b2.jpeg",Zt="/Engineering-Day-Website/assets/nour.jpeg_processed-5bbc6ce3.jpeg",Ut="/Engineering-Day-Website/assets/lama.jpeg_processed-302ec01b.jpeg",xt="/Engineering-Day-Website/assets/jana.jpeg_processed-ea6107f0.jpeg",en="/Engineering-Day-Website/assets/IOT-d8602c41.png",tn="/Engineering-Day-Website/assets/web-541b82ed.png",nn="/Engineering-Day-Website/assets/mediapipe-ab5ba981.png",Ae=t=>t.toLowerCase().trim().split(" ").join("_");function ln(t){let e,n,i,l,o,r,s;return{c(){e=g("div"),n=g("section"),i=g("h1"),l=A(t[0]),o=v(),r=g("hr"),c(i,"class","svelte-ijmzdi"),c(r,"class","svelte-ijmzdi"),c(n,"id",s=Ae(t[0])),c(n,"class","svelte-ijmzdi"),rt(n,"--bg-color",t[1]),c(e,"class","svelte-ijmzdi")},m(a,d){j(a,e,d),u(e,n),u(n,i),u(i,l),u(n,o),u(n,r)},p(a,[d]){d&1&&B(l,a[0]),d&1&&s!==(s=Ae(a[0]))&&c(n,"id",s),d&2&&rt(n,"--bg-color",a[1])},i:y,o:y,d(a){a&&w(e)}}}function rn(t,e,n){let{title:i=""}=e,{bg:l="white"}=e;return t.$$set=o=>{"title"in o&&n(0,i=o.title),"bg"in o&&n(1,l=o.bg)},[i,l]}class Pe extends V{constructor(e){super(),R(this,e,rn,ln,F,{title:0,bg:1})}}function on(t){let e,n,i,l,o,r,s=Math.round(t[1])+"",a,d;return{c(){e=ze("svg"),n=ze("circle"),i=ze("circle"),o=v(),r=g("p"),a=A(s),d=A(" percent"),c(n,"r",t[4]),c(n,"cx",t[4]),c(n,"cy",t[4]),c(n,"fill",t[2]),c(i,"r",l=t[4]/2),c(i,"cx",t[4]),c(i,"cy",t[4]),c(i,"fill",t[2]),c(i,"stroke",t[3]),c(i,"stroke-width",t[4]),c(i,"stroke-dasharray",t[5]),c(e,"width",t[0]),c(e,"height",t[0]),c(e,"viewBox",t[6])},m(m,_){j(m,e,_),u(e,n),u(e,i),j(m,o,_),j(m,r,_),u(r,a),u(r,d)},p(m,[_]){_&16&&c(n,"r",m[4]),_&16&&c(n,"cx",m[4]),_&16&&c(n,"cy",m[4]),_&4&&c(n,"fill",m[2]),_&16&&l!==(l=m[4]/2)&&c(i,"r",l),_&16&&c(i,"cx",m[4]),_&16&&c(i,"cy",m[4]),_&4&&c(i,"fill",m[2]),_&8&&c(i,"stroke",m[3]),_&16&&c(i,"stroke-width",m[4]),_&32&&c(i,"stroke-dasharray",m[5]),_&1&&c(e,"width",m[0]),_&1&&c(e,"height",m[0]),_&64&&c(e,"viewBox",m[6]),_&2&&s!==(s=Math.round(m[1])+"")&&B(a,s)},i:y,o:y,d(m){m&&w(e),m&&w(o),m&&w(r)}}}function sn(t,e,n){let i,l,o,r,s,{size:a=200}=e,{percent:d=0}=e,{bgColor:m="cornflowerblue"}=e,{fgColor:_="orange"}=e;return t.$$set=b=>{"size"in b&&n(0,a=b.size),"percent"in b&&n(1,d=b.percent),"bgColor"in b&&n(2,m=b.bgColor),"fgColor"in b&&n(3,_=b.fgColor)},t.$$.update=()=>{t.$$.dirty&1&&n(6,i=`0 0 ${a} ${a}`),t.$$.dirty&1&&n(4,l=a/2),t.$$.dirty&16&&n(8,o=Math.PI*l),t.$$.dirty&258&&n(7,r=o*(d/100)),t.$$.dirty&384&&n(5,s=`0 ${o-r} ${r}`)},[a,d,m,_,l,s,i,r,o]}class cn extends V{constructor(e){super(),R(this,e,sn,on,F,{size:0,percent:1,bgColor:2,fgColor:3})}}const ue=[];function an(t,e=y){let n;const i=new Set;function l(s){if(F(t,s)&&(t=s,n)){const a=!ue.length;for(const d of i)d[1](),ue.push(d,t);if(a){for(let d=0;d<ue.length;d+=2)ue[d][0](ue[d+1]);ue.length=0}}}function o(s){l(s(t))}function r(s,a=y){const d=[s,a];return i.add(d),i.size===1&&(n=e(l)||y),s(t),()=>{i.delete(d),i.size===0&&(n(),n=null)}}return{set:l,update:o,subscribe:r}}function ct(t){return Object.prototype.toString.call(t)==="[object Date]"}function Ne(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((l,o)=>Ne(t[o],l));return l=>i.map(o=>o(l))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(ct(t)&&ct(e)){t=t.getTime(),e=e.getTime();const o=e-t;return r=>new Date(t+r*o)}const i=Object.keys(e),l={};return i.forEach(o=>{l[o]=Ne(t[o],e[o])}),o=>{const r={};return i.forEach(s=>{r[s]=l[s](o)}),r}}if(n==="number"){const i=e-t;return l=>t+l*i}throw new Error(`Cannot interpolate ${n} values`)}function fn(t,e={}){const n=an(t);let i,l=t;function o(r,s){if(t==null)return n.set(t=r),Promise.resolve();l=r;let a=i,d=!1,{delay:m=0,duration:_=400,easing:b=zt,interpolate:k=Ne}=it(it({},e),s);if(_===0)return a&&(a.abort(),a=null),n.set(t=l),Promise.resolve();const C=It()+m;let W;return i=Tt(q=>{if(q<C)return!0;d||(W=k(t,r),typeof _=="function"&&(_=_(t,r)),d=!0),a&&(a.abort(),a=null);const I=q-C;return I>_?(n.set(t=r),!1):(n.set(t=W(b(I/_))),!0)}),i.promise}return{set:o,update:(r,s)=>o(r(l,t),s),subscribe:n.subscribe}}function un(t){let e,n,i,l,o,r,s,a,d,m,_,b;return{c(){e=g("div"),n=g("a"),i=g("img"),s=v(),a=g("p"),d=A(t[1]),m=v(),_=g("p"),b=A(t[3]),ge(i.src,l=t[0])||c(i,"src",l),c(i,"alt",o=`profile picture of ${t[1]}`),c(i,"srcset",""),c(i,"class","svelte-8gl6iv"),c(n,"href",r="mailto:"+t[2]),c(_,"class","role svelte-8gl6iv"),c(e,"class","profile svelte-8gl6iv")},m(k,C){j(k,e,C),u(e,n),u(n,i),u(e,s),u(e,a),u(a,d),u(e,m),u(e,_),u(_,b)},p(k,[C]){C&1&&!ge(i.src,l=k[0])&&c(i,"src",l),C&2&&o!==(o=`profile picture of ${k[1]}`)&&c(i,"alt",o),C&4&&r!==(r="mailto:"+k[2])&&c(n,"href",r),C&2&&B(d,k[1]),C&8&&B(b,k[3])},i:y,o:y,d(k){k&&w(e)}}}function dn(t,e,n){let{src:i}=e,{name:l}=e,{email:o}=e,{role:r}=e;return t.$$set=s=>{"src"in s&&n(0,i=s.src),"name"in s&&n(1,l=s.name),"email"in s&&n(2,o=s.email),"role"in s&&n(3,r=s.role)},[i,l,o,r]}class _n extends V{constructor(e){super(),R(this,e,dn,un,F,{src:0,name:1,email:2,role:3})}}function mn(t){let e,n,i,l,o,r,s;return{c(){e=g("figure"),n=g("img"),l=v(),o=g("figcaption"),r=A(t[0]),ge(n.src,i=t[2])||c(n,"src",i),c(n,"alt",t[1]),c(n,"class","svelte-1my5d6e"),c(e,"style",s="--col="+t[4]+" --mw="+t[3]),c(e,"class","svelte-1my5d6e")},m(a,d){j(a,e,d),u(e,n),u(e,l),u(e,o),u(o,r)},p(a,[d]){d&4&&!ge(n.src,i=a[2])&&c(n,"src",i),d&2&&c(n,"alt",a[1]),d&1&&B(r,a[0]),d&24&&s!==(s="--col="+a[4]+" --mw="+a[3])&&c(e,"style",s)},i:y,o:y,d(a){a&&w(e)}}}function gn(t,e,n){let{caption_text:i}=e,{alt:l}=e,{image:o}=e,{mw:r}=e,{border_color:s="transparent"}=e;return t.$$set=a=>{"caption_text"in a&&n(0,i=a.caption_text),"alt"in a&&n(1,l=a.alt),"image"in a&&n(2,o=a.image),"mw"in a&&n(3,r=a.mw),"border_color"in a&&n(4,s=a.border_color)},[i,l,o,r,s]}class De extends V{constructor(e){super(),R(this,e,gn,mn,F,{caption_text:0,alt:1,image:2,mw:3,border_color:4})}}function at(t,e,n){const i=t.slice();return i[2]=e[n],i}function ft(t){let e,n=t[2]+"",i,l;return{c(){e=g("p"),i=A(n),c(e,"style",l="--dis="+(t[1]==="vertical"?"block":"flex")),c(e,"class","svelte-1uan6et")},m(o,r){j(o,e,r),u(e,i)},p(o,r){r&1&&n!==(n=o[2]+"")&&B(i,n),r&2&&l!==(l="--dis="+(o[1]==="vertical"?"block":"flex"))&&c(e,"style",l)},d(o){o&&w(e)}}}function hn(t){let e,n=t[0].split(`
`),i=[];for(let l=0;l<n.length;l+=1)i[l]=ft(at(t,n,l));return{c(){e=g("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","svelte-1uan6et")},m(l,o){j(l,e,o);for(let r=0;r<i.length;r+=1)i[r].m(e,null)},p(l,[o]){if(o&3){n=l[0].split(`
`);let r;for(r=0;r<n.length;r+=1){const s=at(l,n,r);i[r]?i[r].p(s,o):(i[r]=ft(s),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},i:y,o:y,d(l){l&&w(e),me(i,l)}}}function pn(t,e,n){let{text:i}=e,{split_dir:l="vertical"}=e;return t.$$set=o=>{"text"in o&&n(0,i=o.text),"split_dir"in o&&n(1,l=o.split_dir)},[i,l]}class bn extends V{constructor(e){super(),R(this,e,pn,hn,F,{text:0,split_dir:1})}}function ut(t,e,n){const i=t.slice();return i[3]=e[n],i}function dt(t,e,n){const i=t.slice();return i[3]=e[n],i}function wn(t){let e,n=t[0].split(`
`),i=[];for(let l=0;l<n.length;l+=1)i[l]=_t(ut(t,n,l));return{c(){e=g("ul");for(let l=0;l<i.length;l+=1)i[l].c()},m(l,o){j(l,e,o);for(let r=0;r<i.length;r+=1)i[r].m(e,null)},p(l,o){if(o&1){n=l[0].split(`
`);let r;for(r=0;r<n.length;r+=1){const s=ut(l,n,r);i[r]?i[r].p(s,o):(i[r]=_t(s),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(l){l&&w(e),me(i,l)}}}function yn(t){let e,n=t[0].split(`
`),i=[];for(let l=0;l<n.length;l+=1)i[l]=mt(dt(t,n,l));return{c(){e=g("ol");for(let l=0;l<i.length;l+=1)i[l].c()},m(l,o){j(l,e,o);for(let r=0;r<i.length;r+=1)i[r].m(e,null)},p(l,o){if(o&1){n=l[0].split(`
`);let r;for(r=0;r<n.length;r+=1){const s=dt(l,n,r);i[r]?i[r].p(s,o):(i[r]=mt(s),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(l){l&&w(e),me(i,l)}}}function _t(t){let e,n=t[3]+"",i;return{c(){e=g("li"),i=A(n),c(e,"class","svelte-105amht")},m(l,o){j(l,e,o),u(e,i)},p(l,o){o&1&&n!==(n=l[3]+"")&&B(i,n)},d(l){l&&w(e)}}}function mt(t){let e,n=t[3]+"",i;return{c(){e=g("li"),i=A(n),c(e,"class","svelte-105amht")},m(l,o){j(l,e,o),u(e,i)},p(l,o){o&1&&n!==(n=l[3]+"")&&B(i,n)},d(l){l&&w(e)}}}function vn(t){let e,n,i,l;function o(a,d){return a[2]?yn:wn}let r=o(t),s=r(t);return{c(){e=g("div"),n=g("h3"),i=A(t[1]),l=v(),s.c(),c(e,"class","svelte-105amht")},m(a,d){j(a,e,d),u(e,n),u(n,i),u(e,l),s.m(e,null)},p(a,[d]){d&2&&B(i,a[1]),r===(r=o(a))&&s?s.p(a,d):(s.d(1),s=r(a),s&&(s.c(),s.m(e,null)))},i:y,o:y,d(a){a&&w(e),s.d()}}}function kn(t,e,n){let{text:i=""}=e,{title:l}=e,{ordered:o=!1}=e;return t.$$set=r=>{"text"in r&&n(0,i=r.text),"title"in r&&n(1,l=r.title),"ordered"in r&&n(2,o=r.ordered)},[i,l,o]}class gt extends V{constructor(e){super(),R(this,e,kn,vn,F,{text:0,title:1,ordered:2})}}function jn(t){let e,n,i,l;return{c(){e=g("div"),n=g("b"),n.textContent="0",i=v(),l=g("div"),l.innerHTML=`<p class="svelte-1zhyrg">Members and counting.</p> 
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link" class="svelte-1zhyrg">Register Today!</a>`,c(n,"class","countdown svelte-1zhyrg"),c(e,"id","parent"),c(e,"class","svelte-1zhyrg")},m(o,r){j(o,e,r),u(e,n),t[3](n),u(e,i),u(e,l),t[4](e)},p:y,i:y,o:y,d(o){o&&w(e),t[3](null),t[4](null)}}}function Sn(t,e,n){let{limit:i}=e,l,o;const r=(m,_,b,k)=>{let C=b-_,W=b>_?1:-1,q=Math.abs(Math.floor(k/C)),I=_,G=setInterval(()=>{I+=W,m.textContent=I.toString(),I===b&&clearInterval(G)},q)};let s=new IntersectionObserver(m=>{let _=m[0];_.isIntersecting&&(r(_.target,0,i,5e3),s.unobserve(_.target))},{threshold:1,root:o});$t(()=>{s.observe(l)});function a(m){Ce[m?"unshift":"push"](()=>{l=m,n(0,l)})}function d(m){Ce[m?"unshift":"push"](()=>{o=m,n(1,o)})}return t.$$set=m=>{"limit"in m&&n(2,i=m.limit)},[l,o,i,a,d]}class En extends V{constructor(e){super(),R(this,e,Sn,jn,F,{limit:2})}}const{document:Ie}=Rt;function ht(t,e,n){const i=t.slice();return i[16]=e[n],i[18]=n,i}function pt(t,e,n){const i=t.slice();return i[19]=e[n],i[18]=n,i}function bt(t,e,n){const i=t.slice();return i[19]=e[n],i[18]=n,i}function Cn(t){let e,n=t[19]+"",i,l,o;function r(){return t[10](t[19])}return{c(){e=g("button"),i=A(n),c(e,"class","nav_buttons")},m(s,a){j(s,e,a),u(e,i),l||(o=U(e,"click",r),l=!0)},p(s,a){t=s},d(s){s&&w(e),l=!1,o()}}}function An(t){let e,n=t[19]+"",i,l,o;return{c(){e=g("button"),i=A(n),c(e,"class","nav_buttons")},m(r,s){j(r,e,s),u(e,i),l||(o=U(e,"click",t[9]),l=!0)},p:y,d(r){r&&w(e),l=!1,o()}}}function wt(t){let e;function n(o,r){return o[18]==0?An:Cn}let l=n(t)(t);return{c(){l.c(),e=At()},m(o,r){l.m(o,r),j(o,e,r)},p(o,r){l.p(o,r)},d(o){l.d(o),o&&w(e)}}}function Mn(t){let e,n=t[19]+"",i,l,o;function r(){return t[12](t[19])}return{c(){e=g("button"),i=A(n),c(e,"class","nav_buttons_mobile")},m(s,a){j(s,e,a),u(e,i),l||(o=U(e,"click",r),l=!0)},p(s,a){t=s},d(s){s&&w(e),l=!1,o()}}}function Wn(t){let e,n=t[19]+"",i,l,o;return{c(){e=g("button"),i=A(n),c(e,"class","nav_buttons_mobile")},m(r,s){j(r,e,s),u(e,i),l||(o=U(e,"click",t[11]),l=!0)},p:y,d(r){r&&w(e),l=!1,o()}}}function yt(t){let e;function n(o,r){return o[18]==0?Wn:Mn}let l=n(t)(t);return{c(){l.c(),e=At()},m(o,r){l.m(o,r),j(o,e,r)},p(o,r){l.p(o,r)},d(o){l.d(o),o&&w(e)}}}function zn(t){let e,n;return e=new bn({props:{text:`If you want to contact us, click the register link in the navigation bar
or click at any of our icons to send us an email`,split_dir:"horizontal"}}),{c(){$(e.$$.fragment)},m(i,l){T(e,i,l),n=!0},p:y,i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){D(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function vt(t){let e,n;return e=new _n({props:{name:t[16],src:t[8][t[18]],role:t[6][t[18]],email:t[7][t[18]]}}),{c(){$(e.$$.fragment)},m(i,l){T(e,i,l),n=!0},p:y,i(i){n||(M(e.$$.fragment,i),n=!0)},o(i){D(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function Ln(t){let e,n,i,l,o,r,s,a,d,m,_,b,k,C,W,q,I,G,p,N,pe,x,$e,ee,qe,K,Me,Qe,J,Be,Q,Fe,te,He,ne,Re,be,Ve,Ge,ie,Ke,le,Je,re,Ye,oe,Xe,se,Ze,Y,Ue,xe,et,we,ke,We,tt,ce=t[2],z=[];for(let f=0;f<ce.length;f+=1)z[f]=wt(bt(t,ce,f));let ae=t[2],L=[];for(let f=0;f<ae.length;f+=1)L[f]=yt(pt(t,ae,f));N=new Pe({props:{title:t[2][1]}}),x=new gt({props:{title:"Why ARC?",text:`Your participation in our events will be put in our news section and your name will be publicly displayed.
We will host workshops to imporove your skills.
We will actively contact companies for internships and partnership programs. Also, your participation will bolster your CV because we will give you real skills .
Meet people with similar intrests and have fun!
Anyone can start their own project with fellow club members, no hierarchy or bureaucracy!`}}),ee=new gt({props:{title:"How Does it Work?",ordered:!0,text:`Start a project (about AI or robotics, of course).
Gather fellow club members to see who is interested. (Note that we might run several projects in parallel)
Work on the project and finish it.
Tell us about the details so that we can publish it on the website
Success!`}}),J=new cn({props:{percent:t[1]}}),ie=new En({props:{limit:80}}),le=new Pe({props:{title:t[2][2]}}),re=new De({props:{caption_text:"Game controlled with AI hand motion controls",image:nn,alt:"mediapipe demo",mw:642}}),oe=new De({props:{caption_text:"Developing the site for this club",image:tn,alt:"web",mw:960}}),se=new De({props:{caption_text:"Developing IOT solutions for environmental purposes",image:en,alt:"IOT cleaning",mw:960}}),Y=new Pe({props:{title:t[2][3],$$slots:{default:[zn]},$$scope:{ctx:t}}});let X=t[5],E=[];for(let f=0;f<X.length;f+=1)E[f]=vt(ht(t,X,f));const Wt=f=>D(E[f],1,1,()=>{E[f]=null});return{c(){e=g("script"),i=g("link"),l=v(),o=g("div"),r=g("div"),s=g("a"),a=g("img"),m=v(),_=g("div");for(let f=0;f<z.length;f+=1)z[f].c();b=v(),k=g("button"),k.innerHTML='<i class="fa-solid fa-bars"></i>',C=v(),W=g("div");for(let f=0;f<L.length;f+=1)L[f].c();q=v(),I=g("div"),I.innerHTML=`<a href="https://www.facebook.com/profile.php?id=100090891691460"><i class="fab fa-facebook"></i></a> 
      <a href="https://github.com/Leboweeb/Engineering-Day-Website"><i class="fab fa-github"></i></a> 
      <a href="https://www.instagram.com/bau_arc/"><i class="fab fa-instagram"></i></a> 

      <a href="https://www.tiktok.com/@bau_a.r.c"><i class="fab fa-tiktok"></i></a> 
      <a href="mailto:arc.2023@outlook.com"><i class="fa-solid fa-envelope"></i></a>`,G=v(),p=g("div"),$(N.$$.fragment),pe=v(),$(x.$$.fragment),$e=v(),$(ee.$$.fragment),qe=v(),K=g("figure"),Me=g("h2"),Me.textContent="Job Opportunities and Activities",Qe=v(),$(J.$$.fragment),Be=v(),Q=g("figcaption"),Fe=A(`Post graduation job offer percentage :
      `),te=g("a"),te.textContent="internship experience",He=A(`
      , as opposed to
      
      `),ne=g("a"),ne.textContent="no experience",Re=A(`
      [`),be=g("a"),be.textContent="1",Ve=A("] (Click to show)"),Ge=v(),$(ie.$$.fragment),Ke=v(),$(le.$$.fragment),Je=v(),$(re.$$.fragment),Ye=v(),$(oe.$$.fragment),Xe=v(),$(se.$$.fragment),Ze=v(),$(Y.$$.fragment),Ue=v(),xe=g("p"),et=v(),we=g("div");for(let f=0;f<E.length;f+=1)E[f].c();ge(e.src,n="https://kit.fontawesome.com/255a2d624d.js")||c(e,"src",n),c(e,"crossorigin","anonymous"),Ie.title="ARC Club",c(i,"rel","icon"),c(i,"href",st),c(i,"type","image/x-icon"),ge(a.src,d=st)||c(a,"src",d),c(a,"alt","Bau Logo"),c(s,"href","#top"),c(s,"id","bau-logo"),c(k,"id","mobile_menu"),c(_,"class","nav_text"),c(r,"id","navbar"),c(I,"class","social"),c(W,"class","mobile_wrapper"),c(o,"class","mobile_and_friends"),c(te,"class","interactive_buttons"),c(te,"href","javascript:void(0)"),c(ne,"class","interactive_buttons"),c(ne,"href","javascript:void(0)"),c(be,"href","https://www.zippia.com/advice/internship-statistics/"),c(be,"class","interactive_buttons"),c(we,"class","profiles"),c(p,"class","make_space")},m(f,S){u(Ie.head,e),u(Ie.head,i),j(f,l,S),j(f,o,S),u(o,r),u(r,s),u(s,a),u(r,m),u(r,_);for(let P=0;P<z.length;P+=1)z[P].m(_,null);u(_,b),u(_,k),u(o,C),u(o,W);for(let P=0;P<L.length;P+=1)L[P].m(W,null);u(W,q),u(W,I),j(f,G,S),j(f,p,S),T(N,p,null),u(p,pe),T(x,p,null),u(p,$e),T(ee,p,null),u(p,qe),u(p,K),u(K,Me),u(K,Qe),T(J,K,null),u(K,Be),u(K,Q),u(Q,Fe),u(Q,te),u(Q,He),u(Q,ne),u(Q,Re),u(Q,be),u(Q,Ve),u(p,Ge),T(ie,p,null),u(p,Ke),T(le,p,null),u(p,Je),T(re,p,null),u(p,Ye),T(oe,p,null),u(p,Xe),T(se,p,null),u(p,Ze),T(Y,p,null),u(p,Ue),u(p,xe),u(p,et),u(p,we);for(let P=0;P<E.length;P+=1)E[P].m(we,null);ke=!0,We||(tt=[U(k,"click",t[3]),U(te,"click",t[13]),U(ne,"click",t[14])],We=!0)},p(f,[S]){if(S&4){ce=f[2];let h;for(h=0;h<ce.length;h+=1){const H=bt(f,ce,h);z[h]?z[h].p(H,S):(z[h]=wt(H),z[h].c(),z[h].m(_,b))}for(;h<z.length;h+=1)z[h].d(1);z.length=ce.length}if(S&4){ae=f[2];let h;for(h=0;h<ae.length;h+=1){const H=pt(f,ae,h);L[h]?L[h].p(H,S):(L[h]=yt(H),L[h].c(),L[h].m(W,q))}for(;h<L.length;h+=1)L[h].d(1);L.length=ae.length}const P={};S&2&&(P.percent=f[1]),J.$set(P);const nt={};if(S&4194304&&(nt.$$scope={dirty:S,ctx:f}),Y.$set(nt),S&480){X=f[5];let h;for(h=0;h<X.length;h+=1){const H=ht(f,X,h);E[h]?(E[h].p(H,S),M(E[h],1)):(E[h]=vt(H),E[h].c(),M(E[h],1),E[h].m(we,null))}for(Ft(),h=X.length;h<E.length;h+=1)Wt(h);Ht()}},i(f){if(!ke){M(N.$$.fragment,f),M(x.$$.fragment,f),M(ee.$$.fragment,f),M(J.$$.fragment,f),M(ie.$$.fragment,f),M(le.$$.fragment,f),M(re.$$.fragment,f),M(oe.$$.fragment,f),M(se.$$.fragment,f),M(Y.$$.fragment,f);for(let S=0;S<X.length;S+=1)M(E[S]);ke=!0}},o(f){D(N.$$.fragment,f),D(x.$$.fragment,f),D(ee.$$.fragment,f),D(J.$$.fragment,f),D(ie.$$.fragment,f),D(le.$$.fragment,f),D(re.$$.fragment,f),D(oe.$$.fragment,f),D(se.$$.fragment,f),D(Y.$$.fragment,f),E=E.filter(Boolean);for(let S=0;S<E.length;S+=1)D(E[S]);ke=!1},d(f){w(e),w(i),f&&w(l),f&&w(o),me(z,f),me(L,f),f&&w(G),f&&w(p),O(N),O(x),O(ee),O(J),O(ie),O(le),O(re),O(oe),O(se),O(Y),me(E,f),We=!1,he(tt)}}}function Pn(t,e,n){let i;const l=["Register","About","Projects","Contact Us"],o=(p,N)=>{p.classList.contains(N)?p.classList.remove(N):p.classList.add(N)},r=()=>{let p=document.querySelector(".mobile_wrapper");o(p,"visible")};let s=0;const a=fn(0,{duration:2e3});Dt(t,a,p=>n(1,i=p));const d=["Ziad Doughan","Sari Itani","Mohammad Shahbaz","Sami Kanawati","Saja Hakim","Nour Hijazy","Lama Mawlawi","Jana Moslemani"],m=["Club Advisor","President","Vice President","PR & Social Media","Treasurer","Design Manager","Secretary","Logistics Manager"],_=["","ssi@student.bau.edu.lb","mys239@student.bau.edu.lb","smk057@student.bau.edu.lb","sgh237@student.bau.edu.lb","","lym075@student.bau.edu.lb","Jhm431@student.bau.edu.lb"],b=[Gt,Kt,Yt,Jt,Xt,Zt,Ut,xt],k=()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"},C=p=>{document.querySelector(`#${Ae(p)}`).scrollIntoView({block:"center"})},W=()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"},q=p=>{let pe=document.querySelector(`#${Ae(p)}`).getBoundingClientRect();window.scrollTo(pe.x,pe.y)},I=()=>{n(0,s=57.5)},G=()=>{n(0,s=42.5)};return t.$$.update=()=>{t.$$.dirty&1&&a.set(s)},[s,i,l,r,a,d,m,_,b,k,C,W,q,I,G]}class Dn extends V{constructor(e){super(),R(this,e,Pn,Ln,F,{})}}new Dn({target:document.getElementById("app")});
