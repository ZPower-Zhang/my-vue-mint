<template>
<div style='position:relative;'>
  <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>
  <div class='g-intro'>
    <div class='m-hd-cover'>
      <img :src='imgVideo' alt srcset>
      </div>
      <div class='m-md-tab'>
        <mt-navbar v-model='selected'>
          <mt-tab-item id='1'>培训介绍</mt-tab-item>
          <mt-tab-item id='2'>培训安排</mt-tab-item>
          <!-- <mt-tab-item id='3'>评论列表</mt-tab-item> -->
          <mt-tab-item id='4' v-if="seen">课后交流</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model='selected'>
          <mt-tab-container-item id='1'>
            <h3>{{title}}</h3>
            <div class='inline-course'>
              <span style="color: #f68f40;font-size: .40rem;">¥{{total_fee/100}}</span>
              <!-- <span style='text-decoration:line-through;' v-if='seen'>¥{{Orig_fee/100}}</span> -->
              <span style='text-decoration:line-through;color: black'>{{on_sale == '1' ? '¥'+Orig_fee/100 : ''}}</span>
              <span>{{buyCount}}人购买</span>
              <span>剩余{{number-buyCount}}个名额</span>
              <span>{{collectionCount}}人收藏</span>
            </div>
            <div class='text-intro'>
              <div v-html='introduction'></div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <div v-html='plan'></div>
          </mt-tab-container-item>
          <!--           <mt-tab-container-item id='3'>
            <mt-cell v-for='n in 6' :key='n' :title=''content ' + n'/>
          </mt-tab-container-item> -->
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
      <div class='ft-three' @click="doGetCollect">{{isCollectTtl}}</div>
      <div class='ft-consult' @click="doConsult">咨询</div>
      <div class='ft-apply' @click="doPayNow()">
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

  </div>
</template>

<script>
import videoImg from '@/assets/img/v2_pnrxn5.jpg'
import excelPng from '@/assets/img/v2_pnte53.png'
import HeaderTop from '@/components/HeaderTop'
import {
  getWxPay,
  getCollection,
  getConsult
} from '@/api/lession'
import {
  getProinfo
} from '@/api/lession'
export default {
  name: 'intro',
  data() {
    return {
      imgVideo: videoImg,
      pngExcel: excelPng,
      selected: '1',
      showU: false,
      showBack: true,
      showTtl: '课程详情',
      title: '',
      total_fee: '',
      Orig_fee: '',
      number: 0,
      seen: true,
      buyCount: 0,
      collectionCount: 0,
      introduction: '',
      plan: '',
      classImgURL: '',
      popupVisible: false,
      popupVisibleConsult: false,
      proid: null,
      applyTitle: '立即报名',
      isCollect: '',
      isCollectTtl: '收藏',
      on_sale: '0',
      seen: false,
      phoneEmail: '',
      consutContent: ''
    }
  },
  components: {
    HeaderTop
  },
  created() {
    this.proid = this.$route.query.data
    this.getinfo(this.proid)

  },
  methods: {
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
        _this.buyCount = data.buyCount || ''
        _this.collectionCount = data.collectionCount || 0
        _this.introduction = data.introduction || ''
        _this.plan = data.plan || ''
        _this.classImgURL = data.classImgURL || ''
        _this.isBuyed = data.is_buyed || ''
        _this.isCollect = data.is_collectioned || ''
        _this.on_sale = data.on_sale || ''

        if (_this.isBuyed == '1') {
          _this.applyTitle = '已经报名'
          _this.seen = true
        } else {
          _this.applyTitle = '立即报名'
        }
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
        } else {
          _this.isCollectTtl = '收藏'
        }
      }
    },

    doPayNow() {

      let _this = this
      if (_this.isBuyed == '1') {
        return false
      }
      if (window.document.cookie.indexOf('uid=') < 0) {
        alert('请先注册')
        return false
      }
      _this.popupVisible = true
    },

    async payNow() {
      let _this = this
      let ret = await getWxPay({
        proid: _this.proid
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
          } else if (res.err_msg == "get_brand_wcpay_request:cancel") {

          } else if (res.err_msg == "get_brand_wcpay_request:fail") {
            alert("支付失败!");
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
      if (window.document.cookie.indexOf('uid=') < 0) {
        alert('请先注册')
        return false
      }
      let _this = this
      let ret = await getCollection({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.isCollect = data.is_collectioned || ''
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
        } else {
          _this.isCollectTtl = '收藏'
        }
      }
    },

    async doConsult() {
      if (window.document.cookie.indexOf('uid=') < 0) {
        alert('请先注册')
        return false
      }
      this.popupVisibleConsult = true
    },

    async toToConsult() {
      let _this = this
      let ret = await getConsult({
        proid: _this.proid,
        contect: _this.phoneEmail,
        commont: _this.consutContent
      })
      if (ret && ret.flag) {
        _this.phoneEmail = ''
        _this.consutContent = ''
        _this.popupVisibleConsult = false
      }
    }
  }
}
</script>
