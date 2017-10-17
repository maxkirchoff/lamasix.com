// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease'
})

/* eslint-disable no-new */
new Vue({
  el: '#l6',
  router,
  template: '<App/>',
  components: { App }
})
