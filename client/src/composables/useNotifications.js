import { ref, readonly } from 'vue';

// State is defined outside the function, making it a singleton.
const notifications = ref([]);

let notificationId = 0;

// The composable function
export function useNotifications() {

  const addNotification = (message, type = 'success', duration = 3000) => {
    const id = notificationId++;
    notifications.value.push({ id, message, type });

    // Automatically remove the notification after the duration
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  const removeNotification = (id) => {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  };

  return {
    notifications: readonly(notifications), // Provide a read-only version to components
    addNotification,
    removeNotification,
  };
}
