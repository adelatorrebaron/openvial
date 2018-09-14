/* global localStorage */
import User from '@/models/User'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  user: User.from(localStorage.token)
};

export default {
  namespaced: false,
  state,
  actions,
  getters,
  mutations,
}