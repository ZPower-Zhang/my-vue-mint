<template>

<div style='position:relative;'>
<!--   <mt-button @click="gohome" style="position: absolute;background: none; border:none; -webkit-box-shadow:none;box-shadow:none;" >
  <img :src='Imgback' height="20" width="20" slot="icon" >
</mt-button> -->
  <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>

            <h1 style="font-size: .50rem;margin:auto;">{{title}}</h1>
            <div class='inline-course'>
              <span style="color: #f68f40;font-size: .30rem;">来源：{{comefrom}}</span>
              <!-- <span style='text-decoration:line-through;color: black'>{{on_sale == '1' ? '¥'+Orig_fee/100 : ''}}</span> -->
              <span style="font-size:.20rem;margin:auto;text-align: right;float:right">发布时间:{{updateTime}}</span>
            </div>
            <div class='text-intro'>
              <div v-html='introduction'></div>
            </div>
<!--     <div class='m-ft2'>
      <div class="ft-all" @click="doGetCollect">{{isCollectTtl}}</div>
    </div> -->
            

  </div>
</template>

<script>

import HeaderTop from '@/components/HeaderTop'
import {
  getCollection,
  getProinfo,
  getShare
} from '@/api/lession'
import wxconfig from '@/api/share'
import { MessageBox } from 'mint-ui';
export default {
  name: 'contents',
  data() {
    return {
      showU: false,
      showBack: true,
      showTtl: '资讯详情',
      title: '',
      proid: null,
      isCollect: '',
      isCollectTtl: '收藏',
      comefrom:'',
      updateTime:'',
      introduction:"",
      imgVideo:"",
    }
  },
  components: {
    HeaderTop
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
        _this.imgVideo = data.sImgURL || ''
        _this.title = data.body || ''
        _this.introduction = data.introduction || ''
        _this.isCollect = data.is_collectioned || ''
        _this.comefrom = data.comefrom || ''
        _this.updateTime = data.updateTime || ''


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
          name: 'up'
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
    }
  }
}
</script>
