import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  Vue.use(iView)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
