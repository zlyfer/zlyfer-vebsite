import App from "@/App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "@/router";
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import "../node_modules/swagger-ui/dist/swagger-ui.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
