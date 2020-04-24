import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false

// console.log('------')
// console.log(process.env.VUE_APP_SECRET)
// console.log(process.env.FOO)
// console.log('------')

if (process.env.NODE_ENV === 'development') {
  Vue.use(ViewUI)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
