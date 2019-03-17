<template>
<div style="position:relative;">
  <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  <section class="g-list">
    <div class="ul-panel">
      <a
          href="/course/intro?data=121"
          target="_self"
          rel="noopener noreferrer"
          class="panel-content"
        >
          <div class="panel-hd">
            <img src="https://pro.modao.cc/uploads4/images/2839/28392980/v2_pjascw.png" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>以"人"为核心的全科医学模式下全科医生的人文素养课程</h3>
            <p class="u-p">江孙芳 韩一平主持</p>
            <p class="u-price">
              <span class="u-unit">￥</span>2999
              <span class="u-count">27人参与</span>
            </p>
          </div>
        </a>
    </div>
    <a class="mint-cell m-agree">
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <span class="mint-cell-text">我已同意 收费培训服务协议</span>
          </div>
          <mt-switch v-model="switchVal"></mt-switch>
        </div>
        <div class="mint-cell-right"></div>
      </a>
  </section>
  <div class="m-ft m-pay">
    <div class="m-total">
      <span>合计</span>
      <span class="u-money">
          <i>￥</i>299.00
        </span>
    </div>
    <div class="pay-now" @click="payNow">立即支付</div>
  </div>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import {
  getWxPay,
  getWxRepay
} from '@/api/lession'
export default {
  name: "order",
  data() {
    return {
      switchVal: true,
      showU: false,
      showBack: true,
      showTtl: '确认订单'
    };
  },
  components: {
    HeaderTop
  },
  mounted() {},
  methods: {
    // 支付
    async payNow() {
      let _this = this
      if (!_this.switchVal) {
        alert('请先选择同意')
        return false
      }
      let ret = await getWxPay({
        proid: ''
      })
      if (ret && ret.flag) {

      }
    },

    // 重新支付
    async goToRePay() {
      let ret = await getWxRepay({})
      if (ret && ret.flag) {

      }
    }
  }
};
</script>
