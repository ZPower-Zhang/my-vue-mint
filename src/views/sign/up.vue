<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">
      <div class="m-ipt">
        <input type="text" v-model="phoneNum" placeholder="手机号">
      </div>
      <div class="m-ipt">
        <input type="text" v-model="validateCode" class="ipt-width" placeholder="短信验证码">
        <div class="send-code" @click="getCode">获取验证码</div>
      </div>

      <div class="m-sigle-btn">
        <!-- <router-link to="/sign/complete"> -->
        <mt-button type="default" size="small" @click="goToNext">下一步</mt-button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import { getSendSMS } from '@/api/lession'
export default {
  name: "signup",
  components: {
    HeaderTop
  },
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: '注册',
      phoneNum: null,
      validateCode: null,
    }
  },
  mounted() {},
  methods: {
    // 获取验证码
    async getCode() {
      let num = this.phoneNum
      let testPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i;
      if(!num) {
        alert('请输入手机号')
        return false
      }

      console.log(testPhone.test(num))
      if(!testPhone.test(num)) {
        alert('手机号输入错误')
      }

      let ret = await getSendSMS({
        phone: num
      })
    },

    // 下一步
    goToNext() {
      let num = this.phoneNum, code = this.validateCode;
      let testPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i, testcode = /^[0-9]{6}$/i;
      if(!num) {
        alert('请输入手机号')
        return false
      }
      if(!testPhone.test(num)) {
        alert('手机号输入错误')
      }
      if(!code) {
        alert('请输入验证码')
        return false
      }
      if(!testcode.test(code)) {
         alert('验证码输入不正确')
        return false
      }
      this.$router.push({
        path: "complete"
      })
    }
  }
};
</script>
