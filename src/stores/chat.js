// src/stores/chat.js
import { defineStore } from "pinia";
import axiosInstance from "../helpers/axiosConfig";
import router from '../router' // Importar el router

export const useChatStore = defineStore("chat", {
  state: () => ({
    messages: [],
    user: null,
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    async fetchMessages() {
      const response = await axiosInstance.get("/api/chat/messages", {
        headers: { "x-auth-token": this.token },
      });
      this.messages = response.data;
    },
    async sendMessage(text) {
      const response = await axiosInstance.post(
        "/api/chat/messages",
        { text },
        {
          headers: { "x-auth-token": this.token },
        }
      );
    },
    async logout() {
        this.token = null;
        localStorage.removeItem("token");
        router.push("/");
    },
    async login(username, password) {
      const response = await axiosInstance.post("/api/auth/login", {
        username,
        password,
      });
      this.token = response.data.token;
      localStorage.setItem("token", this.token);
      router.push("/user/chat");
      await this.fetchMessages();
    },
    async register(name, username, password, userType) {
      const response = await axiosInstance.post("/api/auth/register", {
        name,
        username,
        password,
        userType,
      });
      this.token = response.data.token;
      localStorage.setItem("token", this.token);
      router.push("/user/chat");
      await this.fetchMessages();
    },
  },
});
