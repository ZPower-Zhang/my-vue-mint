<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">
      <div class="m-ipt">
        <input type="text" placeholder="手机号">
      </div>
      <div class="m-ipt">
        <input type="text" class="ipt-width" placeholder="短信验证码">
        <div class="send-code">获取验证码</div>
      </div>

      <div class="m-sigle-btn">
        <router-link to="/sign/complete">
        <mt-button type="default" size="small">下一步</mt-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
export default {
  name: "signup",
  components: {
    HeaderTop
  },
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: '注册'
    }
  },
  mounted() {

  },
  methods: {}
};
</script>
