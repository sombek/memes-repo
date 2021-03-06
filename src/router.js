import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from './layout/AppHeader'
import AppFooter from './layout/AppFooter'
import Components from './views/Components.vue'
import Upload from './views/Upload.vue'

Vue.use(Router)

export default new Router({
	linkExactActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'components',
			components: {
				header: AppHeader,
				default: Components,
				footer: AppFooter
			}
		},
		{
			path: '/upload',
			name: 'landing',
			components: {
				header: AppHeader,
				default: Upload,
				footer: AppFooter
			}
		}
	]
})
