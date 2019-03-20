<template>
<div style="position:relative;">
  <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  <section class="g-list">
    <div class="ul-panel" v-for="(item,index) in lists" :key="index">
      <router-link v-if="item.proType=='XXPX'" :to="'/course/intro?data='+item.proid" class="panel-content">
        <div class="panel-hd">
          <img v-bind:src="item.sImgURL" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>{{item.body}}</h3>
            <p class="u-p">{{item.speaker}} 主持</p>
            <p class="u-price">
              <span class='u-unit'>￥{{item.total_fee/100}}</span>
              <span style='text-decoration:line-through;color: black'>{{item.on_sale == '1' ? '¥'+item.Orig_fee/100 : ''}}</span>
              <span
                class="u-count"
              >剩余{{item.number-item.buyCount}}个名额</span>
            </p>
          </div>
      </router-link>


      <router-link v-if="item.proType=='YNZX'" :to="'/course/contents?data='+item.proid" class='panel-content'>
          <div class='panel-hd'>
            <img v-bind:src='item.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item.body}}</h3>
            <p class='u-price'>
              <span class='u-count'>{{item.comefrom}}</span>
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
  getHome,
  getXXPXList,
  getYNZXList
} from '@/api/lession'
export default {
  name: 'lists',
  created() {
    this.proType = this.$route.query.data
    // console.log(this.proType)
    if(this.proType=="XXPX"){
          this.showTtl="线下培训"
          this.xxpx();
    }else if (this.proType=="YNZX") {
          this.showTtl="业内资讯"
          this.ynzx();
    }else if (this.proType=="XSSP"){
          this.showTtl="线上视频"
    }
  },
  data() {
    return {
      showDrop: false,
      showU: true,
      showBack: true,
      showTtl: '',
      lists: [],
      proType:"",
    }
  },
  components: {
    HeaderTop
  },
  mounted() {
  },
  methods: {
    async xxpx() {
      let ret = await getXXPXList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists
      }
    },    async ynzx() {
      let ret = await getYNZXList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists
      }
    },
  }
}
</script>
