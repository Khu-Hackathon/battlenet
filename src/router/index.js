import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import Login from "../pages/Login.vue";
import CreateRoom from "../pages/CreateRoom.vue";
import MasterWaitingRoom from "../pages/MasterWaitingRoom.vue";
import GuestWaitingRoom from "../pages/GuestWaitingRoom.vue";
import Test from "../pages/Test.vue";

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
          path: '/signup',
          name: "signup",
          component: SignUp,
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
        },
        {
          path: '/masterwaitingroom',
          name: "masterwaitingroom",
          component: MasterWaitingRoom,
        },
        {
          path: '/guestwaitingroom',
          name: "guestwaitingroom",
          component: GuestWaitingRoom,
        },
        {
          path: '/test',
          name: "test",
          component: Test,
        }
    ]
})

export default router;