(function(e){function n(n){for(var r,a,c=n[0],l=n[1],i=n[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(u.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},u=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("a026"),o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("video",{staticClass:"cld-video-player",attrs:{id:"demo-player",controls:"",autoplay:""}})])}],a={name:"App",components:{},mounted:function(){console.log("mounted"),window.addEventListener("load",(function(e){var n=cloudinary.Cloudinary.new({cloud_name:"demo"}),t=n.videoPlayer("demo-player").width(600);t.source("race_road_car")}))}},c=a,l=(t("034f"),t("2877")),i=Object(l["a"])(c,o,u,!1,null,null,null),f=i.exports,p=t("527e"),d=t.n(p);r["default"].use(d.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.020deeeb.js.map