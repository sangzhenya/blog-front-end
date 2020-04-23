import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

// console.log('------')
// console.log(process.env.VUE_APP_SECRET)
// console.log(process.env.FOO)
// console.log('------')

if (process.env.NODE_ENV === 'development') {
  Vue.use(iView)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
