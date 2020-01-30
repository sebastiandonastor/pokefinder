import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import Toasted from 'vue-toasted';
 

Vue.config.productionTip = false
Vue.use(Autocomplete);
Vue.use(Toasted)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
