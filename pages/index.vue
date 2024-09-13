<template>
  <!--  Section we go beyond-->
  <section class=" flex-col justify-center items-center relative hidden md:flex">
    <div class="absolute z-20 bottom-0"><img class="h-[700px] w-screen object-cover lg:object-fill object-left "
        src="/palmtrees.png" alt="">
    </div>
    <div class="absolute z-30 bottom-0 opacity-50 w-full">
      <div class="bg-black h-screen"></div>
    </div>
    <swiper :spaceBetween="30" :centeredSlides="true" :effect="'fade'" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :modules="modules" class="w-full h-screen relative">
      <swiper-slide class="custom-background1 bg-cover bg-center"></swiper-slide>
      <swiper-slide class="custom-background2 bg-cover bg-center"></swiper-slide>
      <swiper-slide class="custom-background3 bg-cover bg-center"></swiper-slide>

    </swiper>
    <div data-aos="fade-down" data-aos-duration="1500" class="text-center absolute z-40 container lg:mx-auto mt-36">
      <h1
        class="lg:w-1/2 mx-auto text-center bg-gradient-to-r from-[#FFFFFF] to-[#FFB905] bg-clip-text text-transparent text-[6em] lg:text-[130px] Bebas leading-none">
        WE GO BEYOND!</h1>
      <p class="mt-8 mx-6 lg:mx-80 mb-14 text-white text-xl Montserrat leading-[2]">Unlock the ultimate Oahu experience
        with our
        diverse activity
        packaging blending thrilling adventures and enriching cultural insights - <span class="font-bold">let's explore
          together</span>
      </p>
      <router-link to="/"
        class="invisible lg:visible border border-[#F58C1F] border-4 lg:mr-6 bg-[#F58C1F] lg:px-8 lg:py-2 rounded-3xl text-white text-xl font-semibold hover:bg-white hover:border-white hover:text-[#F58C1F]">
        BOOK NOW
      </router-link>
      <button
        class="invisible lg:visible border border-white border-4 lg:px-8 lg:py-2 rounded-3xl text-white text-xl font-semibold hover:border-[#F58C1F] hover:text-[#F58C1F]">
        <a href="tel:(808)562-3222">CALL (808) 562-3222</a>
      </button>
    </div>

  </section>
  <section class="relative h-[170vh] md:h-[70vh]">
  <!-- Background image container -->
  <div class="absolute top-0 left-0 w-full h-full">
    <!-- Dark overlay with #3D2A2A color and semi-transparency -->
    <div class="absolute inset-0 bg-[#080504] opacity-90"></div>
    <img src="/headerbackgroundImage.png" class="object-cover w-full h-full" alt="">
  </div>

  <!-- Container for blocks, centered using Flexbox -->
  <div class="absolute inset-0 flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <!-- Individual blocks -->
      <div class="relative w-64 h-64 md:w-48 md:h-48 lg:w-44 lg:h-44">
        <img class="w-full h-full object-cover rounded-2xl" src="/image-1.png" alt="">
        <div class="absolute bottom-2 left-2 bg-white text-black font-bold p-2 rounded-2xl">
          LUAUS
        </div>
      </div>

      <div class="relative w-64 h-64 md:w-48 md:h-48 lg:w-44 lg:h-44">
        <img class="w-full h-full object-cover rounded-2xl" src="/image.png" alt="">

        <div class="absolute bottom-2 left-2 bg-white text-black font-bold p-2 rounded-2xl">
          ISLAND TOURS
        </div>
      </div>

      <div class="relative w-64 h-64 md:w-48 md:h-48 lg:w-44 lg:h-44">
        <img class="w-full h-full object-cover rounded-2xl" src="/photo_2024-09-10_13-47-42.jpg" alt="">
        <div class="absolute bottom-2 left-2 bg-white text-black font-bold p-2 rounded-2xl">
          Pearl Harbor Tours
        </div>
      </div>

      <div class="relative w-64 h-64 md:w-48 md:h-48 lg:w-44 lg:h-44">
        <img class="w-full h-full object-cover rounded-2xl" src="/photo_2024-09-13_09-29-15.jpg" alt="">
        <div class="absolute bottom-2 left-2 bg-white text-black font-bold p-2 rounded-2xl">
          Ocean Adventures
        </div>
      </div>

      <div class="relative w-64 h-64 md:w-48 md:h-48 lg:w-44 lg:h-44">
        <img class="w-full h-full object-cover rounded-2xl" src="/photo_2024-09-10_13-32-12.jpg" alt="">
        <div class="absolute bottom-2 left-2 bg-white text-black font-bold p-2 rounded-2xl">
          Helicopter Tours
        </div>
      </div>

    </div>
  </div>
</section>


  <!--  Section your adventure awaits-->
  <section class="bg-[#140B0B] top-0">
    <div data-aos="fade-left" data-aos-duration="1500" class="container mx-auto pb-20 lg:py-20">
      <div class="flex lg:flex-row-reverse flex-col">
        <div class="lg:w-1/2 flex flex-col">
          <h1
            class="from-[#FFFFFF] to-[#FFB905] bg-gradient-to-r bg-clip-text text-transparent text-[4em] lg:text-[5em] Bebas text-center lg:text-left lg:ml-12">
            YOUR
            ADVENTURE AWAITS</h1>
          <img class="lg:hidden" draggable="false" src="/youradventureawaits.png" alt="">
          <p
            class="lg:mr-32 p-10 lg:p-0 text-white text-sm lg:text-xl Montserrat leading-[2.5] lg:leading-[2] lg:ml-12">
            Our goal is to make every visit with us a
            transformative experience, enriching our guests’ lives with exceptional memories and a profound connection
            to the spirit of Hawaii. Join us at Oahu Tours and Activities, where your extraordinary journey awaits,
            filled with stories you'll treasure forever.</p>
          <div class="lg:mt-6 lg:ml-6 flex justify-center lg:ml-0 lg:justify-start">
            <router-link to="/tours"
              class="border border-[#96B53D] border-4 mr-6 bg-[#96B53D] px-7 py-2 rounded-3xl text-xl font-semibold Aileron hover:bg-white hover:border-white hover:text-[#96B53D]">
              TOURS
            </router-link>
            <router-link to="/activities"
              class="border border-[#FEDA02] border-4 mr-6 bg-[#FEDA02] px-8 py-2 rounded-3xl text-xl font-semibold Aileron hover:bg-white hover:border-white hover:text-[#FEDA02]">
              ACTIVITIES
            </router-link>
          </div>
        </div>
        <div class="lg:w-1/2 hidden lg:flex">
          <img class="object-cover" draggable="false" src="/youradventureawaits.png" alt="">
        </div>

      </div>
    </div>
  </section>
  <!--  Section your guides-->
  <section>
    <div data-aos="fade-right" data-aos-duration="1500" class="container mx-auto lg:py-20">
      <div class="flex flex-row">
        <div class="lg:w-1/2">
          <h1 class="my-8 text-[5em] Bebas text-center lg:text-left">YOUR GUIDES</h1>
          <img class="lg:hidden w-full" draggable="false" src="/yourguides.png" alt="">
          <p class="lg:mr-28 pt-10 px-10 lg:p-0 text-sm lg:text-[1.3em] Montserratreg leading-[2.5] lg:leading-[2]">Oahu
            Tours and Activities was founded by three long-time
            friends who share a deep-rooted connection to Hawaii and a passion for showcasing its beauty to the
            world.</p>
          <p class="lg:mr-28 p-10 lg:p-0 lg:pt-10 text-sm lg:text-[1.3em] Montserratreg leading-[2.5] lg:leading-[2]">
            Together, these three friends aim to make Oahu Tours and
            Activities the top tour agency in Hawaii by providing unparalleled, heartfelt hospitality. They believe in
            creating experiences that are not just tours, but true introductions to Hawaiian life and culture.</p>
          <div class="mt-6 mb-20 lg:mb-0 mx-8 lg:mx-0">
            <router-link to="/about"
              class="border border-black border-4 mr-6 bg-black px-7 py-2 rounded-3xl text-xl font-semibold Aileron text-white hover:bg-white hover:text-black">
              ABOUT US
            </router-link>
          </div>
        </div>
        <div class="w-1/2 hidden h-auto lg:flex w-[500px] ml-20">
          <img class="w-full object-cover" draggable="false" src="/yourguides.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <!--  Section video-->
  <section>
    <video src="/oahutoursvideo.mp4" autoplay class="w-full h-[400px] lg:h-auto object-cover"></video>
  </section>
  <!--  Section what our customers said-->
  <section>
    <div data-aos="zoom-in" data-aos-duration="3000" class="container lg:mx-auto lg:py-20 mt-12 mb-20">
      <h1 class="text-[4.5em] lg:text-[5em] Bebas lg:mb-16 mx-6">WHAT OUR CUSTOMERS SAID</h1>
      <div class="flex flex-row">
        <swiper :slidesPerView="1" :spaceBetween="30" :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }" :pagination="{ clickable: true }" class="custom-pagination lg:hidden" :modules="modules">
          <!--        Card 1-->
          <swiper-slide>
            <div class="border border-black border-2 p-10 lg:mr-8 lg:ml-0 lg:my-0 mx-8 my-8 mb-16">
              <h1 class="text-[1.5em] Bebas mb-4">JOEY, JASON & RYAN WERE WONDERFUL!</h1>
              <div class="flex flex-row mb-8 ">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
              </div>
              <p class="text-l MontserratREG leading-[3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                a
                hendrerit leo. Etiam a dignissim nunc, a blandit massa. Pellentesque ultricies consectetur nunc.</p>
              <div class="mt-8 flex flex-row">
                <div>
                  <img draggable="false" src="/reviewpictureaccount.png" alt="">
                </div>
                <div class="ml-6 mt-2">
                  <h2 class="font-bold MontserratREG">The Smith Family</h2>
                  <p class="MontserratREG">New York</p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!--        Card 2-->
          <swiper-slide>
            <div class="border border-black border-2 p-10 lg:mr-8 lg:ml-0 lg:my-0 mx-8 my-8 mb-16">
              <h1 class="text-[1.5em] Bebas mb-4">JOEY, JASON & RYAN WERE WONDERFUL!</h1>
              <div class="flex flex-row mb-8">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
              </div>
              <p class="text-l MontserratREG leading-[3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                a
                hendrerit leo. Etiam a dignissim nunc, a blandit massa. Pellentesque ultricies consectetur nunc.</p>
              <div class="mt-8 flex flex-row">
                <div>
                  <img draggable="false" src="/reviewpictureaccount.png" alt="">
                </div>
                <div class="ml-6 mt-2">
                  <h2 class="font-bold MontserratREG">The Smith Family</h2>
                  <p class="MontserratREG">New York</p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!--        Card 3-->
          <swiper-slide>
            <div class="border border-black border-2 p-10 lg:mr-8 lg:ml-0 lg:my-0 mx-8 my-8 mb-16">
              <h1 class="text-[1.5em] Bebas mb-4">JOEY, JASON & RYAN WERE WONDERFUL!</h1>
              <div class="flex flex-row mb-8">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
                <img draggable="false" src="/star.png" alt="star">
              </div>
              <p class="text-l MontserratREG leading-[3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                a
                hendrerit leo. Etiam a dignissim nunc, a blandit massa. Pellentesque ultricies consectetur nunc.</p>
              <div class="mt-8 flex flex-row">
                <div>
                  <img draggable="false" src="/reviewpictureaccount.png" alt="">
                </div>
                <div class="ml-6 mt-2">
                  <h2 class="font-bold MontserratREG">The Smith Family</h2>
                  <p class="MontserratREG">New York</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </div>
  </section>

</template>
<script>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';

import './assets/main.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { onMounted } from "vue";
import AOS from "aos";

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
    return {
      modules: [Autoplay, Pagination, Navigation, EffectFade],
    };

  },


};
</script>