(function(t){function e(e){for(var i,o,r=e[0],s=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&h.push(c[o][0]),c[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},c={app:0},a=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0e87212c":"7c22c71c","chunk-5685f15c":"2190b87b","chunk-5ffccd4e":"b7f666e8","chunk-6f3676c4":"e0df6f85","chunk-b29e78b4":"4cc4ba74","chunk-112103ce":"cfa644a0","chunk-239e3529":"615fe1a7","chunk-45759482":"6c16716c","chunk-56d8c4e9":"2fab019f","chunk-57a14cf0":"d62c94c8","chunk-64175e06":"f2c98cf1","chunk-8bfdbe9a":"d767ec61","chunk-9c7f03de":"cbe02312","chunk-a38d79d8":"a4a0ffbf","chunk-dc654ad6":"4f5c146c"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0e87212c":1,"chunk-5685f15c":1,"chunk-5ffccd4e":1,"chunk-6f3676c4":1,"chunk-b29e78b4":1,"chunk-112103ce":1,"chunk-239e3529":1,"chunk-45759482":1,"chunk-56d8c4e9":1,"chunk-57a14cf0":1,"chunk-64175e06":1,"chunk-8bfdbe9a":1,"chunk-9c7f03de":1,"chunk-a38d79d8":1,"chunk-dc654ad6":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-0e87212c":"96660d1d","chunk-5685f15c":"a7bc8f32","chunk-5ffccd4e":"723ac26e","chunk-6f3676c4":"2e902b70","chunk-b29e78b4":"ceb0a310","chunk-112103ce":"05ba5b1c","chunk-239e3529":"a1319bd2","chunk-45759482":"c46dad53","chunk-56d8c4e9":"0efeb679","chunk-57a14cf0":"3f35439c","chunk-64175e06":"86fb8d28","chunk-8bfdbe9a":"91326166","chunk-9c7f03de":"3f35439c","chunk-a38d79d8":"d3ff0a4d","chunk-dc654ad6":"cc3e5324"}[t]+".css",c=s.p+i,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===c))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===i||u===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var i=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[t],d.parentNode.removeChild(d),n(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var i=c[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise((function(e,n){i=c[t]=[e,n]}));e.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",h.name="ChunkLoadError",h.type=i,h.request=o,n[1](h)}c[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"040e":function(t,e,n){},"11b7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-calendar"},[n("div",{attrs:{id:"calendar"}},[n("div",{staticClass:"month"},[n("ul",[n("li",{staticClass:"arrow",on:{click:function(e){return t.pickPre(t.currentYear,t.currentMonth)}}},[t._v("❮")]),n("li",{staticClass:"year-month",on:{click:function(e){return t.pickYear(t.currentYear,t.currentMonth)}}},[n("span",{staticClass:"choose-year"},[t._v(t._s(t.currentYear))]),n("span",{staticClass:"choose-month"},[t._v(t._s(t.currentMonth)+"月")])]),n("li",{staticClass:"arrow",on:{click:function(e){return t.pickNext(t.currentYear,t.currentMonth)}}},[t._v("❯")])])]),t._m(0),n("ul",{staticClass:"days"},t._l(t.days,(function(e){return n("li",{key:e.day},[e.day.getMonth()+1!=t.currentMonth?n("span",{staticClass:"other-month"},[t._v(t._s(e.day.getDate()))]):n("span",[e.day.getFullYear()==(new Date).getFullYear()&&e.day.getMonth()==(new Date).getMonth()&&e.day.getDate()==(new Date).getDate()?n("span",{staticClass:"active"},[t._v(t._s(e.day.getDate()))]):n("span",[t._v(t._s(e.day.getDate()))])])])})),0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"weekdays"},[n("li",[t._v("一")]),n("li",[t._v("二")]),n("li",[t._v("三")]),n("li",[t._v("四")]),n("li",[t._v("五")]),n("li",{staticStyle:{color:"#333"}},[t._v("六")]),n("li",{staticStyle:{color:"#a44"}},[t._v("日")])])}],c={name:"SimpleCalendar",data:function(){return{currentDay:1,currentMonth:1,currentYear:1970,currentWeek:1,days:[]}},created:function(){this.initData(null)},methods:{initData:function(t){var e;if(t)e=new Date(t);else{var n=new Date,i=new Date(this.formatDate(n.getFullYear(),n.getMonth(),1));i.setDate(35),e=new Date(this.formatDate(i.getFullYear(),i.getMonth()+1,1))}this.currentDay=e.getDate(),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1,this.currentWeek=e.getDay(),0==this.currentWeek&&(this.currentWeek=7);var o=this.formatDate(this.currentYear,this.currentMonth,this.currentDay);this.days.length=0;for(var c=this.currentWeek-1;c>=0;c--){i=new Date(o);i.setDate(i.getDate()-c);var a={};a.day=i,this.days.push(a)}for(c=1;c<=35-this.currentWeek;c++){i=new Date(o);i.setDate(i.getDate()+c);a={};a.day=i,this.days.push(a)}},pickPre:function(t,e){var n=new Date(this.formatDate(t,e,1));n.setDate(0),this.initData(this.formatDate(n.getFullYear(),n.getMonth()+1,1))},pickNext:function(t,e){var n=new Date(this.formatDate(t,e,1));n.setDate(35),this.initData(this.formatDate(n.getFullYear(),n.getMonth()+1,1))},pickYear:function(t,e){alert(t+","+e)},formatDate:function(t,e,n){var i=t,o=e;o<10&&(o="0"+o);var c=n;return c<10&&(c="0"+c),i+"-"+o+"-"+c}}},a=c,r=(n("6554"),n("2877")),s=Object(r["a"])(a,i,o,!1,null,"19d09942",null);e["a"]=s.exports},"3fef":function(t,e,n){},"4e9d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},c=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header"},[i("div",{staticClass:"header-left"},[t.isShowMainMenu&&!t.isMobile?i("div",{staticClass:"pc1"},t._l(t.dict,(function(e,n){return i("ul",{key:n},[i("router-link",{staticClass:"item",class:{bg:n==t.activeIndex},attrs:{tag:"li",to:e.path}},[i("div",{on:{click:function(e){return t.bgcChange(n)}}},[t._v(t._s(e.discp))])])],1)})),0):t._e(),i("router-link",{staticClass:"phone",attrs:{tag:"span",to:"/home"}},[i("svg",{staticClass:"icon",staticStyle:{"margin-left":"15px","margin-bottom":"-5px","margin-top":"7px"},attrs:{t:"1627284808918",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2828",width:"27",height:"27"}},[i("path",{attrs:{d:"M888.149333 302.421333L637.44 111.616a176.059733 176.059733 0 0 0-106.837333-36.010667c-37.717333 0-75.264 11.946667-106.837334 36.010667l-250.88 190.805333c-22.016 16.725333-34.816 42.666667-34.816 70.314667v367.616c0 89.429333 72.533333 161.792 161.792 161.792H761.173333c89.429333 0 161.792-72.533333 161.792-161.792V372.736c0.170667-27.648-12.8-53.589333-34.816-70.314667z m-33.28 437.76c0 51.541333-41.984 93.525333-93.525333 93.525334H299.861333c-51.541333 0-93.525333-41.984-93.525333-93.525334V372.736c0-6.144 2.901333-12.117333 7.850667-15.872l250.88-190.805333c18.944-14.506667 41.642667-22.186667 65.536-22.186667s46.592 7.68 65.536 22.186667l250.88 190.805333c4.949333 3.754667 7.850667 9.728 7.850666 15.872v367.445333z","p-id":"2829",fill:"#78d028"}}),i("path",{attrs:{d:"M530.432 456.021333c-90.794667 0-164.693333 73.898667-164.693333 164.693334v114.517333c0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133333-34.133333v-114.517333c0-53.077333 43.178667-96.426667 96.426667-96.426667s96.426667 43.178667 96.426667 96.426667v114.517333c0 18.773333 15.36 34.133333 34.133333 34.133333s34.133333-15.36 34.133333-34.133333v-114.517333c0-90.794667-73.728-164.693333-164.693333-164.693334z","p-id":"2830",fill:"#78d028"}})])]),!t.isShowMainMenu&&t.isMobile?i("svg",{staticClass:"icon phone",staticStyle:{"margin-top":"7px","margin-left":"15px","margin-bottom":"-5px"},attrs:{t:"1627284340669",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4808",width:"27",height:"27"},on:{click:t.handleIsShowMainMenu}},[i("path",{attrs:{d:"M196.266667 277.333333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-29.866667-38.4-29.866667H196.266667c-21.333333 0-34.133333 17.066667-34.133334 34.133334s12.8 29.866667 34.133334 29.866666zM827.733333 477.866667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 34.133333 34.133334 34.133333h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133333s-17.066667-34.133333-38.4-34.133333zM827.733333 746.666667H196.266667c-17.066667 0-34.133333 12.8-34.133334 34.133333s12.8 29.866667 34.133334 29.866667h635.733333c17.066667 0 34.133333-12.8 34.133333-34.133334s-17.066667-29.866667-38.4-29.866666z",fill:"#78d028","p-id":"4809"}})]):t._e(),t.isShowMainMenu&&t.isMobile?i("svg",{staticClass:"icon phone",staticStyle:{"margin-top":"7px","margin-left":"15px","margin-bottom":"-5px"},attrs:{t:"1627284188128",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3273",width:"27",height:"27"},on:{click:t.handleIsShowMainMenu}},[i("path",{attrs:{d:"M834.77 351.69c-58.72-58.72-136.84-91.07-219.86-91.07H262.82l52.66-45.16c18.61-15.94 20.7-43.93 4.76-62.5-15.94-18.61-43.93-20.74-62.47-4.8L114.15 271.3c-0.53 0.46-1.01 0.96-1.52 1.44-0.41 0.39-0.83 0.76-1.22 1.16-0.64 0.65-1.23 1.33-1.83 2.01-0.37 0.42-0.74 0.84-1.09 1.28-0.55 0.68-1.06 1.39-1.57 2.1-0.35 0.49-0.7 0.99-1.03 1.5-0.45 0.69-0.87 1.39-1.28 2.1-0.34 0.58-0.66 1.17-0.97 1.77-0.35 0.68-0.68 1.37-1 2.08-0.3 0.66-0.57 1.32-0.84 1.99-0.28 0.7-0.54 1.41-0.78 2.12-0.22 0.67-0.43 1.35-0.62 2.04-0.22 0.78-0.42 1.55-0.6 2.34-0.13 0.6-0.25 1.21-0.36 1.83-0.17 0.93-0.32 1.86-0.43 2.8-0.05 0.45-0.09 0.9-0.13 1.36-0.06 0.68-0.16 1.35-0.19 2.04-0.12 3.49 0.18 6.94 0.85 10.31 0.04 0.19 0.07 0.38 0.11 0.57 0.25 1.17 0.55 2.33 0.89 3.48 0.1 0.32 0.19 0.64 0.3 0.96 0.34 1.04 0.71 2.06 1.12 3.07a41.462 41.462 0 0 0 1.83 3.95c0.18 0.35 0.37 0.69 0.57 1.03 0.53 0.94 1.08 1.86 1.67 2.76 0.19 0.29 0.39 0.57 0.59 0.86 0.64 0.92 1.3 1.82 2.01 2.69 0.18 0.22 0.37 0.43 0.55 0.64 0.69 0.82 1.42 1.62 2.17 2.39 0.15 0.15 0.29 0.31 0.44 0.46l143.48 143.44c8.66 8.66 19.98 12.98 31.31 12.98 11.33 0 22.72-4.33 31.38-12.98 17.24-17.31 17.24-45.37-0.07-62.68L250 349.28h364.86c59.37 0 115.2 23.12 157.18 65.1 42.05 42.02 65.21 97.85 65.21 157.25 0 122.63-99.83 222.42-222.46 222.46H266.07c-24.45 0-44.29 19.84-44.29 44.33s19.84 44.33 44.29 44.33h348.84c171.46-0.04 310.97-139.61 310.97-311.11 0-83.08-32.32-161.2-91.11-219.95z",fill:"#78d028","p-id":"3274"}})]):t._e()],1),i("div",{staticClass:"header-right"},[i("ul",{staticClass:"pc"},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"icon-copy",attrs:{"data-clipboard-text":"3045078817"},on:{click:t.copy}},[t._v(" 3045078817 ")]),i("li",{staticClass:"item",on:{click:t.toggle}},[t._v("平和猴子🐧")]),i("li",{staticStyle:{width:"40px",height:"40px"}},[i("a",{attrs:{href:"https://github.com/pphhz/pphhz"}},[i("svg",{staticStyle:{"padding-top":"7px"},attrs:{height:"25",viewBox:"0 0 16 16",version:"1.1",width:"25","aria-hidden":"true"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])])]),t.isShowAbout?t._e():i("svg",{staticClass:"icon phone",staticStyle:{"margin-top":"5px","margin-left":"5px"},attrs:{t:"1627284574772",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1889",width:"27",height:"27"},on:{click:t.handleIsShowAbout}},[i("path",{attrs:{d:"M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32z m0 896C281.6 928 96 742.4 96 512S281.6 96 512 96s416 185.6 416 416-185.6 416-416 416z","p-id":"1890",fill:"#78d028"}}),i("path",{attrs:{d:"M512 416c-25.6 0-48 22.4-48 48v256c0 25.6 22.4 48 48 48s48-22.4 48-48v-256c0-25.6-22.4-48-48-48z","p-id":"1891",fill:"#78d028"}}),i("path",{attrs:{d:"M512 304m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z","p-id":"1892",fill:"#78d028"}})]),t.isShowAbout?i("svg",{staticClass:"icon phone",staticStyle:{"margin-top":"5px","margin-left":"5px"},attrs:{t:"1627284188128",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3273",width:"27",height:"27"},on:{click:t.handleIsShowAbout}},[i("path",{attrs:{d:"M834.77 351.69c-58.72-58.72-136.84-91.07-219.86-91.07H262.82l52.66-45.16c18.61-15.94 20.7-43.93 4.76-62.5-15.94-18.61-43.93-20.74-62.47-4.8L114.15 271.3c-0.53 0.46-1.01 0.96-1.52 1.44-0.41 0.39-0.83 0.76-1.22 1.16-0.64 0.65-1.23 1.33-1.83 2.01-0.37 0.42-0.74 0.84-1.09 1.28-0.55 0.68-1.06 1.39-1.57 2.1-0.35 0.49-0.7 0.99-1.03 1.5-0.45 0.69-0.87 1.39-1.28 2.1-0.34 0.58-0.66 1.17-0.97 1.77-0.35 0.68-0.68 1.37-1 2.08-0.3 0.66-0.57 1.32-0.84 1.99-0.28 0.7-0.54 1.41-0.78 2.12-0.22 0.67-0.43 1.35-0.62 2.04-0.22 0.78-0.42 1.55-0.6 2.34-0.13 0.6-0.25 1.21-0.36 1.83-0.17 0.93-0.32 1.86-0.43 2.8-0.05 0.45-0.09 0.9-0.13 1.36-0.06 0.68-0.16 1.35-0.19 2.04-0.12 3.49 0.18 6.94 0.85 10.31 0.04 0.19 0.07 0.38 0.11 0.57 0.25 1.17 0.55 2.33 0.89 3.48 0.1 0.32 0.19 0.64 0.3 0.96 0.34 1.04 0.71 2.06 1.12 3.07a41.462 41.462 0 0 0 1.83 3.95c0.18 0.35 0.37 0.69 0.57 1.03 0.53 0.94 1.08 1.86 1.67 2.76 0.19 0.29 0.39 0.57 0.59 0.86 0.64 0.92 1.3 1.82 2.01 2.69 0.18 0.22 0.37 0.43 0.55 0.64 0.69 0.82 1.42 1.62 2.17 2.39 0.15 0.15 0.29 0.31 0.44 0.46l143.48 143.44c8.66 8.66 19.98 12.98 31.31 12.98 11.33 0 22.72-4.33 31.38-12.98 17.24-17.31 17.24-45.37-0.07-62.68L250 349.28h364.86c59.37 0 115.2 23.12 157.18 65.1 42.05 42.02 65.21 97.85 65.21 157.25 0 122.63-99.83 222.42-222.46 222.46H266.07c-24.45 0-44.29 19.84-44.29 44.33s19.84 44.33 44.29 44.33h348.84c171.46-0.04 310.97-139.61 310.97-311.11 0-83.08-32.32-161.2-91.11-219.95z",fill:"#78d028","p-id":"3274"}})]):t._e()])]),t.isShowMainMenu&&t.isMobile?i("simple-modal",{ref:"simpleModalLeft",attrs:{position:"left",footer:!1},on:{ok:t.closeModalLeft}},[i("div",{staticClass:"pc1"},t._l(t.dict,(function(e,n){return i("ul",{key:n},[i("router-link",{staticClass:"item",class:{bg:n==t.activeIndex},attrs:{tag:"li",to:e.path}},[i("div",{on:{click:function(e){return t.bgcChange(n)}}},[t._v(t._s(e.discp))])])],1)})),0)]):t._e(),t.isShowAbout?i("simple-modal",{ref:"simpleModalRight",attrs:{position:"right",footer:!1},on:{ok:t.closeModalRight}},[i("div",{staticClass:"home-right"},[i("h3",[t._v("平和猴子的兴趣")]),i("p",[t._v("前端")]),i("p",[t._v("美剧英剧等")]),i("p",[t._v("动漫、音乐（Reol）")]),i("p",[t._v("吉他、画画")]),i("p",[t._v("剧情类游戏")]),i("p",[t._v("买基金、打新债")]),i("h3",{staticStyle:{"margin-top":"30px"}},[t._v("我画的微信表情包：")]),i("img",{staticStyle:{width:"70px","margin-top":"10px"},attrs:{src:n("e1cc"),alt:""}}),i("h3",{staticStyle:{"margin-top":"30px"}},[t._v("友情链接：（我参与制作）")]),i("p",{staticStyle:{"margin-top":"10px"}},[i("a",{attrs:{href:"https://www.reol.fans/"}},[t._v("Reol粉丝网站")])]),i("p",[i("a",{attrs:{href:"https://reol.work/"}},[t._v("Reol2019生贺网站")])]),i("p",[i("a",{attrs:{href:"https://github.com/pphhz/phhz-removeAdsOnCSDN-chrome-plugin"}},[t._v("去CSDN博客页广告浏览器插件")])]),i("simple-calendar",{ref:"simpleCalendar"})],1)]):t._e()],1)},r=[],s=(n("ac1f"),n("466d"),n("11b7")),l=n("b311"),u=n.n(l),h=n("fa7d"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"simple-modal"},[n("div",{staticClass:"background",on:{click:t.close}}),n("div",{class:t.position+" wrapper",style:t.modalStyle},[t._t("default"),t.footer?n("template",{slot:"footer"}):t._e()],2)])},p=[],f={name:"SimpleModal",data:function(){return{visible:!1}},props:{position:{type:String,default:"center",required:!1},footer:{type:Boolean,default:!0,required:!1},modalStyle:{type:Object,default:function(){},required:!1}},created:function(){},methods:{close:function(){this.visible=!1,this.$emit("ok")},show:function(){this.visible=!0}}},m=f,v=(n("efc7"),n("2877")),g=Object(v["a"])(m,d,p,!1,null,"ec06de68",null),b=g.exports,w={name:"Header",components:{simpleCalendar:s["a"],SimpleModal:b},data:function(){return{show:!1,isShowLogin:!1,isShowMainMenu:!1,isMobile:!1,isShowAbout:!1,activeIndex:null,dict:[{path:"/home",discp:"主页🏠"},{path:"/life",discp:"我的画🎨"},{path:"/Guitar",discp:"吉他🎸"},{path:"/support",discp:"支持我💰"},{path:"/about",discp:"关于❔"}]}},created:function(){this.isMobile=this._isMobile(),this.isShowMainMenu=!this._isMobile()},methods:{copy:function(){var t=new u.a(".icon-copy");t.on("success",(function(e){Object(h["a"])("复制成功"),t.destroy()})),t.on("error",(function(e){Object(h["a"])("不支持复制,该浏览器不支持自动复制"),t.destroy()}))},bgcChange:function(t){this.activeIndex=t,this.isShowMainMenu=!this.isMobile},toggle:function(){this.show=!this.show},handleIsShowMainMenu:function(t){var e=this;this.isShowMainMenu=!this.isShowMainMenu,this.isShowAbout=!1,this.$nextTick((function(){e.isShowMainMenu&&e.$refs.simpleModalLeft.show()}))},handleIsShowAbout:function(t){var e=this;this.isShowAbout=!this.isShowAbout,this.isShowMainMenu=!1,this.$nextTick((function(){e.isShowAbout&&e.$refs.simpleModalRight.show()}))},closeModalLeft:function(){this.isShowMainMenu=!1},closeModalRight:function(){this.isShowAbout=!1},changeIsShowLogin:function(){this.isShowLogin=!0},queryFunction:function(){this.isShowLogin=!1},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return null!=t}}},y=w,k=(n("c80c"),Object(v["a"])(y,a,r,!1,null,"61e2dee9",null)),S=k.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.goTopShow,expression:"goTopShow"}],staticClass:"footer-right"},[n("div",{staticStyle:{position:"relative",cursor:"default",width:"100%",height:"100%"},on:{click:t.goTop}},[n("span",{staticStyle:{color:"whitesmoke",position:"absolute",left:"16px",top:"15px"}},[t._v("^")])])])])},_=[],x={name:"Footer",components:{},data:function(){return{scrollTop:"",goTopShow:!1}},watch:{scrollTop:function(t){this.scrollTop>500?this.goTopShow=!0:this.goTopShow=!1}},methods:{handleScroll:function(){this.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,this.scrollTop>500&&(this.goTopShow=!0)},goTop:function(){var t=null,e=this;cancelAnimationFrame(t),t=requestAnimationFrame((function n(){e.scrollTop>0?(e.scrollTop-=250,document.body.scrollTop=document.documentElement.scrollTop=e.scrollTop,t=requestAnimationFrame(n)):(cancelAnimationFrame(t),e.goTopShow=!1)}))}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},C=x,D=(n("e513"),Object(v["a"])(C,M,_,!1,null,"7d8c35e0",null)),T=D.exports,A={name:"App",components:{Header:S,Footer:T},mounted:function(){document.getElementById("app").style.display="block",document.getElementById("appLoading").style.display="none"}},E=A,O=(n("5c0b"),Object(v["a"])(E,o,c,!1,null,null,null)),L=O.exports,j=(n("d3b7"),n("8c4f"));i["a"].use(j["a"]);var I=function(t){n.e("chunk-239e3529").then(n.bind(null,"bb51")).then((function(e){return t(e)}))},P=function(t){n.e("chunk-112103ce").then(n.bind(null,"0845")).then((function(e){return t(e)}))},B=function(t){n.e("chunk-dc654ad6").then(n.bind(null,"069c")).then((function(e){return t(e)}))},H=function(t){n.e("chunk-45759482").then(n.bind(null,"f820")).then((function(e){return t(e)}))},z=function(t){n.e("chunk-56d8c4e9").then(n.bind(null,"1deb")).then((function(e){return t(e)}))},F=function(t){Promise.all([n.e("chunk-0e87212c"),n.e("chunk-5685f15c")]).then(n.bind(null,"b052")).then((function(e){return t(e)}))},Y=function(t){Promise.all([n.e("chunk-0e87212c"),n.e("chunk-b29e78b4")]).then(n.bind(null,"34f4")).then((function(e){return t(e)}))},N=function(t){n.e("chunk-57a14cf0").then(n.bind(null,"3f9e")).then((function(e){return t(e)}))},$=function(t){n.e("chunk-a38d79d8").then(n.bind(null,"b4c9")).then((function(e){return t(e)}))},W=function(t){Promise.all([n.e("chunk-0e87212c"),n.e("chunk-6f3676c4")]).then(n.bind(null,"4b41")).then((function(e){return t(e)}))},q=function(t){n.e("chunk-8bfdbe9a").then(n.bind(null,"71c3")).then((function(e){return t(e)}))},R=function(t){n.e("chunk-64175e06").then(n.bind(null,"cbb9")).then((function(e){return t(e)}))},G=function(t){n.e("chunk-9c7f03de").then(n.bind(null,"ce11")).then((function(e){return t(e)}))},J=function(t){Promise.all([n.e("chunk-0e87212c"),n.e("chunk-5ffccd4e")]).then(n.bind(null,"ec2d")).then((function(e){return t(e)}))},V=[{path:"/",redirect:"/home/htmlCss"},{path:"/home",redirect:"/home/htmlCss"},{path:"/Home",component:I,children:[{path:"htmlCss",component:F},{path:"js",component:Y},{path:"web",component:N},{path:"plugIn",component:$},{path:"buildSite",component:W},{path:"interview",component:q},{path:"note",component:R},{path:"website",component:G},{path:"tools",component:J}]},{path:"/Support",component:z},{path:"/Life",component:P},{path:"/Guitar",component:B},{path:"/About",component:H}],Q=new j["a"]({routes:V}),U=Q,X=n("2f62"),K={isShow:!1},Z=n("ade3"),tt="SET_ISSHOW",et=Object(Z["a"])({},tt,(function(t,e){t.isShow=e})),nt={setToggleShow:function(t,e){var n=t.commit;n(tt,e)}},it={isShow:function(t){return t.isShow}};i["a"].use(X["a"]);var ot=new X["a"].Store({state:K,mutations:et,actions:nt,getters:it}),ct=n("caf9");i["a"].config.productionTip=!1,i["a"].use(ct["a"]),new i["a"]({router:U,store:ot,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},6554:function(t,e,n){"use strict";var i=n("040e"),o=n.n(i);o.a},8391:function(t,e,n){},"9c0c":function(t,e,n){},c80c:function(t,e,n){"use strict";var i=n("4e9d"),o=n.n(i);o.a},e1cc:function(t,e,n){t.exports=n.p+"img/qrCode.898f1c7b.jpg"},e513:function(t,e,n){"use strict";var i=n("3fef"),o=n.n(i);o.a},efc7:function(t,e,n){"use strict";var i=n("8391"),o=n.n(i);o.a},fa7d:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("4de4");function i(t){var e,n,i;e=150,n=40;i="rgb(110,184,72)";var o,c;o=document.body.offsetWidth,c=document.body.offsetHeight;var a=document.createElement("div");a.setAttribute("id","alertbgDiv"),a.style.position="fixed",a.style.top="10%",a.style.background="rgba(43,59,27,0.6)",a.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75",a.style.opacity="0.6",a.style.width=o+"px",a.style.height=c+"px",a.style.borderRadius="10px",a.style.zIndex="10000",document.body.appendChild(a);var r=document.createElement("div");r.setAttribute("id","alertmsgDiv"),r.setAttribute("align","center"),r.style.background="rgba(74,94,64,0.6)",r.style.border="1px solid "+i,r.style.position="fixed",r.style.left="50%",r.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif",r.style.top="10%",r.style.left="50%",r.style.borderRadius="10px",r.style.transform="translateX(-50%)",r.style.width=e+"px",r.style.height=n+"px",r.style.color="white",r.style.textAlign="center",r.style.lineHeight="25px",r.style.zIndex="10001",document.body.appendChild(r);var s=document.createElement("p");s.setAttribute("id","msgTxt"),s.style.position="absolute",s.style.top="50%",s.style.left="50%",s.style.transform="translate(-50%,-50%)",s.innerHTML=t,document.getElementById("alertmsgDiv").appendChild(s),window.setTimeout((function(){document.body.removeChild(document.getElementById("alertmsgDiv"))}),1e3)}}});