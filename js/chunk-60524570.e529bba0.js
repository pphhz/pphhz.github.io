(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60524570"],{"221d":function(n,e,t){},"34f4":function(n,e,t){"use strict";t.r(e);var s=function(){var n=this,e=n._self._c;return e("div",{staticClass:"js"},[e("ul",[e("li",[e("arr-str-operate")],1),e("li",[e("is-mobile")],1),e("li",[e("jump")],1)])])},o=[],r=function(){var n=this,e=n._self._c;return e("div",{staticClass:"arr-str-operate"},[e("div",{staticClass:"header",on:{click:n.toggle}},[e("h3",[n._v("操作数组的方法")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),e("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),e("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"arrStrOperate",attrs:{value:n.content,"code-editor-style":{height:"300px"},"is-show-copy":!0,"line-numbers":!0}})],1)},i=[],a=t("d7df"),l={name:"ArrStrOperate",components:{SimpleCodeEditor:a["a"]},data(){return{isShow:!1,content:'\n1、切割数组（字符串）\n      1.splice返回切下来的数组，会改变原始数组。\n          var arr=[\'aa\',\'bb\',\'cc\']\n          console.log(arr.splice(2,1))\n            //从2开始切一个\n            //[cc]\n          console.log(arr.splice(2,0))\n            //从2开始切0个\n            //[]\n       \n          //清空数组\n          this.serviceParamVOS.splice(0, this.serviceParamVOS.length);\n\n      2.slice返回切下来的数据，不会改变原始数组、字符串\n            var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];\n            var citrus = fruits.slice(1,3);\n            //Orange,Lemon\n            //从1处开始到3之前的\n\n\n            var str="www.runoob.com!";\n            document.write(str.slice(4)); // 从第 4 开始到末尾\n            //runoob.com!\n            document.write(str.slice(4,10)); // 从第 4 开始到10之前\n            //runoob\n\n\n      3.substring返回切下来的数据，一个新的字符串，不会改变原始数组、字符串\n            var str="Hello world!"\n            document.write(str.substring(3,7))\n            //lo w\n            //从3处开始到7之前的\n\n            stringObject.substring(start,stop)\n            start\t必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。\n            stop    可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多。\n如果省略stop参数，那么返回的子串会一直到字符串的结尾。\n\n       4.split一个字符串分割成数组，不改变原始字符串\n          var str="How are you doing today?";\n          var n=str.split(" ");\n          //How,are,you,doing,today?\n\n2、删掉数组中的某些字符串\n\n    //删掉数组中的某些不包含的字符串，this.onLoadData1被切了，i要变\n    \n    onSearch(value) {\n      for(let i=0;i<this.onLoadData1Back.length;i++) {\n        if(this.onLoadData1Back[i].colName.indexOf(value) === -1){\n          let index = i\n          this.onLoadData1.splice(index,1)\n          i= i-1\n        }\n      }\n    },\n\n3、搜索框的前端搜索方法\n\n        // 搜索框的前端搜索方法\n          onSearchCenter(value) {\n            // 每次搜索前，恢复备份，防止第二次搜出来的东西是在第一次的结果里搜 去掉前后空格\n              value = value.trim()\n              this.loadData.splice(0, this.loadData.length)\n              this.loadDataBack.forEach((line) => {\n                this.loadData.push(line)\n              })\n            if (value !== \'\') {\n              for (let i = 0; i < this.loadData.length; i++) {\n                if (this.loadData[i].tableName.indexOf(value) === -1) {\n                  let index = i\n                  this.loadData.splice(index, 1)\n                  i = i - 1\n                }\n              }\n            }\n          },\n\n4、数组重复判断  去重\n\n// 这样会/usersssssss和/user判断出来也重复    去重\n\n    function arrRepeat(arr){\n    var arrStr = JSON.stringify(arr),str;\n    for (var i = 0; i < arr.length; i++) {\n        if (arrStr.indexOf(arr[i]) != arrStr.lastIndexOf(arr[i])){\n      \t  return true;\n      \t  }\n        };\n       \t return false;\n    }\n\n    function arrRepeat(arr){\n    for (var i = 0; i < arr.length; i++) {\n        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])){\n      \t  return true;\n      \t  }\n        };\n       \t return false;\n    }\n\n        for(let i = 0;i<this.loadData2.length-1;i++){\n            for(let j = i+1;j<this.loadData2.length;j++){\n                if (this.loadData2[i].field2Table  == this.loadData2[j].field2Table ){\n                    this.$notification.warning({\n                        message: \'警告\',\n                        description: \'不能选择相同子表\',\n                    })\n                    return\n                }\n            }\n        }\n\n\n'}},watch:{isShow(n){n&&this.$nextTick(()=>{this.$refs.arrStrOperate.refresh()})}},methods:{toggle(){this.isShow=!this.isShow}}},h=l,u=(t("de17"),t("2877")),c=Object(u["a"])(h,r,i,!1,null,"a35410a2",null),d=c.exports,p=function(){var n=this,e=n._self._c;return e("div",{staticClass:"isMobile"},[e("div",{staticClass:"header",on:{click:n.toggle}},[e("h3",[n._v("js判断是否为手机端")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),e("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),e("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"warpper",staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("来源："),e("a",{attrs:{href:"https://blog.csdn.net/sdeweis/article/details/112641962"}},[n._v("js判断是否为手机")]),n._v("\n\n"),e("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"isMobile",attrs:{value:n.content,"code-editor-style":{height:"300px"},"is-show-copy":!0,"line-numbers":!0}}),n._v(" \n")],1)])},m=[],w={name:"IsMobile",components:{SimpleCodeEditor:a["a"]},data(){return{isShow:!1,content:"\n    //js判断是否为手机\n    _isMobile() {\n        let flag = navigator.userAgent.match(\n           /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i\n        );\n        if(flag == null){\n            return false;\n        }else{\n           return true;\n        }\n     // let flag = document.body.scrollWidth> 1000 ? false : true\n     //  return flag;\n    },"}},watch:{isShow(n){n&&this.$nextTick(()=>{this.$refs.isMobile.refresh()})}},methods:{toggle(){this.isShow=!this.isShow}}},v=w,f=(t("6c07"),Object(u["a"])(v,p,m,!1,null,"65deebe6",null)),g=f.exports,S=function(){var n=this,e=n._self._c;return e("div",{staticClass:"jump"},[e("div",{staticClass:"header",on:{click:n.toggle}},[e("h3",[n._v("页面跳转")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),e("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),e("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("页面跳转\n\n一、路由跳转\n\n1.push\n\n\n    Vue中this.$router.push（参数） 实现页面跳转\n    // 字符串\n    this.$router.push('/home/first')\n    // 对象\n    this.$router.push({ path: '/home/first' })\n    // 命名的路由\n    this.$router.push({ name: 'home', params: { userId: wise } })\n    this.$router.push({ name: 'home', query: { userId: wise } })\n    \n\n\n\n\n\n2.replace\n\n\n    this.$router.replace() (用法同上,push)\n  \n    //push和replace区别\n    this.$router.push\n    跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面\n    this.$router.replace\n    跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)\t\n    \n    \n    // 接收参数\n    // script 取参 this.$route.query.userId\n    // script 取参 this.$route.params.userId\n    \n    //query和params区别\nquery类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传, 密码之类还是用params刷新页面id还在\n\nparams类似 post, 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失\n\n\n\n\n 3.router-link\n\n\n//创建路由实例  \nconst router = new VueRouter({routes})  \n\nnew Vue({  \n    el: '#app',  \n    data: {  \n    },  \n    methods: {  \n    },  \n    router  \n})\n\n\n\n// 路由出口\n\n    "),e("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"slotUse1",attrs:{value:n.content1,language:"vue","code-editor-style":{height:"50px"},"is-show-copy":!0,"line-numbers":!0}}),n._v(" \n\n\n\nrouter文件夹的index.js:\n\n\nimport Vue from 'vue'\nimport VueRouter from 'vue-router'\n\nVue.use(VueRouter)\n//按需加载,导入\nconst Home=(resolve)=>{\n  import('../views/Home').then((module)=>\n    resolve(module)\n)}\nconst Support=(resolve)=>{\n  import('../views/Support').then((module)=>\n    resolve(module)\n)}\nconst HtmlCss=(resolve)=>{\n  import('../components/home/HtmlCss').then((module)=>\n    resolve(module)\n)}\nconst JS=(resolve)=>{\n    import('../components/home/JS').then((module)=>\n        resolve(module)\n)}\n\n\n\nconst routes = [\n  {path:'/',redirect:'/home/htmlCss'},\n  {path:'/home',redirect:'/home/htmlCss'},\n  {path:'/Home',\n     component:Home,\n     children:[{\n         path:'htmlCss',\n         component:HtmlCss,\n     },{\n         path:'js',\n         component:JS,\n     }\n    ]\n  },\n  {path:'/Support',component:Support},\n]\n\nconst router = new VueRouter({\n  routes:routes\n})\n\nexport default router\n\n\n\n\n\n\n\n 3.1.不带参数\n\n\n    "),e("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"slotUse2",attrs:{value:n.content2,language:"vue","code-editor-style":{height:"130px"},"is-show-copy":!0,"line-numbers":!0}}),n._v(' \n\n\n path: "/about",\n\n\n 3.2.带参数\n\n\n// params传参数 (类似post)\n// 路由配置 path: "/home/:id" 或者 path: "/home:id"\n// 不配置path ,第一次可请求,刷新页面id会消失\n// 配置path,刷新页面id会保留\n// script 取参 this.$route.params.id\n\n    '),e("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"slotUse3",attrs:{value:n.content3,language:"vue","code-editor-style":{height:"50px"},"is-show-copy":!0,"line-numbers":!0}}),n._v(" \n\n\n\n\n4.go\n\n\n// 可能没用，没用就用push\n   this.$router.go(-1)\n// 向前或者向后跳转n个页面，n可为正整数或负整数\n   this.$router.go(n)\n\n\n\n5.location          原生js对象\n\n\nlocation.href-- 返回或设置当前文档的URL\nlocation.search -- 返回URL中的查询字符串部分。例如 http://www.dreamdu.com/dreamdu.php?id=5&name=dreamdu 返回包括(?)后面的内容?id=5&name=dreamdu\nlocation.hash -- 返回URL#后面的内容，如果没有#，返回空\nlocation.host -- 返回URL中的域名部分，例如www.dreamdu.com\nlocation.hostname -- 返回URL中的主域名部分，例如dreamdu.com\nlocation.pathname -- 返回URL的域名后的部分。例如 http://www.dreamdu.com/xhtml/ 返回/xhtml/\nlocation.port -- 返回URL中的端口部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回8080\nlocation.protocol -- 返回URL中的协议部分。例如 http://www.dreamdu.com:8080/xhtml/ 返回(//)前面的内容http:\nlocation.assign -- 设置当前文档的URL\nlocation.replace() -- 设置当前文档的URL，并且在history对象的地址列表中移除这个URL location.replace(url);\nlocation.reload() -- 重载当前页面\n\n\n6.history             原生js对象\n\n\nhistory.go() -- 前进或后退指定的页面数 history.go(num);\nhistory.back() -- 后退一页\nhistory.forward() -- 前进一页\n\n\n7.此外       navigator           原生js对象\n\n\nnavigator.userAgent -- 返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)\nnavigator.cookieEnabled -- 返回浏览器是否支持(启用)cookie\n\n\n\n\n二、弹窗，就visible控制显示隐藏\n\n\n\n ")],1)])},b=[],x={name:"Jump",components:{SimpleCodeEditor:a["a"]},data(){return{isShow:!1,content1:"<router-view></router-view>",content2:'<router-link :to="{name:\'home\'}">\n<router-link :to="{path:\'/home\'}"> //name,path都行, 建议用name\n// 注意：router-link中链接如果是\'/\'开始就是从根路由开始，如果开始不带\'/\'，则从当前路由开始。\n<router-link tag="li" :to="item.path" class="item" :class=\'{bg:index==activeIndex}\'>\n      <div @click="bgcChange(index)">{{item.discp}}</div>\n</router-link>',content3:'<router-link tag="li"  :to="{name:\'home\', params: {id:1}}">\n<router-link  tag="li"  :to="{name:\'home\', query: {id:1}}">'}},watch:{isShow(n){n&&this.$nextTick(()=>{this.$refs.slotUse1.refresh(),this.$refs.slotUse2.refresh(),this.$refs.slotUse3.refresh()})}},methods:{toggle(){this.isShow=!this.isShow}}},y=x,k=(t("5832"),Object(u["a"])(y,S,b,!1,null,"45713606",null)),_=k.exports,O={name:"JS",components:{ArrStrOperate:d,Jump:_,IsMobile:g},data(){return{}},methods:{}},j=O,$=(t("c992"),Object(u["a"])(j,s,o,!1,null,"66ca1142",null));e["default"]=$.exports},5832:function(n,e,t){"use strict";t("221d")},"6c07":function(n,e,t){"use strict";t("a5f4")},"75c3":function(n,e,t){},a5f4:function(n,e,t){},ae91:function(n,e,t){},c992:function(n,e,t){"use strict";t("ae91")},de17:function(n,e,t){"use strict";t("75c3")}}]);