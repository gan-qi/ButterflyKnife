import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "../views/NotFoundPage/index.vue";
import Login from "../views/Login/index.vue"

import Layout from "../layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        path: '/',
        name: "Home",
        component: () => import('../views/User/index'),
        meta: { title: 'home' }
      }
    ]
  },
  {
    path: "/task",
    name: "task",
    component: Layout,
    children: [
      {
        path: '/task',
        name: "Task",
        component: () => import('../views/Task/index'),
        meta: { title: '任务' }
      }
    ]
  },
  {
    path: "/department",
    name: "department",
    component: Layout,
    children: [
      {
        path: '/department',
        name: "Department",
        component: () => import('../views/Department/index'),
        meta: { title: '任务' }
      }
    ]
  },
  {
    path: "/taskassignment",
    name: "taskassignment",
    component: Layout,
    children: [
      {
        path: '/taskassignment',
        name: "taskAssignment",
        component: () => import('../views/taskAssignment/index'),
        meta: { title: '任务' }
      }
    ]
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Layout,
    children: [
      {
        path: '/feedback',
        name: "Feedback",
        component: () => import('../views/Feedback/index'),
        meta: { title: '任务' }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登陆",
      first: true
    }
  },
  {
    path: "*",
    name: "404",
    component: NotFoundPage,
    meta: {
      title: 404
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - GQToDo`;
    if (to.name == "home") document.title = "GQToDo";
  }
  next();
});

export default router;
