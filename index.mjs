// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-str2slice@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.2-esm/index.mjs";var l="MultiSlice(",n=/\s*,\s*/,r=/^-?[0-9]+$/;function u(u){var m,d,f,j,c;if(u.substring(0,11)!==l)return null;if(")"!==u[f=u.length-1])return null;if(1===(f=(u=(u=s(u.substring(11,f))).split(n)).length)&&""===u[0])return new t;for(m=[],c=0;c<f;c++){if("S"===(j=u[c])[0]){if(j=u.slice(c,c+3).join(","),null===(d=e(j)))return null;c+=2}else if("null"===j)d=null;else{if(!r.test(j))return null;d=parseInt(j,10)}m.push(d)}return i(m)}export{u as default};
//# sourceMappingURL=index.mjs.map
