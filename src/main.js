import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { fetchListData } from './api/api.js'

Vue.config.productionTip = false

function getTopItems () {
  return fetchListData('top')
    .then(items => items)
}

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

getTopItems().then((items) => {
  window.items = items
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
