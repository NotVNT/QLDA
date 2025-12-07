<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <h2>Admin Menu</h2>
        <ul>
          <li><a href="#" @click.prevent="setActiveView('Dashboard')" :class="['nav-item', { active: activeView === 'Dashboard' }]">Dashboard</a></li>
          <li><a href="#" @click.prevent="setActiveView('Quản lý người dùng')" :class="['nav-item', { active: activeView === 'Quản lý người dùng' }]">Quản lý người dùng</a></li>
          <li><a href="#" @click.prevent="setActiveView('Quản lý bác sĩ')" :class="['nav-item', { active: activeView === 'Quản lý bác sĩ' }]">Quản lý bác sĩ</a></li>
          <li><a href="#" @click.prevent="setActiveView('Cài đặt')" :class="['nav-item', { active: activeView === 'Cài đặt' }]">Cài đặt</a></li>
        </ul>
      </nav>
      <router-link to="/" class="back-to-home-link">Quay về trang chủ</router-link>
    </aside>
    <main class="main-content">
      <header class="main-header">
        <h1>{{ currentTitle }}</h1>
      </header>
      <div class="content-area">
        <component :is="currentView"></component>
      </div>
    </main>
  </div>
</template>

<script>
import '@/styles/adminview.css';
import { ref, computed } from 'vue';
import DoctorManagement from '@/components/DoctorManagement.vue';

const Dashboard = {
  template: '<div><p>Chào mừng đến với trang quản trị. Chọn một mục từ menu bên trái để bắt đầu.</p></div>'
};
const UserManagement = {
  template: '<div><h2>Quản lý người dùng</h2><p>Chức năng này đang được phát triển.</p></div>'
};
const Settings = {
  template: '<div><h2>Cài đặt</h2><p>Chức năng này đang được phát triển.</p></div>'
};

export default {
  name: 'AdminView',
  components: { Dashboard, UserManagement, DoctorManagement, Settings },
  setup() {
    const activeView = ref('Dashboard');

    const views = {
      Dashboard,
      'Quản lý người dùng': UserManagement,
      'Quản lý bác sĩ': DoctorManagement,
      'Cài đặt': Settings
    };

    const currentView = computed(() => views[activeView.value]);
    const currentTitle = computed(() => activeView.value);

    const setActiveView = (viewName) => {
      activeView.value = viewName;
    };

    return {
      activeView,
      currentView,
      currentTitle,
      setActiveView
    };
  }
};
</script>
