import Vue from 'vue'
// root component
import App from './App.vue'
import GlobalConponent from './Global-component.vue'

// global register component
Vue.component('global-conponent', GlobalConponent)

new Vue({
  el: '#app',
  // render app component to div#app
  render: h => h(App)
})
