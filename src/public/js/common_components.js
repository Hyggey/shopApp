import Vue from 'vue'

import 'mint-ui/lib/style.css'
// 按需加载mint-ui
import { 
    Button,
    MessageBox,
    Toast
    } from 'mint-ui';
Vue.component(Button.name, Button);
// Vue.use(Button)

// 全局注册 确认框
Vue.prototype.$MessageBox = MessageBox;

// 全局注册 提示框 底部
Vue.prototype.$Toast = (text) => {
	if (!text) {
		text = '提示'
	}
	Toast({
		message: text,
		position: 'bottom',
		duration: 1000
	});
};


// 公共组件
// 底部tabbar组件
Vue.component('zz-tabbar', resolve => require(['@/components/common/tabbar'], resolve))

// 头部组件
Vue.component('zz-headerTop', resolve => require(['@/components/common/headerTop'], resolve))

// 首页商品卡片组件
Vue.component('zz-shopCard', resolve => require(['@/components/common/shop_card'], resolve))

// 自定义弹框组件
Vue.component('zz-alertTip', resolve => require(['@/components/common/alertTip'], resolve))