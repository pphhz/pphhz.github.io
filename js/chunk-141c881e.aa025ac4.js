(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141c881e"],{"01f8":function(e,t,r){},"0b42":function(e,t,r){var n=r("e8b5"),a=r("68ee"),o=r("861d"),h=r("b622"),i=h("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,a(t)&&(t===Array||n(t.prototype))?t=void 0:o(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?Array:t}},"0efa":function(e,t,r){"use strict";r("01f8")},"159b":function(e,t,r){var n=r("da84"),a=r("fdbc"),o=r("785a"),h=r("17c2"),i=r("9112"),c=function(e){if(e&&e.forEach!==h)try{i(e,"forEach",h)}catch(t){e.forEach=h}};for(var s in a)a[s]&&c(n[s]&&n[s].prototype);c(o)},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),o=r("2d00"),h=a("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[h]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3b5b":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"web"},[r("div",{staticStyle:{"padding-bottom":"10px","padding-left":"10px","box-sizing":"border-box"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticStyle:{width:"40%",height:"40px","margin-top":"10px","background-color":"#73b07b",padding:"5px",color:"#2c4b42","box-sizing":"border-box"},attrs:{type:"text"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),r("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:e.search}},[e._v("搜索")]),r("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:e.reset}},[e._v("重置")])]),e._l(e.webData,(function(t,n){return r("div",{key:n,staticClass:"wrap"},[r("h2",[e._v(e._s(n+1)+"."+e._s(t.title))]),e._l(t.children,(function(t,n){return r("ul",{key:n},[r("li",[r("a",{attrs:{href:t.href}},[e._v(e._s(t.name))])])])}))],2)}))],2)},a=[],o=(r("159b"),r("a434"),r("498a"),r("b0c0"),{name:"WebModule",data:function(){return{inputValue:"",dataBack:[]}},props:{webData:{type:Array,required:!0,default:[]}},mounted:function(){var e=this;this.$emit("concatArr",this.webData),this.webData.forEach((function(t){e.dataBack.push(t)}))},methods:{reset:function(){var e=this;this.inputValue="",this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(t){e.webData.push(t)}))},search:function(){var e=this;if(this.inputValue=this.inputValue.trim(),this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(t){var r=[];t.children.forEach((function(e,t){r.push(e)}));var n={title:t.title,children:r};e.webData.push(n)})),""!==this.inputValue)for(var t=0;t<this.webData.length;t++)for(var r=0;r<this.webData[t].children.length;r++)if(-1===this.webData[t].children[r].name.indexOf(this.inputValue)){var n=r;this.webData[t].children.splice(n,1),r-=1}for(var a=0;a<this.webData.length;a++)if(0===this.webData[a].children.length){var o=a;this.webData.splice(o,1),a-=1}}}}),h=o,i=(r("0efa"),r("2877")),c=Object(i["a"])(h,n,a,!1,null,"4c267e2b",null);t["a"]=c.exports},"498a":function(e,t,r){"use strict";var n=r("23e7"),a=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("577e"),o=r("5899"),h="["+o+"]",i=RegExp("^"+h+h+"*"),c=RegExp(h+h+"*$"),s=function(e){return function(t){var r=a(n(t));return 1&e&&(r=r.replace(i,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(e,t,r){var n=r("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var h=n(t);h in e?a.f(e,h,o(0,r)):e[h]=r}},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("23cb"),o=r("5926"),h=r("07fa"),i=r("7b0b"),c=r("65f0"),s=r("8418"),p=r("1dde"),f=p("splice"),m=Math.max,l=Math.min,w=9007199254740991,u="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var r,n,p,f,d,b,g=i(this),v=h(g),_=a(e,v),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=v-_):(r=y-2,n=l(m(o(t),0),v-_)),v+r-n>w)throw TypeError(u);for(p=c(g,n),f=0;f<n;f++)d=_+f,d in g&&s(p,f,g[d]);if(p.length=n,r<n){for(f=_;f<v-n;f++)d=f+n,b=f+r,d in g?g[b]=g[d]:delete g[b];for(f=v;f>v-n+r;f--)delete g[f-1]}else if(r>n)for(f=v-n;f>_;f--)d=f+n-1,b=f+r-1,d in g?g[b]=g[d]:delete g[b];for(f=0;f<r;f++)g[f+_]=arguments[f+2];return g.length=v-n+r,p}})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("5e77").EXISTS,o=r("9bf2").f,h=Function.prototype,i=h.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!a&&o(h,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),o=r("7b0b"),h=r("07fa"),i=r("65f0"),c=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,p=4==e,f=6==e,m=7==e,l=5==e||f;return function(w,u,d,b){for(var g,v,_=o(w),y=a(_),x=n(u,d,3),k=h(y),E=0,j=b||i,z=t?j(w,k):r||m?j(w,0):void 0;k>E;E++)if((l||E in y)&&(g=y[E],v=x(g,E,_),e))if(t)z[E]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return E;case 2:c.call(z,g)}else switch(e){case 4:return!1;case 7:c.call(z,g)}return f?-1:s||p?p:z}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},c8d2:function(e,t,r){var n=r("5e77").PROPER,a=r("d039"),o=r("5899"),h="​᠎";e.exports=function(e){return a((function(){return!!o[e]()||h[e]()!==h||n&&o[e].name!==e}))}},ce11:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("web-module",{attrs:{"web-data":e.webData}})],1)},a=[],o=r("3b5b"),h={name:"WebSite",components:{WebModule:o["a"]},data:function(){return{inputValue:"",dataBack:[],webData:[{title:"Reol",children:[{href:"https://reol.jp/",name:"Reol官网"},{href:"https://reol.jp/feature/entry",name:"新fanclub"},{href:"https://mb.reol.jp/",name:"旧fanclub"},{href:"https://mb.reol.jp/birthday_mail/index.php",name:"旧fanclub 生日祝福"},{href:"https://ec.reol.jp/",name:"旧Reol商店"},{href:"https://victor-store.jp/artist/12915520",name:"victor-store"},{href:"https://www.jvcmusic.co.jp/-/Artist/A025153.html",name:"jvc"},{href:"https://eplus.jp/sf/word/0000070331",name:"Reol公演购票"},{href:"https://twitter.com/RRReol",name:"twitter"},{href:"https://www.instagram.com/rrreol999/",name:"Instagram"},{href:"https://www.youtube.com/user/reolch",name:"Reol official油管"},{href:"https://www.youtube.com/channel/UC39sl86DznfaduyK7_GClWw",name:"Reol subch油管"},{href:"https://www.nicovideo.jp/user/16253346/video?ref=pc_userpage_menu",name:"niconico"},{href:"https://www.tiktok.com/@rrreol999?lang=zh-Hant-TW&is_copy_url=1&is_from_webapp=v2&item_id=6936119436617288962",name:"tiktok"},{href:"https://zh.wikipedia.org/wiki/Reol#%E4%BB%A5REOL%E4%B8%BA%E5%90%8D%E4%B9%89%E5%8F%91%E5%B8%83",name:"维基百科"},{href:"https://reol.jp/feature/tour2022",name:"「激情アラート」网页"},{href:"https://www.reol.jp/special/2nd_album/",name:"金字塔网页"},{href:"https://lineblog.me/reol/",name:"REOL lineblog"},{href:"https://rockinon.com/artist/7706",name:"rockin'on"},{href:"https://www.nhk.jp/search/?q=Reol",name:"nhk电视台"},{href:"https://www.toysfactory.co.jp/artist/reol/official/news/",name:"玩具工厂 REOL官网"},{href:"https://www.hmv.co.jp/artist_Reol_000000000755118/",name:"hmv"},{href:"https://www.facebook.com/",name:"Facebook"},{href:"https://weibo.com/u/1878655634?topnav=1&wvr=6&topsug=1",name:"REOL_INFO 微博"},{href:"https://weibo.com/u/7330631722?topnav=1&wvr=6&topsug=1",name:"RRReol999 微博"},{href:"https://weibo.com/u/5759697834?topnav=1&wvr=6&topsug=1",name:"RRReol_ 微博"}]},{title:"网址导航",children:[{href:"http://ailongmiao.com/",name:"龙喵网"},{href:"http://www.lsdhss.com/",name:"猎手导航"},{href:"https://wht.im/",name:"万花筒导航"}]},{title:"娱乐",children:[{href:"https://www.datvb.com/oumeiju/",name:"影视龙"},{href:"https://www.zxzjtv.com/",name:"在线之家美剧"},{href:"http://m.rr.tv/",name:"人人视频"},{href:"https://www.hdmoli.com/",name:"hdmoli"},{href:"https://ddrk.me/",name:"低端影视"},{href:"https://gaze.run/",name:"注视"},{href:"https://imsdb.com/",name:"IMSDb"},{href:"https://m.58wangpan.com",name:"58网盘分享"},{href:"http://www.novipnoad.com",name:"NO视频"},{href:"http://www.yhdm.tv",name:"樱花动漫"},{href:"http://www.dm010.com/",name:"动漫010"},{href:"https://www.733.so",name:"733动漫网(漫画)"},{href:"https://tophub.today",name:"今日热榜"}]},{title:"兼职&支付",children:[{href:"https://www.upwork.com/",name:"upwork"},{href:"https://www.paypal.com/c2/webapps/mpp/account-selection",name:"paypal"}]},{title:"翻墙",children:[{href:"https://greenhubtx.ga/?utm_source=mg&utm_medium=click&utm_campaign=popup",name:"greenhub（全局或者浏览器）"},{href:"https://chrome.google.com/webstore/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp/related",name:"setupvpn（浏览器）"}]},{title:"学习",children:[{href:"http://oeasy.org/",name:"Oeasy(学习)"},{href:"https://www.runoob.com",name:"菜鸟教程(学习)"},{href:"https://52sharing.cn",name:"吾爱分享"},{href:"https://www.cn-ki.net/",name:"IData知识检索(期刊论文)"}]},{title:"常用国外网站",children:[{href:"https://twitter.com/",name:"twitter"},{href:"https://www.instagram.com",name:"instagram"},{href:"https://www.youtube.com",name:"油管"},{href:"https://www.rakuten.co.jp/",name:"Rakuten 乐天"},{href:"https://www.amazon.com/",name:"amazon（美）"},{href:"https://www.amazon.cn/",name:"amazon（中）"},{href:"https://www.amazon.co.jp/",name:"amazon（日）"},{href:"https://www.amazon.cn/Kindle%E7%94%B5%E5%AD%90%E4%B9%A6/b?ie=UTF8&node=116169071&ref_=nav_topnav_giftcert",name:"kindle电子书"},{href:"https://www.ltool.net/chinese_simplified_and_traditional_characters_pinyin_to_katakana_converter_in_simplified_chinese.php",name:"日文名字翻译"}]},{title:"转运公司",children:[{href:"http://www.rbzygs.com/member/default/index.html",name:"飞扬转运"}]},{title:"文件传输",children:[{href:"https://im.qq.com/index",name:"QQ"},{href:"https://www.ppzhilian.com/",name:"pp直连"}]},{title:"谷歌服务",children:[{href:"http://www.vixual.net/blog/archives/164?variant=zh-cn",name:"Google 常用服务及网址"},{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",name:"chrome网上应用店(插件)"},{href:"https://www.google.com.tw/",name:"谷歌搜索"},{href:"https://www.google.com/imghp",name:"谷歌搜图"},{href:"https://www.google.com/earth/",name:"谷歌地球（好玩！旅游一样）"},{href:"https://translate.google.com/",name:"谷歌翻译"},{href:"https://search.google.com/",name:"GoogleSearchConsole网站管理员工具"},{href:"https://www.google.com/intl/zh-CN/gmail/about/#",name:"Gmail"},{href:"https://play.google.com/store/apps?hl=zh-CN",name:"Google Play应用商店"},{href:"https://photos.google.com/?pageId=none",name:"Google相册"},{href:"https://news.google.com/topstories?hl=zh-HK&gl=HK&ceid=HK:zh-Hant",name:"Google新闻"},{href:"https://zh.wikipedia.org/",name:"维基百科"}]},{title:"音乐",children:[{href:"https://mora.jp",name:"mora.jp"},{href:"https://open.spotify.com/",name:"spotify"},{href:"https://www.conservethesound.de/",name:"conserve the sound（保存旧物的声音）"},{href:"https://dango.ai/",name:"团子AI提取伴奏人声（牛逼）"},{href:"http://tool.yijingying.com/musictools/",name:"musictools全网无损音乐免费下载客户端"},{href:"https://www.sq688.com",name:"超高无损音乐"}]},{title:"图片",children:[{href:"https://catocr.com/#/",name:"易飞文字识别catocr OCR"},{href:"https://123apps.com/",name:"123apps在线工具站"},{href:"https://www.processon.com/",name:"processon在线流程图"},{href:"https://zm-digicol.dpm.org.cn/",name:"故宫博物馆藏品"},{href:"http://squoosh.app",name:"Squoosh!(在线图片压缩)"},{href:"https://tinify.cn/",name:"tinypng(在线图片压缩)"},{href:"https://trianglify.io",name:"多边形背景生成器"},{href:"https://visualhunt.com",name:"visualhunt(无版权图片资源)"},{href:"https://ccsearch.creativecommons.org",name:" CC Search(无版权图片资源)"},{href:"https://pixabay.com",name:"pixabay(图片资源)"},{href:"https://cli.im",name:"草料二维码(生成二维码)"},{href:"https://www.uupoop.com",name:"在线ps"},{href:"https://www.remove.bg",name:"removebg(去除图片背景)"},{href:"https://bigjpg.com",name:"bigjpg(智能放大图片)"},{href:"http://gif.55.la/",name:"gif在线制作"},{href:"https://www.dbbqb.com/",name:"逗比（表情包搜索）"}]},{title:"文档",children:[{href:"https://lightpdf.com/zh",name:"lightPDF(在线PDF编辑转换)"},{href:"https://text-compare.com/zh-hans/",name:"在线文本对比"},{href:"https://www.ilovepdf.com",name:"ilovepdf(PDF转其他格式)"},{href:"http://www.alltoall.net",name:"alltoall(各种文件转换)"},{href:"http://www.1ppt.com/",name:"第一PPT"}]},{title:"书",children:[{href:"https://www.shuge.org",name:"书格(数字古籍图书馆)"},{href:"https://www.jiumodiary.com/",name:"鸠摩搜书"},{href:"https://sobooks.cc/",name:"SoBooks"},{href:"https://zh.singlelogin.org/",name:"Z-library"},{href:"https://www.allhistory.com",name:"全历史(Allhistory)"},{href:"http://www.nlc.cn/",name:"中国国家图书馆"},{href:"http://www.kgbook.com/",name:"苦瓜书盘"},{href:"https://www.shudan.vip/",name:"书单网"},{href:"http://shuxiangjia.cn/",name:"书享家"},{href:"https://www.pansoso.com/",name:"盘搜搜"},{href:"https://lorefree.com/",name:"LoreFree"},{href:"https://zure.fun/",name:"ZURE"},{href:"https://www.amazon.cn/Kindle%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E4%B9%A6/b/ref=amb_link_3?ie=UTF8&node=116175071&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=merchandised-search-leftnav&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_t=101&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_i=116169071",name:"亚马逊官方免费电子书"},{href:"https://www.wdl.org/zh/",name:"世界数字图书馆"},{href:"http://www.nap.edu/",name:"美国国家科学院在线数据库"},{href:"http://www.marxists.org/reference/subject/philosophy/index.htm",name:"marxists哲学"},{href:"http://www.banshujiang.cn/",name:"搬书匠"},{href:"http://socserv.mcmaster.ca/econ/ugcm/3ll3/",name:"麦克马斯特大学的经济思想史档案库"}]}]}},methods:{}},i=h,c=r("2877"),s=Object(c["a"])(i,n,a,!1,null,"451c6dce",null);t["default"]=s.exports},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);