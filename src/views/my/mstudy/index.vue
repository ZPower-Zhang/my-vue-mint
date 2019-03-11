<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
export default {
  name: "study",
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: "我的学习"
    };
  },
  components: {
    HeaderTop
  },
  mounted() {},
  methods: {}
};
</script>

