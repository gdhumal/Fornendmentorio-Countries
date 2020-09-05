import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const isDev = process.env.NODE_ENV !== "production";
Vue.config.performance = isDev;


Vue.use(BootstrapVue);

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
