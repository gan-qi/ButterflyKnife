import Vue from "vue";
import VueRouter from "vue-router";
import Task from "../views/Task/index.vue";
import User from "../views/User/index.vue";
import Feedback from "../views/Feedback/index.vue";
import Department from "../views/Department/index.vue";
import taskAssignment from "../views/taskAssignment/index.vue";
import NotFoundPage from "../views/NotFoundPage/index.vue";
import Login from "../views/Login/index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: User,
    meta: {
      title: "home"
    }
  },
  {
    path: "/task",
    name: "task",
    component: Task,
    meta: {
      title: "任务"
    }
  },
  {
    path: "/department",
    name: "department",
    component: Department,
    meta: {
      title: "部门数据"
    }
  },
  {
    path: "/taskassignment",
    name: "taskassignment",
    component: taskAssignment,
    meta: {
      title: "任务委派"
    }
  },
  {
    path: "/feedback",
    name: "feedback",
    component: Feedback,
    meta: {
      title: "反馈"
    }
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
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
