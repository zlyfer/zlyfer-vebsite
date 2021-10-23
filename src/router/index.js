// jshint esversion: 9

import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/views/home.vue";
import imprint from "@/views/imprint.vue";
import error404 from "@/views/404.vue";
import games from "@/views/games/main.vue";
import visual_demonstrations from "@/views/visual-demonstrations/main.vue";
import bbs2_main from "@/views/bbs2/main.vue";
import bbs2_vplan from "@/views/bbs2/vplan.vue";
import bbs2_vplan_api from "@/views/bbs2/vplan_api.vue";
import miscellaneous from "@/views/miscellaneous/main.vue";
import discord_bots from "@/views/discord-bots/main.vue";

Vue.use(VueRouter);
Vue.config.silent = true;

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: home },
    { path: "/imprint", component: imprint },
    { path: "/404", component: error404 },
    { path: "/games", component: games },
    { path: "/visual-demonstrations", component: visual_demonstrations },
    { path: "/bbs2", component: bbs2_main },
    { path: "/bbs2/vplan", component: bbs2_vplan },
    { path: "/bbs2/vplan-api", component: bbs2_vplan_api },
    { path: "/miscellaneous", component: miscellaneous },
    { path: "/discord-bots", component: discord_bots },
    { path: "*", redirect: "/404" },
  ],
});
