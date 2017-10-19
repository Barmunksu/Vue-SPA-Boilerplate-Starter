import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import App from '@/App';
import router from '@/router';

Vue.use(VueAxios, Axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
