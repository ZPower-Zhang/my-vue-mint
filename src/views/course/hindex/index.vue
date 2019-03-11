<template>
  <div>
    <section class="g-haeder">
      <div class="m-ttl">全科医学培训</div>
      <div class="m-search"></div>
      <div class="m-user"></div>
    </section>

    <section class="g-swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a href="http://" target="_self" rel="noopener noreferrer">
            <img
              src="https://img1.dxycdn.com/2018/1211/109/3316768728943212326-10.png?ts=1550719406791"
              alt
              srcset
            >
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="http://" target="_self" rel="noopener noreferrer">
            <img
              src="https://img1.dxycdn.com/2018/0801/011/3292296213596644006-10.png?ts=1550719406706"
              alt
              srcset
            >
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="http://" target="_self" rel="noopener noreferrer">
            <img
              src="https://img1.dxycdn.com/2018/1224/958/3319180977997839945-10.png?ts=1550719406354"
              alt
              srcset
            >
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="g-nav">
      <a href="http://" target="_self">
        <img :src="videoImg" alt srcset>
        <h4>课程视频</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="trainImg" alt srcset>
        <h4>线下培训</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="guideImg" alt srcset>
        <h4>科研指导</h4>
      </a>
      <a href="http://" target="_self">
        <img :src="consultImg" alt srcset>
        <h4>业内资讯</h4>
      </a>
    </section>

    <section class="g-list">
      <div class="list-ttl">新课推荐</div>
      <div class="ul-panel">
        <a href="http://" target="_self" rel="noopener noreferrer" class="panel-content">
          <div class="panel-hd">
            <img src="https://pro.modao.cc/uploads4/images/2839/28392980/v2_pjascw.png" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>多病共存条件下的全科医生临床技能淬炼课程</h3>
            <p class="u-p">杨浦区中心医院 主持</p>
            <p class="u-price">
              <span class="u-unit">￥</span>2999
              <span class="u-count">27人参与</span>
            </p>
          </div>
        </a>
        <a href="http://" target="_self" rel="noopener noreferrer" class="panel-content">
          <div class="panel-hd">
            <img src="https://pro.modao.cc/uploads4/images/2839/28392980/v2_pjascw.png" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>多病共存条件下的全科医生临床技能淬炼课程</h3>
            <p class="u-p">杨浦区中心医院 主持</p>
            <p class="u-price">
              <span class="u-unit">￥</span>2999
              <span class="u-count">27人参与</span>
            </p>
          </div>
        </a>
        <a href="http://" target="_self" rel="noopener noreferrer" class="panel-content">
          <div class="panel-hd">
            <img src="https://pro.modao.cc/uploads4/images/2839/28392980/v2_pjascw.png" alt srcset>
          </div>
          <div class="panel-bd">
            <h3>多病共存条件下的全科医生临床技能淬炼课程</h3>
            <p class="u-p">杨浦区中心医院 主持</p>
            <p class="u-price">
              <span class="u-unit">￥</span>2999
              <span class="u-count">27人参与</span>
            </p>
          </div>
        </a>
        <a href="http://" target="_self" rel="noopener noreferrer" class="panel-ft">
          <h4>查看更多</h4>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import imgVideo from "@/assets/img/video.png";
import imgTrain from "@/assets/img/training.png";
import imgGuide from "@/assets/img/guide.png";
import imgConsult from "@/assets/img/svg_consult.png";
import userImg from "@/assets/img/user-secret.png";
export default {
  name: "hindex",
  data() {
    return {
      videoImg: imgVideo,
      trainImg: imgTrain,
      guideImg: imgGuide,
      consultImg: imgConsult,
      imgUser: userImg
    };
  },
  components: {},
  created() {},
  methods: {}
};
</script>
