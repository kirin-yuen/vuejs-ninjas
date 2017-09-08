import Vue from 'vue'
// root component
import App from './App.vue'

new Vue({
  el: '#app',
  // render app component to div#app
  render: h => h(App)
})
