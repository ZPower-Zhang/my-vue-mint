<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-intro">
      <div class="m-hd-cover">
        <img :src="imgVideo" alt srcset>
      </div>
      <div class="m-md-tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">培训介绍</mt-tab-item>
          <mt-tab-item id="2">评论安排</mt-tab-item>
          <!-- <mt-tab-item id="3">评论列表</mt-tab-item> -->
          <mt-tab-item id="4">课后交流</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <h3>{{title}}</h3>
            <div class="inline-course">
              <span>¥{{total_fee/100}}</span>
              <span style="text-decoration:line-through;" v-if="seen">¥{{Orig_fee/100}}</span>
              <span>{{buyCount}}人购买</span>
              <span>还剩{{number-buyCount}}个名额</span>
              <span>{{collectionCount}}人点赞</span>
            </div>
            <div class="text-intro">
              <div v-html="introduction"></div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
          <div v-html="plan"></div>
          </mt-tab-container-item>
<!--           <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :key="n" :title="'content ' + n"/>
          </mt-tab-container-item> -->
          <mt-tab-container-item id="4">
            <!-- <mt-cell v-for="n in 6" :key="n" :title="'content ' + n"/> -->
            <div style="margin:0 auto; width:250px; height:400px;">
                <img :src="classImgURL" alt srcset>
                <h3>长按识别二维码，加入本培训课后交流微信群</h3>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="m-ft">
      <div class="ft-three">收藏</div>
      <div class="ft-consult">咨询</div>
      <div class="ft-apply">
        <a href="/course/order">立即报名</a>
      </div>
    </div>
  </div>
</template>

<script>
import videoImg from "@/assets/img/v2_pnrxn5.jpg";
import excelPng from "@/assets/img/v2_pnte53.png";
import HeaderTop from '@/components/HeaderTop'
import { getProinfo } from '@/api/lession'
export default {
  name: "intro",
  data() {
    return {
      imgVideo: videoImg,
      pngExcel: excelPng,
      selected: "1",
      showU: false,
      showBack: true,
      showTtl: '课程详情',
      title:"",
      total_fee:"",
      Orig_fee:"",
      number:0,
      seen:true,
      buyCount:0,
      collectionCount:0,
      introduction:"",
      plan:"",
      classImgURL:""
    };
  },
  components: {
    HeaderTop
  },
  created() {
    let proid = this.$route.query.data
    console.log(proid)
    this.getinfo(proid)

  },
  methods: {
    async getinfo(id) {
      let ret = await getProinfo({proid:id})
      console.log(ret)
      this.imgVideo = ret.data.bImgURL
      this.title = ret.data.body
      this.total_fee = ret.data.total_fee
      this.Orig_fee = ret.data.Orig_fee
      this.number = ret.data.number
      this.buyCount = ret.data.buyCount
      this.collectionCount = ret.data.collectionCount
      this.introduction = ret.data.introduction
      this.plan = ret.data.plan
      this.classImgURL = ret.data.classImgURL
    }
  }
};
</script>
