<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="xl:w-[380px] lg:w-[500px] md:w-[600px] bg-white relative lg:mt-24 mt-14 mx-8 pb-8 lg:pb-0"
  >
    <img draggable="false" class="z-10 w-full h-[200px] object-cover" :src="image" alt="" />
    <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2 right-0 h-20 flex items-center">
      <h2 class="text-white Bebas text-2xl">{{ title }}</h2>
    </div>
    <div>
      <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">
        {{ description }}
      </p>
      <div class="border-b-2 mx-8 border-black mb-4"></div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
        <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
          <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">{{ price }}</span> per person</li>
          <li class="p-2"><span class="text-l font-bold">• </span>{{ duration }}</li>
          <li class="p-2"><span class="text-l font-bold">• </span>{{ foodProvided }}</li>
        </ul>
      </div>
      <div class="lg:w-1/2 flex flex-col items-center">
        <button
          class="w-[150px] text-center border border-[#F58C1F] bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:text-[#F58C1F] mb-4"
          @click="openModal"
        >
          BOOK NOW
        </button>
        <div class="flex flex-row">
          <img draggable="false" src="/phoneblack.png" alt="phone icon" />
          <p class="Aileron font-bold ml-4">(808) 562-3222</p>
        </div>
      </div>
    </div>

    <modal
      v-if="isModalOpen"
      @close="closeModal"
      :iframeSrc="bookingLink"
    />
  </div>
</template>

<script>
import Modal from './Modal.vue'; // Import your modal component

export default {
  components: { Modal },
  props: {
    title: String,
    image: String,
    description: String,
    price: String,
    duration: String,
    foodProvided: String,
    bookingLink: String
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>