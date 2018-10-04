/* global localStorage */
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  alumnos: null,
  alumno: null
};

export default {
  namespaced: false,
  state,
  actions,
  getters,
  mutations,
}