(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ef4c2ea"],{"0e10":function(n,e,t){},1578:function(n,e,t){"use strict";var s=t("4f6d"),a=t.n(s);a.a},"1ab8":function(n,e,t){"use strict";var s=t("7260"),a=t.n(s);a.a},"1bb9":function(n,e,t){"use strict";var s=t("5cda"),a=t.n(s);a.a},4514:function(n,e,t){"use strict";var s=t("6663"),a=t.n(s);a.a},"4a9a":function(n,e,t){"use strict";var s=t("ed1d"),a=t.n(s);a.a},"4b41":function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"buildsite"},[t("ul",[t("li",[t("Github")],1),t("li",[t("Git")],1),t("li",[t("SSH")],1),t("li",[t("build-vue-project")],1),t("li",[t("slot-use")],1),t("li",[t("father-son-pass-data")],1),t("li",[t("knowledge-node")],1),t("li",[t("send-request")],1),t("li",[t("date-format")],1),t("li",[t("arrow-function")],1),t("li",[t("life-circle")],1)])])},a=[],i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"github"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("Github")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("        2019.9.23更新\n        学了git使用之后更新一下\n    ****************************************************************************\n        前提：有github账号，安装了git\n\n        步骤：\n        1.生成SSH公钥("),t("a",{attrs:{href:"https://gitee.com/help/articles/4181#article-header0"}},[n._v("SSH公钥生成教程")]),n._v(")，github设置里添加SSH公钥\n        2.github官网新建一个库，名字是username.github.io\n        3.库的设置里绑定自己的域名\n        4.使用SSH复制链接\n        5.在本地找个文件夹右键打开git终端，git clone 链接，克隆下来\n        6.webstorm打开这个库文件夹\n        7.库文件夹下，新建一个.gitignore文件，内容是.idea/，忽略它。\n        8.写代码，一些操作方法如下：\n            创建、切换分支：右下角有git：master\n            左下角log、local change：相当于git log、git status\n            push：右键库文件夹—git—repository—push\n            pull：右键库文件夹—git—repository—pull(右上角的箭头)\n            add：右键库文件夹—git—add\n            commit：右键库文件夹—git—commit(右上角的√)\n            merge：右键库文件夹—git—repository—merge\n            tag：右键库文件夹—git—repository—tag\n    *******************************************************************\n        2019.8.28\n   \n    1.注册github账号（"),t("a",{attrs:{href:"https://github.com"}},[n._v("github")]),n._v(")\n    2.新建一个github仓库(Repository)\n    注意：仓库名字(Repository name)必须是：username.github.io。\n    3.把写的站点文件夹放在刚刚新建库时的路径下（本地username.github.io文件夹里）\n    4.把本地代码文件上传到github\n    5.然后就可以在浏览器地址栏输入username.github.io来访问网页了。\n    6.在阿里云（腾讯云等等也行）买一个域名，实名认证，邮箱认证，然后解析一下\n    (@是跳向IP，CNAME是跳向另一个域名，设为username.github.io)\n    7. 打开网页版github，设置，绑定买的域名\n    结束，地址栏输入域名就可以访问网页了\n        ")])])},o=[],r={name:"Github",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},l=r,h=(t("83f7"),t("2877")),c=Object(h["a"])(l,i,o,!1,null,"6ccf19e2",null),d=c.exports,m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"git"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("Git命令")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('Git常用命令：\n\ngit status 查看当前分支代码情况\n\ngit stash 暂存本地分支改动的代码，一般用于需要 pull 远端代码或者需要 merge 本地分支等操作前\n\ngit stash pop 把上一次本地 stash 的代码取回来，一般用于pull 或者 merge 操作后，结合git stash使用\n\ngit pull 更新代码，以及分支信息\n\ngit add file_name 添加已经修改的文件到暂存区\n\ngit commit -m "update" 提交到本地仓库\n\ngit push 提交本地代码到远程仓库\n\ngit checkout 分支名A 切换到分支A\n\ngit merge 分支名A 合并分支A的代码到当前分支，默认是Fast forward，一般采用禁用fast forward方式合并，即使用\n\ngit merge --no-ff -m "merge with no-ff" dev 合并dev代码到当前分支，禁用Fast forward方式合并\n\ngit rebase master 《branch>   将master rebase到branch，相当于： git co 《branch> && git rebase master && git co master && git merge 《branch>\n\n如果遇到冲突conflict,就解决冲突，继续走add，commit操作\n\ngit tag -a v1.0.1 -m "version v1.0.1" 新建标签 v1.0.1\n\ngit push origin v1.0.1 推送标签到远程仓库\n\ngit branch -r 查看远程分支\n\ngit branch -a 查看所有分支\n\ngit branch -v 查看各个分支最后的提交信息\n\ngit branch --merged 查看已经被合并到当前分支的分支\n\ngit branch --no-merged 查看尚未被合并到当前分支的分支\n\ngit checkout commit_id 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支自动删除\n\ngit checkout commit_id -b 分支名 把某次历史提交记录checkout出来，创建成新的分支\n\ngit fetch origin master 取回origin主机的master分支\n\ngit merge origin/master 或者 git rebase origin/master 在当前分支上，合并origin/master\n\ngit pull origin next:master 取回origin主机的next分支，与本地的master分支合并\n\ngit pull origin next 远程分支是与当前分支合并 等同于先fetch git fetch origin 再merge git merge origin/next\n          ')])])},u=[],p={name:"Git",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},v=p,w=(t("c3ab"),Object(h["a"])(v,m,u,!1,null,"3d191d0d",null)),g=w.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"slot-use"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("插槽v-slot")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"warpper",staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('1.什么是插槽?\n默认情况下使用子组件时在子组件中编写的元素是不会被渲染的\n如果子组件中有部分内容是使用时才确定的, 那么我们就可以使用插槽\n插槽就是在子组件中放一个"坑", 以后由父组件来"填"\n\n2.匿名插槽：\n如果有多个匿名插槽, 每一个匿名插槽都会被指定的内容替换。\n虽然写多个匿名插槽不会报错, 但是在企业开发中推荐只能有一个匿名插槽\n插槽可以指定默认数据, 如果使用者没有填这个坑, 那么就会显示默认数据\n有多少个匿名插槽, 填充的数据就会被拷贝几份\n'),t("textarea",[n._v('    <div id="app">\n        <father></father>\n    </div>\n    <template id="father">\n        <div>\n            需求: 在使用子组件的时候给子组件动态的添加一些内容\n            <son>\n                <div>我是追加的内容1</div>\n                <div>我是追加的内容2</div>\n                <div>我是追加的内容3</div>\n            </son>\n        </div>\n    </template>\n    <template id="son">\n        (<div>\n            <div>我是头部</div>\n            <slot>我是默认数据</slot>\n            <div>我是底部</div>\n        </div>)\n    </template>\n              ')]),n._v('\n\n3.具名插槽:\n想给不同的插槽中填充不同的内容\n这个时候就可以使用具名插槽\n\n通过插槽的name属性给插槽指定名称\n在使用时可以通过slot="name"方式, 指定当前内容用于替换哪一个插槽\n注意点: 如果没有指定要替换哪个插槽中的内容, 则不会被替换\n\n'),t("textarea",[n._v('<div id="app">\n    <father></father>\n</div>\n<template id="father">\n    <div>\n        <son>\n           //这里通过slot属性告诉Vue,当前的内容是要填充到哪一个插槽中的\n            <div slot="one">我是追加的内容1</div>\n            <div slot="one">我是追加的内容11</div>\n            <div slot="two">我是追加的内容2</div>\n            <div slot="two">我是追加的内容22</div>\n        </son>\n    </div>\n</template>\n<template id="son">\n    <div>\n        <div>我是头部</div>\n        <slot name="one">我是默认内容</slot>\n        <slot name="two">我是默认内容</slot>\n        <div>我是底部</div>\n    </div>\n')]),n._v('\n4.作用域插槽:\n作用域插槽就是带数据的插槽, 就是让父组件在填充子组件插槽内容时也能使用子组件的数据\n    5.1在slot中通过 v-bind:数据名称="数据名称" 方式暴露数据\n    5.2在父组件中通过 template slot-scope="作用域名称" 接收数据\n    5.3在父组件的template中通过 作用域名称.数据名称 方式使用数据\n    作用域插槽的应用场景: 子组件提供数据, 父组件决定如何渲染\n\n5.v-slot指令\n在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。\n它取代了 slot 和 slot-scope\n注意点: v-slot指令只能用在template标签上\n        可以使用#号替代v-slot:\n            template v-slot:one\n            template #one\n            template #one="abc"\n            (template v-slot:插槽名称="作用域名称")\n也就是说我们除了可以通过v-slot指令告诉Vue内容要填充到哪一个具名插槽中\n还可以通过v-slot指令告诉Vue如何接收作用域插槽暴露的数据\n          ')])])},S=[],b={name:"SlotUse",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},x=b,_=(t("1ab8"),Object(h["a"])(x,f,S,!1,null,"c5d03f52",null)),y=_.exports,k=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"ssh"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("SSH公钥使用")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("      "),t("a",{attrs:{href:"https://gitee.com/help/articles/4181#article-header0"}},[n._v("SSH公钥生成教程")]),n._v('\n          1.ssh-keygen -t rsa -C "xxxxx@xxxxx.com" （改！）(在随便一个本地文件夹打开git终端输)\n          秘钥可以改名字，但是github只认识id_rsa/c/Users/平和猴子/.ssh/id_rsa，本地c盘的用户平和猴子里有了一个.ssh文件夹\n\n          2.cat ~/.ssh/id_rsa.pub\n              拷贝公钥(别拷多)\n\n          3.github账号和本地关联：\n           github--\x3esetting--\x3eSSH and GPG keys--\x3enew SSH key--\x3e粘贴保存\n           （这样就不用一个一个库授权，相当于是自己，要用SSH就要填这个）\n           别人的私密库要给我权限：\n           别人的github--\x3e库--\x3eDeploy keys--\x3e粘贴保存我的SSH key（要是id_rsa）\n\n\n      '),t("a",{attrs:{href:"https://blog.csdn.net/wwmusic/article/details/51027458?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control"}},[n._v("一台电脑如何管理多个SSH KEY")]),n._v("\n          4.ssh -T git@gitee.com（改成github.com）查看git认证是否配置成功\n              yes\n      ")])])},N=[],C={name:"SSH",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},j=C,D=(t("1bb9"),Object(h["a"])(j,k,N,!1,null,"3977a309",null)),L=D.exports,P=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"buildVueProject"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("创建Vue项目")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("         打开cmd，vue create XXX\n         选手动，manually\n         Babel，Router，Vuex，CSS Pre-processors，Linter、Formatter\n         ESLint + Standard config\n         Lint on save、Lint and fix on commit\n         In dedicated config files\n         N\n         删掉默认的几个文件，favicon.ico\\logo.png\\HelloWorld.vue\\About.vue\\Home.vue\n         删掉默认的router的规则、App.vue的代码样式、index.html\n         1.初始化HTML代码，国产浏览器兼容等，放自己的图标在public里\n         2.rem+视口缩放适配移动端，在index.html\n         注意点：HTML中用到了字符串模板，字符串模板中用到了变量，\n         html-plugin是无法处理的，报错。\n                借助一个loader：html-loader\n                npm官网搜索安装。要在webpack配置loader：\n                新建vue.config.js进行配置\n         3.npm i -D postcss-pxtorem,px变rem的插件，如宽高\n          新建postcss.config.js，配置\n         4.webpack实现CSS3、ES678兼容（Vue-CLI自动实现了）\n         5.文件.browserslistrc里写上要兼容什么浏览器（CSS会加浏览器前缀）\n         6.fastclick解决移动端100-300ms点击事件延迟\n         npm install fastclick \n         main.js触发：\n         import fastclick from 'fastclick'\n         fastclick.attach(document.body);\n         7.初始化默认全局样式\n         assets里新建css，base、variable、\n         在main.js里导入就可。\n         import './assets/css/base.scss'\n         8.移动端开发中，字体大小要不变\n         由于我们用视口缩放适配移动端，所以不能直接设置字体大小，否则会随屏幕尺寸变\n         index.html里获取了屏幕像素比data-dpr\n         mixin.scss里设置一下。以后用混合设置字体大小。\n         不用pxtorem的就设Px，如字体大小     \n         9.纳入git管理，add,commit\n         新建Develop,Home分支\n\n           ")])])},O=[],I={name:"BuildVueProject",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},Y=I,$=(t("4a9a"),Object(h["a"])(Y,P,O,!1,null,"6a08e994",null)),H=$.exports,M=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"fatherSonPassData"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("父子组件传递数据")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('\n              ****组件中的命名注意点\n1.1注册组件的时候使用了"驼峰命名", 那么在使用时需要转换成"短横线分隔命名"\n例如: 注册时: myFather  ->  使用时: my-father\n\n1.2在传递参数的时候如果想使用"驼峰名称", 那么就必须写"短横线分隔命名"\n例如: 传递时: parent-name="name" ->  接收时: props: ["parentName"]\n\n1.3在传递方法的时候不能使用"驼峰命名", 只能用"短横线分隔命名"\n@parent-say="say"  -> this.$emit("parent-say");\n\n\n\n\n1.父传子，子组件想要访问父组件的数据, 必须通过父组件传递\n1.1在父组件中通过v-bind传递数据\n   传递格式 v-bind:自定义接收名称 = "要传递数据"\n1.2在子组件中通过props接收数据\n   接收格式 props: ["自定义接收名称"]\n\n2.子组件想要访问父组件的方法, 必须通过父组件传递\n2.1在父组件中通过v-on传递方法\n   传递格式 v-on:自定义接收名称 = "要传递方法"\n2.2在子组件中自定义一个方法,如:\n              methods: {\n                    sonFn(){\n                        this.$emit("parentsay");\n                    }\n                }\n2.3在自定义方法中通过 this.$emit(\'自定义接收名称\');触发传递过来的方法\n\n3.子传父\n既然我们可以将父组件的方法传递给子组件\n既然我们可以在子组件中调用父组件中的方法,\n**那么就可以在调用方法的时候给方法传递参数\n传递的参数, 就是我们需要传递的数据\n               template: "#son",\n                methods: {\n                    sonFn(){\n                        // 第一个参数: 需要调用的函数名称\n                        // 后续的参数: 给调用的函数传递的参数\n                        this.$emit("parentsay", "知播渔");\n                    }\n                }\n                template: "#father",\n                methods: {\n                     say(data){\n                       console.log(data);\n                       }\n                },\n4.数据和方法的多级传递\n在Vue中如果儿子想使用爷爷的数据, 必须一层一层往下传递\n在Vue中如果儿子想使用爷爷的方法, 必须一层一层往下传递\n          ')])])},F=[],E={name:"FatherSonPassData",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},q=E,A=(t("4514"),Object(h["a"])(q,M,F,!1,null,"bbda5956",null)),V=A.exports,G=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"send-request"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("发请求、查询")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v(" 注意：addFile要用postman试接口，文档不行。domain、tenantId都传，body选file，key为file传文件\n\n\n   1.不发请求的删除：(等后面提交或保存）\n    handleDelete(item, record) {\n        let that = this\n        this.$confirm({\n          title: '确认？',\n          content: '确认要删除吗？',\n          onOk () {\n            let id = record.invoiceNumber\n            that.table.loadData.splice(that.table.loadData.findIndex(o => o.invoiceNumber==record.invoiceNumber),1)\n            that.$message.success('删除成功')\n          },\n          onCancel () {\n          }\n        })\n      },\n\n    发请求的删除：\n    handleMenuClick (e) {\n      if (this.selectedRows.length <= 0) {\n        this.$message.warning(\"请选择要删除数据\")\n        return\n      }\n          this.$confirm({\n            title: '确认删除',\n            content: '是否删除选中数据?',\n            onOk: () => {\n              this.localLoading = true\n              removeTYccOrgs(Object.assign({ ids: this.selectedRowKeys.join() }, this.queryParam))\n                .then(res => {\n                  this.success({\n                     message: '提示',\n                     description: '删除成功'\n                  })\n                  this.selectedRowKeys = []\n                  this.$refs.table.refresh(true)\n                }).catch((e) => {\n                  this.error({\n                    message: '错误',\n                    description: e.response.data.msg\n                  })\n                }).finally(() => {\n                  this.localLoading = false\n                })\n            }\n          })\n    },\n\n\n    2.调用接口（axios的接口）\n    getInvoicesInfo(billId){\n        getInvoicesList({billId}).then(res => {\n          if (_.get(res, 'success')) {\n           //post和get都是get\n            let data = _.get(res, 'data.records')\n          // let xxx= { ...data }.xxx//还包了一层的要 { ...data }\n            }\n            _.set(this.table, 'loadData', data)\n        }).finally(()=>{\n          this.pageSaveLoading = false\n        })\n      },\n\n    3.暴露接口传参数可以\n    export function getOrgCodeList (parameter) {\n      return axios({\n        url: api.getOrgCodeList,\n        method: 'get',\n        data: parameter\n      })\n    }\n\n     let orgParam = {\n        module: 'openRecord',\n        type: '2'\n    }\n     getOrgCodeList(orgParam)\n    //而且 getTYccInvoicesList({billId}).then(res => 这样写就相当?billId=传入的数字\n\n\n    用data或者这样\n    export function getInfo (parameter) {\n      return axios({\n        url: api.getInfo+'?id='+parameter,\n        method: 'get',\n        params: parameter\n      })\n    }\n    getInfo (this.id)\n\n\n\n    4.提交有上传文件的表单方法\n    handleSave() {\n      let that = this\n      const {\n        form: { validateFields }\n      } = this\n      validateFields(async (errors, values) => {\n        if (!errors) {\n          const formData = {}\n          let back = await this.handleUpload(this.upload.fileList)\n          if(back == 'out') {\n            return\n          }\n          Object.assign(formData, this.model, values)\n          if (_.get(back,'data.id')) {\n            Object.assign(formData, { annexIds: back.data.id })\n            Object.assign(formData, { annexNames: this.upload.fileList[0].name })\n          }\n          delete formData.uploadfile\n          this.$emit('ok', formData)\n          this.handleCancel()\n        }\n      })\n    }\n    Vue中this.$router.push（参数） 实现页面跳转\n    // 字符串\n    this.$router.push('/home/first')\n    // 对象\n    this.$router.push({ path: '/home/first' })\n    // 命名的路由\n    this.$router.push({ name: 'home', params: { userId: wise }})\n\n\n    5.\n      // 加载数据方法 必须为 Promise 对象\n      loadData: parameter => {\n        // 查询条件参数\n\t    let queryParam = {}\n\t    const { form: { validateFields }, selectedNode } = this\n\t    if (validateFields) {\n          validateFields((errors, values) => {\n\t      if (!errors) {\n\t\t\t   queryParam = values\n\t\t\t   queryParam.kdCode = selectedNode.attributes ? selectedNode.attributes.id : ''\n              if (this.treeId) {\n                queryParam.code = this.treeId\n              }\n\t      }\n\t    })\n        }\n     return getTodoList(Object.assign({}, parameter, queryParam))\n          .then(res => {\n            return {\n              pageSize: parameter.pageSize,\n              pageNo: parameter.pageNo,\n              totalCount: res.data.total,\n              totalPage: parseInt((res.data.total + parameter.pageSize - 1) / parameter.pageSize),\n              data: res.data.rows\n            }\n          })\n      },\n\n\n\n      没表单，就simple-table的情况\n      loadData: parameter => {\n        let queryParam = {\n          instId: this.instId ? this.instId : '-',\n          sortMapJson: '{}'\n        }\n        return getApprovalHistoryList(Object.assign({}, parameter, queryParam)).then(res => {\n          return {\n            data: res.data\n          }\n        })\n      }\n\n        export function getApprovalHistoryList (parameter) {\n          return axios({\n            url: api.history + parameter.instId + '/hisNodeInst',\n            method: 'get',\n            params: parameter\n          })\n        }\n\n          ")])])},T=[],R={name:"SendRequest",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},z=R,B=(t("f3a8"),Object(h["a"])(z,G,T,!1,null,"aa8ef9bc",null)),K=B.exports,U=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"knowledge-node"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("小知识点")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("  1.\n      @ /：表示 src目录下；\n\n  2.英语\n      cascader\n      级联器\n\n      avatar\n      头像\n\n      popover\n      弹出框\n\n      Anchor\n      锚\n\n  3.新机要装：\n      装Node.js：官网"),t("a",{attrs:{src:"https://nodejs.org/en/"}},[n._v("https://nodejs.org/en/")]),n._v('，下载安装包装好。\n      node -v\n      npm -v\n      装cnpm：npm install cnpm -g -registry=https://registry.npm.taobao.org\n      装SSH key，在GitHub添加\n      装vue，npm install vue\n\n  4.《a-row type="flex" justify="end"》\n value should be one of "start", "end", "center", "space-around", "space-between"\n\n  5.  一个界面按按钮出现一个modal，可以直接放着然后显示隐藏\n  《approval-hist-modal ref="approvalHistModal" :instId="instId" />\n  handleRecord(text,record) {\n    this.instId = record.procinstId\n    this.$refs.approvalHistModal.show()\n  }\n 《template>\n    《a-modal\n        title="审批记录"\n        :width="1200"\n        :visible="visible"。。。\n\n  也可以路由跳转\n      handleOpenAdd () {\n        this.$router.push({ // 核心语句\n          path: \'/openn/openlist/modules/open-apply-modal\', // 跳转的路径\n          query: { // 路由传参时push和query搭配使用 ，作用时传递参数\n            optType: \'add\'\n      }\n    })\n  },\n\n\n      6.\n\n      7.\n     在一个文件或模块中，export 可以导出多个，对应的 import导入加花括号{ }\n     export default仅可以导出一个，对应的import导入时候不用加花括号\n\n      8.  created () {\n             this.loadData()//不能这样调用方法，写法错误，而且在data里的写法自己就会调用了，像这样\n        },\n          loadData: parameter => {\n          let queryParam = {}\n          const { form: { validateFields }, selectedNode } = this。。。。。。\n\n      9.\n      设一个按钮怎么跳转到界面：\n      在UserMenu界面手动加按钮代码、路由。再这admin系统管理加一个按钮、一个界面，界面设为一级菜单而且隐藏路由，这样就看不到那栏，只有按钮看得到。然后授权。\n      总搞不好的原因是只设了按钮没设界面。然后是路径跳转了结果页面没跳转，打了断点debugger发现其实进去页面了，是因为页面很多东西没定义，解决了就看得到了。\n\n\n        ')])])},J=[],W={name:"KnowledgeNode",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},X=W,Q=(t("902b"),Object(h["a"])(X,U,J,!1,null,"521d35ac",null)),Z=Q.exports,nn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"date-format"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("日期格式化")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("  "),t("a",{attrs:{href:"http://momentjs.cn/"}},[n._v("momentjs.cn")]),n._v("\n  日期格式化\n  moment().format('MMMM Do YYYY, h:mm:ss a'); // 八月 20日 2020, 4:40:14 下午\n  moment().format('dddd');                    // 星期四\n  moment().format(\"MMM Do YY\");               // 8月 20日 20\n  moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020\n  moment().format();                          // 2020-08-20T16:40:14+08:00\n\n  相对时间\n  moment(\"20111031\", \"YYYYMMDD\").fromNow(); // 9 年前\n  moment(\"20120620\", \"YYYYMMDD\").fromNow(); // 8 年前\n  moment().startOf('day').fromNow();        // 17 小时前\n  moment().endOf('day').fromNow();          // 7 小时内\n  moment().startOf('hour').fromNow();       // 40 分钟前\n\n  日历时间\n  moment().subtract(10, 'days').calendar(); // 2020/08/10\n  moment().subtract(6, 'days').calendar();  // 上星期五16:40\n  moment().subtract(3, 'days').calendar();  // 上星期一16:40\n  moment().subtract(1, 'days').calendar();  // 昨天16:40\n  moment().calendar();                      // 今天16:40\n  moment().add(1, 'days').calendar();       // 明天16:40\n  moment().add(3, 'days').calendar();       // 下星期日16:40\n  moment().add(10, 'days').calendar();      // 2020/08/30\n\n  多语言支持\n  moment.locale();         // zh-cn\n  moment().format('LT');   // 16:40\n  moment().format('LTS');  // 16:40:14\n  moment().format('L');    // 2020/08/20\n  moment().format('l');    // 2020/8/20\n  moment().format('LL');   // 2020年8月20日\n  moment().format('ll');   // 2020年8月20日\n  moment().format('LLL');  // 2020年8月20日下午4点40分\n  moment().format('lll');  // 2020年8月20日 16:40\n  moment().format('LLLL'); // 2020年8月20日星期四下午4点40分\n  moment().format('llll'); // 2020年8月20日星期四 16:40\n\n             《template\n                     slot=\"createTime\"\n                     slot-scope=\"text, record\"\n             >{ moment(new Date(text)).format('YYYY-MM-DD HH:mm:ss') }}《/template>\n\n        ")])])},en=[],tn={name:"DateFormat",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},sn=tn,an=(t("1578"),Object(h["a"])(sn,nn,en,!1,null,"29469002",null)),on=an.exports,rn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"arrow-function"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("箭头函数")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!this.isShow,expression:"!this.isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"this.isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('       /*\n      1.普通函数/方法中的this, 谁调用就是谁\n      2.箭头函数中的this, 是父作用域的this，不是调用者\n      */\n      /*\n      function demo() {\n          console.log(this); // Window\n      }\n      demo();\n      // window.demo();\n      */\n      /*\n      let p = {\n          name: "lnj",\n          say: function () {\n              console.log(this); // {name: "lnj", say: ƒ}\n          },\n          // 因为没有将箭头函数放到其它的函数中, 所以箭头函数属于全局作用域\n          // 在JS中只有定义一个新的函数才会开启一个新的作用域\n          hi: () => {\n              console.log(this); // Window \n          }\n      }\n      p.say();\n      p.hi();\n      console.log(this); // Window\n      */\n      /*\n      function Person() {\n          this.name = "lnj";\n          this.say = function () {\n              console.log(this); // Person\n          }\n          // 因为将箭头函数放到其它的函数中, 所以箭头函数属于其它函数(当前的其它函数就是构造函数)\n          // 既然箭头函数属于构造函数, 所以箭头函数中的this就是构造函数的this\n          this.hi = () =>{\n              console.log(this); // Person\n          }\n      }\n      let p = new Person();\n      p.say();\n      p.hi();\n      */\n\n      function Person() {\n          this.name = "lnj";\n          this.say = function () {\n              console.log(this); // {name: "zs"}\n          }\n          this.hi = () =>{\n              console.log(this); // Person\n          }\n      }\n      let p = new Person();\n      p.say.call({name: "zs"});\n      // 注意点: 箭头函数中的this永远都只看它所属的作用域的this\n      //         无法通过bind/call/apply来修改\n      p.hi.call({name: "zs"});\n\n      // say=function () {\n      //     console.log(this);\n      //\n      //     console.log(this.name);\n      //\n      // }\n\n      // this.say=()=>{\n      //     console.log(this.name);\n      //     console.log(this);\n      // }\n\n       say=()=>{\n          console.log(this.name);\n          console.log(this);\n      }\n\n\n\n\n  /*\n      1.什么是箭头函数?\n      箭头函数是ES6中新增的一种定义函数的格式\n      目的: 就是为了简化定义函数的代码\n      let arr = new Array();\n      let arr = [];\n\n      2.在ES6之前如何定义函数\n      function 函数名称(形参列表){\n          需要封装的代码;\n      }\n      let 函数名称 = function(形参列表){\n          需要封装的代码;\n      }\n\n      3.从ES6开始如何定义函数\n      let 函数名称 = (形参列表) =>{\n          需要封装的代码;\n      }\n\n      4.箭头函数的注意点\n      4.1在箭头函数中如果只有一个形参, 那么()可以省略\n      4.2在箭头函数中如果{}中只有一句代码, 那么{}也可以省略\n      */\n      /*\n      // function say() {\n      //     console.log("hello lnj");\n      // }\n      let say = () => {\n          console.log("hello lnj");\n      }\n      say();\n      */\n\n      // function say(name) {\n      //     console.log("hello  " + name);\n      // }\n      // let say = (name) => {\n      //     console.log("hello  " + name);\n      // }\n      // let say = name => {\n      //     console.log("hello  " + name);\n      // }\n      let say = name => console.log("hello  " + name);\n      say("it666");\n\n\n        ')])])},ln=[],hn={name:"ArrowFunction",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},cn=hn,dn=(t("a236"),Object(h["a"])(cn,rn,ln,!1,null,"25186f8b",null)),mn=dn.exports,un=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"life-circle"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("生命周期")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("          生命周期：\n\n      - beforecreate : 一般使用场景是在加 loading事件 的时候\n      - created ：处于loading结束后，还做一些初始化，实现函数自执行（data数据已经初始化，但是DOM结构渲染完成，组件没有加载）\n      - beforemount：处于组件创建完成，但未开始执行操作\n      - mounted ：处于发起后端请求，获取数据，配合路由钩子执行操作（DOM渲染完成，组件挂载完成 ）\n      - beforeupdate、updated：处于数据更新的前后\n      - beforeDestroy：当前组件还在的时候，想删除组件\n      - destroyed ：当前组件已被销毁，清空相关内容\n\n      **created 与 mounted 的区别**\n\n      - created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。\n      - mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。\n\n      **mounted 与 methods 的区别**\n\n      - mounted 是生命周期方法之一，会在对应生命周期时执行。\n      - methods 是Vue实例对象上绑定的方法，供当前Vue组件作用域内使用，未调用不会执行，只执行逻辑，返回值可有可无。\n\n      **computed 与 watched 的区别**\n\n      - computed 是计算属性，也可以理解为一个方法。其中计算的结果如果不发生改变就不会触发，且必须返回一个值并在DOM中绑定的才能取得值。他可以自动获取数据的改变。\n      - watched 属性是手动定义的所需监听的值，不同的数据可以在其中多次定义监听值，这时会消耗一定性能，他并不能像computed那样自动改变。\n\n\n        ")])])},pn=[],vn={name:"Ellipsis",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},wn=vn,gn=(t("bb6f"),Object(h["a"])(wn,un,pn,!1,null,"5ba29e39",null)),fn=gn.exports,Sn={name:"BuildSite",components:{Github:d,SSH:L,BuildVueProject:H,Git:g,SlotUse:y,FatherSonPassData:V,SendRequest:K,KnowledgeNode:Z,DateFormat:on,ArrowFunction:mn,LifeCircle:fn},data:function(){return{}},methods:{}},bn=Sn,xn=(t("94aa"),Object(h["a"])(bn,s,a,!1,null,"0ad5bfd5",null));e["default"]=xn.exports},"4f6d":function(n,e,t){},"5cda":function(n,e,t){},"64df":function(n,e,t){},6663:function(n,e,t){},7260:function(n,e,t){},"83f7":function(n,e,t){"use strict";var s=t("64df"),a=t.n(s);a.a},"902b":function(n,e,t){"use strict";var s=t("e7d5"),a=t.n(s);a.a},"94aa":function(n,e,t){"use strict";var s=t("0e10"),a=t.n(s);a.a},a236:function(n,e,t){"use strict";var s=t("cd21"),a=t.n(s);a.a},bb1f:function(n,e,t){},bb6f:function(n,e,t){"use strict";var s=t("bb1f"),a=t.n(s);a.a},c228:function(n,e,t){},c3ab:function(n,e,t){"use strict";var s=t("fc41"),a=t.n(s);a.a},cd21:function(n,e,t){},e7d5:function(n,e,t){},ed1d:function(n,e,t){},f3a8:function(n,e,t){"use strict";var s=t("c228"),a=t.n(s);a.a},fc41:function(n,e,t){}}]);
//# sourceMappingURL=chunk-0ef4c2ea.f6958b3f.js.map