<template>

<div style='position:relative;'>
  <mt-button @click="gohome" style="position: absolute;background: none; border:none; -webkit-box-shadow:none;box-shadow:none;" >
  <img :src='Imgback' height="20" width="20" slot="icon" >
</mt-button>
  <!-- <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop> -->

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
            <h2>{{title}}</h2>
            <div class='inline-course'>
              <span style="color: #f68f40;font-size: .40rem;">¥{{total_fee/100}}</span>
              <!-- <span style='text-decoration:line-through;' v-if='seen'>¥{{Orig_fee/100}}</span> -->
              <span style='text-decoration:line-through;color: black'>{{on_sale == '1' ? '¥'+Orig_fee/100 : ''}}</span>
              <span style="font-size:.30rem">{{buyCount}}人购买</span>
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

import HeaderTop from '@/components/HeaderTop'
import backImg from '@/assets/img/返回.png'
import {
  getWxPay,
  getCollection,
  getConsult,
  getProinfo,
  getShare
} from '@/api/lession'
import wxconfig from '@/api/share'
import { MessageBox } from 'mint-ui';
export default {
  name: 'intro',
  data() {
    return {
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
    // HeaderTop
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
        _this.buyCount = data.buyCount || 0
        _this.collectionCount = data.collectionCount || 0
        _this.introduction = data.introduction || ''
        _this.plan = data.plan || ''
        _this.classImgURL = data.classImgURL || ''
        _this.isBuyed = data.is_buyed || ''
        _this.isCollect = data.is_collectioned || ''
        _this.on_sale = data.on_sale || ''
        _this.teachersList = data.teachers || []
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

        wxconfig.wxShowMenu(window.location.href,_this.title,"全科与公卫协同创新培训平台",_this.imgVideo)
      }
    },

    doPayNow() {

      let _this = this
      if (_this.isBuyed == '1') {
        return false
      }
      if (window.document.cookie.indexOf('uid=') < 0) {
        // alert('请先注册')
        // console.log(_this.proid)
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
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
            let _this = this

      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
        return false
      }
      let ret = await getCollection({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.isCollect = data.is_collectioned || ''
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
          MessageBox('提示', '收藏成功');
        } else {
          _this.isCollectTtl = '收藏'
          MessageBox('提示', '取消收藏成功');
        }
      }
    },

    async doConsult() {
        let _this = this
      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
        return false
      }
      this.popupVisibleConsult = true
    },
    gohome() {
        let _this = this
        _this.$router.push({
          name: 'home'
        })
        return false
    },
    hhh (item) {
      item.show = !item.show
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
        _this.phoneEmail = ''
        _this.consutContent = ''
        _this.popupVisibleConsult = false
      }
    }
  }
}
</script>
