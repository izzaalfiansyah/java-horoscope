import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index.vue";
import Diri from "../pages/diri/index.vue";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/diri",
    component: Diri,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
