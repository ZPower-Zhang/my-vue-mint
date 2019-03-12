<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">
      <div class="m-ipt">
        <input type="text" placeholder="姓名" v-model="userName">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="邮箱" v-model="email">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="所在省份" v-model="province">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="所在医疗机构" v-model="company">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="职业证书编码" v-model="code">
      </div>

      <div class="m-sigle-btn">
        <mt-button type="default" size="small">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import { getRegis } from '@/api/lession'
export default {
  name: "complete",
  data () {
    return {
      switchVal: 1,
      showU: false,
      showBack: true,
      showTtl: '完善个人信息',
      userName: '',
      email: '',
      province: ''
    }
  },
  components: {
    HeaderTop
  },
  mounted() {},
  methods: {
    // 获取参数信息
    getParams() {
      if(this.userName) {

      }
      let obj = {
        phone: null,
        userName: '',
        email: '',
        province: '',
        company: '',
        code: ''
      }

      return obj
    },

    // 注册
    async doRegister (){
      let params = this.getParams()
      let ret = await getRegis(params)
      if(ret&& ret.flag) {

      }
    }
  }
};
</script>
