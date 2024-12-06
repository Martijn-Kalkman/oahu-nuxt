<template>
  <div class="fixed z-50 inset-0 bg-black bg-opacity-50 overflow-y-auto">
    <div class="relative mx-auto mt-20 bg-white w-11/12 md:w-1/2 lg:w-1/3 p-4 rounded-lg shadow-lg">
      <span class="absolute top-2 right-2 text-gray-500 cursor-pointer" @click="$emit('close')"
        >&times;</span
      >
      <iframe class="w-full h-[800px] border-none" :src="iframeSrc" title="description"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframeSrc: String,
  },
};
</script>
