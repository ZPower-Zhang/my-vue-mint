<template>
  <div style="position:relative;">
    <HeaderTop :showBack="showBack" :showTtl="showTtl" :showU="showU"></HeaderTop>
    <div class="g-signUp">
      <div class="error-box" :class="{'block-i': showErr}">
        <i class="mintui mintui-field-warning"></i>
        {{errMsg}}
      </div>

      <div class="m-ipt">
        <input type="text" placeholder="*姓名" v-model="userName">
      </div>

      <div class="m-ipt">
        <input type="text" placeholder="*邮箱" v-model="email">
      </div>

      <!-- <div class="m-ipt">
        <input type="text" placeholder="所在省份" v-model="province">
      </div> -->

      <div class="page-content">
      <mt-cell title="*省市区:" :value="areaString" is-link @click.native="handlerArea"></mt-cell>
      <mt-popup v-model="areaVisible" class="area-class" position="bottom">
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
    </div>

      <div class="m-ipt">
        <input type="text" placeholder="*所在医疗机构" v-model="company">
      </div>

      <div class="m-ipt">
        <input type="text" placeholder="职业证书编码" v-model="code">
      </div>
      <p style="color: red">提示：" * "为必填项</p>
      <div class="m-sigle-btn">
        <mt-button type="default" size="small" @click="doRegister">注册</mt-button>
        <!-- <mt-button type="default" size="small" @click="doRegister2">test</mt-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json'
import { MessageBox } from 'mint-ui';

let index = 0
let index2 = 0
let index3 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].childs.map(res => {
  return res.name
})
// 初始化区
let area = data[index].childs[index2].childs.map(res => {
  return res.name
})
// 初始化街
let street = data[index].childs[index2].childs[index3].childs.map(res => {
  return res.name
})

import HeaderTop from '@/components/HeaderTop'
import { getRegis } from '@/api/lession'
export default {
  name: 'complete',
  data () {
    return {
      switchVal: 1,
      showU: false,
      showBack: true,
      showTtl: '完善个人信息',
      phoneNum: null,
      userName: '',
      email: '',
      province: '',
      company: '',
      code: null,
      showErr: false,
      errMsg: '',
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      areaVisible: false,
      streetVisible: false,
      areaString: '请选择',
      streetString: '请选择',
      slots: [{
        flex: 1,
        values: province,
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: city,
        className: 'slot3',
        textAlign: 'center'
      }]
    }
  },
  components: {
    HeaderTop
  },
  mounted() {
    // console.error(this.$route.query)
    this.phoneNum = parseInt(this.$route.query.phoneNum)
    // console.error(this.phoneNum)
  },
  methods: {
    // 获取参数信息
    getParams () {
      let regUser = /^[a-z][a-z0-9_]{5,20}$/i
      let _this = this
      let regEmail= /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/i

      if (_this.userName.length < 1 || _this.userName.length > 20 || !regUser.test(_this.userName)) {
        _this.toggleError(true, '用户名无效')
        return false
      } else {
        _this.toggleError(false)
      }

      if (!regEmail.test(_this.email)) {
        _this.toggleError(true, '邮箱无效')
        return false
      } else {
        _this.toggleError(false)
      }

      if (_this.company.length < 2) {
        _this.toggleError(true, '公司名称无效')
        return false
      } else {
        _this.toggleError(false)
      }

      if (_this.code.length < 6) {
        _this.toggleError(true, '证书编码无效')
        return false
      } else {
        _this.toggleError(false)
      }

      let obj = {
        phone: _this.phoneNum,
        userName: _this.userName,
        email: _this.email,
        province: _this.areaString,
        company: _this.company,
        code: _this.code
      }

      return obj
    },

    // 错误信息的提示
    toggleError (show, msg) {
      this.showErr = show
      if (show) {
        this.errMsg = msg
      } else {
        this.errMsg = ''
      }
    },

    // 注册
    async doRegister () {
      let _this = this;
      let regUser = /^[a-z][a-z0-9_]{5,20}$/i
      let regEmail= /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/i

      if (_this.userName.length < 1 ) {
        _this.toggleError(true, '用户名无效')
        return false
      } else {
        _this.toggleError(false)
      }

      if (!regEmail.test(_this.email)) {
        _this.toggleError(true, '邮箱无效')
        return false
      } else {
        _this.toggleError(false)
      }

      if (_this.company.length < 2) {
        _this.toggleError(true, '公司名称无效')
        return false
      } else {
        _this.toggleError(false)
      }

      // if (_this.code.length < 6) {
      //   _this.toggleError(true, '证书编码无效')
      //   return false
      // } else {
      //   _this.toggleError(false)
      // }

      let params = {
        phone: _this.phoneNum,
        userName: _this.userName,
        email: _this.email,
        province: _this.areaString,
        company: _this.company,
        code: _this.code
      }

      let ret = await getRegis(params)
      if (ret && ret.flag) {
        let dataRet = ret.ret || ''
        console.log(dataRet)
        if (dataRet == '200') {
          let dataUid = ret.data.uid || ''
          if (dataUid!='') {
            MessageBox('提示', '注册成功！');
            _this.setCookie('uid', dataUid, 1)
            let comproid=_this.$route.query.proid||"no"
            let comprotype=_this.$route.query.protype||"no"
            // console.log(comproid)
            // return false
            if(comproid!="no"){
              if(comprotype=="XXPX"){
                _this.$router.push({
                    path: '/course/intro',
                    query:{data:comproid}
                })
              }else if (comprotype=="KYZD") {
                _this.$router.push({
                    path: '/course/hindex',
                    query:{data:comproid}
                })
              }else if (comprotype=="XSSP") {
                _this.$router.push({
                    path: '/course/videoView',
                    query:{data:comproid}
                })
              }
            }else{
              _this.$router.push({
                  name: 'home',
              })
            }

          }
        } else {
          _this.toggleError(true, ret.msg)
          return false
        }
      }
    },    //测试
    async doRegister2 () {
      let _this = this;

            let comproid=_this.$route.query.proid||"no"
            let comprotype=_this.$route.query.protype||"no"
            // console.log(comproid)
            // return false
            if(comproid!="no"){
              if(comprotype=="XXPX"){
                _this.$router.push({
                    path: '/course/intro',
                    query:{data:comproid}
                })
              }else if (comprotype=="KYZD") {
                _this.$router.push({
                    path: '/course/hindex',
                    query:{data:comproid}
                })
              }else if (comprotype=="XSSP") {
                _this.$router.push({
                    path: '/course/videoView',
                    query:{data:comproid}
                })
              }
            }else{
              _this.$router.push({
                  name: 'home',
              })
            }
    },

    handlerArea () {
      this.areaVisible = true
    },
    handlerStreet () {
      if (this.slotstree[0].values.length === 0) {
        this.streetString = '无可选街道'
        return
      }
      this.streetVisible = true
    },
    onValuesChange (picker, values) {
      let one = values[0]
      let two = values[1]
      let three = values[2]
      index = province.indexOf(one)
      if (index >= 0 && province.length > 0) {
        city = data[index].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(1, city)
        two = values[1]
      }

      index2 = city.indexOf(two)
      if (index2 >= 0 && city.length > 0) {
        area = data[index].childs[index2].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(2, area)
        three = values[2]
      }
      index3 = area.indexOf(three)
      if (index >= 0 && index2 >= 0 && index3 >= 0) {
        street = data[index].childs[index2].childs[index3].childs.map(res => {
          return res.name
        })
        this.slotstree[0].values = street
      }
      this.areaString = values.join(',')
      // console.log(this.areaString)
    },
    onStreeChange (picker, values) {
      this.streetString = values.join(',')
    }
  }
}
</script>

<style>
.area-class {
  width: 100%;
  height: 50%;
}
</style>
