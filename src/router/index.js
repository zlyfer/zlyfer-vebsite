import Vue from "vue";
import VueRouter from "vue-router";

import Blank from "@/views/Blank.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
	mode: "history",
	routes: [{ path: "/blank", component: Blank }, { path: "/", redirect: "/blank" }]
});
