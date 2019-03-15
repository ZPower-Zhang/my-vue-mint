<template>
  <div style="position:relative;">
    <mt-header :title="showTitle">
      <router-link to="/" slot="left" v-show="showBLink">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="toggle" v-show="showUser">
        <img :src="imgUser" alt srcset>
      </mt-button>
    </mt-header>
    <transition>
      <div class="user-dropdown" v-show="showDrop">
        <ul>
          <router-link to="/course/order">
            <li>我的订单</li>
          </router-link>
          <router-link to="/course/order">
            <li>我的学习</li>
          </router-link>
          <router-link to="/course/order">
            <li>课程兑换</li>
          </router-link>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import userImg from "@/assets/img/用户.png";
export default {
  name: "header",
  data() {
    return {
      imgUser: userImg,
      showBLink: true,
      showTitle: '',
      showDrop: false
    };
  },
  props:{
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
    this.showBLink = this.showBack || true;
    this.showUser = this.showU || true;
    this.showTitle = this.showTtl || '';
  },
  methods: {
    toggle() {
      this.showDrop = !this.showDrop;
    }
  }
};
</script>

