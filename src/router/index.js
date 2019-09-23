import Vue from "vue";
import VueRouter from "vue-router";

import vplan from "@/views/vplan.vue";
import api from "@/views/api.vue";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [{ path: "/vplan", component: vplan }, { path: "/api", component: api }]
});
