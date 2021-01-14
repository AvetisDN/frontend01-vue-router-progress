import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import NProgress from 'nprogress'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/nprogress.css'

Vue.config.productionTip = false

NProgress.configure({
  parent: '#progress-bar'
})

router.beforeResolve((to, from, next) => {
  if(to.name) NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
