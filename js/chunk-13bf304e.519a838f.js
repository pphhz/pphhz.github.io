(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bf304e"],{"069c":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"guitar"},[t.isShowHome?s("div",{staticClass:"container"},[s("div",{staticClass:"son",on:{click:function(a){return t.toggle("website")}}},[s("span",[t._v("网站")])]),s("div",{staticClass:"son",on:{click:function(a){return t.toggle("train")}}},[s("span",[t._v("练习")])])]):t._e(),t.isShowTrain?s("train",{ref:"train",attrs:{param:t.param},on:{toggleSon:t.toggle}}):t._e()],1)},n=[],e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"train"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[i("div",{on:{click:t.closeTrain}},[t._v("⬅")]),"train"==t.param?i("span",[t._v("练习")]):t._e(),"website"==t.param?i("span",[t._v("网站")]):t._e(),"study"==t.param?i("span",[t._v("学习")]):t._e()]),"website"==t.param?i("div",[t._m(0)]):t._e(),"train"==t.param?i("div",{staticStyle:{"text-align":"center"}},[t._m(1),i("img",{ref:"disc",staticClass:"autoRotate",attrs:{src:s("9ac7")}}),i("p",{staticStyle:{"padding-top":"1%"}},[t._v("星条旗进行曲")]),i("audio",{attrs:{src:s("8a5f"),controls:"",loop:""},on:{play:t.play,pause:t.pause}})]):t._e()])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",[t._v("      基础乐理：\n      "),s("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=1512007"}},[t._v("乐理入门篇")]),t._v("\n\n      入门教程：\n      "),s("a",{attrs:{href:"https://study.163.com/course/courseMain.htm?courseId=821008"}},[t._v("从零到高手，吉他入门标准教程")]),t._v("\n\n      良心师傅up主：\n      "),s("a",{attrs:{href:"https://space.bilibili.com/326251291?spm_id_from=333.788.b_765f7570696e666f.1"}},[t._v("元子弹吉他")]),t._v("\n      "),s("a",{attrs:{href:"https://space.bilibili.com/188519580"}},[t._v("老默er")]),t._v("\n\n      吉他网站：\n      "),s("a",{attrs:{href:"https://www.jitashe.org/"}},[t._v("吉他社")]),t._v("\n          ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticStyle:{"margin-top":"40px"}},[s("a",{attrs:{href:"https://space.bilibili.com/36963051"}},[t._v("我的b站个人主页")])])}],c={name:"Train",components:{},data:function(){return{songUrl:"",isPlaying:!1}},props:{param:{type:String}},methods:{play:function(){this.isPlaying=!0,this.$refs.disc.classList.add("discPlaying")},pause:function(){this.isPlaying=!1,this.$refs.disc.classList.remove("discPlaying")},closeTrain:function(){this.$emit("toggleSon")}}},o=c,l=(s("2ada"),s("2877")),p=Object(l["a"])(o,e,r,!1,null,"5c8160c2",null),u=p.exports,d={name:"Guitar",components:{Train:u},data:function(){return{isShowTrain:!1,isShowHome:!0,param:""}},methods:{toggleSon:function(){this.isShowTrain=!this.isShowTrain,this.isShowHome=!this.isShowHome},toggle:function(t){this.toggleSon(),this.param="website"==t?"website":"train"==t?"train":"study"==t?"study":""}}},h=d,f=(s("9e58"),Object(l["a"])(h,i,n,!1,null,"93acf5d8",null));a["default"]=f.exports},"0c55":function(t,a,s){},"2ada":function(t,a,s){"use strict";var i=s("0c55"),n=s.n(i);n.a},4596:function(t,a,s){},"8a5f":function(t,a,s){t.exports=s.p+"media/theStarsAndStripesForever.3e1a5d1d.aac"},"9ac7":function(t,a,s){t.exports=s.p+"img/black.10802c1a.png"},"9e58":function(t,a,s){"use strict";var i=s("4596"),n=s.n(i);n.a}}]);