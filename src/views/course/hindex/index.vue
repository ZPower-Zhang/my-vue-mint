<template>

<div style='position:relative;'>
  <mt-button @click="gohome" style="position: absolute;background: none; border:none; -webkit-box-shadow:none;box-shadow:none;" >
  <img :src='Imgback' height="20" width="20" slot="icon" >
</mt-button>
  <!-- <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop> -->

  <div class='g-intro'>
    <div class='m-hd-cover'>
      <img :src='imgVideo' alt srcset>
      </div>
      <div class='m-md-tab'>
        <mt-navbar v-model='selected'>
          <mt-tab-item id='1'>指导介绍</mt-tab-item>
          <mt-tab-item id='2'>专家介绍</mt-tab-item>
          <!-- <mt-tab-item id='3'>评论列表</mt-tab-item> -->
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model='selected'>
          <mt-tab-container-item id='1'>

            <div class='text-intro'>
              <div v-html='introduction'></div>
            </div>

          <div style="height: 50px"></div>
          </mt-tab-container-item>
          <mt-tab-container-item id='2'>
            <section class='g-list'>
            <div class='list-ttl'>{{'专家介绍'}}</div>
            <div class='ul-panel' v-for='(item,index) in teachersList' :key='index'>
                    <div class='panel-content' @click="hhh(item)">
                      <div class='panel-hd'>
                        <img v-bind:src='item.headerImageUrl' alt srcset>
                        <!-- <h3>{{item.name}}</h3> -->
                      </div>
                            <p class='p-u' v-if="!item.show" style="margin:20px;padding: 0px;
                              overflow: hidden;
                              -webkit-line-clamp: 3; 
                              -webkit-box-orient: vertical;
                              display: -webkit-box;
                              ">{{item.name}}     {{item.introduction}}</p>
                         <p v-if="item.show">{{item.name}}  </br>  {{item.introduction}}</p>
                      <span style="color: #ff9800;position:absolute; right: 0;bottom:0">{{item.show?"收起":"展开"}}</span>
                      </div>
            </div>
            </section>
            <div style="height: 50px"></div>
            </mt-tab-container-item>
          <!--           <mt-tab-container-item id='3'>
            <mt-cell v-for='n in 6' :key='n' :title=''content ' + n'/>
          </mt-tab-container-item> -->

        </mt-tab-container>
      </div>
    </div>
    <div class='m-ft3'>
      <div class='ft-three' @click="doGetCollect">{{isCollectTtl}}</div>
      <div class='ft-consult' @click="doConsult">咨询</div>
    </div>

    <mt-popup v-model="popupVisibleConsult" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field label="联系方式" placeholder="请输入联系方式" type="text" v-model="phoneEmail"></mt-field>
      <mt-field label="咨询内容" placeholder="请输入咨询内容" type="textarea" rows="4" v-model="consutContent"></mt-field>
      <div class="sigle-btn-pay" @click="toToConsult">
        <mt-button class="btn-pay" size="normal">提交</mt-button>
      </div>
    </mt-popup>

  </div>
</template>

<script>

import HeaderTop from '@/components/HeaderTop'
import backImg from '@/assets/img/返回.png'
import {
  getCollection,
  getConsult,
  getProinfo,
  getShare
} from '@/api/lession'
import wxconfig from '@/api/share'
import { MessageBox } from 'mint-ui';
export default {
  name: 'hindex',
  data() {
    return {
      teachersList:[],
      Imgback:backImg,
      imgVideo: '',
      selected: '1',
      title: '',
      introduction: '',
      popupVisible: false,
      popupVisibleConsult: false,
      proid: null,
      isCollect: '',
      isCollectTtl: '收藏',
      phoneEmail: '',
      consutContent: ''
    }
  },
  components: {
    // HeaderTop
  },
  created() {
    this.proid = this.$route.query.data
    this.getinfo(this.proid)
  },
  methods: {
    async getinfo(id) {
      let _this = this
      let ret = await getProinfo({
        proid: id
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.imgVideo = data.bImgURL || ''
        _this.title = data.body || ''

        _this.introduction = data.introduction || ''
        _this.isCollect = data.is_collectioned || ''
        _this.teachersList = data.teachers || []

        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
        } else {
          _this.isCollectTtl = '收藏'
        }

        wxconfig.wxShowMenu(window.location.href,_this.title,"全科与公卫协同创新培训平台",_this.imgVideo)
      }
    },
    async doGetCollect() {
            let _this = this

      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid}
        })
        return false
      }
      let ret = await getCollection({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.isCollect = data.is_collectioned || ''
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
          MessageBox('提示', '收藏成功');
        } else {
          _this.isCollectTtl = '收藏'
          MessageBox('提示', '取消收藏成功');
        }
      }
    },

    async doConsult() {
        let _this = this
      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid}
        })
        return false
      }
      this.popupVisibleConsult = true
    },
    gohome() {
        let _this = this
        _this.$router.push({
          name: 'home'
        })
        return false
    },
    hhh (item) {
      item.show = !item.show
    }

    ,

    async toToConsult() {
      let _this = this
      let ret = await getConsult({
        proid: _this.proid,
        contect: _this.phoneEmail,
        commont: _this.consutContent
      })
      if (ret && ret.flag) {
        _this.phoneEmail = ''
        _this.consutContent = ''
        _this.popupVisibleConsult = false
      }
    }
  }
}
</script>
