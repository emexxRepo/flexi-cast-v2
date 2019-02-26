import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Snotify from 'vue-snotify'; // 1. Import Snotify
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
Vue.use(BootstrapVue);
Vue.use(Snotify)
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
Vue.config.devtools = true;

