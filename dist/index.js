"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(R,s){
var c=require('@stdlib/string-base-trim/dist'),g=require('@stdlib/slice-base-str2slice/dist'),a=require('@stdlib/slice-multi/dist'),t="MultiSlice(",p=/\s*,\s*/,E=/^-?[0-9]+$/;function h(e){var r,u,n,l,i;if(e.substring(0,t.length)!==t||(n=e.length-1,e[n]!==")"))return null;if(e=c(e.substring(t.length,n)),e=e.split(p),n=e.length,n===1&&e[0]==="")return new a;for(r=[],i=0;i<n;i++){if(l=e[i],l[0]==="S"){if(l=e.slice(i,i+3).join(","),u=g(l),u===null)return null;i+=2}else if(l==="null")u=null;else if(E.test(l))u=parseInt(l,10);else return null;r.push(u)}return a.apply(null,r)}s.exports=h
});var o=v();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
