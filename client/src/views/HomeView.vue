<template>
  <Header @login-click="goSignIn" />
  <Banner />
  <div class="booking-section">
    <h2>Đặt lịch khám trực tuyến</h2>
    <p>Tìm Bác sĩ chính xác - Đặt lịch khám dễ dàng</p>
  </div>
    <div class="appointment-info">
      <div class="info-text">
        <h3>Đặt khám bác sĩ</h3>
        <p>Phiếu khám kèm số thứ tự và thời gian của bạn được xác nhận.</p>
      </div>
    </div>
    <div class="doctor-list-container">
      <DoctorCard
        v-for="doctor in doctors"
        :key="doctor.id"
        :doctor="doctor"
      />
    </div>
</template>

<script setup>
import '@/styles/homeView.css';
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import DoctorCard from '@/components/DoctorCard.vue';
import { useDoctors } from '@/composables/useDoctors';

const router = useRouter();
const goSignIn = () => router.push({ name: 'signin', query: { tab: 'login' } });

// Get the reactive list of doctors
const { doctors } = useDoctors();
</script>


