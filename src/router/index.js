import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/info",
    name: "info",
    component: () => import("../components/Info.vue"),
  },
  {
    path: "/experts",
    name: "experts",
    component: () => import("../components/Experts.vue"),
    
  },
  {
    path: "/expertsdetail",
    name: "expertsdetail",
    component: () => import("../components/ExpertsDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;