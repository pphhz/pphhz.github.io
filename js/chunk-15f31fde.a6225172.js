(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15f31fde"],{"1e9c":function(n,e,t){},"34f4":function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"js"},[t("ul",[t("li",[t("arr-str-operate")],1),t("li",[t("is-mobile")],1)])])},a=[],r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"arr-str-operate"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("操作数组的方法")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"arrStrOperate",attrs:{value:n.content,"code-editor-style":{height:"300px"},"is-show-copy":!0,"line-numbers":!0}})],1)},s=[],o=t("d7df"),l={name:"ArrStrOperate",components:{SimpleCodeEditor:o["a"]},data:function(){return{isShow:!1,content:'1、切割数组（字符串）\n\n    操作数组的方法\n    1.splice返回切下来的数组，会改变原始数组。\n              var arr=[\'aa\',\'bb\',\'cc\']\n              console.log(arr.splice(2,1))\n                //从2开始切一个\n                //[cc]\n              console.log(arr.splice(2,0))\n                //从2开始切0个\n                //[]\n           \n              //清空数组\n              this.serviceParamVOS.splice(0, this.serviceParamVOS.length);\n    \n          2.slice返回切下来的数据，不会改变原始数组、字符串\n                var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];\n                var citrus = fruits.slice(1,3);\n                //Orange,Lemon\n                //从1处开始到3之前的\n    \n    \n                var str="www.runoob.com!";\n                document.write(str.slice(4)); // 从第 4 开始到末尾\n                //runoob.com!\n                document.write(str.slice(4,10)); // 从第 4 开始到10之前\n                //runoob\n    \n    \n    \n           3.split一个字符串分割成数组，不改变原始字符串\n              var str="How are you doing today?";\n              var n=str.split(" ");\n              //How,are,you,doing,today?\n\n2、删掉数组中的某些字符串\n\n    //删掉数组中的某些不包含的字符串，this.onLoadData1被切了，i要变\n    \n    onSearch(value) {\n      for(let i=0;i<this.onLoadData1Back.length;i++) {\n        if(this.onLoadData1Back[i].colName.indexOf(value) === -1){\n          let index = i\n          this.onLoadData1.splice(index,1)\n          i= i-1\n        }\n      }\n    },\n\n3、搜索框的前端搜索方法\n\n        // 搜索框的前端搜索方法\n          onSearchCenter(value) {\n            // 每次搜索前，恢复备份，防止第二次搜出来的东西是在第一次的结果里搜 去掉前后空格\n              value = value.trim()\n              this.loadData.splice(0, this.loadData.length)\n              this.loadDataBack.forEach((line) => {\n                this.loadData.push(line)\n              })\n            if (value !== \'\') {\n              for (let i = 0; i < this.loadData.length; i++) {\n                if (this.loadData[i].tableName.indexOf(value) === -1) {\n                  let index = i\n                  this.loadData.splice(index, 1)\n                  i = i - 1\n                }\n              }\n            }\n          },\n\n4、数组重复判断  去重\n\n// 这样会/usersssssss和/user判断出来也重复    去重\n\n    function arrRepeat(arr){\n    var arrStr = JSON.stringify(arr),str;\n    for (var i = 0; i < arr.length; i++) {\n        if (arrStr.indexOf(arr[i]) != arrStr.lastIndexOf(arr[i])){\n      \t  return true;\n      \t  }\n        };\n       \t return false;\n    }\n\n    function arrRepeat(arr){\n    for (var i = 0; i < arr.length; i++) {\n        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])){\n      \t  return true;\n      \t  }\n        };\n       \t return false;\n    }\n\n        for(let i = 0;i<this.loadData2.length-1;i++){\n            for(let j = i+1;j<this.loadData2.length;j++){\n                if (this.loadData2[i].field2Table  == this.loadData2[j].field2Table ){\n                    this.$notification.warning({\n                        message: \'警告\',\n                        description: \'不能选择相同子表\',\n                    })\n                    return\n                }\n            }\n        }\n\n\n'}},watch:{isShow:function(n){var e=this;n&&this.$nextTick((function(){e.$refs.arrStrOperate.refresh()}))}},methods:{toggle:function(){this.isShow=!this.isShow}}},c=l,h=(t("4994"),t("2877")),d=Object(h["a"])(c,r,s,!1,null,"ebf8b44a",null),u=d.exports,f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"isMobile"},[t("div",{staticClass:"header",on:{click:n.toggle}},[t("h3",[n._v("js判断是否为手机端")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),t("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),t("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"warpper",staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("来源："),t("a",{attrs:{href:"https://blog.csdn.net/sdeweis/article/details/112641962"}},[n._v("js判断是否为手机")]),n._v("\n\n"),t("simple-code-editor",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],ref:"isMobile",attrs:{value:n.content,"code-editor-style":{height:"300px"},"is-show-copy":!0,"line-numbers":!0}}),n._v(" \n")],1)])},w=[],v={name:"IsMobile",components:{SimpleCodeEditor:o["a"]},data:function(){return{isShow:!1,content:"\n    //js判断是否为手机\n    _isMobile() {\n        let flag = navigator.userAgent.match(\n           /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i\n        );\n        if(flag == null){\n            return false;\n        }else{\n           return true;\n        }\n     // let flag = document.body.scrollWidth> 1000 ? false : true\n     //  return flag;\n    },"}},watch:{isShow:function(n){var e=this;n&&this.$nextTick((function(){e.$refs.isMobile.refresh()}))}},methods:{toggle:function(){this.isShow=!this.isShow}}},p=v,m=(t("db8e"),Object(h["a"])(p,f,w,!1,null,"d3e7194a",null)),S=m.exports,g={name:"JS",components:{ArrStrOperate:u,IsMobile:S},data:function(){return{}},methods:{}},b=g,x=(t("dc69"),Object(h["a"])(b,i,a,!1,null,"aa5acd68",null));e["default"]=x.exports},4994:function(n,e,t){"use strict";var i=t("f199"),a=t.n(i);a.a},"7ae6":function(n,e,t){},db8e:function(n,e,t){"use strict";var i=t("1e9c"),a=t.n(i);a.a},dc69:function(n,e,t){"use strict";var i=t("7ae6"),a=t.n(i);a.a},f199:function(n,e,t){}}]);