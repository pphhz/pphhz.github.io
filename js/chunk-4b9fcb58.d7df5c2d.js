(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b9fcb58"],{"021e":function(t,e,i){},"1a43":function(t,e,i){"use strict";i("021e")},bb51:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.isShowSubMenu?t._e():i("div",{staticClass:"subMenu",staticStyle:{position:"fixed","margin-top":"40px",width:"100%",height:"30px","line-height":"30px","font-size":"15px","background-color":"rgb(84,155,103)",color:"#fff","text-align":"center"},on:{click:t.handleIsShowSubMenu}},[t._v(" 展开菜单↓ ")]),t.isShowSubMenu?i("div",{staticClass:"subMenu",staticStyle:{position:"fixed","margin-top":"40px",width:"100%",height:"30px","line-height":"30px","font-size":"15px","background-color":"rgb(84,155,103)",color:"#fff","text-align":"center"},on:{click:t.handleIsShowSubMenu}},[t._v(" 收起菜单↑ ")]):t._e(),i("div",{staticClass:"home-middle"},[i("div",{staticClass:"warpper"},[i("router-view")],1)]),t.isShowSubMenu?i("div",{staticClass:"home-left"},t._l(t.dict,(function(e,s){return i("ul",{key:s},[i("router-link",{staticClass:"item",class:{bg:s==t.activeIndex},attrs:{tag:"li",to:e.path}},[i("div",{on:{click:function(e){return t.bgcChange(s)}}},[t._v(t._s(e.discp))])])],1)})),0):t._e(),t._m(0)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-right"},[s("h3",[t._v("平和猴子的兴趣")]),s("p",[t._v("前端")]),s("p",[t._v("美剧英剧日剧等")]),s("p",[t._v("动漫")]),s("p",[t._v("音乐（Reol）")]),s("p",[t._v("画画")]),s("p",[t._v("吉他")]),s("p",[t._v("单机剧情类游戏")]),s("p",[t._v("买基金")]),s("h3",{staticStyle:{"margin-top":"40px"}},[t._v("我画的微信表情包：")]),s("img",{staticStyle:{width:"100px","margin-top":"20px"},attrs:{src:i("e1cc"),alt:""}}),s("h3",{staticStyle:{"margin-top":"40px"}},[t._v("友情链接：（我参与制作）")]),s("p",{staticStyle:{"margin-top":"10px"}},[s("a",{attrs:{href:"https://www.reol.fans/"}},[t._v("Reol粉丝网站")])]),s("p",[s("a",{attrs:{href:"https://reol.work/"}},[t._v("Reol2019生贺网站")])])])}],o=(i("ac1f"),i("466d"),{name:"Home",components:{},data:function(){return{activeIndex:null,isShowAbout:!0,isShowSubMenu:!1,dict:[{path:"/home/htmlCss",discp:"Html、Css📓"},{path:"/home/js",discp:"JavaScript📓"},{path:"/home/buildSite",discp:"搭建网页📜"},{path:"/home/note",discp:"随笔📜"},{path:"/home/interview",discp:"就业面试🙎"},{path:"/home/plugIn",discp:"插件、库💻"},{path:"/home/web",discp:"前端学习网站💻"},{path:"/home/website",discp:"生活干货网站📺"},{path:"/home/tools",discp:"前端小工具🔨"}]}},created:function(){this.isShowSubMenu=!this._isMobile()},methods:{bgcChange:function(t){this.activeIndex=t,this.isShowSubMenu=!this._isMobile()},handleIsShowSubMenu:function(){this.isShowSubMenu=!this.isShowSubMenu},_isMobile:function(){var t=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return null!=t}}}),a=o,c=(i("1a43"),i("2877")),h=Object(c["a"])(a,s,n,!1,null,"9398eee0",null);e["default"]=h.exports}}]);