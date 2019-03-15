<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <section class="g-swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList">
          <a :href="'/course/intro?data='+item.proid" target="_self" rel="noopener noreferrer">
            <img
              v-bind:src="item.bImgURL"
              alt
              srcset
              style = "width: 100%"
            >
          </a>
          </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="g-nav">
      <a href="http://" target="_self">
        <img :src="videoImg" alt srcset style="width: 50px;height: 50px">
        <h4>课程视频</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="trainImg" alt srcset style="width: 50px;height: 50px">
        <h4>线下培训</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="guideImg" alt srcset style="width: 50px;height: 50px">
        <h4>科研指导</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="consultImg" alt srcset style="width: 50px;height: 50px">
        <h4>业内资讯</h4>
      </a>
    </section>

    <section class="g-list" v-for="(item,index) in lists">
      <div class="list-ttl">{{item.header}}</div>
      <div class="ul-panel" v-for="(item2,index2) in item.list">
        <a
          :href="'/course/intro?data='+item2.proid"
          target="_self"
          rel="noopener noreferrer"
          class="panel-content"
        >
          <div class="panel-hd">
            <img v-bind:src="item2.sImgURL" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>{{item2.body}}}</h3>
            <p class="u-p">{{item2.speaker}} 主持</p>
            <p class="u-price">
              <span class="u-unit">￥</span>{{item2.total_fee/100}}
              <span class="u-count">剩余{{item2.number-item2.buyCount}}个名额</span>
            </p>
          </div>
        </a>
      </div>
          <a href="http://" target="_self" rel="noopener noreferrer" class="panel-ft">
          <h3>查看更多</h3>
        </a>
      
    </section>
  </div>
</template>

<script>
import imgVideo from "@/assets/img/视频.png"
import imgTrain from "@/assets/img/线下培训.png"
import imgGuide from "@/assets/img/科研.png"
import imgConsult from "@/assets/img/行业资讯.png"
import HeaderTop from '@/components/HeaderTop'
import { getHome } from '@/api/lession'
export default {
  name: "hindex",
  data() {
    return {
      videoImg: imgVideo,
      trainImg: imgTrain,
      guideImg: imgGuide,
      consultImg: imgConsult,
      showDrop: false,
      showU: true,
      showBack: false,
      showTtl: '全科与公卫培训平台',
      bannerList:[],
      lists:[],

    };
  },
  components: {
    HeaderTop
  },
  created() {
    this.home()
  },
  methods: {
    async home() {
      let ret = await getHome({})
      console.log(ret)
      this.bannerList = ret.data.banner
      this.lists = ret.data.lists
    },
    toggle() {
      this.showDrop = !this.showDrop;
    }
  }
};
</script>
