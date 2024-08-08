import { createRouter, createWebHistory } from "vue-router";
let list = [
  {
    name: "login",
    path: "/login",
    component: () => import("../views/index/LoginPage.vue"),
  },
  {
    name: "admin",
    path: "/",
    component: () => import("../views/index/RootPage.vue"),
    children: [
      {
        name: "一級菜單",
        path: "/first",
        component: () => import("../views/first/first.vue"),
      },
      {
        name: "二級菜單1",
        path: "/first2-1",
        component: () => import("../views/first/first2-1/first2-1.vue"),
      },
      {
        name: "二級菜單2",
        path: "/first2-2",
        component: () => import("../views/first/first2-2/first2-2.vue"),
      },
      {
        name: "一級菜單2",
        path: "/second",
        component: () => import("../views/second/second.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: list,
});
export default router;
