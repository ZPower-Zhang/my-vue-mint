import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './router'

Vue.use(Router)

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
