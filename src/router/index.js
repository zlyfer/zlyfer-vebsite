// jshint esversion: 9

import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/views/home.vue";
import vplan from "@/views/vplan.vue";
import vplan_api from "@/views/vplan_api.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: home },
    { path: "/vplan", component: vplan },
    { path: "/vplan-api", component: vplan_api },
    { path: "*", component: home },
  ],
});
