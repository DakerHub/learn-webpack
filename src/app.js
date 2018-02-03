import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools = true;
Vue.config.performance = true;
Vue.config.productionTip = false;

// const app = {
  // template: '<h1>HELLO,PADAKER</h1>'
//   render(h) {
//     return h('h1', 'HELLO,PADAKER');
//   }
// }

new Vue({
  el: '#app',
  render(h) {
    return h('app');
  },
  // template: '<app />',
  components: {
    // app
    App
  }
});