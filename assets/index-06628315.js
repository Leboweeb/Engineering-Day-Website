(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function b(){}const $t=t=>t;function tt(t,e){for(const n in e)t[n]=e[n];return t}function wt(t){return t()}function nt(){return Object.create(null)}function ce(t){t.forEach(wt)}function yt(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let be;function oe(t,e){return be||(be=document.createElement("a")),be.href=e,t===be.href}function At(t){return Object.keys(t).length===0}function Mt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(Mt(e,n))}const vt=typeof window<"u";let Wt=vt?()=>window.performance.now():()=>Date.now(),kt=vt?t=>requestAnimationFrame(t):b;const se=new Set;function jt(t){se.forEach(e=>{e.c(t)||(se.delete(e),e.f())}),se.size!==0&&kt(jt)}function Lt(t){let e;return se.size===0&&kt(jt),{promise:new Promise(n=>{se.add(e={c:t,f:n})}),abort(){se.delete(e)}}}function f(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function de(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function Ce(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function Et(){return $("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t){return Array.from(t.childNodes)}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function it(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let me;function ge(t){me=t}function Dt(){if(!me)throw new Error("Function called outside component initialization");return me}function It(t){Dt().$$.on_mount.push(t)}const le=[],ve=[],we=[],rt=[],Tt=Promise.resolve();let ze=!1;function Ot(){ze||(ze=!0,Tt.then(Ct))}function We(t){we.push(t)}const Se=new Set;let ie=0;function Ct(){if(ie!==0)return;const t=me;do{try{for(;ie<le.length;){const e=le[ie];ie++,ge(e),Nt(e.$$)}}catch(e){throw le.length=0,ie=0,e}for(ge(null),le.length=0,ie=0;ve.length;)ve.pop()();for(let e=0;e<we.length;e+=1){const n=we[e];Se.has(n)||(Se.add(n),n())}we.length=0}while(le.length);for(;rt.length;)rt.pop()();ze=!1,Se.clear(),ge(t)}function Nt(t){if(t.fragment!==null){t.update(),ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(We)}}const ye=new Set;let V;function qt(){V={r:0,c:[],p:V}}function Bt(){V.r||ce(V.c),V=V.p}function S(t,e){t&&t.i&&(ye.delete(t),t.i(e))}function A(t,e,n,i){if(t&&t.o){if(ye.has(t))return;ye.add(t),V.c.push(()=>{ye.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function D(t){t&&t.c()}function L(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||We(()=>{const l=t.$$.on_mount.map(wt).filter(yt);t.$$.on_destroy?t.$$.on_destroy.push(...l):ce(l),t.$$.on_mount=[]}),s.forEach(We)}function P(t,e){const n=t.$$;n.fragment!==null&&(ce(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(le.push(t),Ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,i,r,s,l,o=[-1]){const c=me;ge(t);const u=t.$$={fragment:null,ctx:[],props:s,update:b,not_equal:r,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:nt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(g,h,...j)=>{const v=j.length?j[0]:h;return u.ctx&&r(u.ctx[g],u.ctx[g]=v)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](v),d&&Qt(t,g)),h}):[],u.update(),d=!0,ce(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const g=Pt(e.target);u.fragment&&u.fragment.l(g),g.forEach(y)}else u.fragment&&u.fragment.c();e.intro&&S(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),Ct()}ge(c)}class B{$destroy(){P(this,1),this.$destroy=b}$on(e,n){if(!yt(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lt="/Engineering-Day-Website/assets/bau-logo-4f578f4b.png",Rt="/Engineering-Day-Website/assets/ziad.jpeg_processed-ddf75dce.jpeg",Ft="/Engineering-Day-Website/assets/sari.jpeg_processed-0e695edd.jpeg",Vt="/Engineering-Day-Website/assets/sami.jpeg_processed-3d67ba2a.jpeg",Gt="/Engineering-Day-Website/assets/mohammad.jpeg_processed-0751bb87.jpeg",Jt="/Engineering-Day-Website/assets/saja.jpeg_processed-c1dc15b2.jpeg",Kt="/Engineering-Day-Website/assets/nour.jpeg_processed-5bbc6ce3.jpeg",Yt="/Engineering-Day-Website/assets/lama.jpeg_processed-302ec01b.jpeg",Ut="/Engineering-Day-Website/assets/jana.jpeg_processed-ea6107f0.jpeg",Xt="/Engineering-Day-Website/assets/IOT-d8602c41.png",Zt="/Engineering-Day-Website/assets/web-541b82ed.png",xt="/Engineering-Day-Website/assets/mediapipe-ab5ba981.png",Le=t=>t.toLowerCase().trim().split(" ").join("_");function en(t){let e,n,i,r,s,l,o;return{c(){e=_("div"),n=_("section"),i=_("h1"),r=$(t[0]),s=p(),l=_("hr"),a(i,"class","svelte-ijmzdi"),a(l,"class","svelte-ijmzdi"),a(n,"id",o=Le(t[0])),a(n,"class","svelte-ijmzdi"),it(n,"--bg-color",t[1]),a(e,"class","svelte-ijmzdi")},m(c,u){k(c,e,u),f(e,n),f(n,i),f(i,r),f(n,s),f(n,l)},p(c,[u]){u&1&&N(r,c[0]),u&1&&o!==(o=Le(c[0]))&&a(n,"id",o),u&2&&it(n,"--bg-color",c[1])},i:b,o:b,d(c){c&&y(e)}}}function tn(t,e,n){let{title:i=""}=e,{bg:r="white"}=e;return t.$$set=s=>{"title"in s&&n(0,i=s.title),"bg"in s&&n(1,r=s.bg)},[i,r]}class $e extends B{constructor(e){super(),q(this,e,tn,en,T,{title:0,bg:1})}}function nn(t){let e,n,i,r,s,l,o=Math.round(t[1])+"",c,u;return{c(){e=Ce("svg"),n=Ce("circle"),i=Ce("circle"),s=p(),l=_("p"),c=$(o),u=$(" percent"),a(n,"r",t[4]),a(n,"cx",t[4]),a(n,"cy",t[4]),a(n,"fill",t[2]),a(i,"r",r=t[4]/2),a(i,"cx",t[4]),a(i,"cy",t[4]),a(i,"fill",t[2]),a(i,"stroke",t[3]),a(i,"stroke-width",t[4]),a(i,"stroke-dasharray",t[5]),a(e,"width",t[0]),a(e,"height",t[0]),a(e,"viewBox",t[6])},m(d,g){k(d,e,g),f(e,n),f(e,i),k(d,s,g),k(d,l,g),f(l,c),f(l,u)},p(d,[g]){g&16&&a(n,"r",d[4]),g&16&&a(n,"cx",d[4]),g&16&&a(n,"cy",d[4]),g&4&&a(n,"fill",d[2]),g&16&&r!==(r=d[4]/2)&&a(i,"r",r),g&16&&a(i,"cx",d[4]),g&16&&a(i,"cy",d[4]),g&4&&a(i,"fill",d[2]),g&8&&a(i,"stroke",d[3]),g&16&&a(i,"stroke-width",d[4]),g&32&&a(i,"stroke-dasharray",d[5]),g&1&&a(e,"width",d[0]),g&1&&a(e,"height",d[0]),g&64&&a(e,"viewBox",d[6]),g&2&&o!==(o=Math.round(d[1])+"")&&N(c,o)},i:b,o:b,d(d){d&&y(e),d&&y(s),d&&y(l)}}}function rn(t,e,n){let i,r,s,l,o,{size:c=200}=e,{percent:u=0}=e,{bgColor:d="cornflowerblue"}=e,{fgColor:g="orange"}=e;return t.$$set=h=>{"size"in h&&n(0,c=h.size),"percent"in h&&n(1,u=h.percent),"bgColor"in h&&n(2,d=h.bgColor),"fgColor"in h&&n(3,g=h.fgColor)},t.$$.update=()=>{t.$$.dirty&1&&n(6,i=`0 0 ${c} ${c}`),t.$$.dirty&1&&n(4,r=c/2),t.$$.dirty&16&&n(8,s=Math.PI*r),t.$$.dirty&258&&n(7,l=s*(u/100)),t.$$.dirty&384&&n(5,o=`0 ${s-l} ${l}`)},[c,u,d,g,r,o,i,l,s]}class ln extends B{constructor(e){super(),q(this,e,rn,nn,T,{size:0,percent:1,bgColor:2,fgColor:3})}}const re=[];function sn(t,e=b){let n;const i=new Set;function r(o){if(T(t,o)&&(t=o,n)){const c=!re.length;for(const u of i)u[1](),re.push(u,t);if(c){for(let u=0;u<re.length;u+=2)re[u][0](re[u+1]);re.length=0}}}function s(o){r(o(t))}function l(o,c=b){const u=[o,c];return i.add(u),i.size===1&&(n=e(r)||b),o(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:l}}function st(t){return Object.prototype.toString.call(t)==="[object Date]"}function Pe(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((r,s)=>Pe(t[s],r));return r=>i.map(s=>s(r))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(st(t)&&st(e)){t=t.getTime(),e=e.getTime();const s=e-t;return l=>new Date(t+l*s)}const i=Object.keys(e),r={};return i.forEach(s=>{r[s]=Pe(t[s],e[s])}),s=>{const l={};return i.forEach(o=>{l[o]=r[o](s)}),l}}if(n==="number"){const i=e-t;return r=>t+r*i}throw new Error(`Cannot interpolate ${n} values`)}function on(t,e={}){const n=sn(t);let i,r=t;function s(l,o){if(t==null)return n.set(t=l),Promise.resolve();r=l;let c=i,u=!1,{delay:d=0,duration:g=400,easing:h=$t,interpolate:j=Pe}=tt(tt({},e),o);if(g===0)return c&&(c.abort(),c=null),n.set(t=r),Promise.resolve();const v=Wt()+d;let M;return i=Lt(z=>{if(z<v)return!0;u||(M=j(t,l),typeof g=="function"&&(g=g(t,l)),u=!0),c&&(c.abort(),c=null);const I=z-v;return I>g?(n.set(t=l),!1):(n.set(t=M(h(I/g))),!0)}),i.promise}return{set:s,update:(l,o)=>s(l(r,t),o),subscribe:n.subscribe}}function cn(t){let e,n,i,r,s,l,o,c,u,d,g,h;return{c(){e=_("div"),n=_("a"),i=_("img"),o=p(),c=_("p"),u=$(t[1]),d=p(),g=_("p"),h=$(t[3]),oe(i.src,r=t[0])||a(i,"src",r),a(i,"alt",s=`profile picture of ${t[1]}`),a(i,"srcset",""),a(i,"class","svelte-8gl6iv"),a(n,"href",l="mailto:"+t[2]),a(g,"class","role svelte-8gl6iv"),a(e,"class","profile svelte-8gl6iv")},m(j,v){k(j,e,v),f(e,n),f(n,i),f(e,o),f(e,c),f(c,u),f(e,d),f(e,g),f(g,h)},p(j,[v]){v&1&&!oe(i.src,r=j[0])&&a(i,"src",r),v&2&&s!==(s=`profile picture of ${j[1]}`)&&a(i,"alt",s),v&4&&l!==(l="mailto:"+j[2])&&a(n,"href",l),v&2&&N(u,j[1]),v&8&&N(h,j[3])},i:b,o:b,d(j){j&&y(e)}}}function an(t,e,n){let{src:i}=e,{name:r}=e,{email:s}=e,{role:l}=e;return t.$$set=o=>{"src"in o&&n(0,i=o.src),"name"in o&&n(1,r=o.name),"email"in o&&n(2,s=o.email),"role"in o&&n(3,l=o.role)},[i,r,s,l]}class fn extends B{constructor(e){super(),q(this,e,an,cn,T,{src:0,name:1,email:2,role:3})}}function un(t){let e,n,i,r,s,l,o;return{c(){e=_("figure"),n=_("img"),r=p(),s=_("figcaption"),l=$(t[0]),oe(n.src,i=t[2])||a(n,"src",i),a(n,"alt",t[1]),a(n,"class","svelte-1my5d6e"),a(e,"style",o="--col="+t[4]+" --mw="+t[3]),a(e,"class","svelte-1my5d6e")},m(c,u){k(c,e,u),f(e,n),f(e,r),f(e,s),f(s,l)},p(c,[u]){u&4&&!oe(n.src,i=c[2])&&a(n,"src",i),u&2&&a(n,"alt",c[1]),u&1&&N(l,c[0]),u&24&&o!==(o="--col="+c[4]+" --mw="+c[3])&&a(e,"style",o)},i:b,o:b,d(c){c&&y(e)}}}function gn(t,e,n){let{caption_text:i}=e,{alt:r}=e,{image:s}=e,{mw:l}=e,{border_color:o="transparent"}=e;return t.$$set=c=>{"caption_text"in c&&n(0,i=c.caption_text),"alt"in c&&n(1,r=c.alt),"image"in c&&n(2,s=c.image),"mw"in c&&n(3,l=c.mw),"border_color"in c&&n(4,o=c.border_color)},[i,r,s,l,o]}class Ae extends B{constructor(e){super(),q(this,e,gn,un,T,{caption_text:0,alt:1,image:2,mw:3,border_color:4})}}function ot(t,e,n){const i=t.slice();return i[2]=e[n],i}function ct(t){let e,n=t[2]+"",i,r;return{c(){e=_("p"),i=$(n),a(e,"style",r="--dis="+(t[1]==="vertical"?"block":"flex")),a(e,"class","svelte-1uan6et")},m(s,l){k(s,e,l),f(e,i)},p(s,l){l&1&&n!==(n=s[2]+"")&&N(i,n),l&2&&r!==(r="--dis="+(s[1]==="vertical"?"block":"flex"))&&a(e,"style",r)},d(s){s&&y(e)}}}function mn(t){let e,n=t[0].split(`
`),i=[];for(let r=0;r<n.length;r+=1)i[r]=ct(ot(t,n,r));return{c(){e=_("div");for(let r=0;r<i.length;r+=1)i[r].c();a(e,"class","svelte-1uan6et")},m(r,s){k(r,e,s);for(let l=0;l<i.length;l+=1)i[l].m(e,null)},p(r,[s]){if(s&3){n=r[0].split(`
`);let l;for(l=0;l<n.length;l+=1){const o=ot(r,n,l);i[l]?i[l].p(o,s):(i[l]=ct(o),i[l].c(),i[l].m(e,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},i:b,o:b,d(r){r&&y(e),de(i,r)}}}function dn(t,e,n){let{text:i}=e,{split_dir:r="vertical"}=e;return t.$$set=s=>{"text"in s&&n(0,i=s.text),"split_dir"in s&&n(1,r=s.split_dir)},[i,r]}class _n extends B{constructor(e){super(),q(this,e,dn,mn,T,{text:0,split_dir:1})}}function at(t,e,n){const i=t.slice();return i[3]=e[n],i}function ft(t,e,n){const i=t.slice();return i[3]=e[n],i}function hn(t){let e,n=t[0].split(`
`),i=[];for(let r=0;r<n.length;r+=1)i[r]=ut(at(t,n,r));return{c(){e=_("ul");for(let r=0;r<i.length;r+=1)i[r].c()},m(r,s){k(r,e,s);for(let l=0;l<i.length;l+=1)i[l].m(e,null)},p(r,s){if(s&1){n=r[0].split(`
`);let l;for(l=0;l<n.length;l+=1){const o=at(r,n,l);i[l]?i[l].p(o,s):(i[l]=ut(o),i[l].c(),i[l].m(e,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},d(r){r&&y(e),de(i,r)}}}function pn(t){let e,n=t[0].split(`
`),i=[];for(let r=0;r<n.length;r+=1)i[r]=gt(ft(t,n,r));return{c(){e=_("ol");for(let r=0;r<i.length;r+=1)i[r].c()},m(r,s){k(r,e,s);for(let l=0;l<i.length;l+=1)i[l].m(e,null)},p(r,s){if(s&1){n=r[0].split(`
`);let l;for(l=0;l<n.length;l+=1){const o=ft(r,n,l);i[l]?i[l].p(o,s):(i[l]=gt(o),i[l].c(),i[l].m(e,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},d(r){r&&y(e),de(i,r)}}}function ut(t){let e,n=t[3]+"",i;return{c(){e=_("li"),i=$(n),a(e,"class","svelte-105amht")},m(r,s){k(r,e,s),f(e,i)},p(r,s){s&1&&n!==(n=r[3]+"")&&N(i,n)},d(r){r&&y(e)}}}function gt(t){let e,n=t[3]+"",i;return{c(){e=_("li"),i=$(n),a(e,"class","svelte-105amht")},m(r,s){k(r,e,s),f(e,i)},p(r,s){s&1&&n!==(n=r[3]+"")&&N(i,n)},d(r){r&&y(e)}}}function bn(t){let e,n,i,r;function s(c,u){return c[2]?pn:hn}let l=s(t),o=l(t);return{c(){e=_("div"),n=_("h3"),i=$(t[1]),r=p(),o.c(),a(e,"class","svelte-105amht")},m(c,u){k(c,e,u),f(e,n),f(n,i),f(e,r),o.m(e,null)},p(c,[u]){u&2&&N(i,c[1]),l===(l=s(c))&&o?o.p(c,u):(o.d(1),o=l(c),o&&(o.c(),o.m(e,null)))},i:b,o:b,d(c){c&&y(e),o.d()}}}function wn(t,e,n){let{text:i=""}=e,{title:r}=e,{ordered:s=!1}=e;return t.$$set=l=>{"text"in l&&n(0,i=l.text),"title"in l&&n(1,r=l.title),"ordered"in l&&n(2,s=l.ordered)},[i,r,s]}class mt extends B{constructor(e){super(),q(this,e,wn,bn,T,{text:0,title:1,ordered:2})}}function yn(t){let e,n,i,r;return{c(){e=_("div"),n=_("b"),n.textContent="0",i=p(),r=_("div"),r.innerHTML=`<p class="svelte-1zhyrg">Members and counting.</p> 
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link" class="svelte-1zhyrg">Register Today!</a>`,a(n,"class","countdown svelte-1zhyrg"),a(e,"id","parent"),a(e,"class","svelte-1zhyrg")},m(s,l){k(s,e,l),f(e,n),t[3](n),f(e,i),f(e,r),t[4](e)},p:b,i:b,o:b,d(s){s&&y(e),t[3](null),t[4](null)}}}function vn(t,e,n){let{limit:i}=e,r,s;const l=(d,g,h,j)=>{let v=h-g,M=h>g?1:-1,z=Math.abs(Math.floor(j/v)),I=g,_e=setInterval(()=>{I+=M,d.textContent=I.toString(),I===h&&clearInterval(_e)},z)};let o=new IntersectionObserver(d=>{let g=d[0];g.isIntersecting&&(l(g.target,0,i,5e3),o.unobserve(g.target))},{threshold:1,root:s});It(()=>{o.observe(r)});function c(d){ve[d?"unshift":"push"](()=>{r=d,n(0,r)})}function u(d){ve[d?"unshift":"push"](()=>{s=d,n(1,s)})}return t.$$set=d=>{"limit"in d&&n(2,i=d.limit)},[r,s,i,c,u]}class kn extends B{constructor(e){super(),q(this,e,vn,yn,T,{limit:2})}}function dt(t,e,n){const i=t.slice();return i[3]=e[n],i[5]=n,i}function jn(t){let e,n=t[3]+"",i,r,s,l;function o(){return t[2](t[3])}return{c(){e=_("button"),i=$(n),r=p(),a(e,"class","nav_buttons")},m(c,u){k(c,e,u),f(e,i),f(e,r),s||(l=ue(e,"click",o),s=!0)},p(c,u){t=c},d(c){c&&y(e),s=!1,l()}}}function En(t){let e,n=t[3]+"",i,r,s,l;return{c(){e=_("button"),i=$(n),r=p(),a(e,"class","nav_buttons")},m(o,c){k(o,e,c),f(e,i),f(e,r),s||(l=ue(e,"click",t[1]),s=!0)},p:b,d(o){o&&y(e),s=!1,l()}}}function _t(t){let e;function n(s,l){return s[5]==0?En:jn}let r=n(t)(t);return{c(){r.c(),e=Et()},m(s,l){r.m(s,l),k(s,e,l)},p(s,l){r.p(s,l)},d(s){r.d(s),s&&y(e)}}}function Cn(t){let e,n=t[0],i=[];for(let r=0;r<n.length;r+=1)i[r]=_t(dt(t,n,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Et()},m(r,s){for(let l=0;l<i.length;l+=1)i[l].m(r,s);k(r,e,s)},p(r,[s]){if(s&1){n=r[0];let l;for(l=0;l<n.length;l+=1){const o=dt(r,n,l);i[l]?i[l].p(o,s):(i[l]=_t(o),i[l].c(),i[l].m(e.parentNode,e))}for(;l<i.length;l+=1)i[l].d(1);i.length=n.length}},i:b,o:b,d(r){de(i,r),r&&y(e)}}}function Sn(t){return[["Register","About","Projects","Contact Us"],()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"},r=>{document.querySelector(`#${Le(r)}`).scrollIntoView({block:"center"})}]}class ht extends B{constructor(e){super(),q(this,e,Sn,Cn,T,{})}}const{document:Me}=Ht;function pt(t,e,n){const i=t.slice();return i[12]=e[n],i[14]=n,i}function $n(t){let e,n;return e=new _n({props:{text:`If you want to contact us, click the register link in the navigation bar
or click at any of our icons to send us an email`,split_dir:"horizontal"}}),{c(){D(e.$$.fragment)},m(i,r){L(e,i,r),n=!0},p:b,i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}function bt(t){let e,n;return e=new fn({props:{name:t[12],src:t[8][t[14]],role:t[6][t[14]],email:t[7][t[14]]}}),{c(){D(e.$$.fragment)},m(i,r){L(e,i,r),n=!0},p:b,i(i){n||(S(e.$$.fragment,i),n=!0)},o(i){A(e.$$.fragment,i),n=!1},d(i){P(e,i)}}}function An(t){let e,n,i,r,s,l,o,c,u,d,g,h,j,v,M,z,I,_e,he,ke,w,G,De,J,Ie,K,Te,H,je,Oe,Q,Ne,O,qe,Y,Be,U,He,ae,Qe,Re,X,Fe,Z,Ve,x,Ge,ee,Je,te,Ke,R,Ye,Ue,Xe,fe,pe,Ee,Ze;h=new ht({}),I=new ht({}),G=new $e({props:{title:t[2][1]}}),J=new mt({props:{title:"Why ARC?",text:`Your participation in our events will be put in our news section and your name will be publicly displayed.
We will host workshops to imporove your skills.
We will actively contact companies for internships and partnership programs. Also, your participation will bolster your CV because we will give you real skills .
Meet people with similar intrests and have fun!
Anyone can start their own project with fellow club members, no hierarchy or bureaucracy!`}}),K=new mt({props:{title:"How Does it Work?",ordered:!0,text:`Start a project (about AI or robotics, of course).
Gather fellow club members to see who is interested. (Note that we might run several projects in parallel)
Work on the project and finish it.
Tell us about the details so that we can publish it on the website
Success!`}}),Q=new ln({props:{percent:t[1]}}),X=new kn({props:{limit:107}}),Z=new $e({props:{title:t[2][2]}}),x=new Ae({props:{caption_text:"Game controlled with AI hand motion controls",image:xt,alt:"mediapipe demo",mw:642}}),ee=new Ae({props:{caption_text:"Developing the site for this club",image:Zt,alt:"web",mw:960}}),te=new Ae({props:{caption_text:"Developing IOT solutions for environmental purposes",image:Xt,alt:"IOT cleaning",mw:960}}),R=new $e({props:{title:t[2][3],$$slots:{default:[$n]},$$scope:{ctx:t}}});let F=t[5],E=[];for(let m=0;m<F.length;m+=1)E[m]=bt(pt(t,F,m));const St=m=>A(E[m],1,1,()=>{E[m]=null});return{c(){e=_("script"),i=_("link"),r=p(),s=_("div"),l=_("div"),o=_("a"),c=_("img"),d=p(),g=_("div"),D(h.$$.fragment),j=p(),v=_("button"),v.innerHTML='<i class="fa-solid fa-bars"></i>',M=p(),z=_("div"),D(I.$$.fragment),_e=p(),he=_("div"),he.innerHTML=`<a href="https://www.facebook.com/profile.php?id=100090891691460"><i class="fab fa-facebook"></i></a> 
      <a href="https://github.com/Leboweeb/Engineering-Day-Website"><i class="fab fa-github"></i></a> 
      <a href="https://www.instagram.com/bau_arc/"><i class="fab fa-instagram"></i></a> 

      <a href="https://www.tiktok.com/@bau_a.r.c"><i class="fab fa-tiktok"></i></a> 
      <a href="mailto:arc.2023@outlook.com"><i class="fa-solid fa-envelope"></i></a>`,ke=p(),w=_("div"),D(G.$$.fragment),De=p(),D(J.$$.fragment),Ie=p(),D(K.$$.fragment),Te=p(),H=_("figure"),je=_("h2"),je.textContent="Job Opportunities and Activities",Oe=p(),D(Q.$$.fragment),Ne=p(),O=_("figcaption"),qe=$(`Post graduation job offer percentage :
      `),Y=_("a"),Y.textContent="internship experience",Be=$(`
      , as opposed to
      
      `),U=_("a"),U.textContent="no experience",He=$(`
      [`),ae=_("a"),ae.textContent="1",Qe=$("] (Click to show)"),Re=p(),D(X.$$.fragment),Fe=p(),D(Z.$$.fragment),Ve=p(),D(x.$$.fragment),Ge=p(),D(ee.$$.fragment),Je=p(),D(te.$$.fragment),Ke=p(),D(R.$$.fragment),Ye=p(),Ue=_("p"),Xe=p(),fe=_("div");for(let m=0;m<E.length;m+=1)E[m].c();oe(e.src,n="https://kit.fontawesome.com/255a2d624d.js")||a(e,"src",n),a(e,"crossorigin","anonymous"),Me.title="ARC Club",a(i,"rel","icon"),a(i,"href",lt),a(i,"type","image/x-icon"),oe(c.src,u=lt)||a(c,"src",u),a(c,"alt","Bau Logo"),a(o,"href","#top"),a(o,"id","bau-logo"),a(v,"id","mobile_menu"),a(g,"class","nav_text"),a(l,"id","navbar"),a(he,"class","social"),a(z,"class","mobile_wrapper"),a(s,"class","mobile_and_friends"),a(Y,"class","interactive_buttons"),a(Y,"href","javascript:void(0)"),a(U,"class","interactive_buttons"),a(U,"href","javascript:void(0)"),a(ae,"href","https://www.zippia.com/advice/internship-statistics/"),a(ae,"class","interactive_buttons"),a(fe,"class","profiles"),a(w,"class","make_space")},m(m,C){f(Me.head,e),f(Me.head,i),k(m,r,C),k(m,s,C),f(s,l),f(l,o),f(o,c),f(l,d),f(l,g),L(h,g,null),f(g,j),f(g,v),f(s,M),f(s,z),L(I,z,null),f(z,_e),f(z,he),k(m,ke,C),k(m,w,C),L(G,w,null),f(w,De),L(J,w,null),f(w,Ie),L(K,w,null),f(w,Te),f(w,H),f(H,je),f(H,Oe),L(Q,H,null),f(H,Ne),f(H,O),f(O,qe),f(O,Y),f(O,Be),f(O,U),f(O,He),f(O,ae),f(O,Qe),f(w,Re),L(X,w,null),f(w,Fe),L(Z,w,null),f(w,Ve),L(x,w,null),f(w,Ge),L(ee,w,null),f(w,Je),L(te,w,null),f(w,Ke),L(R,w,null),f(w,Ye),f(w,Ue),f(w,Xe),f(w,fe);for(let ne=0;ne<E.length;ne+=1)E[ne].m(fe,null);pe=!0,Ee||(Ze=[ue(v,"click",t[3]),ue(Y,"click",t[9]),ue(U,"click",t[10])],Ee=!0)},p(m,[C]){const ne={};C&2&&(ne.percent=m[1]),Q.$set(ne);const xe={};if(C&32768&&(xe.$$scope={dirty:C,ctx:m}),R.$set(xe),C&480){F=m[5];let W;for(W=0;W<F.length;W+=1){const et=pt(m,F,W);E[W]?(E[W].p(et,C),S(E[W],1)):(E[W]=bt(et),E[W].c(),S(E[W],1),E[W].m(fe,null))}for(qt(),W=F.length;W<E.length;W+=1)St(W);Bt()}},i(m){if(!pe){S(h.$$.fragment,m),S(I.$$.fragment,m),S(G.$$.fragment,m),S(J.$$.fragment,m),S(K.$$.fragment,m),S(Q.$$.fragment,m),S(X.$$.fragment,m),S(Z.$$.fragment,m),S(x.$$.fragment,m),S(ee.$$.fragment,m),S(te.$$.fragment,m),S(R.$$.fragment,m);for(let C=0;C<F.length;C+=1)S(E[C]);pe=!0}},o(m){A(h.$$.fragment,m),A(I.$$.fragment,m),A(G.$$.fragment,m),A(J.$$.fragment,m),A(K.$$.fragment,m),A(Q.$$.fragment,m),A(X.$$.fragment,m),A(Z.$$.fragment,m),A(x.$$.fragment,m),A(ee.$$.fragment,m),A(te.$$.fragment,m),A(R.$$.fragment,m),E=E.filter(Boolean);for(let C=0;C<E.length;C+=1)A(E[C]);pe=!1},d(m){y(e),y(i),m&&y(r),m&&y(s),P(h),P(I),m&&y(ke),m&&y(w),P(G),P(J),P(K),P(Q),P(X),P(Z),P(x),P(ee),P(te),P(R),de(E,m),Ee=!1,ce(Ze)}}}function Mn(t,e,n){let i;const r=["Register","About","Projects","Contact Us"],s=(M,z)=>{M.classList.contains(z)?M.classList.remove(z):M.classList.add(z)},l=()=>{let M=document.querySelector(".mobile_wrapper");s(M,"visible")};let o=0;const c=on(0,{duration:2e3});zt(t,c,M=>n(1,i=M));const u=["Ziad Doughan","Sari Itani","Mohammad Shahbaz","Sami Kanawati","Saja Hakim","Nour Hijazy","Lama Mawlawi","Jana Moslemani"],d=["Club Advisor","President","Vice President","PR & Social Media","Treasurer","Design Manager","Secretary","Logistics Manager"],g=["","ssi@student.bau.edu.lb","mys239@student.bau.edu.lb","smk057@student.bau.edu.lb","sgh237@student.bau.edu.lb","","lym075@student.bau.edu.lb","Jhm431@student.bau.edu.lb"],h=[Rt,Ft,Gt,Vt,Jt,Kt,Yt,Ut],j=()=>{n(0,o=57.5)},v=()=>{n(0,o=42.5)};return t.$$.update=()=>{t.$$.dirty&1&&c.set(o)},[o,i,r,l,c,u,d,g,h,j,v]}class zn extends B{constructor(e){super(),q(this,e,Mn,An,T,{})}}new zn({target:document.getElementById("app")});
