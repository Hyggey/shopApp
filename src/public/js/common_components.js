import Vue from 'vue'

// 公共组件
// 底部tabbar组件
Vue.component('zz-tabbar', resolve => require(['@/components/common/tabbar'], resolve))

// 头部组件
Vue.component('zz-headerTop', resolve => require(['@/components/common/headerTop'], resolve))

// 首页商品卡片组件
Vue.component('zz-shopCard', resolve => require(['@/components/common/shop_card'], resolve))