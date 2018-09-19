import Vue from 'vue'
import Vuex from 'vuex'

import authorizationModule from './modules/authorization/index.js'
//import autoescuelasModule from './modules/autoescuelas/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authorization: authorizationModule,
//    autoescuelas: autoescuelasModule
  }
})