import Vue from 'vue';
import App from './App.vue';
import utils from './utils';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;
Vue.prototype.$utils = utils;

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
