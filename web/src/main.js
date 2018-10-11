// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from './config/vue-axios'

import store from './store'

import VeeValidate, { Validator }  from 'vee-validate';
import messagesES from 'vee-validate/dist/locale/es';

// Regla de validacion para las horas
const timeRule = {
  getMessage: field => {
    `El formato de la hora debe ser HH:MM`
  },
  validate: value => {
    let regex = new RegExp("([0-1][0-9]|2[0-3]):([0-5][0-9])");
    return  regex.test(value)
  }
};

VeeValidate.Validator.extend('time', timeRule);

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('es', messagesES);

Vue.use(VeeValidate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>',
  VeeValidate,
})
