<script setup lang="ts">
const { category } = defineProps<{ category: any }>();
</script>

<template>
  <div class="flex flex-col">
    <div>Category Component</div>
    <pre>{{ category }}</pre>
  </div>
</template>
