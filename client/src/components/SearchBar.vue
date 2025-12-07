<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <input type="text" placeholder="Tìm kiếm bác sĩ, chuyên khoa, phòng khám..." />
      <button class="icon-btn calendar-btn">
                <img src="../assets/icon/calendar.svg" alt="Calendar" />
      </button>
      <button class="icon-btn location-btn">
                <img src="../assets/icon/location.svg" alt="Location" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
};
</script>

<style scoped>
.search-bar-container {
  width: 100%;
  max-width: 700px; /* Increased max-width for better fit */
  margin: 0 auto; /* Center the search bar */
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.search-bar input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 10px;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 5px;
}

.icon-btn img {
  width: 24px;
  height: 24px;
}

.search-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
  font-weight: bold;
}
</style>

