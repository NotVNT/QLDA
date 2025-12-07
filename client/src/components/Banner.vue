<template>
  <section class="banner-section">
            <img src="@/assets/bannerimage.jpg" alt="Company Banner" class="banner-image" />
    <div class="banner-content">
      <h1 class="title">Ứng dụng đặt khám</h1>
      <search-bar />
    </div>
  </section>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'BannerSection',
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.banner-section {
  width: 100%;
  position: relative;
}

.banner-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 90%;
  max-width: 800px;
}

.title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.banner-image {
  width: 100%;
  height: 650px;
  object-fit: cover;
  display: block;
}
</style>

