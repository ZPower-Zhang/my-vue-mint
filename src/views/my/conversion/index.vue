<template>
  <div style='position:relative;'>
    <HeaderTop :showBack='showBack' :showTtl='showTtl' :showU='showU'></HeaderTop>
    <div class='code-ipt-box'>
      <input type='text' class='conversion-ipt' placeholder='请输入兑换码' v-model='conversionCode'>
      <mt-button type='default' size='small' @click='doConversion'>兑换</mt-button>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import { getAuthcdkey } from '@/api/lession'
import { MessageBox } from 'mint-ui';

export default {
  name: 'conversion',
    created(){
    // let _this = this
    // if (window.document.cookie.indexOf('uid=') < 0) {
    //     // alert('请先注册')
    //     // console.log(_this.proid)
    //     _this.$router.push({
    //       name: 'up',
    //     })
    //     return false
    //   }
  }
  ,
  data () {
    return {
      showU: false,
      showBack: true,
      showTtl: '课程兑换',
      conversionCode: null
    }
  },
  components: {
    HeaderTop
  },
  mounted () {},
  methods: {
    // 兑换
    async doConversion() {
      let _this = this
      if (!_this.conversionCode) {
        // alert('请输入兑换码');
        MessageBox('提示', '请输入兑换码');
        return false;
      }

      let ret = await getAuthcdkey({
        cdkey: _this.conversionCode
      })

      if (ret && ret.flag) {
        // alert(ret.msg)
        MessageBox('提示', ret.msg);
        if (ret.ret == '200') {
          _this.$router.push({
            name: 'home'
          })
        }
      } else {
        // alert(ret.msg)
        MessageBox('提示', ret.msg);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.code-ipt-box {
  margin: 30px 20px;
  text-align: center;
  .conversion-ipt {
    width: 100%;
    height: 40px;
    text-indent: 20px;
    border: 1px solid #bbb;
    font-size: 12px;
    color: #666;
    border-radius: 2px;
  }
  .mint-button {
    margin-top: 30px;
  }
}
</style>
