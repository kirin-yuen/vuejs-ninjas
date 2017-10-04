import Vue from 'vue'
// root component
import App from './App.vue'

// http request via vue-resource
import VueResource from 'vue-resource'

// globally custome directive
Vue.directive('rainbow', {
    // lifecycle bind also in directive
    // fire when the directive bind to element
    bind(el ,binding, vnode){
        // hex color code with random 6 number 
        el.style.color = '#' + Math.random().toString().slice(2,8);
    }
});

Vue.use(VueResource)

new Vue({
  el: '#app',
  // render app component to div#app
  render: h => h(App)
});


