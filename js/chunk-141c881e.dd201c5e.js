(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141c881e"],{"01f8":function(e,t,n){},"0b42":function(e,t,n){var r=n("da84"),a=n("e8b5"),o=n("68ee"),h=n("861d"),i=n("b622"),c=i("species"),s=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,o(t)&&(t===s||a(t.prototype))?t=void 0:h(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?s:t}},"0efa":function(e,t,n){"use strict";n("01f8")},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),o=n("785a"),h=n("17c2"),i=n("9112"),c=function(e){if(e&&e.forEach!==h)try{i(e,"forEach",h)}catch(t){e.forEach=h}};for(var s in a)a[s]&&c(r[s]&&r[s].prototype);c(o)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),o=a("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),o=n("2d00"),h=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[h]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3b5b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"web"},[n("div",{staticStyle:{"padding-bottom":"10px","padding-left":"10px","box-sizing":"border-box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticStyle:{width:"40%",height:"40px","margin-top":"10px","background-color":"#73b07b",padding:"5px",color:"#2c4b42","box-sizing":"border-box"},attrs:{type:"text"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),n("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:e.search}},[e._v("搜索")]),n("button",{staticStyle:{height:"40px",width:"70px","margin-left":"5px",color:"#3a2222","font-size":"17px","background-color":"#73b07b"},on:{click:e.reset}},[e._v("重置")])]),e._l(e.webData,(function(t,r){return n("div",{key:r,staticClass:"wrap"},[n("h2",[e._v(e._s(r+1)+"."+e._s(t.title))]),e._l(t.children,(function(t,r){return n("ul",{key:r},[n("li",[n("a",{attrs:{href:t.href}},[e._v(e._s(t.name))])])])}))],2)}))],2)},a=[],o=(n("d3b7"),n("159b"),n("a434"),n("498a"),n("b0c0"),{name:"WebModule",data:function(){return{inputValue:"",dataBack:[]}},props:{webData:{type:Array,required:!0,default:[]}},mounted:function(){var e=this;this.$emit("concatArr",this.webData),this.webData.forEach((function(t){e.dataBack.push(t)}))},methods:{reset:function(){var e=this;this.inputValue="",this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(t){e.webData.push(t)}))},search:function(){var e=this;if(this.inputValue=this.inputValue.trim(),this.webData.splice(0,this.webData.length),this.dataBack.forEach((function(t){var n=[];t.children.forEach((function(e,t){n.push(e)}));var r={title:t.title,children:n};e.webData.push(r)})),""!==this.inputValue)for(var t=0;t<this.webData.length;t++)for(var n=0;n<this.webData[t].children.length;n++)if(-1===this.webData[t].children[n].name.indexOf(this.inputValue)){var r=n;this.webData[t].children.splice(r,1),n-=1}for(var a=0;a<this.webData.length;a++)if(0===this.webData[a].children.length){var o=a;this.webData.splice(o,1),a-=1}}}}),h=o,i=(n("0efa"),n("2877")),c=Object(i["a"])(h,r,a,!1,null,"4c267e2b",null);t["a"]=c.exports},"498a":function(e,t,n){"use strict";var r=n("23e7"),a=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),a=n("1d80"),o=n("577e"),h=n("5899"),i=r("".replace),c="["+h+"]",s=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),f=function(e){return function(t){var n=o(a(t));return 1&e&&(n=i(n,s,"")),2&e&&(n=i(n,p,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var h=r(t);h in e?a.f(e,h,o(0,n)):e[h]=n}},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("23cb"),h=n("5926"),i=n("07fa"),c=n("7b0b"),s=n("65f0"),p=n("8418"),f=n("1dde"),m=f("splice"),l=a.TypeError,w=Math.max,u=Math.min,d=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var n,r,a,f,m,g,v=c(this),_=i(v),y=o(e,_),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=_-y):(n=x-2,r=u(w(h(t),0),_-y)),_+n-r>d)throw l(b);for(a=s(v,r),f=0;f<r;f++)m=y+f,m in v&&p(a,f,v[m]);if(a.length=r,n<r){for(f=y;f<_-r;f++)m=f+r,g=f+n,m in v?v[g]=v[m]:delete v[g];for(f=_;f>_-r+n;f--)delete v[f-1]}else if(n>r)for(f=_-r;f>y;f--)m=f+r-1,g=f+n-1,m in v?v[g]=v[m]:delete v[g];for(f=0;f<n;f++)v[f+y]=arguments[f+2];return v.length=_-r+n,a}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,o=n("e330"),h=n("9bf2").f,i=Function.prototype,c=o(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,p=o(s.exec),f="name";r&&!a&&h(i,f,{configurable:!0,get:function(){try{return p(s,c(this))[1]}catch(e){return""}}})},b727:function(e,t,n){var r=n("0366"),a=n("e330"),o=n("44ad"),h=n("7b0b"),i=n("07fa"),c=n("65f0"),s=a([].push),p=function(e){var t=1==e,n=2==e,a=3==e,p=4==e,f=6==e,m=7==e,l=5==e||f;return function(w,u,d,b){for(var g,v,_=h(w),y=o(_),x=r(u,d),k=i(y),E=0,j=b||c,z=t?j(w,k):n||m?j(w,0):void 0;k>E;E++)if((l||E in y)&&(g=y[E],v=x(g,E,_),e))if(t)z[E]=v;else if(v)switch(e){case 3:return!0;case 5:return g;case 6:return E;case 2:s(z,g)}else switch(e){case 4:return!1;case 7:s(z,g)}return f?-1:a||p?p:z}};e.exports={forEach:p(0),map:p(1),filter:p(2),some:p(3),every:p(4),find:p(5),findIndex:p(6),filterReject:p(7)}},c8d2:function(e,t,n){var r=n("5e77").PROPER,a=n("d039"),o=n("5899"),h="​᠎";e.exports=function(e){return a((function(){return!!o[e]()||h[e]()!==h||r&&o[e].name!==e}))}},ce11:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("web-module",{attrs:{"web-data":e.webData}})],1)},a=[],o=n("3b5b"),h={name:"WebSite",components:{WebModule:o["a"]},data:function(){return{inputValue:"",dataBack:[],webData:[{title:"Reol",children:[{href:"https://reol.jp/",name:"Reol官网"},{href:"https://reol.jp/feature/entry",name:"新fanclub"},{href:"https://mb.reol.jp/",name:"旧fanclub"},{href:"https://mb.reol.jp/birthday_mail/index.php",name:"旧fanclub 生日祝福"},{href:"https://ec.reol.jp/",name:"旧Reol商店"},{href:"https://victor-store.jp/artist/12915520",name:"victor-store"},{href:"https://www.jvcmusic.co.jp/-/Artist/A025153.html",name:"jvc"},{href:"https://eplus.jp/sf/word/0000070331",name:"Reol公演购票"},{href:"https://twitter.com/RRReol",name:"twitter"},{href:"https://www.instagram.com/rrreol999/",name:"Instagram"},{href:"https://www.youtube.com/user/reolch",name:"Reol official油管"},{href:"https://www.youtube.com/channel/UC39sl86DznfaduyK7_GClWw",name:"Reol subch油管"},{href:"https://www.nicovideo.jp/user/16253346/video?ref=pc_userpage_menu",name:"niconico"},{href:"https://www.tiktok.com/@rrreol999?lang=zh-Hant-TW&is_copy_url=1&is_from_webapp=v2&item_id=6936119436617288962",name:"tiktok"},{href:"https://zh.wikipedia.org/wiki/Reol#%E4%BB%A5REOL%E4%B8%BA%E5%90%8D%E4%B9%89%E5%8F%91%E5%B8%83",name:"维基百科"},{href:"https://reol.jp/feature/tour2022",name:"「激情アラート」网页"},{href:"https://www.reol.jp/special/2nd_album/",name:"金字塔网页"},{href:"https://lineblog.me/reol/",name:"REOL lineblog"},{href:"https://rockinon.com/artist/7706",name:"rockin'on"},{href:"https://www.nhk.jp/search/?q=Reol",name:"nhk电视台"},{href:"https://www.toysfactory.co.jp/artist/reol/official/news/",name:"玩具工厂 REOL官网"},{href:"https://www.hmv.co.jp/artist_Reol_000000000755118/",name:"hmv"},{href:"https://www.facebook.com/",name:"Facebook"},{href:"https://weibo.com/u/1878655634?topnav=1&wvr=6&topsug=1",name:"REOL_INFO 微博"},{href:"https://weibo.com/u/7330631722?topnav=1&wvr=6&topsug=1",name:"RRReol999 微博"},{href:"https://weibo.com/u/5759697834?topnav=1&wvr=6&topsug=1",name:"RRReol_ 微博"}]},{title:"网址导航",children:[{href:"http://ailongmiao.com/",name:"龙喵网"},{href:"http://www.lsdhss.com/",name:"猎手导航"},{href:"https://wht.im/",name:"万花筒导航"}]},{title:"娱乐",children:[{href:"https://www.datvb.com/oumeiju/",name:"影视龙"},{href:"https://www.zxzjtv.com/",name:"在线之家美剧"},{href:"http://m.rr.tv/",name:"人人视频"},{href:"https://www.hdmoli.com/",name:"hdmoli"},{href:"https://ddrk.me/",name:"低端影视"},{href:"https://gaze.run/",name:"注视"},{href:"https://imsdb.com/",name:"IMSDb"},{href:"https://m.58wangpan.com",name:"58网盘分享"},{href:"http://www.novipnoad.com",name:"NO视频"},{href:"http://www.yhdm.tv",name:"樱花动漫"},{href:"http://www.dm010.com/",name:"动漫010"},{href:"https://www.733.so",name:"733动漫网(漫画)"},{href:"https://tophub.today",name:"今日热榜"}]},{title:"兼职&支付",children:[{href:"https://www.upwork.com/",name:"upwork"},{href:"https://www.paypal.com/c2/webapps/mpp/account-selection",name:"paypal"}]},{title:"翻墙",children:[{href:"https://greenhubtx.ga/?utm_source=mg&utm_medium=click&utm_campaign=popup",name:"greenhub（全局或者浏览器）"},{href:"https://chrome.google.com/webstore/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp/related",name:"setupvpn（浏览器）"}]},{title:"学习",children:[{href:"http://oeasy.org/",name:"Oeasy(学习)"},{href:"https://www.runoob.com",name:"菜鸟教程(学习)"},{href:"https://52sharing.cn",name:"吾爱分享"},{href:"https://www.cn-ki.net/",name:"IData知识检索(期刊论文)"}]},{title:"常用国外网站",children:[{href:"https://twitter.com/",name:"twitter"},{href:"https://www.instagram.com",name:"instagram"},{href:"https://www.youtube.com",name:"油管"},{href:"https://www.rakuten.co.jp/",name:"Rakuten 乐天"},{href:"https://www.amazon.com/",name:"amazon（美）"},{href:"https://www.amazon.cn/",name:"amazon（中）"},{href:"https://www.amazon.co.jp/",name:"amazon（日）"},{href:"https://www.amazon.cn/Kindle%E7%94%B5%E5%AD%90%E4%B9%A6/b?ie=UTF8&node=116169071&ref_=nav_topnav_giftcert",name:"kindle电子书"},{href:"https://www.ltool.net/chinese_simplified_and_traditional_characters_pinyin_to_katakana_converter_in_simplified_chinese.php",name:"日文名字翻译"}]},{title:"转运公司",children:[{href:"http://www.rbzygs.com/member/default/index.html",name:"飞扬转运"}]},{title:"文件传输",children:[{href:"https://im.qq.com/index",name:"QQ"},{href:"https://www.ppzhilian.com/",name:"pp直连"}]},{title:"谷歌服务",children:[{href:"http://www.vixual.net/blog/archives/164?variant=zh-cn",name:"Google 常用服务及网址"},{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",name:"chrome网上应用店(插件)"},{href:"https://www.google.com.tw/",name:"谷歌搜索"},{href:"https://www.google.com/imghp",name:"谷歌搜图"},{href:"https://www.google.com/earth/",name:"谷歌地球（好玩！旅游一样）"},{href:"https://translate.google.com/",name:"谷歌翻译"},{href:"https://search.google.com/",name:"GoogleSearchConsole网站管理员工具"},{href:"https://www.google.com/intl/zh-CN/gmail/about/#",name:"Gmail"},{href:"https://play.google.com/store/apps?hl=zh-CN",name:"Google Play应用商店"},{href:"https://photos.google.com/?pageId=none",name:"Google相册"},{href:"https://news.google.com/topstories?hl=zh-HK&gl=HK&ceid=HK:zh-Hant",name:"Google新闻"},{href:"https://zh.wikipedia.org/",name:"维基百科"}]},{title:"音乐",children:[{href:"https://mora.jp",name:"mora.jp"},{href:"https://open.spotify.com/",name:"spotify"},{href:"https://www.conservethesound.de/",name:"conserve the sound（保存旧物的声音）"},{href:"https://dango.ai/",name:"团子AI提取伴奏人声（牛逼）"},{href:"http://tool.yijingying.com/musictools/",name:"musictools全网无损音乐免费下载客户端"},{href:"https://www.sq688.com",name:"超高无损音乐"}]},{title:"图片",children:[{href:"https://catocr.com/#/",name:"易飞文字识别catocr OCR"},{href:"https://123apps.com/",name:"123apps在线工具站"},{href:"https://www.processon.com/",name:"processon在线流程图"},{href:"https://zm-digicol.dpm.org.cn/",name:"故宫博物馆藏品"},{href:"http://squoosh.app",name:"Squoosh!(在线图片压缩)"},{href:"https://tinify.cn/",name:"tinypng(在线图片压缩)"},{href:"https://trianglify.io",name:"多边形背景生成器"},{href:"https://visualhunt.com",name:"visualhunt(无版权图片资源)"},{href:"https://ccsearch.creativecommons.org",name:" CC Search(无版权图片资源)"},{href:"https://pixabay.com",name:"pixabay(图片资源)"},{href:"https://cli.im",name:"草料二维码(生成二维码)"},{href:"https://www.uupoop.com",name:"在线ps"},{href:"https://www.remove.bg",name:"removebg(去除图片背景)"},{href:"https://bigjpg.com",name:"bigjpg(智能放大图片)"},{href:"http://gif.55.la/",name:"gif在线制作"},{href:"https://www.dbbqb.com/",name:"逗比（表情包搜索）"}]},{title:"文档",children:[{href:"https://lightpdf.com/zh",name:"lightPDF(在线PDF编辑转换)"},{href:"https://text-compare.com/zh-hans/",name:"在线文本对比"},{href:"https://www.ilovepdf.com",name:"ilovepdf(PDF转其他格式)"},{href:"http://www.alltoall.net",name:"alltoall(各种文件转换)"},{href:"http://www.1ppt.com/",name:"第一PPT"}]},{title:"书",children:[{href:"https://www.shuge.org",name:"书格(数字古籍图书馆)"},{href:"https://www.jiumodiary.com/",name:"鸠摩搜书"},{href:"https://sobooks.cc/",name:"SoBooks"},{href:"https://zh.singlelogin.org/",name:"Z-library"},{href:"https://www.allhistory.com",name:"全历史(Allhistory)"},{href:"http://www.nlc.cn/",name:"中国国家图书馆"},{href:"http://www.kgbook.com/",name:"苦瓜书盘"},{href:"https://www.shudan.vip/",name:"书单网"},{href:"http://shuxiangjia.cn/",name:"书享家"},{href:"https://www.pansoso.com/",name:"盘搜搜"},{href:"https://lorefree.com/",name:"LoreFree"},{href:"https://zure.fun/",name:"ZURE"},{href:"https://www.amazon.cn/Kindle%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E4%B9%A6/b/ref=amb_link_3?ie=UTF8&node=116175071&pf_rd_m=A1AJ19PSB66TGU&pf_rd_s=merchandised-search-leftnav&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_r=QA09QX96YRZ5BVM6D6DF&pf_rd_t=101&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_p=047e4bfa-1996-4eba-bf3c-4dcb84fb6933&pf_rd_i=116169071",name:"亚马逊官方免费电子书"},{href:"https://www.wdl.org/zh/",name:"世界数字图书馆"},{href:"http://www.nap.edu/",name:"美国国家科学院在线数据库"},{href:"http://www.marxists.org/reference/subject/philosophy/index.htm",name:"marxists哲学"},{href:"http://www.banshujiang.cn/",name:"搬书匠"},{href:"http://socserv.mcmaster.ca/econ/ugcm/3ll3/",name:"麦克马斯特大学的经济思想史档案库"}]}]}},methods:{}},i=h,c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,"451c6dce",null);t["default"]=s.exports},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);