import { ref } from 'vue';

// State is defined outside the function, making it a singleton.
const doctors = ref([]);
const loading = ref(false);
const error = ref(null);

// Hàm thêm bác sĩ mới
const addDoctor = (newDoctorData) => {
  const newDoctor = {
    id: Date.now(), // Simple unique ID
    name: newDoctorData.name,
    specialty: newDoctorData.specialty,
    hospital: newDoctorData.hospital,
    // Create a temporary URL for the uploaded image file
    avatar: newDoctorData.avatarFile ? URL.createObjectURL(newDoctorData.avatarFile) : 'https://via.placeholder.com/80'
  };
  // Add the new doctor to the beginning of the list
  doctors.value.unshift(newDoctor);
};

// This composable now manages a shared state.
export function useDoctors() {
  return {
    doctors,
    loading,
    error,
    addDoctor,
  };
}

