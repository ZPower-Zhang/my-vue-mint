import router from './router'
import {
  getAuth
} from '@/api/lession'

var infoCookie = window.document.cookie

function isWeiXin () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

function setCookie (name, value, days) {
  var date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = name + '=' + value + ';expires=' + date
}

function goToWx (func) {
  var ksappid = 'wx38ea6f6bb9ada0ee'
  var code = getQueryString('code')
  var local = window.location.href
  if (code == null || code == '') {
    // console.log(local)
    // snsapi_userinfo   snsapi_base
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + ksappid + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_userinfo&state=getopenid#wechat_redirect'
    // console.log(url)
    window.location.href = url
  } else {
    getAuthId().then(res => {
      if (res.uid) {
        setCookie('uid', res.uid || '', 1)
      }
      if (res.openid) {
        setCookie('openid', res.openid || '', 1)
      }
      if (res.unionid){
        setCookie('unionid', res.unionid || '', 1)
      }
      func()
    })
  }
}

async function getAuthId () {
  var code = getQueryString('code')
  return new Promise((resolve, reject) => {
    getAuth({
      code: code,
      state: 'getopenid'
    }).then((res) => {
      resolve(res.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}

router.beforeEach((to, from, next) => {
  // if (isWeiXin()) {
    // if (infoCookie.indexOf('openid=') < 0) {
    if (infoCookie.indexOf('openid=') < 0) {
      goToWx(next)
    } else {
      next()
    }
  // } else {
  //   next()
  // }
})

router.afterEach((to, from) => {})
