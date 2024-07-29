<template>
    <footer>
      <div class="flex lg:flex-row flex-col">
        <div class="relative lg:w-6/12">
          <div class="relative">
            <img class="w-full h-96 object-cover" draggable="false" src="/tours.png" alt="">
            <div class="absolute inset-0 flex justify-center items-center lg:hidden">
              <router-link  to="/tours" @click="scrollToTop"  class="bg-[#F58C1f] text-white py-4 px-6 hover:bg-white text-7xl hover:text-[#F58C1f] Bebas">TOURS</router-link>
            </div>
            <div class="absolute lg:right-0 lg:bottom-0 lg:mr-8  lg:mb-4 hidden lg:flex">
              <div class="flex justify-center">
                <router-link to="/tours" @click="scrollToTop" class="bg-[#F58C1f] hover:bg-white hover:text-[#F58C1f] text-white py-4 px-6  Bebas text-7xl ">TOURS</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="relative lg:w-6/12">
          <div class="relative">
            <img class="w-full h-96 object-cover" draggable="false" src="/activities.png" alt="">
            <div class="absolute inset-0 flex justify-center items-center lg:hidden">
              <router-link to="/activities" @click="scrollToTop" class="bg-[#F58C1f] text-white py-4 text-7xl hover:bg-white hover:text-[#F58C1f] px-6  Bebas ">ACTIVITES</router-link>
            </div>
            <div class="absolute lg:left-0 lg:bottom-0 lg:ml-8 lg:mb-4 hidden lg:flex">
              <div class="flex justify-center">
                <router-link to="/activities" @click="scrollToTop" class="bg-[#F58C1f] text-white py-4 px-6 hover:bg-white hover:text-[#F58C1f] Bebas text-7xl">ACTIVITES</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#140B0B] h-[600px]">
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
  </script>
  