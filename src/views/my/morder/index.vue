<template>
  <div style='position:relative;'>
    <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>
    <section class='g-list'>
      <div class='ul-panel ul-study' v-for="(item, index) in dataList" :key="index">
        <div href='/course/intro?data=121' target='_self' rel='noopener noreferrer' class='panel-content' >
          <div class='panel-hd'>
            <img src='https://pro.modao.cc/uploads4/images/2839/28392980/v2_pjascw.png' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>多病共存条件下的全科医生临床技能淬炼课程</h3>
            <p class='u-p'>杨浦区中心医院 主持</p>
            <p class='u-price'>
              <span class='u-unit'>￥</span>2999
              <span class='u-count'>27人参与</span>
            </p>
          </div>
        </div>
        <div class='pay-detail'>
          <div class='dt-lf'>
            <p class="p-price">实际付款: ￥<span>388</span></p>
            <p>购买成功</p>
          </div>
          <mt-button type='default' size='small' @click='goToStudy'>立即学习</mt-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop';
import { getOrderList } from '@/api/lession'
export default {
  name: 'morder',
  data () {
    return {
      showU: false,
      showBack: true,
      showTtl: '我的订单',
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
    goToStudy () {

    },

    // 获取列表
    async getList() {
      let ret = await getOrderList({})
      if (ret && ret.flag) {
        this.dataList = ret.data.list || []
      }
    }
  }
}
</script>
