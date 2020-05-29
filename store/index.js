import Vue from 'vue'
import Vuex from 'vuex'
import commonModules from './modules/app'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    ...commonModules
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
