// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==String.prototype.trim,r=String.prototype.trim,t=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,n=e&&""===r.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===r.call("᠎")?function(e){return r.call(e)}:function(e){return function(e,r,t){return e.replace(r,t)}(e,t,"$1")},i="function"==typeof Object.defineProperty?Object.defineProperty:null,a=Object.defineProperty;function o(e){return"number"==typeof e}function u(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+u(i):u(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function p(e){return"string"==typeof e}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,y=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,m=/^(\d+)e/,_=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=y.call(t,E,"$1e"),t=y.call(t,S,"e"),t=y.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=y.call(t,w,"e+0$1"),t=y.call(t,b,"e-0$1"),e.alternate&&(t=y.call(t,v,"$1."),t=y.call(t,m,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function T(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+T(n):T(n)+e}var k=String.fromCharCode,I=isNaN,O=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,a,o,u,l,c;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,l=0;l<e.length;l++)if(p(n=e[l]))o+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,I(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(a)?String(n.arg):k(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=N.exec(e);n;)(r=e.slice(i,N.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=N.lastIndex,n=N.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function P(e){return"string"==typeof e}function R(e){var r,t,n;if(!P(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var C=Object.prototype,M=C.toString,G=C.__defineGetter__,Z=C.__defineSetter__,B=C.__lookupGetter__,J=C.__lookupSetter__,L=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||J.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};function W(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e,r,t){L(e,r,{configurable:!1,enumerable:!1,get:t})}function z(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return U&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty,H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"",Q=Y()?function(e){var r,t,n,i,a;if(null==e)return q.call(e);t=e[K],a=K,r=null!=(i=e)&&D.call(i,a);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)},ee=Number,re=ee.prototype.toString,te=Y();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function ie(e){return z(e)||ne(e)}W(ie,"isPrimitive",z),W(ie,"isObject",ne);var ae=Number.POSITIVE_INFINITY,oe=ee.NEGATIVE_INFINITY,ue=Math.floor;function se(e){return e<ae&&e>oe&&ue(r=e)===r;var r}function le(e){return z(e)&&se(e)}function ce(e){return ne(e)&&se(e.valueOf())}function fe(e){return le(e)||ce(e)}function pe(e){return null===e}function ge(e){return void 0===e}function de(e){return le(e)||pe(e)||ge(e)}function he(){var e,r,t,n;if(0===(e=arguments.length)?(r=null,t=null,n=null):1===e?(r=null,t=arguments[0],n=null):2===e?(r=arguments[0],t=arguments[1],n=null):(r=arguments[0],t=arguments[1],n=arguments[2]),!(this instanceof he))return new he(r,t,n);if(!de(r))throw new TypeError(R("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",r));if(!de(t))throw new TypeError(R("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(!de(n))throw new TypeError(R("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",n));if(0===n)throw new RangeError(R("invalid argument. Third argument cannot be zero. Value: `%s`.",n));return this._start=void 0===r?null:r,this._stop=void 0===t?null:t,this._step=void 0===n?null:n,this}W(fe,"isPrimitive",le),W(fe,"isObject",ce),W(he,"name","Slice"),X(he.prototype,"start",(function(){return this._start})),X(he.prototype,"stop",(function(){return this._stop})),X(he.prototype,"step",(function(){return this._step})),W(he.prototype,"toString",(function(){return"Slice("+this._start+","+this._stop+","+this.step+")"})),W(he.prototype,"toJSON",(function(){return{type:"Slice",data:[this._start,this._stop,this._step]}}));var ye="Slice(",we=/\s*,\s*/,be=/^-?[0-9]+$/;function ve(e){var r,t,i,a,o;if(e.substring(0,ye.length)!==ye)return null;if(")"!==e[i=e.length-1])return null;if(3!==(e=(e=n(e.substring(ye.length,i))).split(we)).length)return null;for(r=[],o=0;o<3;o++){if("null"===(a=e[o]))t=null;else{if(!be.test(a))return null;t=parseInt(a,10)}r.push(t)}return new he(r[0],r[1],r[2])}function me(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;W(me,"REGEXP",_e);var Se=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function Ee(e){return null!==e&&"object"==typeof e}function je(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=_e.exec(n.toString()))return r[1]}return Ee(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}function Te(e){return le(e)||pe(e)||ge(e)||function(e){return e instanceof he||"Slice"===je(e)}(e)}function xe(){var e,r,t,n,i;if(e=arguments.length,!(this instanceof xe)){if(1===e)return new xe(arguments[0]);if(2===e)return new xe(arguments[0],arguments[1]);if(3===e)return new xe(arguments[0],arguments[1],arguments[2]);if(4===e)return new xe(arguments[0],arguments[1],arguments[2],arguments[3]);if(5===e)return new xe(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],i=0;i<e;i++)t.push(arguments[i]);return r=Object.create(xe.prototype),xe.apply(r,t)}for(this._data=[],i=0;i<e;i++){if(!Te(n=arguments[i]))throw new TypeError(R("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",i,n));this._data.push(void 0===n?null:n)}return this}W(Ee,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Se(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ee)),W(xe,"name","MultiSlice"),X(xe.prototype,"ndims",(function(){return this._data.length})),X(xe.prototype,"data",(function(){return this._data.slice()})),W(xe.prototype,"toString",(function(){var e,r,t;for(e=this._data,r=[],t=0;t<e.length;t++)r.push(String(e[t]));return"MultiSlice("+r.join(",")+")"})),W(xe.prototype,"toJSON",(function(){var e,r,t,n;for(e=this._data,r={type:"MultiSlice",data:[]},n=0;n<e.length;n++)t=e[n],r.data.push(t&&"function"==typeof t.toJSON?t.toJSON():t);return r}));var ke="MultiSlice(",Ie=/\s*,\s*/,Oe=/^-?[0-9]+$/;return function(e){var r,t,i,a,o;if(e.substring(0,ke.length)!==ke)return null;if(")"!==e[i=e.length-1])return null;if(1===(i=(e=(e=n(e.substring(ke.length,i))).split(Ie)).length)&&""===e[0])return new xe;for(r=[],o=0;o<i;o++){if("S"===(a=e[o])[0]){if(null===(t=ve(a=e.slice(o,o+3).join(","))))return null;o+=2}else if("null"===a)t=null;else{if(!Oe.test(a))return null;t=parseInt(a,10)}r.push(t)}return function(e){switch(e.length){case 0:return new xe;case 1:return new xe(e[0]);case 2:return new xe(e[0],e[1]);case 3:return new xe(e[0],e[1],e[2]);case 4:return new xe(e[0],e[1],e[2],e[3]);case 5:return new xe(e[0],e[1],e[2],e[3],e[4]);case 6:return new xe(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new xe(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);case 8:return new xe(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]);case 9:return new xe(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]);case 10:return new xe(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9]);default:return xe.apply(null,e)}}(r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).str2multislice=r();
//# sourceMappingURL=index.js.map
