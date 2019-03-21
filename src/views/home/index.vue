<template>
  <div style='position:relative;'>
    <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU' :showLOGO='showLOGO'></HeaderTop>
    <section class='g-swiper'>
      <mt-swipe :auto='4000'>
        <mt-swipe-item v-for='(item, index) in bannerList' :key='index'>
          <a :href="'#/course/intro?data='+item.proid" target='_self' rel='noopener noreferrer'>
            <img v-bind:src='item.bImgURL' alt srcset style='width: 100%'>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class='g-nav'>
      <router-link to="/course/lists?data=XXPX">
        <img :src='trainImg' alt srcset style='width: 35px;height: 35px'>
        <h4>线下培训</h4>
      </router-link>
      <router-link to="/course/lists?data=XSSP">
        <img :src='videoImg' alt srcset style='width: 35px;height: 35px'>
        <h4>课程视频</h4>
      </router-link>
      <router-link to="/course/kyzdlists">
        <img :src='guideImg' alt srcset style='width: 35px;height: 35px'>
        <h4>科研指导</h4>
      </router-link>
      <router-link to="/course/lists?data=YNZX">
        <img :src='consultImg' alt srcset style='width: 35px;height: 35px'>
        <h4>业内资讯</h4>
      </router-link>
    </section>

    <section class='g-list' v-for='(item,index) in lists' :key='index'>
      <div class='list-ttl'>{{item.header}}</div>
      <div class='ul-panel' v-for='(item2,index2) in item.list' :key='index2'>

        <router-link v-if="item2.proType=='XXPX'" :to="'/course/intro?data='+item2.proid" class='panel-content'>
          <div class='panel-hd'>
            <img v-bind:src='item2.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item2.body}}</h3>
            <p class='u-p'>{{item2.speaker}} 主持</p>
            <p class='u-price'>
              <span class='u-unit'>￥{{item2.total_fee/100}}</span>
              <span style='text-decoration:line-through;color: black'>{{item2.on_sale == '1' ? '¥'+item2.Orig_fee/100 : ''}}</span>
              <span class='u-count'>剩余{{item2.number-item2.buyCount}}个名额</span>
            </p>
          </div>
        </router-link>

        <router-link v-if="item2.proType=='XSSP'" :to="'/course/videoView?data='+item2.proid" class='panel-content'>
          <div class='panel-hd'>
            <img v-bind:src='item2.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item2.body}}</h3>
            <p class='u-p'>{{item2.speaker}} 主讲</p>
            <p class='u-price'>
              <span class='u-unit'>￥{{item2.total_fee/100}}</span>
              <span style='text-decoration:line-through;color: black'>{{item2.on_sale == '1' ? '¥'+item2.Orig_fee/100 : ''}}</span>
              <span class='u-count'>{{item2.buyCount||0}}人购买</span>
            </p>
          </div>
        </router-link>

        <router-link v-if="item2.proType=='YNZX'" :to="'/course/contents?data='+item2.proid" class='panel-content'>
          <div class='panel-hd'>
            <img v-bind:src='item2.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item2.body}}</h3>
            <p class='u-price'>
              <span class='u-count'>{{item2.comefrom}}</span>
            </p>
          </div>
        </router-link>

        <router-link v-if="item2.proType=='KYZD'" :to="'/course/hindex?data='+item2.proid" class='panel-content'>
          <div class='panel-hd'>
            <img v-bind:src='item2.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item2.body}}</h3>
          </div>
        </router-link>

      </div>
      <router-link v-if="item.proType!='KYZD'" :to="'/course/lists?data='+item.proType" class='panel-load-more'>
        <h3>查看更多</h3>
      </router-link>
      <router-link v-if="item.proType=='KYZD'" :to="'/course/kyzdlists?data='+item.proType" class='panel-load-more'>
        <h3>查看更多</h3>
      </router-link>
    </section>





  </div>
</template>

<script>
import imgVideo from '@/assets/img/视频透明.png'
import imgTrain from '@/assets/img/培训透明.png'
import imgGuide from '@/assets/img/科研透明.png'
import imgConsult from '@/assets/img/资讯透明.png'
import HeaderTop from '@/components/HeaderTop'
import { getHome } from '@/api/lession'
export default {
  name: 'home',
  data() {
    return {
      videoImg: imgVideo,
      trainImg: imgTrain,
      guideImg: imgGuide,
      consultImg: imgConsult,
      showDrop: false,
      showU: true,
      showBack: true,
      showLOGO:true,
      // showTtl: '全科与公卫培训平台',
      showTtl: '',
      bannerList: [],
      lists: []
    };
  },
  components: {
    HeaderTop
  },
  created() {
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
    toggle () {
      this.showDrop = !this.showDrop
    }
  }
};
</script>
