import router from './router'
import util from '@/utils/index'

var infoToken = window.sessionStorage.getItem('userInfo')

router.beforeEach((to, from, next) => {
  // console.error(to)
  if (!infoToken) {
    console.error(util)
    // util.prototype.getOpenId()
  }
  next()
})

router.afterEach((to, from) => {
})
