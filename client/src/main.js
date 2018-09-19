import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import Vuetify from 'vuetify'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import panel from './components/Panel.vue'

Vue.config.productionTip = false

sync(store, router)

Vue.use(Vuetify)
Vue.component('panel', panel)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
