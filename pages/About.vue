<template>
  <section class="relative">
    <div class="relative">
      <img
        class="lg:w-screen h-[700px] lg:h-auto object-cover"
        src="/about.svg"
        alt="Image"
      />
      <div class="absolute inset-0 bg-black/10 opacity-50"></div>
      <div class="absolute bottom-0 inset-x-0">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          class="container mx-auto"
        >
          <h2 class="Bebas text-7xl text-center lg:text-left font-medium mb-32">
            ABOUT US
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-[#FFB905]">
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        class="lg:container mx-auto pt-20 pb-20 px-6 lg:px-0"
      >
        <div class="flex lg:flex-row flex-col">
          <div class="lg:w-6/12 text-xl Montserratreg">
            <p>
              Oahu Tours and Activities, specializes in unique tours of Oahu's
              top attractions.
              <span class="font-bold">
                With over 20 years of experience in Hawaiian tourism, our team
                is committed to revealing the island's hidden gems and vibrant
                local life.
              </span>
            </p>
            <p class="pt-6 text-xl">
              We are champions of sustainable tourism, dedicated to supporting
              local businesses essential to an authentic Hawaiian experience.
              Our tours do more than show the sights; they immerse you in the
              true spirit of the islands, connecting you with local communities
              and the natural beauty of Hawaii.
            </p>
            <p class="pt-6 text-xl">
              As we grow, our dedication to sustainable practices and the local
              economy continues. Join us for a genuine adventure that enriches
              your understanding of Hawaii's culture and contributes to
              preserving its future.
            </p>
          </div>
          <div class="mx-auto lg:visible invisible lg:h-auto h-0">
            <swiper
              :spaceBetween="30"
              :pagination="{
                clickable: true,
              }"
              :modules="modules"
              class="mySwiper custom-pagination w-[360px] h-[390px]"
            >
              <swiper-slide class="px-6"
                ><img src="/aboutimg.png"
              /></swiper-slide>
              <swiper-slide class="px-6">Slide 2 </swiper-slide
              ><swiper-slide class="px-6">Slide 3</swiper-slide>
              <swiper-slide class="px-6">Slide 4</swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      class="container mx-auto"
    >
      <h2
        class="mt-20 Bebas text-7xl text-center lg:text-left font-medium mb-8"
      >
        OUR FOUNDERS
      </h2>
      <div class="flex lg:flex-row flex-col px-8 lg:px-0">
        <div class="lg:w-4/12">
          <div
            class="my-4 lg:mr-8 bg-[#D9D9D9] lg:w-auto w-[450px] w-[90%] mx-auto lg:mx-0 h-[350px]"
          ></div>
          <div class="w-11/12 mx-auto">
            <p class="Montserratreg font-black text-xl">Joey</p>
            <p class="Montserratreg mt-4 leading-[3]">
              Joey and Jason have been close friends for six years, their bond
              strengthened by a shared commitment to showcasing the authentic
              Hawaiian experience. Jason’s extensive knowledge of the tourism
              industry & vision combined with Joey's local insights creates the
              perfect foundation for innovative tour services.
            </p>
          </div>
        </div>
        <div class="lg:w-4/12">
          <div
            class="my-4 lg:mr-8 bg-[#D9D9D9] lg:w-auto w-[450px] w-[90%] mx-auto lg:mx-0 h-[350px]"
          ></div>
          <div class="w-11/12 mx-auto">
            <p class="Montserratreg font-black text-xl">Jason</p>
            <p class="Montserratreg mt-4 leading-[3]">
              Jason's extensive knowledge of the tourism industry & vision combined with Joey's local insights creates the perfect foundation for innovative tour services.
            </p>
          </div>
        </div>
        <div class="lg:w-4/12">
          <div
            class="my-4 lg:mr-8 bg-[#D9D9D9] lg:w-auto w-[450px] w-[90%] mx-auto lg:mx-0 h-[350px]"
          ></div>
          <div class="w-11/12 mx-auto">
            <p class="Montserratreg font-black text-xl">Ryan</p>
            <p class="Montserratreg mt-4 leading-[3]">
              Ryan and Joey's friendship spans nearly two decades, beginning in
              their childhood years spent on the lush landscapes of Hawaii. This
              lifelong connection has instilled in them a profound appreciation
              for the islands and a desire to share this love with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      class="container mx-auto mt-20 mb-20"
    >
      <div class="flex lg:flex-row flex-col">
        <div class="lg:w-4/12">
          <img
            class="h-full w-full lg:w-auto"
            draggable="false"
            src="/about-surf.png"
          />
        </div>
        <div class="Montserratreg lg:pl-20 px-8 lg:w-8/12">
          <h2
            class="mt-12 Bebas text-7xl font-medium mb-12 text-center lg:text-left"
          >
            OUR STORY
          </h2>
          <p class="leading-[2.5] text-m">
            Oahu Tours and Activities was founded by three long-time friends who
            share a deep-rooted connection to Hawaii and a passion for
            showcasing its beauty to the world.
          </p>
          <p class="mt-12 leading-[2.5]">
            Outside of their ambitions, they are family men who treasure time
            spent with their children. This personal commitment to family
            enriches their professional lives, infusing their work with warmth
            and genuine care that extends to every tour guest.
          </p>
          <p class="mt-12 font-bold text-black leading-[2.5]">
            Join us for a journey where the true Hawaii is not just seen, but
            felt. With Oahu Tours and Activities, discover the island's hidden
            gems through the eyes of locals who love and live the aloha spirit
            every day.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="relative overflow-hidden">
    <img
      class="lg:w-full h-full absolute top-0 left-0 z-0"
      src="/redskybg.png"
    />
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="container mx-auto text-white py-32 lg:px-8 relative z-10"
    >
      <div class="Montserratreg mx-8 lg:mx-0">
        <h2 class="Bebas text-7xl font-medium mb-12 lg:text-left text-center">
          MISSION
        </h2>
        <p class="text-xl">
          At Oahu Tours and Activities, we are passionately committed to
          crafting unforgettable Hawaiian adventures through the eyes of locals
          who GO BEYOND and live the aloha spirit. Each journey is a
          once-in-a-lifetime experience, and we embrace every visitor as part of
          our extended Ohana, offering personalized service, heartfelt
          hospitality, and a steadfast commitment to excellence.
        </p>
        <p class="text-xl mt-8">
          We are dedicated to creating a seamless and stress-free vacation
          planning experience, whether it’s in-person, online, or over the
          phone. We pride ourselves in providing expert local guidance and
          ensure continuous communication, customizing each aspect of our
          guests' itineraries to perfectly suit their individual preferences and
          desires.
        </p>
        <p class="text-xl mt-8">
          Our goal is to make every visit with us a transformative experience,
          enriching our guests’ lives with exceptional memories and a profound
          connection to the spirit of Hawaii. Join us at Oahu Tours and
          Activities, where your extraordinary journey awaits, filled with
          stories you'll treasure forever.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

//   // Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

//   import './style.css';

// import required modules
import { Pagination } from "swiper/modules";
import { onMounted } from "vue";
import AOS from "aos";

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
      modules: [Pagination],
    };
  },
};
</script>

<style>
.custom-pagination .swiper-pagination-bullet {
  background-color: black;
  width: 12px;
  height: 12px;
}

.custom-pagination .swiper-pagination-bullet-active {
  background-color: white;
  border: 2px solid black;
  outline: 4px solid black;
  outline-offset: -20px;
  width: 17px;
  height: 15px;
}
</style>
