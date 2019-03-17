import router from './router'

var infoCookie = window.document.cookie

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2]);
  return null
}

function goToWx () {
  var ksappid = 'wx38ea6f6bb9ada0ee'
  var code = getQueryString('code')
  var local = window.location.href
  if (code == null || code === '') {
    console.log(local)
    // snsapi_userinfo   snsapi_base
    let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + ksappid + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_userinfo&state=getopenid#wechat_redirect'
    console.log(url)
    window.location.href = url
  }
}

router.beforeEach((to, from, next) => {
  // console.error(to)
  if (infoCookie.indexOf('openid=') < 0) {
    goToWx()
  }
  next()
})

router.afterEach((to, from) => {})
