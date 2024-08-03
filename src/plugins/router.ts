import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index.vue";
import Primbon from "../pages/primbon/index.vue";
import ComingSoon from "../pages/coming-soon/index.vue";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/primbon",
    component: Primbon,
  },
  {
    path: "/pasangan",
    component: ComingSoon,
  },
  {
    path: "/pekerjaan",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
