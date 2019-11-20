import Vue from 'vue'

import VueLazyload from 'vue-lazyload'
import loading from '../../components/common/imgs/loading.gif'
Vue.use(VueLazyload, {
	loading
  })

  // 图片预加载
  // 使用方法：其中el就是下面div标签
//   <div v-previewImg=''></div>
  Vue.directive('previewImg', {
    bind: (el, binding) => {
        let image = new Image();
        let url = binding.value;
        image.src = url;
        image.onload = function (){
            el.style.cssText = `background-image:url(${url})`;
        }
    } 
})

import 'mint-ui/lib/style.css'
// 按需加载mint-ui
import { 
    Button,
    MessageBox,
	Toast,
	Picker,
	Popup 
    } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
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

// import 'element-ui/lib/theme-chalk/index.css';
// 按需引入Element-ui
import { Cascader  } from 'element-ui';
Vue.component(Cascader .name, Cascader );

// 公共组件
// 底部tabbar组件
Vue.component('zz-tabbar', resolve => require(['@/components/common/tabbar'], resolve))

// 头部组件
Vue.component('zz-headerTop', resolve => require(['@/components/common/headerTop'], resolve))

// 首页商品卡片组件
Vue.component('zz-shopCard', resolve => require(['@/components/common/shop_card'], resolve))

// 自定义弹框组件
Vue.component('zz-alertTip', resolve => require(['@/components/common/alertTip'], resolve))

// 商家头部组件
Vue.component('zz-shopHeader', resolve => require(['@/components/common/shopHeader'], resolve))

// 购物车增减组件
Vue.component('zz-cartControl', resolve => require(['@/components/common/cartControl'], resolve))

// 食品放大小组件
Vue.component('zz-foodCard', resolve => require(['@/components/common/food_card'], resolve))

// 小购物车组件
Vue.component('zz-shopCart', resolve => require(['@/components/common/shopCart'], resolve))

//checkbox组件
Vue.component('zz-checkbox',resolve => require(['@/components/common/input'], resolve))

//checkbox组件
Vue.component('zz-pickerAddress',resolve => require(['@/components/common/pickerAddress'], resolve))