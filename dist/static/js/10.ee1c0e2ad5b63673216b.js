webpackJsonp([10],{"4l6P":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Xxa5"),n=a.n(e),r=a("exGp"),i=a.n(r),o=a("0eBz"),c=a("jJNh"),l={name:"lists",created:function(){this.proType=this.$route.query.data,"XXPX"==this.proType?(this.showTtl="线下培训",this.xxpx()):"YNZX"==this.proType?(this.showTtl="业内资讯",this.ynzx()):"XSSP"==this.proType&&(this.showTtl="课程视频",this.xssp())},data:function(){return{showDrop:!1,showU:!0,showBack:!0,showTtl:"",lists:[],proType:""}},components:{HeaderTop:o.a},mounted:function(){},methods:{xxpx:function(){var t=this;return i()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.t)({});case 2:(a=s.sent)&&a.flag&&(t.lists=a.data.lists);case 4:case"end":return s.stop()}},s,t)}))()},ynzx:function(){var t=this;return i()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.u)({});case 2:(a=s.sent)&&a.flag&&(t.lists=a.data.lists);case 4:case"end":return s.stop()}},s,t)}))()},xssp:function(){var t=this;return i()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.s)({});case 2:(a=s.sent)&&a.flag&&(t.lists=a.data.lists);case 4:case"end":return s.stop()}},s,t)}))()}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{position:"relative"}},[a("HeaderTop",{attrs:{showBack:t.showBack,showTtl:t.showTtl,showU:t.showU}}),t._v(" "),a("section",{staticClass:"g-list"},t._l(t.lists,function(s,e){return a("div",{key:e,staticClass:"ul-panel"},["XXPX"==s.proType?a("router-link",{staticClass:"panel-content",attrs:{to:"/course/intro?data="+s.proid}},[a("div",{staticClass:"panel-hd"},[a("img",{attrs:{src:s.sImgURL,alt:"",srcset:""}})]),t._v(" "),a("div",{staticClass:"panel-bd"},[a("h3",[t._v(t._s(s.body))]),t._v(" "),a("p",{staticClass:"u-p"},[t._v(t._s(s.speaker)+" 主持")]),t._v(" "),a("p",{staticClass:"u-price"},[a("span",{staticClass:"u-unit"},[t._v("￥"+t._s(s.total_fee/100))]),t._v(" "),a("span",{staticStyle:{"text-decoration":"line-through",color:"black"}},[t._v(t._s("1"==s.on_sale?"¥"+s.Orig_fee/100:""))]),t._v(" "),a("span",{staticClass:"u-count"},[t._v("剩余"+t._s(s.number-s.buyCount)+"个名额")])])])]):t._e(),t._v(" "),"XSSP"==s.proType?a("router-link",{staticClass:"panel-content",attrs:{to:"/course/videoView?data="+s.proid}},[a("div",{staticClass:"panel-hd"},[a("img",{attrs:{src:s.sImgURL,alt:"",srcset:""}})]),t._v(" "),a("div",{staticClass:"panel-bd"},[a("h3",[t._v(t._s(s.body))]),t._v(" "),a("p",{staticClass:"u-p"},[t._v(t._s(s.speaker)+" 主讲")]),t._v(" "),a("p",{staticClass:"u-price"},[a("span",{staticClass:"u-unit"},[t._v("￥"+t._s(s.total_fee/100))]),t._v(" "),a("span",{staticStyle:{"text-decoration":"line-through",color:"black"}},[t._v(t._s("1"==s.on_sale?"¥"+s.Orig_fee/100:""))]),t._v(" "),a("span",{staticClass:"u-count"},[t._v(t._s(s.buyCount||0)+"人购买")])])])]):t._e(),t._v(" "),"YNZX"==s.proType?a("router-link",{staticClass:"panel-content",attrs:{to:"/course/contents?data="+s.proid}},[a("div",{staticClass:"panel-hd"},[a("img",{attrs:{src:s.sImgURL,alt:"",srcset:""}})]),t._v(" "),a("div",{staticClass:"panel-bd"},[a("h3",[t._v(t._s(s.body))]),t._v(" "),a("p",{staticClass:"u-price"},[a("span",{staticClass:"u-count"},[t._v(t._s(s.comefrom))])])])]):t._e()],1)}),0)],1)},staticRenderFns:[]},u=a("VU/8")(l,p,!1,null,null,null);s.default=u.exports}});
//# sourceMappingURL=10.ee1c0e2ad5b63673216b.js.map