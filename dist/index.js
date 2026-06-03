"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(R,a){
var c=require('@stdlib/string-base-trim/dist'),f=require('@stdlib/slice-base-str2slice/dist'),g=require('@stdlib/slice-multi/dist'),E=require('@stdlib/slice-base-args2multislice/dist'),t="MultiSlice(",h=/\s*,\s*/,o=/^-?[0-9]+$/;function p(e){var r,n,u,i,l;if(e.substring(0,t.length)!==t||(u=e.length-1,e[u]!==")"))return null;if(e=c(e.substring(t.length,u)),e=e.split(h),u=e.length,u===1&&e[0]==="")return new g;for(r=[],l=0;l<u;l++){if(i=e[l],i[0]==="S"){if(i=e.slice(l,l+3).join(","),n=f(i),n===null)return null;l+=2}else if(i==="null")n=null;else if(o.test(i))n=parseInt(i,10);else return null;r.push(n)}return E(r)}a.exports=p
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
