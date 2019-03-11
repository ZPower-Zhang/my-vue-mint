<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">
      <div class="m-ipt">
        <input type="text" placeholder="姓名">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="邮箱">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="所在省份">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="所在医疗机构">
      </div>
      <div class="m-ipt">
        <input type="text" placeholder="职业证书编码">
      </div>

      <div class="m-sigle-btn">
        <mt-button type="default" size="small">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
export default {
  name: "complete",
  data() {
    return {
      switchVal: 1,
      showU: false,
      showBack: true,
      showTtl: '完善个人信息'
    };
  },
  components: {
    HeaderTop
  },
  mounted() {},
  methods: {}
};
</script>
