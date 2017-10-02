import Vue from 'vue'
// root component
import App from './App.vue'

// http request via vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  el: '#app',
  // render app component to div#app
  render: h => h(App)
});


