import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
