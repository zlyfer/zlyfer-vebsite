import Vue from "vue";
import VueRouter from "vue-router";

import Grid from "@/views/Grid.vue";
import List from "@/views/List.vue";
import List2 from "@/views/List2.vue";
import Blank2 from "@/views/Blank2.vue";
Vue.use(VueRouter);

// TODO Web Template Studio: Add routes for your new pages here.
export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/Blank2", component: Blank2 },
    { path: "/List2", component: List2 },
    { path: "/List", component: List },
    { path: "/Grid", component: Grid },

    { path:"/", redirect: "/Grid" }
  ]
});
