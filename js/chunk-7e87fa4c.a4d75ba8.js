(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e87fa4c"],{"16d9":function(e,t,s){"use strict";var i=s("5307"),n=s.n(i);n.a},4304:function(e,t,s){},"4b41":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"buildsite"},[s("ul",[s("li",[s("Github")],1),s("li",[s("SSH")],1)])])},n=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"github"},[s("div",{staticClass:"header",on:{click:e.toggle}},[s("h3",[e._v("Github")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),s("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("        "),s("a",{attrs:{href:"https://www.w3school.com.cn/cssref/pr_class_cursor.asp"}},[e._v("详情见W3C（cursor属性）")]),e._v("\n        2019.9.23更新\n        学了git使用之后更新一下\n    ****************************************************************************\n        前提：有github账号，安装了git\n\n        步骤：\n        1.生成SSH公钥("),s("a",{attrs:{href:"https://gitee.com/help/articles/4181#article-header0"}},[e._v("SSH公钥生成教程")]),e._v(")，github设置里添加SSH公钥\n        2.github官网新建一个库，名字是username.github.io\n        3.库的设置里绑定自己的域名\n        4.使用SSH复制链接\n        5.在本地找个文件夹右键打开git终端，git clone 链接，克隆下来\n        6.webstorm打开这个库文件夹\n        7.库文件夹下，新建一个.gitignore文件，内容是.idea/，忽略它。\n        8.写代码，一些操作方法如下：\n            创建、切换分支：右下角有git：master\n            左下角log、local change：相当于git log、git status\n            push：右键库文件夹—git—repository—push\n            pull：右键库文件夹—git—repository—pull(右上角的箭头)\n            add：右键库文件夹—git—add\n            commit：右键库文件夹—git—commit(右上角的√)\n            merge：右键库文件夹—git—repository—merge\n            tag：右键库文件夹—git—repository—tag\n    *******************************************************************\n        2019.8.28\n   \n    1.注册github账号（"),s("a",{attrs:{href:"https://github.com"}},[e._v("github")]),e._v(")\n    2.新建一个github仓库(Repository)\n    注意：仓库名字(Repository name)必须是：username.github.io。\n    3.把写的站点文件夹放在刚刚新建库时的路径下（本地username.github.io文件夹里）\n    4.把本地代码文件上传到github\n    5.然后就可以在浏览器地址栏输入username.github.io来访问网页了。\n    6.在阿里云（腾讯云等等也行）买一个域名，实名认证，邮箱认证，然后解析一下\n    (@是跳向IP，CNAME是跳向另一个域名，设为username.github.io)\n    7. 打开网页版github，设置，绑定买的域名\n    结束，地址栏输入域名就可以访问网页了\n        ")])])},o=[],r={name:"Github",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},h=r,c=(s("16d9"),s("2877")),u=Object(c["a"])(h,a,o,!1,null,"e4545f38",null),l=u.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ssh"},[s("div",{staticClass:"header",on:{click:e.toggle}},[s("h3",[e._v("SSH公钥使用")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}]},[e._v("▼")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}]},[e._v("▲")])]),s("pre",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[e._v("      "),s("a",{attrs:{href:"https://gitee.com/help/articles/4181#article-header0"}},[e._v("SSH公钥生成教程")]),e._v('\n          1.ssh-keygen -t rsa -C "xxxxx@xxxxx.com" （改！）(在随便一个本地文件夹打开git终端输)\n          三次回车，本地c盘的用户xx里有了一个.ssh文件夹\n\n          2.cat ~/.ssh/id_rsa.pub\n              拷贝公钥(别拷多)\n\n          3.github--\x3esetting--\x3eSSH and GPG keys--\x3enew SSH key--\x3e粘贴保存\n\n          4.ssh -T git@gitee.com（改成github.com）\n              yes\n      ')])])},g=[],p={name:"SSH",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},v=p,m=(s("828a"),Object(c["a"])(v,w,g,!1,null,"00703444",null)),S=m.exports,d={name:"BuildSite",components:{Github:l,SSH:S},data:function(){return{}},methods:{}},b=d,f=(s("4b42"),Object(c["a"])(b,i,n,!1,null,"0a53cbae",null));t["default"]=f.exports},"4b42":function(e,t,s){"use strict";var i=s("cdb0"),n=s.n(i);n.a},5307:function(e,t,s){},"828a":function(e,t,s){"use strict";var i=s("4304"),n=s.n(i);n.a},cdb0:function(e,t,s){}}]);
//# sourceMappingURL=chunk-7e87fa4c.a4d75ba8.js.map