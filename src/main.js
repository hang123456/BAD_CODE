import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import obj from './components/common/toast/index'
// import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// // or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: require('./assets/img/lazyload.jpg'),
//   loading:require('./assets/img/112.jpeg'),
//   attempt: 1
// })
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(obj)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
