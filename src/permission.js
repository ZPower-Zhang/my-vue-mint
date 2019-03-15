import router from './router'

router.beforeEach((to, from, next) => {
  // console.error(to)
  next()
})

router.afterEach((to, from) => {
})
