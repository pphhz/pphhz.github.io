(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c7f03de"],{1591:function(t,e,a){},"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),o=a("17c2"),h=a("9112");for(var i in r){var s=n[i],c=s&&s.prototype;if(c&&c.forEach!==o)try{h(c,"forEach",o)}catch(p){c.forEach=o}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),o=a("ae40"),h=r("forEach"),i=o("forEach");t.exports=h&&i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"3b5b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"web"},[a("div",{staticStyle:{"padding-bottom":"10px","padding-left":"10px","box-sizing":"border-box"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticStyle:{width:"40%",height:"40px","margin-top":"10px","background-color":"#73b07b",padding:"5px",color:"#2c4b42","box-sizing":"border-box"},attrs:{type:"text"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),a("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:t.search}},[t._v("搜索")]),a("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:t.reset}},[t._v("重置")])]),t._l(t.webData,(function(e,n){return a("div",{key:n,staticClass:"wrap"},[a("h2",[t._v(t._s(n+1)+"."+t._s(e.title))]),t._l(e.children,(function(e,n){return a("ul",{key:n},[a("li",[a("a",{attrs:{href:e.href}},[t._v(t._s(e.name))])])])}))],2)}))],2)},r=[],o=(a("4160"),a("c975"),a("a434"),a("b0c0"),a("498a"),a("159b"),{name:"WebModule",data:function(){return{inputValue:"",dataBack:[]}},props:{webData:{type:Array,required:!0,default:[]}},mounted:function(){var t=this;this.$emit("concatArr",this.webData),this.webData.forEach((function(e){t.dataBack.push(e)}))},methods:{reset:function(){var t=this;this.inputValue="",this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(e){t.webData.push(e)}))},search:function(){var t=this;if(this.inputValue=this.inputValue.trim(),this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(e){var a=[];e.children.forEach((function(t,e){a.push(t)}));var n={title:e.title,children:a};t.webData.push(n)})),""!==this.inputValue)for(var e=0;e<this.webData.length;e++)for(var a=0;a<this.webData[e].children.length;a++)if(-1===this.webData[e].children[a].name.indexOf(this.inputValue)){var n=a;this.webData[e].children.splice(n,1),a-=1}for(var r=0;r<this.webData.length;r++)if(0===this.webData[r].children.length){var o=r;this.webData.splice(o,1),r-=1}}}}),h=o,i=(a("d43f"),a("2877")),s=Object(i["a"])(h,n,r,!1,null,"170f1512",null);e["a"]=s.exports},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",h=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),s=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(h,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:s(1),end:s(2),trim:s(3)}},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var h=n(e);h in t?r.f(t,h,o(0,a)):t[h]=a}},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),o=a("a691"),h=a("50c4"),i=a("7b0b"),s=a("65f0"),c=a("8418"),p=a("1dde"),m=a("ae40"),f=p("splice"),l=m("splice",{ACCESSORS:!0,0:0,1:2}),w=Math.max,u=Math.min,d=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!l},{splice:function(t,e){var a,n,p,m,f,l,b=i(this),v=h(b.length),_=r(t,v),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=v-_):(a=y-2,n=u(w(o(e),0),v-_)),v+a-n>d)throw TypeError(g);for(p=s(b,n),m=0;m<n;m++)f=_+m,f in b&&c(p,m,b[f]);if(p.length=n,a<n){for(m=_;m<v-n;m++)f=m+n,l=m+a,f in b?b[l]=b[f]:delete b[l];for(m=v;m>v-n+a;m--)delete b[m-1]}else if(a>n)for(m=v-n;m>_;m--)f=m+n-1,l=m+a-1,f in b?b[l]=b[f]:delete b[l];for(m=0;m<a;m++)b[m+_]=arguments[m+2];return b.length=v-n+a,p}})},a640:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,a){var n=a("83ab"),r=a("9bf2").f,o=Function.prototype,h=o.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&r(o,s,{configurable:!0,get:function(){try{return h.call(this).match(i)[1]}catch(t){return""}}})},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},c975:function(t,e,a){"use strict";var n=a("23e7"),r=a("4d64").indexOf,o=a("a640"),h=a("ae40"),i=[].indexOf,s=!!i&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),p=h("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!c||!p},{indexOf:function(t){return s?i.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},ce11:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("web-module",{attrs:{"web-data":t.webData}})],1)},r=[],o=a("3b5b"),h={name:"WebSite",components:{WebModule:o["a"]},data:function(){return{inputValue:"",dataBack:[],webData:[{title:"Reol",children:[{href:"https://reol.jp/",name:"Reol官网"},{href:"https://mb.reol.jp/",name:"fanclub"},{href:"https://mb.reol.jp/birthday_mail/index.php",name:"fanclub 生日祝福"},{href:"https://ec.reol.jp/",name:"Reol商店"},{href:"https://victor-store.jp/artist/12915520",name:"victor-store"},{href:"https://www.jvcmusic.co.jp/-/Artist/A025153.html",name:"jvc"},{href:"https://eplus.jp/sf/word/0000070331",name:"Reol公演购票"},{href:"https://twitter.com/RRReol",name:"twitter"},{href:"https://www.instagram.com/rrreol999/",name:"Instagram"},{href:"https://www.youtube.com/user/reolch",name:"Reol official油管"},{href:"https://www.youtube.com/channel/UC39sl86DznfaduyK7_GClWw",name:"Reol subch油管"},{href:"https://www.nicovideo.jp/user/16253346/video?ref=pc_userpage_menu",name:"niconico"},{href:"https://www.tiktok.com/@rrreol999?lang=zh-Hant-TW&is_copy_url=1&is_from_webapp=v2&item_id=6936119436617288962",name:"tiktok"},{href:"https://zh.wikipedia.org/wiki/Reol#%E4%BB%A5REOL%E4%B8%BA%E5%90%8D%E4%B9%89%E5%8F%91%E5%B8%83",name:"维基百科"},{href:"https://www.reol.jp/special/2nd_album/",name:"金字塔网页"},{href:"https://lineblog.me/reol/",name:"REOL lineblog"},{href:"https://rockinon.com/artist/7706",name:"rockin'on"},{href:"https://www.nhk.jp/search/?q=Reol",name:"nhk电视台"},{href:"https://www.toysfactory.co.jp/artist/reol/official/news/",name:"玩具工厂 REOL官网"},{href:"https://www.hmv.co.jp/artist_Reol_000000000755118/",name:"hmv"},{href:"https://www.facebook.com/",name:"Facebook"},{href:"https://weibo.com/u/1878655634?topnav=1&wvr=6&topsug=1",name:"REOL_INFO 微博"},{href:"https://weibo.com/u/7330631722?topnav=1&wvr=6&topsug=1",name:"RRReol999 微博"},{href:"https://weibo.com/u/5759697834?topnav=1&wvr=6&topsug=1",name:"RRReol_ 微博"}]},{title:"网址导航",children:[{href:"http://ailongmiao.com/",name:"龙喵网"},{href:"http://www.lsdhss.com/",name:"猎手导航"},{href:"https://wht.im/",name:"万花筒导航"}]},{title:"娱乐",children:[{href:"https://www.mp4er.cc/",name:"哔嘀影视"},{href:"https://ddrk.me/",name:"低端影视"},{href:"https://gaze.run/",name:"注视"},{href:"http://m.rr.tv/",name:"人人视频"},{href:"https://imsdb.com/",name:"IMSDb"},{href:"https://m.58wangpan.com",name:"58网盘分享"},{href:"http://www.novipnoad.com",name:"NO视频"},{href:"http://30tv.cc/",name:"30影院"},{href:"https://91mjw.com/",name:"美剧网"},{href:"http://www.dm010.com/",name:"动漫010"},{href:"https://www.tohomh123.com",name:"土豪漫画"},{href:"https://www.733.so",name:"733动漫网(漫画)"},{href:"https://tophub.today",name:"今日热榜"}]},{title:"兼职&支付",children:[{href:"https://www.upwork.com/",name:"upwork"},{href:"https://www.paypal.com/c2/webapps/mpp/account-selection",name:"paypal"}]},{title:"学习",children:[{href:"http://oeasy.org/",name:"Oeasy(学习)"},{href:"https://www.runoob.com",name:"菜鸟教程(学习)"},{href:"https://52sharing.cn",name:"吾爱分享"},{href:"https://www.cn-ki.net/",name:"IData知识检索(期刊论文)"}]},{title:"常用国外网站",children:[{href:"https://twitter.com/",name:"twitter"},{href:"https://www.instagram.com",name:"instagram"},{href:"https://www.youtube.com",name:"油管"},{href:"https://www.rakuten.co.jp/",name:"Rakuten 乐天"},{href:"https://www.amazon.com/",name:"amazon（美）"},{href:"https://www.amazon.cn/",name:"amazon（中）"},{href:"https://www.amazon.co.jp/",name:"amazon（日）"},{href:"https://www.amazon.cn/Kindle%E7%94%B5%E5%AD%90%E4%B9%A6/b?ie=UTF8&node=116169071&ref_=nav_topnav_giftcert",name:"kindle电子书"},{href:"https://www.ltool.net/chinese_simplified_and_traditional_characters_pinyin_to_katakana_converter_in_simplified_chinese.php",name:"日文名字翻译"}]},{title:"转运公司",children:[{href:"http://www.rbzygs.com/member/default/index.html",name:"飞扬转运"}]},{title:"文件传输",children:[{href:"https://im.qq.com/index",name:"QQ"},{href:"https://www.ppzhilian.com/",name:"pp直连"}]},{title:"谷歌服务",children:[{href:"http://www.vixual.net/blog/archives/164?variant=zh-cn",name:"Google 常用服务及网址"},{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",name:"chrome网上应用店(插件)"},{href:"https://www.google.com.tw/",name:"谷歌搜索"},{href:"https://www.google.com/imghp",name:"谷歌搜图"},{href:"https://www.google.com/earth/",name:"谷歌地球（好玩！旅游一样）"},{href:"https://translate.google.com/",name:"谷歌翻译"},{href:"https://search.google.com/",name:"GoogleSearchConsole网站管理员工具"},{href:"https://www.google.com/intl/zh-CN/gmail/about/#",name:"Gmail"},{href:"https://play.google.com/store/apps?hl=zh-CN",name:"Google Play应用商店"},{href:"https://photos.google.com/?pageId=none",name:"Google相册"},{href:"https://news.google.com/topstories?hl=zh-HK&gl=HK&ceid=HK:zh-Hant",name:"Google新闻"},{href:"https://zh.wikipedia.org/",name:"维基百科"}]},{title:"音乐",children:[{href:"https://mora.jp",name:"mora.jp"},{href:"https://open.spotify.com/",name:"spotify"},{href:"https://www.conservethesound.de/",name:"conserve the sound（保存旧物的声音）"},{href:"https://dango.ai/",name:"团子AI提取伴奏人声（牛逼）"},{href:"http://tool.yijingying.com/musictools/",name:"musictools全网无损音乐免费下载客户端"},{href:"https://www.sq688.com",name:"超高无损音乐"}]},{title:"图片",children:[{href:"https://zm-digicol.dpm.org.cn/",name:"故宫博物馆藏品"},{href:"http://squoosh.app",name:"Squoosh!(在线图片压缩)"},{href:"https://tinify.cn/",name:"tinypng(在线图片压缩)"},{href:"https://trianglify.io",name:"多边形背景生成器"},{href:"https://visualhunt.com",name:"visualhunt(无版权图片资源)"},{href:"https://ccsearch.creativecommons.org",name:" CC Search(无版权图片资源)"},{href:"https://pixabay.com",name:"pixabay(图片资源)"},{href:"https://cli.im",name:"草料二维码(生成二维码)"},{href:"https://www.uupoop.com",name:"在线ps"},{href:"https://www.remove.bg",name:"removebg(去除图片背景)"},{href:"https://bigjpg.com",name:"bigjpg(智能放大图片)"},{href:"http://gif.55.la/",name:"gif在线制作"},{href:"https://www.dbbqb.com/",name:"逗比（表情包搜索）"}]},{title:"文档",children:[{href:"https://lightpdf.com/zh",name:"lightPDF(在线PDF编辑转换)"},{href:"https://www.ilovepdf.com",name:"ilovepdf(PDF转其他格式)"},{href:"http://www.alltoall.net",name:"alltoall(各种文件转换)"},{href:"http://www.1ppt.com/",name:"第一PPT"}]},{title:"书",children:[{href:"https://www.shuge.org",name:"书格(数字古籍图书馆)"},{href:"https://www.jiumodiary.com/",name:"鸠摩搜书"},{href:"https://sobooks.cc/",name:"SoBooks"},{href:"https://zh.singlelogin.org/",name:"Z-library"},{href:"https://www.allhistory.com",name:"全历史(Allhistory)"},{href:"http://www.nlc.cn/",name:"中国国家图书馆"},{href:"http://www.kgbook.com/",name:"苦瓜书盘"},{href:"https://www.shudan.vip/",name:"书单网"},{href:"http://shuxiangjia.cn/",name:"书享家"},{href:"https://www.pansoso.com/",name:"盘搜搜"},{href:"https://lorefree.com/",name:"LoreFree"},{href:"https://zure.fun/",name:"ZURE"},{href:"https://www.amazon.cn/Kindle%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E4%B9%A6/b/ref=amb_link_3?ie=UTF8&node=116175071&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=merchandised-search-leftnav&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_t=101&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_i=116169071",name:"亚马逊官方免费电子书"},{href:"https://www.wdl.org/zh/",name:"世界数字图书馆"},{href:"http://www.nap.edu/",name:"美国国家科学院在线数据库"},{href:"http://www.marxists.org/reference/subject/philosophy/index.htm",name:"marxists哲学"},{href:"http://www.banshujiang.cn/",name:"搬书匠"},{href:"http://socserv.mcmaster.ca/econ/ugcm/3ll3/",name:"麦克马斯特大学的经济思想史档案库"}]}]}},methods:{}},i=h,s=a("2877"),c=Object(s["a"])(i,n,r,!1,null,"069d7947",null);e["default"]=c.exports},d43f:function(t,e,a){"use strict";var n=a("1591"),r=a.n(n);r.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);