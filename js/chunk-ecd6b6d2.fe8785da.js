(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecd6b6d2"],{"0f69":function(e,s,n){},"194a":function(e,s,n){"use strict";var i=n("f626"),t=n.n(i);t.a},3091:function(e,s,n){},"46e5":function(e,s,n){},"52ee":function(e,s,n){"use strict";var i=n("8e8a"),t=n.n(i);t.a},"6b2b":function(e,s,n){"use strict";var i=n("f770"),t=n.n(i);t.a},"7b89":function(e,s,n){},"7e6a":function(e,s,n){"use strict";var i=n("97c2"),t=n.n(i);t.a},"8e8a":function(e,s,n){},"97c2":function(e,s,n){},"9cdc":function(e,s,n){"use strict";var i=n("3091"),t=n.n(i);t.a},b052:function(e,s,n){"use strict";n.r(s);var i=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"htmlcss"},[n("ul",[n("li",[n("css-cursor")],1),n("li",[n("scroll-bar")],1),n("li",[n("ellipsis")],1),n("li",[n("wrap")],1),n("li",[n("background")],1),n("li",[n("less-then12")],1),n("li",[n("sticky")],1),n("li",[n("tags")],1),n("li",[n("vh-calc")],1)])])},t=[],o=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"Css-cursor"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("改鼠标形状")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("  "),n("a",{attrs:{href:"https://www.w3school.com.cn/cssref/pr_class_cursor.asp"}},[e._v("详情见W3C（cursor属性）")]),e._v("\n  设置元素的cursor属性,取值有：\n  自定义的url\n  auto\n  crosshair\n  default\n  pointer\n  move\n  e-resize\n  ne-resize\n  nw-resize\n  n-resize\n  se-resize\n  sw-resize\n  s-resize\n  w-resize\n  text\n  wait\n  help\n      ")])])},a=[],r={name:"CssCursor",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},c=r,h=(n("7e6a"),n("2877")),l=Object(h["a"])(c,o,a,!1,null,"1a4a25cc",null),w=l.exports,v=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"scrollbar"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("滚动条")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("一、不想要水平滚动条：\n  利用scrollReveal.js做动效，div从左侧转入，水平方向会多滚动条。\n  1.委曲求全缩小div宽度\n  2.利用overflow-x:hidden则垂直方向会多出滚动条，丑。\n  3.群友给的解决方案——设置滚动条：\n  （在ie和edge上仍然有滚动条，谷歌没有）\n  body,html{\n    width: 100%;\n    scrollbar-width: none;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n    display: none;\n  }\n  }\n  4.设置父元素overflow：hidden，子元素padding，滚动条被挤出去看不到\n\n\n\n二、想要垂直滚动条\n    &::-webkit-scrollbar {\n        width: 3px;\n        height: 13px;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        border-radius: 5px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n        background-color: #ccc;\n        background-clip: padding-box;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        border-radius: 5px;\n        min-height: 28px;\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n        background-color: #ccc;\n        -webkit-border-radius: 5px;\n        -moz-border-radius: 5px;\n        border-radius: 5px;\n    }\n    ")])])},p=[],d={name:"ScrollBar",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},u=d,m=(n("52ee"),Object(h["a"])(u,v,p,!1,null,"f09dd9a0",null)),f=m.exports,S=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"ellipsis"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("Ellipsis")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],ref:"ellipsis",attrs:{value:e.content,"code-editor-style":{height:"300px"},"is-show-copy":!0,"line-numbers":!0}})],1)},b=[],g=n("d7df"),x={name:"Ellipsis",components:{SimpleCodeEditor:g["a"]},data:function(){return{isShow:!1,content:"\n我们框架有Ellipsis组件。直接用\n\n1， 设置容器宽度，即当前标签的父标签宽度。当前标签为 块标签。\n2， 文字不换行，强制文本在一行内显示 white-space: nowrap.\n3， 隐藏溢出。溢出不显示。overflow: hidden.\n4， 省略标记：text-overflow: ellipsis\n\n\n注意：overflow: hidden; text-overflow:ellipsis;white-space:nowrap;一定要一起用\n\n1.一定要给容器定义宽度.\n\n2.如果少了overflow: hidden;文字会横向撑到容易的外面\n\n3.如果少了white-space:nowrap;文字会把容器的高度往下撑；\n即使你定义了高度，省略号也不会出现，多余的文字会被裁切掉\n\n4.如果少了text-overflow:ellipsis;多余的文字会被裁切掉，\n就相当于你这样定义text-overflow:clip.\n\n    (1) 溢出属性（容器的）\n    overflow:visible/hidden(隐藏)/scroll/auto(自动)/inherit;\n    visible:默认值，内容不会被修剪，会成现在元素框之外；\n    hidden：内容会被修剪，并且其余内容是不可见的；\n    scroll：内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容;\n    auto：如果内容被修剪，则浏览器会显示滚动条，以便查看其他的内容;\n    inherit：规定应该从父元素继承overflow属性的值。\n\n自己写：\n<textarea style='height: 100px;' ref='qi'>\nitem.colName.length > 30 ? item.colName.slice(0, 18) + '...' : item.colName\n</textarea>\n      "}},watch:{isShow:function(e){var s=this;e&&this.$nextTick((function(){s.$refs.ellipsis.refresh()}))}},methods:{toggle:function(){this.isShow=!this.isShow}}},_=x,k=(n("c0ed"),Object(h["a"])(_,S,b,!1,null,"6ce1e342",null)),C=k.exports,y=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("换行")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("\n 自动换行：word-wrap: break-word; white-space: pre-wrap;\n  ")])])},N=[],z={name:"Wrap",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},E=z,$=(n("6b2b"),Object(h["a"])(E,y,N,!1,null,"15349910",null)),j=$.exports,O=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"background"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("背景全屏")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v('#logo{\n    background: url("../assets/login.jpg");\n    position:fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n    height:100%;\n    min-width: 1000px;\n    z-index:1;\n    zoom: 1;\n    background-color: #fff;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -webkit-background-size: cover;\n    -o-background-size: cover;\n    background-position: center 0;\n}\n\n   出处：'),n("a",{attrs:{href:"https://www.cnblogs.com/zwq20134/p/11674294.html"}},[e._v("css实现背景图片全屏")]),e._v("\n\n   ")])])},T=[],B={name:"Background",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},L=B,F=(n("194a"),Object(h["a"])(L,O,T,!1,null,"75c20d98",null)),J=F.exports,P=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"lessThen12"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("要求字体小于12px时")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],ref:"lessThen12",attrs:{value:"\n<div style='margin-top: 20px;'>\n  <span style='font-size: 12px;color:#f0ebfe;-webkit-transform: scale(0.7);display:inline-block;letter-spacing: 2px'>选择召唤颗数</span>\n</div>\n    ","is-show-copy":!0,language:"vue","line-numbers":!0,"code-editor-style":{height:"100px"}}})],1)},W=[],q={name:"LessThen12",components:{SimpleCodeEditor:g["a"]},data:function(){return{isShow:!1}},watch:{isShow:function(e){var s=this;e&&this.$nextTick((function(){s.$refs.lessThen12.refresh()}))}},methods:{toggle:function(){this.isShow=!this.isShow}}},D=q,H=(n("ebd9"),Object(h["a"])(D,P,W,!1,null,"92f67a82",null)),M=H.exports,V=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"sticky"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("position:sticky 实现粘性布局")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("      position: -webkit-sticky; position: sticky;\n\n      sticky 英文字面意思是粘，粘贴，所以姑且称之为粘性定位。下面就来了解下这个处于实验性的取值的具体功能及实用场景。\n\n这是一个结合了 position:relative 和 position:fixed 两种定位功能于一体的特殊定位，适用于一些特殊场景。\n\n什么是结合两种定位功能于一体呢？\n\n元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。\n\n而后，元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。\n\n\n      "),n("a",{attrs:{href:"https://www.cnblogs.com/coco1s/p/6402723.html"}},[e._v("使用 position:sticky 实现粘性布局")]),e._v("\n      "),n("a",{attrs:{href:"https://github.com/phhz"}},[e._v("github导航栏就使用了 .position-sticky")]),e._v("\n    ")])])},G=[],I={name:"Sticky",components:{},data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},R=I,A=(n("d59a"),Object(h["a"])(R,V,G,!1,null,"25aac59e",null)),K=A.exports,Q=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"tags"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v("不常见但是有用的的HTML标签")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("1. Details + Summary\ndetail 与 summary 标签组合使用，就能实现折叠面板（Collapse）的效果\n\n2. Fieldset + Legendr\nFieldset 元素用于对表单中的控制元素进行分组（也包括 label 元素），如果其中有legend 元素，会放在块级框起始处的边界上\n\n3. Meter\nmeter 元素用来显示已知范围的标量值或者分数值。简单来说，使用该元素，就能实现计量器的效果\n\n4. Progress\n从其名字上就知道progress元素就是作为进度条展示。在不指定 value 的情况下，它将来回播放展示\n\n\n5. Datalist\ndatalist 可以包含一组  option  元素，用于表示其它表单控件可选值。例如普通的文本输入框是没有可选输入值的，但借助 datalist 可以做到\n\n\n6. OptGroup\n有时候需要为 select 元素中的选项创建分组，这时 optgroup 就派上用场了\n\n\n7. Input 系列\n通过指定 input 的 type 属性可以得到不同的表单控件，这里只介绍两种不常见但是非常有用的——\n7.1 ColorPicker\n指定 type 为 color，就能创建一个颜色选择器（ColorPicker）\n7.2 Slider\n当 type 为 range 时，就可以实现一个滑动输入条（Slider）\n\n        \n详情："),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/437449590"}},[e._v("https://zhuanlan.zhihu.com/p/437449590")]),e._v("\n    ")])])},U=[],X={name:"Tags",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},Y=X,Z=(n("9cdc"),Object(h["a"])(Y,Q,U,!1,null,"3b67ce83",null)),ee=Z.exports,se=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"vh-calc"},[n("div",{staticClass:"header",on:{click:e.toggle}},[n("h3",[e._v(" CSS 使用calc()获取当前可视屏幕高度 vh等")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),n("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v('em 它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；\nex 依赖于英文字母小 x 的高度\nch 数字 0 的宽度\nrem 根元素（html）的 font-size\nvw viewpoint width，视窗宽度，1vw=视窗宽度的1%\nvh viewpoint height，视窗高度，1vh=视窗高度的1%\nvmax相对于vh或vw中较大的那个。其中最大的那个被均分为100单位的vmax。\nvmin相对于vh或vw中较小的那个。其中最小的那个被均分为100单位的vmin。\n由此可见，通过vh / vw 我们可以获得当前屏幕的视窗宽度，所以在css中，通过计算这个高度即可使得div的高度自动撑开到屏幕高度。而计算这个高度可以使用css3的calc()函数(参考详细教程)：\n\ncalc() 函数用于动态计算长度值。\n\n需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；\n任何长度值都可以使用calc()函数进行计算；\ncalc()函数支持 "+", "-", "*", "/" 运算；\ncalc()函数使用标准的数学运算优先级规则；\n所以，只需设置div的高度height为calc(100vh)即可,100vh = 视窗高度的100%，例子：\n\ndiv {\nwidth: 100%;\nheight: calc(100vh);\n}\n\n需要注意的是，该方法适合于网页高度等于当前屏幕视窗高度，按实际需求可能还是需要JS的。\n\n\n\n      ')])])},ne=[],ie={name:"VhCalc",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},te=ie,oe=(n("f98b"),Object(h["a"])(te,se,ne,!1,null,"0f0aeecd",null)),ae=oe.exports,re={name:"HtmlCss",components:{CssCursor:w,ScrollBar:f,Ellipsis:C,Wrap:j,Background:J,LessThen12:M,Sticky:K,Tags:ee,VhCalc:ae},data:function(){return{}},methods:{}},ce=re,he=(n("e2fb"),Object(h["a"])(ce,i,t,!1,null,"1cc5f945",null));s["default"]=he.exports},c0ed:function(e,s,n){"use strict";var i=n("e1be"),t=n.n(i);t.a},d59a:function(e,s,n){"use strict";var i=n("f416"),t=n.n(i);t.a},e1be:function(e,s,n){},e2fb:function(e,s,n){"use strict";var i=n("0f69"),t=n.n(i);t.a},ebd9:function(e,s,n){"use strict";var i=n("7b89"),t=n.n(i);t.a},f416:function(e,s,n){},f626:function(e,s,n){},f770:function(e,s,n){},f98b:function(e,s,n){"use strict";var i=n("46e5"),t=n.n(i);t.a}}]);