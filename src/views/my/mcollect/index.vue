<template>
<div style="position:relative;">
  <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
  <section class='g-list' >
    <div class='ul-panel' v-for='(item,index) in lists' :key='index'>
      <router-link v-if="item.proType=='XXPX'" :to="'/course/intro?data='+item.proid" class='panel-content'>
        <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
          </div>
          <div class='panel-bd'>
            <h3>{{item.body}}</h3>
            <p class='u-p'>{{item.speaker}} 主持</p>
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
            <p class='u-p'>{{item.speaker}} 主持</p>
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
          </div>
      </router-link>
    </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import moment from "moment";

import {
  getMyCollectionList
} from '@/api/lession'
export default {
  name: 'mcollect', 
   created(){
    moment.locale("zh-cn")

  }
  ,filters:{
      momentTime: function (value) {
        return moment.utc(value).fromNow()
    }
  }
  ,
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: "我的收藏",
      lists: []
    };
  },
  components: {
    HeaderTop
  },
  mounted() {
        if(window.document.cookie.indexOf('openid')!=-1) {
          if (window.document.cookie.indexOf('uid=') < 0) {
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
              if (window.document.cookie.indexOf('uid=') < 0) {
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
      let ret = await getMyCollectionList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists || []
      }
    }
  }
};
</script>
