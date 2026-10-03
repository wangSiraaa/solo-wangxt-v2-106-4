(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ut={},Lr=[],vi=()=>{},_d=()=>!1,$a=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qa=n=>n.startsWith("onUpdate:"),cn=Object.assign,bu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Km=Object.prototype.hasOwnProperty,Tt=(n,e)=>Km.call(n,e),st=Array.isArray,fr=n=>vo(n)==="[object Map]",$i=n=>vo(n)==="[object Set]",fh=n=>vo(n)==="[object Date]",ct=n=>typeof n=="function",Wt=n=>typeof n=="string",Si=n=>typeof n=="symbol",Lt=n=>n!==null&&typeof n=="object",vd=n=>(Lt(n)||ct(n))&&ct(n.then)&&ct(n.catch),xd=Object.prototype.toString,vo=n=>xd.call(n),Zm=n=>vo(n).slice(8,-1),Sd=n=>vo(n)==="[object Object]",Eu=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ws=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Jm=/-\w/g,Jn=Ya(n=>n.replace(Jm,e=>e.slice(1).toUpperCase())),jm=/\B([A-Z])/g,Vr=Ya(n=>n.replace(jm,"-$1").toLowerCase()),Md=Ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),xl=Ya(n=>n?`on${Md(n)}`:""),di=(n,e)=>!Object.is(n,e),xa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Ka=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let dh;const Za=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ja(n){if(st(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Wt(i)?ng(i):Ja(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Wt(n)||Lt(n))return n}const Qm=/;(?![^(]*\))/g,eg=/:([^]+)/,tg=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ng(n){const e={};return n.replace(tg,t=>t.startsWith("/*")?"":t).split(Qm).forEach(t=>{if(t){const i=t.split(eg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ci(n){let e="";if(Wt(n))e=n;else if(st(n))for(let t=0;t<n.length;t++){const i=ci(n[t]);i&&(e+=i+" ")}else if(Lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rg=yu(ig);function bd(n){return!!n||n===""}function sg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=qi(n[r],e[r],t);return i}function ph(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let o=-1;for(let a=0;a<i.length;a++)if(!r[a]&&qi(s,i[a],t)){o=a;break}if(o<0)return!1;r[o]=1}return!0}function og(n,e,t){let i=fr(n),r=fr(e);if(i||r||(i=$i(n),r=$i(e),i||r))return i&&r?ph(n,e,t):!1;const s=Object.keys(n).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!qi(n[a],e[a],t))return!1}return String(n)===String(e)}function mh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const o=i(n,e,t);return r.delete(n),s.delete(e),o}function qi(n,e,t){if(n===e)return!0;let i=fh(n),r=fh(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Si(n),r=Si(e),i||r?n===e:(i=st(n),r=st(e),i||r?i&&r?mh(n,e,t,sg):!1:(i=Lt(n),r=Lt(e),i||r?!i||!r?!1:mh(n,e,t,og):String(n)===String(e))))}function Tu(n,e){return n.findIndex(t=>qi(t,e))}const Ed=n=>!!(n&&n.__v_isRef===!0),Xe=n=>Wt(n)?n:n==null?"":st(n)||Lt(n)&&(n.toString===xd||!ct(n.toString))?Ed(n)?Xe(n.value):JSON.stringify(n,Td,2):String(n),Td=(n,e)=>Ed(e)?Td(n,e.value):fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Sl(i,s)+" =>"]=r,t),{})}:$i(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sl(t))}:Si(e)?Sl(e):Lt(e)&&!st(e)&&!Sd(e)?String(e):e,Sl=(n,e="")=>{var t;return Si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rn;class ag{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&rn&&(rn.active?(this.parent=rn,this.index=(rn.scopes||(rn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){++this._on===1&&(this.prevScope=rn,rn=this)}off(){if(this._on>0&&--this._on===0){if(rn===this)rn=this.prevScope;else{let e=rn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function lg(){return rn}let Ft;const Ml=new WeakSet;class Ad{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rn&&(rn.active?rn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ml.has(this)&&(Ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gh(this),Cd(this);const e=Ft,t=jn;Ft=this,jn=!0;try{return this.fn()}finally{Pd(this),Ft=e,jn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ru(e);this.deps=this.depsTail=void 0,gh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let wd=0,Xs,$s;function Rd(n,e=!1){if(n.flags|=8,e){n.next=$s,$s=n;return}n.next=Xs,Xs=n}function Au(){wd++}function wu(){if(--wd>0)return;if($s){let e=$s;for($s=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Cd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ru(i),cg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function _c(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===no)||(n.globalVersion=no,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_c(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=jn;Ft=n,jn=!0;try{Cd(n);const r=n.fn(n._value);(e.version===0||di(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=t,jn=i,Pd(n),n.flags&=-3}}function Ru(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ru(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let jn=!0;const Dd=[];function Yi(){Dd.push(jn),jn=!1}function Ki(){const n=Dd.pop();jn=n===void 0?!0:n}function gh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let no=0;class ug{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!jn||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new ug(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,Id(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,no++,this.notify(e)}notify(e){Au();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wu()}}}function Id(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Id(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const vc=new WeakMap,Ur=Symbol(""),xc=Symbol(""),io=Symbol("");function fn(n,e,t){if(jn&&Ft){let i=vc.get(n);i||vc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Cu),r.map=i,r.key=t),r.track()}}function Bi(n,e,t,i,r,s){const o=vc.get(n);if(!o){no++;return}const a=l=>{l&&l.trigger()};if(Au(),e==="clear")o.forEach(a);else{const l=st(n),c=l&&Eu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===io||!Si(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(io)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ur)),fr(n)&&a(o.get(xc)));break;case"delete":l||(a(o.get(Ur)),fr(n)&&a(o.get(xc)));break;case"set":fr(n)&&a(o.get(Ur));break}}wu()}function Hr(n){const e=Et(n);return e===n||(fn(e,"iterate",io),kn(n))?e:Mi(n)?dr(n)?e.map(t=>pr(Gn(t))):e.map(pr):e.map(Gn)}function ja(n){return fn(n=Et(n),"iterate",io),n}function ui(n,e){return Mi(n)?pr(dr(n)?Gn(e):e):Gn(e)}const hg={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,n=>ui(this,n))},concat(...n){return Hr(this).concat(...n.map(e=>st(e)?Hr(e):e))},entries(){return yl(this,"entries",n=>(n[1]=ui(this,n[1]),n))},every(n,e){return Ci(this,"every",n,e,void 0,arguments)},filter(n,e){return Ci(this,"filter",n,e,t=>t.map(i=>ui(this,i)),arguments)},find(n,e){return Ci(this,"find",n,e,t=>ui(this,t),arguments)},findIndex(n,e){return Ci(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ci(this,"findLast",n,e,t=>ui(this,t),arguments)},findLastIndex(n,e){return Ci(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ci(this,"forEach",n,e,void 0,arguments)},includes(...n){return bl(this,"includes",n)},indexOf(...n){return bl(this,"indexOf",n)},join(n){return Hr(this).join(n)},lastIndexOf(...n){return bl(this,"lastIndexOf",n)},map(n,e){return Ci(this,"map",n,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...n){return ws(this,"push",n)},reduce(n,...e){return _h(this,"reduce",n,e)},reduceRight(n,...e){return _h(this,"reduceRight",n,e)},shift(){return ws(this,"shift")},some(n,e){return Ci(this,"some",n,e,void 0,arguments)},splice(...n){return ws(this,"splice",n)},toReversed(){return Hr(this).toReversed()},toSorted(n){return Hr(this).toSorted(n)},toSpliced(...n){return Hr(this).toSpliced(...n)},unshift(...n){return ws(this,"unshift",n)},values(){return yl(this,"values",n=>ui(this,n))}};function yl(n,e,t){const i=ja(n),r=i[e]();return i!==n&&!kn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const fg=Array.prototype;function Ci(n,e,t,i,r,s){const o=ja(n),a=o!==n&&!kn(n),l=o[e];if(l!==fg[e]){const f=l.apply(n,s);return a?Gn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,ui(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function _h(n,e,t,i){const r=ja(n),s=r!==n&&!kn(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=ui(n,c)),t.call(this,c,ui(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?ui(n,l):l}function bl(n,e,t){const i=Et(n);fn(i,"iterate",io);const r=i[e](...t);return(r===-1||r===!1)&&Du(t[0])?(t[0]=Et(t[0]),i[e](...t)):r}function ws(n,e,t=[]){Yi(),Au();const i=Et(n)[e].apply(n,t);return wu(),Ki(),i}const dg=yu("__proto__,__v_isRef,__isVue"),Ud=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Si));function pg(n){Si(n)||(n=String(n));const e=Et(this);return fn(e,"has",n),e.hasOwnProperty(n)}class Nd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Eg:zd:s?Bd:Od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=st(e);if(!r){let l;if(o&&(l=hg[t]))return l;if(t==="hasOwnProperty")return pg}const a=Reflect.get(e,t,pn(e)?e:i);if((Si(t)?Ud.has(t):dg(t))||(r||fn(e,"get",t),s))return a;if(pn(a)){const l=o&&Eu(t)?a:a.value;return r&&Lt(l)?Mc(l):l}return Lt(a)?r?Mc(a):as(a):a}}class Fd extends Nd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=st(e)&&Eu(t);if(!this._isShallow){const c=Mi(s);if(!kn(i)&&!Mi(i)&&(s=Et(s),i=Et(i)),!o&&pn(s)&&!pn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Tt(e,t),l=Reflect.set(e,t,i,pn(e)?e:r);return e===Et(r)&&l&&(a?di(i,s)&&Bi(e,"set",t,i):Bi(e,"add",t,i)),l}deleteProperty(e,t){const i=Tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Si(t)||!Ud.has(t))&&fn(e,"has",t),i}ownKeys(e){return fn(e,"iterate",st(e)?"length":Ur),Reflect.ownKeys(e)}}class mg extends Nd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gg=new Fd,_g=new mg,vg=new Fd(!0);const Sc=n=>n,Lo=n=>Reflect.getPrototypeOf(n);function xg(n,e,t){return function(...i){const r=this.__v_raw,s=Et(r),o=fr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Sc:e?pr:Gn;return!e&&fn(s,"iterate",l?xc:Ur),cn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Do(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Sg(n,e){const t={get(r){const s=this.__v_raw,o=Et(s),a=Et(r);n||(di(r,a)&&fn(o,"get",r),fn(o,"get",a));const{has:l}=Lo(o),c=e?Sc:n?pr:Gn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&fn(Et(r),"iterate",Ur),r.size},has(r){const s=this.__v_raw,o=Et(s),a=Et(r);return n||(di(r,a)&&fn(o,"has",r),fn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Et(a),c=e?Sc:n?pr:Gn;return!n&&fn(l,"iterate",Ur),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return cn(t,n?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(r){const s=Et(this),o=Lo(s),a=Et(r),l=!e&&!kn(r)&&!Mi(r)?a:r;return o.has.call(s,l)||di(r,l)&&o.has.call(s,r)||di(a,l)&&o.has.call(s,a)||(s.add(l),Bi(s,"add",l,l)),this},set(r,s){!e&&!kn(s)&&!Mi(s)&&(s=Et(s));const o=Et(this),{has:a,get:l}=Lo(o);let c=a.call(o,r);c||(r=Et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?di(s,u)&&Bi(o,"set",r,s):Bi(o,"add",r,s),this},delete(r){const s=Et(this),{has:o,get:a}=Lo(s);let l=o.call(s,r);l||(r=Et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bi(s,"delete",r,void 0),c},clear(){const r=Et(this),s=r.size!==0,o=r.clear();return s&&Bi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=xg(r,n,e)}),t}function Pu(n,e){const t=Sg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Tt(t,r)&&r in i?t:i,r,s)}const Mg={get:Pu(!1,!1)},yg={get:Pu(!1,!0)},bg={get:Pu(!0,!1)};const Od=new WeakMap,Bd=new WeakMap,zd=new WeakMap,Eg=new WeakMap;function Tg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function as(n){return Mi(n)?n:Lu(n,!1,gg,Mg,Od)}function Ag(n){return Lu(n,!1,vg,yg,Bd)}function Mc(n){return Lu(n,!0,_g,bg,zd)}function Lu(n,e,t,i,r){if(!Lt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Tg(Zm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function dr(n){return Mi(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function Mi(n){return!!(n&&n.__v_isReadonly)}function kn(n){return!!(n&&n.__v_isShallow)}function Du(n){return n?!!n.__v_raw:!1}function Et(n){const e=n&&n.__v_raw;return e?Et(e):n}function wg(n){return!Tt(n,"__v_skip")&&Object.isExtensible(n)&&yd(n,"__v_skip",!0),n}const Gn=n=>Lt(n)?as(n):n,pr=n=>Lt(n)?Mc(n):n;function pn(n){return n?n.__v_isRef===!0:!1}function nn(n){return Vd(n,!1)}function Io(n){return Vd(n,!0)}function Vd(n,e){return pn(n)?n:new Rg(n,e)}class Rg{constructor(e,t){this.dep=new Cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Et(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||kn(e)||Mi(e);e=i?e:Et(e),di(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function Bn(n){return pn(n)?n.value:n}const Cg={get:(n,e,t)=>e==="__v_raw"?n:Bn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return pn(r)&&!pn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hd(n){return dr(n)?n:new Proxy(n,Cg)}class Pg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Rd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lg(n,e,t=!1){let i,r;return ct(n)?i=n:(i=n.get,r=n.set),new Pg(i,r,t)}const Uo={},Ca=new WeakMap;let Cr;function Dg(n,e=!1,t=Cr){if(t){let i=Ca.get(t);i||Ca.set(t,i=[]),i.push(n)}}function Ig(n,e,t=Ut){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:kn(y)||r===!1||r===0?zi(y,1):zi(y);let u,f,h,d,v=!1,b=!1;if(pn(n)?(f=()=>n.value,v=kn(n)):dr(n)?(f=()=>c(n),v=!0):st(n)?(b=!0,v=n.some(y=>dr(y)||kn(y)),f=()=>n.map(y=>{if(pn(y))return y.value;if(dr(y))return c(y);if(ct(y))return l?l(y,2):y()})):ct(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Yi();try{h()}finally{Ki()}}const y=Cr;Cr=u;try{return l?l(n,3,[d]):n(d)}finally{Cr=y}}:f=vi,e&&r){const y=f,w=r===!0?1/0:r;f=()=>zi(y(),w)}const m=lg(),p=()=>{u.stop(),m&&m.active&&bu(m.effects,u)};if(s&&e){const y=e;e=(...w)=>{const R=y(...w);return p(),R}}let A=b?new Array(n.length).fill(Uo):Uo;const P=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(y||r||v||(b?w.some((R,N)=>di(R,A[N])):di(w,A))){h&&h();const R=Cr;Cr=u;try{const N=[w,A===Uo?void 0:b&&A[0]===Uo?[]:A,d];A=w,l?l(e,3,N):e(...N)}finally{Cr=R}}}else u.run()};return a&&a(P),u=new Ad(f),u.scheduler=o?()=>o(P,!1):P,d=y=>Dg(y,!1,u),h=u.onStop=()=>{const y=Ca.get(u);if(y){if(l)l(y,4);else for(const w of y)w();Ca.delete(u)}},e?i?P(!0):A=u.run():o?o(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function zi(n,e=1/0,t){if(e<=0||!Lt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,pn(n))zi(n.value,e,t);else if(st(n))for(let i=0;i<n.length;i++)zi(n[i],e,t);else if($i(n)||fr(n))n.forEach(i=>{zi(i,e,t)});else if(Sd(n)){for(const i in n)zi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xo(n,e,t,i){try{return i?n(...i):n()}catch(r){Qa(r,e,t)}}function ti(n,e,t,i){if(ct(n)){const r=xo(n,e,t,i);return r&&vd(r)&&r.catch(s=>{Qa(s,e,t)}),r}if(st(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ti(n[s],e,t,i));return r}}function Qa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Yi(),xo(s,null,10,[n,l,c]),Ki();return}}Ug(n,t,r,i,o)}function Ug(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const xn=[];let li=-1;const ls=[];let lr=null,ns=0;const kd=Promise.resolve();let Pa=null;function Gd(n){const e=Pa||kd;return n?e.then(this?n.bind(this):n):e}function Ng(n){let e=li+1,t=xn.length;for(;e<t;){const i=e+t>>>1,r=xn[i],s=ro(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Iu(n){if(!(n.flags&1)){const e=ro(n),t=xn[xn.length-1];!t||!(n.flags&2)&&e>=ro(t)?xn.push(n):xn.splice(Ng(e),0,n),n.flags|=1,Wd()}}function Wd(){Pa||(Pa=kd.then($d))}function Fg(n){if(!st(n))lr&&n.id===-1?lr.splice(ns+1,0,n):n.flags&1||(ls.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ls.push(n[e]);Wd()}function vh(n,e,t=li+1){for(;t<xn.length;t++){const i=xn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;xn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xd(n){if(ls.length){const e=[...new Set(ls)].sort((t,i)=>ro(t)-ro(i));if(ls.length=0,lr){for(let t=0;t<e.length;t++)lr.push(e[t]);return}for(lr=e,ns=0;ns<lr.length;ns++){const t=lr[ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}lr=null,ns=0}}const ro=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $d(n){try{for(li=0;li<xn.length;li++){const e=xn[li];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),xo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;li<xn.length;li++){const e=xn[li];e&&(e.flags&=-2)}li=-1,xn.length=0,Xd(),Pa=null,(xn.length||ls.length)&&$d()}}let Hn=null,qd=null;function La(n){const e=Hn;return Hn=n,qd=n&&n.type.__scopeId||null,e}function Og(n,e=Hn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ch(-1);const s=La(e),o=Nr.length;let a;try{a=n(...r)}finally{for(let l=Nr.length;l>o;l--)_p();La(s),i._d&&Ch(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function qt(n,e){if(Hn===null)return n;const t=rl(Hn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Ut]=e[r];s&&(ct(s)&&(s={mounted:s,updated:s}),s.deep&&zi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Mr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Yi(),ti(l,t,8,[n.el,a,n,e]),Ki())}}function Bg(n,e){if(Sn){let t=Sn.provides;const i=Sn.parent&&Sn.parent.provides;i===t&&(t=Sn.provides=Object.create(i)),t[n]=e}}function Sa(n,e,t=!1){const i=F_();if(i||cs){let r=cs?cs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const zg=Symbol.for("v-scx"),Vg=()=>Sa(zg);function cr(n,e,t){return Yd(n,e,t)}function Yd(n,e,t=Ut){const{immediate:i,deep:r,flush:s,once:o}=t,a=cn({},t),l=e&&i||!e&&s!=="post";let c;if(ao){if(s==="sync"){const d=Vg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=vi,d.resume=vi,d.pause=vi,d}}const u=Sn;a.call=(d,v,b)=>ti(d,u,v,b);let f=!1;s==="post"?a.scheduler=d=>{An(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():Iu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ig(n,e,a);return ao&&(c?c.push(h):l&&h()),h}function Hg(n,e,t){const i=this.proxy,r=Wt(n)?n.includes(".")?Kd(i,n):()=>i[n]:n.bind(i,i);let s;ct(e)?s=e:(s=e.handler,t=e);const o=So(this),a=Yd(r,s.bind(i),t);return o(),a}function Kd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const kg=Symbol("_vte"),el=n=>n.__isTeleport,El=Symbol("_leaveCb");function Gg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zi){e=t;break}}return e}function Zd(n){if(!Nu(n))return el(n.type)&&n.children?Gg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ct(t.default))return t.default()}}function Uu(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Uu(el(t.type)&&Zd(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wg(n,e){return ct(n)?cn({name:n.name},e,{setup:n}):n}function Jd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function xh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Da=new WeakMap;function qs(n,e,t,i,r=!1){if(st(n)){n.forEach((b,m)=>qs(b,e&&(st(e)?e[m]:e),t,i,r));return}if(Ys(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?rl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,f=a.setupState,h=Et(f),d=f===Ut?_d:b=>xh(u,b)?!1:Tt(h,b),v=(b,m)=>!(m&&xh(u,m));if(c!=null&&c!==l){if(Sh(e),Wt(c))u[c]=null,d(c)&&(f[c]=null);else if(pn(c)){const b=e;v(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(ct(l))xo(l,a,12,[o,u]);else{const b=Wt(l),m=pn(l);if(b||m){const p=()=>{if(n.f){const A=b?d(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)st(A)&&bu(A,s);else if(st(A))A.includes(s)||A.push(s);else if(b)u[l]=[s],d(l)&&(f[l]=u[l]);else{const P=[s];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else b?(u[l]=o,d(l)&&(f[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{p(),Da.delete(n)};A.id=-1,Da.set(n,A),An(A,t)}else Sh(n),p()}}}function Sh(n){const e=Da.get(n);e&&(e.flags|=8,Da.delete(n))}Za().requestIdleCallback;Za().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,Nu=n=>n.type.__isKeepAlive;function Xg(n,e){jd(n,"a",e)}function $g(n,e){jd(n,"da",e)}function jd(n,e,t=Sn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(tl(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Nu(r.parent.vnode)&&qg(i,e,t,r),r=r.parent}}function qg(n,e,t,i){const r=tl(e,n,i,!0);Qd(()=>{bu(i[e],r)},t)}function tl(n,e,t=Sn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Yi();const a=So(t),l=ti(e,t,n,o);return a(),Ki(),l});return i?r.unshift(s):r.push(s),s}}const ji=n=>(e,t=Sn)=>{(!ao||n==="sp")&&tl(n,(...i)=>e(...i),t)},Yg=ji("bm"),yc=ji("m"),Kg=ji("bu"),Zg=ji("u"),Jg=ji("bum"),Qd=ji("um"),jg=ji("sp"),Qg=ji("rtg"),e_=ji("rtc");function t_(n,e=Sn){tl("ec",n,e)}const n_=Symbol.for("v-ndc");function kr(n,e,t,i){let r;const s=t,o=st(n);if(o||Wt(n)){const a=o&&dr(n);let l=!1,c=!1;a&&(l=!kn(n),c=Mi(n),n=ja(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?pr(Gn(n[u])):Gn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Lt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const bc=n=>n?Mp(n)?rl(n):bc(n.parent):null,Ks=cn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bc(n.parent),$root:n=>bc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>tp(n),$forceUpdate:n=>n.f||(n.f=()=>{Iu(n.update)}),$nextTick:n=>n.n||(n.n=Gd.bind(n.proxy)),$watch:n=>Hg.bind(n)}),Tl=(n,e)=>n!==Ut&&!n.__isScriptSetup&&Tt(n,e),i_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Tl(i,e))return o[e]=1,i[e];if(r!==Ut&&Tt(r,e))return o[e]=2,r[e];if(Tt(s,e))return o[e]=3,s[e];if(t!==Ut&&Tt(t,e))return o[e]=4,t[e];Ec&&(o[e]=0)}}const c=Ks[e];let u,f;if(c)return e==="$attrs"&&fn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ut&&Tt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Tt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Tl(r,e)?(r[e]=t,!0):i!==Ut&&Tt(i,e)?(i[e]=t,!0):Tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Ut&&a[0]!=="$"&&Tt(n,a)||Tl(e,a)||Tt(s,a)||Tt(i,a)||Tt(Ks,a)||Tt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mh(n){return st(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ec=!0;function r_(n){const e=tp(n),t=n.proxy,i=n.ctx;Ec=!1,e.beforeCreate&&yh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:P,unmounted:y,render:w,renderTracked:R,renderTriggered:N,errorCaptured:M,serverPrefetch:D,expose:B,inheritAttrs:$,components:se,directives:re,filters:V}=e;if(c&&s_(c,i,null),o)for(const ee in o){const pe=o[ee];ct(pe)&&(i[ee]=pe.bind(t))}if(r){const ee=r.call(t,t);Lt(ee)&&(n.data=as(ee))}if(Ec=!0,s)for(const ee in s){const pe=s[ee],ce=ct(pe)?pe.bind(t,t):ct(pe.get)?pe.get.bind(t,t):vi,ve=!ct(pe)&&ct(pe.set)?pe.set.bind(t):vi,ge=Pr({get:ce,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Pe=>ge.value=Pe})}if(a)for(const ee in a)ep(a[ee],i,t,ee);if(l){const ee=ct(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(pe=>{Bg(pe,ee[pe])})}u&&yh(u,n,"c");function ae(ee,pe){st(pe)?pe.forEach(ce=>ee(ce.bind(t))):pe&&ee(pe.bind(t))}if(ae(Yg,f),ae(yc,h),ae(Kg,d),ae(Zg,v),ae(Xg,b),ae($g,m),ae(t_,M),ae(e_,R),ae(Qg,N),ae(Jg,A),ae(Qd,y),ae(jg,D),st(B))if(B.length){const ee=n.exposed||(n.exposed={});B.forEach(pe=>{Object.defineProperty(ee,pe,{get:()=>t[pe],set:ce=>t[pe]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===vi&&(n.render=w),$!=null&&(n.inheritAttrs=$),se&&(n.components=se),re&&(n.directives=re),D&&Jd(n)}function s_(n,e,t=vi){st(n)&&(n=Tc(n));for(const i in n){const r=n[i];let s;Lt(r)?"default"in r?s=Sa(r.from||i,r.default,!0):s=Sa(r.from||i):s=Sa(r),pn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yh(n,e,t){ti(st(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ep(n,e,t,i){let r=i.includes(".")?Kd(t,i):()=>t[i];if(Wt(n)){const s=e[n];ct(s)&&cr(r,s)}else if(ct(n))cr(r,n.bind(t));else if(Lt(n))if(st(n))n.forEach(s=>ep(s,e,t,i));else{const s=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(s)&&cr(r,s,n)}}function tp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ia(l,c,o,!0)),Ia(l,e,o)),Lt(e)&&s.set(e,l),l}function Ia(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ia(n,s,t,!0),r&&r.forEach(o=>Ia(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=o_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const o_={data:bh,props:Eh,emits:Eh,methods:Os,computed:Os,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:Os,directives:Os,watch:l_,provide:bh,inject:a_};function bh(n,e){return e?n?function(){return cn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function a_(n,e){return Os(Tc(n),Tc(e))}function Tc(n){if(st(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function _n(n,e){return n?[...new Set([].concat(n,e))]:e}function Os(n,e){return n?cn(Object.create(null),n,e):e}function Eh(n,e){return n?st(n)&&st(e)?[...new Set([...n,...e])]:cn(Object.create(null),Mh(n),Mh(e??{})):e}function l_(n,e){if(!n)return e;if(!e)return n;const t=cn(Object.create(null),n);for(const i in e)t[i]=_n(n[i],e[i]);return t}function np(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let c_=0;function u_(n,e){return function(i,r=null){ct(i)||(i=cn({},i)),r!=null&&!Lt(r)&&(r=null);const s=np(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:c_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:k_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...f)):ct(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ki(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,rl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ti(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=cs;cs=c;try{return u()}finally{cs=f}}};return c}}let cs=null;const h_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jn(e)}Modifiers`]||n[`${Vr(e)}Modifiers`];function f_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ut;let r=t;const s=e.startsWith("update:"),o=s&&h_(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Wt(u)?u.trim():u)),o.number&&(r=r.map(Ka)));let a,l=i[a=xl(e)]||i[a=xl(Jn(e))];!l&&s&&(l=i[a=xl(Vr(e))]),l&&ti(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ti(c,n,6,r)}}const d_=new WeakMap;function ip(n,e,t=!1){const i=t?d_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=ip(c,e,!0);u&&(a=!0,cn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Lt(n)&&i.set(n,null),null):(st(s)?s.forEach(l=>o[l]=null):cn(o,s),Lt(n)&&i.set(n,o),o)}function nl(n,e){return!n||!$a(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Tt(n,e[0].toLowerCase()+e.slice(1))||Tt(n,Vr(e))||Tt(n,e))}function Th(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:b}=n,m=La(n);let p,A;try{if(t.shapeFlag&4){const y=r||i,w=y;p=hi(c.call(w,y,u,f,d,h,v)),A=a}else{const y=e;p=hi(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),A=e.props?a:p_(a)}}catch(y){Nr.length=0,Qa(y,n,1),p=ki(Zi)}let P=p;if(A&&b!==!1){const y=Object.keys(A),{shapeFlag:w}=P;y.length&&w&7&&(s&&y.some(qa)&&(A=m_(A,s)),P=fs(P,A,!1,!0))}if(t.dirs&&(P=fs(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition){const y=el(P.type)&&Zd(P)||P;Uu(y,t.transition)}return p=P,La(m),p}const p_=n=>{let e;for(const t in n)(t==="class"||t==="style"||$a(t))&&((e||(e={}))[t]=n[t]);return e},m_=(n,e)=>{const t={};for(const i in n)(!qa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function g_(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ah(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(rp(o,i,h)&&!nl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ah(i,o,c):!0:!!o;return!1}function Ah(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(rp(e,n,s)&&!nl(t,s))return!0}return!1}function rp(n,e,t){const i=n[t],r=e[t];return t==="style"&&Lt(i)&&Lt(r)?!qi(i,r):i!==r}function __({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const sp={},op=()=>Object.create(sp),ap=n=>Object.getPrototypeOf(n)===sp;function v_(n,e,t,i=!1){const r={},s=op();n.propsDefaults=Object.create(null),lp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ag(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function x_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Et(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(nl(n.emitsOptions,h))continue;const d=e[h];if(l)if(Tt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=Jn(h);r[v]=Ac(l,a,v,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{lp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Tt(e,f)&&((u=Vr(f))===f||!Tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ac(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Tt(e,f))&&(delete s[f],c=!0)}c&&Bi(n.attrs,"set","")}function lp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ws(l))continue;const c=e[l];let u;r&&Tt(r,u=Jn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:nl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Et(t),c=a||Ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ac(r,l,f,c[f],n,!Tt(c,f))}}return o}function Ac(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=So(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Vr(t))&&(i=!0))}return i}const S_=new WeakMap;function cp(n,e,t=!1){const i=t?S_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=f=>{l=!0;const[h,d]=cp(f,e,!0);cn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Lt(n)&&i.set(n,Lr),Lr;if(st(s))for(let u=0;u<s.length;u++){const f=Jn(s[u]);wh(f)&&(o[f]=Ut)}else if(s)for(const u in s){const f=Jn(u);if(wh(f)){const h=s[u],d=o[f]=st(h)||ct(h)?{type:h}:cn({},h),v=d.type;let b=!1,m=!0;if(st(v))for(let p=0;p<v.length;++p){const A=v[p],P=ct(A)&&A.name;if(P==="Boolean"){b=!0;break}else P==="String"&&(m=!1)}else b=ct(v)&&v.name==="Boolean";d[0]=b,d[1]=m,(b||Tt(d,"default"))&&a.push(f)}}const c=[o,a];return Lt(n)&&i.set(n,c),c}function wh(n){return n[0]!=="$"&&!Ws(n)}const Fu=n=>n==="_"||n==="_ctx"||n==="$stable",Ou=n=>st(n)?n.map(hi):[hi(n)],M_=(n,e,t)=>{if(e._n)return e;const i=Og((...r)=>Ou(e(...r)),t);return i._c=!1,i},up=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fu(r))continue;const s=n[r];if(ct(s))e[r]=M_(r,s,i);else if(s!=null){const o=Ou(s);e[r]=()=>o}}},hp=(n,e)=>{const t=Ou(e);n.slots.default=()=>t},fp=(n,e,t)=>{for(const i in e)(t||!Fu(i))&&(n[i]=e[i])},y_=(n,e,t)=>{const i=n.slots=op();if(n.vnode.shapeFlag&32){const r=e._;r?(fp(i,e,t),t&&yd(i,"_",r,!0)):up(e,i)}else e&&hp(n,e)},b_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:fp(r,e,t):(s=!e.$stable,up(e,r)),o=e}else e&&(hp(n,e),o={default:1});if(s)for(const a in r)!Fu(a)&&o[a]==null&&delete r[a]},An=R_;function E_(n){return T_(n)}function T_(n,e){const t=Za();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=vi,insertStaticContent:v}=n,b=(C,F,U,k=null,W=null,H=null,G=void 0,fe=null,j=!!F.dynamicChildren)=>{if(C===F)return;C&&!Rs(C,F)&&(k=de(C),Pe(C,W,H,!0),C=null),F.patchFlag===-2&&(j=!1,F.dynamicChildren=null),F.dynamicChildren&&C&&C.dynamicChildren&&C.dynamicChildren.hasOnce&&(F.dynamicChildren===Lr&&(F.dynamicChildren=[]),F.dynamicChildren.hasOnce=!0);const{type:ne,ref:K,shapeFlag:_}=F;switch(ne){case il:m(C,F,U,k);break;case Zi:p(C,F,U,k);break;case wl:C==null&&A(F,U,k,G);break;case sn:se(C,F,U,k,W,H,G,fe,j);break;default:_&1?w(C,F,U,k,W,H,G,fe,j):_&6?re(C,F,U,k,W,H,G,fe,j):(_&64||_&128)&&ne.process(C,F,U,k,W,H,G,fe,j,ke)}K!=null&&W?qs(K,C&&C.ref,H,F||C,!F):K==null&&C&&C.ref!=null&&qs(C.ref,null,H,C,!0)},m=(C,F,U,k)=>{if(C==null)i(F.el=a(F.children),U,k);else{const W=F.el=C.el;F.children!==C.children&&c(W,F.children)}},p=(C,F,U,k)=>{C==null?i(F.el=l(F.children||""),U,k):F.el=C.el},A=(C,F,U,k)=>{[C.el,C.anchor]=v(C.children,F,U,k,C.el,C.anchor)},P=({el:C,anchor:F},U,k)=>{let W;for(;C&&C!==F;)W=h(C),i(C,U,k),C=W;i(F,U,k)},y=({el:C,anchor:F})=>{let U;for(;C&&C!==F;)U=h(C),r(C),C=U;r(F)},w=(C,F,U,k,W,H,G,fe,j)=>{if(F.type==="svg"?G="svg":F.type==="math"&&(G="mathml"),C==null)R(F,U,k,W,H,G,fe,j);else{const ne=C.el&&C.el._isVueCE?C.el:null;try{ne&&ne._beginPatch(),D(C,F,W,H,G,fe,j)}finally{ne&&ne._endPatch()}}},R=(C,F,U,k,W,H,G,fe)=>{let j,ne;const{props:K,shapeFlag:_,transition:O,dirs:me}=C;if(j=C.el=o(C.type,H,K&&K.is,K),_&8?u(j,C.children):_&16&&M(C.children,j,null,k,W,Al(C,H),G,fe),me&&Mr(C,null,k,"created"),N(j,C,C.scopeId,G,k),K){for(const g in K)g!=="value"&&!Ws(g)&&s(j,g,null,K[g],H,k);"value"in K&&s(j,"value",null,K.value,H),(ne=K.onVnodeBeforeMount)&&ri(ne,k,C)}me&&Mr(C,null,k,"beforeMount");const T=A_(W,O);T&&O.beforeEnter(j),i(j,F,U),((ne=K&&K.onVnodeMounted)||T||me)&&An(()=>{try{ne&&ri(ne,k,C),T&&O.enter(j),me&&Mr(C,null,k,"mounted")}finally{}},W)},N=(C,F,U,k,W)=>{if(U&&d(C,U),k)for(let H=0;H<k.length;H++)d(C,k[H]);if(W){let H=W.subTree;if(F===H||gp(H.type)&&(H.ssContent===F||H.ssFallback===F)){const G=W.vnode;N(C,G,G.scopeId,G.slotScopeIds,W.parent)}}},M=(C,F,U,k,W,H,G,fe,j=0)=>{for(let ne=j;ne<C.length;ne++){const K=C[ne]=fe?Fi(C[ne]):hi(C[ne]);b(null,K,F,U,k,W,H,G,fe)}},D=(C,F,U,k,W,H,G)=>{const fe=F.el=C.el;let{patchFlag:j,dynamicChildren:ne,dirs:K}=F;j|=C.patchFlag&16;const _=C.props||Ut,O=F.props||Ut;let me;if(U&&yr(U,!1),(me=O.onVnodeBeforeUpdate)&&ri(me,U,F,C),K&&Mr(F,C,U,"beforeUpdate"),U&&yr(U,!0),ne&&(!C.dynamicChildren||C.dynamicChildren.length!==ne.length)&&(j=0,G=!1,ne=null),(_.innerHTML&&O.innerHTML==null||_.textContent&&O.textContent==null)&&u(fe,""),ne?B(C.dynamicChildren,ne,fe,U,k,Al(F,W),H):G||pe(C,F,fe,null,U,k,Al(F,W),H,!1),j>0){if(j&16)$(fe,_,O,U,W);else if(j&2&&_.class!==O.class&&s(fe,"class",null,O.class,W),j&4&&s(fe,"style",_.style,O.style,W),j&8){const T=F.dynamicProps;for(let g=0;g<T.length;g++){const I=T[g],Z=_[I],te=O[I];(te!==Z||I==="value")&&s(fe,I,Z,te,W,U)}}j&1&&C.children!==F.children&&u(fe,F.children)}else!G&&ne==null&&$(fe,_,O,U,W);((me=O.onVnodeUpdated)||K)&&An(()=>{me&&ri(me,U,F,C),K&&Mr(F,C,U,"updated")},k)},B=(C,F,U,k,W,H,G)=>{for(let fe=0;fe<F.length;fe++){const j=C[fe],ne=F[fe],K=j.el&&(j.type===sn||!Rs(j,ne)||j.shapeFlag&198)?f(j.el):U;b(j,ne,K,null,k,W,H,G,!0)}},$=(C,F,U,k,W)=>{if(F!==U){if(F!==Ut)for(const H in F)!Ws(H)&&!(H in U)&&s(C,H,F[H],null,W,k);for(const H in U){if(Ws(H))continue;const G=U[H],fe=F[H];G!==fe&&H!=="value"&&s(C,H,fe,G,W,k)}"value"in U&&s(C,"value",F.value,U.value,W)}},se=(C,F,U,k,W,H,G,fe,j)=>{const ne=F.el=C?C.el:a(""),K=F.anchor=C?C.anchor:a("");let{patchFlag:_,dynamicChildren:O,slotScopeIds:me}=F;me&&(fe=fe?fe.concat(me):me),C==null?(i(ne,U,k),i(K,U,k),M(F.children||[],U,K,W,H,G,fe,j)):_>0&&_&64&&O&&C.dynamicChildren&&C.dynamicChildren.length===O.length?(B(C.dynamicChildren,O,U,W,H,G,fe),(F.key!=null||W&&F===W.subTree)&&dp(C,F,!0)):pe(C,F,U,K,W,H,G,fe,j)},re=(C,F,U,k,W,H,G,fe,j)=>{F.slotScopeIds=fe,C==null?F.shapeFlag&512?W.ctx.activate(F,U,k,G,j):V(F,U,k,W,H,G,j):Q(C,F,j)},V=(C,F,U,k,W,H,G)=>{const fe=C.component=N_(C,k,W);if(Nu(C)&&(fe.ctx.renderer=ke),O_(fe,!1,G),fe.asyncDep){if(W&&W.registerDep(fe,ae,G),!C.el){const j=fe.subTree=ki(Zi);p(null,j,F,U),C.placeholder=j.el}}else ae(fe,C,F,U,W,H,G)},Q=(C,F,U)=>{const k=F.component=C.component;if(g_(C,F,U))if(k.asyncDep&&!k.asyncResolved){F.el=C.el,ee(k,F,U);return}else k.next=F,k.update();else F.el=C.el,k.vnode=F},ae=(C,F,U,k,W,H,G)=>{const fe=()=>{if(C.isMounted){let{next:_,bu:O,u:me,parent:T,vnode:g}=C;{const Re=pp(C);if(Re){_&&(_.el=g.el,ee(C,_,G)),Re.asyncDep.then(()=>{An(()=>{C.isUnmounted||ne()},W)});return}}let I=_,Z;yr(C,!1),_?(_.el=g.el,ee(C,_,G)):_=g,O&&xa(O),(Z=_.props&&_.props.onVnodeBeforeUpdate)&&ri(Z,T,_,g),yr(C,!0);const te=Th(C),Ae=C.subTree;C.subTree=te,b(Ae,te,f(Ae.el),de(Ae),C,W,H),_.el=te.el,I===null&&__(C,te.el),me&&An(me,W),(Z=_.props&&_.props.onVnodeUpdated)&&An(()=>ri(Z,T,_,g),W)}else{let _;const{el:O,props:me}=F,{bm:T,m:g,parent:I,root:Z,type:te}=C,Ae=Ys(F);yr(C,!1),T&&xa(T),!Ae&&(_=me&&me.onVnodeBeforeMount)&&ri(_,I,F),yr(C,!0);{Z.ce&&Z.ce._hasShadowRoot()&&Z.ce._injectChildStyle(te,C.parent?C.parent.type:void 0);const Re=C.subTree=Th(C);b(null,Re,U,k,C,W,H),F.el=Re.el}if(g&&An(g,W),!Ae&&(_=me&&me.onVnodeMounted)){const Re=F;An(()=>ri(_,I,Re),W)}(F.shapeFlag&256||I&&Ys(I.vnode)&&I.vnode.shapeFlag&256)&&C.a&&An(C.a,W),C.isMounted=!0,F=U=k=null}};C.scope.on();const j=C.effect=new Ad(fe);C.scope.off();const ne=C.update=j.run.bind(j),K=C.job=j.runIfDirty.bind(j);K.i=C,K.id=C.uid,j.scheduler=()=>Iu(K),yr(C,!0),ne()},ee=(C,F,U)=>{F.component=C;const k=C.vnode.props;C.vnode=F,C.next=null,x_(C,F.props,k,U),b_(C,F.children,U),Yi(),vh(C),Ki()},pe=(C,F,U,k,W,H,G,fe,j=!1)=>{const ne=C&&C.children,K=C?C.shapeFlag:0,_=F.children,{patchFlag:O,shapeFlag:me}=F;if(O>0){if(O&128){ve(ne,_,U,k,W,H,G,fe,j);return}else if(O&256){ce(ne,_,U,k,W,H,G,fe,j);return}}me&8?(K&16&&it(ne,W,H),_!==ne&&u(U,_)):K&16?me&16?ve(ne,_,U,k,W,H,G,fe,j):it(ne,W,H,!0):(K&8&&u(U,""),me&16&&M(_,U,k,W,H,G,fe,j))},ce=(C,F,U,k,W,H,G,fe,j)=>{C=C||Lr,F=F||Lr;const ne=C.length,K=F.length,_=Math.min(ne,K);let O;for(O=0;O<_;O++){const me=F[O]=j?Fi(F[O]):hi(F[O]);b(C[O],me,U,null,W,H,G,fe,j)}ne>K?it(C,W,H,!0,!1,_):M(F,U,k,W,H,G,fe,j,_)},ve=(C,F,U,k,W,H,G,fe,j)=>{let ne=0;const K=F.length;let _=C.length-1,O=K-1;for(;ne<=_&&ne<=O;){const me=C[ne],T=F[ne]=j?Fi(F[ne]):hi(F[ne]);if(Rs(me,T))b(me,T,U,null,W,H,G,fe,j);else break;ne++}for(;ne<=_&&ne<=O;){const me=C[_],T=F[O]=j?Fi(F[O]):hi(F[O]);if(Rs(me,T))b(me,T,U,null,W,H,G,fe,j);else break;_--,O--}if(ne>_){if(ne<=O){const me=O+1,T=me<K?F[me].el:k;for(;ne<=O;)b(null,F[ne]=j?Fi(F[ne]):hi(F[ne]),U,T,W,H,G,fe,j),ne++}}else if(ne>O)for(;ne<=_;)Pe(C[ne],W,H,!0),ne++;else{const me=ne,T=ne,g=new Map;for(ne=T;ne<=O;ne++){const we=F[ne]=j?Fi(F[ne]):hi(F[ne]);we.key!=null&&g.set(we.key,ne)}let I,Z=0;const te=O-T+1;let Ae=!1,Re=0;const _e=new Array(te);for(ne=0;ne<te;ne++)_e[ne]=0;for(ne=me;ne<=_;ne++){const we=C[ne];if(Z>=te){Pe(we,W,H,!0);continue}let Ge;if(we.key!=null)Ge=g.get(we.key);else for(I=T;I<=O;I++)if(_e[I-T]===0&&Rs(we,F[I])){Ge=I;break}Ge===void 0?Pe(we,W,H,!0):(_e[Ge-T]=ne+1,Ge>=Re?Re=Ge:Ae=!0,b(we,F[Ge],U,null,W,H,G,fe,j),Z++)}const Me=Ae?w_(_e):Lr;for(I=Me.length-1,ne=te-1;ne>=0;ne--){const we=T+ne,Ge=F[we],Fe=F[we+1],Ie=we+1<K?Fe.el||mp(Fe):k;_e[ne]===0?b(null,Ge,U,Ie,W,H,G,fe,j):Ae&&(I<0||ne!==Me[I]?ge(Ge,U,Ie,2):I--)}}},ge=(C,F,U,k,W=null)=>{const{el:H,type:G,transition:fe,children:j,shapeFlag:ne}=C;if(ne&6){ge(C.component.subTree,F,U,k);return}if(ne&128){C.suspense.move(F,U,k);return}if(ne&64){G.move(C,F,U,ke);return}if(G===sn){i(H,F,U);for(let _=0;_<j.length;_++)ge(j[_],F,U,k);i(C.anchor,F,U);return}if(G===wl){P(C,F,U);return}if(k!==2&&ne&1&&fe)if(k===0)fe.persisted&&!H[El]?i(H,F,U):(fe.beforeEnter(H),i(H,F,U),An(()=>fe.enter(H),W));else{const{leave:_,delayLeave:O,afterLeave:me}=fe,T=()=>{C.ctx.isUnmounted?r(H):i(H,F,U)},g=()=>{const I=H._isLeaving||!!H[El];H._isLeaving&&H[El](!0),fe.persisted&&!I?T():_(H,()=>{T(),me&&me()})};O?O(H,T,g):g()}else i(H,F,U)},Pe=(C,F,U,k=!1,W=!1)=>{const{type:H,props:G,ref:fe,children:j,dynamicChildren:ne,shapeFlag:K,patchFlag:_,dirs:O,cacheIndex:me,memo:T}=C;if((_===-2||ne&&ne.hasOnce)&&(W=!1),fe!=null&&(Yi(),qs(fe,null,U,C,!0),Ki()),me!=null&&(!C.ctx||C.ctx===F)&&(F.renderCache[me]=void 0),K&256){F.ctx.deactivate(C);return}const g=K&1&&O,I=!Ys(C);let Z;if(I&&(Z=G&&G.onVnodeBeforeUnmount)&&ri(Z,F,C),K&6)nt(C.component,U,k);else{if(K&128){C.suspense.unmount(U,k);return}g&&Mr(C,null,F,"beforeUnmount"),K&64?C.type.remove(C,F,U,ke,k):ne&&!ne.hasOnce&&(H!==sn||_>0&&_&64)?it(ne,F,U,!1,!0):(H===sn&&_&384||!W&&K&16)&&it(j,F,U),k&&Be(C)}const te=T!=null&&me==null;(I&&(Z=G&&G.onVnodeUnmounted)||g||te)&&An(()=>{Z&&ri(Z,F,C),g&&Mr(C,null,F,"unmounted"),te&&(C.el=null)},U)},Be=C=>{const{type:F,el:U,anchor:k,transition:W}=C;if(F===sn){rt(U,k);return}if(F===wl){y(C),W&&!W.persisted&&W.afterLeave&&W.afterLeave();return}const H=()=>{r(U),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(C.shapeFlag&1&&W&&!W.persisted){const{leave:G,delayLeave:fe}=W,j=()=>G(U,H);fe?fe(C.el,H,j):j()}else H()},rt=(C,F)=>{let U;for(;C!==F;)U=h(C),r(C),C=U;r(F)},nt=(C,F,U)=>{const{bum:k,scope:W,job:H,subTree:G,um:fe,m:j,a:ne}=C;Rh(j),Rh(ne),k&&xa(k),W.stop(),H?(H.flags|=8,Pe(G,C,F,U)):C.vnode.el&&G&&(G.transition=C.vnode.transition,Pe(G,C,F,U)),fe&&An(fe,F),An(()=>{C.isUnmounted=!0},F)},it=(C,F,U,k=!1,W=!1,H=0)=>{for(let G=H;G<C.length;G++)Pe(C[G],F,U,k,W)},de=C=>{if(C.shapeFlag&6)return de(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const F=h(C.anchor||C.el),U=F&&F[kg];return U?h(U):F};let ue=!1;const Te=(C,F,U)=>{let k;C==null?F._vnode&&(Pe(F._vnode,null,null,!0),k=F._vnode.component):b(F._vnode||null,C,F,null,null,null,U),F._vnode=C,ue||(ue=!0,vh(k),Xd(),ue=!1)},ke={p:b,um:Pe,m:ge,r:Be,mt:V,mc:M,pc:pe,pbc:B,n:de,o:n};return{render:Te,hydrate:void 0,createApp:u_(Te)}}function Al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function yr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function A_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dp(n,e,t=!1){const i=n.children,r=e.children;if(st(i)&&st(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&dp(o,a)),a.type===il&&(a.patchFlag===-1&&(a=r[s]=Fi(a)),a.el=o.el),a.type===Zi&&!a.el&&(a.el=o.el)}}function w_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function pp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function Rh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function mp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?mp(e.subTree):null}const gp=n=>n.__isSuspense;function R_(n,e){e&&e.pendingBranch?st(n)?e.effects.push(...n):e.effects.push(n):Fg(n)}const sn=Symbol.for("v-fgt"),il=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),Nr=[];let In=null;function It(n=!1){Nr.push(In=n?null:[])}function _p(){Nr.pop(),In=Nr[Nr.length-1]||null}let so=1;function Ch(n,e=!1){so+=n,n<0&&In&&e&&(In.hasOnce=!0)}function vp(n){return n.dynamicChildren=so>0?In||Lr:null,_p(),so>0&&In&&In.push(n),n}function Nt(n,e,t,i,r,s){return vp(ie(n,e,t,i,r,s,!0))}function C_(n,e,t,i,r){return vp(ki(n,e,t,i,r,!0))}function xp(n){return n?n.__v_isVNode===!0:!1}function Rs(n,e){return n.type===e.type&&n.key===e.key}const Sp=({key:n})=>n??null,Ma=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Wt(n)||pn(n)||ct(n)?{i:Hn,r:n,k:e,f:!!t}:n:null);function ie(n,e=null,t=null,i=0,r=null,s=n===sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Sp(e),ref:e&&Ma(e),scopeId:qd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Hn};return a?(Ua(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),so>0&&!o&&In&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&In.push(l),l}const ki=P_;function P_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===n_)&&(n=Zi),xp(n)){const a=fs(n,e,!0);return t&&Ua(a,t),so>0&&!s&&In&&(a.shapeFlag&6?In[In.indexOf(n)]=a:In.push(a)),a.patchFlag=-2,a}if(H_(n)&&(n=n.__vccOpts),e){e=L_(e);let{class:a,style:l}=e;a&&!Wt(a)&&(e.class=ci(a)),Lt(l)&&(Du(l)&&!st(l)&&(l=cn({},l)),e.style=Ja(l))}const o=Wt(n)?1:gp(n)?128:el(n)?64:Lt(n)?4:ct(n)?2:0;return ie(n,e,t,i,r,o,s,!0)}function L_(n){return n?Du(n)||ap(n)?cn({},n):n:null}function fs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?D_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Sp(c),ref:e&&e.ref?t&&s?st(s)?s.concat(Ma(e)):[s,Ma(e)]:Ma(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==sn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Uu(u,l.clone(u)),u}function _t(n=" ",e=0){return ki(il,null,n,e)}function Cn(n="",e=!1){return e?(It(),C_(Zi,null,n)):ki(Zi,null,n)}function hi(n){return n==null||typeof n=="boolean"?ki(Zi):st(n)?ki(sn,null,n.slice()):xp(n)?Fi(n):ki(il,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function Ua(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(st(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ua(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ap(e)?e._ctx=Hn:r===3&&Hn&&(Hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ct(e)){if(i&65){Ua(n,{default:e});return}e={default:e,_ctx:Hn},t=32}else e=String(e),i&64?(t=16,e=[_t(e)]):t=8;n.children=e,n.shapeFlag|=t}function D_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ci([e.class,i.class]));else if(r==="style")e.style=Ja([e.style,i.style]);else if($a(r)){const s=e[r],o=i[r];o&&s!==o&&!(st(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!qa(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function ri(n,e,t,i=null){ti(n,e,7,[t,i])}const I_=np();let U_=0;function N_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||I_,s={uid:U_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ag(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cp(i,r),emitsOptions:ip(i,r),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=f_.bind(null,s),n.ce&&n.ce(s),s}let Sn=null;const F_=()=>Sn||Hn;let Na,oo;{const n=Za(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Na=e("__VUE_INSTANCE_SETTERS__",t=>Sn=t),oo=e("__VUE_SSR_SETTERS__",t=>ao=t)}const So=n=>{const e=Sn;return Na(n),n.scope.on(),()=>{n.scope.off(),Na(e)}},Ph=()=>{Sn&&Sn.scope.off(),Na(null)};function Mp(n){return n.vnode.shapeFlag&4}let ao=!1;function O_(n,e=!1,t=!1){e&&oo(e);const{props:i,children:r}=n.vnode,s=Mp(n);v_(n,i,s,e),y_(n,r,t||e);const o=s?B_(n,e):void 0;return e&&oo(!1),o}function B_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,i_);const{setup:i}=t;if(i){Yi();const r=n.setupContext=i.length>1?V_(n):null,s=So(n),o=xo(i,n,0,[n.props,r]),a=vd(o);if(Ki(),s(),(a||n.sp)&&!Ys(n)&&Jd(n),a){if(o.then(Ph,Ph),e)return o.then(l=>{oo(!0);try{Lh(n,l,e)}finally{oo(!1)}}).catch(l=>{Qa(l,n,0)});n.asyncDep=o}else Lh(n,o)}else yp(n)}function Lh(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Lt(e)&&(n.setupState=Hd(e)),yp(n)}function yp(n,e,t){const i=n.type;n.render||(n.render=i.render||vi);{const r=So(n);Yi();try{r_(n)}finally{Ki(),r()}}}const z_={get(n,e){return fn(n,"get",""),n[e]}};function V_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,z_),slots:n.slots,emit:n.emit,expose:e}}function rl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hd(wg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ks)return Ks[t](n)},has(e,t){return t in e||t in Ks}})):n.proxy}function H_(n){return ct(n)&&"__vccOpts"in n}const Pr=(n,e)=>Lg(n,e,ao),k_="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Dh=typeof window<"u"&&window.trustedTypes;if(Dh)try{wc=Dh.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=wc?n=>wc.createHTML(n):n=>n,G_="http://www.w3.org/2000/svg",W_="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Ih=Ni&&Ni.createElement("template"),X_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ni.createElementNS(G_,n):e==="mathml"?Ni.createElementNS(W_,n):t?Ni.createElement(n,{is:t}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ih.innerHTML=bp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ih.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},$_=Symbol("_vtc");function q_(n,e,t){const i=n[$_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uh=Symbol("_vod"),Y_=Symbol("_vsh"),K_=Symbol(""),Z_=/(?:^|;)\s*display\s*:/;function J_(n,e,t){const i=n.style,r=Wt(t);let s=!1;if(t&&!r){if(e)if(Wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Bs(i,a,"")}else for(const o in e)t[o]==null&&Bs(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?Q_(n,o,!Wt(e)&&e?e[o]:void 0,a)||Bs(i,o,a):Bs(i,o,"")}}else if(r){if(e!==t){const o=i[K_];o&&(t+=";"+o),i.cssText=t,s=Z_.test(t)}}else e&&n.removeAttribute("style");Uh in n&&(n[Uh]=s?i.display:"",n[Y_]&&(i.display="none"))}const No=/\s*!important$/;function Bs(n,e,t){if(st(t))t.forEach(i=>Bs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))No.test(t)?n.setProperty(e,t.replace(No,""),"important"):n.setProperty(e,t);else{const i=j_(n,e);No.test(t)?n.setProperty(Vr(i),t.replace(No,""),"important"):n[i]=t}}const Nh=["Webkit","Moz","ms"],Rl={};function j_(n,e){const t=Rl[e];if(t)return t;let i=Jn(e);if(i!=="filter"&&i in n)return Rl[e]=i;i=Md(i);for(let r=0;r<Nh.length;r++){const s=Nh[r]+i;if(s in n)return Rl[e]=s}return e}function Q_(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Wt(i)&&t===i}const Fh="http://www.w3.org/1999/xlink";function Oh(n,e,t,i,r,s=rg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Fh,e.slice(6,e.length)):n.setAttributeNS(Fh,e,t):t==null||s&&!bd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Si(t)?String(t):t)}function Bh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=bd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function ur(n,e,t,i){n.addEventListener(e,t,i)}function ev(n,e,t,i){n.removeEventListener(e,t,i)}const zh=Symbol("_vei");function tv(n,e,t,i,r=null){const s=n[zh]||(n[zh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=rv(e);if(i){const c=s[e]=av(i,r);ur(n,a,c,l)}else o&&(ev(n,a,o,l),s[e]=void 0)}}const nv=/(Once|Passive|Capture)$/,iv=/^on:?(?:Once|Passive|Capture)$/;function rv(n){let e,t;for(;(t=n.match(nv))&&!iv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Vr(n.slice(2)),e]}let Cl=0;const sv=Promise.resolve(),ov=()=>Cl||(sv.then(()=>Cl=0),Cl=Date.now());function av(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(st(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ti(c,e,5,a)}}else ti(r,e,5,[i])};return t.value=n,t.attached=ov(),t}const Vh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lv=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?q_(n,i,o):e==="style"?J_(n,t,i):$a(e)?qa(e)||tv(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(n,e,i,o))?(Bh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Oh(n,e,i,o,s,e!=="value")):n._isVueCE&&(uv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Wt(i)))?Bh(n,Jn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Oh(n,e,i,o))};function cv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Vh(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vh(e)&&Wt(t)?!1:e in n}function uv(n,e){const t=n._def.props;if(!t)return!1;const i=Jn(e);return Array.isArray(t)?t.some(r=>Jn(r)===i):Object.keys(t).some(r=>Jn(r)===i)}const ds=n=>{const e=n.props["onUpdate:modelValue"]||!1;return st(e)?t=>xa(e,t):e};function hv(n){n.target.composing=!0}function Hh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mi=Symbol("_assign"),Fo=Symbol("_initialValue");function Pl(n,e,t){return e&&(n=n.trim()),t&&(n=Ka(n)),n}const si={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Fo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Fo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[mi]=ds(r);const s=i||r.props&&r.props.type==="number";ur(n,e?"change":"input",o=>{o.target.composing||n[mi](Pl(n.value,t,s))}),(t||s)&&ur(n,"change",()=>{n.value=Pl(n.value,t,s)}),e||(ur(n,"compositionstart",hv),ur(n,"compositionend",Hh),ur(n,"change",Hh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Fo];delete n[Fo],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[mi](Pl(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[mi]=ds(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Ka(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},nr={deep:!0,created(n,e,t){n[mi]=ds(t),ur(n,"change",()=>{const i=n._modelValue,r=lo(n),s=n.checked,o=n[mi];if(st(i)){const a=Tu(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if($i(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Ep(n,s))})},mounted:kh,beforeUpdate(n,e,t){n[mi]=ds(t),kh(n,e,t)}};function kh(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(st(e))r=Tu(e,i.props.value)>-1;else if($i(e))r=e.has(i.props.value);else{if(e===t)return;r=qi(e,Ep(n,!0))}n.checked!==r&&(n.checked=r)}const fv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,ur(n,"change",()=>{const r=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?Ka(lo(l)):lo(l)),s=n.multiple,o=s?$i(n._modelValue)?new Set(r):r:r[0],a=n._pendingValue=[s,s?st(o)?r.slice():r:o];try{n[mi](o)}finally{Gd(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[mi]=ds(i)},mounted(n,{value:e}){Gh(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[mi]=ds(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!dv(e,t[1],t[0]))&&Gh(n,e)}};function dv(n,e,t){if(!t||st(n))return qi(n,e);if($i(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function Gh(n,e){const t=n.multiple,i=st(e);if(!(t&&!i&&!$i(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=lo(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Tu(e,a)>-1}else o.selected=e.has(a);else if(qi(lo(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function lo(n){return"_value"in n?n._value:n.value}function Ep(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const pv=cn({patchProp:lv},X_);let Wh;function mv(){return Wh||(Wh=E_(pv))}const gv=((...n)=>{const e=mv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vv(i);if(!r)return;const s=e._component;!ct(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_v(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function _v(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vv(n){return Wt(n)?document.querySelector(n):n}const br=Math.PI/180,Oo={haStar:1,cStar:.25,rhoFStar:.38};function xv(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function Sv(n){return Math.tan(n)-n}function Xh(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function $h(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function zs(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function Mv(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const o=e+(t-e)*s/i;r.push(zs(n,o))}return r}function qh(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,o=s*Math.cos(r),a=s+Oo.haStar*i,l=s-(Oo.haStar+Oo.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,d=o>l,v=Sv(r),b=Math.PI/(2*t)+v,m=Xh(a,o),p=Math.atan(m),A=m-Math.atan(m),P=Math.PI/(2*t)+v-A,y=2*a*P,w=P<=0,R=2/(Math.sin(r)*Math.sin(r)),N=t<R,M=ue=>({x:-ue.x,y:ue.y}),D=d?0:Xh(l,o),B=(ue,Te,ke,De)=>{const C=[];for(let F=0;F<=De;F++){const U=Te+(ke-Te)*F/De,k=$h(xv(o,U),b);C.push(ue===1?M(k):k)}return C},$=6,se=ue=>{const Te=-ue,ke=Math.PI/2+Te*b,De=B(ue,D,D,1);if(!d)return{j:De[0],jAngle:Math.atan2(De[0].y,De[0].x),fillet:[],flankLo:null};const C=Math.PI/2+Te*(h/2),F=(o*o-l*l)/(2*l),U=Math.abs(ke-C),k=Math.sin(U),W=k<1?l*k/(1-k):1/0,H=Math.max(0,Math.min(Oo.rhoFStar*i,F*.999,W*.999)),G=l+H,fe=Math.asin(Math.min(1,H/G)),j=ue===1?ke-fe:ke+fe,ne=zs(G,j),K=zs(l,j),_=Math.sqrt(Math.max(0,G*G-H*H)),O=zs(_,ke),me=Math.atan2(K.y-ne.y,K.x-ne.x);let g=Math.atan2(O.y-ne.y,O.x-ne.x)-me;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-ue;const I=[];for(let Z=0;Z<=$;Z++){const te=me+g*Z/$;I.push({x:ne.x+H*Math.cos(te),y:ne.y+H*Math.sin(te)})}return{j:K,jAngle:j,fillet:I,flankLo:De[0]}},re=se(1),V=se(-1),Q=B(1,D,m,e),ae=B(-1,D,m,e),ee=Q[e],pe=ae[e],ce=Math.atan2(ee.y,ee.x),ve=Math.atan2(pe.y,pe.x),ge=[];ge.push(...re.fillet),re.flankLo&&ge.push(re.flankLo),ge.push(...Q.slice(1));let Pe=ve-ce;for(;Pe>Math.PI;)Pe-=2*Math.PI;for(;Pe<-Math.PI;)Pe+=2*Math.PI;const Be=Math.max(4,Math.ceil(Math.abs(Pe)/h*24));ge.push(...Mv(a,ce,ce+Pe,Be).slice(1));for(let ue=e-1;ue>=0;ue--)ge.push(ae[ue]);V.flankLo&&(ge.push(V.flankLo),ge.push(V.fillet[V.fillet.length-1])),ge.push(...V.fillet.slice(0,-1).reverse());const rt=[],nt=6,it=ue=>{const Te=rt[rt.length-1];(!Te||Math.hypot(ue.x-Te.x,ue.y-Te.y)>1e-10)&&rt.push(ue)};for(let ue=0;ue<t;ue++){const Te=ue*h,ke=ge.map(F=>$h(F,Te)),De=V.jAngle+Te,C=re.jAngle+(ue+1)*h;for(const F of ke.slice(0,-1))it(F);for(let F=1;F<=nt;F++){const U=De+(C-De)*F/nt;it(zs(l,U))}}if(rt.length>1){const ue=rt[0],Te=rt[rt.length-1];Math.hypot(ue.x-Te.x,ue.y-Te.y)<1e-10&&rt.pop()}const de=Array.from({length:t},(ue,Te)=>Math.PI/2+Te*h);return{input:n,pitchR:s,baseR:o,addendumR:a,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:b,taTip:m,zMinValue:R,undercut:N,alphaTip:p,tipThickness:y,pointed:w,toothProfile:ge,outline:rt,toothCenterAngles:de,jAngleRight:re.jAngle,jAngleLeft:V.jAngle}}function yv(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t],r=n[(t+1)%n.length];e+=i.x*r.y-r.x*i.y}return e/2}function bv(n){let e=0;for(const t of n)e=Math.max(e,Math.hypot(t.x,t.y));return e}function Bo(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(o=>({x:e+o.x*r-o.y*s,y:t+o.x*s+o.y*r}))}function Yh(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function Ev(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,o=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),a=Math.acos(o),l=e.baseR/Math.cos(a),c=t.baseR/Math.cos(a),u=i-r,f=Pe=>Math.tan(Pe)-Pe,h=2*i*(f(a)-f(s)),d=h*Math.cos(a),v=i-e.addendumR-t.dedendumR,b=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,A=[],P=i<e.addendumR+t.addendumR;P&&A.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(v<0||b<0)&&A.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?A.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):A.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||A.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const y={x:l,y:0},w=Math.sin(a),R=Math.cos(a),N=-l*w,M={x:y.x+N*w,y:y.y+N*R},D=c*w,B={x:y.x+D*w,y:y.y+D*R},$=(Pe,Be)=>{const rt=y.x-Pe,nt=y.y,it=2*(rt*w+nt*R),de=rt*rt+nt*nt-Be*Be,ue=it*it-4*de;if(ue<0)return[];const Te=Math.sqrt(ue);return[(-it-Te)/2,(-it+Te)/2]},se=$(0,e.addendumR),V=$(i,t.addendumR).filter(Pe=>Pe<=1e-9),Q=se.filter(Pe=>Pe>=-1e-9),ae=V.length?Math.max(...V):N,ee=Q.length?Math.min(...Q):D,pe={x:y.x+ae*w,y:y.y+ae*R},ce={x:y.x+ee*w,y:y.y+ee*R},ve=Math.max(0,ee-ae),ge=ve/e.basePitch;return{a0:r,a:i,alphaPrime:a,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:v,clearance21:b,basePitchMatch:p,basePitchDiff:m,addendumOverlap:P,actionLine:{p0:pe,p1:ce},tangentLine:{p0:M,p1:B},pitchPoint:y,pathOfContact:ve,contactRatio:ge,ok:p&&!P,warnings:A}}function Kh(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),o=Math.cos(r),a=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=a-Math.atan(a),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*o,n.pitchR1+i*s),v=Math.atan2(i*o,-n.pitchR2+i*s),b=d-f,m=v-h;return{phi1:b,phi2:m,t1:a,t2:l}}function Ll(n,e,t,i){const r=t.alphaPrime,s=Math.sin(r),o=Math.cos(r);let a=0;for(let h=0;h<30;h++){const d=Math.tan(r)+a/n.baseR,v=d-Math.atan(d),b=Math.PI/2+n.beta-v,p=Math.atan2(a*o,t.pitchR1+a*s)-b-i;if(a-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-a/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(a*o,-t.pitchR2+a*s)-u}const Tv="modulepreload",Av=function(n,e){return new URL(n,e).href},Zh={},wv=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=o(t.map(u=>{if(u=Av(u,i),u in Zh)return;Zh[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let b=a.length-1;b>=0;b--){const m=a[b];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":Tv,f||(v.as="script"),v.crossOrigin="",v.href=u,c&&v.setAttribute("nonce",c),document.head.appendChild(v),f)return new Promise((b,m)=>{v.addEventListener("load",b),v.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};async function Rv(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:S}=await wv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var o=S(import.meta.url)}var a=import.meta.url,l="";function c(S){return t.locateFile?t.locateFile(S,l):l+S}var u,f;if(s){var h=o("fs");a.startsWith("file:")&&(l=o("path").dirname(o("url").fileURLToPath(a))+"/"),f=S=>{S=m(S)?new URL(S):S;var x=h.readFileSync(S);return x},u=async(S,x=!0)=>{S=m(S)?new URL(S):S;var L=h.readFileSync(S,x?void 0:"utf8");return L},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",a).href}catch{}r&&(f=S=>{var x=new XMLHttpRequest;return x.open("GET",S,!1),x.responseType="arraybuffer",x.send(null),new Uint8Array(x.response)}),u=async S=>{if(m(S))return new Promise((L,z)=>{var J=new XMLHttpRequest;J.open("GET",S,!0),J.responseType="arraybuffer",J.onload=()=>{if(J.status==200||J.status==0&&J.response){L(J.response);return}z(J.status)},J.onerror=z,J.send(null)});var x=await fetch(S,{credentials:"same-origin"});if(x.ok)return x.arrayBuffer();throw new Error(x.status+" : "+x.url)}}console.log.bind(console);var d=console.error.bind(console),v,b=!1,m=S=>S.startsWith("file://"),p,A,P,y,w,R,N,M,D,B,$,se,re=!1;function V(){var S=Co.buffer;P=new Int8Array(S),w=new Int16Array(S),t.HEAPU8=y=new Uint8Array(S),R=new Uint16Array(S),N=new Int32Array(S),M=new Uint32Array(S),D=new Float32Array(S),B=new Float64Array(S),$=new BigInt64Array(S),se=new BigUint64Array(S)}function Q(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)De(t.preRun.shift());de(ke)}function ae(){re=!0,As.E()}function ee(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Te(t.postRun.shift());de(ue)}function pe(S){t.onAbort?.(S),S="Aborted("+S+")",d(S),b=!0,S+=". Build with -sASSERTIONS for more info.";var x=new WebAssembly.RuntimeError(S);throw A?.(x),x}var ce;function ve(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function ge(S){if(S==ce&&v)return new Uint8Array(v);if(f)return f(S);throw"both async and sync fetching of the wasm failed"}async function Pe(S){if(!v)try{var x=await u(S);return new Uint8Array(x)}catch{}return ge(S)}async function Be(S,x){try{var L=await Pe(S),z=await WebAssembly.instantiate(L,x);return z}catch(J){d(`failed to asynchronously prepare wasm: ${J}`),pe(J)}}async function rt(S,x,L){if(!S&&!m(x)&&!s)try{var z=fetch(x,{credentials:"same-origin"}),J=await WebAssembly.instantiateStreaming(z,L);return J}catch(xe){d(`wasm streaming compile failed: ${xe}`),d("falling back to ArrayBuffer instantiation")}return Be(x,L)}function nt(){var S={a:Hm};return S}async function it(){function S(xe,ye){return As=xe.exports,Vm(As),V(),As}function x(xe){return S(xe.instance)}var L=nt();if(t.instantiateWasm)return new Promise((xe,ye)=>{t.instantiateWasm(L,(be,Ce)=>{xe(S(be))})});ce??=ve();var z=await rt(v,ce,L),J=x(z);return J}var de=S=>{for(;S.length>0;)S.shift()(t)},ue=[],Te=S=>ue.push(S),ke=[],De=S=>ke.push(S);class C{constructor(x){this.excPtr=x,this.ptr=x-24}set_type(x){M[this.ptr+4>>2]=x}get_type(){return M[this.ptr+4>>2]}set_destructor(x){M[this.ptr+8>>2]=x}get_destructor(){return M[this.ptr+8>>2]}set_caught(x){x=x?1:0,P[this.ptr+12]=x}get_caught(){return P[this.ptr+12]!=0}set_rethrown(x){x=x?1:0,P[this.ptr+13]=x}get_rethrown(){return P[this.ptr+13]!=0}init(x,L){this.set_adjusted_ptr(0),this.set_type(x),this.set_destructor(L)}set_adjusted_ptr(x){M[this.ptr+16>>2]=x}get_adjusted_ptr(){return M[this.ptr+16>>2]}}var F=0,U=(S,x,L)=>{var z=new C(S);throw z.init(x,L),F=S,F},k=()=>pe(""),W={},H=S=>{for(;S.length;){var x=S.pop(),L=S.pop();L(x)}};function G(S){return this.fromWireType(M[S>>2])}var fe={},j={},ne={},K=class extends Error{constructor(x){super(x),this.name="InternalError"}},_=S=>{throw new K(S)},O=(S,x,L)=>{S.forEach(be=>ne[be]=x);function z(be){var Ce=L(be);Ce.length!==S.length&&_("Mismatched type converter count");for(var tt=0;tt<S.length;++tt)te(S[tt],Ce[tt])}var J=new Array(x.length),xe=[],ye=0;x.forEach((be,Ce)=>{j.hasOwnProperty(be)?J[Ce]=j[be]:(xe.push(be),fe.hasOwnProperty(be)||(fe[be]=[]),fe[be].push(()=>{J[Ce]=j[be],++ye,ye===xe.length&&z(J)}))}),xe.length===0&&z(J)},me=S=>{var x=W[S];delete W[S];var L=x.rawConstructor,z=x.rawDestructor,J=x.fields,xe=J.map(ye=>ye.getterReturnType).concat(J.map(ye=>ye.setterArgumentType));O([S],xe,ye=>{var be={};return J.forEach((Ce,tt)=>{var et=Ce.fieldName,bt=ye[tt],kt=ye[tt].optional,St=Ce.getter,Gt=Ce.getterContext,tn=ye[tt+J.length],Xn=Ce.setter,bn=Ce.setterContext;be[et]={read:Ri=>bt.fromWireType(St(Gt,Ri)),write:(Ri,gn)=>{var Po=[];Xn(bn,Ri,tn.toWireType(Po,gn)),H(Po)},optional:kt}}),[{name:x.name,fromWireType:Ce=>{var tt={};for(var et in be)tt[et]=be[et].read(Ce);return z(Ce),tt},toWireType:(Ce,tt)=>{for(var et in be)if(!(et in tt)&&!be[et].optional)throw new TypeError(`Missing field: "${et}"`);var bt=L();for(et in be)be[et].write(bt,tt[et]);return Ce!==null&&Ce.push(z,bt),bt},readValueFromPointer:G,destructorFunction:z}]})},T=S=>{for(var x="";;){var L=y[S++];if(!L)return x;x+=String.fromCharCode(L)}},g=class extends Error{constructor(x){super(x),this.name="BindingError"}},I=S=>{throw new g(S)};function Z(S,x,L={}){var z=x.name;if(S||I(`type "${z}" must have a positive integer typeid pointer`),j.hasOwnProperty(S)){if(L.ignoreDuplicateRegistrations)return;I(`Cannot register type '${z}' twice`)}if(j[S]=x,delete ne[S],fe.hasOwnProperty(S)){var J=fe[S];delete fe[S],J.forEach(xe=>xe())}}function te(S,x,L={}){return Z(S,x,L)}var Ae=(S,x,L)=>{switch(x){case 1:return L?z=>P[z]:z=>y[z];case 2:return L?z=>w[z>>1]:z=>R[z>>1];case 4:return L?z=>N[z>>2]:z=>M[z>>2];case 8:return L?z=>$[z>>3]:z=>se[z>>3];default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},Re=(S,x,L,z,J)=>{x=T(x);const xe=z===0n;let ye=be=>be;if(xe){const be=L*8;ye=Ce=>BigInt.asUintN(be,Ce),J=ye(J)}te(S,{name:x,fromWireType:ye,toWireType:(be,Ce)=>(typeof Ce=="number"&&(Ce=BigInt(Ce)),Ce),readValueFromPointer:Ae(x,L,!xe),destructorFunction:null})},_e=(S,x,L,z)=>{x=T(x),te(S,{name:x,fromWireType:function(J){return!!J},toWireType:function(J,xe){return xe?L:z},readValueFromPointer:function(J){return this.fromWireType(y[J])},destructorFunction:null})},Me=S=>({count:S.count,deleteScheduled:S.deleteScheduled,preservePointerOnDelete:S.preservePointerOnDelete,ptr:S.ptr,ptrType:S.ptrType,smartPtr:S.smartPtr,smartPtrType:S.smartPtrType}),we=S=>{function x(L){return L.$$.ptrType.registeredClass.name}I(x(S)+" instance already deleted")},Ge=!1,Fe=S=>{},Ie=S=>{S.smartPtr?S.smartPtrType.rawDestructor(S.smartPtr):S.ptrType.registeredClass.rawDestructor(S.ptr)},Je=S=>{S.count.value-=1;var x=S.count.value===0;x&&Ie(S)},Qe=S=>globalThis.FinalizationRegistry?(Ge=new FinalizationRegistry(x=>{Je(x.$$)}),Qe=x=>{var L=x.$$,z=!!L.smartPtr;if(z){var J={$$:L};Ge.register(x,J,x)}return x},Fe=x=>Ge.unregister(x),Qe(S)):(Qe=x=>x,S),at=()=>{let S=Y.prototype;Object.assign(S,{isAliasOf(L){if(!(this instanceof Y)||!(L instanceof Y))return!1;var z=this.$$.ptrType.registeredClass,J=this.$$.ptr;L.$$=L.$$;for(var xe=L.$$.ptrType.registeredClass,ye=L.$$.ptr;z.baseClass;)J=z.upcast(J),z=z.baseClass;for(;xe.baseClass;)ye=xe.upcast(ye),xe=xe.baseClass;return z===xe&&J===ye},clone(){if(this.$$.ptr||we(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var L=Qe(Object.create(Object.getPrototypeOf(this),{$$:{value:Me(this.$$)}}));return L.$$.count.value+=1,L.$$.deleteScheduled=!1,L},delete(){this.$$.ptr||we(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&I("Object already scheduled for deletion"),Fe(this),Je(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||we(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&I("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const x=Symbol.dispose;x&&(S[x]=S.delete)};function Y(){}var Ue=(S,x)=>Object.defineProperty(x,"name",{value:S}),Se={},Oe=(S,x,L)=>{if(S[x].overloadTable===void 0){var z=S[x];S[x]=function(...J){return S[x].overloadTable.hasOwnProperty(J.length)||I(`Function '${L}' called with an invalid number of arguments (${J.length}) - expects one of (${S[x].overloadTable})!`),S[x].overloadTable[J.length].apply(this,J)},S[x].overloadTable=[],S[x].overloadTable[z.argCount]=z}},ze=(S,x,L)=>{t.hasOwnProperty(S)?((L===void 0||t[S].overloadTable!==void 0&&t[S].overloadTable[L]!==void 0)&&I(`Cannot register public name '${S}' twice`),Oe(t,S,S),t[S].overloadTable.hasOwnProperty(L)&&I(`Cannot register multiple overloads of a function with the same number of arguments (${L})!`),t[S].overloadTable[L]=x):(t[S]=x,t[S].argCount=L)},Ee=48,je=57,Ze=S=>{S=S.replace(/[^a-zA-Z0-9_]/g,"$");var x=S.charCodeAt(0);return x>=Ee&&x<=je?`_${S}`:S};function Ct(S,x,L,z,J,xe,ye,be){this.name=S,this.constructor=x,this.instancePrototype=L,this.rawDestructor=z,this.baseClass=J,this.getActualType=xe,this.upcast=ye,this.downcast=be,this.pureVirtualFunctions=[]}var mt=(S,x,L)=>{for(;x!==L;)x.upcast||I(`Expected null or instance of ${L.name}, got an instance of ${x.name}`),S=x.upcast(S),x=x.baseClass;return S},mn=S=>{if(S===null)return"null";var x=typeof S;return x==="object"||x==="array"||x==="function"?S.toString():""+S};function Nn(S,x){if(x===null)return this.isReference&&I(`null is not a valid ${this.name}`),0;x.$$||I(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||I(`Cannot pass deleted object as a pointer of type ${this.name}`);var L=x.$$.ptrType.registeredClass,z=mt(x.$$.ptr,L,this.registeredClass);return z}function fl(S,x){var L;if(x===null)return this.isReference&&I(`null is not a valid ${this.name}`),this.isSmartPointer?(L=this.rawConstructor(),S!==null&&S.push(this.rawDestructor,L),L):0;(!x||!x.$$)&&I(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||I(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&x.$$.ptrType.isConst&&I(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);var z=x.$$.ptrType.registeredClass;if(L=mt(x.$$.ptr,z,this.registeredClass),this.isSmartPointer)switch(x.$$.smartPtr===void 0&&I("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:x.$$.smartPtrType===this?L=x.$$.smartPtr:I(`Cannot convert argument of type ${x.$$.smartPtrType?x.$$.smartPtrType.name:x.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:L=x.$$.smartPtr;break;case 2:if(x.$$.smartPtrType===this)L=x.$$.smartPtr;else{var J=x.clone();L=this.rawShare(L,We.toHandle(()=>J.delete())),S!==null&&S.push(this.rawDestructor,L)}break;default:I("Unsupporting sharing policy")}return L}function dl(S,x){if(x===null)return this.isReference&&I(`null is not a valid ${this.name}`),0;x.$$||I(`Cannot pass "${mn(x)}" as a ${this.name}`),x.$$.ptr||I(`Cannot pass deleted object as a pointer of type ${this.name}`),x.$$.ptrType.isConst&&I(`Cannot convert argument of type ${x.$$.ptrType.name} to parameter type ${this.name}`);var L=x.$$.ptrType.registeredClass,z=mt(x.$$.ptr,L,this.registeredClass);return z}var Ss=(S,x,L)=>{if(x===L)return S;if(L.baseClass===void 0)return null;var z=Ss(S,x,L.baseClass);return z===null?null:L.downcast(z)},Ms={},pl=(S,x)=>{for(x===void 0&&I("ptr should not be undefined");S.baseClass;)x=S.upcast(x),S=S.baseClass;return x},bo=(S,x)=>(x=pl(S,x),Ms[x]),vr=(S,x)=>{(!x.ptrType||!x.ptr)&&_("makeClassHandle requires ptr and ptrType");var L=!!x.smartPtrType,z=!!x.smartPtr;return L!==z&&_("Both smartPtrType and smartPtr must be specified"),x.count={value:1},Qe(Object.create(S,{$$:{value:x,writable:!0}}))};function Ai(S){var x=this.getPointee(S);if(!x)return this.destructor(S),null;var L=bo(this.registeredClass,x);if(L!==void 0){if(L.$$.count.value===0)return L.$$.ptr=x,L.$$.smartPtr=S,L.clone();var z=L.clone();return this.destructor(S),z}function J(){return this.isSmartPointer?vr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:x,smartPtrType:this,smartPtr:S}):vr(this.registeredClass.instancePrototype,{ptrType:this,ptr:S})}var xe=this.registeredClass.getActualType(x),ye=Se[xe];if(!ye)return J.call(this);var be;this.isConst?be=ye.constPointerType:be=ye.pointerType;var Ce=Ss(x,this.registeredClass,be.registeredClass);return Ce===null?J.call(this):this.isSmartPointer?vr(be.registeredClass.instancePrototype,{ptrType:be,ptr:Ce,smartPtrType:this,smartPtr:S}):vr(be.registeredClass.instancePrototype,{ptrType:be,ptr:Ce})}var ys=()=>{Object.assign(xr.prototype,{getPointee(S){return this.rawGetPointee&&(S=this.rawGetPointee(S)),S},destructor(S){this.rawDestructor?.(S)},readValueFromPointer:G,fromWireType:Ai})};function xr(S,x,L,z,J,xe,ye,be,Ce,tt,et){this.name=S,this.registeredClass=x,this.isReference=L,this.isConst=z,this.isSmartPointer=J,this.pointeeType=xe,this.sharingPolicy=ye,this.rawGetPointee=be,this.rawConstructor=Ce,this.rawShare=tt,this.rawDestructor=et,!J&&x.baseClass===void 0?z?(this.toWireType=Nn,this.destructorFunction=null):(this.toWireType=dl,this.destructorFunction=null):this.toWireType=fl}var bs=(S,x,L)=>{t.hasOwnProperty(S)||_("Replacing nonexistent public symbol"),t[S].overloadTable!==void 0&&L!==void 0?t[S].overloadTable[L]=x:(t[S]=x,t[S].argCount=L)},Sr=[],Eo=S=>{var x=Sr[S];return x||(Sr[S]=x=oh.get(S)),x},Jt=(S,x,L=!1)=>{S=T(S);function z(){var xe=Eo(x);return xe}var J=z();return typeof J!="function"&&I(`unknown function pointer with signature ${S}: ${x}`),J};class To extends Error{}var Es=S=>{var x=sh(S),L=T(x);return tr(x),L},Qi=(S,x)=>{var L=[],z={};function J(xe){if(!z[xe]&&!j[xe]){if(ne[xe]){ne[xe].forEach(J);return}L.push(xe),z[xe]=!0}}throw x.forEach(J),new To(`${S}: `+L.map(Es).join([", "]))},ml=(S,x,L,z,J,xe,ye,be,Ce,tt,et,bt,kt)=>{et=T(et),xe=Jt(J,xe),be&&=Jt(ye,be),tt&&=Jt(Ce,tt),kt=Jt(bt,kt);var St=Ze(et);ze(St,function(){Qi(`Cannot construct ${et} due to unbound types`,[z])}),O([S,x,L],z?[z]:[],Gt=>{Gt=Gt[0];var tn,Xn;z?(tn=Gt.registeredClass,Xn=tn.instancePrototype):Xn=Y.prototype;var bn=Ue(et,function(...vl){if(Object.getPrototypeOf(this)!==Ri)throw new g(`Use 'new' to construct ${et}`);if(gn.constructor_body===void 0)throw new g(`${et} has no accessible constructor`);var hh=gn.constructor_body[vl.length];if(hh===void 0)throw new g(`Tried to invoke ctor of ${et} with invalid number of parameters (${vl.length}) - expected (${Object.keys(gn.constructor_body).toString()}) parameters instead!`);return hh.apply(this,vl)}),Ri=Object.create(Xn,{constructor:{value:bn}});bn.prototype=Ri;var gn=new Ct(et,bn,Ri,kt,tn,xe,be,tt);gn.baseClass&&(gn.baseClass.__derivedClasses??=[],gn.baseClass.__derivedClasses.push(gn));var Po=new xr(et,gn,!0,!1,!1),ch=new xr(et+"*",gn,!1,!1,!1),uh=new xr(et+" const*",gn,!1,!0,!1);return Se[S]={pointerType:ch,constPointerType:uh},bs(St,bn),[Po,ch,uh]})},Ts=(S,x)=>{for(var L=[],z=0;z<S;z++)L.push(M[x+z*4>>2]);return L};function Ao(S){for(var x=1;x<S.length;++x)if(S[x]!==null&&S[x].destructorFunction===void 0)return!0;return!1}function wo(S,x,L,z){var J=Ao(S),xe=S.length-2,ye=[],be=["fn"];x&&be.push("thisWired");for(var Ce=0;Ce<xe;++Ce)ye.push(`arg${Ce}`),be.push(`arg${Ce}Wired`);ye=ye.join(","),be=be.join(",");var tt=`return function (${ye}) {
`;J&&(tt+=`var destructors = [];
`);var et=J?"destructors":"null",bt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];x&&(tt+=`var thisWired = toClassParamWire(${et}, this);
`);for(var Ce=0;Ce<xe;++Ce){var kt=`toArg${Ce}Wire`;tt+=`var arg${Ce}Wired = ${kt}(${et}, arg${Ce});
`,bt.push(kt)}if(tt+=(L||z?"var rv = ":"")+`invoker(${be});
`,J)tt+=`runDestructors(destructors);
`;else for(var Ce=x?1:2;Ce<S.length;++Ce){var St=Ce===1?"thisWired":"arg"+(Ce-2)+"Wired";S[Ce].destructorFunction!==null&&(tt+=`${St}_dtor(${St});
`,bt.push(`${St}_dtor`))}return L&&(tt+=`var ret = fromRetWire(rv);
return ret;
`),tt+=`}
`,new Function(bt,tt)}function E(S,x,L,z,J,xe){var ye=x.length;ye<2&&I("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var be=x[1]!==null&&L!==null,Ce=Ao(x),tt=!x[0].isVoid,et=x[0],bt=x[1],kt=[S,I,z,J,H,et.fromWireType.bind(et),bt?.toWireType.bind(bt)],St=2;St<ye;++St){var Gt=x[St];kt.push(Gt.toWireType.bind(Gt))}if(!Ce)for(var St=be?1:2;St<x.length;++St)x[St].destructorFunction!==null&&kt.push(x[St].destructorFunction);var Xn=wo(x,be,tt,xe)(...kt);return Ue(S,Xn)}var X=(S,x,L,z,J,xe)=>{var ye=Ts(x,L);J=Jt(z,J),O([],[S],be=>{be=be[0];var Ce=`constructor ${be.name}`;if(be.registeredClass.constructor_body===void 0&&(be.registeredClass.constructor_body=[]),be.registeredClass.constructor_body[x-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${x-1}) for class '${be.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return be.registeredClass.constructor_body[x-1]=()=>{Qi(`Cannot construct ${be.name} due to unbound types`,ye)},O([],ye,tt=>(tt.splice(1,0,null),be.registeredClass.constructor_body[x-1]=E(Ce,tt,null,J,xe),[])),[]})},he=S=>{S=S.trim();const x=S.indexOf("(");return x===-1?S:S.slice(0,x)},le=(S,x,L,z,J,xe,ye,be,Ce,tt)=>{var et=Ts(L,z);x=T(x),x=he(x),xe=Jt(J,xe,Ce),O([],[S],bt=>{bt=bt[0];var kt=`${bt.name}.${x}`;x.startsWith("@@")&&(x=Symbol[x.substring(2)]),be&&bt.registeredClass.pureVirtualFunctions.push(x);function St(){Qi(`Cannot call ${kt} due to unbound types`,et)}var Gt=bt.registeredClass.instancePrototype,tn=Gt[x];return tn===void 0||tn.overloadTable===void 0&&tn.className!==bt.name&&tn.argCount===L-2?(St.argCount=L-2,St.className=bt.name,Gt[x]=St):(Oe(Gt,x,kt),Gt[x].overloadTable[L-2]=St),O([],et,Xn=>{var bn=E(kt,Xn,bt,xe,ye,Ce);return Gt[x].overloadTable===void 0?(bn.argCount=L-2,Gt[x]=bn):Gt[x].overloadTable[L-2]=bn,[]}),[]})},oe=(S,x,L)=>(S instanceof Object||I(`${L} with invalid "this": ${S}`),S instanceof x.registeredClass.constructor||I(`${L} incompatible with "this" of type ${S.constructor.name}`),S.$$.ptr||I(`cannot call emscripten binding method ${L} on deleted object`),mt(S.$$.ptr,S.$$.ptrType.registeredClass,x.registeredClass)),Ve=(S,x,L,z,J,xe,ye,be,Ce,tt)=>{x=T(x),J=Jt(z,J),O([],[S],et=>{et=et[0];var bt=`${et.name}.${x}`,kt={get(){Qi(`Cannot access ${bt} due to unbound types`,[L,ye])},enumerable:!0,configurable:!0};return Ce?kt.set=()=>Qi(`Cannot access ${bt} due to unbound types`,[L,ye]):kt.set=St=>I(bt+" is a read-only property"),Object.defineProperty(et.registeredClass.instancePrototype,x,kt),O([],Ce?[L,ye]:[L],St=>{var Gt=St[0],tn={get(){var bn=oe(this,et,bt+" getter");return Gt.fromWireType(J(xe,bn))},enumerable:!0};if(Ce){Ce=Jt(be,Ce);var Xn=St[1];tn.set=function(bn){var Ri=oe(this,et,bt+" setter"),gn=[];Ce(tt,Ri,Xn.toWireType(gn,bn)),H(gn)}}return Object.defineProperty(et.registeredClass.instancePrototype,x,tn),[]}),[]})},$e=[],Ne=[0,1,,1,null,1,!0,1,!1,1],Ye=S=>{S>9&&--Ne[S+1]===0&&(Ne[S]=void 0,$e.push(S))},We={toValue:S=>(S||I(`Cannot use deleted val. handle = ${S}`),Ne[S]),toHandle:S=>{switch(S){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const x=$e.pop()||Ne.length;return Ne[x]=S,Ne[x+1]=1,x}}}},ut={name:"emscripten::val",fromWireType:S=>{var x=We.toValue(S);return Ye(S),x},toWireType:(S,x)=>We.toHandle(x),readValueFromPointer:G,destructorFunction:null},ft=S=>te(S,ut),Ke=(S,x,L)=>{switch(x){case 1:return L?function(z){return this.fromWireType(P[z])}:function(z){return this.fromWireType(y[z])};case 2:return L?function(z){return this.fromWireType(w[z>>1])}:function(z){return this.fromWireType(R[z>>1])};case 4:return L?function(z){return this.fromWireType(N[z>>2])}:function(z){return this.fromWireType(M[z>>2])};default:throw new TypeError(`invalid integer width (${x}): ${S}`)}},Mt=(S,x,L,z)=>{x=T(x);function J(){}J.values={},te(S,{name:x,constructor:J,fromWireType:function(xe){return this.constructor.values[xe]},toWireType:(xe,ye)=>ye.value,readValueFromPointer:Ke(x,L,z),destructorFunction:null}),ze(x,J)},Bt=(S,x)=>{var L=j[S];return L===void 0&&I(`${x} has unknown type ${Es(S)}`),L},Dt=(S,x,L)=>{var z=Bt(S,"enum");x=T(x);var J=z.constructor,xe=Object.create(z.constructor.prototype,{value:{value:L},constructor:{value:Ue(`${z.name}_${x}`,function(){})}});J.values[L]=xe,J[x]=xe},At=(S,x)=>{switch(x){case 4:return function(L){return this.fromWireType(D[L>>2])};case 8:return function(L){return this.fromWireType(B[L>>3])};default:throw new TypeError(`invalid float width (${x}): ${S}`)}},jt=(S,x,L)=>{x=T(x),te(S,{name:x,fromWireType:z=>z,toWireType:(z,J)=>J,readValueFromPointer:At(x,L),destructorFunction:null})},qe=(S,x,L,z,J,xe,ye,be)=>{var Ce=Ts(x,L);S=T(S),S=he(S),J=Jt(z,J,ye),ze(S,function(){Qi(`Cannot call ${S} due to unbound types`,Ce)},x-1),O([],Ce,tt=>{var et=[tt[0],null].concat(tt.slice(1));return bs(S,E(S,et,null,J,xe,ye),x-1),[]})},en=(S,x,L,z,J)=>{x=T(x);const xe=z===0;let ye=Ce=>Ce;if(xe){var be=32-8*L;ye=Ce=>Ce<<be>>>be,J=ye(J)}te(S,{name:x,fromWireType:ye,toWireType:(Ce,tt)=>tt,readValueFromPointer:Ae(x,L,z!==0),destructorFunction:null})},gt=(S,x,L)=>{var z=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],J=z[x];function xe(ye){var be=M[ye>>2],Ce=M[ye+4>>2];return new J(P.buffer,Ce,be)}L=T(L),te(S,{name:L,fromWireType:xe,readValueFromPointer:xe},{ignoreDuplicateRegistrations:!0})},yn=(S,x,L,z)=>{if(!(z>0))return 0;for(var J=L,xe=L+z-1,ye=0;ye<S.length;++ye){var be=S.codePointAt(ye);if(be<=127){if(L>=xe)break;x[L++]=be}else if(be<=2047){if(L+1>=xe)break;x[L++]=192|be>>6,x[L++]=128|be&63}else if(be<=65535){if(L+2>=xe)break;x[L++]=224|be>>12,x[L++]=128|be>>6&63,x[L++]=128|be&63}else{if(L+3>=xe)break;x[L++]=240|be>>18,x[L++]=128|be>>12&63,x[L++]=128|be>>6&63,x[L++]=128|be&63,ye++}}return x[L]=0,L-J},Fn=(S,x,L)=>yn(S,y,x,L),ni=S=>{for(var x=0,L=0;L<S.length;++L){var z=S.charCodeAt(L);z<=127?x++:z<=2047?x+=2:z>=55296&&z<=57343?(x+=4,++L):x+=3}return x},wi=globalThis.TextDecoder&&new TextDecoder,yt=(S,x,L,z)=>{var J=x+L;if(z)return J;for(;S[x]&&!(x>=J);)++x;return x},zt=(S,x=0,L,z)=>{var J=yt(S,x,L,z);if(J-x>16&&S.buffer&&wi)return wi.decode(S.subarray(x,J));for(var xe="";x<J;){var ye=S[x++];if(!(ye&128)){xe+=String.fromCharCode(ye);continue}var be=S[x++]&63;if((ye&224)==192){xe+=String.fromCharCode((ye&31)<<6|be);continue}var Ce=S[x++]&63;if((ye&240)==224?ye=(ye&15)<<12|be<<6|Ce:ye=(ye&7)<<18|be<<12|Ce<<6|S[x++]&63,ye<65536)xe+=String.fromCharCode(ye);else{var tt=ye-65536;xe+=String.fromCharCode(55296|tt>>10,56320|tt&1023)}}return xe},ii=(S,x,L)=>S?zt(y,S,x,L):"",Pt=(S,x)=>{x=T(x),te(S,{name:x,fromWireType(L){var z=M[L>>2],J=L+4,xe;return xe=ii(J,z,!0),tr(L),xe},toWireType(L,z){z instanceof ArrayBuffer&&(z=new Uint8Array(z));var J,xe=typeof z=="string";xe||ArrayBuffer.isView(z)&&z.BYTES_PER_ELEMENT==1||I("Cannot pass non-string to std::string"),xe?J=ni(z):J=z.length;var ye=_l(4+J+1),be=ye+4;return M[ye>>2]=J,xe?Fn(z,be,J+1):y.set(z,be),L!==null&&L.push(tr,ye),ye},readValueFromPointer:G,destructorFunction(L){tr(L)}})},Wn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,er=(S,x,L)=>{var z=S>>1,J=yt(R,z,x/2,L);if(J-z>16&&Wn)return Wn.decode(R.subarray(z,J));for(var xe="",ye=z;ye<J;++ye){var be=R[ye];xe+=String.fromCharCode(be)}return xe},Ro=(S,x,L)=>{if(L??=2147483647,L<2)return 0;L-=2;for(var z=x,J=L<S.length*2?L/2:S.length,xe=0;xe<J;++xe){var ye=S.charCodeAt(xe);w[x>>1]=ye,x+=2}return w[x>>1]=0,x-z},vm=S=>S.length*2,xm=(S,x,L)=>{for(var z="",J=S>>2,xe=0;!(xe>=x/4);xe++){var ye=M[J+xe];if(!ye&&!L)break;z+=String.fromCodePoint(ye)}return z},Sm=(S,x,L)=>{if(L??=2147483647,L<4)return 0;for(var z=x,J=z+L-4,xe=0;xe<S.length;++xe){var ye=S.codePointAt(xe);if(ye>65535&&xe++,N[x>>2]=ye,x+=4,x+4>J)break}return N[x>>2]=0,x-z},Mm=S=>{for(var x=0,L=0;L<S.length;++L){var z=S.codePointAt(L);z>65535&&L++,x+=4}return x},ym=(S,x,L)=>{L=T(L);var z,J,xe;x===2?(z=er,J=Ro,xe=vm):(z=xm,J=Sm,xe=Mm),te(S,{name:L,fromWireType:ye=>{var be=M[ye>>2],Ce=z(ye+4,be*x,!0);return tr(ye),Ce},toWireType:(ye,be)=>{typeof be!="string"&&I(`Cannot pass non-string to C++ string type ${L}`);var Ce=xe(be),tt=_l(4+Ce+x);return M[tt>>2]=Ce/x,J(be,tt+4,Ce+x),ye!==null&&ye.push(tr,tt),tt},readValueFromPointer:G,destructorFunction(ye){tr(ye)}})},bm=(S,x,L,z,J,xe)=>{W[S]={name:T(x),rawConstructor:Jt(L,z),rawDestructor:Jt(J,xe),fields:[]}},Em=(S,x,L,z,J,xe,ye,be,Ce,tt)=>{W[S].fields.push({fieldName:T(x),getterReturnType:L,getter:Jt(z,J),getterContext:xe,setterArgumentType:ye,setter:Jt(be,Ce),setterContext:tt})},Tm=(S,x)=>{x=T(x),te(S,{isVoid:!0,name:x,fromWireType:()=>{},toWireType:(L,z)=>{}})},gl=[],Am=S=>{var x=gl.length;return gl.push(S),x},wm=(S,x)=>{for(var L=new Array(S),z=0;z<S;++z)L[z]=Bt(M[x+z*4>>2],`parameter ${z}`);return L},Rm=(S,x,L)=>{var z=[],J=S(z,L);return z.length&&(M[x>>2]=We.toHandle(z)),J},Cm={},rh=S=>{var x=Cm[S];return x===void 0?T(S):x},Pm=(S,x,L)=>{var z=8,[J,...xe]=wm(S,x),ye=J.toWireType.bind(J),be=xe.map(St=>St.readValueFromPointer.bind(St));S--;var Ce={toValue:We.toValue},tt=be.map((St,Gt)=>{var tn=`argFromPtr${Gt}`;return Ce[tn]=St,`${tn}(args${Gt?"+"+Gt*z:""})`}),et;switch(L){case 0:et="toValue(handle)";break;case 2:et="new (toValue(handle))";break;case 3:et="";break;case 1:Ce.getStringOrSymbol=rh,et="toValue(handle)[getStringOrSymbol(methodName)]";break}et+=`(${tt})`,J.isVoid||(Ce.toReturnWire=ye,Ce.emval_returnValue=Rm,et=`return emval_returnValue(toReturnWire, destructorsRef, ${et})`),et=`return function (handle, methodName, destructorsRef, args) {
  ${et}
  }`;var bt=new Function(Object.keys(Ce),et)(...Object.values(Ce)),kt=`methodCaller<(${xe.map(St=>St.name)}) => ${J.name}>`;return Am(Ue(kt,bt))},Lm=(S,x)=>(S=We.toValue(S),x=We.toValue(x),We.toHandle(S[x])),Dm=S=>{S>9&&(Ne[S+1]+=1)},Im=(S,x,L,z,J)=>gl[S](x,L,z,J),Um=S=>We.toHandle(rh(S)),Nm=S=>{var x=We.toValue(S);H(x),Ye(S)},Fm=()=>2147483648,Om=(S,x)=>Math.ceil(S/x)*x,Bm=S=>{var x=Co.buffer.byteLength,L=(S-x+65535)/65536|0;try{return Co.grow(L),V(),1}catch{}},zm=S=>{var x=y.length;S>>>=0;var L=Fm();if(S>L)return!1;for(var z=1;z<=4;z*=2){var J=x*(1+.2/z);J=Math.min(J,S+100663296);var xe=Math.min(L,Om(Math.max(S,J),65536)),ye=Bm(xe);if(ye)return!0}return!1};if(at(),ys(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(v=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var sh,_l,tr,Co,oh;function Vm(S){sh=S.F,_l=S.H,tr=S.I,Co=S.D,oh=S.G}var Hm={h:U,x:k,v:me,u:Re,B:_e,e:ml,g:X,a:le,f:Ve,z:ft,n:Mt,c:Dt,t:jt,b:qe,i:en,d:gt,A:Pt,q:ym,w:bm,p:Em,C:Tm,l:Pm,m:Ye,r:Lm,o:Dm,k:Im,s:Um,j:Nm,y:zm};function km(){Q();function S(){t.calledRun=!0,!b&&(ae(),p?.(t),t.onRuntimeInitialized?.(),ee())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),S()},1)):S()}var As;As=await it(),km();function Gm(S){if(S.length%2!=0)throw"MakePath64: intArray.length must be even";const x=S.length/2,L=new BigInt64Array(x*3);for(let J=0,xe=0;J<S.length;J+=2,xe+=3){const ye=S[J],be=S[J+1];L[xe]=typeof ye=="bigint"?ye:BigInt(ye),L[xe+1]=typeof be=="bigint"?be:BigInt(be)}let z=new t.Path64;return z.assign(L),z}t.MakePath64=Gm;function Wm(S){if(S.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const x=new BigInt64Array(S.length);for(let z=0;z<S.length;z++){const J=S[z];x[z]=typeof J=="bigint"?J:BigInt(J)}let L=new t.Path64;return L.assign(x),L}t.MakePathZ64=Wm;function Xm(S){if(S.length%2!=0)throw"MakePathD: intArray.length must be even";const x=S.length/2,L=new Float64Array(x*3);for(let J=0,xe=0;J<S.length;J+=2,xe+=3)L[xe]=S[J],L[xe+1]=S[J+1];let z=new t.PathD;return z.assign(L),z}t.MakePathD=Xm;function $m(S){if(S.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const x=S instanceof Float64Array?S:Float64Array.from(S);let L=new t.PathD;return L.assign(x),L}t.MakePathZD=$m;function ah(S){const x=S.view(),L=new BigInt64Array(x.length);for(let J=0;J<x.length;J++)L[J]=BigInt(Math.round(x[J]));let z=new t.Path64;return z.assign(L),z}t.PathDToPath64=ah;function lh(S){const x=S.view(),L=new Float64Array(x.length);for(let J=0;J<x.length;J++)L[J]=Number(x[J]);let z=new t.PathD;return z.assign(L),z}t.Path64ToPathD=lh;function qm(S){let x=new t.PathsD;for(let L=0;L<S.size();L++){const z=S.get(L);let J=lh(z);x.push_back(J),J.delete(),z.delete()}return x}t.Paths64ToPathsD=qm;function Ym(S){let x=new t.Paths64;for(let L=0;L<S.size();L++){const z=S.get(L);let J=ah(z);x.push_back(J),J.delete(),z.delete()}return x}return t.PathsDToPaths64=Ym,re?e=t:e=new Promise((S,x)=>{p=S,A=x}),e}let Dl=null;function Cv(){return Dl||(Dl=Rv()),Dl}function Pv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function Jh(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(Pv(n,r));return i}function Lv(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function Dv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Lv(n.get(i)));return e}async function jh(n,e){const t=await Cv(),i=Jh(t,n),r=Jh(t,e),o=t.IntersectD(i,r,t.FillRule.NonZero,6),a=Math.abs(t.AreaPathsD(o));return{regions:Dv(o),area:a,intersects:a>1e-8}}const wn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function ya(n,e){return n*wn[e].factor}function Zs(n,e){return n/wn[e].factor}function Iv(n,e){return`${ya(n,e).toFixed(wn[e].decimals)} ${wn[e].label}`}const zo=12;function Uv(){return`meas-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Nv(n){const e=n.trim();if(!e)throw new Error("测量文件为空");if(e.startsWith("{")||e.startsWith("[")){let r;try{r=JSON.parse(e)}catch{throw new Error("测量文件 JSON 解析失败")}if(Array.isArray(r)||typeof r!="object"||r===null)throw new Error('缺少单位声明（需要 { "unit": "mm", "points": [...] }）');const s=r,o=Qh(s.unit),a=s.points;if(!Array.isArray(a)||!a.length)throw new Error("缺少 points 坐标数组");const l=a.map(c=>{if(Array.isArray(c)&&c.length===2)return{x:Number(c[0]),y:Number(c[1])};if(c&&typeof c=="object"&&"x"in c&&"y"in c){const u=c;return{x:Number(u.x),y:Number(u.y)}}throw new Error("坐标点格式应为 [x,y] 或 {x,y}")});return{unit:o,points:l}}let t=null;const i=[];for(const r of e.split(/\r?\n/)){const s=r.trim();if(!s)continue;const o=s.match(/^#?\s*unit\s*[:=,]\s*([A-Za-z]+)\s*$/i);if(o){t=Qh(o[1]);continue}if(s.startsWith("#"))continue;const a=s.split(/[,;\s]+/).filter(Boolean);if(a.length!==2)throw new Error(`无法解析的数据行：${s}`);const l=Number(a[0]),c=Number(a[1]);if(!Number.isFinite(l)||!Number.isFinite(c))throw new Error(`非数值坐标：${s}`);i.push({x:l,y:c})}if(!t)throw new Error('缺少单位声明（CSV 需含 "unit,mm" 或 "# unit: mm" 行）');if(!i.length)throw new Error("文件中没有坐标点");return{unit:t,points:i}}function Qh(n){const e=String(n??"").toLowerCase();if(!e||!(e in wn))throw new Error(`缺少或无法识别的单位 "${e||"(空)"}"（支持 ${Object.keys(wn).join("/")}）`);return e}function Fv(n){if(n.length<zo+1)throw new Error(`测点不足（至少 ${zo} 个不同点 + 重复首点闭合）`);for(const p of n)if(!Number.isFinite(p.x)||!Number.isFinite(p.y))throw new Error("存在非有限坐标（NaN/Infinity）");const e=[];for(const p of n){const A=e[e.length-1];(!A||Math.hypot(p.x-A.x,p.y-A.y)>1e-12)&&e.push(p)}let t=1/0,i=-1/0,r=1/0,s=-1/0;for(const p of e)t=Math.min(t,p.x),i=Math.max(i,p.x),r=Math.min(r,p.y),s=Math.max(s,p.y);const o=Math.hypot(i-t,s-r);if(!(o>0)||!Number.isFinite(o))throw new Error("轮廓退化为一个点");const a=e[0],l=e[e.length-1],c=Math.hypot(a.x-l.x,a.y-l.y);if(c>Math.max(1e-9,1e-6*o))throw new Error(`轮廓未闭合（首尾相距 ${c.toPrecision(3)} mm，需重复首点）`);const u=e.slice(0,-1);if(u.length<zo)throw new Error(`有效测点不足（去重后 ${u.length} < ${zo}）`);const f=yv(u);if(Math.abs(f)<=1e-10*o*o)throw new Error("轮廓面积为零（退化或共线），不是有效齿廓");if(zv(u))throw new Error("轮廓存在自交，不是简单闭合环");let h=!1,d=u;f<0&&(d=[...u].reverse(),h=!0);let v=0;for(let p=1;p<d.length;p++)(d[p].x<d[v].x||d[p].x===d[v].x&&d[p].y<d[v].y)&&(v=p);d=[...d.slice(v),...d.slice(0,v)];const b=Ov(d),m=d.map(p=>({x:p.x-b.x,y:p.y-b.y}));return{normalized:m,reversed:h,translation:b,pointCount:m.length}}function Ov(n){let e=0,t=0,i=0;for(let r=0;r<n.length;r++){const s=n[r],o=n[(r+1)%n.length],a=s.x*o.y-o.x*s.y;e+=a,t+=(s.x+o.x)*a,i+=(s.y+o.y)*a}return{x:t/(3*e),y:i/(3*e)}}function Vo(n,e,t){return(e.x-n.x)*(t.y-n.y)-(e.y-n.y)*(t.x-n.x)}function Ho(n,e,t){return Math.min(n.x,e.x)<=t.x&&t.x<=Math.max(n.x,e.x)&&Math.min(n.y,e.y)<=t.y&&t.y<=Math.max(n.y,e.y)}function Bv(n,e,t,i,r){const s=Vo(n,e,t),o=Vo(n,e,i),a=Vo(t,i,n),l=Vo(t,i,e);if(s===0&&Ho(n,e,t)||o===0&&Ho(n,e,i)||a===0&&Ho(t,i,n)||l===0&&Ho(t,i,e))return!0;const c=Math.abs(s)<=r?0:Math.sign(s),u=Math.abs(o)<=r?0:Math.sign(o),f=Math.abs(a)<=r?0:Math.sign(a),h=Math.abs(l)<=r?0:Math.sign(l);return c!==0&&u!==0&&f!==0&&h!==0&&c!==u&&f!==h}function zv(n){const e=n.length;let t=1;for(const r of n)t=Math.max(t,Math.abs(r.x),Math.abs(r.y));const i=1e-9*t*t;for(let r=0;r<e;r++){const s=n[r],o=n[(r+1)%e];for(let a=r+1;a<e;a++)if(!(a===r||(a+1)%e===r||(r+1)%e===a)&&Bv(s,o,n[a],n[(a+1)%e],i))return!0}return!1}function Vv(n,e,t){const i=t.x-e.x,r=t.y-e.y,s=n.x-e.x,o=n.y-e.y,a=i*i+r*r,l=a>0?Math.max(0,Math.min(1,(s*i+o*r)/a)):0;return Math.hypot(s-l*i,o-l*r)}function Hv(n,e){let t=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const s=e[i],o=e[r];s.y>n.y!=o.y>n.y&&n.x<(o.x-s.x)*(n.y-s.y)/(o.y-s.y)+s.x&&(t=!t)}return t}function Rc(n,e){let t=1/0;for(let i=0;i<e.length;i++)t=Math.min(t,Vv(n,e[i],e[(i+1)%e.length]));return Hv(n,e)?-t:t}function Tp(n,e=12){const t=n.length;let i=-1/0,r=1/0,s=0,o=0,a=0;for(const f of n)i=Math.max(i,f),r=Math.min(r,f),s+=f,o+=f*f,f>0&&a++;const l=[],c=i-r,u=c>0?c/e:1;for(let f=0;f<e;f++)l.push({lo:r+f*u,hi:r+(f+1)*u,count:0});for(const f of n){const h=c>0?Math.min(e-1,Math.floor((f-r)/u)):0;l[h].count++}return{max:i,min:r,mean:s/t,rms:Math.sqrt(o/t),outside:a,inside:t-a,histogram:l}}function kv(n,e=12){return Tp(n,e).histogram}function ef(n,e=0){let t=3735928559^e,i=1103547991^e;for(let r=0;r<n.length;r++){const s=n.charCodeAt(r);t=Math.imul(t^s,2654435761),i=Math.imul(i^s,1597334677)}return t=Math.imul(t^t>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),(i>>>0).toString(16).padStart(8,"0")+(t>>>0).toString(16).padStart(8,"0")}function Bu(n){const e=n.input,t=`z=${e.z};m=${e.module};alpha=${e.alpha};b=${e.faceWidth};n=${n.outline.length}`,i=[];for(const r of n.outline)i.push(r.x.toFixed(9),r.y.toFixed(9));return`${ef(t)}-${ef(i.join(","),1)}`}function Gv(n){const{unit:e,points:t}=Nv(n.text),i=t.map(l=>({x:Zs(l.x,e),y:Zs(l.y,e)})),r=Fv(i),s=bv(r.normalized);if(s<.3*n.target.dedendumR||s>3*n.target.addendumR)throw new Error(`轮廓尺寸与目标齿轮不符（归一化最大半径 ${s.toFixed(2)} mm，理论齿顶圆半径 ${n.target.addendumR.toFixed(2)} mm）`);const o=r.normalized.map(l=>Rc(l,n.target.outline)),a=n.target.input;return{id:n.id,gear:n.gear,name:n.name,importedAt:Date.now(),sourceUnit:e,rawPoints:t,normalized:r.normalized,bound:{z:a.z,module:a.module,alphaDeg:n.alphaDeg,faceWidth:a.faceWidth},fingerprint:Bu(n.target),adjustments:{reversed:r.reversed,translation:r.translation},deviation:Tp(o),checks:[]}}function Wv(n,e){if(!e)return{status:"stale",reason:"当前齿轮参数无效，无理论模型可比对"};if(Bu(e)===n.fingerprint)return{status:"matched",reason:"指纹与当前理论轮廓一致"};const t=n.bound,i=e.input,r=[];i.z!==t.z&&r.push(`齿数 ${t.z}→${i.z}`),i.module!==t.module&&r.push(`模数 ${t.module}→${i.module}`);const s=t.alphaDeg,o=i.alpha/(Math.PI/180);return Math.abs(o-s)>1e-9&&r.push(`压力角 ${s}°→${o}°`),i.faceWidth!==t.faceWidth&&r.push(`齿宽 ${t.faceWidth}→${i.faceWidth}`),{status:"stale",reason:`基准已变更（${r.join("，")||"理论轮廓指纹不同"}），仅作历史证据，不参与当前计算`}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zu="186",Gi={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xv=0,tf=1,$v=2,ba=1,qv=2,Vs=3,Fr=0,Rn=1,pi=2,Wi=0,Js=1,nf=2,rf=3,sf=4,Yv=5,is=100,Kv=101,Zv=102,Jv=103,jv=104,Qv=200,e0=201,t0=202,n0=203,Ap=204,wp=205,i0=206,r0=207,s0=208,o0=209,a0=210,l0=211,c0=212,u0=213,h0=214,Cc=0,Pc=1,Lc=2,co=3,Dc=4,Ic=5,Uc=6,Nc=7,Rp=0,f0=1,d0=2,xi=0,Cp=1,Pp=2,Lp=3,Dp=4,Ip=5,Up=6,Np=7,Fp=300,Or=301,ps=302,Il=303,Ul=304,sl=306,Fc=1e3,Vi=1001,Oc=1002,on=1003,p0=1004,ko=1005,dn=1006,Nl=1007,Dr=1008,Dn=1009,Op=1010,Bp=1011,uo=1012,Vu=1013,yi=1014,gi=1015,bi=1016,Hu=1017,ku=1018,ho=1020,zp=35902,Vp=35899,Hp=1021,kp=1022,Zn=1023,Ji=1026,Ir=1027,Gp=1028,Gu=1029,Br=1030,Wu=1031,Xu=1033,Ea=33776,Ta=33777,Aa=33778,wa=33779,Bc=35840,zc=35841,Vc=35842,Hc=35843,kc=36196,Gc=37492,Wc=37496,Xc=37488,$c=37489,Fa=37490,qc=37491,Yc=37808,Kc=37809,Zc=37810,Jc=37811,jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,lu=36492,cu=36494,uu=36495,hu=36283,fu=36284,Oa=36285,du=36286,m0=3200,pu=0,g0=1,hr="",zn="srgb",Ba="srgb-linear",za="linear",wt="srgb",Fl=7680,_0=519,v0=512,x0=513,S0=514,$u=515,M0=516,y0=517,qu=518,b0=519,E0=35044,of="300 es",_i=2e3,fo=2001;function T0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function A0(){const n=Va("canvas");return n.style.display="block",n}const af={};function lf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Wp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=Wp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function xt(...n){n=Wp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function us(...n){const e=n.join(" ");e in af||(af[e]=!0,ot(...n))}function w0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const R0={[Cc]:Pc,[Lc]:Uc,[Dc]:Nc,[co]:Ic,[Pc]:Cc,[Uc]:Lc,[Nc]:Dc,[Ic]:co};class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,mu=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function C0(n,e){return(n%e+e)%e}function Ol(n,e,t){return(1-t)*n+t*e}function Cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const P0={DEG2RAD:js};class Le{static{Le.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],d=s[o+1],v=s[o+2],b=s[o+3];if(f!==b||l!==h||c!==d||u!==v){let m=l*h+c*d+u*v+f*b;m<0&&(h=-h,d=-d,v=-v,b=-b,m=-m);let p=1-a;if(m<.9995){const A=Math.acos(m),P=Math.sin(A);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P,l=l*p+h*a,c=c*p+d*a,u=u*p+v*a,f=f*p+b*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+v*a,f=f*p+b*a;const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-a*d,e[t+2]=c*v+u*d+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{static{q.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new q,cf=new mr;class lt{static{lt.prototype.isMatrix3=!0}constructor(e,t,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],v=i[8],b=r[0],m=r[3],p=r[6],A=r[1],P=r[4],y=r[7],w=r[2],R=r[5],N=r[8];return s[0]=o*b+a*A+l*w,s[3]=o*m+a*P+l*R,s[6]=o*p+a*y+l*N,s[1]=c*b+u*A+f*w,s[4]=c*m+u*P+f*R,s[7]=c*p+u*y+f*N,s[2]=h*b+d*A+v*w,s[5]=h*m+d*P+v*R,s[8]=h*p+d*y+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=t*f+i*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(a*i-r*o)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=d*b,e[7]=(i*l-c*t)*b,e[8]=(o*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new lt,uf=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){const n={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?za:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ba]:{primaries:e,whitePoint:i,transfer:za,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),n}const vt=L0();function Xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class D0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Va("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I0=0;class Yu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vl(r[o].image)):s.push(Vl(r[o]))}else s=Vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?D0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let U0=0;const Hl=new q;class Mn extends _r{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,i=Vi,r=Vi,s=dn,o=Dr,a=Zn,l=Dn,c=Mn.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=_s(),this.name="",this.source=new Yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fc:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fc:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Fp;Mn.DEFAULT_ANISOTROPY=1;class Vt{static{Vt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,y=(d+1)/2,w=(p+1)/2,R=(u+h)/4,N=(f+b)/4,M=(v+m)/4;return P>y&&P>w?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=R/i,s=N/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=M/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=N/s,r=M/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-b)/A,this.z=(h-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends _r{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends N0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xp extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F0 extends Mn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ot{static{Ot.prototype.isMatrix4=!0}constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,v,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=v,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,b=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-b*c,t[9]=-a*l,t[2]=b-h*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,b=c*f;t[0]=h+b*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=b+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,b=c*f;t[0]=h-b*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=b-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,b=a*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=b-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-b*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,b=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,B0)}lookAt(e,t,i){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ir.crossVectors(i,Pn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ir.crossVectors(i,Pn)),ir.normalize(),Go.crossVectors(Pn,ir),r[0]=ir.x,r[4]=Go.x,r[8]=Pn.x,r[1]=ir.y,r[5]=Go.y,r[9]=Pn.y,r[2]=ir.z,r[6]=Go.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],v=i[2],b=i[6],m=i[10],p=i[14],A=i[3],P=i[7],y=i[11],w=i[15],R=r[0],N=r[4],M=r[8],D=r[12],B=r[1],$=r[5],se=r[9],re=r[13],V=r[2],Q=r[6],ae=r[10],ee=r[14],pe=r[3],ce=r[7],ve=r[11],ge=r[15];return s[0]=o*R+a*B+l*V+c*pe,s[4]=o*N+a*$+l*Q+c*ce,s[8]=o*M+a*se+l*ae+c*ve,s[12]=o*D+a*re+l*ee+c*ge,s[1]=u*R+f*B+h*V+d*pe,s[5]=u*N+f*$+h*Q+d*ce,s[9]=u*M+f*se+h*ae+d*ve,s[13]=u*D+f*re+h*ee+d*ge,s[2]=v*R+b*B+m*V+p*pe,s[6]=v*N+b*$+m*Q+p*ce,s[10]=v*M+b*se+m*ae+p*ve,s[14]=v*D+b*re+m*ee+p*ge,s[3]=A*R+P*B+y*V+w*pe,s[7]=A*N+P*$+y*Q+w*ce,s[11]=A*M+P*se+y*ae+w*ve,s[15]=A*D+P*re+y*ee+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],b=e[7],m=e[11],p=e[15],A=l*d-c*h,P=a*d-c*f,y=a*h-l*f,w=o*d-c*u,R=o*h-l*u,N=o*f-a*u;return t*(b*A-m*P+p*y)-i*(v*A-m*w+p*R)+r*(v*P-b*w+p*N)-s*(v*y-b*R+m*N)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],b=e[13],m=e[14],p=e[15],A=t*a-i*o,P=t*l-r*o,y=t*c-s*o,w=i*l-r*a,R=i*c-s*a,N=r*c-s*l,M=u*b-f*v,D=u*m-h*v,B=u*p-d*v,$=f*m-h*b,se=f*p-d*b,re=h*p-d*m,V=A*re-P*se+y*$+w*B-R*D+N*M;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/V;return e[0]=(a*re-l*se+c*$)*Q,e[1]=(r*se-i*re-s*$)*Q,e[2]=(b*N-m*R+p*w)*Q,e[3]=(h*R-f*N-d*w)*Q,e[4]=(l*B-o*re-c*D)*Q,e[5]=(t*re-r*B+s*D)*Q,e[6]=(m*y-v*N-p*P)*Q,e[7]=(u*N-h*y+d*P)*Q,e[8]=(o*se-a*B+c*M)*Q,e[9]=(i*B-t*se-s*M)*Q,e[10]=(v*R-b*y+p*A)*Q,e[11]=(f*y-u*R-d*A)*Q,e[12]=(a*D-o*$-l*M)*Q,e[13]=(t*$-i*D+r*M)*Q,e[14]=(b*P-v*w-m*A)*Q,e[15]=(u*w-f*P+h*A)*Q,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,b=o*u,m=o*f,p=a*f,A=l*c,P=l*u,y=l*f,w=i.x,R=i.y,N=i.z;return r[0]=(1-(b+p))*w,r[1]=(d+y)*w,r[2]=(v-P)*w,r[3]=0,r[4]=(d-y)*R,r[5]=(1-(h+p))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(v+P)*N,r[9]=(m-A)*N,r[10]=(1-(h+b))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Wr.set(r[0],r[1],r[2]).length();const a=Wr.set(r[4],r[5],r[6]).length(),l=Wr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),$n.copy(this);const c=1/o,u=1/a,f=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let v,b;if(l)v=s/(o-s),b=o*s/(o-s);else if(a===_i)v=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===fo)v=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let v,b;if(l)v=1/(o-s),b=o/(o-s);else if(a===_i)v=-2/(o-s),b=-(o+s)/(o-s);else if(a===fo)v=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wr=new q,$n=new Ot,O0=new q(0,0,0),B0=new q(1,1,1),ir=new q,Go=new q,Pn=new q,ff=new Ot,df=new mr;class gr{constructor(e=0,t=0,i=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const pf=new q,Xr=new mr,Pi=new Ot,Wo=new q,Ps=new q,V0=new q,H0=new mr,mf=new q(1,0,0),gf=new q(0,1,0),_f=new q(0,0,1),vf={type:"added"},k0={type:"removed"},$r={type:"childadded",child:null},kl={type:"childremoved",child:null};class an extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new q,t=new gr,i=new mr,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new lt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,t){return Xr.setFromAxisAngle(e,t),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(_f,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(_f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ps,Wo,this.up):Pi.lookAt(Wo,Ps,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(Pi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),$r.child=e,this.dispatchEvent($r),$r.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new q(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ss extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=C0(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wl(o,s,e+1/3),this.g=Wl(o,s,e),this.b=Wl(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=zn){function i(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const i=$p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return vt.workingToColorSpace(hn.copy(this),e),Math.round(dt(hn.r*255,0,255))*65536+Math.round(dt(hn.g*255,0,255))*256+Math.round(dt(hn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(hn.copy(this),t);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=zn){vt.workingToColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,r=hn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(Xo);const i=Ol(rr.h,Xo.h,t),r=Ol(rr.s,Xo.s,t),s=Ol(rr.l,Xo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new pt;pt.NAMES=$p;class W0 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qn=new q,Li=new q,Xl=new q,Di=new q,qr=new q,Yr=new q,xf=new q,$l=new q,ql=new q,Yl=new q,Kl=new Vt,Zl=new Vt,Jl=new Vt;class Vn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),Li.subVectors(i,t),Xl.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(Li),l=qn.dot(Xl),c=Li.dot(Li),u=Li.dot(Xl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Kl.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),Kl.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Kl,s.x),o.addScaledVector(Zl,s.y),o.addScaledVector(Jl,s.z),o}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),Li.subVectors(e,t),qn.cross(Li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),qn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Yr.subVectors(s,i),$l.subVectors(e,i);const l=qr.dot($l),c=Yr.dot($l);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,r);const u=qr.dot(ql),f=Yr.dot(ql);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qr,o);Yl.subVectors(e,s);const d=qr.dot(Yl),v=Yr.dot(Yl);if(v>=0&&d<=v)return t.copy(s);const b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Yr,a);const m=u*v-d*f;if(m<=0&&f-u>=0&&d-v>=0)return xf.subVectors(s,r),a=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(xf,a);const p=1/(m+b+h);return o=b*p,a=h*p,t.copy(i).addScaledVector(qr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),qo.subVectors(this.max,Ls),Kr.subVectors(e.a,Ls),Zr.subVectors(e.b,Ls),Jr.subVectors(e.c,Ls),sr.subVectors(Zr,Kr),or.subVectors(Jr,Zr),Er.subVectors(Kr,Jr);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Er.z,Er.y,sr.z,0,-sr.x,or.z,0,-or.x,Er.z,0,-Er.x,-sr.y,sr.x,0,-or.y,or.x,0,-Er.y,Er.x,0];return!jl(t,Kr,Zr,Jr,qo)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Kr,Zr,Jr,qo))?!1:(Yo.crossVectors(sr,or),t=[Yo.x,Yo.y,Yo.z],jl(t,Kr,Zr,Jr,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new q,new q,new q,new q,new q,new q,new q,new q],Yn=new q,$o=new Mo,Kr=new q,Zr=new q,Jr=new q,sr=new q,or=new q,Er=new q,Ls=new q,qo=new q,Yo=new q,Tr=new q;function jl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xt=new q,Ko=new Le;let X0=0;class ei extends _r{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=E0,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class qp extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yp extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}const $0=new Mo,Ds=new q,Ql=new q;class ol{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Ql)),this.expandByPoint(Ds.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q0=0;const On=new Ot,ec=new an,jr=new q,Ln=new Mo,Is=new Mo,Qt=new q;class ln extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T0(e)?Yp:qp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Ln.min,Is.min),Ln.expandByPoint(Qt),Qt.addVectors(Ln.max,Is.max),Ln.expandByPoint(Qt)):(Ln.expandByPoint(Is.min),Ln.expandByPoint(Is.max))}Ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Qt.add(jr)),r=Math.max(r,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new q,l[M]=new q;const c=new q,u=new q,f=new q,h=new Le,d=new Le,v=new Le,b=new q,m=new q;function p(M,D,B){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,B),h.fromBufferAttribute(s,M),d.fromBufferAttribute(s,D),v.fromBufferAttribute(s,B),u.sub(c),f.sub(c),d.sub(h),v.sub(h);const $=1/(d.x*v.y-v.x*d.y);isFinite($)&&(b.copy(u).multiplyScalar(v.y).addScaledVector(f,-d.y).multiplyScalar($),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar($),a[M].add(b),a[D].add(b),a[B].add(b),l[M].add(m),l[D].add(m),l[B].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let M=0,D=A.length;M<D;++M){const B=A[M],$=B.start,se=B.count;for(let re=$,V=$+se;re<V;re+=3)p(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const P=new q,y=new q,w=new q,R=new q;function N(M){w.fromBufferAttribute(r,M),R.copy(w);const D=a[M];P.copy(D),P.sub(w.multiplyScalar(w.dot(D))).normalize(),y.crossVectors(R,D);const $=y.dot(l[M])<0?-1:1;o.setXYZW(M,P.x,P.y,P.z,$)}for(let M=0,D=A.length;M<D;++M){const B=A[M],$=B.start,se=B.count;for(let re=$,V=$+se;re<V;re+=3)N(e.getX(re+0)),N(e.getX(re+1)),N(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let p=0;p<u;p++)h[v++]=c[d++]}return new ei(h,u,f)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new q,Y0=new q,K0=new lt;class Oi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tc.subVectors(i,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(tc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K0.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Z0=0;class vs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Js,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=wp,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fl,this.stencilZFail=Fl,this.stencilZPass=Fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ui=new q,nc=new q,Zo=new q,Jo=new q;class al{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nc.copy(e).add(t).multiplyScalar(.5),Zo.copy(t).sub(e).normalize(),Jo.copy(this.origin).sub(nc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zo),a=Jo.dot(this.direction),l=-Jo.dot(Zo),c=Jo.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const b=1/u;f*=b,h*=b,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nc).addScaledVector(Zo,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,v=t.x-o.x,b=t.y-o.y,m=t.z-o.z,p=i.x-o.x,A=i.y-o.y,P=i.z-o.z,y=Math.abs(l),w=Math.abs(c),R=Math.abs(u);let N,M,D,B,$,se,re,V,Q,ae,ee,pe;if(y>=w&&y>=R?(D=l,se=f,Q=v,pe=p,l>=0?(N=c,M=u,B=h,$=d,re=b,V=m,ae=A,ee=P):(N=u,M=c,B=d,$=h,re=m,V=b,ae=P,ee=A)):w>=R?(D=c,se=h,Q=b,pe=A,c>=0?(N=u,M=l,B=d,$=f,re=m,V=v,ae=P,ee=p):(N=l,M=u,B=f,$=d,re=v,V=m,ae=p,ee=P)):(D=u,se=d,Q=m,pe=P,u>=0?(N=l,M=c,B=f,$=h,re=v,V=b,ae=p,ee=A):(N=c,M=l,B=h,$=f,re=b,V=v,ae=A,ee=p)),D===0)return null;const ce=N/D,ve=M/D,ge=1/D,Pe=B-ce*se,Be=$-ve*se,rt=re-ce*Q,nt=V-ve*Q,it=ae-ce*pe,de=ee-ve*pe,ue=it*nt-de*rt,Te=Pe*de-Be*it,ke=rt*Be-nt*Pe;if(r){if(ue<0||Te<0||ke<0)return null}else if((ue<0||Te<0||ke<0)&&(ue>0||Te>0||ke>0))return null;const De=ue+Te+ke;if(De===0)return null;const C=ge*(ue*se+Te*Q+ke*pe);return(De>0?C<0:C>0)?null:this.at(C/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qs extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sf=new Ot,Ar=new al,jo=new ol,Mf=new q,Qo=new q,ea=new q,ta=new q,ic=new q,na=new q,yf=new q,ia=new q;class Un extends an{constructor(e=new ln,t=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ic.fromBufferAttribute(f,e),o?na.addScaledVector(ic,u):na.addScaledVector(ic.sub(t),u))}t.add(na)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(jo.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(jo,Mf)===null||Ar.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(Sf.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Sf),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],A=Math.max(m.start,d.start),P=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,w=P;y<w;y+=3){const R=a.getX(y),N=a.getX(y+1),M=a.getX(y+2);r=ra(this,p,e,i,c,u,f,R,N,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=v,p=b;m<p;m+=3){const A=a.getX(m),P=a.getX(m+1),y=a.getX(m+2);r=ra(this,o,e,i,c,u,f,A,P,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,b=h.length;v<b;v++){const m=h[v],p=o[m.materialIndex],A=Math.max(m.start,d.start),P=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,w=P;y<w;y+=3){const R=y,N=y+1,M=y+2;r=ra(this,p,e,i,c,u,f,R,N,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=v,p=b;m<p;m+=3){const A=m,P=m+1,y=m+2;r=ra(this,o,e,i,c,u,f,A,P,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function J0(n,e,t,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fr,a),l===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:n}}function ra(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Qo),n.getVertexPosition(l,ea),n.getVertexPosition(c,ta);const u=J0(n,e,t,i,Qo,ea,ta,yf);if(u){const f=new q;Vn.getBarycoord(yf,Qo,ea,ta,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new Le)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new Le)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new q,materialIndex:0};Vn.getNormal(Qo,ea,ta,h.normal),u.face=h,u.barycoord=f}return u}class j0 extends Mn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=on,u=on,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wr=new ol,Q0=new Le(.5,.5),sa=new q;class Zu{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],v=s[8],b=s[9],m=s[10],p=s[11],A=s[12],P=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,d-u,p-v,w-A).normalize(),r[1].setComponents(c+o,d+u,p+v,w+A).normalize(),r[2].setComponents(c+a,d+f,p+b,w+P).normalize(),r[3].setComponents(c-a,d-f,p-b,w-P).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,d-h,p-m,w-y).normalize();else if(r[4].setComponents(c-l,d-h,p-m,w-y).normalize(),t===_i)r[5].setComponents(c+l,d+h,p+m,w+y).normalize();else if(t===fo)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const t=Q0.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(sa.x=r.normal.x>0?e.max.x:e.min.x,sa.y=r.normal.y>0?e.max.y:e.min.y,sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hs extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new q,ka=new q,bf=new Ot,Us=new al,oa=new ol,rc=new q,Ef=new q;class Ju extends an{constructor(e=new ln,t=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ha.fromBufferAttribute(t,r-1),ka.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ha.distanceTo(ka);e.setAttribute("lineDistance",new $t(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;bf.copy(r).invert(),Us.copy(e.ray).applyMatrix4(bf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let b=d,m=v-1;b<m;b+=c){const p=u.getX(b),A=u.getX(b+1),P=aa(this,e,Us,l,p,A,b);P&&t.push(P)}if(this.isLineLoop){const b=u.getX(v-1),m=u.getX(d),p=aa(this,e,Us,l,b,m,v-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let b=d,m=v-1;b<m;b+=c){const p=aa(this,e,Us,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=aa(this,e,Us,l,v-1,d,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ha.fromBufferAttribute(a,r),ka.fromBufferAttribute(a,s),t.distanceSqToSegment(Ha,ka,rc,Ef)>i)return;rc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(rc);if(!(c<e.near||c>e.far))return{distance:c,point:Ef.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Tf=new q,Af=new q;class ex extends Ju{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Tf.fromBufferAttribute(t,r),Af.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tf.distanceTo(Af);e.setAttribute("lineDistance",new $t(i,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wf extends Ju{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Kp extends Mn{constructor(e=[],t=Or,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class po extends Mn{constructor(e,t,i=yi,r,s,o,a=on,l=on,c,u=Ji,f=1){if(u!==Ji&&u!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class tx extends po{constructor(e,t=yi,i=Or,r,s,o=on,a=on,l,c=Ji){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zp extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yo extends ln{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function v(b,m,p,A,P,y,w,R,N,M,D){const B=y/N,$=w/M,se=y/2,re=w/2,V=R/2,Q=N+1,ae=M+1;let ee=0,pe=0;const ce=new q;for(let ve=0;ve<ae;ve++){const ge=ve*$-re;for(let Pe=0;Pe<Q;Pe++){const Be=Pe*B-se;ce[b]=Be*A,ce[m]=ge*P,ce[p]=V,c.push(ce.x,ce.y,ce.z),ce[b]=0,ce[m]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Pe/N),f.push(1-ve/M),ee+=1}}for(let ve=0;ve<M;ve++)for(let ge=0;ge<N;ge++){const Pe=h+ge+Q*ve,Be=h+ge+Q*(ve+1),rt=h+(ge+1)+Q*(ve+1),nt=h+(ge+1)+Q*ve;l.push(Pe,Be,nt),l.push(Be,rt,nt),pe+=6}a.addGroup(d,pe,D),d+=pe,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const la=new q,ca=new q,sc=new q,ua=new Vn;class nx extends ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(js*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:b,b:m,c:p}=ua;if(b.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ua.getNormal(sc),f[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const P=(A+1)%3,y=f[A],w=f[P],R=ua[u[A]],N=ua[u[P]],M=`${y}_${w}`,D=`${w}_${y}`;D in h&&h[D]?(sc.dot(h[D].normal)<=s&&(d.push(R.x,R.y,R.z),d.push(N.x,N.y,N.z)),h[D]=null):M in h||(h[M]={index0:c[A],index1:c[P],normal:sc.clone()})}}for(const v in h)if(h[v]){const{index0:b,index1:m}=h[v];la.fromBufferAttribute(a,b),ca.fromBufferAttribute(a,m),d.push(la.x,la.y,la.z),d.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new $t(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Le:new q);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new q,r=[],s=[],o=[],a=new q,l=new Ot;for(let d=0;d<=e;d++){const v=d/e;r[d]=this.getTangentAt(v,new q)}s[0]=new q,o[0]=new q;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(dt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,v))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(dt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],d*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ju extends Ti{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Le){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ix extends ju{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Rf=new q,Cf=new q,oc=new Qu,ac=new Qu,lc=new Qu;class rx extends Ti{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new q){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Cf.subVectors(r[0],r[1]).add(r[0]),c=Cf);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Rf.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Rf),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),d),b=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);b<1e-4&&(b=1),v<1e-4&&(v=b),m<1e-4&&(m=b),oc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,v,b,m),ac.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,v,b,m),lc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,v,b,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ac.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),lc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(oc.calc(l),ac.calc(l),lc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new q().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function sx(n,e){const t=1-n;return t*t*e}function ox(n,e){return 2*(1-n)*n*e}function ax(n,e){return n*n*e}function eo(n,e,t,i){return sx(n,e)+ox(n,t)+ax(n,i)}function lx(n,e){const t=1-n;return t*t*t*e}function cx(n,e){const t=1-n;return 3*t*t*n*e}function ux(n,e){return 3*(1-n)*n*n*e}function hx(n,e){return n*n*n*e}function to(n,e,t,i,r){return lx(n,e)+cx(n,t)+ux(n,i)+hx(n,r)}class Jp extends Ti{constructor(e=new Le,t=new Le,i=new Le,r=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Le){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(to(e,r.x,s.x,o.x,a.x),to(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fx extends Ti{constructor(e=new q,t=new q,i=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(to(e,r.x,s.x,o.x,a.x),to(e,r.y,s.y,o.y,a.y),to(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jp extends Ti{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dx extends Ti{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qp extends Ti{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(eo(e,r.x,s.x,o.x),eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class px extends Ti{constructor(e=new q,t=new q,i=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new q){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(eo(e,r.x,s.x,o.x),eo(e,r.y,s.y,o.y),eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class em extends Ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Pf(a,l.x,c.x,u.x,f.x),Pf(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Le().fromArray(r))}return this}}var gu=Object.freeze({__proto__:null,ArcCurve:ix,CatmullRomCurve3:rx,CubicBezierCurve:Jp,CubicBezierCurve3:fx,EllipseCurve:ju,LineCurve:jp,LineCurve3:dx,QuadraticBezierCurve:Qp,QuadraticBezierCurve3:px,SplineCurve:em});class mx extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new gu[r.type]().fromJSON(r))}return this}}class Lf extends mx{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new jp(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Qp(this.currentPoint.clone(),new Le(e,t),new Le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Jp(this.currentPoint.clone(),new Le(e,t),new Le(i,r),new Le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new em(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ju(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ga extends Lf{constructor(e){super(e),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Lf().fromJSON(r))}return this}}function gx(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=tm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Mx(n,e,s,t)),n.length>80*t){a=n[0],l=n[1];let u=a,f=l;for(let h=t;h<r;h+=t){const d=n[h],v=n[h+1];d<a&&(a=d),v<l&&(l=v),d>u&&(u=d),v>f&&(f=v)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return mo(s,o,t,a,l,c,0),o}function tm(n,e,t,i,r){let s;if(r===Dx(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Df(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Df(o/i|0,n[o],n[o+1],s);return s&&ms(s,s.next)&&(_o(s),s=s.next),s}function zr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ms(t,t.next)||Ht(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function mo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Ax(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?vx(n,i,r,s):_x(n)){e.push(l.i,n.i,c.i),_o(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=xx(zr(n),e),mo(n,e,t,i,r,s,2)):o===2&&Sx(n,e,t,i,r,s):mo(zr(n),e,t,i,r,s,1);break}}}function _x(n){const e=n.prev,t=n,i=n.next;if(Ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c);let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=h&&v.y>=f&&v.y<=d&&ks(r,a,s,l,o,c,v.x,v.y)&&Ht(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function vx(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ht(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=Math.min(a,l,c),v=Math.min(u,f,h),b=Math.max(a,l,c),m=Math.max(u,f,h),p=_u(d,v,e,t,i),A=_u(b,m,e,t,i);let P=n.prevZ,y=n.nextZ;for(;P&&P.z>=p&&y&&y.z<=A;){if(P.x>=d&&P.x<=b&&P.y>=v&&P.y<=m&&P!==r&&P!==o&&ks(a,u,l,f,c,h,P.x,P.y)&&Ht(P.prev,P,P.next)>=0||(P=P.prevZ,y.x>=d&&y.x<=b&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&ks(a,u,l,f,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;P&&P.z>=p;){if(P.x>=d&&P.x<=b&&P.y>=v&&P.y<=m&&P!==r&&P!==o&&ks(a,u,l,f,c,h,P.x,P.y)&&Ht(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;y&&y.z<=A;){if(y.x>=d&&y.x<=b&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&ks(a,u,l,f,c,h,y.x,y.y)&&Ht(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function xx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ms(i,r)&&im(i,t,t.next,r)&&go(i,r)&&go(r,i)&&(e.push(i.i,t.i,r.i),_o(t),_o(t.next),t=n=r),t=t.next}while(t!==n);return zr(t)}function Sx(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cx(o,a)){let l=rm(o,a);o=zr(o,o.next),l=zr(l,l.next),mo(o,e,t,i,r,s,0),mo(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Mx(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=tm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Rx(c))}r.sort(yx);for(let s=0;s<r.length;s++)t=bx(r[s],t);return t}function yx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function bx(n,e){const t=Ex(n,e);if(!t)return e;const i=rm(t,n);return zr(i,i.next),zr(t,t.next)}function Ex(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ms(n,t))return t;do{if(ms(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&nm(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);go(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Tx(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function Tx(n,e){return Ht(n.prev,n,e.prev)<0&&Ht(e.next,n,n.next)<0}function Ax(n,e,t,i){let r=n;do r.z===0&&(r.z=_u(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,wx(r)}function wx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function _u(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function nm(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ks(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&nm(n,e,t,i,r,s,o,a)}function Cx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Px(n,e)&&(go(n,e)&&go(e,n)&&Lx(n,e)&&(Ht(n.prev,n,e.prev)||Ht(n,e.prev,e))||ms(n,e)&&Ht(n.prev,n,n.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ms(n,e){return n.x===e.x&&n.y===e.y}function im(n,e,t,i){const r=fa(Ht(n,e,t)),s=fa(Ht(n,e,i)),o=fa(Ht(t,i,n)),a=fa(Ht(t,i,e));return!!(r!==s&&o!==a||r===0&&ha(n,t,e)||s===0&&ha(n,i,e)||o===0&&ha(t,n,i)||a===0&&ha(t,e,i))}function ha(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function fa(n){return n>0?1:n<0?-1:0}function Px(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&im(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function go(n,e){return Ht(n.prev,n,n.next)<0?Ht(n,e,n.next)>=0&&Ht(n,n.prev,e)>=0:Ht(n,e,n.prev)<0||Ht(n,n.next,e)<0}function Lx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rm(n,e){const t=vu(n.i,n.x,n.y),i=vu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Df(n,e,t,i){const r=vu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function _o(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dx(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ix{static triangulate(e,t,i=2){return gx(e,t,i)}}class Hi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];If(e),Uf(i,e);let o=e.length;t.forEach(If);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Uf(i,t[l]);const a=Ix.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function If(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class eh extends ln{constructor(e=new Ga([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new $t(r,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Ux;let P,y=!1,w,R,N,M;if(p){P=p.getSpacedPoints(u),y=!0,h=!1;const U=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,U),R=new q,N=new q,M=new q}h||(m=0,d=0,v=0,b=0);const D=a.extractPoints(c);let B=D.shape;const $=D.holes;if(!Hi.isClockWise(B)){B=B.reverse();for(let U=0,k=$.length;U<k;U++){const W=$[U];Hi.isClockWise(W)&&($[U]=W.reverse())}}function re(U){const W=10000000000000001e-36;let H=U[0];for(let G=1;G<=U.length;G++){const fe=G%U.length,j=U[fe],ne=j.x-H.x,K=j.y-H.y,_=ne*ne+K*K,O=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(H.x),Math.abs(H.y)),me=W*O*O;if(_<=me){U.splice(fe,1),G--;continue}H=j}}re(B),$.forEach(re);const V=$.length,Q=B;for(let U=0;U<V;U++){const k=$[U];B=B.concat(k)}function ae(U,k,W){return k||xt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(k,W)}const ee=B.length;function pe(U,k,W){let H,G,fe;const j=U.x-k.x,ne=U.y-k.y,K=W.x-U.x,_=W.y-U.y,O=j*j+ne*ne,me=j*_-ne*K;if(Math.abs(me)>Number.EPSILON){const T=Math.sqrt(O),g=Math.sqrt(K*K+_*_),I=k.x-ne/T,Z=k.y+j/T,te=W.x-_/g,Ae=W.y+K/g,Re=((te-I)*_-(Ae-Z)*K)/(j*_-ne*K);H=I+j*Re-U.x,G=Z+ne*Re-U.y;const _e=H*H+G*G;if(_e<=2)return new Le(H,G);fe=Math.sqrt(_e/2)}else{let T=!1;j>Number.EPSILON?K>Number.EPSILON&&(T=!0):j<-Number.EPSILON?K<-Number.EPSILON&&(T=!0):Math.sign(ne)===Math.sign(_)&&(T=!0),T?(H=-ne,G=j,fe=Math.sqrt(O)):(H=j,G=ne,fe=Math.sqrt(O/2))}return new Le(H/fe,G/fe)}const ce=[];for(let U=0,k=Q.length,W=k-1,H=U+1;U<k;U++,W++,H++)W===k&&(W=0),H===k&&(H=0),ce[U]=pe(Q[U],Q[W],Q[H]);const ve=[];let ge,Pe=ce.concat();for(let U=0,k=V;U<k;U++){const W=$[U];ge=[];for(let H=0,G=W.length,fe=G-1,j=H+1;H<G;H++,fe++,j++)fe===G&&(fe=0),j===G&&(j=0),ge[H]=pe(W[H],W[fe],W[j]);ve.push(ge),Pe=Pe.concat(ge)}let Be;if(m===0)Be=Hi.triangulateShape(Q,$);else{const U=[],k=[];for(let W=0;W<m;W++){const H=W/m,G=d*Math.cos(H*Math.PI/2),fe=v*Math.sin(H*Math.PI/2)+b;for(let j=0,ne=Q.length;j<ne;j++){const K=ae(Q[j],ce[j],fe);Te(K.x,K.y,-G),H===0&&U.push(K)}for(let j=0,ne=V;j<ne;j++){const K=$[j];ge=ve[j];const _=[];for(let O=0,me=K.length;O<me;O++){const T=ae(K[O],ge[O],fe);Te(T.x,T.y,-G),H===0&&_.push(T)}H===0&&k.push(_)}}Be=Hi.triangulateShape(U,k)}const rt=Be.length,nt=v+b;for(let U=0;U<ee;U++){const k=h?ae(B[U],Pe[U],nt):B[U];y?(N.copy(w.normals[0]).multiplyScalar(k.x),R.copy(w.binormals[0]).multiplyScalar(k.y),M.copy(P[0]).add(N).add(R),Te(M.x,M.y,M.z)):Te(k.x,k.y,0)}for(let U=1;U<=u;U++)for(let k=0;k<ee;k++){const W=h?ae(B[k],Pe[k],nt):B[k];y?(N.copy(w.normals[U]).multiplyScalar(W.x),R.copy(w.binormals[U]).multiplyScalar(W.y),M.copy(P[U]).add(N).add(R),Te(M.x,M.y,M.z)):Te(W.x,W.y,f/u*U)}for(let U=m-1;U>=0;U--){const k=U/m,W=d*Math.cos(k*Math.PI/2),H=v*Math.sin(k*Math.PI/2)+b;for(let G=0,fe=Q.length;G<fe;G++){const j=ae(Q[G],ce[G],H);Te(j.x,j.y,f+W)}for(let G=0,fe=$.length;G<fe;G++){const j=$[G];ge=ve[G];for(let ne=0,K=j.length;ne<K;ne++){const _=ae(j[ne],ge[ne],H);y?Te(_.x,_.y+P[u-1].y,P[u-1].x+W):Te(_.x,_.y,f+W)}}}it(),de();function it(){const U=r.length/3;if(h){let k=0,W=ee*k;for(let H=0;H<rt;H++){const G=Be[H];ke(G[2]+W,G[1]+W,G[0]+W)}k=u+m*2,W=ee*k;for(let H=0;H<rt;H++){const G=Be[H];ke(G[0]+W,G[1]+W,G[2]+W)}}else{for(let k=0;k<rt;k++){const W=Be[k];ke(W[2],W[1],W[0])}for(let k=0;k<rt;k++){const W=Be[k];ke(W[0]+ee*u,W[1]+ee*u,W[2]+ee*u)}}i.addGroup(U,r.length/3-U,0)}function de(){const U=r.length/3;let k=0;ue(Q,k),k+=Q.length;for(let W=0,H=$.length;W<H;W++){const G=$[W];ue(G,k),k+=G.length}i.addGroup(U,r.length/3-U,1)}function ue(U,k){let W=U.length;for(;--W>=0;){const H=W;let G=W-1;G<0&&(G=U.length-1);for(let fe=0,j=u+m*2;fe<j;fe++){const ne=ee*fe,K=ee*(fe+1),_=k+H+ne,O=k+G+ne,me=k+G+K,T=k+H+K;De(_,O,me,T)}}}function Te(U,k,W){l.push(U),l.push(k),l.push(W)}function ke(U,k,W){C(U),C(k),C(W);const H=r.length/3,G=A.generateTopUV(i,r,H-3,H-2,H-1);F(G[0]),F(G[1]),F(G[2])}function De(U,k,W,H){C(U),C(k),C(H),C(k),C(W),C(H);const G=r.length/3,fe=A.generateSideWallUV(i,r,G-6,G-3,G-2,G-1);F(fe[0]),F(fe[1]),F(fe[3]),F(fe[1]),F(fe[2]),F(fe[3])}function C(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function F(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Nx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gu[r.type]().fromJSON(r)),new eh(i,e.options)}}const Ux={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Le(s,o),new Le(a,l),new Le(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],v=e[r*3+2],b=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Le(o,1-l),new Le(c,1-f),new Le(h,1-v),new Le(b,1-p)]:[new Le(a,1-l),new Le(u,1-f),new Le(d,1-v),new Le(m,1-p)]}};function Nx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ll extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],v=[],b=[],m=[];for(let p=0;p<u;p++){const A=p*h-o;for(let P=0;P<c;P++){const y=P*f-s;v.push(y,-A,0),b.push(0,0,1),m.push(P/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const P=A+c*p,y=A+c*(p+1),w=A+1+c*(p+1),R=A+1+c*p;d.push(P,y,R),d.push(y,w,R)}this.setIndex(d),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}class th extends ln{constructor(e=new Ga([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const v=h.holes;Hi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const A=v[m];Hi.isClockWise(A)===!0&&(v[m]=A.reverse())}const b=Hi.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const A=v[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){const A=d[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,p=b.length;m<p;m++){const A=b[m],P=A[0]+f,y=A[1]+f,w=A[2]+f;i.push(P,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Fx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new th(i,e.curveSegments)}}function Fx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Wa extends ln{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,h=new q,d=[],v=[],b=[],m=[];for(let p=0;p<=i;p++){const A=[],P=p/i,y=o+P*a,w=e*Math.cos(y),R=Math.sqrt(e*e-w*w);let N=0;p===0&&o===0?N=.5/t:p===i&&l===Math.PI&&(N=-.5/t);for(let M=0;M<=t;M++){const D=M/t,B=r+D*s;f.x=-R*Math.cos(B),f.y=w,f.z=R*Math.sin(B),v.push(f.x,f.y,f.z),h.copy(f).normalize(),b.push(h.x,h.y,h.z),m.push(D+N,1-P),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const P=u[p][A+1],y=u[p][A],w=u[p+1][A],R=u[p+1][A+1];(p!==0||o>0)&&d.push(P,y,R),(p!==i-1||l<Math.PI)&&d.push(y,w,R)}this.setIndex(d),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(b,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Nf(r))r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Nf(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=gs(n[t]);for(const r in i)e[r]=i[r]}return e}function Nf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ox(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Bx={clone:gs,merge:vn};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new pt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Le().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Hx extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kx extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gx extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wx extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class om extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const cc=new Ot,Ff=new q,Of=new q;class Xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zu,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===fo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const da=new q,pa=new mr,oi=new q;class am extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,pa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(da,pa,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new q,Bf=new Le,zf=new Le;class Kn extends am{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,zf),t.subVectors(zf,Bf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class cl extends am{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $x extends Xx{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qx extends om{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new $x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yx extends om{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qr=-90,es=1;class Kx extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(Qr,es,e,t);r.layers=this.layers,this.add(r);const s=new Kn(Qr,es,e,t);s.layers=this.layers,this.add(s);const o=new Kn(Qr,es,e,t);o.layers=this.layers,this.add(o);const a=new Kn(Qr,es,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Qr,es,e,t);l.layers=this.layers,this.add(l);const c=new Kn(Qr,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Zx extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vf=new Ot;class Jx{constructor(e,t,i=0,r=1/0){this.ray=new al(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):xt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(e,t=!0,i=[]){return xu(e,this,i,t),i.sort(Hf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)xu(e[r],this,i,t);return i.sort(Hf),i}}function Hf(n,e){return n.distance-e.distance}function xu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)xu(s[o],e,t,!0)}}class kf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lm{static{lm.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class jx extends _r{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gf(n,e,t,i){const r=Qx(i);switch(t){case Hp:return n*e;case Gp:return n*e/r.components*r.byteLength;case Gu:return n*e/r.components*r.byteLength;case Br:return n*e*2/r.components*r.byteLength;case Wu:return n*e*2/r.components*r.byteLength;case kp:return n*e*3/r.components*r.byteLength;case Zn:return n*e*4/r.components*r.byteLength;case Xu:return n*e*4/r.components*r.byteLength;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:case Hc:return Math.max(n,16)*Math.max(e,8)/4;case Bc:case Vc:return Math.max(n,8)*Math.max(e,8)/2;case kc:case Gc:case Xc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Fa:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hu:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case du:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qx(n){switch(n){case Dn:case Op:return{byteLength:1,components:1};case uo:case Bp:case bi:return{byteLength:2,components:1};case Hu:case ku:return{byteLength:2,components:4};case yi:case Vu:case gi:return{byteLength:4,components:1};case zp:case Vp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zu}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cm(){let n=null,e=!1,t=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function eS(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<f.length;d++){const v=f[h],b=f[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++h,f[h]=b)}f.length=h+1;for(let d=0,v=f.length;d<v;d++){const b=f[d];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var tS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,US=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,YS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_M=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,EM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,by=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ay=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:tS,alphahash_pars_fragment:nS,alphamap_fragment:iS,alphamap_pars_fragment:rS,alphatest_fragment:sS,alphatest_pars_fragment:oS,aomap_fragment:aS,aomap_pars_fragment:lS,batching_pars_vertex:cS,batching_vertex:uS,begin_vertex:hS,beginnormal_vertex:fS,bsdfs:dS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:vS,clipping_planes_vertex:xS,color_fragment:SS,color_pars_fragment:MS,color_pars_vertex:yS,color_vertex:bS,common:ES,cube_uv_reflection_fragment:TS,defaultnormal_vertex:AS,displacementmap_pars_vertex:wS,displacementmap_vertex:RS,emissivemap_fragment:CS,emissivemap_pars_fragment:PS,colorspace_fragment:LS,colorspace_pars_fragment:DS,envmap_fragment:IS,envmap_common_pars_fragment:US,envmap_pars_fragment:NS,envmap_pars_vertex:FS,envmap_physical_pars_fragment:qS,envmap_vertex:OS,fog_vertex:BS,fog_pars_vertex:zS,fog_fragment:VS,fog_pars_fragment:HS,gradientmap_pars_fragment:kS,lightmap_pars_fragment:GS,lights_lambert_fragment:WS,lights_lambert_pars_fragment:XS,lights_pars_begin:$S,lights_toon_fragment:YS,lights_toon_pars_fragment:KS,lights_phong_fragment:ZS,lights_phong_pars_fragment:JS,lights_physical_fragment:jS,lights_physical_pars_fragment:QS,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,lightprobes_pars_fragment:iM,logdepthbuf_fragment:rM,logdepthbuf_pars_fragment:sM,logdepthbuf_pars_vertex:oM,logdepthbuf_vertex:aM,map_fragment:lM,map_pars_fragment:cM,map_particle_fragment:uM,map_particle_pars_fragment:hM,metalnessmap_fragment:fM,metalnessmap_pars_fragment:dM,morphinstance_vertex:pM,morphcolor_vertex:mM,morphnormal_vertex:gM,morphtarget_pars_vertex:_M,morphtarget_vertex:vM,normal_fragment_begin:xM,normal_fragment_maps:SM,normal_pars_fragment:MM,normal_pars_vertex:yM,normal_vertex:bM,normalmap_pars_fragment:EM,clearcoat_normal_fragment_begin:TM,clearcoat_normal_fragment_maps:AM,clearcoat_pars_fragment:wM,iridescence_pars_fragment:RM,opaque_fragment:CM,packing:PM,premultiplied_alpha_fragment:LM,project_vertex:DM,dithering_fragment:IM,dithering_pars_fragment:UM,roughnessmap_fragment:NM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:BM,shadowmap_vertex:zM,shadowmask_pars_fragment:VM,skinbase_vertex:HM,skinning_pars_vertex:kM,skinning_vertex:GM,skinnormal_vertex:WM,specularmap_fragment:XM,specularmap_pars_fragment:$M,tonemapping_fragment:qM,tonemapping_pars_fragment:YM,transmission_fragment:KM,transmission_pars_fragment:ZM,uv_pars_fragment:JM,uv_pars_vertex:jM,uv_vertex:QM,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:sy,cube_frag:oy,depth_vert:ay,depth_frag:ly,distance_vert:cy,distance_frag:uy,equirect_vert:hy,equirect_frag:fy,linedashed_vert:dy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:_y,meshlambert_frag:vy,meshmatcap_vert:xy,meshmatcap_frag:Sy,meshnormal_vert:My,meshnormal_frag:yy,meshphong_vert:by,meshphong_frag:Ey,meshphysical_vert:Ty,meshphysical_frag:Ay,meshtoon_vert:wy,meshtoon_frag:Ry,points_vert:Cy,points_frag:Py,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Iy,sprite_frag:Uy},He={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},fi={basic:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:vn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:vn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:vn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new pt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:vn([He.points,He.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:vn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:vn([He.common,He.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:vn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:vn([He.sprite,He.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:vn([He.common,He.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:vn([He.lights,He.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};fi.physical={uniforms:vn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ma={r:0,b:0,g:0},Ny=new Ot,um=new lt;um.set(-1,0,0,0,1,0,0,0,1);function Fy(n,e,t,i,r,s){const o=new pt(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const y=A.backgroundBlurriness>0;P=e.get(P,y)}return P}function v(A){let P=!1;const y=d(A);y===null?m(o,a):y&&y.isColor&&(m(y,1),P=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(A,P){const y=d(P);y&&(y.isCubeTexture||y.mapping===sl)?(c===void 0&&(c=new Un(new yo(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:gs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(P.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(um),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==wt,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Un(new ll(2,2),new Ei({name:"BackgroundMaterial",uniforms:gs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=vt.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,P){A.getRGB(ma,sm(n)),t.buffers.color.setClear(ma.r,ma.g,ma.b,P,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,P=1){o.set(A),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,m(o,a)},render:v,addToRenderList:b,dispose:p}}function Oy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a($,se,re,V,Q){let ae=!1;const ee=f($,V,re,se);s!==ee&&(s=ee,c(s.object)),ae=d($,V,re,Q),ae&&v($,V,re,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,y($,se,re,V),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c($){return n.bindVertexArray($)}function u($){return n.deleteVertexArray($)}function f($,se,re,V){const Q=V.wireframe===!0;let ae=i[se.id];ae===void 0&&(ae={},i[se.id]=ae);const ee=$.isInstancedMesh===!0?$.id:0;let pe=ae[ee];pe===void 0&&(pe={},ae[ee]=pe);let ce=pe[re.id];ce===void 0&&(ce={},pe[re.id]=ce);let ve=ce[Q];return ve===void 0&&(ve=h(l()),ce[Q]=ve),ve}function h($){const se=[],re=[],V=[];for(let Q=0;Q<t;Q++)se[Q]=0,re[Q]=0,V[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:se,enabledAttributes:re,attributeDivisors:V,object:$,attributes:{},index:null}}function d($,se,re,V){const Q=s.attributes,ae=se.attributes;let ee=0;const pe=re.getAttributes();for(const ce in pe)if(pe[ce].location>=0){const ge=Q[ce];let Pe=ae[ce];if(Pe===void 0&&(ce==="instanceMatrix"&&$.instanceMatrix&&(Pe=$.instanceMatrix),ce==="instanceColor"&&$.instanceColor&&(Pe=$.instanceColor)),ge===void 0||ge.attribute!==Pe||Pe&&ge.data!==Pe.data)return!0;ee++}return s.attributesNum!==ee||s.index!==V}function v($,se,re,V){const Q={},ae=se.attributes;let ee=0;const pe=re.getAttributes();for(const ce in pe)if(pe[ce].location>=0){let ge=ae[ce];ge===void 0&&(ce==="instanceMatrix"&&$.instanceMatrix&&(ge=$.instanceMatrix),ce==="instanceColor"&&$.instanceColor&&(ge=$.instanceColor));const Pe={};Pe.attribute=ge,ge&&ge.data&&(Pe.data=ge.data),Q[ce]=Pe,ee++}s.attributes=Q,s.attributesNum=ee,s.index=V}function b(){const $=s.newAttributes;for(let se=0,re=$.length;se<re;se++)$[se]=0}function m($){p($,0)}function p($,se){const re=s.newAttributes,V=s.enabledAttributes,Q=s.attributeDivisors;re[$]=1,V[$]===0&&(n.enableVertexAttribArray($),V[$]=1),Q[$]!==se&&(n.vertexAttribDivisor($,se),Q[$]=se)}function A(){const $=s.newAttributes,se=s.enabledAttributes;for(let re=0,V=se.length;re<V;re++)se[re]!==$[re]&&(n.disableVertexAttribArray(re),se[re]=0)}function P($,se,re,V,Q,ae,ee){ee===!0?n.vertexAttribIPointer($,se,re,Q,ae):n.vertexAttribPointer($,se,re,V,Q,ae)}function y($,se,re,V){b();const Q=V.attributes,ae=re.getAttributes(),ee=se.defaultAttributeValues;for(const pe in ae){const ce=ae[pe];if(ce.location>=0){let ve=Q[pe];if(ve===void 0&&(pe==="instanceMatrix"&&$.instanceMatrix&&(ve=$.instanceMatrix),pe==="instanceColor"&&$.instanceColor&&(ve=$.instanceColor)),ve!==void 0){const ge=ve.normalized,Pe=ve.itemSize,Be=e.get(ve);if(Be===void 0)continue;const rt=Be.buffer,nt=Be.type,it=Be.bytesPerElement,de=nt===n.INT||nt===n.UNSIGNED_INT||ve.gpuType===Vu;if(ve.isInterleavedBufferAttribute){const ue=ve.data,Te=ue.stride,ke=ve.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<ce.locationSize;De++)p(ce.location+De,ue.meshPerAttribute);$.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<ce.locationSize;De++)m(ce.location+De);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let De=0;De<ce.locationSize;De++)P(ce.location+De,Pe/ce.locationSize,nt,ge,Te*it,(ke+Pe/ce.locationSize*De)*it,de)}else{if(ve.isInstancedBufferAttribute){for(let ue=0;ue<ce.locationSize;ue++)p(ce.location+ue,ve.meshPerAttribute);$.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ue=0;ue<ce.locationSize;ue++)m(ce.location+ue);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ue=0;ue<ce.locationSize;ue++)P(ce.location+ue,Pe/ce.locationSize,nt,ge,Pe*it,Pe/ce.locationSize*ue*it,de)}}else if(ee!==void 0){const ge=ee[pe];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(ce.location,ge);break;case 3:n.vertexAttrib3fv(ce.location,ge);break;case 4:n.vertexAttrib4fv(ce.location,ge);break;default:n.vertexAttrib1fv(ce.location,ge)}}}}A()}function w(){D();for(const $ in i){const se=i[$];for(const re in se){const V=se[re];for(const Q in V){const ae=V[Q];for(const ee in ae)u(ae[ee].object),delete ae[ee];delete V[Q]}}delete i[$]}}function R($){if(i[$.id]===void 0)return;const se=i[$.id];for(const re in se){const V=se[re];for(const Q in V){const ae=V[Q];for(const ee in ae)u(ae[ee].object),delete ae[ee];delete V[Q]}}delete i[$.id]}function N($){for(const se in i){const re=i[se];for(const V in re){const Q=re[V];if(Q[$.id]===void 0)continue;const ae=Q[$.id];for(const ee in ae)u(ae[ee].object),delete ae[ee];delete Q[$.id]}}}function M($){for(const se in i){const re=i[se],V=$.isInstancedMesh===!0?$.id:0,Q=re[V];if(Q!==void 0){for(const ae in Q){const ee=Q[ae];for(const pe in ee)u(ee[pe].object),delete ee[pe];delete Q[ae]}delete re[V],Object.keys(re).length===0&&delete i[se]}}}function D(){B(),o=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:m,disableUnusedAttributes:A}}function By(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function zy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Zn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const M=N===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Dn&&N!==gi&&!M&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:y,maxSamples:w,samples:R}}function Vy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Oi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,P=A*4;let y=p.clippingState||null;l.value=y,y=u(v,h,P,d);for(let w=0;w!==P;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,v){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,v!==!0||m===null){const p=d+b*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,y=d;P!==b;++P,y+=4)o.copy(f[P]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const os=4,Hy=6,ky=20,Gy=256,Ns=new cl,Wf=new pt;let uc=null,hc=0,fc=0,dc=!1;const Wy=new q,Rr=new q;class Xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Wy}=s;uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,fc),this._renderer.xr.enabled=dc,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:bi,format:Zn,colorSpace:Ba,depthBuffer:!1},r=$f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xy(s)),this._blurMaterial=qy(s,e,t),this._ggxMaterial=$y(s,e,t)}return r}_compileMaterial(e){const t=new Un(new ln,e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,i,r,s){const l=new Kn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Wf),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new yo,new Qs({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let p=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(Wf),p=!0);for(let P=0;P<6;P++){const y=P%3;y===0?(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[P],s.y,s.z)):y===1?(l.up.set(0,0,c[P]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[P],s.z)):(l.up.set(0,c[P],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[P]));const w=this._cubeSize;ts(r,y*w,P>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(b,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Or||e.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ns)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:v}=this,b=this._sizeLods[i],m=3*b*(i>v-os?i-v+os:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=v-t,ts(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Ns),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ts(e,m,p,3*b,2*b),r.setRenderTarget(e),r.render(a,Ns)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,t,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-os?r-this._lodMax+os:0),h=4*(this._cubeSize-u);ts(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Ns)}}function Xy(n){const e=[],t=[];let i=n;const r=n-os+1+Hy;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,v=new Float32Array(d*h*f),b=new Float32Array(d*h*f);for(let p=0;p<f;p++){const A=p%3*2/3-1,P=p>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(y,d*h*p);for(let w=0;w<h;w++){const R=u[w*2]*2-1,N=u[w*2+1]*2-1;p===0?Rr.set(1,N,R):p===1?Rr.set(-R,1,-N):p===2?Rr.set(-R,N,1):p===3?Rr.set(-1,N,-R):p===4?Rr.set(-R,-1,N):Rr.set(R,N,-1),Rr.toArray(b,(p*h+w)*d)}}const m=new ln;m.setAttribute("position",new ei(v,d)),m.setAttribute("outputDirection",new ei(b,d)),t.push(new Un(m,null)),i>os&&i--}return{lodMeshes:t,sizeLods:e}}function $f(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $y(n,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function qy(n,e,t){return new Ei({name:"SphericalGaussianBlur",defines:{SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function qf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Yf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hm extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yo(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Un(r,s),a=t.minFilter;return t.minFilter===Dr&&(t.minFilter=dn),new Kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function Yy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Il||d===Ul)if(e.has(h)){const v=e.get(h).texture;return a(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const b=new hm(v.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,v=d===Il||d===Ul,b=d===Or||d===ps;if(v||b){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Xf(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return v&&A&&A.height>0||b&&A&&l(A)?(i===null&&(i=new Xf(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Il?h.mapping=Or:d===Ul&&(h.mapping=ps),h}function l(h){let d=0;const v=6;for(let b=0;b<v;b++)h[b]!==void 0&&d++;return d===v}function c(h){const d=h.target;d.removeEventListener("dispose",c);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Ky(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&us("WebGLRenderer: "+i+" extension not supported."),r}}}function Zy(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,v=f.attributes.position;let b=0;if(v===void 0)return;if(d!==null){const A=d.array;b=d.version;for(let P=0,y=A.length;P<y;P+=3){const w=A[P+0],R=A[P+1],N=A[P+2];h.push(w,R,R,N,N,w)}}else{const A=v.array;b=v.version;for(let P=0,y=A.length/3-1;P<y;P+=3){const w=P+0,R=P+1,N=P+2;h.push(w,R,R,N,N,w)}}const m=new(v.count>=65535?Yp:qp)(h,1);m.version=b;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jy(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*o,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let b=0;for(let m=0;m<d;m++)b+=h[m];t.update(b,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qy(n,e,t){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let D=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let P=0;d===!0&&(P=1),v===!0&&(P=2),b===!0&&(P=3);let y=a.attributes.position.count*P,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*w*4*f),N=new Xp(R,y,w,f);N.type=gi,N.needsUpdate=!0;const M=P*4;for(let B=0;B<f;B++){const $=m[B],se=p[B],re=A[B],V=y*w*4*B;for(let Q=0;Q<$.count;Q++){const ae=Q*M;d===!0&&(r.fromBufferAttribute($,Q),R[V+ae+0]=r.x,R[V+ae+1]=r.y,R[V+ae+2]=r.z,R[V+ae+3]=0),v===!0&&(r.fromBufferAttribute(se,Q),R[V+ae+4]=r.x,R[V+ae+5]=r.y,R[V+ae+6]=r.z,R[V+ae+7]=0),b===!0&&(r.fromBufferAttribute(re,Q),R[V+ae+8]=r.x,R[V+ae+9]=r.y,R[V+ae+10]=r.z,R[V+ae+11]=re.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Le(y,w)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];const v=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function eb(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const tb={[Cp]:"LINEAR_TONE_MAPPING",[Pp]:"REINHARD_TONE_MAPPING",[Lp]:"CINEON_TONE_MAPPING",[Dp]:"ACES_FILMIC_TONE_MAPPING",[Up]:"AGX_TONE_MAPPING",[Np]:"NEUTRAL_TONE_MAPPING",[Ip]:"CUSTOM_TONE_MAPPING"};function nb(n,e,t,i,r,s){const o=new Qn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new ln;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const u=new Hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Un(c,u),h=new cl(-1,1,1,-1,0,1);let d=null,v=null,b=!1,m,p=null,A=[],P=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let R=0;R<A.length;R++){const N=A[R];N.setSize&&N.setSize(y,w)}},this.setEffects=function(y){A=y,P=A.length>0&&A[0].isRenderPass===!0;const w=o.width,R=o.height;A.length>0&&a===null&&(a=new Qn(w,R,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(w,R,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<A.length;N++){const M=A[N];M.setSize&&M.setSize(w,R)}},this.begin=function(y,w){if(b||y.toneMapping===xi&&A.length===0)return!1;if(p=w,w!==null){const R=w.width,N=w.height;(o.width!==R||o.height!==N)&&this.setSize(R,N)}return P===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=xi,!0},this.hasRenderPass=function(){return P},this.end=function(y,w){y.toneMapping=m,b=!0;let R=o,N=a;for(let M=0;M<A.length;M++){const D=A[M];D.enabled!==!1&&(D.render(y,N,R,w),D.needsSwap!==!1&&(R=N,N=N===a?l:a))}if(d!==y.outputColorSpace||v!==y.toneMapping){d=y.outputColorSpace,v=y.toneMapping,u.defines={},vt.getTransfer(d)===wt&&(u.defines.SRGB_TRANSFER="");const M=tb[v];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,y.setRenderTarget(p),y.render(f,h),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const fm=new Mn,Su=new po(1,1),dm=new Xp,pm=new F0,mm=new Kp,Kf=[],Zf=[],Jf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function xs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Kf[r];if(s===void 0&&(s=new Float32Array(r),Kf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=Zf[e];t===void 0&&(t=new Int32Array(e),Zf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function ab(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),Zt(t,i)}}function lb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),Zt(t,i)}}function cb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),Zt(t,i)}}function ub(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function vb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?qu:$u,s=Su):s=fm,t.setTexture2D(e||s,r)}function xb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pm,r)}function Sb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mm,r)}function Mb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dm,r)}function yb(n){switch(n){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}function bb(n,e){n.uniform1fv(this.addr,e)}function Eb(n,e){const t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Tb(n,e){const t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ab(n,e){const t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function wb(n,e){const t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rb(n,e){const t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cb(n,e){const t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pb(n,e){n.uniform1iv(this.addr,e)}function Lb(n,e){n.uniform2iv(this.addr,e)}function Db(n,e){n.uniform3iv(this.addr,e)}function Ib(n,e){n.uniform4iv(this.addr,e)}function Ub(n,e){n.uniform1uiv(this.addr,e)}function Nb(n,e){n.uniform2uiv(this.addr,e)}function Fb(n,e){n.uniform3uiv(this.addr,e)}function Ob(n,e){n.uniform4uiv(this.addr,e)}function Bb(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Su:o=fm;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function zb(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||pm,s[o])}function Vb(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mm,s[o])}function Hb(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),Zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dm,s[o])}function kb(n){switch(n){case 5126:return bb;case 35664:return Eb;case 35665:return Tb;case 35666:return Ab;case 35674:return wb;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return Ub;case 36294:return Nb;case 36295:return Fb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Hb}}class Gb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function $b(n,e,t){const i=n.name,r=i.length;for(pc.lastIndex=0;;){const s=pc.exec(i),o=pc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ed(t,c===void 0?new Gb(a,n,e):new Wb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Xb(a),ed(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$b(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function td(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qb=37297;let Yb=0;function Kb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nd=new lt;function Zb(n){vt._getMatrix(nd,vt.workingColorSpace,n);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Kb(n.getShaderSource(e),a)}else return s}function Jb(n,e){const t=Zb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jb={[Cp]:"Linear",[Pp]:"Reinhard",[Lp]:"Cineon",[Dp]:"ACESFilmic",[Up]:"AgX",[Np]:"Neutral",[Ip]:"Custom"};function Qb(n,e){const t=jb[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new q;function eE(){vt.getLuminanceCoefficients(ga);const n=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function nE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function rd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(rE,oE)}const sE=new Map;function oE(n,e){let t=ht[e];if(t===void 0){const i=sE.get(e);if(i!==void 0)t=ht[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(aE,lE)}function lE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ad(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cE={[ba]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function uE(n){return cE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hE={[Or]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[sl]:"ENVMAP_TYPE_CUBE_UV"};function fE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dE={[ps]:"ENVMAP_MODE_REFRACTION"};function pE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mE={[Rp]:"ENVMAP_BLENDING_MULTIPLY",[f0]:"ENVMAP_BLENDING_MIX",[d0]:"ENVMAP_BLENDING_ADD"};function gE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mE[n.combine]||"ENVMAP_BLENDING_NONE"}function _E(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uE(t),c=fE(t),u=pE(t),f=gE(t),h=_E(t),d=tE(t),v=nE(s),b=r.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ht.tonemapping_pars_fragment:"",t.toneMapping!==xi?Qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Jb("linearToOutputTexel",t.outputColorSpace),eE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Mu(o),o=rd(o,t),o=sd(o,t),a=Mu(a),a=rd(a,t),a=sd(a,t),o=od(o),a=od(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=A+m+o,y=A+p+a,w=td(r,r.VERTEX_SHADER,P),R=td(r,r.FRAGMENT_SHADER,y);r.attachShader(b,w),r.attachShader(b,R),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function N($){if(n.debug.checkShaderErrors){const se=r.getProgramInfoLog(b)||"",re=r.getShaderInfoLog(w)||"",V=r.getShaderInfoLog(R)||"",Q=se.trim(),ae=re.trim(),ee=V.trim();let pe=!0,ce=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(pe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,w,R);else{const ve=id(r,w,"vertex"),ge=id(r,R,"fragment");xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+Q+`
`+ve+`
`+ge)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(ae===""||ee==="")&&(ce=!1);ce&&($.diagnostics={runnable:pe,programLog:Q,vertexShader:{log:ae,prefix:m},fragmentShader:{log:ee,prefix:p}})}r.deleteShader(w),r.deleteShader(R),M=new Ra(r,b),D=iE(r,b)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(b,qb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=R,this}let xE=0;class SE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ME(e),t.set(e,i)),i}}class ME{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function yE(n){return n===Br||n===Fa||n===Oa}function bE(n,e,t,i,r,s){const o=new Ku,a=new SE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,D,B,$,se,re){const V=$.fog,Q=se.geometry,ae=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?$.environment:null,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,pe=e.get(M.envMap||ae,ee),ce=pe&&pe.mapping===sl?pe.image.height:null,ve=d[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&ot("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pe=ge!==void 0?ge.length:0;let Be=0;Q.morphAttributes.position!==void 0&&(Be=1),Q.morphAttributes.normal!==void 0&&(Be=2),Q.morphAttributes.color!==void 0&&(Be=3);let rt,nt,it,de;if(ve){const Ct=fi[ve];rt=Ct.vertexShader,nt=Ct.fragmentShader}else{rt=M.vertexShader,nt=M.fragmentShader;const Ct=a.getVertexShaderStage(M),mt=a.getFragmentShaderStage(M);a.update(M,Ct,mt),it=Ct.id,de=mt.id}const ue=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),ke=se.isInstancedMesh===!0,De=se.isBatchedMesh===!0,C=!!M.map,F=!!M.matcap,U=!!pe,k=!!M.aoMap,W=!!M.lightMap,H=!!M.bumpMap&&M.wireframe===!1,G=!!M.normalMap,fe=!!M.displacementMap,j=!!M.emissiveMap,ne=!!M.metalnessMap,K=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,me=M.dispersion>0,T=M.retroreflectivity>0,g=M.iridescence>0,I=M.sheen>0,Z=M.transmission>0,te=_&&!!M.anisotropyMap,Ae=O&&!!M.clearcoatMap,Re=O&&!!M.clearcoatNormalMap,_e=O&&!!M.clearcoatRoughnessMap,Me=g&&!!M.iridescenceMap,we=g&&!!M.iridescenceThicknessMap,Ge=I&&!!M.sheenColorMap,Fe=I&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Je=!!M.specularColorMap,Qe=!!M.specularIntensityMap,at=Z&&!!M.transmissionMap,Y=Z&&!!M.thicknessMap,Ue=!!M.gradientMap,Se=!!M.alphaMap,Oe=M.alphaTest>0,ze=!!M.alphaHash,Ee=!!M.extensions;let je=xi;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(je=n.toneMapping);const Ze={shaderID:ve,shaderType:M.type,shaderName:M.name,vertexShader:rt,fragmentShader:nt,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:De,batchingColor:De&&se._colorsTexture!==null,instancing:ke,instancingColor:ke&&se.instanceColor!==null,instancingMorph:ke&&se.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:C,matcap:F,envMap:U,envMapMode:U&&pe.mapping,envMapCubeUVHeight:ce,aoMap:k,lightMap:W,bumpMap:H,normalMap:G,displacementMap:fe,emissiveMap:j,normalMapObjectSpace:G&&M.normalMapType===g0,normalMapTangentSpace:G&&M.normalMapType===pu,packedNormalMap:G&&M.normalMapType===pu&&yE(M.normalMap.format),metalnessMap:ne,roughnessMap:K,anisotropy:_,anisotropyMap:te,clearcoat:O,clearcoatMap:Ae,clearcoatNormalMap:Re,clearcoatRoughnessMap:_e,dispersion:me,retroreflection:T,iridescence:g,iridescenceMap:Me,iridescenceThicknessMap:we,sheen:I,sheenColorMap:Ge,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Je,specularIntensityMap:Qe,transmission:Z,transmissionMap:at,thicknessMap:Y,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:Se,alphaTest:Oe,alphaHash:ze,combine:M.combine,mapUv:C&&v(M.map.channel),aoMapUv:k&&v(M.aoMap.channel),lightMapUv:W&&v(M.lightMap.channel),bumpMapUv:H&&v(M.bumpMap.channel),normalMapUv:G&&v(M.normalMap.channel),displacementMapUv:fe&&v(M.displacementMap.channel),emissiveMapUv:j&&v(M.emissiveMap.channel),metalnessMapUv:ne&&v(M.metalnessMap.channel),roughnessMapUv:K&&v(M.roughnessMap.channel),anisotropyMapUv:te&&v(M.anisotropyMap.channel),clearcoatMapUv:Ae&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(M.sheenRoughnessMap.channel),specularMapUv:Ie&&v(M.specularMap.channel),specularColorMapUv:Je&&v(M.specularColorMap.channel),specularIntensityMapUv:Qe&&v(M.specularIntensityMap.channel),transmissionMapUv:at&&v(M.transmissionMap.channel),thicknessMapUv:Y&&v(M.thicknessMap.channel),alphaMapUv:Se&&v(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(G||_),vertexNormals:!!Q.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!Q.attributes.uv&&(C||Se),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Q.attributes.normal===void 0&&G===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:se.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Be,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:je,decodeVideoTexture:C&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===Rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function m(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)D.push(B),D.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(p(D,M),A(D,M),D.push(n.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function p(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numSunLights),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numSunLightShadows),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.numLightProbes),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function A(M,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.retroreflection&&o.enable(24),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),D.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function P(M){const D=d[M.type];let B;if(D){const $=fi[D];B=Bx.clone($.uniforms)}else B=M.uniforms;return B}function y(M,D){let B=u.get(D);return B!==void 0?++B.usedTimes:(B=new vE(n,D,M,r),c.push(B),u.set(D,B)),B}function w(M){if(--M.usedTimes===0){const D=c.indexOf(M);c[D]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){a.remove(M)}function N(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:P,acquireProgram:y,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:N}}function EE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function TE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ld(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,v,b,m,p){let A=n[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:v,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:p},n[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=v,A.materialVariant=o(h),A.groupOrder=b,A.renderOrder=h.renderOrder,A.z=m,A.group=p),e++,A}function l(h,d,v,b,m,p,A){A.reversedDepth===!0&&(m=-m);const P=a(h,d,v,b,m,p);v.transmission>0?i.push(P):v.transparent===!0?r.push(P):t.push(P)}function c(h,d,v,b,m,p){const A=a(h,d,v,b,m,p);v.transmission>0?i.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function u(h,d){t.length>1&&t.sort(h||TE),i.length>1&&i.sort(d||ld),r.length>1&&r.sort(d||ld)}function f(){for(let h=e,d=n.length;h<d;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function AE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new cd,n.set(i,[o])):r>=s.length?(o=new cd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new pt};break;case"SpotLight":t={position:new q,direction:new q,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function RE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CE=0;function PE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LE(n){const e=new wE,t=RE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ot,o=new Ot;function a(c){let u=0,f=0,h=0;for(let se=0;se<9;se++)i.probe[se].set(0,0,0);let d=0,v=0,b=0,m=0,p=0,A=0,P=0,y=0,w=0,R=0,N=0,M=0,D=0,B=0;c.sort(PE);for(let se=0,re=c.length;se<re;se++){const V=c[se],Q=V.color,ae=V.intensity,ee=V.distance;let pe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Br?pe=V.shadow.map.texture:pe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=Q.r*ae,f+=Q.g*ae,h+=Q.b*ae;else if(V.isLightProbe){for(let ce=0;ce<9;ce++)i.probe[ce].addScaledVector(V.sh.coefficients[ce],ae);B++}else if(V.isSunLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ve=V.shadow,ge=t.get(V);ge.shadowIntensity=ve.intensity,ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize.copy(ve.mapSize).multiply(ve.getFrameExtents()),i.sunShadow[v]=ge,i.sunShadowMap[v]=pe;const Pe=ve.getViewportCount();for(let Be=0;Be<Pe;Be++)i.sunShadowMatrix[b+Be]=ve.getMatrix(Be),i.sunShadowCascade[b+Be]=ve._cascadeData[Be];b+=Pe,v++}i.sun[d]=ce,d++}else if(V.isDirectionalLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ve=V.shadow,ge=t.get(V);ge.shadowIntensity=ve.intensity,ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,i.directionalShadow[m]=ge,i.directionalShadowMap[m]=pe,i.directionalShadowMatrix[m]=V.shadow.matrix,w++}i.directional[m]=ce,m++}else if(V.isSpotLight){const ce=e.get(V);ce.position.setFromMatrixPosition(V.matrixWorld),ce.color.copy(Q).multiplyScalar(ae),ce.distance=ee,ce.coneCos=Math.cos(V.angle),ce.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ce.decay=V.decay,i.spot[A]=ce;const ve=V.shadow;if(V.map&&(i.spotLightMap[M]=V.map,M++,ve.updateMatrices(V),V.castShadow&&D++),i.spotLightMatrix[A]=ve.matrix,V.castShadow){const ge=t.get(V);ge.shadowIntensity=ve.intensity,ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,i.spotShadow[A]=ge,i.spotShadowMap[A]=pe,N++}A++}else if(V.isRectAreaLight){const ce=e.get(V);ce.color.copy(Q).multiplyScalar(ae),ce.halfWidth.set(V.width*.5,0,0),ce.halfHeight.set(0,V.height*.5,0),i.rectArea[P]=ce,P++}else if(V.isPointLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),ce.distance=V.distance,ce.decay=V.decay,V.castShadow){const ve=V.shadow,ge=t.get(V);ge.shadowIntensity=ve.intensity,ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,ge.shadowCameraNear=ve.camera.near,ge.shadowCameraFar=ve.camera.far,i.pointShadow[p]=ge,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=V.shadow.matrix,R++}i.point[p]=ce,p++}else if(V.isHemisphereLight){const ce=e.get(V);ce.skyColor.copy(V.color).multiplyScalar(ae),ce.groundColor.copy(V.groundColor).multiplyScalar(ae),i.hemi[y]=ce,y++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const $=i.hash;($.sunLength!==d||$.directionalLength!==m||$.pointLength!==p||$.spotLength!==A||$.rectAreaLength!==P||$.hemiLength!==y||$.numSunShadows!==v||$.numDirectionalShadows!==w||$.numPointShadows!==R||$.numSpotShadows!==N||$.numSpotMaps!==M||$.numLightProbes!==B)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=P,i.point.length=p,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,$.sunLength=d,$.directionalLength=m,$.pointLength=p,$.spotLength=A,$.rectAreaLength=P,$.hemiLength=y,$.numSunShadows=v,$.numDirectionalShadows=w,$.numPointShadows=R,$.numSpotShadows=N,$.numSpotMaps=M,$.numLightProbes=B,i.version=CE++)}function l(c,u){let f=0,h=0,d=0,v=0,b=0,m=0;const p=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){const y=c[A];if(y.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(y.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),v++}else if(y.isRectAreaLight){const w=i.rectArea[b];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function ud(n){const e=new LE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function DE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ud(n),e.set(r,[a])):s>=o.length?(a=new ud(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NE=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],FE=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],hd=new Ot,Fs=new q,mc=new q;function OE(n,e,t){let i=new Zu;const r=new Le,s=new Le,o=new Vt,a=new Gx,l=new Wx,c={},u=t.maxTextureSize,f={[Fr]:Rn,[Rn]:Fr,[pi]:pi},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:IE,fragmentShader:UE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Un(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let p=this.type;this.render=function(R,N,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===qv&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ba);const D=n.getRenderTarget(),B=n.getActiveCubeFace(),$=n.getActiveMipmapLevel(),se=n.state;se.setBlending(Wi),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const re=p!==this.type;re&&N.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Q=>Q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Q=R.length;V<Q;V++){const ae=R[V],ee=ae.shadow;if(ee===void 0){ot("WebGLShadowMap:",ae,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const pe=ee.getFrameExtents();r.multiply(pe),s.copy(ee.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,ee.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,ee.mapSize.y=s.y));const ce=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=ce,ee.map===null||re===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Vs){if(ae.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Qn(r.x,r.y,{format:Br,type:bi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),ee.map.texture.name=ae.name+".shadowMap",ee.map.depthTexture=new po(r.x,r.y,gi),ee.map.depthTexture.name=ae.name+".shadowMapDepth",ee.map.depthTexture.format=Ji,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=on,ee.map.depthTexture.magFilter=on}else ae.isPointLight?(ee.map=new hm(r.x),ee.map.depthTexture=new tx(r.x,yi)):(ee.map=new Qn(r.x,r.y),ee.map.depthTexture=new po(r.x,r.y,yi)),ee.map.depthTexture.name=ae.name+".shadowMap",ee.map.depthTexture.format=Ji,this.type===ba?(ee.map.depthTexture.compareFunction=ce?qu:$u,ee.map.depthTexture.minFilter=dn,ee.map.depthTexture.magFilter=dn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=on,ee.map.depthTexture.magFilter=on);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==r.x||ee.map.height!==r.y)&&ee.map.setSize(r.x,r.y);const ve=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();ae.isPointLight!==!0&&ee.updateMatrices(ae,M);for(let ge=0;ge<ve;ge++){const Pe=ee.getCamera(ge);if(ae.isPointLight){const Be=ee.camera,rt=ee.matrix,nt=ae.distance||Be.far;nt!==Be.far&&(Be.far=nt,Be.updateProjectionMatrix()),Fs.setFromMatrixPosition(ae.matrixWorld),Be.position.copy(Fs),mc.copy(Be.position),mc.add(NE[ge]),Be.up.copy(FE[ge]),Be.lookAt(mc),Be.updateMatrixWorld(),rt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),hd.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(hd,Be.coordinateSystem,Be.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(ee.map),n.clear());const Be=ee.getViewport(ge);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),se.viewport(o)}i=ee.getFrustum(ge),y(N,M,Pe,ae,this.type)}ee.isPointLightShadow!==!0&&this.type===Vs&&A(ee,M),ee.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,B,$)};function A(R,N){const M=e.update(b);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new Qn(r.x,r.y,{format:Br,type:bi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,M,h,b,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,M,d,b,null)}function P(R,N,M,D){let B=null;const $=M.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if($!==void 0)B=$;else if(B=M.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const se=B.uuid,re=N.uuid;let V=c[se];V===void 0&&(V={},c[se]=V);let Q=V[re];Q===void 0&&(Q=B.clone(),V[re]=Q,N.addEventListener("dispose",w)),B=Q}if(B.visible=N.visible,B.wireframe=N.wireframe,D===Vs?B.side=N.shadowSide!==null?N.shadowSide:N.side:B.side=N.shadowSide!==null?N.shadowSide:f[N.side],B.alphaMap=N.alphaMap,B.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,B.map=N.map,B.clipShadows=N.clipShadows,B.clippingPlanes=N.clippingPlanes,B.clipIntersection=N.clipIntersection,B.displacementMap=N.displacementMap,B.displacementScale=N.displacementScale,B.displacementBias=N.displacementBias,B.wireframeLinewidth=N.wireframeLinewidth,B.linewidth=N.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const se=n.properties.get(B);se.light=M}return B}function y(R,N,M,D,B){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===Vs)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);const re=e.update(R),V=R.material;if(Array.isArray(V)){const Q=re.groups;for(let ae=0,ee=Q.length;ae<ee;ae++){const pe=Q[ae],ce=V[pe.materialIndex];if(ce&&ce.visible){const ve=P(R,ce,D,B);R.onBeforeShadow(n,R,N,M,re,ve,pe),n.renderBufferDirect(M,null,re,ve,R,pe),R.onAfterShadow(n,R,N,M,re,ve,pe)}}}else if(V.visible){const Q=P(R,V,D,B);R.onBeforeShadow(n,R,N,M,re,Q,null),n.renderBufferDirect(M,null,re,Q,R,null),R.onAfterShadow(n,R,N,M,re,Q,null)}}const se=R.children;for(let re=0,V=se.length;re<V;re++)y(se[re],N,M,D,B)}function w(R){R.target.removeEventListener("dispose",w);for(const M in c){const D=c[M],B=R.target.uuid;B in D&&(D[B].dispose(),delete D[B])}}}function BE(n,e){function t(){let Y=!1;const Ue=new Vt;let Se=null;const Oe=new Vt(0,0,0,0);return{setMask:function(ze){Se!==ze&&!Y&&(n.colorMask(ze,ze,ze,ze),Se=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,Ee,je,Ze,Ct){Ct===!0&&(ze*=Ze,Ee*=Ze,je*=Ze),Ue.set(ze,Ee,je,Ze),Oe.equals(Ue)===!1&&(n.clearColor(ze,Ee,je,Ze),Oe.copy(Ue))},reset:function(){Y=!1,Se=null,Oe.set(-1,0,0,0)}}}function i(){let Y=!1,Ue=!1,Se=null,Oe=null,ze=null;return{setReversed:function(Ee){if(Ue!==Ee){const je=e.get("EXT_clip_control");Ee?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ee;const Ze=ze;ze=null,this.setClear(Ze)}},getReversed:function(){return Ue},setTest:function(Ee){Ee?ue(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Ee){Se!==Ee&&!Y&&(n.depthMask(Ee),Se=Ee)},setFunc:function(Ee){if(Ue&&(Ee=R0[Ee]),Oe!==Ee){switch(Ee){case Cc:n.depthFunc(n.NEVER);break;case Pc:n.depthFunc(n.ALWAYS);break;case Lc:n.depthFunc(n.LESS);break;case co:n.depthFunc(n.LEQUAL);break;case Dc:n.depthFunc(n.EQUAL);break;case Ic:n.depthFunc(n.GEQUAL);break;case Uc:n.depthFunc(n.GREATER);break;case Nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Ue&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){Y=!1,Se=null,Oe=null,ze=null,Ue=!1}}}function r(){let Y=!1,Ue=null,Se=null,Oe=null,ze=null,Ee=null,je=null,Ze=null,Ct=null;return{setTest:function(mt){Y||(mt?ue(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(mt){Ue!==mt&&!Y&&(n.stencilMask(mt),Ue=mt)},setFunc:function(mt,mn,Nn){(Se!==mt||Oe!==mn||ze!==Nn)&&(n.stencilFunc(mt,mn,Nn),Se=mt,Oe=mn,ze=Nn)},setOp:function(mt,mn,Nn){(Ee!==mt||je!==mn||Ze!==Nn)&&(n.stencilOp(mt,mn,Nn),Ee=mt,je=mn,Ze=Nn)},setLocked:function(mt){Y=mt},setClear:function(mt){Ct!==mt&&(n.clearStencil(mt),Ct=mt)},reset:function(){Y=!1,Ue=null,Se=null,Oe=null,ze=null,Ee=null,je=null,Ze=null,Ct=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,v=[],b=null,m=!1,p=null,A=null,P=null,y=null,w=null,R=null,N=null,M=new pt(0,0,0),D=0,B=!1,$=null,se=null,re=null,V=null,Q=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,pe=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ee=pe>=1):ce.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ee=pe>=2);let ve=null,ge={};const Pe=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),rt=new Vt().fromArray(Pe),nt=new Vt().fromArray(Be);function it(Y,Ue,Se,Oe){const ze=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(Y,Ee),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Se;je++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Ue,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ue+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Ee}const de={};de[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(co),H(!1),G(tf),ue(n.CULL_FACE),k(Wi);function ue(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function Te(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function ke(Y,Ue){return h[Y]!==Ue?(n.bindFramebuffer(Y,Ue),h[Y]=Ue,Y===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ue),Y===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ue),!0):!1}function De(Y,Ue){let Se=v,Oe=!1;if(Y){Se=d.get(Ue),Se===void 0&&(Se=[],d.set(Ue,Se));const ze=Y.textures;if(Se.length!==ze.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,je=ze.length;Ee<je;Ee++)Se[Ee]=n.COLOR_ATTACHMENT0+Ee;Se.length=ze.length,Oe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(Se)}function C(Y){return b!==Y?(n.useProgram(Y),b=Y,!0):!1}const F={[is]:n.FUNC_ADD,[Kv]:n.FUNC_SUBTRACT,[Zv]:n.FUNC_REVERSE_SUBTRACT};F[Jv]=n.MIN,F[jv]=n.MAX;const U={[Qv]:n.ZERO,[e0]:n.ONE,[t0]:n.SRC_COLOR,[Ap]:n.SRC_ALPHA,[a0]:n.SRC_ALPHA_SATURATE,[s0]:n.DST_COLOR,[i0]:n.DST_ALPHA,[n0]:n.ONE_MINUS_SRC_COLOR,[wp]:n.ONE_MINUS_SRC_ALPHA,[o0]:n.ONE_MINUS_DST_COLOR,[r0]:n.ONE_MINUS_DST_ALPHA,[l0]:n.CONSTANT_COLOR,[c0]:n.ONE_MINUS_CONSTANT_COLOR,[u0]:n.CONSTANT_ALPHA,[h0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(Y,Ue,Se,Oe,ze,Ee,je,Ze,Ct,mt){if(Y===Wi){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(ue(n.BLEND),m=!0),Y!==Yv){if(Y!==p||mt!==B){if((A!==is||w!==is)&&(n.blendEquation(n.FUNC_ADD),A=is,w=is),mt)switch(Y){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFunc(n.ONE,n.ONE);break;case rf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:xt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rf:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",Y);break}P=null,y=null,R=null,N=null,M.set(0,0,0),D=0,p=Y,B=mt}return}ze=ze||Ue,Ee=Ee||Se,je=je||Oe,(Ue!==A||ze!==w)&&(n.blendEquationSeparate(F[Ue],F[ze]),A=Ue,w=ze),(Se!==P||Oe!==y||Ee!==R||je!==N)&&(n.blendFuncSeparate(U[Se],U[Oe],U[Ee],U[je]),P=Se,y=Oe,R=Ee,N=je),(Ze.equals(M)===!1||Ct!==D)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Ct),M.copy(Ze),D=Ct),p=Y,B=!1}function W(Y,Ue){Y.side===pi?Te(n.CULL_FACE):ue(n.CULL_FACE);let Se=Y.side===Rn;Ue&&(Se=!Se),H(Se),Y.blending===Js&&Y.transparent===!1?k(Wi):k(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),s.setMask(Y.colorWrite);const Oe=Y.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),j(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(Y){$!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),$=Y)}function G(Y){Y!==Xv?(ue(n.CULL_FACE),Y!==se&&(Y===tf?n.cullFace(n.BACK):Y===$v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),se=Y}function fe(Y){Y!==re&&(ee&&n.lineWidth(Y),re=Y)}function j(Y,Ue,Se){Y?(ue(n.POLYGON_OFFSET_FILL),(V!==Ue||Q!==Se)&&(V=Ue,Q=Se,o.getReversed()&&(Ue=-Ue),n.polygonOffset(Ue,Se))):Te(n.POLYGON_OFFSET_FILL)}function ne(Y){Y?ue(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function K(Y){Y===void 0&&(Y=n.TEXTURE0+ae-1),ve!==Y&&(n.activeTexture(Y),ve=Y)}function _(Y,Ue,Se){Se===void 0&&(ve===null?Se=n.TEXTURE0+ae-1:Se=ve);let Oe=ge[Se];Oe===void 0&&(Oe={type:void 0,texture:void 0},ge[Se]=Oe),(Oe.type!==Y||Oe.texture!==Ue)&&(ve!==Se&&(n.activeTexture(Se),ve=Se),n.bindTexture(Y,Ue||de[Y]),Oe.type=Y,Oe.texture=Ue)}function O(){const Y=ge[ve];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function g(){try{n.texSubImage2D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function I(){try{n.texSubImage3D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function Ae(){try{n.texStorage2D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function Re(){try{n.texStorage3D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function _e(){try{n.texImage2D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function Me(){try{n.texImage3D(...arguments)}catch(Y){xt("WebGLState:",Y)}}function we(Y){return f[Y]!==void 0?f[Y]:n.getParameter(Y)}function Ge(Y,Ue){f[Y]!==Ue&&(n.pixelStorei(Y,Ue),f[Y]=Ue)}function Fe(Y){rt.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),rt.copy(Y))}function Ie(Y){nt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),nt.copy(Y))}function Je(Y,Ue){let Se=c.get(Ue);Se===void 0&&(Se=new WeakMap,c.set(Ue,Se));let Oe=Se.get(Y);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ue,Y.name),Se.set(Y,Oe))}function Qe(Y,Ue){const Oe=c.get(Ue).get(Y);l.get(Ue)!==Oe&&(n.uniformBlockBinding(Ue,Oe,Y.__bindingPointIndex),l.set(Ue,Oe))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ve=null,ge={},h={},d=new WeakMap,v=[],b=null,m=!1,p=null,A=null,P=null,y=null,w=null,R=null,N=null,M=new pt(0,0,0),D=0,B=!1,$=null,se=null,re=null,V=null,Q=null,rt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Te,bindFramebuffer:ke,drawBuffers:De,useProgram:C,setBlending:k,setMaterial:W,setFlipSided:H,setCullFace:G,setLineWidth:fe,setPolygonOffset:j,setScissorTest:ne,activeTexture:K,bindTexture:_,unbindTexture:O,compressedTexImage2D:me,compressedTexImage3D:T,texImage2D:_e,texImage3D:Me,pixelStorei:Ge,getParameter:we,updateUBOMapping:Je,uniformBlockBinding:Qe,texStorage2D:Ae,texStorage3D:Re,texSubImage2D:g,texSubImage3D:I,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:Fe,viewport:Ie,reset:at}}function zE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,g){return v?new OffscreenCanvas(T,g):Va("canvas")}function m(T,g,I){let Z=1;const te=me(T);if((te.width>I||te.height>I)&&(Z=I/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Ae=Math.floor(Z*te.width),Re=Math.floor(Z*te.height);h===void 0&&(h=b(Ae,Re));const _e=g?b(Ae,Re):h;return _e.width=Ae,_e.height=Re,_e.getContext("2d").drawImage(T,0,0,Ae,Re),ot("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Ae+"x"+Re+")."),_e}else return"data"in T&&ot("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function p(T){return T.generateMipmaps}function A(T){n.generateMipmap(T)}function P(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,g,I,Z,te,Ae=!1){if(T!==null){if(n[T]!==void 0)return n[T];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Re;Z&&(Re=e.get("EXT_texture_norm16"),Re||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=g;if(g===n.RED&&(I===n.FLOAT&&(_e=n.R32F),I===n.HALF_FLOAT&&(_e=n.R16F),I===n.UNSIGNED_BYTE&&(_e=n.R8),I===n.UNSIGNED_SHORT&&Re&&(_e=Re.R16_EXT),I===n.SHORT&&Re&&(_e=Re.R16_SNORM_EXT)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(_e=n.R8UI),I===n.UNSIGNED_SHORT&&(_e=n.R16UI),I===n.UNSIGNED_INT&&(_e=n.R32UI),I===n.BYTE&&(_e=n.R8I),I===n.SHORT&&(_e=n.R16I),I===n.INT&&(_e=n.R32I)),g===n.RG&&(I===n.FLOAT&&(_e=n.RG32F),I===n.HALF_FLOAT&&(_e=n.RG16F),I===n.UNSIGNED_BYTE&&(_e=n.RG8),I===n.UNSIGNED_SHORT&&Re&&(_e=Re.RG16_EXT),I===n.SHORT&&Re&&(_e=Re.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(_e=n.RG8UI),I===n.UNSIGNED_SHORT&&(_e=n.RG16UI),I===n.UNSIGNED_INT&&(_e=n.RG32UI),I===n.BYTE&&(_e=n.RG8I),I===n.SHORT&&(_e=n.RG16I),I===n.INT&&(_e=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),I===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),I===n.UNSIGNED_INT&&(_e=n.RGB32UI),I===n.BYTE&&(_e=n.RGB8I),I===n.SHORT&&(_e=n.RGB16I),I===n.INT&&(_e=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),I===n.UNSIGNED_INT&&(_e=n.RGBA32UI),I===n.BYTE&&(_e=n.RGBA8I),I===n.SHORT&&(_e=n.RGBA16I),I===n.INT&&(_e=n.RGBA32I)),g===n.RGB&&(I===n.UNSIGNED_SHORT&&Re&&(_e=Re.RGB16_EXT),I===n.SHORT&&Re&&(_e=Re.RGB16_SNORM_EXT),I===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),g===n.RGBA){const Me=Ae?za:vt.getTransfer(te);I===n.FLOAT&&(_e=n.RGBA32F),I===n.HALF_FLOAT&&(_e=n.RGBA16F),I===n.UNSIGNED_BYTE&&(_e=Me===wt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT&&Re&&(_e=Re.RGBA16_EXT),I===n.SHORT&&Re&&(_e=Re.RGBA16_SNORM_EXT),I===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function w(T,g){let I;return T?g===null||g===yi||g===ho?I=n.DEPTH24_STENCIL8:g===gi?I=n.DEPTH32F_STENCIL8:g===uo&&(I=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yi||g===ho?I=n.DEPTH_COMPONENT24:g===gi?I=n.DEPTH_COMPONENT32F:g===uo&&(I=n.DEPTH_COMPONENT16),I}function R(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function N(T){const g=T.target;g.removeEventListener("dispose",N),D(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function M(T){const g=T.target;g.removeEventListener("dispose",M),$(g)}function D(T){const g=i.get(T);if(g.__webglInit===void 0)return;const I=T.source,Z=d.get(I);if(Z){const te=Z[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&B(T),Object.keys(Z).length===0&&d.delete(I)}i.remove(T)}function B(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const I=T.source,Z=d.get(I);delete Z[g.__cacheKey],o.memory.textures--}function $(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let te=0;te<g.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[Z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let Z=0,te=I.length;Z<te;Z++){const Ae=i.get(I[Z]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(I[Z])}i.remove(T)}let se=0;function re(){se=0}function V(){return se}function Q(T){se=T}function ae(){const T=se;return T>=r.maxTextures&&ot("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),se+=1,T}function ee(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function pe(T,g){const I=i.get(T);if(T.isVideoTexture&&_(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const Z=T.image;if(Z===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(I,T,g);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function ce(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Te(I,T,g);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function ve(T,g){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){Te(I,T,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function ge(T,g){const I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){ke(I,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const Pe={[Fc]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Oc]:n.MIRRORED_REPEAT},Be={[on]:n.NEAREST,[p0]:n.NEAREST_MIPMAP_NEAREST,[ko]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[Nl]:n.LINEAR_MIPMAP_NEAREST,[Dr]:n.LINEAR_MIPMAP_LINEAR},rt={[v0]:n.NEVER,[b0]:n.ALWAYS,[x0]:n.LESS,[$u]:n.LEQUAL,[S0]:n.EQUAL,[qu]:n.GEQUAL,[M0]:n.GREATER,[y0]:n.NOTEQUAL};function nt(T,g){if(g.type===gi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===Nl||g.magFilter===ko||g.magFilter===Dr||g.minFilter===dn||g.minFilter===Nl||g.minFilter===ko||g.minFilter===Dr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Pe[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Pe[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Pe[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Be[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Be[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===on||g.minFilter!==ko&&g.minFilter!==Dr||g.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function it(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",N));const Z=g.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const Ae=ee(g);if(Ae!==T.__cacheKey){te[Ae]===void 0&&(te[Ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[Ae].usedTimes++;const Re=te[T.__cacheKey];Re!==void 0&&(te[T.__cacheKey].usedTimes--,Re.usedTimes===0&&B(g)),T.__cacheKey=Ae,T.__webglTexture=te[Ae].texture}return I}function de(T,g,I){return Math.floor(Math.floor(T/I)/g)}function ue(T,g,I,Z){const Ae=T.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,Z,g.data);else{Ae.sort((Ge,Fe)=>Ge.start-Fe.start);let Re=0;for(let Ge=1;Ge<Ae.length;Ge++){const Fe=Ae[Re],Ie=Ae[Ge],Je=Fe.start+Fe.count,Qe=de(Ie.start,g.width,4),at=de(Fe.start,g.width,4);Ie.start<=Je+1&&Qe===at&&de(Ie.start+Ie.count-1,g.width,4)===Qe?Fe.count=Math.max(Fe.count,Ie.start+Ie.count-Fe.start):(++Re,Ae[Re]=Ie)}Ae.length=Re+1;const _e=t.getParameter(n.UNPACK_ROW_LENGTH),Me=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Ge=0,Fe=Ae.length;Ge<Fe;Ge++){const Ie=Ae[Ge],Je=Math.floor(Ie.start/4),Qe=Math.ceil(Ie.count/4),at=Je%g.width,Y=Math.floor(Je/g.width),Ue=Qe,Se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,at),t.pixelStorei(n.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(n.TEXTURE_2D,0,at,Y,Ue,Se,I,Z,g.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Te(T,g,I){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const te=it(T,g),Ae=g.source;t.bindTexture(Z,T.__webglTexture,n.TEXTURE0+I);const Re=i.get(Ae);if(Ae.version!==Re.__version||te===!0){if(t.activeTexture(n.TEXTURE0+I),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Se=vt.getPrimaries(vt.workingColorSpace),Oe=g.colorSpace===hr?null:vt.getPrimaries(g.colorSpace),ze=g.colorSpace===hr||Se===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Me=m(g.image,!1,r.maxTextureSize);Me=O(g,Me);const we=s.convert(g.format,g.colorSpace),Ge=s.convert(g.type);let Fe=y(g.internalFormat,we,Ge,g.normalized,g.colorSpace,g.isVideoTexture);nt(Z,g);let Ie;const Je=g.mipmaps,Qe=g.isVideoTexture!==!0,at=Re.__version===void 0||te===!0,Y=Ae.dataReady,Ue=R(g,Me);if(g.isDepthTexture)Fe=w(g.format===Ir,g.type),at&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,Fe,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Fe,Me.width,Me.height,0,we,Ge,null));else if(g.isDataTexture)if(Je.length>0){Qe&&at&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Je[0].width,Je[0].height);for(let Se=0,Oe=Je.length;Se<Oe;Se++)Ie=Je[Se],Qe?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Ge,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,we,Ge,Ie.data);g.generateMipmaps=!1}else Qe?(at&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Me.width,Me.height),Y&&ue(g,Me,we,Ge)):t.texImage2D(n.TEXTURE_2D,0,Fe,Me.width,Me.height,0,we,Ge,Me.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Qe&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Je[0].width,Je[0].height,Me.depth);for(let Se=0,Oe=Je.length;Se<Oe;Se++)if(Ie=Je[Se],g.format!==Zn)if(we!==null)if(Qe){if(Y)if(g.layerUpdates.size>0){const ze=Gf(Ie.width,Ie.height,g.format,g.type);for(const Ee of g.layerUpdates){const je=Ie.data.subarray(Ee*ze/Ie.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,Ee,Ie.width,Ie.height,1,we,je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,we,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,Me.depth,we,Ge,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,Fe,Ie.width,Ie.height,Me.depth,0,we,Ge,Ie.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Qe&&at&&t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Je[0].width,Je[0].height);for(let Se=0,Oe=Je.length;Se<Oe;Se++)Ie=Je[Se],g.format!==Zn?we!==null?Qe?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,we,Ge,Ie.data):t.texImage2D(n.TEXTURE_2D,Se,Fe,Ie.width,Ie.height,0,we,Ge,Ie.data)}else if(g.isDataArrayTexture)if(Qe){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Fe,Me.width,Me.height,Me.depth),Y)if(g.layerUpdates.size>0){const Se=Gf(Me.width,Me.height,g.format,g.type);for(const Oe of g.layerUpdates){const ze=Me.data.subarray(Oe*Se/Me.data.BYTES_PER_ELEMENT,(Oe+1)*Se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,Me.width,Me.height,1,we,Ge,ze)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,we,Ge,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,Me.width,Me.height,Me.depth,0,we,Ge,Me.data);else if(g.isData3DTexture)Qe?(at&&t.texStorage3D(n.TEXTURE_3D,Ue,Fe,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,we,Ge,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,Me.width,Me.height,Me.depth,0,we,Ge,Me.data);else if(g.isFramebufferTexture){if(at)if(Qe)t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Me.width,Me.height);else{let Se=Me.width,Oe=Me.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(n.TEXTURE_2D,ze,Fe,Se,Oe,0,we,Ge,null),Se>>=1,Oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Se=n.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),Me.parentNode!==Se){Se.appendChild(Me),f.add(g),Se.onpaint=Oe=>{const ze=Oe.changedElements;for(const Ee of f)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},Se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Me);else{const ze=n.RGBA,Ee=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,Ee,je,Me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Qe&&at){const Se=me(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}for(let Se=0,Oe=Je.length;Se<Oe;Se++)Ie=Je[Se],Qe?Y&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,we,Ge,Ie):t.texImage2D(n.TEXTURE_2D,Se,Fe,we,Ge,Ie);g.generateMipmaps=!1}else if(Qe){if(at){const Se=me(Me);t.texStorage2D(n.TEXTURE_2D,Ue,Fe,Se.width,Se.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ge,Me)}else t.texImage2D(n.TEXTURE_2D,0,Fe,we,Ge,Me);p(g)&&A(Z),Re.__version=Ae.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ke(T,g,I){if(g.image.length!==6)return;const Z=it(T,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const Ae=i.get(te);if(te.version!==Ae.__version||Z===!0){t.activeTexture(n.TEXTURE0+I);const Re=vt.getPrimaries(vt.workingColorSpace),_e=g.colorSpace===hr?null:vt.getPrimaries(g.colorSpace),Me=g.colorSpace===hr||Re===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const we=g.isCompressedTexture||g.image[0].isCompressedTexture,Ge=g.image[0]&&g.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!we&&!Ge?Fe[Ee]=m(g.image[Ee],!0,r.maxCubemapSize):Fe[Ee]=Ge?g.image[Ee].image:g.image[Ee],Fe[Ee]=O(g,Fe[Ee]);const Ie=Fe[0],Je=s.convert(g.format,g.colorSpace),Qe=s.convert(g.type),at=y(g.internalFormat,Je,Qe,g.normalized,g.colorSpace),Y=g.isVideoTexture!==!0,Ue=Ae.__version===void 0||Z===!0,Se=te.dataReady;let Oe=R(g,Ie);nt(n.TEXTURE_CUBE_MAP,g);let ze;if(we){Y&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,at,Ie.width,Ie.height);for(let Ee=0;Ee<6;Ee++){ze=Fe[Ee].mipmaps;for(let je=0;je<ze.length;je++){const Ze=ze[je];g.format!==Zn?Je!==null?Y?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Ze.width,Ze.height,Je,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,at,Ze.width,Ze.height,0,Ze.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,0,0,Ze.width,Ze.height,Je,Qe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je,at,Ze.width,Ze.height,0,Je,Qe,Ze.data)}}}else{if(ze=g.mipmaps,Y&&Ue){ze.length>0&&Oe++;const Ee=me(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,at,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ge){Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,Je,Qe,Fe[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Fe[Ee].width,Fe[Ee].height,0,Je,Qe,Fe[Ee].data);for(let je=0;je<ze.length;je++){const Ct=ze[je].image[Ee].image;Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Ct.width,Ct.height,Je,Qe,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,at,Ct.width,Ct.height,0,Je,Qe,Ct.data)}}else{Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Je,Qe,Fe[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,at,Je,Qe,Fe[Ee]);for(let je=0;je<ze.length;je++){const Ze=ze[je];Y?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,0,0,Je,Qe,Ze.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,je+1,at,Je,Qe,Ze.image[Ee])}}}p(g)&&A(n.TEXTURE_CUBE_MAP),Ae.__version=te.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function De(T,g,I,Z,te,Ae){const Re=s.convert(I.format,I.colorSpace),_e=s.convert(I.type),Me=y(I.internalFormat,Re,_e,I.normalized,I.colorSpace),we=i.get(g),Ge=i.get(I);if(Ge.__renderTarget=g,!we.__hasExternalTextures){const Fe=Math.max(1,g.width>>Ae),Ie=Math.max(1,g.height>>Ae);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Ae,Me,Fe,Ie,g.depth,0,Re,_e,null):t.texImage2D(te,Ae,Me,Fe,Ie,0,Re,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,Ge.__webglTexture,0,ne(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,Ge.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(T,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const Z=g.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,Ae=w(g.stencilBuffer,te),Re=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;K(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),Ae,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),Ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,T)}else{const Z=g.textures;for(let te=0;te<Z.length;te++){const Ae=Z[te],Re=s.convert(Ae.format,Ae.colorSpace),_e=s.convert(Ae.type),Me=y(Ae.internalFormat,Re,_e,Ae.normalized,Ae.colorSpace);K(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne(g),Me,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne(g),Me,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Me,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function F(T,g,I){const Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",N)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),nt(n.TEXTURE_CUBE_MAP,g.depthTexture);const we=s.convert(g.depthTexture.format),Ge=s.convert(g.depthTexture.type);let Fe;g.depthTexture.format===Ji?Fe=n.DEPTH_COMPONENT24:g.depthTexture.format===Ir&&(Fe=n.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Fe,g.width,g.height,0,we,Ge,null)}}else pe(g.depthTexture,0);const Ae=te.__webglTexture,Re=ne(g),_e=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,Me=g.depthTexture.format===Ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ji)K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,_e,Ae,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Me,_e,Ae,0);else if(g.depthTexture.format===Ir)K(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,_e,Ae,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,Me,_e,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(T){const g=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=Z}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)F(g.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?F(g.__webglFramebuffer[0],T,0):F(g.__webglFramebuffer,T,0)}else if(I){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=n.createRenderbuffer(),C(g.__webglDepthbuffer[Z],T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=g.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Ae)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),C(g.__webglDepthbuffer,T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(T,g,I){const Z=i.get(T);g!==void 0&&De(Z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&U(T)}function W(T){const g=T.texture,I=i.get(T),Z=i.get(g);T.addEventListener("dispose",M);const te=T.textures,Ae=T.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,o.memory.textures++),Ae){I.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[_e]=[];for(let Me=0;Me<g.mipmaps.length;Me++)I.__webglFramebuffer[_e][Me]=n.createFramebuffer()}else I.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let _e=0;_e<g.mipmaps.length;_e++)I.__webglFramebuffer[_e]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Re)for(let _e=0,Me=te.length;_e<Me;_e++){const we=i.get(te[_e]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&K(T)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const Me=te[_e];I.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[_e]);const we=s.convert(Me.format,Me.colorSpace),Ge=s.convert(Me.type),Fe=y(Me.internalFormat,we,Ge,Me.normalized,Me.colorSpace,T.isXRRenderTarget===!0),Ie=ne(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,I.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),C(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),nt(n.TEXTURE_CUBE_MAP,g);for(let _e=0;_e<6;_e++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)De(I.__webglFramebuffer[_e][Me],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else De(I.__webglFramebuffer[_e],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let _e=0,Me=te.length;_e<Me;_e++){const we=te[_e],Ge=i.get(we);let Fe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ge.__webglTexture),nt(Fe,we),De(I.__webglFramebuffer,T,we,n.COLOR_ATTACHMENT0+_e,Fe,0),p(we)&&A(Fe)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Z.__webglTexture),nt(_e,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)De(I.__webglFramebuffer[Me],T,g,n.COLOR_ATTACHMENT0,_e,Me);else De(I.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,_e,0);p(g)&&A(_e),t.unbindTexture()}T.depthBuffer&&U(T)}function H(T){const g=T.textures;for(let I=0,Z=g.length;I<Z;I++){const te=g[I];if(p(te)){const Ae=P(T),Re=i.get(te).__webglTexture;t.bindTexture(Ae,Re),A(Ae),t.unbindTexture()}}}const G=[],fe=[];function j(T){if(T.samples>0){if(K(T)===!1){const g=T.textures,I=T.width,Z=T.height;let te=n.COLOR_BUFFER_BIT;const Ae=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(T),_e=g.length>1;if(_e)for(let we=0;we<g.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<g.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const Ge=i.get(g[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,I,Z,0,0,I,Z,te,n.NEAREST),l===!0&&(G.length=0,fe.length=0,G.push(n.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(G.push(Ae),fe.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<g.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const Ge=i.get(g[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ne(T){return Math.min(r.maxSamples,T.samples)}function K(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function _(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function O(T,g){const I=T.colorSpace,Z=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Ba&&I!==hr&&(vt.getTransfer(I)===wt?(Z!==Zn||te!==Dn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",I)),g}function me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=re,this.getTextureUnits=V,this.setTextureUnits=Q,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=ve,this.setTextureCube=ge,this.rebindTextures=k,this.setupRenderTarget=W,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=De,this.useMultisampledRTT=K,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VE(n,e){function t(i,r=hr){let s;const o=vt.getTransfer(r);if(i===Dn)return n.UNSIGNED_BYTE;if(i===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Op)return n.BYTE;if(i===Bp)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Vu)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===bi)return n.HALF_FLOAT;if(i===Hp)return n.ALPHA;if(i===kp)return n.RGB;if(i===Zn)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Gp)return n.RED;if(i===Gu)return n.RED_INTEGER;if(i===Br)return n.RG;if(i===Wu)return n.RG_INTEGER;if(i===Xu)return n.RGBA_INTEGER;if(i===Ea||i===Ta||i===Aa||i===wa)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bc||i===zc||i===Vc||i===Hc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kc||i===Gc||i===Wc||i===Xc||i===$c||i===Fa||i===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kc||i===Gc)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xc)return s.COMPRESSED_R11_EAC;if(i===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return s.COMPRESSED_RG11_EAC;if(i===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ru)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===su)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===cu||i===uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lu)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hu||i===fu||i===Oa||i===du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Zp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:HE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WE extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const b=typeof XRWebGLBinding<"u",m=new GE,p={},A=t.getContextAttributes();let P=null,y=null;const w=[],R=[],N=new Le;let M=null,D=null;const B=new Kn;B.viewport=new Vt;const $=new Kn;$.viewport=new Vt;const se=[B,$],re=new Zx;let V=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let ue=w[de];return ue===void 0&&(ue=new Gl,w[de]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(de){let ue=w[de];return ue===void 0&&(ue=new Gl,w[de]=ue),ue.getGripSpace()},this.getHand=function(de){let ue=w[de];return ue===void 0&&(ue=new Gl,w[de]=ue),ue.getHandSpace()};function ae(de){const ue=R.indexOf(de.inputSource);if(ue===-1)return;const Te=w[ue];Te!==void 0&&(Te.update(de.inputSource,de.frame,c||o),Te.dispatchEvent({type:de.type,data:de.inputSource}))}function ee(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",pe);for(let de=0;de<w.length;de++){const ue=R[de];ue!==null&&(R[de]=null,w[de].disconnect(ue))}V=null,Q=null,m.reset();for(const de in p)delete p[de];if(e.setRenderTarget(P),d=null,h=null,f=null,r=null,y=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(N.width,N.height,!1),D!==null){const de=D.camera;de.fov=D.fov,de.zoom=D.zoom,de.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){s=de,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){a=de,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(de){c=de},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(de){if(r=de,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",pe),A.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ke=null,De=null;A.depth&&(De=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=A.stencil?Ir:Ji,ke=A.stencil?ho:yi);const C={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(C),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Qn(h.textureWidth,h.textureHeight,{format:Zn,type:Dn,depthTexture:new po(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(de){for(let ue=0;ue<de.removed.length;ue++){const Te=de.removed[ue],ke=R.indexOf(Te);ke>=0&&(R[ke]=null,w[ke].disconnect(Te))}for(let ue=0;ue<de.added.length;ue++){const Te=de.added[ue];let ke=R.indexOf(Te);if(ke===-1){for(let C=0;C<w.length;C++)if(C>=R.length){R.push(Te),ke=C;break}else if(R[C]===null){R[C]=Te,ke=C;break}if(ke===-1)break}const De=w[ke];De&&De.connect(Te)}}const ce=new q,ve=new q;function ge(de,ue,Te){ce.setFromMatrixPosition(ue.matrixWorld),ve.setFromMatrixPosition(Te.matrixWorld);const ke=ce.distanceTo(ve),De=ue.projectionMatrix.elements,C=Te.projectionMatrix.elements,F=De[14]/(De[10]-1),U=De[14]/(De[10]+1),k=(De[9]+1)/De[5],W=(De[9]-1)/De[5],H=(De[8]-1)/De[0],G=(C[8]+1)/C[0],fe=F*H,j=F*G,ne=ke/(-H+G),K=ne*-H;if(ue.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(K),de.translateZ(ne),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),De[10]===-1)de.projectionMatrix.copy(ue.projectionMatrix),de.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const _=F+ne,O=U+ne,me=fe-K,T=j+(ke-K),g=k*U/O*_,I=W*U/O*_;de.projectionMatrix.makePerspective(me,T,g,I,_,O),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function Pe(de,ue){ue===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(ue.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(r===null)return;let ue=de.near,Te=de.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),re.near=$.near=B.near=ue,re.far=$.far=B.far=Te,(V!==re.near||Q!==re.far)&&(r.updateRenderState({depthNear:re.near,depthFar:re.far}),V=re.near,Q=re.far),re.layers.mask=de.layers.mask|6,B.layers.mask=re.layers.mask&-5,$.layers.mask=re.layers.mask&-3;const ke=de.parent,De=re.cameras;Pe(re,ke);for(let C=0;C<De.length;C++)Pe(De[C],ke);De.length===2?ge(re,B,$):re.projectionMatrix.copy(B.projectionMatrix),D===null&&de.isPerspectiveCamera&&(D={camera:de,fov:de.fov,zoom:de.zoom}),Be(de,re,ke)};function Be(de,ue,Te){Te===null?de.matrix.copy(ue.matrixWorld):(de.matrix.copy(Te.matrixWorld),de.matrix.invert(),de.matrix.multiply(ue.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(ue.projectionMatrix),de.projectionMatrixInverse.copy(ue.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=mu*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(de){l=de,h!==null&&(h.fixedFoveation=de),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=de)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(re)},this.getCameraTexture=function(de){return p[de]};let rt=null;function nt(de,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ke=!1;Te.length!==re.cameras.length&&(re.cameras.length=0,ke=!0);for(let U=0;U<Te.length;U++){const k=Te[U];let W=null;if(d!==null)W=d.getViewport(k);else{const G=f.getViewSubImage(h,k);W=G.viewport,U===0&&(e.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(y))}let H=se[U];H===void 0&&(H=new Kn,H.layers.enable(U),H.viewport=new Vt,se[U]=H),H.matrix.fromArray(k.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(k.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(W.x,W.y,W.width,W.height),U===0&&(re.matrix.copy(H.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),ke===!0&&re.cameras.push(H)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const U=f.getDepthInformation(Te[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Te.length;U++){const k=Te[U].camera;if(k){let W=p[k];W||(W=new Zp,p[k]=W);const H=f.getCameraImage(k);W.sourceTexture=H}}}}for(let Te=0;Te<w.length;Te++){const ke=R[Te],De=w[Te];ke!==null&&De!==void 0&&De.update(ke,ue,c||o)}rt&&rt(de,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const it=new cm;it.setAnimationLoop(nt),this.setAnimationLoop=function(de){rt=de},this.dispose=function(){}}}const XE=new Ot,gm=new lt;gm.set(-1,0,0,0,1,0,0,0,1);function $E(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,sm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,P,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),P=A.envMap,y=A.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(XE.makeRotationFromEuler(y)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=P*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const R=w.program;i.uniformBlockBinding(y,R)}function c(y,w){let R=r[y.id];R===void 0&&(m(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",A));const N=w.program;i.updateUBOMapping(y,N);const M=e.render.frame;s[y.id]!==M&&(h(y),s[y.id]=M)}function u(y){const w=f();y.__bindingPointIndex=w;const R=n.createBuffer(),N=y.__size,M=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,R),R}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=r[y.id],R=y.uniforms,N=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let M=0,D=R.length;M<D;M++){const B=R[M];if(Array.isArray(B))for(let $=0,se=B.length;$<se;$++)d(B[$],M,$,N);else d(B,M,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,w,R,N){if(b(y,w,R,N)===!0){const M=y.__offset,D=y.value;if(Array.isArray(D)){let B=0;for(let $=0;$<D.length;$++){const se=D[$],re=p(se);v(se,y.__data,B),typeof se!="number"&&typeof se!="boolean"&&!se.isMatrix3&&!ArrayBuffer.isView(se)&&(B+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(D,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,y.__data)}}function v(y,w,R){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,R)}function b(y,w,R,N){const M=y.value,D=w+"_"+R;if(N[D]===void 0)return typeof M=="number"||typeof M=="boolean"?N[D]=M:ArrayBuffer.isView(M)?N[D]=M.slice():N[D]=M.clone(),!0;{const B=N[D];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return N[D]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(B.equals(M)===!1)return B.copy(M),!0}}return!1}function m(y){const w=y.uniforms;let R=0;const N=16;for(let D=0,B=w.length;D<B;D++){const $=Array.isArray(w[D])?w[D]:[w[D]];for(let se=0,re=$.length;se<re;se++){const V=$[se],Q=Array.isArray(V.value)?V.value:[V.value];for(let ae=0,ee=Q.length;ae<ee;ae++){const pe=Q[ae],ce=p(pe),ve=R%N,ge=ve%ce.boundary,Pe=ve+ge;R+=ge,Pe!==0&&N-Pe<ce.storage&&(R+=N-Pe),V.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=ce.storage}}}const M=R%N;return M>0&&(R+=N-M),y.__size=R,y.__cache={},this}function p(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",y),w}function A(y){const w=y.target;w.removeEventListener("dispose",A);const R=o.indexOf(w.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function P(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:P}}const YE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function KE(){return ai===null&&(ai=new j0(YE,16,16,Br,bi),ai.name="DFG_LUT",ai.minFilter=dn,ai.magFilter=dn,ai.wrapS=Vi,ai.wrapT=Vi,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class ZE{constructor(e={}){const{canvas:t=A0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Dn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const b=d,m=new Set([Xu,Wu,Gu]),p=new Set([Dn,yi,uo,ho,Hu,ku]),A=new Uint32Array(4),P=new Int32Array(4),y=new q;let w=null,R=null;const N=[],M=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let $=!1,se=null,re=null,V=null,Q=null;this._outputColorSpace=zn;let ae=0,ee=0,pe=null,ce=-1,ve=null;const ge=new Vt,Pe=new Vt;let Be=null;const rt=new pt(0);let nt=0,it=t.width,de=t.height,ue=1,Te=null,ke=null;const De=new Vt(0,0,it,de),C=new Vt(0,0,it,de);let F=!1;const U=new Zu;let k=!1,W=!1;const H=new Ot,G=new q,fe=new Vt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function K(){return pe===null?ue:1}let _=i;function O(E,X){return t.getContext(E,X)}let me,T,g,I,Z,te,Ae,Re,_e,Me,we,Ge,Fe,Ie,Je,Qe,at,Y,Ue,Se,Oe,ze,Ee;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zu}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",mn,!1),_===null){const X="webgl2";if(_=O(X,E),_===null)throw O(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(E){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),xt("WebGLRenderer: "+E.message),E}function je(){me=new Ky(_),me.init(),Oe=new VE(_,me),T=new zy(_,me,e,Oe),g=new BE(_,me),T.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),re=_.createFramebuffer(),V=_.createFramebuffer(),Q=_.createFramebuffer(),I=new jy(_),Z=new EE,te=new zE(_,me,g,Z,T,Oe,I),Ae=new Yy(B),Re=new eS(_),ze=new Oy(_,Re),_e=new Zy(_,Re,I,ze),Me=new eb(_,_e,Re,ze,I),Y=new Qy(_,T,te),Je=new Vy(Z),we=new bE(B,Ae,me,T,ze,Je),Ge=new $E(B,Z),Fe=new AE,Ie=new DE(me),at=new Fy(B,Ae,g,Me,v,l),Qe=new OE(B,Me,T),Ee=new qE(_,I,T,g),Ue=new By(_,me,I),Se=new Jy(_,me,I),I.programs=we.programs,B.capabilities=T,B.extensions=me,B.properties=Z,B.renderLists=Fe,B.shadowMap=Qe,B.state=g,B.info=I}b!==Dn&&(D=new nb(b,t.width,t.height,a,r,s));const Ze=new WE(B,_);this.xr=Ze,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(E){E!==void 0&&(ue=E,this.setSize(it,de,!1))},this.getSize=function(E){return E.set(it,de)},this.setSize=function(E,X,he=!0){if(Ze.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}it=E,de=X,t.width=Math.floor(E*ue),t.height=Math.floor(X*ue),he===!0&&(t.style.width=E+"px",t.style.height=X+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(it*ue,de*ue).floor()},this.setDrawingBufferSize=function(E,X,he){it=E,de=X,ue=he,t.width=Math.floor(E*he),t.height=Math.floor(X*he),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(b===Dn){xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ge)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,X,he,le){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,X,he,le),g.viewport(ge.copy(De).multiplyScalar(ue).round())},this.getScissor=function(E){return E.copy(C)},this.setScissor=function(E,X,he,le){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,X,he,le),g.scissor(Pe.copy(C).multiplyScalar(ue).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(E){g.setScissorTest(F=E)},this.setOpaqueSort=function(E){Te=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,he=!0){let le=0;if(E){let oe=!1;if(pe!==null){const Ve=pe.texture.format;oe=m.has(Ve)}if(oe){const Ve=pe.texture.type,$e=p.has(Ve),Ne=at.getClearColor(),Ye=at.getClearAlpha(),We=Ne.r,ut=Ne.g,ft=Ne.b;$e?(A[0]=We,A[1]=ut,A[2]=ft,A[3]=Ye,_.clearBufferuiv(_.COLOR,0,A)):(P[0]=We,P[1]=ut,P[2]=ft,P[3]=Ye,_.clearBufferiv(_.COLOR,0,P))}else le|=_.COLOR_BUFFER_BIT}X&&(le|=_.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(le|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&_.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),se=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),at.dispose(),Fe.dispose(),Ie.dispose(),Z.dispose(),Ae.dispose(),Me.dispose(),ze.dispose(),Ee.dispose(),we.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",bo),Ze.removeEventListener("sessionend",vr),Ai.stop()};function Ct(E){E.preventDefault(),lf("WebGLRenderer: Context Lost."),$=!0}function mt(){lf("WebGLRenderer: Context Restored."),$=!1;const E=I.autoReset,X=Qe.enabled,he=Qe.autoUpdate,le=Qe.needsUpdate,oe=Qe.type;je(),I.autoReset=E,Qe.enabled=X,Qe.autoUpdate=he,Qe.needsUpdate=le,Qe.type=oe}function mn(E){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Nn(E){const X=E.target;X.removeEventListener("dispose",Nn),fl(X)}function fl(E){dl(E),Z.remove(E)}function dl(E){const X=Z.get(E).programs;X!==void 0&&(X.forEach(function(he){we.releaseProgram(he)}),E.isShaderMaterial&&we.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,he,le,oe,Ve){X===null&&(X=j);const $e=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ne=ml(E,X,he,le,oe);g.setMaterial(le,$e);let Ye=he.index,We=1;if(le.wireframe===!0){if(Ye=_e.getWireframeAttribute(he),Ye===void 0)return;We=2}const ut=he.drawRange,ft=he.attributes.position;let Ke=ut.start*We,Mt=(ut.start+ut.count)*We;Ve!==null&&(Ke=Math.max(Ke,Ve.start*We),Mt=Math.min(Mt,(Ve.start+Ve.count)*We)),Ye!==null?(Ke=Math.max(Ke,0),Mt=Math.min(Mt,Ye.count)):ft!=null&&(Ke=Math.max(Ke,0),Mt=Math.min(Mt,ft.count));const Bt=Mt-Ke;if(Bt<0||Bt===1/0)return;ze.setup(oe,le,Ne,he,Ye);let Dt,At=Ue;if(Ye!==null&&(Dt=Re.get(Ye),At=Se,At.setIndex(Dt)),oe.isMesh)le.wireframe===!0?(g.setLineWidth(le.wireframeLinewidth*K()),At.setMode(_.LINES)):At.setMode(_.TRIANGLES);else if(oe.isLine){let jt=le.linewidth;jt===void 0&&(jt=1),g.setLineWidth(jt*K()),oe.isLineSegments?At.setMode(_.LINES):oe.isLineLoop?At.setMode(_.LINE_LOOP):At.setMode(_.LINE_STRIP)}else oe.isPoints?At.setMode(_.POINTS):oe.isSprite&&At.setMode(_.TRIANGLES);if(oe.isBatchedMesh)if(me.get("WEBGL_multi_draw"))At.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const jt=oe._multiDrawStarts,qe=oe._multiDrawCounts,en=oe._multiDrawCount,gt=Ye?Re.get(Ye).bytesPerElement:1,yn=Z.get(le).currentProgram.getUniforms();for(let Fn=0;Fn<en;Fn++)yn.setValue(_,"_gl_DrawID",Fn),At.render(jt[Fn]/gt,qe[Fn])}else if(oe.isInstancedMesh)At.renderInstances(Ke,Bt,oe.count);else if(he.isInstancedBufferGeometry){const jt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,jt);At.renderInstances(Ke,Bt,qe)}else At.render(Ke,Bt)};function Ss(E,X,he,le){se!==null&&E.isNodeMaterial&&se.setObject(le,E),k===!0&&Je.setState(E,he,!1),E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,Jt(E,X,le),E.side=Fr,E.needsUpdate=!0,Jt(E,X,le),E.side=pi):Jt(E,X,le)}this.compile=function(E,X,he=null){he===null&&(he=E),se!==null&&se.renderStart(E,X,he),R=Ie.get(he),R.init(X),M.push(R),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),E!==he&&E.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),R.setupLights(),se!==null&&se.updateLights(R.state.lightsArray),W=this.localClippingEnabled,k=Je.init(this.clippingPlanes,W),k===!0&&Je.setGlobalState(this.clippingPlanes,X),se!==null&&Qe.render(R.state.shadowsArray,he,X);const le=new Set;return E.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let $e=0;$e<Ve.length;$e++){const Ne=Ve[$e];Ss(Ne,he,X,oe),le.add(Ne)}else Ss(Ve,he,X,oe),le.add(Ve)}),R=M.pop(),se!==null&&se.renderEnd(),le},this.compileAsync=function(E,X,he=null){const le=this.compile(E,X,he);return new Promise(oe=>{function Ve(){if(le.forEach(function($e){const Ye=Z.get($e).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete($e)}),le.size===0){oe(E);return}setTimeout(Ve,10)}me.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Ms=null;function pl(E){Ms&&Ms(E)}function bo(){Ai.stop()}function vr(){Ai.start()}const Ai=new cm;Ai.setAnimationLoop(pl),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(E){Ms=E,Ze.setAnimationLoop(E),E===null?Ai.stop():Ai.start()},Ze.addEventListener("sessionstart",bo),Ze.addEventListener("sessionend",vr),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;se!==null&&se.renderStart(E,X);const he=Ze.enabled===!0&&Ze.isPresenting===!0,le=D!==null&&(pe===null||he)&&D.begin(B,pe);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(X),X=Ze.getCamera()),E.isScene===!0&&E.onBeforeRender(B,E,X,pe),R=Ie.get(E,M.length),R.init(X),R.state.textureUnits=te.getTextureUnits(),M.push(R),H.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U.setFromProjectionMatrix(H,_i,X.reversedDepth),W=this.localClippingEnabled,k=Je.init(this.clippingPlanes,W),w=Fe.get(E,N.length),w.init(),N.push(w),Ze.enabled===!0&&Ze.isPresenting===!0){const $e=B.xr.getDepthSensingMesh();$e!==null&&ys($e,X,-1/0,B.sortObjects)}ys(E,X,0,B.sortObjects),w.finish(),se!==null&&se.updateLights(R.state.lightsArray),B.sortObjects===!0&&w.sort(Te,ke),ne=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,ne&&at.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&Je.beginShadows();const oe=R.state.shadowsArray;if(Qe.render(oe,E,X),k===!0&&Je.endShadows(),(le&&D.hasRenderPass())===!1){const $e=w.opaque,Ne=w.transmissive;if(R.setupLights(),X.isArrayCamera){const Ye=X.cameras;if(Ne.length>0)for(let We=0,ut=Ye.length;We<ut;We++){const ft=Ye[We];bs($e,Ne,E,ft)}ne&&at.render(E);for(let We=0,ut=Ye.length;We<ut;We++){const ft=Ye[We];xr(w,E,ft,ft.viewport)}}else Ne.length>0&&bs($e,Ne,E,X),ne&&at.render(E),xr(w,E,X)}pe!==null&&ee===0&&(te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe)),le&&D.end(B),E.isScene===!0&&E.onAfterRender(B,E,X),ze.resetDefaultState(),ce=-1,ve=null,M.pop(),M.length>0?(R=M[M.length-1],te.setTextureUnits(R.state.textureUnits),k===!0&&Je.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?w=N[N.length-1]:w=null,se!==null&&se.renderEnd()};function ys(E,X,he,le){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)he=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLightProbeGrid)R.pushLightProbeGrid(E);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(U)){le&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const $e=Me.update(E),Ne=E.material;Ne.visible&&w.push(E,$e,Ne,he,fe.z,null,X)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(U))){const $e=Me.update(E),Ne=E.material;if(le&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),fe.copy($e.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(H)),Array.isArray(Ne)){const Ye=$e.groups;for(let We=0,ut=Ye.length;We<ut;We++){const ft=Ye[We],Ke=Ne[ft.materialIndex];Ke&&Ke.visible&&w.push(E,$e,Ke,he,fe.z,ft,X)}}else Ne.visible&&w.push(E,$e,Ne,he,fe.z,null,X)}}const Ve=E.children;for(let $e=0,Ne=Ve.length;$e<Ne;$e++)ys(Ve[$e],X,he,le)}function xr(E,X,he,le){const{opaque:oe,transmissive:Ve,transparent:$e}=E;R.setupLightsView(he),k===!0&&Je.setGlobalState(B.clippingPlanes,he),le&&g.viewport(ge.copy(le)),oe.length>0&&Sr(oe,X,he),Ve.length>0&&Sr(Ve,X,he),$e.length>0&&Sr($e,X,he),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function bs(E,X,he,le){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[le.id]===void 0){const Ke=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[le.id]=new Qn(1,1,{generateMipmaps:!0,type:Ke?bi:Dn,minFilter:Dr,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ve=R.state.transmissionRenderTarget[le.id],$e=le.viewport||ge;Ve.setSize($e.z*B.transmissionResolutionScale,$e.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),Ye=B.getActiveCubeFace(),We=B.getActiveMipmapLevel();B.setRenderTarget(Ve),B.getClearColor(rt),nt=B.getClearAlpha(),nt<1&&B.setClearColor(16777215,.5),B.clear(),ne&&at.render(he);const ut=B.toneMapping;B.toneMapping=xi;const ft=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),R.setupLightsView(le),k===!0&&Je.setGlobalState(B.clippingPlanes,le),Sr(E,he,le),te.updateMultisampleRenderTarget(Ve),te.updateRenderTargetMipmap(Ve),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Mt=0,Bt=X.length;Mt<Bt;Mt++){const Dt=X[Mt],{object:At,geometry:jt,material:qe,group:en}=Dt;if(qe.side===pi&&At.layers.test(le.layers)){const gt=qe.side;qe.side=Rn,qe.needsUpdate=!0,Eo(At,he,le,jt,qe,en),qe.side=gt,qe.needsUpdate=!0,Ke=!0}}Ke===!0&&(te.updateMultisampleRenderTarget(Ve),te.updateRenderTargetMipmap(Ve))}B.setRenderTarget(Ne,Ye,We),B.setClearColor(rt,nt),ft!==void 0&&(le.viewport=ft),B.toneMapping=ut}function Sr(E,X,he){const le=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,Ve=E.length;oe<Ve;oe++){const $e=E[oe],{object:Ne,geometry:Ye,group:We}=$e;let ut=$e.material;ut.allowOverride===!0&&le!==null&&(ut=le),Ne.layers.test(he.layers)&&Eo(Ne,X,he,Ye,ut,We)}}function Eo(E,X,he,le,oe,Ve){se!==null&&oe.isNodeMaterial&&se.setObject(E,oe),E.onBeforeRender(B,X,he,le,oe,Ve),E.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),oe.onBeforeRender(B,X,he,le,E,Ve),oe.transparent===!0&&oe.side===pi&&oe.forceSinglePass===!1?(oe.side=Rn,oe.needsUpdate=!0,B.renderBufferDirect(he,X,le,oe,E,Ve),oe.side=Fr,oe.needsUpdate=!0,B.renderBufferDirect(he,X,le,oe,E,Ve),oe.side=pi):B.renderBufferDirect(he,X,le,oe,E,Ve),E.onAfterRender(B,X,he,le,oe,Ve)}function Jt(E,X,he){X.isScene!==!0&&(X=j);const le=Z.get(E),oe=R.state.lights,Ve=R.state.shadowsArray,$e=oe.state.version,Ne=we.getParameters(E,oe.state,Ve,X,he,R.state.lightProbeGridArray),Ye=we.getProgramCacheKey(Ne);let We=le.programs;le.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,le.fog=X.fog;const ut=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;le.envMap=Ae.get(E.envMap||le.environment,ut),le.envMapRotation=le.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Nn),We=new Map,le.programs=We);let ft=We.get(Ye);if(ft!==void 0){if(le.currentProgram===ft&&le.lightsStateVersion===$e)return Es(E,Ne),ft}else Ne.uniforms=we.getUniforms(E),se!==null&&E.isNodeMaterial&&se.build(E,he,Ne),E.onBeforeCompile(Ne,B),ft=we.acquireProgram(Ne,Ye),We.set(Ye,ft),le.uniforms=Ne.uniforms;const Ke=le.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ke.clippingPlanes=Je.uniform),Es(E,Ne),le.needsLights=Ao(E),le.lightsStateVersion=$e,le.needsLights&&(Ke.ambientLightColor.value=oe.state.ambient,Ke.lightProbe.value=oe.state.probe,Ke.sunLights.value=oe.state.sun,Ke.sunLightShadows.value=oe.state.sunShadow,Ke.directionalLights.value=oe.state.directional,Ke.directionalLightShadows.value=oe.state.directionalShadow,Ke.spotLights.value=oe.state.spot,Ke.spotLightShadows.value=oe.state.spotShadow,Ke.rectAreaLights.value=oe.state.rectArea,Ke.ltc_1.value=oe.state.rectAreaLTC1,Ke.ltc_2.value=oe.state.rectAreaLTC2,Ke.pointLights.value=oe.state.point,Ke.pointLightShadows.value=oe.state.pointShadow,Ke.hemisphereLights.value=oe.state.hemi,Ke.sunShadowMatrix.value=oe.state.sunShadowMatrix,Ke.sunShadowCascade.value=oe.state.sunShadowCascade,Ke.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ke.spotLightMatrix.value=oe.state.spotLightMatrix,Ke.spotLightMap.value=oe.state.spotLightMap,Ke.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=R.state.lightProbeGridArray.length>0,le.currentProgram=ft,le.uniformsList=null,ft}function To(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=Ra.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Es(E,X){const he=Z.get(E);he.outputColorSpace=X.outputColorSpace,he.batching=X.batching,he.batchingColor=X.batchingColor,he.instancing=X.instancing,he.instancingColor=X.instancingColor,he.instancingMorph=X.instancingMorph,he.skinning=X.skinning,he.morphTargets=X.morphTargets,he.morphNormals=X.morphNormals,he.morphColors=X.morphColors,he.morphTargetsCount=X.morphTargetsCount,he.numClippingPlanes=X.numClippingPlanes,he.numIntersection=X.numClipIntersection,he.vertexAlphas=X.vertexAlphas,he.vertexTangents=X.vertexTangents,he.toneMapping=X.toneMapping}function Qi(E,X){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(X.matrixWorld);for(let he=0,le=E.length;he<le;he++){const oe=E[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(y))return oe}return null}function ml(E,X,he,le,oe){X.isScene!==!0&&(X=j),te.resetTextureUnits();const Ve=X.fog,$e=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?X.environment:null,Ne=pe===null?B.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vt.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,We=Ae.get(le.envMap||$e,Ye),ut=le.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ft=!!he.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ke=!!he.morphAttributes.position,Mt=!!he.morphAttributes.normal,Bt=!!he.morphAttributes.color;let Dt=xi;le.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Dt=B.toneMapping);const At=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,jt=At!==void 0?At.length:0,qe=Z.get(le),en=R.state.lights;if(k===!0&&(W===!0||E!==ve)){const Pt=E===ve&&le.id===ce;Je.setState(le,E,Pt)}let gt=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==en.state.version||qe.outputColorSpace!==Ne||oe.isBatchedMesh&&qe.batching===!1||!oe.isBatchedMesh&&qe.batching===!0||oe.isBatchedMesh&&qe.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&qe.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&qe.instancingMorph===!1&&oe.morphTexture!==null||qe.envMap!==We||le.fog===!0&&qe.fog!==Ve||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Je.numPlanes||qe.numIntersection!==Je.numIntersection)||qe.vertexAlphas!==ut||qe.vertexTangents!==ft||qe.morphTargets!==Ke||qe.morphNormals!==Mt||qe.morphColors!==Bt||qe.toneMapping!==Dt||qe.morphTargetsCount!==jt||!!qe.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,qe.__version=le.version);let yn=qe.currentProgram;gt===!0&&(yn=Jt(le,X,oe),se&&le.isNodeMaterial&&se.onUpdateProgram(le,yn,qe));let Fn=!1,ni=!1,wi=!1;const yt=yn.getUniforms(),zt=qe.uniforms;if(g.useProgram(yn.program)&&(Fn=!0,ni=!0,wi=!0),le.id!==ce&&(ce=le.id,ni=!0),qe.needsLights){const Pt=Qi(R.state.lightProbeGridArray,oe);qe.lightProbeGrid!==Pt&&(qe.lightProbeGrid=Pt,ni=!0)}if(Fn||ve!==E){g.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(_,"projectionMatrix",E.projectionMatrix),yt.setValue(_,"viewMatrix",E.matrixWorldInverse);const Wn=yt.map.cameraPosition;Wn!==void 0&&Wn.setValue(_,G.setFromMatrixPosition(E.matrixWorld)),T.logarithmicDepthBuffer&&yt.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&yt.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),ve!==E&&(ve=E,ni=!0,wi=!0)}if(qe.needsLights&&(en.state.sunShadowMap.length>0&&yt.setValue(_,"sunShadowMap",en.state.sunShadowMap,te),en.state.directionalShadowMap.length>0&&yt.setValue(_,"directionalShadowMap",en.state.directionalShadowMap,te),en.state.spotShadowMap.length>0&&yt.setValue(_,"spotShadowMap",en.state.spotShadowMap,te),en.state.pointShadowMap.length>0&&yt.setValue(_,"pointShadowMap",en.state.pointShadowMap,te)),oe.isSkinnedMesh){yt.setOptional(_,oe,"bindMatrix"),yt.setOptional(_,oe,"bindMatrixInverse");const Pt=oe.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),yt.setValue(_,"boneTexture",Pt.boneTexture,te))}oe.isBatchedMesh&&(yt.setOptional(_,oe,"batchingTexture"),yt.setValue(_,"batchingTexture",oe._matricesTexture,te),yt.setOptional(_,oe,"batchingIdTexture"),yt.setValue(_,"batchingIdTexture",oe._indirectTexture,te),yt.setOptional(_,oe,"batchingColorTexture"),oe._colorsTexture!==null&&yt.setValue(_,"batchingColorTexture",oe._colorsTexture,te));const ii=he.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Y.update(oe,he,yn),(ni||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,yt.setValue(_,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=KE()),ni){if(yt.setValue(_,"toneMappingExposure",B.toneMappingExposure),qe.needsLights&&Ts(zt,wi),Ve&&le.fog===!0&&Ge.refreshFogUniforms(zt,Ve),Ge.refreshMaterialUniforms(zt,le,ue,de,R.state.transmissionRenderTarget[E.id]),qe.needsLights&&qe.lightProbeGrid){const Pt=qe.lightProbeGrid;zt.probesSH.value=Pt.texture,zt.probesMin.value.copy(Pt.boundingBox.min),zt.probesMax.value.copy(Pt.boundingBox.max),zt.probesResolution.value.copy(Pt.resolution)}Ra.upload(_,To(qe),zt,te)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ra.upload(_,To(qe),zt,te),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&yt.setValue(_,"center",oe.center),yt.setValue(_,"modelViewMatrix",oe.modelViewMatrix),yt.setValue(_,"normalMatrix",oe.normalMatrix),yt.setValue(_,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Pt=le.uniformsGroups;for(let Wn=0,er=Pt.length;Wn<er;Wn++){const Ro=Pt[Wn];Ee.update(Ro,yn),Ee.bind(Ro,yn)}}return yn}function Ts(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.sunLights.needsUpdate=X,E.sunLightShadows.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function Ao(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(E,X,he){const le=Z.get(E);le.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=X,Z.get(E.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:he,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const he=Z.get(E);he.__webglFramebuffer=X,he.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(E,X=0,he=0){pe=E,ae=X,ee=he;let le=null,oe=!1,Ve=!1;if(E){const Ne=Z.get(E);if(Ne.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(_.FRAMEBUFFER,Ne.__webglFramebuffer),ge.copy(E.viewport),Pe.copy(E.scissor),Be=E.scissorTest,g.viewport(ge),g.scissor(Pe),g.setScissorTest(Be),ce=-1;return}else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(E);else if(Ne.__hasExternalTextures)te.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ut=E.depthTexture;if(Ne.__boundDepthTexture!==ut){if(ut!==null&&Z.has(ut)&&(E.width!==ut.image.width||E.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(E)}}const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ve=!0);const We=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[X])?le=We[X][he]:le=We[X],oe=!0):E.samples>0&&te.useMultisampledRTT(E)===!1?le=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?le=We[he]:le=We,ge.copy(E.viewport),Pe.copy(E.scissor),Be=E.scissorTest}else ge.copy(De).multiplyScalar(ue).floor(),Pe.copy(C).multiplyScalar(ue).floor(),Be=F;if(he!==0&&(le=re),g.bindFramebuffer(_.FRAMEBUFFER,le)&&g.drawBuffers(E,le),g.viewport(ge),g.scissor(Pe),g.setScissorTest(Be),oe){const Ne=Z.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,he)}else if(Ve){const Ne=X;for(let Ye=0;Ye<E.textures.length;Ye++){const We=Z.get(E.textures[Ye]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ye,We.__webglTexture,he,Ne)}}else if(E!==null&&he!==0){const Ne=Z.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ne.__webglTexture,he)}ce=-1};function wo(E){const X=Z.get(E);return(X.__readFormat!==E.format||X.__readType!==E.type)&&(X.__readFormat=E.format,X.__readType=E.type,X.__formatReadable=T.textureFormatReadable(E.format),X.__typeReadable=T.textureTypeReadable(E.type)),X}this.readRenderTargetPixels=function(E,X,he,le,oe,Ve,$e,Ne=0){if(!(E&&E.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$e!==void 0&&(Ye=Ye[$e]),Ye){g.bindFramebuffer(_.FRAMEBUFFER,Ye);try{const We=E.textures[Ne],ut=We.format,ft=We.type;E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne);const Ke=wo(We);if(Ke.__formatReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-le&&he>=0&&he<=E.height-oe&&_.readPixels(X,he,le,oe,Oe.convert(ut),Oe.convert(ft),Ve)}finally{const We=pe!==null?Z.get(pe).__webglFramebuffer:null;g.bindFramebuffer(_.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,X,he,le,oe,Ve,$e,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$e!==void 0&&(Ye=Ye[$e]),Ye)if(X>=0&&X<=E.width-le&&he>=0&&he<=E.height-oe){g.bindFramebuffer(_.FRAMEBUFFER,Ye);const We=E.textures[Ne],ut=We.format,ft=We.type;E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne);const Ke=wo(We);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Mt),_.bufferData(_.PIXEL_PACK_BUFFER,Ve.byteLength,_.STREAM_READ),_.readPixels(X,he,le,oe,Oe.convert(ut),Oe.convert(ft),0),_.bindBuffer(_.PIXEL_PACK_BUFFER,null);const Bt=pe!==null?Z.get(pe).__webglFramebuffer:null;g.bindFramebuffer(_.FRAMEBUFFER,Bt);const Dt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await w0(_,Dt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Mt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Ve),_.bindBuffer(_.PIXEL_PACK_BUFFER,null),_.deleteBuffer(Mt),_.deleteSync(Dt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,he=0){const le=Math.pow(2,-he),oe=Math.floor(E.image.width*le),Ve=Math.floor(E.image.height*le),$e=X!==null?X.x:0,Ne=X!==null?X.y:0;te.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,he,0,0,$e,Ne,oe,Ve),g.unbindTexture()},this.copyTextureToTexture=function(E,X,he=null,le=null,oe=0,Ve=0){let $e,Ne,Ye,We,ut,ft,Ke,Mt,Bt;const Dt=E.isCompressedTexture?E.mipmaps[Ve]:E.image;if(he!==null)$e=he.max.x-he.min.x,Ne=he.max.y-he.min.y,Ye=he.isBox3?he.max.z-he.min.z:1,We=he.min.x,ut=he.min.y,ft=he.isBox3?he.min.z:0;else{const zt=Math.pow(2,-oe);$e=Math.floor(Dt.width*zt),Ne=Math.floor(Dt.height*zt),E.isDataArrayTexture?Ye=Dt.depth:E.isData3DTexture?Ye=Math.floor(Dt.depth*zt):Ye=1,We=0,ut=0,ft=0}le!==null?(Ke=le.x,Mt=le.y,Bt=le.z):(Ke=0,Mt=0,Bt=0);const At=Oe.convert(X.format),jt=Oe.convert(X.type);let qe;X.isData3DTexture?(te.setTexture3D(X,0),qe=_.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(te.setTexture2DArray(X,0),qe=_.TEXTURE_2D_ARRAY):(te.setTexture2D(X,0),qe=_.TEXTURE_2D),g.activeTexture(_.TEXTURE0),g.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,X.flipY),g.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),g.pixelStorei(_.UNPACK_ALIGNMENT,X.unpackAlignment);const en=g.getParameter(_.UNPACK_ROW_LENGTH),gt=g.getParameter(_.UNPACK_IMAGE_HEIGHT),yn=g.getParameter(_.UNPACK_SKIP_PIXELS),Fn=g.getParameter(_.UNPACK_SKIP_ROWS),ni=g.getParameter(_.UNPACK_SKIP_IMAGES);g.pixelStorei(_.UNPACK_ROW_LENGTH,Dt.width),g.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Dt.height),g.pixelStorei(_.UNPACK_SKIP_PIXELS,We),g.pixelStorei(_.UNPACK_SKIP_ROWS,ut),g.pixelStorei(_.UNPACK_SKIP_IMAGES,ft);const wi=E.isDataArrayTexture||E.isData3DTexture,yt=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const zt=Z.get(E),ii=Z.get(X),Pt=Z.get(zt.__renderTarget),Wn=Z.get(ii.__renderTarget);g.bindFramebuffer(_.READ_FRAMEBUFFER,Pt.__webglFramebuffer),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let er=0;er<Ye;er++)wi&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,oe,ft+er),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Z.get(X).__webglTexture,Ve,Bt+er)),_.blitFramebuffer(We,ut,$e,Ne,Ke,Mt,$e,Ne,_.DEPTH_BUFFER_BIT,_.NEAREST);g.bindFramebuffer(_.READ_FRAMEBUFFER,null),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(oe!==0||E.isRenderTargetTexture||Z.has(E)){const zt=Z.get(E),ii=Z.get(X);g.bindFramebuffer(_.READ_FRAMEBUFFER,V),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,Q);for(let Pt=0;Pt<Ye;Pt++)wi?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,zt.__webglTexture,oe,ft+Pt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,zt.__webglTexture,oe),yt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ii.__webglTexture,Ve,Bt+Pt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ii.__webglTexture,Ve),oe!==0?_.blitFramebuffer(We,ut,$e,Ne,Ke,Mt,$e,Ne,_.COLOR_BUFFER_BIT,_.NEAREST):yt?_.copyTexSubImage3D(qe,Ve,Ke,Mt,Bt+Pt,We,ut,$e,Ne):_.copyTexSubImage2D(qe,Ve,Ke,Mt,We,ut,$e,Ne);g.bindFramebuffer(_.READ_FRAMEBUFFER,null),g.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?_.texSubImage3D(qe,Ve,Ke,Mt,Bt,$e,Ne,Ye,At,jt,Dt.data):X.isCompressedArrayTexture?_.compressedTexSubImage3D(qe,Ve,Ke,Mt,Bt,$e,Ne,Ye,At,Dt.data):_.texSubImage3D(qe,Ve,Ke,Mt,Bt,$e,Ne,Ye,At,jt,Dt):E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Ve,Ke,Mt,$e,Ne,At,jt,Dt.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Ve,Ke,Mt,Dt.width,Dt.height,At,Dt.data):_.texSubImage2D(_.TEXTURE_2D,Ve,Ke,Mt,$e,Ne,At,jt,Dt);g.pixelStorei(_.UNPACK_ROW_LENGTH,en),g.pixelStorei(_.UNPACK_IMAGE_HEIGHT,gt),g.pixelStorei(_.UNPACK_SKIP_PIXELS,yn),g.pixelStorei(_.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(_.UNPACK_SKIP_IMAGES,ni),Ve===0&&X.generateMipmaps&&_.generateMipmap(qe),g.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&te.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?te.setTextureCube(E,0):E.isData3DTexture?te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?te.setTexture2DArray(E,0):te.setTexture2D(E,0),g.unbindTexture()},this.resetState=function(){ae=0,ee=0,pe=null,g.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const fd={type:"change"},nh={type:"start"},_m={type:"end"},_a=new al,dd=new Oi,JE=Math.cos(70*P0.DEG2RAD),Yt=new q,Tn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gc=1e-6;class jE extends jx{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new mr,this._lastTargetPosition=new q,this._quat=new mr().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kf,this._sphericalDelta=new kf,this._scale=1,this._panOffset=new q,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new q,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eT.bind(this),this._onPointerDown=QE.bind(this),this._onPointerUp=tT.bind(this),this._onContextMenu=lT.bind(this),this._onMouseWheel=rT.bind(this),this._onKeyDown=sT.bind(this),this._onTouchStart=oT.bind(this),this._onTouchMove=aT.bind(this),this._onMouseDown=nT.bind(this),this._onMouseMove=iT.bind(this),this._interceptControlDown=cT.bind(this),this._interceptControlUp=uT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fd),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Tn:i>Math.PI&&(i-=Tn),r<-Math.PI?r+=Tn:r>Math.PI&&(r-=Tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Yt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_a.origin.copy(this.object.position),_a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_a.direction))<JE?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),_a.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gc||this._lastTargetPosition.distanceToSquared(this.target)>gc?(this.dispatchEvent(fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Tn/60*this.autoRotateSpeed*e:Tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Yt.copy(r).sub(this.target);let s=Yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function QE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_m),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Rt.DOLLY;break;case Gi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}break;case Gi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(nh)}function iT(n){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(n.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_m))}function sT(n){this.enabled!==!1&&this._handleKeyDown(n)}function oT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Rt.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Rt.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(nh)}function aT(n){switch(this._trackPointer(n),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Rt.NONE}}function lT(n){this.enabled!==!1&&n.preventDefault()}function cT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class hT{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;measLine=[null,null];raycaster=new Jx;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new ZE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new W0,this.scene.background=new pt(1053464);const r=t/i,s=80;this.camera=new cl(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new jE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN};const o=new Yx(16777215,.65),a=new qx(16777215,.9);a.position.set(40,60,100),this.scene.add(o,a),this.interferenceGroup=new ss,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new q(e*Math.cos(c),e*Math.sin(c),i))}const o=new ln().setFromPoints(s),a=new Hs({color:t,transparent:!0,opacity:.8});return new wf(o,a)}buildGearMesh(e,t){const i=new ss,r=new Ga,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const o=e.input.faceWidth,a=new eh(r,{depth:o,bevelEnabled:!1,curveSegments:1});a.translate(0,0,-o/2),a.computeVertexNormals();const l=new kx({color:t,metalness:.35,roughness:.55}),c=new Un(a,l);i.add(c);const u=new ex(new nx(a,12),new Hs({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,o/2+.02),base:this.makeCircleLine(e.baseR,2605194,o/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,o/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,o/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.measLine=[null,null],this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}setMeasurementOverlay(e,t,i){const r=e-1,s=this.measLine[r];s&&(s.parent?.remove(s),s.geometry.dispose(),s.material.dispose(),this.measLine[r]=null);const o=e===1?this.gear1:this.gear2;if(!t||t.length<3||!o)return;o.body.geometry.computeBoundingBox();const a=o.body.geometry.boundingBox,c=(a?a.max.z-a.min.z:0)/2+.06,u=new Float32Array(t.length*3);for(let b=0;b<t.length;b++)u[3*b]=t[b].x,u[3*b+1]=t[b].y,u[3*b+2]=c;const f=new ln;f.setAttribute("position",new ei(u,3));const h=!!i&&i.length===t.length;if(h){const b=new Float32Array(t.length*3),m=new pt;for(let p=0;p<t.length;p++)m.setHex(i[p]),b[3*p]=m.r,b[3*p+1]=m.g,b[3*p+2]=m.b;f.setAttribute("color",new ei(b,3))}const d=new Hs({vertexColors:h,color:h?16777215:10134706,transparent:!0,opacity:.95,depthTest:!1}),v=new wf(f,d);v.renderOrder=40,o.group.add(v),this.measLine[r]=v}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(t*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t)}setMeshOverlay(e,t){if(this.clearOverlay(),!e||!this.gear1||!this.gear2)return;const i=a=>t[a],r=a=>{a.geometry.computeBoundingBox();const l=a.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),o=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const a=Math.max(s,o)/2+1,l=(u,f,h)=>{const d=new ln().setFromPoints([new q(u.x,u.y,a),new q(f.x,f.y,a)]);return new Ju(d,new Hs({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new Wa(.7,16,16);this.pitchPoint=new Un(c,new Qs({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,a),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const a=e.alphaPrime,l=Math.sin(a),c=Math.cos(a),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(s,o)/2+1.5,h=new Wa(1,20,20);this.contactMarker=new Un(h,new Qs({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const a of t.contactRegions)for(const l of a){if(l.length<3)continue;const c=new Ga;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new th(c),f=new Qs({color:16723285,transparent:!0,opacity:.5,side:pi,depthTest:!1}),h=new Un(u,f);h.position.z=Math.max(s,o)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const pd=2,fT="spur-gear-lab",Xa="cases";let va=null;function dT(){return va||(va=new Promise((n,e)=>{const t=indexedDB.open(fT,1);t.onupgradeneeded=()=>{const i=t.result;i.objectStoreNames.contains(Xa)||i.createObjectStore(Xa,{keyPath:"id"}).createIndex("updatedAt","updatedAt")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),va)}function ih(n,e){return dT().then(t=>new Promise((i,r)=>{const s=t.transaction(Xa,n),o=e(s.objectStore(Xa));o.onsuccess=()=>i(o.result),o.onerror=()=>r(o.error)}))}async function md(n){await ih("readwrite",e=>e.put({...n,updatedAt:Date.now()}))}async function pT(n){await ih("readwrite",e=>e.delete(n))}async function mT(){return[...await ih("readonly",e=>e.getAll())].sort((e,t)=>t.updatedAt-e.updatedAt)}function gT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function _T(n){return JSON.stringify(n,null,2)}function vT(n){const e=JSON.parse(n);if(!e||e.schemaVersion!==1&&e.schemaVersion!==pd)throw new Error(`不支持的案例版本（需要 schemaVersion=1 或 ${pd}）`);if(!e.gear1||!e.gear2)throw new Error("案例缺少齿轮参数");for(const t of[e.gear1,e.gear2])if(!(t.z>=4)||!(t.module>0)||!(t.alphaDeg>0))throw new Error("案例参数不合法（z≥4, m>0, α>0）");return e.measurements!==void 0&&xT(e.measurements),e}function gd(n,e){if(!Array.isArray(n)||n.length<3)throw new Error(`测量记录损坏：${e} 不是有效点数组`);for(const t of n)if(!t||!Number.isFinite(t.x)||!Number.isFinite(t.y))throw new Error(`测量记录损坏：${e} 含非数值坐标`)}function xT(n){if(!Array.isArray(n))throw new Error("测量数据损坏：measurements 不是数组");for(const e of n){if(!e||typeof e!="object")throw new Error("测量数据损坏：记录不是对象");const t=e;if(typeof t.id!="string"||!t.id)throw new Error("测量记录损坏：缺少 id");if(t.gear!==1&&t.gear!==2)throw new Error(`测量记录 ${t.id}：gear 必须为 1 或 2`);if(typeof t.fingerprint!="string"||!t.fingerprint)throw new Error(`测量记录 ${t.id}：缺少理论轮廓指纹`);const i=t.bound;if(!i||!(i.z>=4)||!(i.module>0)||!(i.alphaDeg>0)||!(i.faceWidth>0))throw new Error(`测量记录 ${t.id}：绑定参数不合法`);if(gd(t.rawPoints,"rawPoints"),gd(t.normalized,"normalized"),!t.deviation||!Number.isFinite(t.deviation.max)||!Number.isFinite(t.deviation.rms))throw new Error(`测量记录 ${t.id}：偏差统计缺失`);if(t.checks!==void 0){if(!Array.isArray(t.checks))throw new Error(`测量记录 ${t.id}：checks 不是数组`);for(const r of t.checks)if(!r||!Number.isFinite(r.overlapArea)||typeof r.fingerprint!="string")throw new Error(`测量记录 ${t.id}：历史检查结论损坏`)}}}function ST(n){const e=new Blob([_T(n)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t;const r=(n.name||"gear-case").replace(/[^\w一-龥-]+/g,"_");i.download=`${r}.json`,i.click(),URL.revokeObjectURL(t)}const MT={class:"app"},yT={class:"panel"},bT={class:"units"},ET=["onClick"],TT=["step"],AT=["step"],wT={class:"two"},RT={key:0,class:"err"},CT={key:1,class:"err"},PT={class:"row"},LT={key:0},DT=["step"],IT={class:"row"},UT=["disabled"],NT=["disabled"],FT=["disabled","min","max"],OT=["disabled"],BT={key:0,class:"report"},zT={class:"row"},VT={class:"row"},HT={class:"row"},kT={class:"row"},GT={class:"row"},WT={class:"row"},XT={class:"samples"},$T={class:"viewport"},qT={class:"readouts"},YT={key:0,class:"dim-grid"},KT={class:"mesh-report"},ZT={key:0,class:"warns"},JT={class:"panel right"},jT={class:"row"},QT={class:"row"},eA={class:"wide filebtn"},tA={key:0,class:"err"},nA={class:"row"},iA={class:"caselist measlist"},rA={class:"ci"},sA={class:"reason"},oA={class:"hist",title:"偏差分布直方图"},aA=["title"],lA={key:0,class:"checks"},cA={class:"ca"},uA=["onClick","disabled","title"],hA=["onClick"],fA={key:0,class:"empty"},dA={key:1,class:"report"},pA={class:"row"},mA={class:"row"},gA={class:"wide filebtn"},_A={class:"caselist"},vA={class:"ci"},xA={class:"ca"},SA=["onClick"],MA=["onClick"],yA={key:0,class:"empty"},bA=Wg({__name:"App",setup(n){const e=nn("mm"),t=as({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Io(),r=Io(),s=Io(),o=as({g1:[],g2:[]});function a(){const K={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*br,faceWidth:t.faceWidth},_={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*br,faceWidth:t.faceWidth};if(o.g1=Yh(K),o.g2=Yh(_),o.g1.length||o.g2.length)return;i.value=qh(K),r.value=qh(_);const O=t.useStandardCenter?i.value.pitchR+r.value.pitchR:t.centerDistance;s.value=Ev({g1:i.value,g2:r.value,centerDistance:O})}const l=Pr({get:()=>ya(t.m,e.value),set:K=>t.m=Zs(K,e.value)}),c=Pr({get:()=>ya(t.faceWidth,e.value),set:K=>t.faceWidth=Zs(K,e.value)}),u=Pr({get:()=>ya(t.centerDistance,e.value),set:K=>t.centerDistance=Zs(K,e.value)});cr(e,()=>{});const f=nn(!0),h=nn(0),d=nn(.25);let v=0;const b=nn(0),m=as({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),p=nn(null),A=Io([]),P=nn(!1);let y=0;async function w(K){if(!i.value||!r.value||!s.value)return;const _=K,O=Ll(i.value,r.value,s.value,_),me=[Bo(i.value.outline,0,0,_)],T=[Bo(r.value.outline,s.value.a,0,O)],g=++y;P.value=!0;try{const I=await jh(me,T);if(g!==y)return;p.value=I.area,A.value=I.regions}finally{g===y&&(P.value=!1)}}const R=nn();let N=null;function M(){!N||!s.value||N.setMeshOverlay(s.value,{...m,contactS:b.value,contactRegions:[A.value]})}yc(()=>{a(),N=new hT(R.value),i.value&&r.value&&s.value&&N.setGears(i.value,r.value,s.value.a);const K=_=>{const O=Math.min(.05,(_-v)/1e3||0);if(v=_,f.value&&i.value&&r.value&&s.value){h.value+=d.value*O;const me=2*Math.PI/i.value.input.z;h.value=(h.value%me+me)%me;const T=(h.value-Kh(s.value,i.value,r.value,0).phi1)*i.value.baseR;b.value=D(T)}if(i.value&&r.value&&s.value){const me=Ll(i.value,r.value,s.value,h.value);N.setAngles(h.value,me),m.contactS=b.value,M()}requestAnimationFrame(K)};requestAnimationFrame(K)});function D(K){if(!s.value)return 0;const _=s.value.actionLine,O=s.value.alphaPrime,me=Math.sin(O),T=Math.cos(O),g=(_.p0.x-s.value.pitchPoint.x)*me+(_.p0.y-s.value.pitchPoint.y)*T,I=(_.p1.x-s.value.pitchPoint.x)*me+(_.p1.y-s.value.pitchPoint.y)*T;return K<g?I-(g-K)%(I-g):K>I?g+(K-I)%(I-g):K}cr(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],()=>{a(),N&&i.value&&r.value&&s.value&&N.setGears(i.value,r.value,s.value.a),h.value=0,b.value=0,p.value=null,A.value=[],nt()}),cr(m,M),cr(b,()=>m.contactS=b.value);function B(){f.value=!1}function $(){f.value=!0}function se(){f.value||!i.value||!r.value||!s.value||(h.value=Kh(s.value,i.value,r.value,b.value).phi1)}const re=nn([]),V=nn(1),Q=nn(""),ae=nn(""),ee=nn(!1),pe=nn(!0),ce=Pr(()=>re.value.map(K=>{const _=K.gear===1?i.value:r.value,O=Wv(K,_);return{rec:K,...O}}));function ve(K){const _=K===1?i.value:r.value;return _?Bu(_):""}function ge(K){const _=K.target,O=_.files?.[0];if(!O)return;const me=new FileReader;me.onload=()=>{try{const T=V.value===1?i.value:r.value;if(!T)throw new Error("当前齿轮参数无效，无法绑定测量");const g=Gv({id:Uv(),text:String(me.result),gear:V.value,name:O.name,target:T,alphaDeg:t.alphaDeg});re.value=[...re.value,g],Q.value="",ae.value=`已导入 ${g.normalized.length} 点（源单位 ${g.sourceUnit}${g.adjustments.reversed?"，原始点序为顺时针已反转":""}），并绑定当前齿轮 ${g.gear} 的理论轮廓指纹。`}catch(T){Q.value=T.message,ae.value=""}},me.readAsText(O),_.value=""}function Pe(K){re.value=re.value.filter(_=>_.id!==K)}async function Be(K){if(ae.value="",f.value){ae.value="请先暂停动画，再在暂停位置做覆盖层布尔检查";return}if(K.status!=="matched"){ae.value=`拒绝参与计算：${K.reason}`;return}if(!i.value||!r.value||!s.value)return;const _=K.rec.gear===1,O=Ll(i.value,r.value,s.value,h.value),me=_?h.value:O,T=_?O:h.value,g=_?0:s.value.a,I=_?s.value.a:0,Z=_?r.value.outline:i.value.outline;ee.value=!0;try{const te=await jh([Bo(K.rec.normalized,g,0,me)],[Bo(Z,I,0,T)]);K.rec.checks.push({at:Date.now(),phi1:h.value,overlapArea:te.area,intersects:te.intersects,fingerprint:K.rec.fingerprint}),ae.value=`覆盖层(齿轮${K.rec.gear}) × 对方理论轮廓：重叠面积 ${te.area.toExponential(3)} mm²，${te.intersects?"局部相交 ❗":"无相交 ✅"}。仅为实测覆盖层对比，不构成啮合认证。`}finally{ee.value=!1}}function rt(K){const _=Math.max(1e-9,.05*t.m),O=Math.min(1,Math.abs(K)/_),me=(Z,te)=>Z+(te-Z)*O;let T,g,I;return K>=0?(T=me(.23,1),g=me(.9,.18),I=me(.42,.33)):(T=me(.23,.3),g=me(.9,.55),I=me(.42,1)),Math.round(T*255)<<16|Math.round(g*255)<<8|Math.round(I*255)}function nt(){if(N)for(const K of[1,2]){const _=ce.value.filter(g=>g.rec.gear===K),O=_[_.length-1];if(!pe.value||!O){N.setMeasurementOverlay(K,null);continue}const me=K===1?i.value:r.value;let T;O.status==="matched"&&me&&(T=O.rec.normalized.map(g=>rt(Rc(g,me.outline)))),N.setMeasurementOverlay(K,O.rec.normalized,T)}}function it(K){const _=K.rec.gear===1?i.value:r.value;return K.status==="matched"&&_?kv(K.rec.normalized.map(O=>Rc(O,_.outline))):K.rec.deviation.histogram}function de(K){return Math.max(1,...K.map(_=>_.count))}cr([ce,pe,i,r],nt);const ue=nn([]),Te=nn("未命名案例"),ke=nn("");async function De(){ue.value=await mT()}yc(De);function C(K){const _=s.value?.a??t.centerDistance;return{schemaVersion:1,id:gT(),name:Te.value,createdAt:Date.now(),updatedAt:Date.now(),note:ke.value,gear1:{z:t.z1,module:t.m,alpha:t.alphaDeg*br,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:t.z2,module:t.m,alpha:t.alphaDeg*br,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:_,unit:e.value,outlines:K&&i.value&&r.value?{gear1:i.value.outline,gear2:r.value.outline}:void 0,measurements:re.value.length?re.value:void 0}}async function F(K){await md(C(K)),await De()}function U(K){ST(C(K))}async function k(K){t.z1=K.gear1.z,t.z2=K.gear2.z,t.m=K.gear1.module,t.alphaDeg=K.gear1.alphaDeg,t.faceWidth=K.gear1.faceWidth,K.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=K.centerDistance),e.value=K.unit||"mm",Te.value=K.name,ke.value=K.note,re.value=K.measurements??[],Q.value="",ae.value="",a(),N&&i.value&&r.value&&s.value&&N.setGears(i.value,r.value,s.value.a),nt()}async function W(K){await pT(K),await De()}function H(K){const _=K.target,O=_.files?.[0];if(!O)return;const me=new FileReader;me.onload=async()=>{try{const T=vT(String(me.result));await md(T),await k(T),await De()}catch(T){alert("导入失败："+T.message)}},me.readAsText(O),_.value=""}const G=Pr(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),fe=Pr(()=>{if(!s.value)return[-30,30];const K=s.value,_=Math.sin(K.alphaPrime),O=Math.cos(K.alphaPrime),me=(K.actionLine.p0.x-K.pitchPoint.x)*_+(K.actionLine.p0.y-K.pitchPoint.y)*O,T=(K.actionLine.p1.x-K.pitchPoint.x)*_+(K.actionLine.p1.y-K.pitchPoint.y)*O;return[Math.floor(me*10)/10,Math.ceil(T*10)/10]});function j(K){return Iv(K,e.value)}function ne(K,_,O=2,me=20){t.z1=K,t.z2=_,t.m=O,t.alphaDeg=me,t.useStandardCenter=!0}return(K,_)=>(It(),Nt("div",MT,[_[74]||(_[74]=ie("header",null,[ie("h1",null,"直齿圆柱齿轮参数化实验室"),ie("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）")],-1)),ie("main",null,[ie("aside",yT,[ie("section",null,[_[28]||(_[28]=ie("h2",null,"显示单位（不改变实际尺寸）",-1)),ie("div",bT,[(It(!0),Nt(sn,null,kr(Object.keys(Bn(wn)),O=>(It(),Nt("button",{key:O,class:ci({active:e.value===O}),onClick:me=>e.value=O},Xe(Bn(wn)[O].label),11,ET))),128))])]),ie("section",null,[_[32]||(_[32]=ie("h2",null,"齿轮参数",-1)),ie("label",null,[_[29]||(_[29]=_t("压力角 α（度） ",-1)),qt(ie("input",{type:"number","onUpdate:modelValue":_[0]||(_[0]=O=>t.alphaDeg=O),min:"1",max:"45",step:"0.5"},null,512),[[si,t.alphaDeg,void 0,{number:!0}]])]),ie("label",null,[_t("模数 m（"+Xe(Bn(wn)[e.value].label)+"） ",1),qt(ie("input",{type:"number","onUpdate:modelValue":_[1]||(_[1]=O=>l.value=O),step:Bn(wn)[e.value].step},null,8,TT),[[si,l.value,void 0,{number:!0}]])]),ie("label",null,[_t("齿宽 b（"+Xe(Bn(wn)[e.value].label)+"） ",1),qt(ie("input",{type:"number","onUpdate:modelValue":_[2]||(_[2]=O=>c.value=O),step:Bn(wn)[e.value].step},null,8,AT),[[si,c.value,void 0,{number:!0}]])]),ie("div",wT,[ie("label",null,[_[30]||(_[30]=_t("齿数 z₁ ",-1)),qt(ie("input",{type:"number","onUpdate:modelValue":_[3]||(_[3]=O=>t.z1=O),min:"4",step:"1"},null,512),[[si,t.z1,void 0,{number:!0}]])]),ie("label",null,[_[31]||(_[31]=_t("齿数 z₂ ",-1)),qt(ie("input",{type:"number","onUpdate:modelValue":_[4]||(_[4]=O=>t.z2=O),min:"4",step:"1"},null,512),[[si,t.z2,void 0,{number:!0}]])])]),o.g1.length?(It(),Nt("div",RT,Xe(o.g1.join("；")),1)):Cn("",!0),o.g2.length?(It(),Nt("div",CT,Xe(o.g2.join("；")),1)):Cn("",!0)]),ie("section",null,[_[34]||(_[34]=ie("h2",null,"中心距",-1)),ie("label",PT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[5]||(_[5]=O=>t.useStandardCenter=O)},null,512),[[nr,t.useStandardCenter]]),_[33]||(_[33]=_t(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?Cn("",!0):(It(),Nt("label",LT,[_t("实际中心距 a（"+Xe(Bn(wn)[e.value].label)+"） ",1),qt(ie("input",{type:"number","onUpdate:modelValue":_[6]||(_[6]=O=>u.value=O),step:Bn(wn)[e.value].step},null,8,DT),[[si,u.value,void 0,{number:!0}]])]))]),ie("section",null,[_[37]||(_[37]=ie("h2",null,"运动 / 检查",-1)),ie("div",IT,[ie("button",{onClick:B,disabled:!f.value},"暂停",8,UT),ie("button",{onClick:$,disabled:f.value},"继续",8,NT)]),ie("label",null,[_[35]||(_[35]=_t("轮1 角速度（rad/s） ",-1)),qt(ie("input",{type:"range","onUpdate:modelValue":_[7]||(_[7]=O=>d.value=O),min:"0",max:"1.5",step:"0.01"},null,512),[[si,d.value,void 0,{number:!0}]])]),ie("label",null,[_[36]||(_[36]=_t("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),qt(ie("input",{type:"range",disabled:f.value,"onUpdate:modelValue":_[8]||(_[8]=O=>b.value=O),min:fe.value[0],max:fe.value[1],step:"0.05",onInput:se},null,40,FT),[[si,b.value,void 0,{number:!0}]])]),ie("button",{class:"wide",onClick:_[9]||(_[9]=O=>w(h.value)),disabled:f.value||P.value},Xe(P.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,OT),p.value!==null?(It(),Nt("div",BT,[_t(" 重叠面积 = "+Xe(p.value.toExponential(3))+" mm² ",1),ie("b",{class:ci(p.value>1e-6?"bad":"good")},Xe(p.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):Cn("",!0)]),ie("section",null,[_[44]||(_[44]=ie("h2",null,"显示选项",-1)),ie("label",zT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[10]||(_[10]=O=>m.showPitchCircle=O)},null,512),[[nr,m.showPitchCircle]]),_[38]||(_[38]=_t(" 节圆/分度圆",-1))]),ie("label",VT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[11]||(_[11]=O=>m.showBaseCircle=O)},null,512),[[nr,m.showBaseCircle]]),_[39]||(_[39]=_t(" 基圆",-1))]),ie("label",HT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[12]||(_[12]=O=>m.showAddendumCircle=O)},null,512),[[nr,m.showAddendumCircle]]),_[40]||(_[40]=_t(" 齿顶圆",-1))]),ie("label",kT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[13]||(_[13]=O=>m.showDedendumCircle=O)},null,512),[[nr,m.showDedendumCircle]]),_[41]||(_[41]=_t(" 齿根圆",-1))]),ie("label",GT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[14]||(_[14]=O=>m.showActionLine=O)},null,512),[[nr,m.showActionLine]]),_[42]||(_[42]=_t(" 啮合线（理论/实际）",-1))]),ie("label",WT,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[15]||(_[15]=O=>m.showContact=O)},null,512),[[nr,m.showContact]]),_[43]||(_[43]=_t(" 接触点",-1))])]),ie("section",null,[_[45]||(_[45]=ie("h2",null,"核对样本",-1)),ie("div",XT,[ie("button",{onClick:_[16]||(_[16]=O=>ne(20,40))},"20/40 标准"),ie("button",{onClick:_[17]||(_[17]=O=>ne(17,17))},"17/17 临界"),ie("button",{onClick:_[18]||(_[18]=O=>ne(16,40))},"16/40 根切"),ie("button",{onClick:_[19]||(_[19]=O=>ne(12,40))},"12/40 极少齿")])])]),ie("section",$T,[ie("div",{ref_key:"host",ref:R,class:"canvas-host"},null,512),ie("div",qT,[G.value?(It(),Nt("div",YT,[ie("table",null,[ie("thead",null,[ie("tr",null,[_[46]||(_[46]=ie("th",null,null,-1)),ie("th",null,"齿轮 1（z₁="+Xe(t.z1)+"）",1),ie("th",null,"齿轮 2（z₂="+Xe(t.z2)+"）",1)])]),ie("tbody",null,[ie("tr",null,[_[47]||(_[47]=ie("td",null,"分度圆直径 d",-1)),ie("td",null,Xe(j(G.value.g1.pitchR*2)),1),ie("td",null,Xe(j(G.value.g2.pitchR*2)),1)]),ie("tr",null,[_[48]||(_[48]=ie("td",null,"基圆直径 d_b",-1)),ie("td",null,Xe(j(G.value.g1.baseR*2)),1),ie("td",null,Xe(j(G.value.g2.baseR*2)),1)]),ie("tr",null,[_[49]||(_[49]=ie("td",null,"齿顶圆 d_a",-1)),ie("td",null,Xe(j(G.value.g1.addendumR*2)),1),ie("td",null,Xe(j(G.value.g2.addendumR*2)),1)]),ie("tr",null,[_[50]||(_[50]=ie("td",null,"齿根圆 d_f",-1)),ie("td",null,Xe(j(G.value.g1.dedendumR*2)),1),ie("td",null,Xe(j(G.value.g2.dedendumR*2)),1)]),ie("tr",null,[_[51]||(_[51]=ie("td",null,"齿距 p = πm",-1)),ie("td",null,Xe(j(G.value.g1.circularPitch)),1),ie("td",null,Xe(j(G.value.g2.circularPitch)),1)]),ie("tr",null,[_[52]||(_[52]=ie("td",null,"基节 p_b",-1)),ie("td",null,Xe(j(G.value.g1.basePitch)),1),ie("td",null,Xe(j(G.value.g2.basePitch)),1)]),ie("tr",null,[_[53]||(_[53]=ie("td",null,"齿顶压力角 α_a",-1)),ie("td",null,Xe((G.value.g1.alphaTip/Bn(br)).toFixed(2))+"°",1),ie("td",null,Xe((G.value.g2.alphaTip/Bn(br)).toFixed(2))+"°",1)]),ie("tr",null,[ie("td",null,"根切风险 (z<"+Xe(G.value.g1.zMinValue.toFixed(1))+")",1),ie("td",{class:ci(G.value.g1.undercut?"bad":"good")},Xe(G.value.g1.undercut?"根切 ❗":"安全"),3),ie("td",{class:ci(G.value.g2.undercut?"bad":"good")},Xe(G.value.g2.undercut?"根切 ❗":"安全"),3)])])]),ie("div",KT,[_[63]||(_[63]=ie("h3",null,"啮合检查",-1)),ie("div",null,[_[54]||(_[54]=_t("标准中心距 a₀：",-1)),ie("b",null,Xe(j(G.value.mesh.a0)),1)]),ie("div",null,[_[55]||(_[55]=_t("实际中心距 a：",-1)),ie("b",null,Xe(j(G.value.mesh.a)),1),_t("（Δa = "+Xe(j(G.value.mesh.deltaA))+"）",1)]),ie("div",null,[_[56]||(_[56]=_t("啮合角 α′：",-1)),ie("b",null,Xe((G.value.mesh.alphaPrime/Bn(br)).toFixed(3))+"°",1)]),ie("div",null,[_[57]||(_[57]=_t("节圆半径 r₁′/r₂′：",-1)),ie("b",null,Xe(j(G.value.mesh.pitchR1))+" / "+Xe(j(G.value.mesh.pitchR2)),1)]),ie("div",null,[_[58]||(_[58]=_t("实际啮合线长度 g_α：",-1)),ie("b",null,Xe(j(G.value.mesh.pathOfContact)),1)]),ie("div",null,[_[59]||(_[59]=_t("重合度 ε_α = g_α/p_b：",-1)),ie("b",{class:ci(G.value.mesh.contactRatio<1?"bad":"good")},Xe(G.value.mesh.contactRatio.toFixed(3)),3)]),ie("div",null,[_[60]||(_[60]=_t("圆周/法向侧隙：",-1)),ie("b",null,Xe(j(G.value.mesh.backlashTangential))+" / "+Xe(j(G.value.mesh.backlashNormal)),1)]),ie("div",null,[_[61]||(_[61]=_t("顶隙 c：",-1)),ie("b",null,Xe(j(G.value.mesh.clearance12)),1)]),ie("div",null,[_[62]||(_[62]=_t("基节一致：",-1)),ie("b",{class:ci(G.value.mesh.basePitchMatch?"good":"bad")},Xe(G.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),G.value.mesh.warnings.length?(It(),Nt("ul",ZT,[(It(!0),Nt(sn,null,kr(G.value.mesh.warnings,(O,me)=>(It(),Nt("li",{key:me},"⚠️ "+Xe(O),1))),128))])):Cn("",!0),_[64]||(_[64]=ie("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):Cn("",!0)])]),ie("aside",JT,[ie("section",null,[_[69]||(_[69]=ie("h2",null,"实测轮廓覆盖层",-1)),_[70]||(_[70]=ie("p",{class:"note"}," 仅用于与理论渐开线轮廓并排对比；不参与理论模型计算，不代表啮合认证， 不扩大模型适用范围（外啮合 · 无变位 · 理想刚性）。 ",-1)),ie("div",jT,[ie("label",QT,[_[66]||(_[66]=_t("绑定到 ",-1)),qt(ie("select",{"onUpdate:modelValue":_[20]||(_[20]=O=>V.value=O)},[..._[65]||(_[65]=[ie("option",{value:1},"齿轮 1",-1),ie("option",{value:2},"齿轮 2",-1)])],512),[[fv,V.value,void 0,{number:!0}]])])]),ie("label",eA,[_[67]||(_[67]=_t("导入测量坐标（JSON/CSV，需声明单位，首尾闭合） ",-1)),ie("input",{type:"file",accept:".json,.csv,.txt,application/json,text/csv,text/plain",onChange:ge,hidden:""},null,32)]),Q.value?(It(),Nt("div",tA,"导入被拒绝："+Xe(Q.value)+"（未写入任何数据）",1)):Cn("",!0),ie("label",nA,[qt(ie("input",{type:"checkbox","onUpdate:modelValue":_[21]||(_[21]=O=>pe.value=O)},null,512),[[nr,pe.value]]),_[68]||(_[68]=_t(" 在视图中显示覆盖层（按偏差着色：红=材料偏多，蓝=偏少）",-1))]),ie("ul",iA,[(It(!0),Nt(sn,null,kr(ce.value,O=>(It(),Nt("li",{key:O.rec.id},[ie("div",rA,[ie("b",null,Xe(O.rec.name),1),ie("span",null,[_t("齿轮 "+Xe(O.rec.gear)+" · "+Xe(O.rec.normalized.length)+" 点 · 源单位 "+Xe(O.rec.sourceUnit),1),O.rec.adjustments.reversed?(It(),Nt(sn,{key:0},[_t(" · 点序已反转")],64)):Cn("",!0)]),ie("span",null,"绑定：z="+Xe(O.rec.bound.z)+" m="+Xe(O.rec.bound.module)+" α="+Xe(O.rec.bound.alphaDeg)+"° · 指纹 "+Xe(O.rec.fingerprint.slice(0,8))+"…",1),ie("span",{class:ci(O.status==="matched"?"good":"bad")},Xe(O.status==="matched"?"✅ 指纹匹配当前基准":"⚠️ 仅历史证据（不参与当前计算）"),3),ie("span",sA,Xe(O.reason),1),ie("span",null," 偏差 max "+Xe(j(O.rec.deviation.max))+" · min "+Xe(j(O.rec.deviation.min))+" · RMS "+Xe(j(O.rec.deviation.rms))+" · 外/内 "+Xe(O.rec.deviation.outside)+"/"+Xe(O.rec.deviation.inside),1),ie("span",oA,[(It(!0),Nt(sn,null,kr(it(O),(me,T)=>(It(),Nt("i",{key:T,style:Ja({height:4+14*me.count/de(it(O))+"px"}),title:`${j(me.lo)} ~ ${j(me.hi)}: ${me.count} 点`},null,12,aA))),128))]),O.rec.checks.length?(It(),Nt("span",lA,[(It(!0),Nt(sn,null,kr(O.rec.checks,(me,T)=>(It(),Nt("span",{key:T},[_t(Xe(new Date(me.at).toLocaleTimeString())+" · φ₁="+Xe(me.phi1.toFixed(3))+" · 重叠 "+Xe(me.overlapArea.toExponential(2))+" mm² · "+Xe(me.intersects?"局部相交 ❗":"无相交")+" ",1),me.fingerprint!==ve(O.rec.gear)?(It(),Nt(sn,{key:0},[_t("（历史结论，基准已变）")],64)):Cn("",!0)]))),128))])):Cn("",!0)]),ie("div",cA,[ie("button",{onClick:me=>Be(O),disabled:f.value||ee.value||O.status!=="matched",title:O.status!=="matched"?"基准已失配，仅作历史证据":"在暂停位置用 Clipper 比较覆盖层与对方理论轮廓"}," 布尔检查 ",8,uA),ie("button",{class:"del",onClick:me=>Pe(O.rec.id)},"删",8,hA)])]))),128)),ce.value.length?Cn("",!0):(It(),Nt("li",fA,"暂无测量数据"))]),ae.value?(It(),Nt("div",dA,Xe(ae.value),1)):Cn("",!0)]),ie("section",null,[_[72]||(_[72]=ie("h2",null,"案例（IndexedDB）",-1)),qt(ie("input",{"onUpdate:modelValue":_[22]||(_[22]=O=>Te.value=O),placeholder:"案例名称"},null,512),[[si,Te.value]]),qt(ie("textarea",{"onUpdate:modelValue":_[23]||(_[23]=O=>ke.value=O),placeholder:"备注（可选）",rows:"2"},null,512),[[si,ke.value]]),ie("div",pA,[ie("button",{onClick:_[24]||(_[24]=O=>F(!0))},"保存（含轮廓）"),ie("button",{onClick:_[25]||(_[25]=O=>F(!1))},"仅参数")]),ie("div",mA,[ie("button",{onClick:_[26]||(_[26]=O=>U(!0))},"导出 JSON+轮廓"),ie("button",{onClick:_[27]||(_[27]=O=>U(!1))},"导出参数")]),ie("label",gA,[_[71]||(_[71]=_t("导入 JSON ",-1)),ie("input",{type:"file",accept:"application/json,.json",onChange:H,hidden:""},null,32)])]),ie("section",null,[_[73]||(_[73]=ie("h2",null,"已存案例",-1)),ie("ul",_A,[(It(!0),Nt(sn,null,kr(ue.value,O=>(It(),Nt("li",{key:O.id},[ie("div",vA,[ie("b",null,Xe(O.name),1),ie("span",null,Xe(O.gear1.z)+"/"+Xe(O.gear2.z)+" · m="+Xe(O.gear1.module)+" · α="+Xe(O.gear1.alphaDeg)+"°"+Xe(O.outlines?" · 含轮廓":"")+Xe(O.measurements?.length?` · 含测量(${O.measurements.length})`:""),1)]),ie("div",xA,[ie("button",{onClick:me=>k(O)},"载入",8,SA),ie("button",{class:"del",onClick:me=>W(O.id)},"删",8,MA)])]))),128)),ue.value.length?Cn("",!0):(It(),Nt("li",yA,"暂无案例"))])])])])]))}});gv(bA).mount("#app");
