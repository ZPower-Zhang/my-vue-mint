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
          <!-- <p class='u-p'>{{item.speaker}} 主持</p> -->
          <p v-if="item.statues=='0'" class='u-p'>报名状态：确认中</p>
          <p v-if="item.statues=='1'" class='u-p'>报名状态：报名成功</p>
          <p v-if="item.statues=='2'" class='u-p'>报名状态：报名未成功</p>
          <p class='u-price'>
          <span class='u-count'>{{item.createTime|momentTime}}</span>
          </p>
        </div>
      </router-link>
      <router-link v-if="item.proType=='XSSP'" :to="'/course/videoView?data='+item.proid" class='panel-content'>
                      <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
        <div class='panel-bd'>
          <h3>{{item.body}}</h3>
          <p class='u-p'>报名状态：报名成功</p>
          <p class='u-price'>
          <span class='u-count'>{{item.createTime|momentTime}}</span>
          </p>
        </div>
      </router-link>
      <router-link v-if="item.proType=='KYZD'" :to="'/course/hindex?data='+item.proid" class='panel-content'>
                      <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
        <div class='panel-bd'>
          <h3>{{item.body}}</h3>
          <p class='u-price'>
          <span class='u-count'>{{item.createTime|momentTime}}</span>
          </p>
          <!-- <p class='u-p'>{{item.speaker}} 主持</p> -->
        </div>
      </router-link>
    </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop';
import moment from "moment";

import {
  getMyLearningList
} from '@/api/lession'
export default {
  name: 'study',
  created(){
    moment.locale("zh-cn")

  }
  ,filters:{
      momentTime: function (value) {
        return moment.utc(value).fromNow()
    }
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
    if(window.document.cookie.indexOf('openid')!=-1) {
              let curUid = this.getCookie('uid')
      if (!curUid){
              alert('请先注册登陆')
              _this.$router.push({
                name: 'up',
              })
              return false
        }else{
              this.getList()
        }
    }else{
          var ua = window.navigator.userAgent.toLowerCase()
          if (ua.match(/MicroMessenger/i) != 'micromessenger') {
                    let curUid = this.getCookie('uid')
      if (!curUid){
                    alert('请先注册登陆')
                    _this.$router.push({
                      name: 'up',
                    })
                    return false
              }else{
                    this.getList()
              }
          }
    }
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
