(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7255a17b"],{"069c":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"guitar"},[t.isShowHome?s("div",{staticClass:"container"},[s("div",{staticClass:"son",on:{click:function(s){return t.toggle("website")}}},[s("span",[t._v("网站")])]),s("div",{staticClass:"son",on:{click:function(s){return t.toggle("train")}}},[s("span",[t._v("练习")])])]):t._e(),t.isShowTrain?s("train",{ref:"train",attrs:{param:t.param},on:{toggleSon:t.toggle}}):t._e()],1)},n=[],e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"train"},[s("div",{staticClass:"container"},[s("div",{staticClass:"title"},[s("div",{on:{click:t.closeTrain}},[t._v("⬅")]),"train"==t.param?s("span",[t._v("练习")]):t._e(),"website"==t.param?s("span",[t._v("网站")]):t._e(),"study"==t.param?s("span",[t._v("学习")]):t._e()]),"website"==t.param?s("div",[t._m(0)]):t._e(),"train"==t.param?s("div",{staticStyle:{height:"100%","text-align":"center"}},[t._m(1),s("img",{ref:"disc",staticClass:"autoRotate",attrs:{src:"https://s2.loli.net/2022/06/27/OyrsnYhSDTopLxQ.png"}}),s("p",{staticClass:"margin-top"},[t._v("星条旗进行曲")]),s("audio",{attrs:{src:i("8a5f"),controls:"",loop:""},on:{play:t.play,pause:t.pause}})]):t._e()])])},r=[function(){var t=this,s=t._self._c;return s("pre",[t._v("      基础乐理：\n      "),s("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=1512007"}},[t._v("乐理入门篇")]),t._v("\n\n      入门教程：\n      "),s("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=821008"}},[t._v("从零到高手，吉他入门标准教程")]),t._v("\n\n      良心师傅up主：\n      "),s("a",{attrs:{href:"https://space.bilibili.com/326251291?spm_id_from=333.788.b_765f7570696e666f.1"}},[t._v("元子弹吉他")]),t._v("\n      "),s("a",{attrs:{href:"https://space.bilibili.com/188519580"}},[t._v("老默er")]),t._v("\n\n      吉他网站：\n      "),s("a",{attrs:{href:"https://www.jitashe.org/"}},[t._v("吉他社")]),t._v("\n          ")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"margin-top"},[s("a",{attrs:{href:"https://space.bilibili.com/36963051"}},[t._v("我的b站个人主页")])])}],o={name:"Train",components:{},data(){return{songUrl:"",isPlaying:!1}},props:{param:{type:String}},methods:{play:function(){this.isPlaying=!0,this.$refs.disc.classList.add("discPlaying")},pause:function(){this.isPlaying=!1,this.$refs.disc.classList.remove("discPlaying")},closeTrain(){this.$emit("toggleSon")}}},c=o,l=(i("9cfa"),i("2877")),p=Object(l["a"])(c,e,r,!1,null,"7b3a8be1",null),u=p.exports,h={name:"Guitar",components:{Train:u},data(){return{isShowTrain:!1,isShowHome:!0,param:""}},methods:{toggleSon(){this.isShowTrain=!this.isShowTrain,this.isShowHome=!this.isShowHome},toggle(t){this.toggleSon(),this.param="website"==t?"website":"train"==t?"train":"study"==t?"study":""}}},d=h,_=(i("cfd3"),Object(l["a"])(d,a,n,!1,null,"d0591948",null));s["default"]=_.exports},"74d2":function(t,s,i){},"8a5f":function(t,s,i){t.exports=i.p+"media/theStarsAndStripesForever.3e1a5d1d.aac"},"9cfa":function(t,s,i){"use strict";i("ed76")},cfd3:function(t,s,i){"use strict";i("74d2")},ed76:function(t,s,i){}}]);