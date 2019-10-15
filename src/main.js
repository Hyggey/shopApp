// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局引入axios请求方法
import axios from '@/public/js/axiosCom.js'

Vue.prototype.$axios = axios.instance 

// 全局引入公共组件
import '@/public/js/common_components.js'

// 全局引入icon字体图标
import '@/public/icon/iconfont.css'

// 全局引入公共css
import '@/public/css/reset.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
