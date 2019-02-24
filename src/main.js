import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Snotify from 'vue-snotify'; // 1. Import Snotify
import Vuetify from 'vuetify'

Vue.use(BootstrapVue);
Vue.use(Snotify)
Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
Vue.config.devtools = true;

