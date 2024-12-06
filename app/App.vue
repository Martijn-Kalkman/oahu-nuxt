<script setup lang="ts">
import '../assets/main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import AOS from 'aos';

onMounted(() => {
  AOS.init();
  console.log('aos init is done in APP!');
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
