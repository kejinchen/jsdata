<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Products from './Products.vue'
import About from './About.vue'

import AboutHome from './AboutHome.vue'
import AboutYou from './AboutYou.vue'
import AboutMe from './AboutMe.vue'

Vue.use(VueRouter);     //呼叫它(呼叫一次就可以了)

export default {
    router: new VueRouter({
		// mode: 'history',
		routes: [		//意思是:要在哪裡render這個組件?!
			//設定固定的路徑 http://localhost:8080/about 和 http://localhost:8080/products
			//並且顯示固定的component About 和 Products
			{
				path: '/about', 
				component: About,
				children: [
					{path: '', component: AboutHome},
					{path: 'you', component: AboutYou},
					{path: 'me', component: AboutMe},
				],
			},

			// {path: '/products', component: Products,},
			{path: '/products/:sn?', component: Products,},
			//動態比對產品編號，在後面加上「:自行命名」ex.「:sn」
			//加上「:」表示products後面接的路徑會變成 sn 這個參數
			// :sn? 加上「?」表示products後面接的路徑可有可無
		
		],
	}),
}
</script>

<template>
	<div>
		<!--用router-view render的組件-->
		<!--<router-view/>-->

		<div>
			<router-link to="/about">About</router-link> | 
			<router-link to="/products">Products</router-link>
		</div>
		<router-view/>
	</div>
</template>