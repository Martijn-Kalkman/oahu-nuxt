<template>
  <section class="relative">
    <div
      class="relative bg-center bg-cover h-screen"
      :style="{ backgroundImage: `url(${pageData.backgroundImage || '/default-image.jpg'})` }"
    >
      <div class="absolute inset-0 bg-black/10 opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div data-aos="fade-down" data-aos-duration="1500" class="container mx-auto">
          <h2 class="Bebas text-white text-7xl text-center font-medium">
            {{ pageData.heading || 'Default Heading' }}
          </h2>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto py-12">
      <h2 class="text-3xl font-bold mb-4">{{ pageData.subheading || 'Default Subheading' }}</h2>
      <p class="text-lg">
        {{ pageData.description || 'Default Description' }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const pageData = ref({
  backgroundImage: '',
  heading: '',
  subheading: '',
  description: '',
});

onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$api.get('/api/page');
    pageData.value = data;
  } catch (error) {
    console.error('Error fetching page data:', error);
  }
});
</script>
