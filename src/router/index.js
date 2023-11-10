import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import CreateRoom from "../pages/CreateRoom.vue";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        } else {
          return { top: 0 };
        }
      },
      routes: [
        {
          path: '/',
          name: "home",
          component: Home,
        },
        {
          path: '/login',
          name: "login",
          component: Login,
        },
        {
          path: '/createroom',
          name: "createroom",
          component: CreateRoom,
        }
    ]
})

export default router;