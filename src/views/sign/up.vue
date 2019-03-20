<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">      
      <div class="error-box" :class="{'block-i': showErr}">
        <i class="mintui mintui-field-warning"></i>
        {{errMsg}}
      </div>

      <div class="m-ipt">
        <input type="text" v-model="phoneNum" placeholder="手机号">
      </div>
      <div class="m-ipt">
        <input type="text" v-model="validateCode" class="ipt-width" placeholder="短信验证码">
        <div class="send-code" v-show="show" @click="getCode">获取验证码</div>
        <div class="send-code" v-show="!show">{{count}} s</div>
<!--         <span v-show="show" @click="getCode">获取验证码</span>
        <span v-show="!show" class="count">{{count}} s</span> -->
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
import { getSendSMS, getAuthSMS } from '@/api/lession'
export default {
  name: 'signup',
  components: {
    HeaderTop
  },
  data () {
    return {
      showU: false,
      showBack: true,
      showTtl: '注册',
      phoneNum: null,
      validateCode: null,
      showErr: false,
      errMsg: '',
       show: true,
       count: '',
       timer: null
    }
  },
  mounted () {},
  methods: {
    // 获取验证码
    async getCode() {
      let _this = this
      let num = this.phoneNum
      let testPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i;
      if (!num) {
        _this.toggleError(true, '请输入手机号')
        return false
      }

      if (!testPhone.test(num)) {
        _this.toggleError(true, '手机号格式错误')
        return false
      }

      
      _this.toggleError(false)

      const TIME_COUNT = 60;
           if (!this.timer) {
             this.count = TIME_COUNT;
             this.show = false;
             this.timer = setInterval(() => {
             if (this.count > 0 && this.count <= TIME_COUNT) {
               this.count--;
              } else {
               this.show = true;
               clearInterval(this.timer);
               this.timer = null;
              }
             }, 1000)
            }

      let ret = await getSendSMS({
        phone: num
      })
      if (ret && ret.flag) {
        console.log(ret)

        if (ret.ret == '200'){
        let statusCode = ret.data.statusCode || ''
        let statusMsg = ret.data.statusMsg || ''
          console.log(statusCode)
          console.log(statusMsg)
          if (statusCode!="000000") {
           _this.toggleError(true, statusMsg)  
          }
        }else{
          _this.toggleError(true, ret.msg)
        }
      }
    },

    // 错误信息的提示
    toggleError (show, msg) {
      this.showErr = show
      if(show) {
        this.errMsg = msg
      } else {
        this.errMsg = ''
      }
    },

    // 验证码校验
    async goToNext() {
      
      let _this = this
      let num = this.phoneNum, code = this.validateCode;
      let testPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/i, testcode = /^[0-9]{6}$/i;
      if(!num) {
        _this.toggleError(true, '请输入手机号')
        return false
      }
      if(!testPhone.test(num)) {
        _this.toggleError(true, '手机号格式错误')
        return false
      }
      if(!code) {
        _this.toggleError(true, '请输入验证码')
        return false
      }
      if(!testcode.test(code)) {
        _this.toggleError(true, '验证码输入不正确')
        return false
      }
      _this.toggleError(false)

      let ret = await getAuthSMS({
        phone: num,
        code: code
      })

      if (ret && ret.flag) {
        let dataRet = ret.ret || ''
        if (dataRet == '200') {
          _this.$router.push({
            path: 'complete',
            query:{
              phoneNum: num
            }
          })
        } else {
          _this.toggleError(true, ret.msg)
        }
      }
    }
  }
};
</script>
