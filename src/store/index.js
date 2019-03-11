import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: { },
  modules: {
    tagsView
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
