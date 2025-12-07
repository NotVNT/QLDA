<template>
  <div class="doctor-card">
    <div class="doctor-avatar">
      <img :src="doctor.avatar" alt="Doctor Avatar" />
    </div>
    <div class="doctor-info">
      <h3 class="doctor-name">{{ doctor.name }}</h3>
      <p class="doctor-specialty">{{ doctor.specialty }}</p>
      <p class="doctor-hospital">{{ doctor.hospital }}</p>
    </div>
    <div class="booking-link-container">
      <a href="#" class="booking-link">Đặt lịch khám</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  doctor: {
    type: Object,
    required: true,
    default: () => ({
      avatar: 'https://via.placeholder.com/80',
      name: 'BS. CK2 Lê Thị Minh Hồng',
      specialty: 'Nhi khoa',
      hospital: 'Bệnh viện Nhi Đồng 2',
    })
  }
});
</script>

<style scoped>
.doctor-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 220px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
}

.doctor-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
}

.doctor-info {
  margin-bottom: 16px;
}

.doctor-name {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.doctor-specialty,
.doctor-hospital {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}

.booking-link-container {
    border-top: 1px solid #eee;
    width: 100%;
    padding-top: 16px;
    margin-top: 16px;
}

.booking-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.booking-link::after {
    content: ' >';
}
</style>
