<template>
<div style='position:relative;'>
  <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>
  <section class='g-list'>
    <div class='ul-panel' v-for='(item,index) in lists' :key='index'>
      <router-link v-if="item.proType=='XXPX'" :to="'/course/intro?data='+item.proid" class='panel-content'>
              <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
        <div class='panel-bd'>
          <h3>{{item.body}}</h3>
          <p class='u-p'>{{item.speaker}} 主持</p>
        </div>
      </router-link>
      <router-link v-if="item.proType=='XSSP'" :to="'/course/videoView?data='+item.proid" class='panel-content'>
                      <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
        <div class='panel-bd'>
          <h3>{{item.body}}</h3>
          <p class='u-p'>{{item.speaker}} 主持</p>
        </div>
      </router-link>
      <router-link v-if="item.proType=='KYZD'" :to="'/course/hindex?data='+item.proid" class='panel-content'>
                      <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
        <div class='panel-bd'>
          <h3>{{item.body}}</h3>
          <!-- <p class='u-p'>{{item.speaker}} 主持</p> -->
        </div>
      </router-link>
    </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop';
import {
  getMyLearningList
} from '@/api/lession'
export default {
  name: 'study',
  created(){
    // let _this = this
    // if (window.document.cookie.indexOf('uid=') < 0) {
    //     // alert('请先注册')
    //     // console.log(_this.proid)
    //     _this.$router.push({
    //       name: 'up',
    //     })
    //     return false
    //   }
  }
  ,data() {
    return {
      showU: false,
      showBack: true,
      showTtl: '我的学习',
      lists: []
    };
  },
  components: {
    HeaderTop
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      let ret = await getMyLearningList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists || []
      }
    }
  }
}
</script>
