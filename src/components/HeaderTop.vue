<template>
  <div style="position:relative;">
    <mt-header :title="showTitle" style="background-color:#ffffff;color: black">
      <!-- <router-link to="/" slot="left" v-show="showBLink"> -->
        <!-- <mt-button icon="back"></mt-button> -->
          <mt-button v-if="showLOGO" style=""  v-show="showBLink" slot="left">
          <img  :src='Imgback1' height="40px" width="200px" slot="icon" style="">
        </mt-button>

        <mt-button v-if="!showLOGO" style="" @click="back" v-show="showBLink" slot="left">
          <img  :src='Imgback2' height="20px" width="20px" slot="icon">
        </mt-button>

      <!-- </router-link> -->
      <mt-button slot="right" @click="toggle" v-show="showUser">
        <img :src="imgUser" alt srcset style="width: 20px">
      </mt-button>
    </mt-header>
    <transition>
      <div class="user-dropdown" v-show="showDrop">
        <ul>
          <router-link to="/my/morder">
            <li>我的订单</li>
          </router-link>
          <router-link to="/my/mstudy">
            <li>我的学习</li>
          </router-link>
          <router-link to="/my/mcollect">
            <li>我的收藏</li>
          </router-link>
          <router-link to="/my/conversion">
            <li>课程兑换</li>
          </router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import userImg from "@/assets/img/user1.png";
import backImg from '@/assets/img/返回.png'
import logoImg from '@/assets/img/logo3.png'

export default {
  name: "header-top",
  data () {
    return {
      Imgback1:logoImg,
      Imgback2:backImg,
      imgUser: userImg,
      showBLink: true,
      showTitle: '',
      showDrop: false,
    }
  },
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    showTtl: {
      type: String,
      default: ''
    },
    showU: {
      type: Boolean,
      default: true
    },
    showLOGO:{
      type:Boolean,
      default:false
    }
  },
  components: {},
  created() {
    this.showBLink = this.showBack || false
    this.showUser = this.showU;
    this.showTitle = this.showTtl || ''
  },
  methods: {

    back() {
        console.log(window.history.length)

        if (window.history.length <= 2) {
                this.$router.push({
                  name: 'home',
              })
                return false
            } else {
                this.$router.go(-1)
            }
    },
    toggle() {
      let curUid = this.getCookie('uid'), _this = this;
      if (!curUid) {
        _this.$router.push({
          name: 'up'
        })
        return false
      }
      this.showDrop = !this.showDrop;
    }
  }
};
</script>
