(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function E(){}const kt=e=>e;function Xe(e,t){for(const n in t)e[n]=t[n];return e}function _t(e){return e()}function Ze(){return Object.create(null)}function ue(e){e.forEach(_t)}function gt(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ye;function fe(e,t){return ye||(ye=document.createElement("a")),ye.href=t,e===ye.href}function jt(e){return Object.keys(e).length===0}function St(e,...t){if(e==null)return E;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Et(e,t,n){e.$$.on_destroy.push(St(t,n))}const mt=typeof window<"u";let Ct=mt?()=>window.performance.now():()=>Date.now(),ht=mt?e=>requestAnimationFrame(e):E;const ae=new Set;function pt(e){ae.forEach(t=>{t.c(e)||(ae.delete(t),t.f())}),ae.size!==0&&ht(pt)}function At(e){let t;return ae.size===0&&ht(pt),{promise:new Promise(n=>{ae.add(t={c:e,f:n})}),abort(){ae.delete(t)}}}function d(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function Ee(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function M(e){return document.createTextNode(e)}function j(){return M(" ")}function We(){return M("")}function U(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Lt(e){return Array.from(e.childNodes)}function Y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $e(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let ze;function pe(e){ze=e}const ce=[],xe=[],we=[],et=[],Mt=Promise.resolve();let De=!1;function Dt(){De||(De=!0,Mt.then(bt))}function Pe(e){we.push(e)}const Ce=new Set;let oe=0;function bt(){if(oe!==0)return;const e=ze;do{try{for(;oe<ce.length;){const t=ce[oe];oe++,pe(t),Pt(t.$$)}}catch(t){throw ce.length=0,oe=0,t}for(pe(null),ce.length=0,oe=0;xe.length;)xe.pop()();for(let t=0;t<we.length;t+=1){const n=we[t];Ce.has(n)||(Ce.add(n),n())}we.length=0}while(ce.length);for(;et.length;)et.pop()();De=!1,Ce.clear(),pe(e)}function Pt(e){if(e.fragment!==null){e.update(),ue(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Pe)}}const ve=new Set;let J;function yt(){J={r:0,c:[],p:J}}function wt(){J.r||ue(J.c),J=J.p}function P(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function O(e,t,n,i){if(e&&e.o){if(ve.has(e))return;ve.add(e),J.c.push(()=>{ve.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Tt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function F(e){e&&e.c()}function N(e,t,n,i){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),i||Pe(()=>{const o=e.$$.on_mount.map(_t).filter(gt);e.$$.on_destroy?e.$$.on_destroy.push(...o):ue(o),e.$$.on_mount=[]}),l.forEach(Pe)}function q(e,t){const n=e.$$;n.fragment!==null&&(ue(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(e,t){e.$$.dirty[0]===-1&&(ce.push(e),Dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,i,r,l,o,s=[-1]){const a=ze;pe(e);const f=e.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:Ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Ze(),dirty:s,skip_bound:!1,root:t.target||a.$$.root};o&&o(f.root);let g=!1;if(f.ctx=n?n(e,t.props||{},(_,b,...w)=>{const y=w.length?w[0]:b;return f.ctx&&r(f.ctx[_],f.ctx[_]=y)&&(!f.skip_bound&&f.bound[_]&&f.bound[_](y),g&&Wt(e,_)),b}):[],f.update(),g=!0,ue(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const _=Lt(t.target);f.fragment&&f.fragment.l(_),_.forEach(k)}else f.fragment&&f.fragment.c();t.intro&&P(e.$$.fragment),N(e,t.target,t.anchor,t.customElement),bt()}pe(a)}class _e{$destroy(){q(this,1),this.$destroy=E}$on(t,n){if(!gt(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!jt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt="/Engineering-Day-Website/assets/bau-logo-4f578f4b.png",zt="/Engineering-Day-Website/assets/sari.jpeg_processed-0e695edd.jpeg",Ot="/Engineering-Day-Website/assets/sami.jpeg_processed-3d67ba2a.jpeg",It="/Engineering-Day-Website/assets/mohammad.jpeg_processed-0751bb87.jpeg",Nt="/Engineering-Day-Website/assets/saja.jpeg_processed-c1dc15b2.jpeg",qt="/Engineering-Day-Website/assets/nour.jpeg_processed-5bbc6ce3.jpeg",Bt="/Engineering-Day-Website/assets/lama.jpeg_processed-302ec01b.jpeg",Qt="/Engineering-Day-Website/assets/jana.jpeg_processed-ea6107f0.jpeg",Ft="/Engineering-Day-Website/assets/IOT-d8602c41.png",Ht="/Engineering-Day-Website/assets/web-541b82ed.png",Rt="/Engineering-Day-Website/assets/mediapipe-ab5ba981.png",ke=e=>e.toLowerCase().trim().split(" ").join("_");function nt(e,t,n){const i=e.slice();return i[1]=t[n],i}function it(e){let t,n=e[1]+"",i;return{c(){t=h("p"),i=M(n),c(t,"class","svelte-z7l5zy")},m(r,l){A(r,t,l),d(t,i)},p(r,l){l&1&&n!==(n=r[1]+"")&&Y(i,n)},d(r){r&&k(t)}}}function Kt(e){let t,n=e[0],i=[];for(let r=0;r<n.length;r+=1)i[r]=it(nt(e,n,r));return{c(){t=h("div");for(let r=0;r<i.length;r+=1)i[r].c();c(t,"class","svelte-z7l5zy")},m(r,l){A(r,t,l);for(let o=0;o<i.length;o+=1)i[o].m(t,null)},p(r,[l]){if(l&1){n=r[0];let o;for(o=0;o<n.length;o+=1){const s=nt(r,n,o);i[o]?i[o].p(s,l):(i[o]=it(s),i[o].c(),i[o].m(t,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:E,o:E,d(r){r&&k(t),he(i,r)}}}function Vt(e,t,n){let{strs:i}=t;return e.$$set=r=>{"strs"in r&&n(0,i=r.strs)},[i]}class Gt extends _e{constructor(t){super(),de(this,t,Vt,Kt,X,{strs:0})}}function rt(e,t,n){const i=e.slice();return i[4]=t[n],i}function Jt(e){let t,n=e[2].split(`
`),i=[];for(let r=0;r<n.length;r+=1)i[r]=lt(rt(e,n,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();t=We()},m(r,l){for(let o=0;o<i.length;o+=1)i[o].m(r,l);A(r,t,l)},p(r,l){if(l&4){n=r[2].split(`
`);let o;for(o=0;o<n.length;o+=1){const s=rt(r,n,o);i[o]?i[o].p(s,l):(i[o]=lt(s),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:E,o:E,d(r){he(i,r),r&&k(t)}}}function Ut(e){let t,n;return t=new Gt({props:{strs:e[2].split(`
`)}}),{c(){F(t.$$.fragment)},m(i,r){N(t,i,r),n=!0},p(i,r){const l={};r&4&&(l.strs=i[2].split(`
`)),t.$set(l)},i(i){n||(P(t.$$.fragment,i),n=!0)},o(i){O(t.$$.fragment,i),n=!1},d(i){q(t,i)}}}function lt(e){let t,n=e[4]+"",i;return{c(){t=h("p"),i=M(n),c(t,"class","svelte-1rux5ji")},m(r,l){A(r,t,l),d(t,i)},p(r,l){l&4&&n!==(n=r[4]+"")&&Y(i,n)},d(r){r&&k(t)}}}function Yt(e){let t,n,i,r,l,o,s,a,f,g,_,b;const w=[Ut,Jt],y=[];function D(v,L){return v[1]==="horizontal"?0:1}return f=D(e),g=y[f]=w[f](e),{c(){t=h("div"),n=h("section"),i=h("h1"),r=M(e[0]),l=j(),o=h("hr"),s=j(),a=h("div"),g.c(),c(i,"class","svelte-1rux5ji"),c(o,"class","svelte-1rux5ji"),c(a,"class","svelte-1rux5ji"),c(n,"class","svelte-1rux5ji"),$e(n,"--bg-color",e[3]),c(t,"id",_=ke(e[0])),c(t,"class","svelte-1rux5ji")},m(v,L){A(v,t,L),d(t,n),d(n,i),d(i,r),d(n,l),d(n,o),d(n,s),d(n,a),y[f].m(a,null),b=!0},p(v,[L]){(!b||L&1)&&Y(r,v[0]);let B=f;f=D(v),f===B?y[f].p(v,L):(yt(),O(y[B],1,1,()=>{y[B]=null}),wt(),g=y[f],g?g.p(v,L):(g=y[f]=w[f](v),g.c()),P(g,1),g.m(a,null)),L&8&&$e(n,"--bg-color",v[3]),(!b||L&1&&_!==(_=ke(v[0])))&&c(t,"id",_)},i(v){b||(P(g),b=!0)},o(v){O(g),b=!1},d(v){v&&k(t),y[f].d()}}}function Xt(e,t,n){let{title:i=""}=t,{split_dir:r="vertical"}=t,{text:l=""}=t,{bg:o="white"}=t;return e.$$set=s=>{"title"in s&&n(0,i=s.title),"split_dir"in s&&n(1,r=s.split_dir),"text"in s&&n(2,l=s.text),"bg"in s&&n(3,o=s.bg)},[i,r,l,o]}class Ae extends _e{constructor(t){super(),de(this,t,Xt,Yt,X,{title:0,split_dir:1,text:2,bg:3})}}function Zt(e){let t,n,i,r,l,o,s=Math.round(e[1])+"",a,f;return{c(){t=Ee("svg"),n=Ee("circle"),i=Ee("circle"),l=j(),o=h("p"),a=M(s),f=M(" percent"),c(n,"r",e[4]),c(n,"cx",e[4]),c(n,"cy",e[4]),c(n,"fill",e[2]),c(i,"r",r=e[4]/2),c(i,"cx",e[4]),c(i,"cy",e[4]),c(i,"fill",e[2]),c(i,"stroke",e[3]),c(i,"stroke-width",e[4]),c(i,"stroke-dasharray",e[5]),c(t,"width",e[0]),c(t,"height",e[0]),c(t,"viewBox",e[6])},m(g,_){A(g,t,_),d(t,n),d(t,i),A(g,l,_),A(g,o,_),d(o,a),d(o,f)},p(g,[_]){_&16&&c(n,"r",g[4]),_&16&&c(n,"cx",g[4]),_&16&&c(n,"cy",g[4]),_&4&&c(n,"fill",g[2]),_&16&&r!==(r=g[4]/2)&&c(i,"r",r),_&16&&c(i,"cx",g[4]),_&16&&c(i,"cy",g[4]),_&4&&c(i,"fill",g[2]),_&8&&c(i,"stroke",g[3]),_&16&&c(i,"stroke-width",g[4]),_&32&&c(i,"stroke-dasharray",g[5]),_&1&&c(t,"width",g[0]),_&1&&c(t,"height",g[0]),_&64&&c(t,"viewBox",g[6]),_&2&&s!==(s=Math.round(g[1])+"")&&Y(a,s)},i:E,o:E,d(g){g&&k(t),g&&k(l),g&&k(o)}}}function $t(e,t,n){let i,r,l,o,s,{size:a=200}=t,{percent:f=0}=t,{bgColor:g="cornflowerblue"}=t,{fgColor:_="orange"}=t;return e.$$set=b=>{"size"in b&&n(0,a=b.size),"percent"in b&&n(1,f=b.percent),"bgColor"in b&&n(2,g=b.bgColor),"fgColor"in b&&n(3,_=b.fgColor)},e.$$.update=()=>{e.$$.dirty&1&&n(6,i=`0 0 ${a} ${a}`),e.$$.dirty&1&&n(4,r=a/2),e.$$.dirty&16&&n(8,l=Math.PI*r),e.$$.dirty&258&&n(7,o=l*(f/100)),e.$$.dirty&384&&n(5,s=`0 ${l-o} ${o}`)},[a,f,g,_,r,s,i,o,l]}class xt extends _e{constructor(t){super(),de(this,t,$t,Zt,X,{size:0,percent:1,bgColor:2,fgColor:3})}}const se=[];function en(e,t=E){let n;const i=new Set;function r(s){if(X(e,s)&&(e=s,n)){const a=!se.length;for(const f of i)f[1](),se.push(f,e);if(a){for(let f=0;f<se.length;f+=2)se[f][0](se[f+1]);se.length=0}}}function l(s){r(s(e))}function o(s,a=E){const f=[s,a];return i.add(f),i.size===1&&(n=t(r)||E),s(e),()=>{i.delete(f),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:o}}function ot(e){return Object.prototype.toString.call(e)==="[object Date]"}function Te(e,t){if(e===t||e!==e)return()=>e;const n=typeof e;if(n!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((r,l)=>Te(e[l],r));return r=>i.map(l=>l(r))}if(n==="object"){if(!e||!t)throw new Error("Object cannot be null");if(ot(e)&&ot(t)){e=e.getTime(),t=t.getTime();const l=t-e;return o=>new Date(e+o*l)}const i=Object.keys(t),r={};return i.forEach(l=>{r[l]=Te(e[l],t[l])}),l=>{const o={};return i.forEach(s=>{o[s]=r[s](l)}),o}}if(n==="number"){const i=t-e;return r=>e+r*i}throw new Error(`Cannot interpolate ${n} values`)}function tn(e,t={}){const n=en(e);let i,r=e;function l(o,s){if(e==null)return n.set(e=o),Promise.resolve();r=o;let a=i,f=!1,{delay:g=0,duration:_=400,easing:b=kt,interpolate:w=Te}=Xe(Xe({},t),s);if(_===0)return a&&(a.abort(),a=null),n.set(e=r),Promise.resolve();const y=Ct()+g;let D;return i=At(v=>{if(v<y)return!0;f||(D=w(e,o),typeof _=="function"&&(_=_(e,o)),f=!0),a&&(a.abort(),a=null);const L=v-y;return L>_?(n.set(e=o),!1):(n.set(e=D(b(L/_))),!0)}),i.promise}return{set:l,update:(o,s)=>l(o(r,e),s),subscribe:n.subscribe}}function nn(e){let t,n,i,r,l,o,s,a,f,g,_,b;return{c(){t=h("div"),n=h("a"),i=h("img"),s=j(),a=h("p"),f=M(e[1]),g=j(),_=h("p"),b=M(e[3]),fe(i.src,r=e[0])||c(i,"src",r),c(i,"alt",l=`profile picture of ${e[1]}`),c(i,"srcset",""),c(i,"class","svelte-8gl6iv"),c(n,"href",o="mailto:"+e[2]),c(_,"class","role svelte-8gl6iv"),c(t,"class","profile svelte-8gl6iv")},m(w,y){A(w,t,y),d(t,n),d(n,i),d(t,s),d(t,a),d(a,f),d(t,g),d(t,_),d(_,b)},p(w,[y]){y&1&&!fe(i.src,r=w[0])&&c(i,"src",r),y&2&&l!==(l=`profile picture of ${w[1]}`)&&c(i,"alt",l),y&4&&o!==(o="mailto:"+w[2])&&c(n,"href",o),y&2&&Y(f,w[1]),y&8&&Y(b,w[3])},i:E,o:E,d(w){w&&k(t)}}}function rn(e,t,n){let{src:i}=t,{name:r}=t,{email:l}=t,{role:o}=t;return e.$$set=s=>{"src"in s&&n(0,i=s.src),"name"in s&&n(1,r=s.name),"email"in s&&n(2,l=s.email),"role"in s&&n(3,o=s.role)},[i,r,l,o]}class ln extends _e{constructor(t){super(),de(this,t,rn,nn,X,{src:0,name:1,email:2,role:3})}}function on(e){let t,n,i,r,l,o,s;return{c(){t=h("figure"),n=h("img"),r=j(),l=h("figcaption"),o=M(e[0]),fe(n.src,i=e[2])||c(n,"src",i),c(n,"alt",e[1]),c(n,"class","svelte-1my5d6e"),c(t,"style",s="--col="+e[4]+" --mw="+e[3]),c(t,"class","svelte-1my5d6e")},m(a,f){A(a,t,f),d(t,n),d(t,r),d(t,l),d(l,o)},p(a,[f]){f&4&&!fe(n.src,i=a[2])&&c(n,"src",i),f&2&&c(n,"alt",a[1]),f&1&&Y(o,a[0]),f&24&&s!==(s="--col="+a[4]+" --mw="+a[3])&&c(t,"style",s)},i:E,o:E,d(a){a&&k(t)}}}function sn(e,t,n){let{caption_text:i}=t,{alt:r}=t,{image:l}=t,{mw:o}=t,{border_color:s="#cccccc"}=t;return e.$$set=a=>{"caption_text"in a&&n(0,i=a.caption_text),"alt"in a&&n(1,r=a.alt),"image"in a&&n(2,l=a.image),"mw"in a&&n(3,o=a.mw),"border_color"in a&&n(4,s=a.border_color)},[i,r,l,o,s]}class Le extends _e{constructor(t){super(),de(this,t,sn,on,X,{caption_text:0,alt:1,image:2,mw:3,border_color:4})}}const{document:Me}=Tt;function st(e,t,n){const i=e.slice();return i[16]=t[n],i[18]=n,i}function ct(e,t,n){const i=e.slice();return i[19]=t[n],i[18]=n,i}function at(e,t,n){const i=e.slice();return i[19]=t[n],i[18]=n,i}function cn(e){let t,n=e[19]+"",i,r,l;function o(){return e[10](e[19])}return{c(){t=h("button"),i=M(n),c(t,"class","nav_buttons")},m(s,a){A(s,t,a),d(t,i),r||(l=U(t,"click",o),r=!0)},p(s,a){e=s},d(s){s&&k(t),r=!1,l()}}}function an(e){let t,n=e[19]+"",i,r,l;return{c(){t=h("button"),i=M(n),c(t,"class","nav_buttons")},m(o,s){A(o,t,s),d(t,i),r||(l=U(t,"click",e[9]),r=!0)},p:E,d(o){o&&k(t),r=!1,l()}}}function ft(e){let t;function n(l,o){return l[18]==0?an:cn}let r=n(e)(e);return{c(){r.c(),t=We()},m(l,o){r.m(l,o),A(l,t,o)},p(l,o){r.p(l,o)},d(l){r.d(l),l&&k(t)}}}function fn(e){let t,n=e[19]+"",i,r,l;function o(){return e[12](e[19])}return{c(){t=h("button"),i=M(n),c(t,"class","nav_buttons_mobile")},m(s,a){A(s,t,a),d(t,i),r||(l=U(t,"click",o),r=!0)},p(s,a){e=s},d(s){s&&k(t),r=!1,l()}}}function un(e){let t,n=e[19]+"",i,r,l;return{c(){t=h("button"),i=M(n),c(t,"class","nav_buttons_mobile")},m(o,s){A(o,t,s),d(t,i),r||(l=U(t,"click",e[11]),r=!0)},p:E,d(o){o&&k(t),r=!1,l()}}}function ut(e){let t;function n(l,o){return l[18]==0?un:fn}let r=n(e)(e);return{c(){r.c(),t=We()},m(l,o){r.m(l,o),A(l,t,o)},p(l,o){r.p(l,o)},d(l){r.d(l),l&&k(t)}}}function dt(e){let t,n;return t=new ln({props:{name:e[16],src:e[8][e[18]],role:e[6][e[18]],email:e[7][e[18]]}}),{c(){F(t.$$.fragment)},m(i,r){N(t,i,r),n=!0},p:E,i(i){n||(P(t.$$.fragment,i),n=!0)},o(i){O(t.$$.fragment,i),n=!1},d(i){q(t,i)}}}function dn(e){let t,n,i,r,l,o,s,a,f,g,_,b,w,y,D,v,L,B,p,I,H,K,je,Oe,V,Ie,Q,Ne,Z,qe,$,Be,ge,Qe,Fe,x,He,ee,Re,te,Ke,ne,Ve,ie,Ge,Je,Ue,me,be,Se,Ye,re=e[2],T=[];for(let u=0;u<re.length;u+=1)T[u]=ft(at(e,re,u));let le=e[2],W=[];for(let u=0;u<le.length;u+=1)W[u]=ut(ct(e,le,u));I=new Ae({props:{title:e[2][1],text:`Many freshmen and graduates alike feel unprepared for work or that the subjects they've learned in school or university are not relevant to their degree. Unfortunately, this is true. This is especially true for computer scientists and engineers who often state that they learn much more on their own than in university.
This club aims to be the opposite and let you work on professional level projects and learn in demand skills light years faster than any course. We only ask you to be patient and expect that projects will be hard, because nothing worth doing is easy. `}}),V=new xt({props:{percent:e[1]}}),x=new Ae({props:{title:e[2][2],text:`Your participation in our events will be put in our news section and your name will be publicly displayed.
We will actively contact companies for internships and partnership programs. Also, your participation will bolster your CV because we will give you real skills and not bore you with theoretical work.
Our projects may be the most important asset to achieve the club's purpose of allowing students with simiar interests interact and work together in a university setting while building important experiences and hoarding essential knowledge and skills saught after in the industry, not taught at university, and most importantly, having a lot of fun!
Students have the freedom to participate in or even start their own projects relevant to the topics of interest of the club : AI, robotics, and gaming.`}}),ee=new Le({props:{caption_text:"Game controlled with AI hand motion controls",border_color:"transparent",image:Rt,alt:"mediapipe demo",mw:642}}),te=new Le({props:{caption_text:"Developing the site for this club",border_color:"transparent",image:Ht,alt:"web",mw:960}}),ne=new Le({props:{caption_text:"Developing IOT solutions for environmental purposes",border_color:"transparent",image:Ft,alt:"IOT cleaning",mw:960}}),ie=new Ae({props:{title:e[2][3],text:`If you want to contact us, click the register link in the navigation bar
or click at any of our icons to send us an email`}});let G=e[5],S=[];for(let u=0;u<G.length;u+=1)S[u]=dt(st(e,G,u));const vt=u=>O(S[u],1,1,()=>{S[u]=null});return{c(){t=h("script"),i=h("link"),r=j(),l=h("div"),o=h("div"),s=h("a"),a=h("img"),g=j(),_=h("div");for(let u=0;u<T.length;u+=1)T[u].c();b=j(),w=h("button"),w.innerHTML='<i class="fa-solid fa-bars"></i>',y=j(),D=h("div");for(let u=0;u<W.length;u+=1)W[u].c();v=j(),L=h("div"),L.innerHTML=`<a href="https://www.facebook.com/profile.php?id=100090891691460"><i class="fab fa-facebook"></i></a> 
      <a href="https://github.com/Leboweeb/Engineering-Day-Website"><i class="fab fa-github"></i></a> 
      <a href="https://www.instagram.com/bau_arc/"><i class="fab fa-instagram"></i></a> 

      <a href="https://www.tiktok.com/@bau_a.r.c"><i class="fab fa-tiktok"></i></a> 
      <a href="mailto:arc.2023@outlook.com"><i class="fa-solid fa-envelope"></i></a>`,B=j(),p=h("div"),F(I.$$.fragment),H=j(),K=h("figure"),je=h("h1"),je.textContent="Unreadiness Among Students",Oe=j(),F(V.$$.fragment),Ie=j(),Q=h("figcaption"),Ne=M(`Percentage of students who feel unprepared for
      `),Z=h("a"),Z.textContent="work",qe=M(`
      , as opposed to
      
      `),$=h("a"),$.textContent="college",Be=M(`
      [`),ge=h("a"),ge.textContent="1",Qe=M("] (Click to show)"),Fe=j(),F(x.$$.fragment),He=j(),F(ee.$$.fragment),Re=j(),F(te.$$.fragment),Ke=j(),F(ne.$$.fragment),Ve=j(),F(ie.$$.fragment),Ge=j(),Je=h("p"),Ue=j(),me=h("div");for(let u=0;u<S.length;u+=1)S[u].c();fe(t.src,n="https://kit.fontawesome.com/255a2d624d.js")||c(t,"src",n),c(t,"crossorigin","anonymous"),Me.title="ARC Club",c(i,"rel","icon"),c(i,"href",tt),c(i,"type","image/x-icon"),fe(a.src,f=tt)||c(a,"src",f),c(a,"alt","Bau Logo"),c(s,"href","#top"),c(s,"id","bau-logo"),c(w,"id","mobile_menu"),c(_,"class","nav_text"),c(o,"id","navbar"),c(L,"class","social"),c(D,"class","mobile_wrapper"),c(l,"class","mobile_and_friends"),c(Z,"class","interactive_buttons"),c(Z,"href","javascript:void(0)"),c($,"class","interactive_buttons"),c($,"href","javascript:void(0)"),c(ge,"href","https://www.edweek.org/teaching-learning/teens-feel-ready-for-college-but-not-so-much-for-work/2019/09"),c(ge,"class","interactive_buttons"),c(me,"class","profiles"),c(p,"class","make_space")},m(u,C){d(Me.head,t),d(Me.head,i),A(u,r,C),A(u,l,C),d(l,o),d(o,s),d(s,a),d(o,g),d(o,_);for(let z=0;z<T.length;z+=1)T[z].m(_,null);d(_,b),d(_,w),d(l,y),d(l,D);for(let z=0;z<W.length;z+=1)W[z].m(D,null);d(D,v),d(D,L),A(u,B,C),A(u,p,C),N(I,p,null),d(p,H),d(p,K),d(K,je),d(K,Oe),N(V,K,null),d(K,Ie),d(K,Q),d(Q,Ne),d(Q,Z),d(Q,qe),d(Q,$),d(Q,Be),d(Q,ge),d(Q,Qe),d(p,Fe),N(x,p,null),d(p,He),N(ee,p,null),d(p,Re),N(te,p,null),d(p,Ke),N(ne,p,null),d(p,Ve),N(ie,p,null),d(p,Ge),d(p,Je),d(p,Ue),d(p,me);for(let z=0;z<S.length;z+=1)S[z].m(me,null);be=!0,Se||(Ye=[U(w,"click",e[3]),U(Z,"click",e[13]),U($,"click",e[14])],Se=!0)},p(u,[C]){if(C&4){re=u[2];let m;for(m=0;m<re.length;m+=1){const R=at(u,re,m);T[m]?T[m].p(R,C):(T[m]=ft(R),T[m].c(),T[m].m(_,b))}for(;m<T.length;m+=1)T[m].d(1);T.length=re.length}if(C&4){le=u[2];let m;for(m=0;m<le.length;m+=1){const R=ct(u,le,m);W[m]?W[m].p(R,C):(W[m]=ut(R),W[m].c(),W[m].m(D,v))}for(;m<W.length;m+=1)W[m].d(1);W.length=le.length}const z={};if(C&2&&(z.percent=u[1]),V.$set(z),C&480){G=u[5];let m;for(m=0;m<G.length;m+=1){const R=st(u,G,m);S[m]?(S[m].p(R,C),P(S[m],1)):(S[m]=dt(R),S[m].c(),P(S[m],1),S[m].m(me,null))}for(yt(),m=G.length;m<S.length;m+=1)vt(m);wt()}},i(u){if(!be){P(I.$$.fragment,u),P(V.$$.fragment,u),P(x.$$.fragment,u),P(ee.$$.fragment,u),P(te.$$.fragment,u),P(ne.$$.fragment,u),P(ie.$$.fragment,u);for(let C=0;C<G.length;C+=1)P(S[C]);be=!0}},o(u){O(I.$$.fragment,u),O(V.$$.fragment,u),O(x.$$.fragment,u),O(ee.$$.fragment,u),O(te.$$.fragment,u),O(ne.$$.fragment,u),O(ie.$$.fragment,u),S=S.filter(Boolean);for(let C=0;C<S.length;C+=1)O(S[C]);be=!1},d(u){k(t),k(i),u&&k(r),u&&k(l),he(T,u),he(W,u),u&&k(B),u&&k(p),q(I),q(V),q(x),q(ee),q(te),q(ne),q(ie),he(S,u),Se=!1,ue(Ye)}}}function _n(e,t,n){let i;const r=["Register","About","Projects","Contact Us"],l=(p,I)=>{p.classList.contains(I)?p.classList.remove(I):p.classList.add(I)},o=()=>{let p=document.querySelector(".mobile_wrapper");l(p,"visible")};let s=0;const a=tn(0,{duration:2e3});Et(e,a,p=>n(1,i=p));const f=["Ziad Doughan","Sari Itani","Mohammad Shahbaz","Sami Kanawati","Saja Hakim","Nour Hijazy","Lama Mawlawi","Jana Moslemani"],g=["Club Advisor","President","Vice President","PR & Social Media","Treasurer","Design Manager","Secretary","Logistics Manager"],_=["","ssi@student.bau.edu.lb","mys239@student.bau.edu.lb","smk057@student.bau.edu.lb","sgh237@student.bau.edu.lb","","lym075@student.bau.edu.lb","Jhm431@student.bau.edu.lb"],b=["",zt,It,Ot,Nt,qt,Bt,Qt],w=()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"},y=p=>{let H=document.querySelector(`#${ke(p)}`).getBoundingClientRect();window.scrollTo(H.x,H.y)},D=()=>{window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc848WhWQQKn8eycGvNfkFiVMHy1XPYB3hM0aS1fiArqcprbQ/viewform?usp=sf_link"},v=p=>{let H=document.querySelector(`#${ke(p)}`).getBoundingClientRect();window.scrollTo(H.x,H.y)},L=()=>{n(0,s=52)},B=()=>{n(0,s=81)};return e.$$.update=()=>{e.$$.dirty&1&&a.set(s)},[s,i,r,o,a,f,g,_,b,w,y,D,v,L,B]}class gn extends _e{constructor(t){super(),de(this,t,_n,dn,X,{})}}new gn({target:document.getElementById("app")});
