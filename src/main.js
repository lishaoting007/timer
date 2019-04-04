// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCountdown from '@chenfengyuan/vue-countdown'
import 'normalize.css/normalize.css' // 引入默认样式
import 'amfe-flexible/index' // 引入淘宝移动端适配方案
import '@/style/scss/init.scss'
import {
  instance
} from '@/utils'
import api from '@/utils/api.js'
import 'iview/dist/styles/iview.css' // 引入iview样式

Vue.component('countdown', VueCountdown) // 注册countDown全局组件
Vue.prototype.$axios = instance // 将axios注册到Vue全局
Vue.prototype.$api = api // 将接口注册到Vue全局

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
