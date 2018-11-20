// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './http'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store/store'

import '../static/js/common.js'
import '../static/css/common.css'
import '../static/css/reset.css'

Vue.use(MintUI)

axios.defaults.baseURL = 'https://sshijie.cn/'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
