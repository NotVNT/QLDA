<template>
  <div class="doctor-management">
    <div class="form-container card">
      <h3>Thêm bác sĩ mới</h3>
      <form @submit.prevent="addDoctor">
        <div class="form-group">
          <label for="name">Tên bác sĩ</label>
          <input type="text" id="name" v-model="newDoctor.name" required>
        </div>
        <div class="form-group">
          <label for="specialty">Chuyên khoa</label>
          <input type="text" id="specialty" v-model="newDoctor.specialty" required>
        </div>
        <div class="form-group">
          <label for="hospital">Bệnh viện</label>
          <input type="text" id="hospital" v-model="newDoctor.hospital" required>
        </div>
        <div class="form-group">
          <label for="avatar">Ảnh đại diện</label>
          <div class="file-upload-container" @click="triggerFileInput">
            <input type="file" id="avatar" ref="fileInput" @change="onFileChange" accept="image/*" class="file-input">
            <div v-if="imagePreview" class="image-preview-wrapper">
              <img :src="imagePreview" alt="Image Preview" class="image-preview"/>
            </div>
            <div v-else class="upload-placeholder">
              <span>Nhấp để tải ảnh lên</span>
            </div>
          </div>
        </div>
        <div class="button-group">
          <button type="button" class="btn-secondary" @click="resetForm">Hoàn tác</button>
          <button type="submit" class="btn-primary">Thêm bác sĩ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDoctors } from '@/composables/useDoctors';
import { useNotifications } from '@/composables/useNotifications';
import '@/styles/doctormanagement.css';

// Get the shared doctor management functions
const { addDoctor: addDoctorToSharedState } = useDoctors();
const { addNotification } = useNotifications();

const newDoctor = ref({
  name: '',
  specialty: '',
  hospital: '',
  avatarFile: null
});

const imagePreview = ref(null);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    newDoctor.value.avatarFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const resetForm = () => {
  newDoctor.value = {
    name: '',
    specialty: '',
    hospital: '',
    avatarFile: null
  };
  imagePreview.value = null;
  if(fileInput.value) {
    fileInput.value.value = '';
  }
};

const addDoctor = () => {
  // Add the new doctor to the shared state
  addDoctorToSharedState(newDoctor.value);

  // Show a success notification
  addNotification('Thêm bác sĩ thành công!');

  // Reset the form
  resetForm();
};
</script>
