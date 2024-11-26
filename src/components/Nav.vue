<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Chat App</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/chat">Chat</router-link>
                    </li>
                    <li class="nav-item" v-if="chatStore.token">
                        <button class="btn btn-outline-danger" @click="logout">Cerrar Sesión</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useChatStore } from '../stores/chat'
const chatStore = useChatStore()

const logout = async () => {
    await chatStore.logout()
}

if (chatStore.token) {
    chatStore.fetchMessages()
}
</script>