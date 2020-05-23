import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from  './store/store'
Vue.config.productionTip = false

new Vue({
  router,
  store, // 在根实例上配置 vuex
  render: h => h(App)
}).$mount('#app')
