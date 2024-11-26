<!-- src/components/Register.vue -->
<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-lg" style="max-width: 800px;">
            <div class="row g-0">
                <div class="col-md-6 d-md-block text-center">
                    <img src="../assets/register.jpg" class="img-fluid rounded-start img-card" alt="Random Image">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title text-center">Register</h5>
                        <form @submit.prevent="register">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                                    <input type="text" class="form-control" id="name" v-model="name" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-person"></i></span>
                                    <input type="text" class="form-control" id="username" v-model="username" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-lock"></i></span>
                                    <input type="password" class="form-control" id="password" v-model="password"
                                        required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="userType" class="form-label">User Type</label>
                                <select class="form-select" id="userType" v-model="userType" required>
                                    <option value="student">Student</option>
                                    <option value="moderator">Teacher</option>
                                </select>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                            <div class="mt-3 text-center">
                                <router-link class="text-decoration-none" to="/">Login</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useChatStore } from '../stores/chat'

const chatStore = useChatStore()
const name = ref('')
const username = ref('')
const password = ref('')
const userType = ref('student')

const register = async () => {
    await chatStore.register(name.value, username.value, password.value, userType.value)
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css";

@media (max-width: 768px) {
    .img-card {
        width: 350px;
    }
}
</style>