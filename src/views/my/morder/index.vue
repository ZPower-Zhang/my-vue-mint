<template>
<div style='position:relative;'>
  <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>
  <section class='g-list'>
    <div class='ul-panel ul-study' v-for='(item,index) in lists' :key='index'>
      <div href='/course/intro?data=121' target='_self' rel='noopener noreferrer' class='panel-content'>
        <div class='panel-hd'>
          <img v-bind:src='item.sImgURL' alt srcset>
        </div>
          <div class='panel-bd'>
            <h3>{{item.body}}</h3>
            <p class='u-p'>{{item.speaker}} 主持</p>
          </div>
        </div>
        <div class='pay-detail'>
          <div class='dt-lf'>
            <p class="p-price">实际付款: ￥<span>{{item.total_fee/100 || ''}}</span></p>
            <p>{{item.state == '0' ? '购买成功' : '购买失败'}}</p>
            <p class='u-price'>
            <span class='u-count'>{{item.createTime|momentTime}}</span>
            </p>
          </div>
          <!-- <mt-button type='default' size='small' @click='goToStudy'>立即学习</mt-button> -->
        </div>
      </div>
  </section>
</div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop';
import moment from "moment";

import {
  getOrderList
} from '@/api/lession'
export default {
  name: 'morder',  
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
      showTtl: '我的订单',
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
    goToStudy() {

    },

    // 获取列表
    async getList() {
      let ret = await getOrderList({})
      if (ret && ret.flag) {
        this.lists = ret.data.lists || []
      }
    }
  }
}
</script>
