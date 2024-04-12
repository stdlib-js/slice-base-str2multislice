// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==String.prototype.trim,e=String.prototype.trim;var t=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var n=r&&""===e.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===e.call("᠎")?function(r){return e.call(r)}:function(r){return function(r,e,t){return r.replace(e,t)}(r,t,"$1")},i="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function o(r){return"number"==typeof r}function u(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function s(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+u(i):u(i)+r,n&&(r="-"+r)),r}var l=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=s(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=s(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):l.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,m=/\.0$/,_=/\.0*e/,S=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,S,"$1e"),t=d.call(t,_,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,v,"e+0$1"),t=d.call(t,y,"e-0$1"),r.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,b,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):g.call(t)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var T=String.fromCharCode,k=isNaN,x=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,o,u,l,c,p,g,h,d;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+j(d):j(d)+p)),o+=n.arg||"",u+=1}return o}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){var e,t;if("string"!=typeof r)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var F=Object.prototype,P=F.toString,R=F.__defineGetter__,C=F.__defineSetter__,M=F.__lookupGetter__,G=F.__lookupSetter__;var Z=function(){try{return i({},"x",{}),!0}catch(r){return!1}}()?a:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&C&&C.call(r,e,t.set),r};function B(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r,e,t){Z(r,e,{configurable:!1,enumerable:!1,get:t})}function L(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var D=X()?function(r){var e,t,n,i,a;if(null==r)return z.call(r);t=r[q],a=q,e=null!=(i=r)&&U.call(i,a);try{r[q]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[q]=t:delete r[q],n}:function(r){return z.call(r)},H=Number,K=H.prototype.toString;var Q=X();function rr(r){return"object"==typeof r&&(r instanceof H||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function er(r){return L(r)||rr(r)}B(er,"isPrimitive",L),B(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=H.NEGATIVE_INFINITY,ir=Math.floor;function ar(r){return r<tr&&r>nr&&ir(e=r)===e;var e}function or(r){return L(r)&&ar(r)}function ur(r){return rr(r)&&ar(r.valueOf())}function sr(r){return or(r)||ur(r)}function lr(r){return null===r}function cr(r){return void 0===r}function fr(r){return or(r)||lr(r)||cr(r)}function pr(){var r,e,t,n;if(0===(r=arguments.length)?(e=null,t=null,n=null):1===r?(e=null,t=arguments[0],n=null):2===r?(e=arguments[0],t=arguments[1],n=null):(e=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof pr))return new pr(e,t,n);if(!fr(e))throw new TypeError($("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!fr(t))throw new TypeError($("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!fr(n))throw new TypeError($("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError($("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===e?null:e,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}B(sr,"isPrimitive",or),B(sr,"isObject",ur),B(pr,"name","Slice"),J(pr.prototype,"start",(function(){return this._start})),J(pr.prototype,"stop",(function(){return this._stop})),J(pr.prototype,"step",(function(){return this._step})),B(pr.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),B(pr.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var gr="Slice(",hr=3,dr=/\s*,\s*/,vr=/^-?[0-9]+$/;function yr(r){var e,t,i,a,o;if(r.substring(0,gr.length)!==gr)return null;if(")"!==r[i=r.length-1])return null;if((r=(r=n(r.substring(gr.length,i))).split(dr)).length!==hr)return null;for(e=[],o=0;o<hr;o++){if("null"===(a=r[o]))t=null;else{if(!vr.test(a))return null;t=parseInt(a,10)}e.push(t)}return new pr(e[0],e[1],e[2])}function wr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;B(wr,"REGEXP",br);var mr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function _r(r){return null!==r&&"object"==typeof r}function Sr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return _r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function Er(r){return or(r)||lr(r)||cr(r)||function(r){return r instanceof pr||"Slice"===Sr(r)}(r)}function jr(){var r,e,t,n,i;if(r=arguments.length,!(this instanceof jr)){if(1===r)return new jr(arguments[0]);if(2===r)return new jr(arguments[0],arguments[1]);if(3===r)return new jr(arguments[0],arguments[1],arguments[2]);if(4===r)return new jr(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===r)return new jr(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<r;i++)t.push(arguments[i]);return e=Object.create(jr.prototype),jr.apply(e,t)}for(this._data=[],i=0;i<r;i++){if(!Er(n=arguments[i]))throw new TypeError($("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,String(n)));this._data.push(void 0===n?null:n)}return this}B(_r,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(_r)),B(jr,"name","MultiSlice"),J(jr.prototype,"ndims",(function(){return this._data.length})),J(jr.prototype,"data",(function(){return this._data.slice()})),B(jr.prototype,"toString",(function(){var r,e,t;for(r=this._data,e=[],t=0;t<r.length;t++)e.push(String(r[t]));return"MultiSlice("+e.join(",")+")"})),B(jr.prototype,"toJSON",(function(){var r,e,t,n;for(r=this._data,e={type:"MultiSlice",data:[]},n=0;n<r.length;n++)t=r[n],e.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return e}));var Tr="MultiSlice(",kr=/\s*,\s*/,xr=/^-?[0-9]+$/;function Ir(r){var e,t,i,a,o;if(r.substring(0,11)!==Tr)return null;if(")"!==r[i=r.length-1])return null;if(1===(i=(r=(r=n(r.substring(11,i))).split(kr)).length)&&""===r[0])return new jr;for(e=[],o=0;o<i;o++){if("S"===(a=r[o])[0]){if(null===(t=yr(a=r.slice(o,o+3).join(","))))return null;o+=2}else if("null"===a)t=null;else{if(!xr.test(a))return null;t=parseInt(a,10)}e.push(t)}return function(r){switch(r.length){case 0:return new jr;case 1:return new jr(r[0]);case 2:return new jr(r[0],r[1]);case 3:return new jr(r[0],r[1],r[2]);case 4:return new jr(r[0],r[1],r[2],r[3]);case 5:return new jr(r[0],r[1],r[2],r[3],r[4]);case 6:return new jr(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new jr(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new jr(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new jr(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new jr(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return jr.apply(null,r)}}(e)}export{Ir as default};
//# sourceMappingURL=mod.js.map
