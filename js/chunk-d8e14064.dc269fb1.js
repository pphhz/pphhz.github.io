(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8e14064"],{"0f62":function(n,e,r){},2669:function(n,e,r){},"72b7":function(n,e,r){},"7bde":function(n,e,r){},a74e:function(n,e,r){"use strict";var t=r("72b7"),s=r.n(t);s.a},bc66:function(n,e,r){"use strict";var t=r("7bde"),s=r.n(t);s.a},cbb9:function(n,e,r){"use strict";r.r(e);var t=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"note"},[r("ul",[r("li",[r("BuildNodeJS")],1),r("li",[r("InstallNRMandCNPM")],1),r("li",[r("Reorder")],1)])])},s=[],a=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"buildNodeJS"},[r("div",{staticClass:"header",on:{click:n.toggle}},[r("h3",[n._v("NodeJS运行环境搭建")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),r("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),r("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v('  搭建方式一:\n      1.官网下载.msi安装包: https://nodejs.org/zh-cn/\n      2.全程下一步\n      3.在命令行工具中输入 node -v\n\n  搭建方式二:\n      1.官网下载.zip安装包: https://nodejs.org/zh-cn/\n      2.解压下载好的安装包\n      3.在"高级系统设置"中手动配置环境变量\n      4.在命令行工具中输入 node -v\n\n  搭建方式三:\n      1.下载NVM: https://github.com/coreybutler/nvm-windows\n      2.在D盘创建dev目录\n      3.在Dev目中中创建两个子目录nvm和node, 并且把nvm包解压进去nvm目录中\n      4.在install.cmd文件上面右键选择【以管理员身份运行】\n          在终端中直接按下回车\n          将弹出的文件另存为到NVM目录\n          打开settings.txt文件. 修改\n          root: D:\\dev\\nvm\n          path: D:\\dev\\node\n      6.配置环境变量\n          NVM_HOME: D:\\dev\\nvm\n          NVM_SYMLINK: D:\\dev\\node\n          在Path中添加 %NVM_HOME% %NVM_SYMLINK%\n      7.在命令行工具中输入 nvm version\n\n        NVM常用命令\n        - nvm list 查看当前安装的Node.js所有版本\n        - nvm install 版本号 安装指定版本的Node.js\n        - nvm uninstall 版本号 卸载指定版本的Node.js\n        - nvm use 版本号 选择指定版本的Node.js\n        ')])])},i=[],o={name:"BuildNodeJS",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},l=o,c=(r("a74e"),r("2877")),v=Object(c["a"])(l,a,i,!1,null,"6a9d3b69",null),h=v.exports,d=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"installNRMandCNPM"},[r("div",{staticClass:"header",on:{click:n.toggle}},[r("h3",[n._v("安装使用NRM、CNPM")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),r("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),r("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("1.什么是nrm?\n\n\n    由于npm默认去国外下载资源, 所以对于国内开发者来说下载会比较慢\n    所以就有人写了一个nrm工具, 允许你将资源下载地址从国外切换到国内\n\n    npm install -g nrm   安装NRM\n    nrm --version 查看是否安装成功\n    nrm ls    查看允许切换的资源地址\n    nrm use taobao  将下载地址切换到淘宝\n\n    PS:淘宝资源地址和国外的地址内容完全同步,淘宝镜像与官方同步频率目前为 \n    10分钟一次以保证尽量与官方服务同步\n\n\n2.什么是cnpm?\n\n\n    由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢\n    cnpm 就是将下载源从国外切换到国内下载, 只不过是将所有的指令从npm变为cnpm而已\n\n    npm install cnpm -g –registry=https://registry.npm.taobao.org  安装CNPM\n    cnpm -v  查看是否安装成功\n    使用方式同npm, 例如: npm install jquery 变成cnpm install jquery 即可\n          ")])])},u=[],w={name:"InstallNRMandCNPM",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},p=w,m=(r("f2df"),Object(c["a"])(p,d,u,!1,null,"00f2a038",null)),f=m.exports,S=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"reorder"},[r("div",{staticClass:"header",on:{click:n.toggle}},[r("h3",[n._v("排序")]),r("span",{directives:[{name:"show",rawName:"v-show",value:!n.isShow,expression:"!isShow"}]},[n._v("▼")]),r("span",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}]},[n._v("▲")])]),r("pre",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticStyle:{"word-wrap":"break-word","white-space":"pre-wrap"}},[n._v("1.快速排序\n    function quickSort(arr){\n          if(arr.length<1){\n              return arr;\n    }\n    var pivotIndex=Math.floor(arr.length/2);//找到那个基准数\n    var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组。\n    var left=[];\n    var right=[];\n    for(var i=0;i< arr.length;i++){\n        if(arr[i]< pivot){\n              left.push(arr[i]);\n        }else{\n            right.push(arr[i]);\n        }\n    }\n    return quickSort(left).concat([pivot],quickSort(right)); //加入基准数\n  }\n    arr=[4,2,6,12,66,9];\n    console.log(quickSort(arr)); //[2,4,6,9,12,66]\n\n\n2.冒泡排序\n    var arr1=[4,22,1,6,3,7,2];\n    for(var i=1;i<=arr1.length-1;i++){\n        for(var j=0;j<=arr1.length-i-1;j++){\n            if(arr1[j]>=arr1[j+1]){\n              var temp=arr1[j];\n              arr1[j]=arr1[j+1];\n              arr1[j+1]=temp;\n              }\n        }\n    }\n    console.log(arr1);\n\n\n3.计数排序\n    function countingSort(iArr, max) {\n      var n = iArr.length;\n      var oArr = [];\n      // 创建长度max的数组，填充0\n      var C = [];\n      for(var i = 0; i <= max; i++){\n              C[i] = 0;\n    }\n    // 遍历输入数组，填充C\n    for(var j = 0; j < n; j++){\n          C[iArr[j]]++;\n    }\n    // 遍历C，输出数组\n    for(var k = 0; k <= max; k++){\n    // 按顺序将值推入输出数组，并在比较后将对应标志位减1\n        while(C[k]-- > 0){\n          oArr.push(k);\n        }\n    }\n    return oArr;\n    }\n\n    countingSort([2, 1, 3, 1, 5], 5);\n    // 输出[1, 1, 2, 3, 5]\n  ")])])},N=[],g={name:"Reorder",data:function(){return{isShow:!1}},methods:{toggle:function(){this.isShow=!this.isShow}}},j=g,b=(r("bc66"),Object(c["a"])(j,S,N,!1,null,"d0c7d16e",null)),M=b.exports,_={name:"Note",components:{BuildNodeJS:h,InstallNRMandCNPM:f,Reorder:M},data:function(){return{}},methods:{}},x=_,C=(r("e4d6"),Object(c["a"])(x,t,s,!1,null,"bc3ac962",null));e["default"]=C.exports},e4d6:function(n,e,r){"use strict";var t=r("0f62"),s=r.n(t);s.a},f2df:function(n,e,r){"use strict";var t=r("2669"),s=r.n(t);s.a}}]);
//# sourceMappingURL=chunk-d8e14064.dc269fb1.js.map