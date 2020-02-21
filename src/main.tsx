import Vue, { VNode } from 'vue'

// Load plugins here.
import './plugins/vuex'
import './plugins/vue-router'

// Load Vue modules here.
import store from './store'
import router from './router'

// Load Vue components, styles here.
import App from './App.vue'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,

  render(h): VNode {
    return h(App)
  }
}).$mount('#app')
