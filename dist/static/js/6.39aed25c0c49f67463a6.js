webpackJsonp([6],{dFiC:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),n=e.n(a),r=e("exGp"),i=e.n(r),o=e("0eBz"),c=e("jJNh"),l={name:"study",data:function(){return{showU:!1,showBack:!0,showTtl:"我的学习",lists:[]}},components:{HeaderTop:o.a},mounted:function(){this.getList()},methods:{getList:function(){var t=this;return i()(n.a.mark(function s(){var e;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.g)({});case 2:(e=s.sent)&&e.flag&&(t.lists=e.data.lists||[]);case 4:case"end":return s.stop()}},s,t)}))()}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{position:"relative"}},[e("HeaderTop",{attrs:{showBack:t.showBack,showTtl:t.showTtl,showU:t.showU}}),t._v(" "),e("section",{staticClass:"g-list"},t._l(t.lists,function(s,a){return e("div",{key:a,staticClass:"ul-panel"},[e("router-link",{staticClass:"panel-content",attrs:{to:"/course/intro?data="+s.proid}},[e("div",{staticClass:"panel-hd"},[e("img",{attrs:{src:s.sImgURL,alt:"",srcset:""}})]),t._v(" "),e("div",{staticClass:"panel-bd"},[e("h3",[t._v(t._s(s.body)+"}")]),t._v(" "),e("p",{staticClass:"u-p"},[t._v(t._s(s.speaker)+" 主持")])])])],1)}),0)],1)},staticRenderFns:[]},d=e("VU/8")(l,u,!1,null,null,null);s.default=d.exports}});
//# sourceMappingURL=6.39aed25c0c49f67463a6.js.map