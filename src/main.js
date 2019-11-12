// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入过滤器filter
import '@/filters/index.js'

// 引入mock接口数据
import '@/mock/mockServer.js'

Vue.config.productionTip = false

// 全局引入axios请求方法
import axios from '@/public/js/axiosCom.js'

Vue.prototype.$axios = axios.instance 

// 全局注册axios 不需要跨域，访问本地mock接口
Vue.prototype.$axiosOther = axios.other;

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
  store,
  components: { App },
  template: '<App/>'
})
