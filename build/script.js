!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=82)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(41))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(19),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(2),o=n(10),i=n(28);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},function(t,e,n){var r=n(0),o=n(16),i=n(4),c=n(33),a=n(32),u=n(31),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(2),o=n(34),i=n(5),c=n(30),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(0),o=n(27).f,i=n(6),c=n(35),a=n(18),u=n(49),s=n(55);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(29),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),o=n(31);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return"function"==typeof e&&Object(t)instanceof e}},function(t,e,n){var r=n(47),o=n(17);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(0),o=n(18),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0);t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(0),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports={}},function(t,e,n){var r=n(11),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r,o,i=n(25),c=n(56),a=n(57),u=n(16),s=n(58),f=n(37).get,l=n(62),p=n(63),d=RegExp.prototype.exec,v=u("native-string-replace",String.prototype.replace),h=d,g=(r=/a/,o=/b*/g,d.call(r,"a"),d.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),y=a.UNSUPPORTED_Y||a.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(g||x||y||l||p)&&(h=function(t){var e,n,r,o,a,u,l,p=this,b=f(p),m=i(t),S=b.raw;if(S)return S.lastIndex=p.lastIndex,e=h.call(S,m),p.lastIndex=S.lastIndex,e;var w=b.groups,E=y&&p.sticky,O=c.call(p),j=p.source,L=0,k=m;if(E&&(-1===(O=O.replace("y","")).indexOf("g")&&(O+="g"),k=m.slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==m.charAt(p.lastIndex-1))&&(j="(?: "+j+")",k=" "+k,L++),n=new RegExp("^(?:"+j+")",O)),x&&(n=new RegExp("^"+j+"$(?!\\s)",O)),g&&(r=p.lastIndex),o=d.call(E?n:p,k),E?o?(o.input=o.input.slice(L),o[0]=o[0].slice(L),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:g&&o&&(p.lastIndex=p.global?o.index+o[0].length:r),x&&o&&o.length>1&&v.call(o[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&w)for(o.groups=u=s(null),a=0;a<w.length;a++)u[(l=w[a])[0]]=o[l[1]];return o}),t.exports=h},function(t,e,n){var r=n(15);t.exports=function(t){if(r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},function(t,e,n){"use strict";var r=n(12),o=n(24);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){var r=n(2),o=n(42),i=n(28),c=n(13),a=n(30),u=n(4),s=n(34),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(14),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(43),o=n(15);t.exports=function(t){var e=r(t,"string");return o(e)?e:String(e)}},function(t,e,n){var r=n(32);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(44),o=n(1);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(2),o=n(1),i=n(20);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(6),i=n(4),c=n(18),a=n(36),u=n(37),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(u=f(n)).source||(u.source=l.join("string"==typeof e?e:""))),t!==r?(s?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e,n){var r=n(17),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r,o,i,c=n(48),a=n(0),u=n(3),s=n(6),f=n(4),l=n(17),p=n(38),d=n(21),v=a.WeakMap;if(c||l.state){var h=l.state||(l.state=new v),g=h.get,y=h.has,x=h.set;r=function(t,e){if(y.call(h,t))throw new TypeError("Object already initialized");return e.facade=t,x.call(h,t,e),e},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var b=p("state");d[b]=!0,r=function(t,e){if(f(t,b))throw new TypeError("Object already initialized");return e.facade=t,s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(16),o=n(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(4),o=n(13),i=n(52).indexOf,c=n(21);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){"use strict";var r=n(71).forEach,o=n(77)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(3),o=n(15),i=n(46),c=n(9)("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,a=t[c];if(void 0!==a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),i(t,e)}},function(t,e,n){var r,o,i=n(0),c=n(45),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,f=s&&s.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(8);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(3);t.exports=function(t,e){var n,o;if("string"===e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if("string"!==e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(36),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(4),o=n(50),i=n(27),c=n(10);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},function(t,e,n){var r=n(8),o=n(51),i=n(54),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(39),o=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(13),o=n(22),i=n(53),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(11),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(1),o=n(0).RegExp;e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r,o=n(5),i=n(59),c=n(23),a=n(21),u=n(61),s=n(20),f=n(38),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,e;h="undefined"!=typeof document?document.domain&&r?v(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F):v(r);for(var n=c.length;n--;)delete h.prototype[c[n]];return h()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=h(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(2),o=n(10),i=n(5),c=n(60);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(39),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8);t.exports=r("document","documentElement")},function(t,e,n){var r=n(1),o=n(0).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},function(t,e,n){var r=n(1),o=n(0).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},function(t,e,n){"use strict";var r=n(65),o=n(1),i=n(5),c=n(11),a=n(22),u=n(25),s=n(7),f=n(66),l=n(68),p=n(69),d=n(9)("replace"),v=Math.max,h=Math.min,g="$0"==="a".replace(/./,"$0"),y=!!/./[d]&&""===/./[d]("a","$0");r("replace",(function(t,e,n){var r=y?"$":"$0";return[function(t,n){var r=s(this),o=null==t?void 0:t[d];return void 0!==o?o.call(t,r,n):e.call(u(r),t,n)},function(t,o){var s=i(this),d=u(t);if("string"==typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var g=n(e,s,d,o);if(g.done)return g.value}var y="function"==typeof o;y||(o=u(o));var x=s.global;if(x){var b=s.unicode;s.lastIndex=0}for(var m=[];;){var S=p(s,d);if(null===S)break;if(m.push(S),!x)break;""===u(S[0])&&(s.lastIndex=f(d,a(s.lastIndex),b))}for(var w,E="",O=0,j=0;j<m.length;j++){S=m[j];for(var L=u(S[0]),k=v(h(c(S.index),d.length),0),P=[],T=1;T<S.length;T++)P.push(void 0===(w=S[T])?w:String(w));var A=S.groups;if(y){var C=[L].concat(P,k,d);void 0!==A&&C.push(A);var I=u(o.apply(void 0,C))}else I=l(L,d,k,P,A,o);k>=O&&(E+=d.slice(O,k)+I,O=k+L.length)}return E+d.slice(O)}]}),!!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!g||y)},function(t,e,n){"use strict";n(26);var r=n(35),o=n(24),i=n(1),c=n(9),a=n(6),u=c("species"),s=RegExp.prototype;t.exports=function(t,e,n,f){var l=c(t),p=!i((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),d=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[l]=/./[l]),n.exec=function(){return e=!0,null},n[l](""),!e}));if(!p||!d||n){var v=/./[l],h=e(l,""[t],(function(t,e,n,r,i){var c=e.exec;return c===o||c===s.exec?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(s,l,h[1])}f&&a(s[l],"sham",!0)}},function(t,e,n){"use strict";var r=n(67).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(11),o=n(25),i=n(7),c=function(t){return function(e,n){var c,a,u=o(i(e)),s=r(n),f=u.length;return s<0||s>=f?t?"":void 0:(c=u.charCodeAt(s))<55296||c>56319||s+1===f||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):c:t?u.slice(s,s+2):a-56320+(c-55296<<10)+65536}};t.exports={codeAt:c(!1),charAt:c(!0)}},function(t,e,n){var r=n(19),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,u,s,f){var l=n+t.length,p=u.length,d=a;return void 0!==s&&(s=r(s),d=c),i.call(f,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>p){var f=o(a/10);return 0===f?r:f<=p?void 0===u[f-1]?i.charAt(1):u[f-1]+i.charAt(1):r}c=u[a-1]}return void 0===c?"":c}))}},function(t,e,n){var r=n(14),o=n(24);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";var r=n(12),o=n(40);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(72),o=n(29),i=n(19),c=n(22),a=n(74),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,h,g,y){for(var x,b,m=i(v),S=o(m),w=r(h,g,3),E=c(S.length),O=0,j=y||a,L=e?j(v,E):n||p?j(v,0):void 0;E>O;O++)if((d||O in S)&&(b=w(x=S[O],O,m),t))if(e)L[O]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return O;case 2:u.call(L,x)}else switch(t){case 4:return!1;case 7:u.call(L,x)}return l?-1:s||f?f:L}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},function(t,e,n){var r=n(73);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(75);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},function(t,e,n){var r=n(3),o=n(76),i=n(9)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),void 0===e?Array:e}},function(t,e,n){var r=n(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(0),o=n(79),i=n(80),c=n(40),a=n(6),u=function(t){if(t&&t.forEach!==c)try{a(t,"forEach",c)}catch(e){t.forEach=c}};for(var s in o)u(r[s]&&r[s].prototype);u(i)},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(20)("span").classList,o=r&&r.constructor&&r.constructor.prototype;t.exports=o===Object.prototype?void 0:o},function(t,e,n){var r=n(12),o=n(2);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(10).f})},function(t,e,n){"use strict";n.r(e);n(26),n(64),n(70),n(78),n(81);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.btnBlock=document.createElement("div"),this.colorPicker=document.createElement("input"),this.clearSettings=document.createElement("div"),this.scale=localStorage.getItem("scale")||1,this.color=localStorage.getItem("color")||"#ffffff",this.btnBlock.addEventListener("click",(function(t){return e.onScaleChange(t)})),this.clearSettings.addEventListener("click",(function(){return e.resetSettings()})),this.colorPicker.addEventListener("input",(function(t){return e.onColorChange(t)}))}var e,n,o;return e=t,(n=[{key:"onScaleChange",value:function(t){var e=this,n=document.querySelector("body");t&&(this.scale=+t.target.value.replace(/X/g,"")),function t(n){n.childNodes.forEach((function(n){if("#text"===n.nodeName&&n.nodeValue.replace(/\s+/g,"").length>0)if(n.parentNode.getAttribute("data-fz"))n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fz")*e.scale+"px";else{var r=window.getComputedStyle(n.parentNode,null).fontSize;n.parentNode.setAttribute("data-fz",+r.replace(/px/g,"")),n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fz")*e.scale+"px"}else t(n)}))}(n),localStorage.setItem("scale",this.scale)}},{key:"onColorChange",value:function(t){document.querySelector("body").style.backgroundColor=t.target.value,localStorage.setItem("color",t.target.value)}},{key:"loadLocalStorageSettings",value:function(){document.querySelector("body").style.backgroundColor=this.color,this.colorPicker.value=this.color}},{key:"injectStyle",value:function(){var t=document.createElement("style");t.innerHTML="\n        .panel {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            position: fixed;\n            top: 10px;\n            right: 0;\n            border: 1px solid rgba(0,0,0, .2);\n            box-shadow: 0 0 20px rgba(0,0,0, .5);\n            width: 300px;\n            height: 60px;\n            background-color: #fff;\n        }\n        \n        .scale {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            width: 100px;\n            height: 40px;    \n        }\n\n        .scale_btn {\n            display: block;\n            width: 40px;\n            height: 40px;\n            border: 1px solid rgba(0,0,0, .2);\n            border-radius: 4px;\n            font-size: 15px;\n            cursor: pointer;\n            transition: opacity .15s ease;\n        }\n        .scale_btn:hover {            \n            background-color: rgba(0, 0, 0, .2);\n        }\n        \n        .color {\n            width: 40px;\n            height: 40px;\n            cursor: pointer;\n        }  \n        \n        .clear {\n            font-size: 20px;\n            cursor: pointer;\n        }\n        ",document.querySelector("head").appendChild(t)}},{key:"resetSettings",value:function(){localStorage.clear(),this.scale=1,this.color="#ffffff",this.onScaleChange(),this.loadLocalStorageSettings()}},{key:"render",value:function(){this.injectStyle(),this.onScaleChange(),this.loadLocalStorageSettings();var t=document.createElement("input"),e=document.createElement("input"),n=document.createElement("div");n.append(this.btnBlock,this.colorPicker,this.clearSettings),this.clearSettings.innerHTML="&times",this.clearSettings.classList.add("clear"),t.classList.add("scale_btn"),e.classList.add("scale_btn"),this.btnBlock.classList.add("scale"),this.colorPicker.classList.add("color"),t.setAttribute("type","button"),e.setAttribute("type","button"),t.setAttribute("value","1X"),e.setAttribute("value","1.5X"),this.colorPicker.setAttribute("type","color"),this.colorPicker.setAttribute("value","#ffffff"),this.btnBlock.append(t,e),n.classList.add("panel"),document.querySelector("body").append(n)}}])&&r(e.prototype,n),o&&r(e,o),t}();window.addEventListener("DOMContentLoaded",(function(){(new o).render()}))}]);