(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6117eea2"],{"069c":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"guitar"},[t.isShowHome?a("div",{staticClass:"container"},[a("div",{staticClass:"son",on:{click:function(s){return t.toggle("website")}}},[a("span",[t._v("网站")])]),a("div",{staticClass:"son",on:{click:function(s){return t.toggle("train")}}},[a("span",[t._v("练习")])])]):t._e(),t.isShowTrain?a("train",{ref:"train",attrs:{param:t.param},on:{toggleSon:t.toggle}}):t._e()],1)},n=[],e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"train"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[i("div",{on:{click:t.closeTrain}},[t._v("⬅")]),"train"==t.param?i("span",[t._v("练习")]):t._e(),"website"==t.param?i("span",[t._v("网站")]):t._e(),"study"==t.param?i("span",[t._v("学习")]):t._e()]),"website"==t.param?i("div",[t._m(0)]):t._e(),"train"==t.param?i("div",{staticStyle:{height:"100%","text-align":"center"}},[t._m(1),i("img",{ref:"disc",staticClass:"autoRotate",attrs:{src:"https://s2.loli.net/2022/06/27/OyrsnYhSDTopLxQ.png"}}),i("p",{staticClass:"margin-top"},[t._v("星条旗进行曲")]),i("audio",{attrs:{src:a("8a5f"),controls:"",loop:""},on:{play:t.play,pause:t.pause}})]):t._e()])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[t._v("      基础乐理：\n      "),a("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=1512007"}},[t._v("乐理入门篇")]),t._v("\n\n      入门教程：\n      "),a("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=821008"}},[t._v("从零到高手，吉他入门标准教程")]),t._v("\n\n      良心师傅up主：\n      "),a("a",{attrs:{href:"https://space.bilibili.com/326251291?spm_id_from=333.788.b_765f7570696e666f.1"}},[t._v("元子弹吉他")]),t._v("\n      "),a("a",{attrs:{href:"https://space.bilibili.com/188519580"}},[t._v("老默er")]),t._v("\n\n      吉他网站：\n      "),a("a",{attrs:{href:"https://www.jitashe.org/"}},[t._v("吉他社")]),t._v("\n          ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"margin-top"},[a("a",{attrs:{href:"https://space.bilibili.com/36963051"}},[t._v("我的b站个人主页")])])}],o={name:"Train",components:{},data:function(){return{songUrl:"",isPlaying:!1}},props:{param:{type:String}},methods:{play:function(){this.isPlaying=!0,this.$refs.disc.classList.add("discPlaying")},pause:function(){this.isPlaying=!1,this.$refs.disc.classList.remove("discPlaying")},closeTrain:function(){this.$emit("toggleSon")}}},c=o,l=(a("d32e"),a("2877")),u=Object(l["a"])(c,e,r,!1,null,"7b3a8be1",null),p=u.exports,h={name:"Guitar",components:{Train:p},data:function(){return{isShowTrain:!1,isShowHome:!0,param:""}},methods:{toggleSon:function(){this.isShowTrain=!this.isShowTrain,this.isShowHome=!this.isShowHome},toggle:function(t){this.toggleSon(),this.param="website"==t?"website":"train"==t?"train":"study"==t?"study":""}}},d=h,m=(a("9a3b"),Object(l["a"])(d,i,n,!1,null,"d0591948",null));s["default"]=m.exports},"6b13":function(t,s,a){},"8a5f":function(t,s,a){t.exports=a.p+"media/theStarsAndStripesForever.3e1a5d1d.aac"},"9a3b":function(t,s,a){"use strict";a("adcd")},adcd:function(t,s,a){},d32e:function(t,s,a){"use strict";a("6b13")}}]);