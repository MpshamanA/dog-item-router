import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/items",
    name: "items",
    component: () => import("../views/items.vue"),
  },
  {
    path: "/foods",
    name: "foods",
    component: () => import("../views/foods.vue"),
  },
  {
    path: "/fashion",
    name: "fashion",
    component: () => import("../views/fashion.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
