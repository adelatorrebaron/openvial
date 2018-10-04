import Vue from 'vue'
import Vuex from 'vuex'

import loadingModule from './modules/loading/index.js'
import authorizationModule from './modules/authorization/index.js'
import autoescuelasModule from './modules/autoescuelas/index.js'
import alumnosModule from './modules/alumnos/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading: loadingModule,
    authorization: authorizationModule,
    autoescuelas: autoescuelasModule,
    alumnos: alumnosModule
  }
})