<template>

<div style='position:relative;'>
  <mt-button @click="back" style="position: absolute;background: none; border:none; -webkit-box-shadow:none;box-shadow:none;" >
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
          <mt-tab-item id='3'>评论列表</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model='selected'>
          <mt-tab-container-item id='1'>
            <h2>{{title}}</h2>
            <div class='inline-course'>
              <span style="font-size:.30rem">{{collectionCount}}人收藏</span>
            </div>
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
            <mt-tab-container-item id='3'>
                          <div v-if="commentLen==0">
                <div  @click="doComment()">
                  <mt-cell title="暂无评论，快来添加吧！">
                    <span>评论</span>
                  </mt-cell>
                </div>
            </div>
            <div v-for='(item,index) in commentList' :key='index'>
                <div  @click="doReply(item)">
                  <mt-cell :title="item.from_name+' :'+item.content">
                    <span style="font-size: 10px">{{item.createTime|momentTime}}</span>
                  </mt-cell>
                </div>
              <div v-for='(item2,index2) in item.replyList' :key='index2'>
                <div  @click="doReply(item2)">
                  <mt-cell  :label="item2.from_name+' 回复@'+item2.to_name+' :'+item2.content">
                    <span style="font-size: 10px">{{item2.createTime|momentTime}}</span>
                  </mt-cell>
                </div>
              </div>
            </div>
          <div style="height: 50px"></div>


          </mt-tab-container-item>

        </mt-tab-container>
      </div>
    </div>
    <div class='m-ft3'>
      <div class='ft-consult2' @click="doComment">评论</div>
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
    <mt-popup v-model="popupVisibleConsult2" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field label="评论:" placeholder="请输入评论内容" type="textarea" rows="4" v-model="consutContent2"></mt-field>
      <div class="sigle-btn-pay" @click="toToComment">
        <mt-button class="btn-pay" size="normal">提交</mt-button>
      </div>
    </mt-popup>

    <mt-popup v-model="popupVisibleConsult3" popup-transition="popup-fade" position="bottom" class="p-popup-pay">
      <mt-field :label="'@'+replyDic.from_name+':'" placeholder="请输入回复内容" type="textarea" rows="4" v-model="consutContent3"></mt-field>
      <div class="sigle-btn-pay" @click="toToReplay">
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
  getShare,
  getCommentList,
  getComment,
  getReplay
} from '@/api/lession'
import wxconfig from '@/api/share'
import { MessageBox,Toast } from 'mint-ui';
import moment from "moment";
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
      collectionCount:0,
      popupVisible: false,
      popupVisibleConsult: false,
      proid: null,
      isCollect: '',
      isCollectTtl: '收藏',
      phoneEmail: '',
      consutContent: '',
      popupVisibleConsult2:false,
      popupVisibleConsult3:false,
      consutContent2: '',
      consutContent3: '',
      commentList:[],
      commentLen:0,
      replyDic:{"from_name":"","from_uid":"","commont_id":""},
    }
  },
  components: {
    // HeaderTop
  },
  created() {
    this.proid = this.$route.query.data
    this.getinfo(this.proid)
    this.getComlist(this.proid)
    moment.locale("zh-cn")
  },filters:{
      momentTime: function (value) {
        return moment.utc(value).fromNow()
    }
  }
  ,
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
        _this.collectionCount = data.collectionCount || 0

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
          params: {comproid: _this.proid,comprotype:"KYZD"}
        })
        return false
      }
      let ret = await getCollection({
        proid: _this.proid
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        let data = ret.data || {}
        _this.isCollect = data.is_collectioned || ''
        if (_this.isCollect == '1') {
          _this.isCollectTtl = '取消收藏'
          // MessageBox('提示', '收藏成功');
          Toast('收藏成功');
        } else {
          _this.isCollectTtl = '收藏'
          // MessageBox('提示', '取消收藏成功');
          Toast('取消收藏成功');
        }
      }else{
          // MessageBox('提示', '收藏失败');
          Toast('收藏失败');
      }
      }
    },

    async doConsult() {
        let _this = this
      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"KYZD"}
        })
        return false
      }
      this.popupVisibleConsult = true
    },
        back() {

        if (window.history.length <= 1) {
                this.$router.push({path:'/'})
                return false
            } else {
                this.$router.go(-1)
            }
    },
    hhh (item) {
      item.show = !item.show
    },async getComlist(id) {
      let _this = this
      let ret = await getCommentList({
        proid: id
      })
      if (ret && ret.flag) {
        let data = ret.data || {}
        _this.commentList = data.lists || []
        _this.commentLen = data.lists.length
        // console.log(ret)
      }
    },

    doComment(){
        let _this = this
      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
        return false
      }
      this.popupVisibleConsult2 = true
    },
    doReply(item){
              let _this = this
      if (window.document.cookie.indexOf('uid=') < 0) {
        _this.$router.push({
          name: 'up',
          params: {comproid: _this.proid,comprotype:"XXPX"}
        })
        return false
      }
      this.popupVisibleConsult3 = true
      this.replyDic.from_name=item.from_name
      this.replyDic.from_uid=item.from_uid
      this.replyDic.comment_id=item.comment_id
    }
    ,
    async toToComment(){
      let _this = this
      let ret = await getComment({
        proid: _this.proid,
        content: _this.consutContent2
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        _this.consutContent2 = ''
        _this.popupVisibleConsult2 = false
        document.body.scrollTop = 0
        // MessageBox('提示', ret.msg);
        Toast(ret.msg);
        this.getComlist(this.proid)
      }else{
        // MessageBox('提示', '评论失败');
        Toast('评论失败');
        }
      }
    }
    ,
    async toToReplay(){
      let _this = this
      let ret = await getReplay({
        comment_id: _this.replyDic.comment_id,
        to_uid: _this.replyDic.from_uid,
        content: _this.consutContent3
      })
      if (ret && ret.flag) {
        if(ret.ret=="200"){
        _this.consutContent3 = ''
        _this.popupVisibleConsult3 = false
        document.body.scrollTop = 0
        // MessageBox('提示', ret.msg);
        Toast(ret.msg);
        this.getComlist(this.proid)
      }else{
        // MessageBox('提示', '回复失败');
        Toast('回复失败');
        }
      }
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
        if(ret.ret=="200"){
        // MessageBox('提示', '咨询已提交');
        Toast('咨询已提交');
        _this.phoneEmail = ''
        _this.consutContent = ''
        _this.popupVisibleConsult = false
      }else{
        // MessageBox('提示', '咨询失败');
        Toast('咨询失败');
        }
      }
    }
  }
}
</script>
