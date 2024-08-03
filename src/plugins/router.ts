import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index.vue";
import Primbon from "../pages/primbon/index.vue";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/primbon",
    component: Primbon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
