import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "../views/NotFoundPage/index.vue";
import Login from "../views/Login/index.vue";
import store from "../store/index";

import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/User/index"),
        meta: { title: "home" }
      }
    ]
  },
  {
    path: "/404",
    component: () => import("../views/NotFoundPage/index")
  },
  {
    path: "/task",
    name: "task",
    component: Layout,
    children: [
      {
        path: "/task",
        name: "Task",
        component: () => import("../views/Task/index"),
        meta: { title: "任务" }
      }
    ]
  },
  {
    path: "/department",
    name: "department",
    component: Layout,
    children: [
      {
        path: "/department",
        name: "Department",
        component: () => import("../views/Department/index"),
        meta: { title: "部门" }
      }
    ]
  },
  {
    path: "/taskassignment",
    name: "taskassignment",
    component: Layout,
    children: [
      {
        path: "/taskassignment",
        name: "taskAssignment",
        component: () => import("../views/taskAssignment/index"),
        meta: { title: "任务指派" }
      }
    ]
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Layout,
    children: [
      {
        path: "/feedback",
        name: "Feedback",
        component: () => import("../views/Feedback/index"),
        meta: { title: "反馈" }
      }
    ]
  },
  {
    path: "/settings",
    name: "settings",
    component: Layout,
    children: [
      {
        path: "/settings",
        name: "Settings",
        component: () => import("../views/settings/index"),
        meta: { title: "设置" }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index"),
    meta: {
      title: "登陆",
      first: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register/index"),
    meta: {
      title: "登陆",
      first: true
    }
  },
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  //mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // 监听登陆状态
  console.log(to)
  if (store.state.login) {
    if (to.meta.title) {
      document.title = `${to.meta.title} - Butterfly Knife`;
      if (to.name == "home") document.title = "Butterfly Knife";
    }

    // 每次路由变化时候，关闭所有高亮
    store.commit("changeActive");
    // 当下一个路由在菜单所列路由之内，开启其高亮
    if (Object.keys(store.state.active).indexOf(to.name.toLowerCase()) != -1) {
      store.commit("changeActive", to.name.toLowerCase());
    }

    next();
  } else {
    if (to.path == "/login" || to.path == "/register") {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
