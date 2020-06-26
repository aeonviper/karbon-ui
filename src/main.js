import Vue from 'vue'
import vuetify from './vuetify';
import application from './application.vue'

Vue.config.productionTip = false

new Vue({
	vuetify,
	render: display => display(application)
}).$mount('#application')
