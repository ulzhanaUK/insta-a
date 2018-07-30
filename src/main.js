// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'chart.js'
import 'hchs-vue-charts'


Vue.use(window.VueCharts)
Vue.use(VueAxios, axios)
Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
