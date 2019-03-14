<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <section class="g-list">
      <div class="ul-panel">
        <a
          href="/course/intro?data=121"
          target="_self"
          rel="noopener noreferrer"
          class="panel-content"
        >
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
        <a
          href="/course/intro?data=122"
          target="_self"
          rel="noopener noreferrer"
          class="panel-content"
        >
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
        <a
          href="/course/intro?data=123"
          target="_self"
          rel="noopener noreferrer"
          class="panel-content"
        >
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
      </div>
    </section>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
export default {
  name: "study",
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: "我的学习"
    };
  },
  components: {
    HeaderTop
  },
  mounted() {},
  methods: {}
};
</script>

