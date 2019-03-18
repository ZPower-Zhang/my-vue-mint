<template>
  <div style="position:relative;">
    <mt-header :title="showTitle" style="background-color:#ffffff">
      <router-link to="/" slot="left" v-show="showBLink">
        <mt-button icon="back"></mt-button>
      </router-link>
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
export default {
  name: "header-top",
  data () {
    return {
      imgUser: userImg,
      showBLink: true,
      showTitle: '',
      showDrop: false
    };
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
    }
  },
  components: {},
  created() {
    this.showBLink = this.showBack || false
    this.showUser = this.showU;
    this.showTitle = this.showTtl || ''
  },
  methods: {
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
