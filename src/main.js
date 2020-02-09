import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.apiHost = 'http://localhost:10086'

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
