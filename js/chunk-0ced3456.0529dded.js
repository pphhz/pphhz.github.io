(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ced3456"],{2736:function(t,e,i){"use strict";var s=i("f3bf"),n=i.n(s);n.a},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.isShowSubMenu?t._e():s("div",{staticClass:"subMenu",staticStyle:{"z-index":"-1",position:"fixed","margin-top":"40px",width:"100%",height:"30px","line-height":"30px","font-size":"15px","background-color":"rgb(84,155,103)",color:"#fff","text-align":"center"},on:{click:t.handleIsShowSubMenu}},[t._v(" 展开菜单↓ ")]),t.isShowSubMenu?s("div",{staticClass:"subMenu",staticStyle:{"z-index":"-1",position:"fixed","margin-top":"40px",width:"100%",height:"30px","line-height":"30px","font-size":"15px","background-color":"rgb(84,155,103)",color:"#fff","text-align":"center"},on:{click:t.handleIsShowSubMenu}},[t._v(" 收起菜单↑ ")]):t._e(),s("div",{staticClass:"home-middle",on:{click:t.bgcClose}},[s("div",{staticClass:"warpper"},[s("router-view")],1)]),t.isShowSubMenu?s("div",{staticClass:"home-left"},t._l(t.dict,(function(e,i){return s("ul",{key:i},[s("router-link",{staticClass:"item",class:{bg:i==t.activeIndex},attrs:{tag:"li",to:e.path}},[s("div",{on:{click:function(e){return t.bgcChange(i)}}},[t._v(t._s(e.discp))])])],1)})),0):t._e(),s("div",{staticClass:"home-right"},[s("h3",[t._v("平和猴子的兴趣")]),s("p",[t._v("前端")]),s("p",[t._v("美剧英剧等")]),s("p",[t._v("动漫、音乐（Reol）")]),s("p",[t._v("吉他、画画")]),s("p",[t._v("剧情类游戏")]),s("p",[t._v("买基金、打新债")]),s("h3",{staticStyle:{"margin-top":"30px"}},[t._v("我画的微信表情包：")]),s("img",{staticStyle:{width:"70px","margin-top":"10px"},attrs:{src:i("e1cc"),alt:""}}),s("h3",{staticStyle:{"margin-top":"30px"}},[t._v("友情链接：（我参与制作）")]),t._m(0),t._m(1),t._m(2),s("simple-calendar",{ref:"simpleCalendar"})],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticStyle:{"margin-top":"10px"}},[i("a",{attrs:{href:"https://www.reol.fans/"}},[t._v("Reol粉丝网站")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{attrs:{href:"https://reol.work/"}},[t._v("Reol2019生贺网站")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{attrs:{href:"https://github.com/pphhz/phhz-removeAdsOnCSDN-chrome-plugin"}},[t._v("去CSDN博客页广告浏览器插件")])])}],o=(i("ac1f"),i("466d"),i("11b7")),a={name:"Home",components:{simpleCalendar:o["a"]},data:function(){return{activeIndex:null,isShowAbout:!0,isShowSubMenu:!1,dict:[{path:"/home/htmlCss",discp:"Html、Css📓"},{path:"/home/js",discp:"JavaScript📓"},{path:"/home/buildSite",discp:"搭建网页📜"},{path:"/home/note",discp:"随笔📜"},{path:"/home/interview",discp:"就业面试🙎"},{path:"/home/plugIn",discp:"插件、库💻"},{path:"/home/web",discp:"前端学习网站💻"},{path:"/home/website",discp:"生活干货网站📺"},{path:"/home/tools",discp:"前端小工具🔨"}]}},created:function(){this.isShowSubMenu=!this._isMobile()},methods:{bgcChange:function(t){this.activeIndex=t,this.isShowSubMenu=!this._isMobile()},bgcClose:function(){this.isShowSubMenu=!this._isMobile()},handleIsShowSubMenu:function(){this.isShowSubMenu=!this.isShowSubMenu},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return null!=t}}},c=a,h=(i("2736"),i("2877")),r=Object(h["a"])(c,s,n,!1,null,"5a07abc4",null);e["default"]=r.exports},f3bf:function(t,e,i){}}]);