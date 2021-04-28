import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      requiresUnAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresUnAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/login.vue"),
  },
  // {
  //   path: "/:notFound(.*)",
  //   name: "NotFound",
  //   component: null,
  // },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});
export default router;
