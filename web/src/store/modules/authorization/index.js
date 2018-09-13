/* global localStorage */

import User from '@/models/User'
import * as MutationTypes from '../mutation-types'

const state = {
  user: User.from(localStorage.token)
}

const mutations = {
  [MutationTypes.LOGIN] (state) {
    state.user = User.from(localStorage.token)
  },
  [MutationTypes.LOGOUT] (state) {
    state.user = null
  }
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isUserLogged (state) {
    if (state.user === null)
      return false;
    else
      return true;
  }
}

const actions = {
  login ({ commit }) {
    commit(MutationTypes.LOGIN)
  },
  logout ({ commit }) {
    commit(MutationTypes.LOGOUT)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}