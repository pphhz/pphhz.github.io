(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bde8552"],{"3c96":function(e,s,n){},5388:function(e,s,n){"use strict";var i=n("8a83"),t=n.n(i);t.a},"6b2b":function(e,s,n){"use strict";var i=n("f770"),t=n.n(i);t.a},"6f21":function(e,s,n){"use strict";var i=n("b184"),t=n.n(i);t.a},"7e6a":function(e,s,n){"use strict";var i=n("97c2"),t=n.n(i);t.a},"8a83":function(e,s,n){},"95f1":function(e,s,n){"use strict";var i=n("dd8b"),t=n.n(i);t.a},"97c2":function(e,s,n){},b052:function(e,s,n){"use strict";n.r(s);var i=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"htmlcss"},[n("ul",[n("li",[n("css-cursor")],1),n("li",[n("scroll-bar")],1),n("li",[n("ellipsis")],1),n("li",[n("wrap")],1),n("li",[n("background")],1),n("li",[n("less-then12")],1)])])},t=[],o=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"Css-cursor"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("改鼠标形状")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("  "),n("a",{attrs:{href:"https://www.w3school.com.cn/cssref/pr_class_cursor.asp"}},[e._v("详情见W3C（cursor属性）")]),e._v("\n  设置元素的cursor属性,取值有：\n  自定义的url\n  auto\n  crosshair\n  default\n  pointer\n  move\n  e-resize\n  ne-resize\n  nw-resize\n  n-resize\n  se-resize\n  sw-resize\n  s-resize\n  w-resize\n  text\n  wait\n  help\n      ")])])},a=[],r={name:"CssCursor",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},w=r,l=(n("7e6a"),n("2877")),h=Object(l["a"])(w,o,a,!1,null,"1a4a25cc",null),c=h.exports,v=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"scrollbar"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("不想要水平滚动条")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("  利用scrollReveal.js做动效，div从左侧转入，水平方向会多滚动条。\n  1.委曲求全缩小div宽度\n  2.利用overflow-x:hidden则垂直方向会多出滚动条，丑。\n  3.群友给的解决方案——设置滚动条：\n  （在ie和edge上仍然有滚动条，谷歌没有）\n  body,html{\n    width: 100%;\n    scrollbar-width: none;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n    display: none;\n  }\n  }\n  4.设置父元素overflow：hidden，子元素padding，滚动条被挤出去看不到\n    ")])])},p=[],d={name:"ScrollBar",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},u=d,f=(n("95f1"),Object(l["a"])(u,v,p,!1,null,"70c07902",null)),m=f.exports,S=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"ellipsis"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("Ellipsis")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("          我们框架有Ellipsis组件。直接用\n\n1， 设置容器宽度，即当前标签的父标签宽度。当前标签为 块标签。\n2， 文字不换行，强制文本在一行内显示 white-space: nowrap.\n3， 隐藏溢出。溢出不显示。overflow: hidden.\n4， 省略标记：text-overflow: ellipsis\n\n\n注意：overflow: hidden; text-overflow:ellipsis;white-space:nowrap;一定要一起用\n\n1.一定要给容器定义宽度.\n\n2.如果少了overflow: hidden;文字会横向撑到容易的外面\n\n3.如果少了white-space:nowrap;文字会把容器的高度往下撑；\n 即使你定义了高度，省略号也不会出现，多余的文字会被裁切掉\n\n4.如果少了text-overflow:ellipsis;多余的文字会被裁切掉，\n   就相当于你这样定义text-overflow:clip.\n "),n("textarea",{attrs:{cols:"30",rows:"10"}},[e._v('\n     \x3c!-- 展示一行内容 内容显示不下 用省略号代替--\x3e\n    <div style="width:500px ; height: 100px; background-color: red">\n       <p style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden">\n\n          (1) 溢出属性（容器的）\n           overflow:visible/hidden(隐藏)/scroll/auto(自动)/inherit;\n           visible:默认值，内容不会被修剪，会成现在元素框之外；\n           hidden：内容会被修剪，并且其余内容是不可见的；\n           scroll：内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容;\n           auto：如果内容被修剪，则浏览器会显示滚动条，以便查看其他的内容;\n           inherit：规定应该从父元素继承overflow属性的值。\n    </p>\n    </div>\n ')]),e._v("\n作者：FlyTheKite\n链接：https://www.jianshu.com/p/ebe4fc6e1696\n      ")])])},b=[],_={name:"Ellipsis",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},g=_,x=(n("f9eb"),Object(l["a"])(g,S,b,!1,null,"2406b691",null)),k=x.exports,C=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("换行")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("\n 自动换行：word-wrap: break-word; white-space: pre-wrap;\n  ")])])},N=[],y={name:"Wrap",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},z=y,E=(n("6b2b"),Object(l["a"])(z,C,N,!1,null,"15349910",null)),j=E.exports,O=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"background"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("背景全屏")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v('#logo{\n    background: url("../assets/login.jpg");\n    position:fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n    height:100%;\n    min-width: 1000px;\n    z-index:-10;\n    zoom: 1;\n    background-color: #fff;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -webkit-background-size: cover;\n    -o-background-size: cover;\n    background-position: center 0;\n}\n\n   出处：'),n("a",{attrs:{href:"https://www.cnblogs.com/zwq20134/p/11674294.html"}},[e._v("css实现背景图片全屏")]),e._v("\n\n   ")])])},$=[],B={name:"Background",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},T=B,W=(n("6f21"),Object(l["a"])(T,O,$,!1,null,"20ffca8e",null)),J=W.exports,L=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"lessThen12"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("要求字体小于12px时")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("\n     -webkit-transform: scale(0.7);display:inline-block;\n   "),n("textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"}},[e._v('      <div style="margin-top: 20px;">\n        <span style="font-size: 12px;color:#f0ebfe;-webkit-transform: scale(0.7);display:inline-block;letter-spacing: 2px ">选择召唤颗数</span>\n      </div>\n   ')]),e._v("\n  ")])])},q=[],F={name:"LessThen12",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},H=F,K=(n("5388"),Object(l["a"])(H,L,q,!1,null,"1a9c0106",null)),R=K.exports,A={name:"HtmlCss",components:{CssCursor:c,ScrollBar:m,Ellipsis:k,Wrap:j,Background:J,LessThen12:R},data:function(){return{}},methods:{}},D=A,G=(n("e557"),Object(l["a"])(D,i,t,!1,null,"49a1d133",null));s["default"]=G.exports},b184:function(e,s,n){},b860:function(e,s,n){},dd8b:function(e,s,n){},e557:function(e,s,n){"use strict";var i=n("b860"),t=n.n(i);t.a},f770:function(e,s,n){},f9eb:function(e,s,n){"use strict";var i=n("3c96"),t=n.n(i);t.a}}]);
//# sourceMappingURL=chunk-3bde8552.97e2d77d.js.map