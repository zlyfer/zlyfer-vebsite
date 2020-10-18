// jshint esversion: 9

import App from "@/App.vue";
import Vue from "vue";
import router from "@/router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueCookies from "vue-cookies";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueCookies);

Vue.$cookies.config("31d");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
