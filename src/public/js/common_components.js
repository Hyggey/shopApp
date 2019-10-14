import Vue from 'vue'

// 公共组件
// 底部tabbar组件
Vue.component('zz-tabbar', resolve => require(['@/components/common/tabbar'], resolve))

// 头部组件
Vue.component('zz-headerTop', resolve => require(['@/components/common/headerTop'], resolve))