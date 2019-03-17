<template>
<div style="position:relative;">
  <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  <section class="g-list" v-for="(item,index) in lists" :key="index">
    <div class="ul-panel" v-for="(item2,index2) in item.list" :key="index2">
      <router-link :to="'/course/intro?data='+item2.proid" class="panel-content">
        <div class="panel-hd">
          <img v-bind:src="item2.sImgURL" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>{{item2.body}}</h3>
            <p class="u-p">{{item2.speaker}} 主持</p>
            <p class="u-price">
              <span class='u-unit'>￥{{item2.total_fee/100}}</span>
              <span style='text-decoration:line-through;color: black'>{{item2.on_sale == '1' ? '¥'+item2.Orig_fee/100 : ''}}</span>
              <span
                class="u-count"
              >剩余{{item2.number-item2.buyCount}}个名额</span>
            </p>
          </div>
      </router-link>
    </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import {
  getHome
} from '@/api/lession'
export default {
  name: 'lists',
  data() {
    return {
      showDrop: false,
      showU: true,
      showBack: true,
      showTtl: '线下培训',
      bannerList: [],
      lists: []
    }
  },
  components: {
    HeaderTop
  },
  mounted() {
    this.home();
  },
  methods: {
    async home() {
      let ret = await getHome({})
      if (ret && ret.flag) {
        this.bannerList = ret.data.banner
        this.lists = ret.data.lists
      }
    },
  }
}
</script>
