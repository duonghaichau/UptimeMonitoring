!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register(["./index-legacy.2b9c9eeb.js"],(function(e,r){"use strict";var n,o,a,i,s,u,l,c,d,f,h,g,p,m,v,w,b,y,A,E,P,C,T,N,S=document.createElement("style");return S.innerHTML=".dark .modal-dialog .form-text[data-v-ce86d484],.dark .modal-dialog p[data-v-ce86d484]{color:#b1b8c0}\n",document.head.appendChild(S),{setters:[function(t){n=t.m,o=t.n,a=t.q,i=t.s,s=t.x,u=t.C,l=t.M,c=t._,d=t.r,f=t.o,h=t.c,g=t.a,p=t.h,m=t.t,v=t.i,w=t.d,b=t.w,y=t.v,A=t.y,E=t.f,P=t.g,C=t.e,T=t.F,N=t.z}],execute:function(){var r,S={},k={},I={},M=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];I.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},I.getSymbolTotalCodewords=function(t){return M[t]},I.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},I.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},I.isKanjiModeEnabled=function(){return void 0!==r},I.toSJIS=function(t){return r(t)};var B={};function R(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return r}}}(B),R.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var $=R;function F(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}F.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},F.prototype.get=function(t,e){return this.data[t*this.size+e]},F.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},F.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var L=F,x={};!function(t){var e=I.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),a=[n-7],i=1;i<r-1;i++)a[i]=a[i-1]-o;return a.push(6),a.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,a=0;a<o;a++)for(var i=0;i<o;i++)0===a&&0===i||0===a&&i===o-1||a===o-1&&0===i||r.push([n[a],n[i]]);return r}}(x);var U={},D=I.getSymbolSize;U.getPositions=function(t){var e=D(t);return[[0,0],[e-7,0],[0,e-7]]};var H={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var e=3,r=3,n=40,o=10;function a(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){for(var r=t.size,n=0,o=0,a=0,i=null,s=null,u=0;u<r;u++){o=a=0,i=s=null;for(var l=0;l<r;l++){var c=t.get(u,l);c===i?o++:(o>=5&&(n+=e+(o-5)),i=c,o=1),(c=t.get(l,u))===s?a++:(a>=5&&(n+=e+(a-5)),s=c,a=1)}o>=5&&(n+=e+(o-5)),a>=5&&(n+=e+(a-5))}return n},t.getPenaltyN2=function(t){for(var e=t.size,n=0,o=0;o<e-1;o++)for(var a=0;a<e-1;a++){var i=t.get(o,a)+t.get(o,a+1)+t.get(o+1,a)+t.get(o+1,a+1);4!==i&&0!==i||n++}return n*r},t.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,a=0,i=0;i<e;i++){o=a=0;for(var s=0;s<e;s++)o=o<<1&2047|t.get(i,s),s>=10&&(1488===o||93===o)&&r++,a=a<<1&2047|t.get(s,i),s>=10&&(1488===a||93===a)&&r++}return r*n},t.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,a(t,o,n))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,a=1/0,i=0;i<n;i++){r(i),t.applyMask(i,e);var s=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(i,e),s<a&&(a=s,o=i)}return o}}(H);var Y={},q=B,V=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],_=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Y.getBlocksCount=function(t,e){switch(e){case q.L:return V[4*(t-1)+0];case q.M:return V[4*(t-1)+1];case q.Q:return V[4*(t-1)+2];case q.H:return V[4*(t-1)+3];default:return}},Y.getTotalCodewordsCount=function(t,e){switch(e){case q.L:return _[4*(t-1)+0];case q.M:return _[4*(t-1)+1];case q.Q:return _[4*(t-1)+2];case q.H:return _[4*(t-1)+3];default:return}};var z={},O={},j=new Uint8Array(512),J=new Uint8Array(256);!function(){for(var t=1,e=0;e<255;e++)j[e]=t,J[t]=e,256&(t<<=1)&&(t^=285);for(var r=255;r<512;r++)j[r]=j[r-255]}(),O.log=function(t){if(t<1)throw new Error("log("+t+")");return J[t]},O.exp=function(t){return j[t]},O.mul=function(t,e){return 0===t||0===e?0:j[J[t]+J[e]]},function(t){var e=O;t.mul=function(t,r){for(var n=new Uint8Array(t.length+r.length-1),o=0;o<t.length;o++)for(var a=0;a<r.length;a++)n[o+a]^=e.mul(t[o],r[a]);return n},t.mod=function(t,r){for(var n=new Uint8Array(t);n.length-r.length>=0;){for(var o=n[0],a=0;a<r.length;a++)n[a]^=e.mul(r[a],o);for(var i=0;i<n.length&&0===n[i];)i++;n=n.slice(i)}return n},t.generateECPolynomial=function(r){for(var n=new Uint8Array([1]),o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(z);var K=z;function Q(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Q.prototype.initialize=function(t){this.degree=t,this.genPoly=K.generateECPolynomial(this.degree)},Q.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=K.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){var o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var Z=Q,X={},W={},G={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},tt={},et="[0-9]+",rt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",nt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(rt=rt.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";tt.KANJI=new RegExp(rt,"g"),tt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),tt.BYTE=new RegExp(nt,"g"),tt.NUMERIC=new RegExp(et,"g"),tt.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var ot=new RegExp("^"+rt+"$"),at=new RegExp("^[0-9]+$"),it=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");tt.testKanji=function(t){return ot.test(t)},tt.testNumeric=function(t){return at.test(t)},tt.testAlphanumeric=function(t){return it.test(t)},function(t){var e=G,r=tt;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(n){return r}}}(W),function(t){var e=I,r=Y,n=B,o=W,a=G,i=e.getBCHDigit(7973);function s(t,e){return o.getCharCountIndicator(t,e)+4}function u(t,e){var r=0;return t.forEach((function(t){var n=s(t.mode,e);r+=n+t.getBitsLength()})),r}t.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,i){if(!a.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=o.BYTE);var u=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(i===o.MIXED)return u;var l=u-s(i,t);switch(i){case o.NUMERIC:return Math.floor(l/10*3);case o.ALPHANUMERIC:return Math.floor(l/11*2);case o.KANJI:return Math.floor(l/13);case o.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){var a,i=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(var n=1;n<=40;n++)if(u(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,i);if(0===e.length)return 1;a=e[0]}else a=e;return function(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(a.mode,a.getLength(),i)},t.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-i>=0;)r^=7973<<e.getBCHDigit(r)-i;return t<<12|r}}(X);var st={},ut=I,lt=ut.getBCHDigit(1335);st.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,n=r<<10;ut.getBCHDigit(n)-lt>=0;)n^=1335<<ut.getBCHDigit(n)-lt;return 21522^(r<<10|n)};var ct={},dt=W;function ft(t){this.mode=dt.NUMERIC,this.data=t.toString()}ft.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},ft.prototype.getLength=function(){return this.data.length},ft.prototype.getBitsLength=function(){return ft.getBitsLength(this.data.length)},ft.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var ht=ft,gt=W,pt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function mt(t){this.mode=gt.ALPHANUMERIC,this.data=t}mt.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},mt.prototype.getLength=function(){return this.data.length},mt.prototype.getBitsLength=function(){return mt.getBitsLength(this.data.length)},mt.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*pt.indexOf(this.data[e]);r+=pt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(pt.indexOf(this.data[e]),6)};var vt=mt,wt=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var a=t.charCodeAt(n+1);a>=56320&&a<=57343&&(o=1024*(o-55296)+a-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},bt=W;function yt(t){this.mode=bt.BYTE,"string"==typeof t&&(t=wt(t)),this.data=new Uint8Array(t)}yt.getBitsLength=function(t){return 8*t},yt.prototype.getLength=function(){return this.data.length},yt.prototype.getBitsLength=function(){return yt.getBitsLength(this.data.length)},yt.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var At=yt,Et=W,Pt=I;function Ct(t){this.mode=Et.KANJI,this.data=t}Ct.getBitsLength=function(t){return 13*t},Ct.prototype.getLength=function(){return this.data.length},Ct.prototype.getBitsLength=function(){return Ct.getBitsLength(this.data.length)},Ct.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=Pt.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var Tt=Ct,Nt={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},a={};a[r]=0;var i,s,u,l,c,d,f,h=e.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(u in s=(i=h.pop()).value,l=i.cost,c=t[s]||{})c.hasOwnProperty(u)&&(d=l+c[u],f=a[u],(void 0===a[u]||f>d)&&(a[u]=d,h.push(u,d),o[u]=s));if(void 0!==n&&void 0===a[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(Nt),function(t){var e=W,r=ht,n=vt,o=At,a=Tt,i=tt,s=I,u=Nt.exports;function l(t){return unescape(encodeURIComponent(t)).length}function c(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function d(t){var r,n,o=c(i.NUMERIC,e.NUMERIC,t),a=c(i.ALPHANUMERIC,e.ALPHANUMERIC,t);return s.isKanjiModeEnabled()?(r=c(i.BYTE,e.BYTE,t),n=c(i.KANJI,e.KANJI,t)):(r=c(i.BYTE_KANJI,e.BYTE,t),n=[]),o.concat(a,r,n).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function f(t,i){switch(i){case e.NUMERIC:return r.getBitsLength(t);case e.ALPHANUMERIC:return n.getBitsLength(t);case e.KANJI:return a.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function h(t,i){var u,l=e.getBestModeForData(t);if((u=e.from(i,l))!==e.BYTE&&u.bit<l.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(u)+".\n Suggested mode is: "+e.toString(l));switch(u!==e.KANJI||s.isKanjiModeEnabled()||(u=e.BYTE),u){case e.NUMERIC:return new r(t);case e.ALPHANUMERIC:return new n(t);case e.KANJI:return new a(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(h(e,null)):e.data&&t.push(h(e.data,e.mode)),t}),[])},t.fromString=function(r,n){for(var o=function(t){for(var r=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:l(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:l(o.data)}])}}return r}(d(r,s.isKanjiModeEnabled())),a=function(t,r){for(var n={},o={start:{}},a=["start"],i=0;i<t.length;i++){for(var s=t[i],u=[],l=0;l<s.length;l++){var c=s[l],d=""+i+l;u.push(d),n[d]={node:c,lastCount:0},o[d]={};for(var h=0;h<a.length;h++){var g=a[h];n[g]&&n[g].node.mode===c.mode?(o[g][d]=f(n[g].lastCount+c.length,c.mode)-f(n[g].lastCount,c.mode),n[g].lastCount+=c.length):(n[g]&&(n[g].lastCount=c.length),o[g][d]=f(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,r))}}a=u}for(var p=0;p<a.length;p++)o[a[p]].end=0;return{map:o,table:n}}(o,n),i=u.find_path(a.map,"start","end"),c=[],h=1;h<i.length-1;h++)c.push(a.table[i[h]].node);return t.fromArray(function(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(c))},t.rawSplit=function(e){return t.fromArray(d(e,s.isKanjiModeEnabled()))}}(ct);var St=I,kt=B,It=$,Mt=L,Bt=x,Rt=U,$t=H,Ft=Y,Lt=Z,xt=X,Ut=st,Dt=W,Ht=ct;function Yt(t,e,r){var n,o,a=t.size,i=Ut.getEncodedBits(e,r);for(n=0;n<15;n++)o=1==(i>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(a-15+n,8,o,!0),n<8?t.set(8,a-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(a-8,8,1,!0)}function qt(t,e,r){var n=new It;r.forEach((function(e){n.put(e.mode.bit,4),n.put(e.getLength(),Dt.getCharCountIndicator(e.mode,t)),e.write(n)}));var o=8*(St.getSymbolTotalCodewords(t)-Ft.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var a=(o-n.getLengthInBits())/8,i=0;i<a;i++)n.put(i%2?17:236,8);return function(t,e,r){for(var n=St.getSymbolTotalCodewords(e),o=Ft.getTotalCodewordsCount(e,r),a=n-o,i=Ft.getBlocksCount(e,r),s=i-n%i,u=Math.floor(n/i),l=Math.floor(a/i),c=l+1,d=u-l,f=new Lt(d),h=0,g=new Array(i),p=new Array(i),m=0,v=new Uint8Array(t.buffer),w=0;w<i;w++){var b=w<s?l:c;g[w]=v.slice(h,h+b),p[w]=f.encode(g[w]),h+=b,m=Math.max(m,b)}var y,A,E=new Uint8Array(n),P=0;for(y=0;y<m;y++)for(A=0;A<i;A++)y<g[A].length&&(E[P++]=g[A][y]);for(y=0;y<d;y++)for(A=0;A<i;A++)E[P++]=p[A][y];return E}(n,t,e)}function Vt(t,e,r,n){var o;if(Array.isArray(t))o=Ht.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var a=e;if(!a){var i=Ht.rawSplit(t);a=xt.getBestVersionForData(i,r)}o=Ht.fromString(t,a||40)}var s=xt.getBestVersionForData(o,r);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<s)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+s+".\n")}else e=s;var u=qt(e,r,o),l=St.getSymbolSize(e),c=new Mt(l);return function(t,e){for(var r=t.size,n=Rt.getPositions(e),o=0;o<n.length;o++)for(var a=n[o][0],i=n[o][1],s=-1;s<=7;s++)if(!(a+s<=-1||r<=a+s))for(var u=-1;u<=7;u++)i+u<=-1||r<=i+u||(s>=0&&s<=6&&(0===u||6===u)||u>=0&&u<=6&&(0===s||6===s)||s>=2&&s<=4&&u>=2&&u<=4?t.set(a+s,i+u,!0,!0):t.set(a+s,i+u,!1,!0))}(c,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(c),function(t,e){for(var r=Bt.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],a=r[n][1],i=-2;i<=2;i++)for(var s=-2;s<=2;s++)-2===i||2===i||-2===s||2===s||0===i&&0===s?t.set(o+i,a+s,!0,!0):t.set(o+i,a+s,!1,!0)}(c,e),Yt(c,r,0),e>=7&&function(t,e){for(var r,n,o,a=t.size,i=xt.getEncodedBits(e),s=0;s<18;s++)r=Math.floor(s/3),n=s%3+a-8-3,o=1==(i>>s&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}(c,e),function(t,e){for(var r=t.size,n=-1,o=r-1,a=7,i=0,s=r-1;s>0;s-=2)for(6===s&&s--;;){for(var u=0;u<2;u++)if(!t.isReserved(o,s-u)){var l=!1;i<e.length&&(l=1==(e[i]>>>a&1)),t.set(o,s-u,l),-1==--a&&(i++,a=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(c,u),isNaN(n)&&(n=$t.getBestMask(c,Yt.bind(null,c,r))),$t.applyMask(n,c),Yt(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}k.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,n,o=kt.M;return void 0!==e&&(o=kt.from(e.errorCorrectionLevel,kt.M),r=xt.from(e.version),n=$t.from(e.maskPattern),e.toSJISFunc&&St.setToSJISFunction(e.toSJISFunc)),Vt(t,r,o,n)};var _t={},zt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,a=r.modules.data,i=t.getScale(o,n),s=Math.floor((o+2*n.margin)*i),u=n.margin*i,l=[n.color.light,n.color.dark],c=0;c<s;c++)for(var d=0;d<s;d++){var f=4*(c*s+d),h=n.color.light;if(c>=u&&d>=u&&c<s-u&&d<s-u)h=l[a[Math.floor((c-u)/i)*o+Math.floor((d-u)/i)]?1:0];e[f++]=h.r,e[f++]=h.g,e[f++]=h.b,e[f]=h.a}}}(zt),function(t){var e=zt;t.render=function(t,r,n){var o=n,a=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(a=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);var i=e.getImageWidth(t.modules.size,o),s=a.getContext("2d"),u=s.createImageData(i,i);return e.qrToImageData(u.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(s,a,i),s.putImageData(u,0,0),a},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var a=t.render(e,r,o),i=o.type||"image/png",s=o.rendererOpts||{};return a.toDataURL(i,s.quality)}}(_t);var Ot={},jt=zt;function Jt(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function Kt(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}Ot.render=function(t,e,r){var n=jt.getOptions(e),o=t.modules.size,a=t.modules.data,i=o+2*n.margin,s=n.color.light.a?"<path "+Jt(n.color.light,"fill")+' d="M0 0h'+i+"v"+i+'H0z"/>':"",u="<path "+Jt(n.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,a=!1,i=0,s=0;s<t.length;s++){var u=Math.floor(s%e),l=Math.floor(s/e);u||a||(a=!0),t[s]?(i++,s>0&&u>0&&t[s-1]||(n+=a?Kt("M",u+r,.5+l+r):Kt("m",o,0),o=0,a=!1),u+1<e&&t[s+1]||(n+=Kt("h",i),i=0)):o++}return n}(a,o,n.margin)+'"/>',l='viewBox="0 0 '+i+" "+i+'"',c='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+s+u+"</svg>\n";return"function"==typeof r&&r(null,c),c};var Qt=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Zt=k,Xt=_t,Wt=Ot;function Gt(t,e,r,n,o){var a=[].slice.call(arguments,1),i=a.length,s="function"==typeof a[i-1];if(!s&&!Qt())throw new Error("Callback required as last argument");if(!s){if(i<1)throw new Error("Too few arguments provided");return 1===i?(r=e,e=n=void 0):2!==i||e.getContext||(n=r,r=e,e=void 0),new Promise((function(o,a){try{var i=Zt.create(r,n);o(t(i,e,n))}catch(s){a(s)}}))}if(i<2)throw new Error("Too few arguments provided");2===i?(o=r,r=e,e=n=void 0):3===i&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{var u=Zt.create(r,n);o(null,t(u,e,n))}catch(l){o(l)}}S.create=Zt.create,S.toCanvas=Gt.bind(null,Xt.render),S.toDataURL=Gt.bind(null,Xt.renderToDataURL),S.toString=Gt.bind(null,(function(t,e,r){return Wt.render(t,r)}));var te=["low","medium","quartile","high","L","M","Q","H"],ee=[0,1,2,3,4,5,6,7],re=["alphanumeric","numeric","kanji","byte"],ne=["image/png","image/jpeg","image/webp"],oe=n({props:{version:{type:Number,validator:function(t){return t===Number.parseInt(String(t),10)&&t>=1&&t<=40}},errorCorrectionLevel:{type:String,validator:function(t){return te.includes(t)}},maskPattern:{type:Number,validator:function(t){return ee.includes(t)}},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:function(e){return["dark","light"].every((function(r){return["string","undefined"].includes(t(e[r]))}))},required:!0},type:{type:String,validator:function(t){return ne.includes(t)},required:!0},quality:{type:Number,validator:function(t){return t===Number.parseFloat(String(t))&&t>=0&&t<=1},required:!0},value:{type:[String,Array],required:!0,validator:function(t){return"string"==typeof t||t.every((function(t){var e=t.data,r=t.mode;return"string"==typeof e&&re.includes(r)}))}}},setup:function(t,e){var r=e.attrs,n=e.emit,s=o();return a(t,(function(){var e=t||{},r=e.quality,o=e.value,a=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(e,["quality","value"]);S.toDataURL(o,Object.assign(a,null==r||{renderOptions:{quality:r}})).then((function(t){s.value=t})).catch((function(t){return n("error",t)}))}),{immediate:!0}),function(){return i("img",Object.assign(Object.assign({},r),{src:s.value}))}}}),ae=s(),ie={ref:"modal",class:"modal fade",tabindex:"-1","data-bs-backdrop":"static"},se={class:"modal-dialog"},ue={class:"modal-content"},le={class:"modal-header"},ce={class:"modal-title"},de={key:0,class:"badge bg-primary"},fe={key:1,class:"badge bg-primary"},he=["disabled"],ge={class:"modal-body"},pe={class:"mb-3"},me={key:0,class:"mx-auto text-center",style:{width:"210px"}},ve={key:1,class:"text-break mt-2"},we={key:2,class:"mb-3"},be={for:"current-password",class:"form-label"},ye=["disabled"],Ae={key:5,class:"mt-3"},Ee={for:"basic-url",class:"form-label"},Pe={class:"input-group"},Ce={key:0,class:"modal-footer"},Te=["disabled"],Ne={key:0,class:"spinner-border spinner-border-sm me-1"};var Se=c({components:{Confirm:u,VueQrcode:oe},props:{},data:function(){return{currentPassword:"",processing:!1,uri:null,tokenValid:!1,twoFAStatus:null,token:null,showURI:!1}},mounted:function(){this.modal=new l(this.$refs.modal),this.getStatus()},methods:{show:function(){this.modal.show()},confirmEnableTwoFA:function(){this.$refs.confirmEnableTwoFA.show()},confirmDisableTwoFA:function(){this.$refs.confirmDisableTwoFA.show()},prepare2FA:function(){var t=this;this.processing=!0,this.$root.getSocket().emit("prepare2FA",this.currentPassword,(function(e){t.processing=!1,e.ok?t.uri=e.uri:ae.error(e.msg)}))},save2FA:function(){var t=this;this.processing=!0,this.$root.getSocket().emit("save2FA",this.currentPassword,(function(e){t.processing=!1,e.ok?(t.$root.toastRes(e),t.getStatus(),t.currentPassword="",t.modal.hide()):ae.error(e.msg)}))},disable2FA:function(){var t=this;this.processing=!0,this.$root.getSocket().emit("disable2FA",this.currentPassword,(function(e){t.processing=!1,e.ok?(t.$root.toastRes(e),t.getStatus(),t.currentPassword="",t.modal.hide()):ae.error(e.msg)}))},verifyToken:function(){var t=this;this.$root.getSocket().emit("verifyToken",this.token,this.currentPassword,(function(e){e.ok?t.tokenValid=e.valid:ae.error(e.msg)}))},getStatus:function(){var t=this;this.$root.getSocket().emit("twoFAStatus",(function(e){e.ok?t.twoFAStatus=e.status:ae.error(e.msg)}))}}},[["render",function(t,e,r,n,o,a){var i=d("vue-qrcode"),s=d("Confirm");return f(),h(T,null,[g("form",{onSubmit:e[7]||(e[7]=E((function(){return t.submit&&t.submit.apply(t,arguments)}),["prevent"]))},[g("div",ie,[g("div",se,[g("div",ue,[g("div",le,[g("h5",ce,[p(m(t.$t("Setup 2FA"))+" ",1),1==o.twoFAStatus?(f(),h("span",de,m(t.$t("Active")),1)):v("",!0),0==o.twoFAStatus?(f(),h("span",fe,m(t.$t("Inactive")),1)):v("",!0)]),g("button",{disabled:o.processing,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,8,he)]),g("div",ge,[g("div",pe,[o.uri&&0==o.twoFAStatus?(f(),h("div",me,[(f(),w(i,{key:o.uri,value:o.uri,type:"image/png",quality:1,color:{light:"#ffffffff"}},null,8,["value"])),b(g("button",{type:"button",class:"btn btn-outline-primary btn-sm mt-2",onClick:e[0]||(e[0]=function(t){return o.showURI=!0})},m(t.$t("Show URI")),513),[[y,!o.showURI]])])):v("",!0),o.showURI&&0==o.twoFAStatus?(f(),h("p",ve,m(o.uri),1)):v("",!0),o.uri&&0==o.twoFAStatus?v("",!0):(f(),h("div",we,[g("label",be,m(t.$t("Current Password")),1),b(g("input",{id:"current-password","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.currentPassword=t}),type:"password",class:"form-control",required:""},null,512),[[A,o.currentPassword]])])),null==o.uri&&0==o.twoFAStatus?(f(),h("button",{key:3,class:"btn btn-primary",type:"button",onClick:e[2]||(e[2]=function(t){return a.prepare2FA()})},m(t.$t("Enable 2FA")),1)):v("",!0),1==o.twoFAStatus?(f(),h("button",{key:4,class:"btn btn-danger",type:"button",disabled:o.processing,onClick:e[3]||(e[3]=function(t){return a.confirmDisableTwoFA()})},m(t.$t("Disable 2FA")),9,ye)):v("",!0),o.uri&&0==o.twoFAStatus?(f(),h("div",Ae,[g("label",Ee,m(t.$t("twoFAVerifyLabel")),1),g("div",Pe,[b(g("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return o.token=t}),type:"text",maxlength:"6",class:"form-control"},null,512),[[A,o.token]]),g("button",{class:"btn btn-outline-primary",type:"button",onClick:e[5]||(e[5]=function(t){return a.verifyToken()})},m(t.$t("Verify Token")),1)]),b(g("p",{class:"mt-2",style:{color:"green"}},m(t.$t("tokenValidSettingsMsg")),513),[[y,o.tokenValid]])])):v("",!0)])]),o.uri&&0==o.twoFAStatus?(f(),h("div",Ce,[g("button",{type:"submit",class:"btn btn-primary",disabled:o.processing||0==o.tokenValid,onClick:e[6]||(e[6]=function(t){return a.confirmEnableTwoFA()})},[o.processing?(f(),h("div",Ne)):v("",!0),p(" "+m(t.$t("Save")),1)],8,Te)])):v("",!0)])])],512)],32),P(s,{ref:"confirmEnableTwoFA","btn-style":"btn-danger","yes-text":t.$t("Yes"),"no-text":t.$t("No"),onYes:a.save2FA},{default:C((function(){return[p(m(t.$t("confirmEnableTwoFAMsg")),1)]})),_:1},8,["yes-text","no-text","onYes"]),P(s,{ref:"confirmDisableTwoFA","btn-style":"btn-danger","yes-text":t.$t("Yes"),"no-text":t.$t("No"),onYes:a.disable2FA},{default:C((function(){return[p(m(t.$t("confirmDisableTwoFAMsg")),1)]})),_:1},8,["yes-text","no-text","onYes"])],64)}],["__scopeId","data-v-ce86d484"]]),ke={key:0,class:"my-4"},Ie={class:"my-4 settings-subheading"},Me={class:"mb-3"},Be={for:"current-password",class:"form-label"},Re={class:"mb-3"},$e={for:"new-password",class:"form-label"},Fe={class:"mb-3"},Le={for:"repeat-new-password",class:"form-label"},xe={class:"invalid-feedback"},Ue={class:"btn btn-primary",type:"submit"},De={key:1,class:"mt-5 mb-3"},He={class:"my-4 settings-subheading"},Ye={class:"mb-4"},qe={class:"my-4"},Ve={class:"my-4 settings-subheading"},_e={class:"mb-4"},ze=["innerHTML"],Oe=["innerHTML"],je={class:"mb-3"},Je={for:"current-password2",class:"form-label"};e("default",c({components:{Confirm:u,TwoFADialog:Se},data:function(){return{invalidPassword:!1,password:{currentPassword:"",newPassword:"",repeatNewPassword:""}}},computed:{settings:function(){return this.$parent.$parent.$parent.settings},saveSettings:function(){return this.$parent.$parent.$parent.saveSettings},settingsLoaded:function(){return this.$parent.$parent.$parent.settingsLoaded}},watch:{"password.repeatNewPassword":function(){this.invalidPassword=!1}},methods:{savePassword:function(){var t=this;this.password.newPassword!==this.password.repeatNewPassword?this.invalidPassword=!0:this.$root.getSocket().emit("changePassword",this.password,(function(e){t.$root.toastRes(e),e.ok&&(t.password.currentPassword="",t.password.newPassword="",t.password.repeatNewPassword="")}))},disableAuth:function(){var t=this;this.settings.disableAuth=!0,this.saveSettings((function(){t.password.currentPassword="",t.$root.username=null,t.$root.socket.token="autoLogin"}),this.password.currentPassword)},enableAuth:function(){this.settings.disableAuth=!1,this.saveSettings(),this.$root.storage().removeItem("token"),location.reload()},confirmDisableAuth:function(){this.$refs.confirmDisableAuth.show()}}},[["render",function(t,e,r,n,o,a){var i=d("TwoFADialog"),s=d("Confirm");return f(),h("div",null,[a.settingsLoaded?(f(),h("div",ke,[a.settings.disableAuth?v("",!0):(f(),h(T,{key:0},[g("p",null,[p(m(t.$t("Current User"))+": ",1),g("strong",null,m(t.$root.username),1),a.settings.disableAuth?v("",!0):(f(),h("button",{key:0,id:"logout-btn",class:"btn btn-danger ms-4 me-2 mb-2",onClick:e[0]||(e[0]=function(){var e;return t.$root.logout&&(e=t.$root).logout.apply(e,arguments)})},m(t.$t("Logout")),1))]),g("h5",Ie,m(t.$t("Change Password")),1),g("form",{class:"mb-3",onSubmit:e[4]||(e[4]=E((function(){return a.savePassword&&a.savePassword.apply(a,arguments)}),["prevent"]))},[g("div",Me,[g("label",Be,m(t.$t("Current Password")),1),b(g("input",{id:"current-password","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.password.currentPassword=t}),type:"password",class:"form-control",required:""},null,512),[[A,o.password.currentPassword]])]),g("div",Re,[g("label",$e,m(t.$t("New Password")),1),b(g("input",{id:"new-password","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.password.newPassword=t}),type:"password",class:"form-control",required:""},null,512),[[A,o.password.newPassword]])]),g("div",Fe,[g("label",Le,m(t.$t("Repeat New Password")),1),b(g("input",{id:"repeat-new-password","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.password.repeatNewPassword=t}),type:"password",class:N(["form-control",{"is-invalid":o.invalidPassword}]),required:""},null,2),[[A,o.password.repeatNewPassword]]),g("div",xe,m(t.$t("passwordNotMatchMsg")),1)]),g("div",null,[g("button",Ue,m(t.$t("Update Password")),1)])],32)],64)),a.settings.disableAuth?v("",!0):(f(),h("div",De,[g("h5",He,m(t.$t("Two Factor Authentication")),1),g("div",Ye,[g("button",{class:"btn btn-primary me-2",type:"button",onClick:e[5]||(e[5]=function(e){return t.$refs.TwoFADialog.show()})},m(t.$t("2FA Settings")),1)])])),g("div",qe,[g("h5",Ve,m(t.$t("Advanced")),1),g("div",_e,[a.settings.disableAuth?(f(),h("button",{key:0,id:"enableAuth-btn",class:"btn btn-outline-primary me-2 mb-2",onClick:e[6]||(e[6]=function(){return a.enableAuth&&a.enableAuth.apply(a,arguments)})},m(t.$t("Enable Auth")),1)):v("",!0),a.settings.disableAuth?v("",!0):(f(),h("button",{key:1,id:"disableAuth-btn",class:"btn btn-primary me-2 mb-2",onClick:e[7]||(e[7]=function(){return a.confirmDisableAuth&&a.confirmDisableAuth.apply(a,arguments)})},m(t.$t("Disable Auth")),1))])])])):v("",!0),P(i,{ref:"TwoFADialog"},null,512),P(s,{ref:"confirmDisableAuth","btn-style":"btn-danger","yes-text":t.$t("I understand, please disable"),"no-text":t.$t("Leave"),onYes:a.disableAuth},{default:C((function(){return[g("p",{innerHTML:t.$t("disableauth.message1")},null,8,ze),g("p",{innerHTML:t.$t("disableauth.message2")},null,8,Oe),g("p",null,m(t.$t("Please use this option carefully!")),1),g("div",je,[g("label",Je,m(t.$t("Current Password")),1),b(g("input",{id:"current-password2","onUpdate:modelValue":e[8]||(e[8]=function(t){return o.password.currentPassword=t}),type:"password",class:"form-control",required:""},null,512),[[A,o.password.currentPassword]])])]})),_:1},8,["yes-text","no-text","onYes"])])}]]))}}}))}();
