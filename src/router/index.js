import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/views/home.vue";
import vplan from "@/views/vplan.vue";
import apidoc from "@/views/apidoc.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [{ path: "/", component: home }, { path: "/vplan", component: vplan }, { path: "/apidoc", component: apidoc }]
});
