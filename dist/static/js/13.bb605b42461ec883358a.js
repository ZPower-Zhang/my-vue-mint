webpackJsonp([13],{Se8g:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Xxa5"),i=o.n(n),s=o("exGp"),a=o.n(s),c=(o("0eBz"),o("6qIg")),r=o.n(c),l=o("jJNh"),p=o("HUDw"),u=o("Au9i"),d=o("PJh5"),m=o.n(d),v={name:"hindex",data:function(){return{teachersList:[],Imgback:r.a,imgVideo:"",selected:"1",title:"",introduction:"",collectionCount:0,popupVisible:!1,popupVisibleConsult:!1,proid:null,isCollect:"",isCollectTtl:"收藏",phoneEmail:"",consutContent:"",popupVisibleConsult2:!1,popupVisibleConsult3:!1,consutContent2:"",consutContent3:"",commentList:[],commentLen:0,replyDic:{from_name:"",from_uid:"",commont_id:""}}},components:{},created:function(){this.proid=this.$route.query.data,this.getinfo(this.proid),this.getComlist(this.proid),m.a.locale("zh-cn")},filters:{momentTime:function(t){return m.a.utc(t).fromNow()}},methods:{getinfo:function(t){var e=this;return a()(i.a.mark(function o(){var n,s,a;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,o.next=3,Object(l.m)({proid:t});case 3:(s=o.sent)&&s.flag&&(a=s.data||{},n.imgVideo=a.bImgURL||"",n.title=a.body||"",n.introduction=a.introduction||"",n.isCollect=a.is_collectioned||"",n.teachersList=a.teachers||[],n.collectionCount=a.collectionCount||0,"1"==n.isCollect?n.isCollectTtl="取消收藏":n.isCollectTtl="收藏",p.a.wxShowMenu(window.location.href,n.title,"全科与公卫协同创新培训平台",n.imgVideo));case 5:case"end":return o.stop()}},o,e)}))()},doGetCollect:function(){var t=this;return a()(i.a.mark(function e(){var o,n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t,!(window.document.cookie.indexOf("uid=")<0)){e.next=4;break}return o.$router.push({name:"up",params:{comproid:o.proid,comprotype:"KYZD"}}),e.abrupt("return",!1);case 4:return e.next=6,Object(l.d)({proid:o.proid});case 6:(n=e.sent)&&n.flag&&("200"==n.ret?(s=n.data||{},o.isCollect=s.is_collectioned||"","1"==o.isCollect?(o.isCollectTtl="取消收藏",Object(u.Toast)("收藏成功")):(o.isCollectTtl="收藏",Object(u.Toast)("取消收藏成功"))):Object(u.Toast)("收藏失败"));case 8:case"end":return e.stop()}},e,t)}))()},doConsult:function(){var t=this;return a()(i.a.mark(function e(){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t,!(window.document.cookie.indexOf("uid=")<0)){e.next=4;break}return o.$router.push({name:"up",params:{comproid:o.proid,comprotype:"KYZD"}}),e.abrupt("return",!1);case 4:t.popupVisibleConsult=!0;case 5:case"end":return e.stop()}},e,t)}))()},back:function(){if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)},hhh:function(t){t.show=!t.show},getComlist:function(t){var e=this;return a()(i.a.mark(function o(){var n,s,a;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return n=e,o.next=3,Object(l.f)({proid:t});case 3:(s=o.sent)&&s.flag&&(a=s.data||{},n.commentList=a.lists||[],n.commentLen=a.lists.length);case 5:case"end":return o.stop()}},o,e)}))()},doComment:function(){if(window.document.cookie.indexOf("uid=")<0)return this.$router.push({name:"up",params:{comproid:this.proid,comprotype:"XXPX"}}),!1;this.popupVisibleConsult2=!0},doReply:function(t){if(window.document.cookie.indexOf("uid=")<0)return this.$router.push({name:"up",params:{comproid:this.proid,comprotype:"XXPX"}}),!1;this.popupVisibleConsult3=!0,this.replyDic.from_name=t.from_name,this.replyDic.from_uid=t.from_uid,this.replyDic.comment_id=t.comment_id},toToComment:function(){var t=this;return a()(i.a.mark(function e(){var o,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,Object(l.e)({proid:o.proid,content:o.consutContent2});case 3:(n=e.sent)&&n.flag&&("200"==n.ret?(o.consutContent2="",o.popupVisibleConsult2=!1,document.body.scrollTop=0,Object(u.Toast)(n.msg),t.getComlist(t.proid)):Object(u.Toast)("评论失败"));case 5:case"end":return e.stop()}},e,t)}))()},toToReplay:function(){var t=this;return a()(i.a.mark(function e(){var o,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,Object(l.o)({comment_id:o.replyDic.comment_id,to_uid:o.replyDic.from_uid,content:o.consutContent3});case 3:(n=e.sent)&&n.flag&&("200"==n.ret?(o.consutContent3="",o.popupVisibleConsult3=!1,document.body.scrollTop=0,Object(u.Toast)(n.msg),t.getComlist(t.proid)):Object(u.Toast)("回复失败"));case 5:case"end":return e.stop()}},e,t)}))()},toToConsult:function(){var t=this;return a()(i.a.mark(function e(){var o,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t,e.next=3,Object(l.g)({proid:o.proid,contect:o.phoneEmail,commont:o.consutContent});case 3:(n=e.sent)&&n.flag&&("200"==n.ret?(Object(u.Toast)("咨询已提交"),o.phoneEmail="",o.consutContent="",o.popupVisibleConsult=!1):Object(u.Toast)("咨询失败"));case 5:case"end":return e.stop()}},e,t)}))()}}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"}},[o("mt-button",{staticStyle:{position:"absolute",background:"none",border:"none","-webkit-box-shadow":"none","box-shadow":"none"},on:{click:t.back}},[o("img",{attrs:{slot:"icon",src:t.Imgback,height:"20",width:"20"},slot:"icon"})]),t._v(" "),o("div",{staticClass:"g-intro"},[o("div",{staticClass:"m-hd-cover"},[o("img",{attrs:{src:t.imgVideo,alt:"",srcset:""}})]),t._v(" "),o("div",{staticClass:"m-md-tab"},[o("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[o("mt-tab-item",{attrs:{id:"1"}},[t._v("指导介绍")]),t._v(" "),o("mt-tab-item",{attrs:{id:"2"}},[t._v("专家介绍")]),t._v(" "),o("mt-tab-item",{attrs:{id:"3"}},[t._v("评论列表")])],1),t._v(" "),o("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[o("mt-tab-container-item",{attrs:{id:"1"}},[o("h2",[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"inline-course"},[o("span",{staticStyle:{"font-size":".30rem"}},[t._v(t._s(t.collectionCount)+"人收藏")])]),t._v(" "),o("div",{staticClass:"text-intro"},[o("div",{domProps:{innerHTML:t._s(t.introduction)}})]),t._v(" "),o("div",{staticStyle:{height:"50px"}})]),t._v(" "),o("mt-tab-container-item",{attrs:{id:"2"}},[o("section",{staticClass:"g-list"},[o("div",{staticClass:"list-ttl"},[t._v(t._s("专家介绍"))]),t._v(" "),t._l(t.teachersList,function(e,n){return o("div",{key:n,staticClass:"ul-panel"},[o("div",{staticClass:"panel-content",on:{click:function(o){return t.hhh(e)}}},[o("div",{staticClass:"panel-hd"},[o("img",{attrs:{src:e.headerImageUrl,alt:"",srcset:""}})]),t._v(" "),e.show?t._e():o("p",{staticClass:"p-u",staticStyle:{margin:"20px",padding:"0px",overflow:"hidden","-webkit-line-clamp":"3","-webkit-box-orient":"vertical",display:"-webkit-box"}},[t._v(t._s(e.name)+"     "+t._s(e.introduction))]),t._v(" "),e.show?o("p",[t._v(t._s(e.name)+"  "),o("br"),t._v("  "+t._s(e.introduction))]):t._e(),t._v(" "),o("span",{staticStyle:{color:"#ff9800",position:"absolute",right:"0",bottom:"0"}},[t._v(t._s(e.show?"收起":"展开"))])])])})],2),t._v(" "),o("div",{staticStyle:{height:"50px"}})]),t._v(" "),o("mt-tab-container-item",{attrs:{id:"3"}},[0==t.commentLen?o("div",[o("div",{on:{click:function(e){return t.doComment()}}},[o("mt-cell",{attrs:{title:"暂无评论，快来添加吧！"}},[o("span",[t._v("评论")])])],1)]):t._e(),t._v(" "),t._l(t.commentList,function(e,n){return o("div",{key:n,staticClass:"comment-item"},[o("div",{staticClass:"header"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:e.headerImageUrl}})]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"name"},[t._v("\r\n                            "+t._s(e.from_name)+"\r\n                          ")]),t._v(" "),o("div",{staticClass:"date"},[t._v("\r\n                            "+t._s(t._f("momentTime")(e.createTime))+"\r\n                          ")])])]),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticStyle:{"text-align":"left"},on:{click:function(o){return t.doReply(e)}}},[t._v(t._s(e.content))]),t._v(" "),e.replyList.length?o("div",{staticClass:"rely-ref"},t._l(e.replyList,function(e,n){return o("div",{key:n},[o("div",{on:{click:function(o){return t.doReply(e)}}},[o("span",{staticClass:"name"},[t._v(t._s(e.from_name))]),t._v("\r\n                            回复 \r\n                            "),o("span",{staticClass:"name"},[t._v("@"+t._s(e.to_name))]),t._v("\r\n                            "+t._s(e.content)+"\r\n                          ")])])}),0):t._e()]),t._v(" "),o("div",{staticClass:"line"})])}),t._v(" "),o("div",{staticStyle:{height:"50px"}})],2)],1)],1)]),t._v(" "),o("div",{staticClass:"m-ft3"},[o("div",{staticClass:"ft-consult2",on:{click:t.doComment}},[t._v("评论")]),t._v(" "),o("div",{staticClass:"ft-three",on:{click:t.doGetCollect}},[t._v(t._s(t.isCollectTtl))]),t._v(" "),o("div",{staticClass:"ft-consult",on:{click:t.doConsult}},[t._v("咨询")])]),t._v(" "),o("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult,callback:function(e){t.popupVisibleConsult=e},expression:"popupVisibleConsult"}},[o("mt-field",{attrs:{label:"联系方式",placeholder:"请输入联系方式",type:"text"},model:{value:t.phoneEmail,callback:function(e){t.phoneEmail=e},expression:"phoneEmail"}}),t._v(" "),o("mt-field",{attrs:{label:"咨询内容",placeholder:"请输入咨询内容",type:"textarea",rows:"4"},model:{value:t.consutContent,callback:function(e){t.consutContent=e},expression:"consutContent"}}),t._v(" "),o("div",{staticClass:"sigle-btn-pay",on:{click:t.toToConsult}},[o("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1),t._v(" "),o("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult2,callback:function(e){t.popupVisibleConsult2=e},expression:"popupVisibleConsult2"}},[o("mt-field",{attrs:{label:"评论:",placeholder:"请输入评论内容",type:"textarea",rows:"4"},model:{value:t.consutContent2,callback:function(e){t.consutContent2=e},expression:"consutContent2"}}),t._v(" "),o("div",{staticClass:"sigle-btn-pay",on:{click:t.toToComment}},[o("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1),t._v(" "),o("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult3,callback:function(e){t.popupVisibleConsult3=e},expression:"popupVisibleConsult3"}},[o("mt-field",{attrs:{label:"@"+t.replyDic.from_name+":",placeholder:"请输入回复内容",type:"textarea",rows:"4"},model:{value:t.consutContent3,callback:function(e){t.consutContent3=e},expression:"consutContent3"}}),t._v(" "),o("div",{staticClass:"sigle-btn-pay",on:{click:t.toToReplay}},[o("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},_=o("VU/8")(v,f,!1,null,null,null);e.default=_.exports}});
//# sourceMappingURL=13.bb605b42461ec883358a.js.map