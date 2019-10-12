import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
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
		}
	]
})
