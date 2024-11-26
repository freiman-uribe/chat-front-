// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Chat from "../views/User.vue";
import Auth from "../components/Auth.vue";
import Register from "../components/Register.vue";
import { useChatStore } from "../stores/chat";

const routes = [
  { path: "/", component: Auth },
  { path: "/user/chat", component: Chat, meta: { requiresAuth: true } },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const chatStore = useChatStore();
  if (to.meta.requiresAuth && !chatStore.token) {
    next("/");
  } else {
    next();
  }
});


export default router;
