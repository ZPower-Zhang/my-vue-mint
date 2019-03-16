<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
export default {
  name: 'mcollect',
  data () {
    return {
      showU: false,
      showBack: true,
      showTtl: "我的收藏",
      dataList: []
    };
  },
  components: {
    HeaderTop
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      let ret = await getMyCollectionList({})
      if (ret && ret.flag) {
        this.dataList = ret.data.list || []
      }
    }
  }
};
</script>

