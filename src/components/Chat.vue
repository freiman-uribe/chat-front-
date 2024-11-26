<!-- src/components/Chat.vue -->
<template>
    <div class="d-flex vh-100 position-relative">
        <div class="flex-grow-1">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/random" frameborder="0"
                allowfullscreen></iframe>
        </div>
        <div :class="['chat-sidebar container', { 'd-none': !isChatVisible }]" ref="chatSidebar">
            <div class="chat-window mb-3">
                <div v-for="message in chatStore.messages" :key="message._id" class="message">
                    <strong>{{ message.user.name }} ({{ message.user.userType }}):</strong> {{ message.text }}
                </div>
            </div>
            <form @submit.prevent="sendMessage">
                <div class="input-group">
                    <input v-model="newMessage" type="text" class="form-control" placeholder="Type a message">
                    <button class="btn btn-primary" type="submit">Send</button>
                </div>
            </form>
            <button class="btn btn-warning mt-3" @click="toggleChat">Close chat</button>
        </div>
    </div>
    <button :class="[{ 'd-none': isChatVisible }]" class="btn btn-warning chat-toggle-btn"
        @click="toggleChat">Open chat</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useChatStore } from '../stores/chat'
import { io } from 'socket.io-client'

const chatStore = useChatStore()
const newMessage = ref('')
const chatWindow = ref(null)
const isChatVisible = ref(false)
const socket = io('http://localhost:3000')

const scrollToBottom = () => {
    if (chatWindow.value) {
        chatWindow.value.scrollTop = chatWindow.value.scrollHeight
    }
}

const sendMessage = async () => {
    if (newMessage.value.trim()) {
        await chatStore.sendMessage(newMessage.value)
        newMessage.value = ''
        scrollToBottom()
    }
}

const toggleChat = () => {
    isChatVisible.value = !isChatVisible.value
}

onMounted(async () => {
    await chatStore.fetchMessages()
    scrollToBottom()
})

onMounted(async () => {
    socket.on('message', (message) => {
        chatStore.messages.push(message)
        scrollToBottom()
    })
    scrollToBottom()
})

onUnmounted(() => {
    socket.off('message')
})

watch(() => chatStore.messages, scrollToBottom, { deep: true })
</script>

<style>
.chat-sidebar {
    width: 300px;
    overflow-y: auto;
    background-color: #f8f9fa;
}

.chat-window {
    height: calc(100vh - 150px);
    overflow-y: auto;
}

.chat-toggle-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
}

@media (max-width: 768px) {
    .chat-sidebar {
        width: 100%;
        height: 100vh
    }

    .chat-window {
        height: calc(100vh - 150px);
    }
}
</style>