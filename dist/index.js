"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(R,a){
var c=require('@stdlib/string-base-trim/dist'),f=require('@stdlib/slice-base-str2slice/dist'),g=require('@stdlib/slice-multi/dist'),E=require('@stdlib/slice-base-args2multislice/dist'),t="MultiSlice(",h=/\s*,\s*/,o=/^-?[0-9]+$/;function p(e){var r,i,n,l,u;if(e.substring(0,t.length)!==t||(n=e.length-1,e[n]!==")"))return null;if(e=c(e.substring(t.length,n)),e=e.split(h),n=e.length,n===1&&e[0]==="")return new g;for(r=[],u=0;u<n;u++){if(l=e[u],l[0]==="S"){if(l=e.slice(u,u+3).join(","),i=f(l),i===null)return null;u+=2}else if(l==="null")i=null;else if(o.test(l))i=parseInt(l,10);else return null;r.push(i)}return E(r)}a.exports=p
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
