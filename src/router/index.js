import Vue from "vue";
import VueRouter from "vue-router";

import vplan from "@/views/vplan.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
	mode: "history",
	routes: [{ path: "/vplan", component: vplan }]
});
