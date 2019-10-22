import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		// tabbar页面
		{
			path: '/tabbar',
			name: 'tabbar',
			component: () => import('@/views/tabbar/index.vue'),
			children:[
				{
					path: 'home',
					name: 'home',
					component: () => import('@/views/tabbar/pages/home.vue'),
				},
				{
					path: 'search',
					name: 'search',
					component: () => import('@/views/tabbar/pages/search.vue'),
				},
				{
					path: 'order',
					name: 'order',
					component: () => import('@/views/tabbar/pages/order.vue'),
				},
				{
					path: 'profile',
					name: 'profile',
					component: () => import('@/views/tabbar/pages/profile.vue'),
				}
			]
		},
		{
			path: '/',
			redirect:'/tabbar/home'
		},
		// 登录、注册页面
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/loginPage/index.vue'),
		},
		// 个人信息页面
		{
			path: '/userInfo',
			name: 'userInfo',
			component: () => import('@/views/userInfo/userInfo.vue'),
		},
		// 商品详情页面
		{
			path: '/shop',
			// name: 'shop',
			component: () => import('@/views/shopPage/index.vue'),
			children:[
				{
					path: 'goods',
					name: 'goods',
					component: () => import('@/views/shopPage/pages/shopGoods.vue'),
				},
				{
					path: 'ratings',
					name: 'ratings',
					component: () => import('@/views/shopPage/pages/shopRatings.vue'),
				},
				{
					path: 'info',
					name: 'info',
					component: () => import('@/views/shopPage/pages/shopInfo.vue'),
				},
				{
					path: '',
					redirect:'goods'
				}
			]
		},
	]
})
