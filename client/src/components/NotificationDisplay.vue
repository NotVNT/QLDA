<template>
  <div class="notification-container">
    <transition-group name="notification" tag="div">
      <div 
        v-for="notification in notifications" 
        :key="notification.id" 
        :class="['notification', `notification--${notification.type}`]"
      >
        <span>{{ notification.message }}</span>
        <button @click="removeNotification(notification.id)" class="close-button">&times;</button>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { useNotifications } from '@/composables/useNotifications';
import '@/styles/notificationdisplay.css';

const { notifications, removeNotification } = useNotifications();
</script>
