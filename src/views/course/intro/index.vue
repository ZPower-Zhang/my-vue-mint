<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-intro">
      <div class="m-hd-cover">
        <img :src="imgVideo" alt srcset>
      </div>
      <div class="m-md-tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">培训介绍</mt-tab-item>
          <mt-tab-item id="2">评论安排</mt-tab-item>
          <mt-tab-item id="3">评论列表</mt-tab-item>
          <mt-tab-item id="4">课后交流</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <h3>多病共存条件下的全科医生临床技能淬炼培训</h3>
            <div class="inline-course">
              <span>¥2999</span>
              <span>27人购买</span>
              <span>34人点赞</span>
            </div>
            <div class="text-intro">
              <p>全科医生作为居民健康的守门人，其核心能力包括临床思维决策能力、基本诊疗技能操作能力、基于循证医学的疾病处理能力和开展社区卫生服务科学研究能力等。根据社区卫生服务中心的需求和建议，上海市医师协会、上海市医师协会全科医师分会主办、海军军医大学附属长海医院承办“多病共存条件下的全科医生临床技能淬炼培训”。</p>
              <p>（一） 培训目的</p>
              <p>1、提高全科医师临床常见疾病的诊疗能力；</p>
              <p>2、提高全科医师临床基本操作实践能力；</p>
              <p>3、提高全科医师慢病管理管理能力；</p>
              <p>4、提高全科医师健康宣教能力。</p>
              <p>（二） 培训内容</p>
              <p>本次培训班以提高呼吸系统疾病临床诊疗能力为主，采用授课形式以理论授课、实践操作指导相结合、大课与分组教学的个性化教学相结合、理论教学与应用教学相结合，剖析社区呼吸系统常见疾病的诊疗思路和慢病管理要点。培训内容强调社区实用性，切实提高全科医师的临床诊疗能力和慢病规范化管理能力。</p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <img :src="pngExcel" alt srcset>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell v-for="n in 6" :key="n" :title="'content ' + n"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="4">
            <mt-cell v-for="n in 6" :key="n" :title="'content ' + n"/>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="m-ft">
      <div class="ft-three">收藏</div>
      <div class="ft-consult">咨询</div>
      <div class="ft-apply">
        <a href="/course/order">立即报名</a>
      </div>
    </div>
  </div>
</template>

<script>
import videoImg from "@/assets/img/v2_pnrxn5.jpg";
import excelPng from "@/assets/img/v2_pnte53.png";
import HeaderTop from '@/components/HeaderTop'
export default {
  name: "intro",
  data() {
    return {
      imgVideo: videoImg,
      pngExcel: excelPng,
      selected: "1",
      showU: false,
      showBack: true,
      showTtl: '课程详情'
    };
  },
  components: {
    HeaderTop
  },
  created() {},
  methods: {}
};
</script>
