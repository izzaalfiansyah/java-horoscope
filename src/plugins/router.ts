import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index.vue";
import Primbon from "../pages/primbon/index.vue";
import Pasangan from "../pages/pasangan/index.vue";
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
    component: Pasangan,
  },
  {
    path: "/pekerjaan",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
