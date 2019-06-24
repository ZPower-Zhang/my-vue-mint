<template>

<div style='position:relative;'>
  <mt-button @click="back" style="position: absolute;background: none; border:none; -webkit-box-shadow:none;box-shadow:none;" >
  <img :src='Imgback' height="20" width="20" slot="icon" >
</mt-button>
  <!-- <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop> -->
  <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible" cancelText="取消">
  </mt-actionsheet>
  <mt-popup
  v-model="popup"
  pop-transition="popup-fade"
  :modal="true" :closeOnClickModal="false">
  <div style="width: 500px;height: 400px;text-align:center" >
  <div style="height: 10px"></div>
  <h1>请打开微信,扫描下方二维码完成支付</h1>
      <div id="qrcode" style="margin-top: 50px;margin-left: 150px"></div>
      <div style="height: 10px"></div>
      <mt-button type="primary" @click="reload()" style="margin-right: 20px;margin-top: 50px">已支付</mt-button>
      <mt-button type="default" @click="close()"  style="margin-left: 20px;margin-top: 50px">取消</mt-button>
  </div>
  </mt-popup>
  <div class='g-intro'>
    <div class='m-hd-cover'>
      <img :src='imgVideo' alt srcset>
      </div>
      <div class='m-md-tab'>
        <mt-navbar v-model='selected'>
          <mt-tab-item id='1'>培训介绍</mt-tab-item>
          <mt-tab-item id='2'>培训安排</mt-tab-item>
          <mt-tab-item id='3'>评论列表</mt-tab-item>
          <mt-tab-item id='4' v-if="seen">课后交流</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model='selected'>
          <mt-tab-container-item id='1'>
            <h2>{{title}}</h2>
            <div class='inline-course'>
              <span style="color: #f68f40;font-size: .40rem;">¥{{total_fee/100}}</span>
              <!-- <span style="color: #f68f40;font-size: .40rem;">¥暂定</span> -->
              
              <span style='text-decoration:line-through;color: black'>{{on_sale == '1' ? '¥'+Orig_fee/100 : ''}}</span>
              <span style="font-size:.30rem">{{buyCount}}人报名</span>
              <span style="font-size:.30rem">剩余{{number-buyCount}}个名额</span>
              <span style="font-size:.30rem">{{collectionCount}}人收藏</span>
            </div>
            <div class='text-intro'>
              <div v-html='introduction'></div>
            </div>

            <section class='g-list'>
            <div class='list-ttl'>{{'专家介绍'}}</div>
            <div class='ul-panel' v-for='(item,index) in teachersList' :key='index'>
                    <div class='panel-content' @click="hhh(item)">
                      <div class='panel-hd'>
                        <img v-bind:src='item.headerImageUrl' alt srcset>
                        <!-- <h3>{{item.name}}</h3> -->
                      </div>
                            <p class='p-u' v-if="!item.show" style="margin:20px;padding: 0px;
                              overflow: hidden;
                              -webkit-line-clamp: 3; 
                              -webkit-box-orient: vertical;
                              display: -webkit-box;
                              ">{{item.name}}     {{item.introduction}}</p>
                         <p v-if="item.show">{{item.name}}  </br>  {{item.introduction}}</p>
                      <span style="color: #ff9800;position:absolute; right: 0;bottom:0">{{item.show?"收起":"展开"}}</span>
                      </div>
            </div>
            </section>
          <div style="height: 50px"></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <div v-html='plan'></div>
          <div style="height: 100px"></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='3'>
            <!-- <mt-cell v-for='n in 6' :key='n' :title=''content ' + n'/> -->
            <div v-if="commentLen==0">
                <div  @click="doComment()">
                  <mt-cell title="暂无评论，快来添加吧！">
                    <span>评论</span>
                  </mt-cell>
                </div>
            </div>

              <div class="comment-item" v-for='(item,index) in commentList' :key='index'>
                <div class="header">
                  <div class="avatar">
                    <img :src="item.headerImageUrl">
                  </div>
                  <div class="info">
                          <div class="name">
                            {{item.from_name}}
                          </div>
                          <div class="date">
                            {{item.createTime|momentTime}}
                          </div>
                    </div>
                </div>
                <div class="content">
                  <div  @click="doReply(item)" style="text-align: left;">{{item.content}}</div>
                  <div class="rely-ref" v-if="item.replyList.length">
                        <div v-for='(item2,index2) in item.replyList' :key='index2'>
                          <div  @click="doReply(item2)">
                            <span class="name">{{item2.from_name}}</span>
                            回复 
                            <span class="name">@{{item2.to_name}}</span>
                            {{item2.content}}
                          </div>
                      </div>
                      </div>
                  </div>
                <div class="line"></div>
              </div>


            <!-- <div v-for='(item,index) in commentList' :key='index'> -->
<!--                 <div  @click="doReply(item)">
                  <mt-cell  :title="item.createTime|momentTime(item.from_name)" :label="item.content">
                    <img slot="icon" :src="item.headerImageUrl" width="24" height="24">
                  </mt-cell>
                </div>
              <div v-for='(item2,index2) in item.replyList' :key='index2'>
                <div  @click="doReply(item2)">
                  <mt-cell :icon="item2.from_headerImageUrl" :label="item2.from_name+' 回复@'+item2.to_name+' :'+item2.content">
                  </mt-cell>
                </div>
              </div> -->
            <!-- </div> -->


          <div style="height: 50px"></div>

          </mt-tab-container-item>
          <mt-tab-container-item id='4'>
            <!-- <mt-cell v-for='n in 6' :key='n' :title=''content ' + n'/> -->
            <div style='margin:0 auto; width:250px; height:400px;'>
              <img :src='classImgURL' alt srcset>
              <h3>长按识别二维码，加入本培训课后交流微信群</h3>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class='m-ft'>
      <div class='ft-consult2' @click="doComment">评论</div>
      <div class='ft-three' @click="doGetCollect">{{isCollectTtl}}</div>
      <div class='ft-consult' @click="doConsult">咨询</div>
      <div class='ft-apply' @click="doPayNow">
        <a href='javascript:void(0);'>{{applyTitle}}</a>
      </div>
    </div>

    <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <div class="pay-div">
        <span>课程名称</span>
        <span>{{title}}</span>
      </div>
      <div class="pay-div">
        <span>课程原价</span>
        <span class="origin-price">￥{{Orig_fee/100}}</span>
      </div>
      <div class="pay-div">
        <span>实际支付</span>
        <span class="pay-price">￥{{total_fee/100}}</span>
      </div>
      <div class="pay-div sigle-btn-pay" @click="payNow">
        <div class="btn-pay">立即支付</div>
      </div>
    </mt-popup>

    <mt-popup v-model="popupVisibleConsult" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field label="联系方式" placeholder="请输入联系方式" type="text" v-model="phoneEmail"></mt-field>
      <mt-field label="咨询内容" placeholder="请输入咨询内容" type="textarea" rows="4" v-model="consutContent"></mt-field>
      <div class="sigle-btn-pay" @click="toToConsult">
        <mt-button class="btn-pay" size="normal">提交</mt-button>
      </div>
    </mt-popup>

    <mt-popup v-model="popupVisibleConsult2" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field label="评论:" placeholder="请输入评论内容" type="textarea" rows="4" v-model="consutContent2"></mt-field>
      <div class="sigle-btn-pay" @click="toToComment">
        <mt-button class="btn-pay" size="normal">提交</mt-button>
      </div>
    </mt-popup>

    <mt-popup v-model="popupVisibleConsult3" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field :label="'@'+replyDic.from_name+':'" placeholder="请输入回复内容" type="textarea" rows="4" v-model="consutContent3"></mt-field>
      <div class="sigle-btn-pay" @click="toToReplay">
        <mt-button class="btn-pay" size="normal">提交</mt-button>
      </div>
    </mt-popup>

  </div>
</template>

<script>

import HeaderTop from '@/components/HeaderTop'
import backImg from '@/assets/img/返回.png'
import {
  getWxPay,
  getCollection,
  getConsult,
  getProinfo,
  getShare,
  getCommentList,
  getComment,
  getReplay,
  getPayZero,
  getWxPayNative,
  getWxPayH5,
  getAliPayNative,
  getAliPayH5
} from '@/api/lession'
import wxconfig from '@/api/share'
import { Toast,MessageBox,Popup,Actionsheet } from 'mint-ui';
import QRCode from 'qrcodejs2'
import moment from "moment";
export default {
  name: 'intro',
  data() {
    return {
      actions:[{"name":"微信支付","method":this.wx},{"name":"支付宝支付","method":this.zfb}],
      sheetVisible:false,
      popup:false,
      qrurl:"",
      teachersList:[],
      Imgback:backImg,
      imgVideo: '',
      pngExcel: '',
      selected: '1',
      // showU: false,
      // showBack: false,
      // showTtl: '课程详情',
      title: '',
      total_fee: '',
      Orig_fee: '',
      number: 0,
      buyCount: 0,
      collectionCount: 0,
      introduction: '',
      plan: '',
      classImgURL: '',
      popupVisible: false,
      popupVisibleConsult: false,
      popupVisibleConsult2:false,
      popupVisibleConsult3:false,
      proid: null,
      applyTitle: '立即报名',
      isCollect: '',
      isCollectTtl: '收藏',
      on_sale: '0',
      seen: false,
      phoneEmail: '',
      consutContent: '',
      consutContent2: '',
      consutContent3: '',
      commentList:[],
      status:"0",
      commentLen:0,
      replyDic:{"from_name":"","from_uid":"","commont_id":""},
    }
  },filters:{
      momentTime: function (value) {
        return moment.utc(value).fromNow()
    }
  }
  ,
  components: {
    // HeaderTop
  },
  created() {
    this.proid = this.$route.query.data
    this.getinfo(this.proid)
    this.getComlist(this.proid)
    moment.locale("zh-cn")
  },
  methods: {
        close(){
      this.popup = false
    },
    reload(){
      window.location.reload()
    },
    wx(){
        let _this = this
      // console.log('wx')
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
               //TODO
               console.log("移动端")
              _this.payH5()

        }else{
                if(_this.qrurl!=""){
                    _this.popup=true
                }else{
                    _this.payNative()
                }
        }
    },
    zfb(){
            let _this = this
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
               //TODO
               console.log("移动端")
              // _this.payH5()
                    _this.payAliH5()

        }else{
                    _this.alipayNative()
        }
    },
    async getinfo(id) {
      let _this = this
      let ret = await getProinfo({
        proid: id
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.imgVideo = data.bImgURL || ''
        _this.title = data.body || ''
        _this.total_fee = data.total_fee || ''
        _this.Orig_fee = data.Orig_fee || ''
        _this.number = data.number || ''
        _this.buyCount = data.buyCount || 0
        _this.collectionCount = data.collectionCount || 0
        _this.introduction = data.introduction || ''
        _this.plan = data.plan || ''
        _this.classImgURL = data.classImgURL || ''
        _this.isBuyed = data.is_buyed || ''
        _this.isCollect = data.is_collectioned || ''
        _this.on_sale = data.on_sale || ''
        _this.statues = data.statues || ''
        _this.teachersList = data.teachers || []
        if (_this.isBuyed == '1') {
          if (_this.statues == "0"){
            _this.applyTitle = '确认中'
          }else if(_this.statues=="1"){
            _this.applyTitle = '报名成功'
            _this.seen = true
          }else{
            _this.applyTitle = '报名未成功'
          }
        } else {
          if(_this.number-_this.buyCount==0){
            _this.applyTitle = '名额已满'
          }else{
            _this.applyTitle = '立即报名'
          }
        }
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
        } else {
          _this.isCollectTtl = '收藏'
        }

        wxconfig.wxShowMenu(window.location.href,_this.title,"全科与公卫协同创新培训平台",_this.imgVideo)
      }
    },    

    async getComlist(id) {
      let _this = this
      let ret = await getCommentList({
        proid: id
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.commentList = data.lists || []
        _this.commentLen = data.lists.length
        // console.log(_this.commentLen)
      }
    },

    doPayNow() {
      // MessageBox('提示', '还未开始报名');
      // Toast('还未开始报名');
      // return false
      let _this = this
      if (_this.isBuyed == '1'||_this.number-_this.buyCount==0) {
        return false
      }
      let curUid = this.getCookie('uid')
      if (!curUid){
        // alert('请先注册')
        // console.log(_this.proid)
        let from=_this.$route.query.from||"no"
        MessageBox.confirm('请先注册登陆后再报名').then(action => {
                _this.$router.push({
          name: 'up',
          query: {comproid: _this.proid,comprotype:"XXPX",from:from}
        })
      })

        return false
      }
      if(_this.proid=="XXPX00004"){
          _this.payZero()
      }else{
          var ua = window.navigator.userAgent.toLowerCase()
          if (ua.match(/MicroMessenger/i) != 'micromessenger') {
                  // Toast('非微信环境');
        _this.sheetVisible=true
        }else{
          _this.popupVisible = true
        }
      }
    },
    async payZero() {
      let _this = this
      let ret = await getPayZero({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        let data = ret.data
        if (ret.ret=="200"){
            window.location.reload()
            Toast('报名成功');
        }else{
            Toast('报名失败');
        }
      }
    }
    ,async payNative(){
      
        let _this = this
        let from=_this.$route.query.from||"no"
      let ret = await getWxPayNative({
        proid: _this.proid,
        comefrom:from
      })
      if (ret && ret.flag) {
        // let data = ret.data
        console.log(ret)
        if(ret.ret=="200"){
          _this.qrcode(ret.data.url)
          _this.qrurl=ret.data.url
          _this.popup=true
        }
        // _this.callpay(data)
      }
    },async alipayNative(){
      
        let _this = this
        let from=_this.$route.query.from||"no"
      let ret = await getAliPayNative({
        proid: _this.proid,
        redirectUrl:window.location.href,
        comefrom:from
      })
      if (ret && ret.flag) {
        // let data = ret.data
        console.log(ret)
        if(ret.ret=="200"){
          console.log(ret.data.url)
          window.location.href = ret.data.url
        }
        // _this.callpay(data)
      }
    },
    async payH5(){
        let _this = this
        let from=_this.$route.query.from||"no"
      let ret = await getWxPayH5({
        proid: _this.proid,
        comefrom:from
      })
      if (ret && ret.flag) {
        // let data = ret.data
        console.log(ret)
        if(ret.ret=="200"){
          console.log(ret.data)
          window.location.href=ret.data.url+"&redirect_url="+encodeURIComponent(window.location.href)
        }
      }
    },async payAliH5(){
        let _this = this
        let from=_this.$route.query.from||"no"
      let ret = await getAliPayH5({
        proid: _this.proid,
        redirectUrl:window.location.href,
        comefrom:from
      })
      if (ret && ret.flag) {
        // let data = ret.data
        console.log(ret)
        if(ret.ret=="200"){
          console.log(ret.data)
          window.location.href=ret.data.url
        }
      }
    }
    ,qrcode(url) {
      let qrcode = new QRCode('qrcode', {
        width: 200,  
        height: 200,
        text: url, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
    },

    async payNow() {
      let _this = this
      let from=_this.$route.query.from||"no"
      let ret = await getWxPay({
        proid: _this.proid,
        comefrom:from
      })
      if (ret && ret.flag) {
        let data = ret.data
        _this.callpay(data)
      }
    },

    onBridgeReady(data) {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          appId: data.appid, //公众号名称，由商户传入
          timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: data.nonceStr, //随机串
          package: data.package, //预支付id
          signType: data.signType, //微信签名方式
          paySign: data.paySign //微信签名
        },
        function (res) {
          //支付成功后返回 get_brand_wcpay_request:ok
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            window.location.reload()
            Toast('您的资料已提交，请等待后台确认')
          } else if (res.err_msg == "get_brand_wcpay_request:cancel") {

          } else if (res.err_msg == "get_brand_wcpay_request:fail") {
            // alert("支付失败!");
            Toast('支付失败');
          }
        }
      );
    },

    callpay(data) {
      let _this = this
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        _this.onBridgeReady(data);
      }
    },

    async doGetCollect() {
            let _this = this

            let curUid = this.getCookie('uid')
      if (!curUid){
        MessageBox.confirm('请先注册').then(action => {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
      })
        return false
      }
      let ret = await getCollection({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        if(ret.ret=="200"){
              _this.isCollect = data.is_collectioned || ''
              if (_this.isCollect == '1') {
                _this.isCollectTtl = '取消收藏'
                // MessageBox('提示', '收藏成功');
                Toast('收藏成功');
              } else {
                _this.isCollectTtl = '收藏'
                // MessageBox('提示', '取消收藏成功');
                Toast('取消收藏成功');
              }
            }else {
                // MessageBox('提示', '收藏失败');
                Toast('收藏失败');
            }

      }
    },

    async doConsult() {
        let _this = this
            let curUid = this.getCookie('uid')
      if (!curUid){
          MessageBox.confirm('请先注册').then(action => {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
      })
        return false
      }
      this.popupVisibleConsult = true
    },
    back() {
        // console.log(window.history.length)
        if (window.history.length <= 2) {
                this.$router.push({
                  name: 'home',
              })
                return false
            } else {
                this.$router.go(-1)
            }
    },
    hhh (item) {
      item.show = !item.show
    },
    doComment(){
        let _this = this
            let curUid = this.getCookie('uid')
      if (!curUid){
        MessageBox.confirm('请先注册').then(action => {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
      })
        return false
      }
      this.popupVisibleConsult2 = true
    },
    doReply(item){
              let _this = this
            let curUid = this.getCookie('uid')
      if (!curUid){
        MessageBox.confirm('请先注册').then(action => {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
      })
        return false
      }
      this.popupVisibleConsult3 = true
      this.replyDic.from_name=item.from_name
      this.replyDic.from_uid=item.from_uid
      this.replyDic.comment_id=item.comment_id
    }
    ,
    async toToComment(){
      let _this = this
      let ret = await getComment({
        proid: _this.proid,
        content: _this.consutContent2
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        _this.consutContent2 = ''
        _this.popupVisibleConsult2 = false
        document.body.scrollTop = 0
        // MessageBox('提示', ret.msg);
        Toast(ret.msg);
        this.getComlist(this.proid)
      }else{
        // MessageBox('提示', '评论失败');
        Toast('评论失败');
        }
      }
    }
    ,
    async toToReplay(){
      let _this = this
      let ret = await getReplay({
        comment_id: _this.replyDic.comment_id,
        to_uid: _this.replyDic.from_uid,
        content: _this.consutContent3
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        _this.consutContent3 = ''
        _this.popupVisibleConsult3 = false
        document.body.scrollTop = 0
        // MessageBox('提示', ret.msg);
        Toast(ret.msg);
        this.getComlist(this.proid)
      }else{
        // MessageBox('提示', '回复失败');
        Toast('回复失败');
        }
      }
    }
    ,

    async toToConsult() {
      let _this = this
      let ret = await getConsult({
        proid: _this.proid,
        contect: _this.phoneEmail,
        commont: _this.consutContent
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        _this.phoneEmail = ''
        _this.consutContent = ''
        _this.popupVisibleConsult = false
        document.body.scrollTop = 0
        // MessageBox('提示', '咨询已提交');
        Toast('咨询已提交');
      }else{
        // MessageBox('提示', '咨询失败');
        Toast('咨询失败');
        }
      }
    }
  }
}
</script>
