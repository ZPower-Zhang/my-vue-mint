webpackJsonp([12],{"8cXK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Xxa5"),i=n.n(o),s=n("exGp"),a=n.n(s),c=n("bOdI"),r=n.n(c),l=(n("0eBz"),n("6qIg")),p=n.n(l),u=n("jJNh"),d=n("HUDw"),m=n("Au9i"),v=n("PJh5"),_=n.n(v),f={name:"intro",data:function(){var t;return t={teachersList:[],Imgback:p.a,imgVideo:"",pngExcel:"",selected:"1",title:"",total_fee:"",Orig_fee:"",number:0,seen:!0,buyCount:0,collectionCount:0,introduction:"",plan:"",classImgURL:"",popupVisible:!1,popupVisibleConsult:!1,popupVisibleConsult2:!1,popupVisibleConsult3:!1,proid:null,applyTitle:"立即报名",isCollect:"",isCollectTtl:"收藏",on_sale:"0"},r()(t,"seen",!1),r()(t,"phoneEmail",""),r()(t,"consutContent",""),r()(t,"consutContent2",""),r()(t,"consutContent3",""),r()(t,"commentList",[]),r()(t,"commentLen",0),r()(t,"replyDic",{from_name:"",from_uid:"",commont_id:""}),t},filters:{momentTime:function(t){return _.a.utc(t).fromNow()}},components:{},created:function(){this.proid=this.$route.query.data,this.getinfo(this.proid),this.getComlist(this.proid),_.a.locale("zh-cn")},methods:{getinfo:function(t){var e=this;return a()(i.a.mark(function n(){var o,s,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=e,n.next=3,Object(u.m)({proid:t});case 3:(s=n.sent)&&s.flag&&(a=s.data||{},o.imgVideo=a.bImgURL||"",o.title=a.body||"",o.total_fee=a.total_fee||"",o.Orig_fee=a.Orig_fee||"",o.number=a.number||"",o.buyCount=a.buyCount||0,o.collectionCount=a.collectionCount||0,o.introduction=a.introduction||"",o.plan=a.plan||"",o.classImgURL=a.classImgURL||"",o.isBuyed=a.is_buyed||"",o.isCollect=a.is_collectioned||"",o.on_sale=a.on_sale||"",o.teachersList=a.teachers||[],"1"==o.isBuyed?(o.applyTitle="已经报名",o.seen=!0):o.applyTitle="立即报名","1"==o.isCollect?o.isCollectTtl="取消收藏":o.isCollectTtl="收藏",d.a.wxShowMenu(window.location.href,o.title,"全科与公卫协同创新培训平台",o.imgVideo));case 5:case"end":return n.stop()}},n,e)}))()},getComlist:function(t){var e=this;return a()(i.a.mark(function n(){var o,s,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=e,n.next=3,Object(u.f)({proid:t});case 3:(s=n.sent)&&s.flag&&(a=s.data||{},o.commentList=a.lists||[],o.commentLen=a.lists.length);case 5:case"end":return n.stop()}},n,e)}))()},doPayNow:function(){return Object(m.Toast)("还未开始报名"),!1},payNow:function(){var t=this;return a()(i.a.mark(function e(){var n,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Object(u.q)({proid:n.proid});case 3:(o=e.sent)&&o.flag&&(s=o.data,n.callpay(s));case 5:case"end":return e.stop()}},e,t)}))()},onBridgeReady:function(t){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appid,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?window.location.reload():"get_brand_wcpay_request:cancel"==t.err_msg||"get_brand_wcpay_request:fail"==t.err_msg&&Object(m.Toast)("支付失败")})},callpay:function(t){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",onBridgeReady,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",onBridgeReady),document.attachEvent("onWeixinJSBridgeReady",onBridgeReady)):this.onBridgeReady(t)},doGetCollect:function(){var t=this;return a()(i.a.mark(function e(){var n,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,!(window.document.cookie.indexOf("uid=")<0)){e.next=4;break}return n.$router.push({name:"up",params:{comproid:n.proid,comprotype:"XXPX"}}),e.abrupt("return",!1);case 4:return e.next=6,Object(u.d)({proid:n.proid});case 6:(o=e.sent)&&o.flag&&(s=o.data||{},"200"==o.ret?(n.isCollect=s.is_collectioned||"","1"==n.isCollect?(n.isCollectTtl="取消收藏",Object(m.Toast)("收藏成功")):(n.isCollectTtl="收藏",Object(m.Toast)("取消收藏成功"))):Object(m.Toast)("收藏失败"));case 8:case"end":return e.stop()}},e,t)}))()},doConsult:function(){var t=this;return a()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,!(window.document.cookie.indexOf("uid=")<0)){e.next=4;break}return n.$router.push({name:"up",params:{comproid:n.proid,comprotype:"XXPX"}}),e.abrupt("return",!1);case 4:t.popupVisibleConsult=!0;case 5:case"end":return e.stop()}},e,t)}))()},back:function(){if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)},hhh:function(t){t.show=!t.show},doComment:function(){if(window.document.cookie.indexOf("uid=")<0)return this.$router.push({name:"up",params:{comproid:this.proid,comprotype:"XXPX"}}),!1;this.popupVisibleConsult2=!0},doReply:function(t){if(window.document.cookie.indexOf("uid=")<0)return this.$router.push({name:"up",params:{comproid:this.proid,comprotype:"XXPX"}}),!1;this.popupVisibleConsult3=!0,this.replyDic.from_name=t.from_name,this.replyDic.from_uid=t.from_uid,this.replyDic.comment_id=t.comment_id},toToComment:function(){var t=this;return a()(i.a.mark(function e(){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Object(u.e)({proid:n.proid,content:n.consutContent2});case 3:(o=e.sent)&&o.flag&&("200"==o.ret?(n.consutContent2="",n.popupVisibleConsult2=!1,document.body.scrollTop=0,Object(m.Toast)(o.msg),t.getComlist(t.proid)):Object(m.Toast)("评论失败"));case 5:case"end":return e.stop()}},e,t)}))()},toToReplay:function(){var t=this;return a()(i.a.mark(function e(){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Object(u.o)({comment_id:n.replyDic.comment_id,to_uid:n.replyDic.from_uid,content:n.consutContent3});case 3:(o=e.sent)&&o.flag&&("200"==o.ret?(n.consutContent3="",n.popupVisibleConsult3=!1,document.body.scrollTop=0,Object(m.Toast)(o.msg),t.getComlist(t.proid)):Object(m.Toast)("回复失败"));case 5:case"end":return e.stop()}},e,t)}))()},toToConsult:function(){var t=this;return a()(i.a.mark(function e(){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Object(u.g)({proid:n.proid,contect:n.phoneEmail,commont:n.consutContent});case 3:(o=e.sent)&&o.flag&&("200"==o.ret?(n.phoneEmail="",n.consutContent="",n.popupVisibleConsult=!1,document.body.scrollTop=0,Object(m.Toast)("咨询已提交")):Object(m.Toast)("咨询失败"));case 5:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("mt-button",{staticStyle:{position:"absolute",background:"none",border:"none","-webkit-box-shadow":"none","box-shadow":"none"},on:{click:t.back}},[n("img",{attrs:{slot:"icon",src:t.Imgback,height:"20",width:"20"},slot:"icon"})]),t._v(" "),n("div",{staticClass:"g-intro"},[n("div",{staticClass:"m-hd-cover"},[n("img",{attrs:{src:t.imgVideo,alt:"",srcset:""}})]),t._v(" "),n("div",{staticClass:"m-md-tab"},[n("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"1"}},[t._v("培训介绍")]),t._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[t._v("培训安排")]),t._v(" "),n("mt-tab-item",{attrs:{id:"3"}},[t._v("评论列表")]),t._v(" "),t.seen?n("mt-tab-item",{attrs:{id:"4"}},[t._v("课后交流")]):t._e()],1),t._v(" "),n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"1"}},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"inline-course"},[n("span",{staticStyle:{color:"#f68f40","font-size":".40rem"}},[t._v("¥暂定")]),t._v(" "),n("span",{staticStyle:{"text-decoration":"line-through",color:"black"}},[t._v(t._s("1"==t.on_sale?"¥"+t.Orig_fee/100:""))]),t._v(" "),n("span",{staticStyle:{"font-size":".30rem"}},[t._v(t._s(t.buyCount)+"人购买")]),t._v(" "),n("span",{staticStyle:{"font-size":".30rem"}},[t._v("剩余"+t._s(t.number-t.buyCount)+"个名额")]),t._v(" "),n("span",{staticStyle:{"font-size":".30rem"}},[t._v(t._s(t.collectionCount)+"人收藏")])]),t._v(" "),n("div",{staticClass:"text-intro"},[n("div",{domProps:{innerHTML:t._s(t.introduction)}})]),t._v(" "),n("section",{staticClass:"g-list"},[n("div",{staticClass:"list-ttl"},[t._v(t._s("专家介绍"))]),t._v(" "),t._l(t.teachersList,function(e,o){return n("div",{key:o,staticClass:"ul-panel"},[n("div",{staticClass:"panel-content",on:{click:function(n){return t.hhh(e)}}},[n("div",{staticClass:"panel-hd"},[n("img",{attrs:{src:e.headerImageUrl,alt:"",srcset:""}})]),t._v(" "),e.show?t._e():n("p",{staticClass:"p-u",staticStyle:{margin:"20px",padding:"0px",overflow:"hidden","-webkit-line-clamp":"3","-webkit-box-orient":"vertical",display:"-webkit-box"}},[t._v(t._s(e.name)+"     "+t._s(e.introduction))]),t._v(" "),e.show?n("p",[t._v(t._s(e.name)+"  "),n("br"),t._v("  "+t._s(e.introduction))]):t._e(),t._v(" "),n("span",{staticStyle:{color:"#ff9800",position:"absolute",right:"0",bottom:"0"}},[t._v(t._s(e.show?"收起":"展开"))])])])})],2),t._v(" "),n("div",{staticStyle:{height:"50px"}})]),t._v(" "),n("mt-tab-container-item",{attrs:{id:"2"}},[n("div",{domProps:{innerHTML:t._s(t.plan)}}),t._v(" "),n("div",{staticStyle:{height:"100px"}})]),t._v(" "),n("mt-tab-container-item",{attrs:{id:"3"}},[0==t.commentLen?n("div",[n("div",{on:{click:function(e){return t.doComment()}}},[n("mt-cell",{attrs:{title:"暂无评论，快来添加吧！"}},[n("span",[t._v("评论")])])],1)]):t._e(),t._v(" "),t._l(t.commentList,function(e,o){return n("div",{key:o,staticClass:"comment-item"},[n("div",{staticClass:"header"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.headerImageUrl}})]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v("\r\n                            "+t._s(e.from_name)+"\r\n                          ")]),t._v(" "),n("div",{staticClass:"date"},[t._v("\r\n                            "+t._s(t._f("momentTime")(e.createTime))+"\r\n                          ")])])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticStyle:{"text-align":"left"},on:{click:function(n){return t.doReply(e)}}},[t._v(t._s(e.content))]),t._v(" "),e.replyList.length?n("div",{staticClass:"rely-ref"},t._l(e.replyList,function(e,o){return n("div",{key:o},[n("div",{on:{click:function(n){return t.doReply(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.from_name))]),t._v("\r\n                            回复 \r\n                            "),n("span",{staticClass:"name"},[t._v("@"+t._s(e.to_name))]),t._v("\r\n                            "+t._s(e.content)+"\r\n                          ")])])}),0):t._e()]),t._v(" "),n("div",{staticClass:"line"})])}),t._v(" "),n("div",{staticStyle:{height:"50px"}})],2),t._v(" "),n("mt-tab-container-item",{attrs:{id:"4"}},[n("div",{staticStyle:{margin:"0 auto",width:"250px",height:"400px"}},[n("img",{attrs:{src:t.classImgURL,alt:"",srcset:""}}),t._v(" "),n("h3",[t._v("长按识别二维码，加入本培训课后交流微信群")])])])],1)],1)]),t._v(" "),n("div",{staticClass:"m-ft"},[n("div",{staticClass:"ft-consult2",on:{click:t.doComment}},[t._v("评论")]),t._v(" "),n("div",{staticClass:"ft-three",on:{click:t.doGetCollect}},[t._v(t._s(t.isCollectTtl))]),t._v(" "),n("div",{staticClass:"ft-consult",on:{click:t.doConsult}},[t._v("咨询")]),t._v(" "),n("div",{staticClass:"ft-apply",on:{click:t.doPayNow}},[n("a",{attrs:{href:"javascript:void(0);"}},[t._v(t._s(t.applyTitle))])])]),t._v(" "),n("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"pay-div"},[n("span",[t._v("课程名称")]),t._v(" "),n("span",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"pay-div"},[n("span",[t._v("课程原价")]),t._v(" "),n("span",{staticClass:"origin-price"},[t._v("￥"+t._s(t.Orig_fee/100))])]),t._v(" "),n("div",{staticClass:"pay-div"},[n("span",[t._v("实际支付")]),t._v(" "),n("span",{staticClass:"pay-price"},[t._v("￥"+t._s(t.total_fee/100))])]),t._v(" "),n("div",{staticClass:"pay-div sigle-btn-pay",on:{click:t.payNow}},[n("div",{staticClass:"btn-pay"},[t._v("立即支付")])])]),t._v(" "),n("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult,callback:function(e){t.popupVisibleConsult=e},expression:"popupVisibleConsult"}},[n("mt-field",{attrs:{label:"联系方式",placeholder:"请输入联系方式",type:"text"},model:{value:t.phoneEmail,callback:function(e){t.phoneEmail=e},expression:"phoneEmail"}}),t._v(" "),n("mt-field",{attrs:{label:"咨询内容",placeholder:"请输入咨询内容",type:"textarea",rows:"4"},model:{value:t.consutContent,callback:function(e){t.consutContent=e},expression:"consutContent"}}),t._v(" "),n("div",{staticClass:"sigle-btn-pay",on:{click:t.toToConsult}},[n("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1),t._v(" "),n("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult2,callback:function(e){t.popupVisibleConsult2=e},expression:"popupVisibleConsult2"}},[n("mt-field",{attrs:{label:"评论:",placeholder:"请输入评论内容",type:"textarea",rows:"4"},model:{value:t.consutContent2,callback:function(e){t.consutContent2=e},expression:"consutContent2"}}),t._v(" "),n("div",{staticClass:"sigle-btn-pay",on:{click:t.toToComment}},[n("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1),t._v(" "),n("mt-popup",{staticClass:"p-popup-pay",attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisibleConsult3,callback:function(e){t.popupVisibleConsult3=e},expression:"popupVisibleConsult3"}},[n("mt-field",{attrs:{label:"@"+t.replyDic.from_name+":",placeholder:"请输入回复内容",type:"textarea",rows:"4"},model:{value:t.consutContent3,callback:function(e){t.consutContent3=e},expression:"consutContent3"}}),t._v(" "),n("div",{staticClass:"sigle-btn-pay",on:{click:t.toToReplay}},[n("mt-button",{staticClass:"btn-pay",attrs:{size:"normal"}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},C=n("VU/8")(f,b,!1,null,null,null);e.default=C.exports}});
//# sourceMappingURL=12.f5b87df21d11cf609c10.js.map