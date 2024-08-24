<template>
  <div class="">
    <div class="relative h-screen">
      <!-- Background Image -->
      <img
        :src="headerImage"
        alt="Category Header Image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Centered Text Container -->
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <h1 class="text-4xl font-bold mb-2">{{ headerTitle }}</h1>
        <h2 class="text-2xl">{{ headerSubTitle }}</h2>
        <a :href="slug">Book now</a>
      </div>
    </div>

    <!-- sharon -->
    <section>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="container mx-auto"
      >
        <h2 class="mt-20 Bebas text-7xl text-center font-medium mb-8">
          {{ title }}
        </h2>
        <p class="text-center">
          {{ headerSubTitle }}
        </p>
        <p class="Montserratreg mt-4 leading-[3]">
          {{ text }}
        </p>

        <div class="grid-cols-2 flex">
          <div class="col-span-1 w-full">
            <iframe
              class="w-full"
              height="78%"
              :src="video"
              frameborder="0"
            ></iframe>

            <!-- <video src="/oahutoursvideo.mp4" autoplay class="mb-6"></video> -->
            <swiper
              :spaceBetween="-55"
              :centeredSlides="true"
              :slidesPerView="1.3"
              :pagination="{
                clickable: true,
              }"
              :loop="true"
              :modules="modules"
              class="mySwiper h-[200px] w-[800px]"
            >
              <swiper-slide
                class="relative transform transition-all duration-300 scale-90 swiper-slide-prev-next"
              >
                <img
                  src="/aboutimg.png"
                  alt="Slide 1"
                  class="w-full object-cover shadow-lg"
                />
              </swiper-slide>
              <swiper-slide
                class="relative transform transition-all duration-300 scale-90 swiper-slide-prev-next"
              >
                <img
                  src="/aboutimg.png"
                  alt="Slide 2"
                  class="w-full h-full object-cover shadow-lg"
                />
              </swiper-slide>
              <swiper-slide
                class="relative transform transition-all duration-300 scale-90 swiper-slide-prev-next"
              >
                <img
                  src="/aboutimg.png"
                  alt="Slide 3"
                  class="w-full h-full object-cover shadow-lg"
                />
              </swiper-slide>
              <swiper-slide
                class="relative transform transition-all duration-300 scale-90 swiper-slide-prev-next"
              >
                <img
                  src="/aboutimg.png"
                  alt="Slide 4"
                  class="w-full h-full object-cover shadow-lg"
                />
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-span-1 w-full justify-center">
            <div class="">
              <Card
                title="CLASSIC SEATING"
                image="/classicseating.jpg"
                description="Join our ʻOhana for an exciting evening under the stars as we take you on a voyage across Ka Moana (the ocean). Witness world-class entertainment at the best luau on Oahu, that begins and ends with fire!"
                price="$129.00"
                duration="2 Hours 15 Minutes"
                foodProvided="Food Provided"
                bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559776/calendar/2024/07/?flow=no&full-items=yes"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- /sharon -->

    <div class="py-10 container mx-auto">
      <div class="flex flex-row flex-wrap w-full justify-between gap-10">
        <div
          v-for="card in cards"
          :key="card.slug"
          class="w-[30%] bg-white shadow-xl"
        >
  <div
    :style="{ backgroundImage: `url(${card.headerImage})` }"
    class="relative bg-cover bg-center bg-no-repeat w-full h-96 flex justify-center items-center overflow-hidden"
  >

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black opacity-50"></div>

            <!-- Content -->
            <h3 class="absolute bottom-4 left-4 text-white text-xl">
              {{ card.headerTitle }}
            </h3>
          </div>
          <div class="p-6">
            <h4 class="mb-4">{{ card.headerSubTitle }}</h4>
            <p>{{ card.text }}</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-black ">
            <p>Price: ${{ card.price }}</p>
            <p>Discount: {{ card.discountPercentage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/css";
import "swiper/css/pagination";
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Card,
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

  data() {
    return {
      headerTitle: "",
      headerSubTitle: "",
      headerImage: "",
      title: "",
      text: "",
      video: "",
      slug: "",
      cards: [],
    };
  },
  mounted() {
    // Fetch the data from the backend API
    fetch("http://localhost:3000/api/tours")
      .then((response) => response.json())
      .then((data) => {
        const category = data.categories[0]; // First category
        console.log(category);
        this.headerTitle = category.headerTitle;
        this.headerSubTitle = category.headerSubTitle;
        this.headerImage = category.headerImage;
        this.cards = category.cards;
        this.slug = category.slug;
        this.video = category.video;
        this.title = category.title;
        this.text = category.text;
      })
      .catch((error) => console.error("Error fetching data:", error));
  },
};
</script>

<style scoped>
.mySwiper .swiper-slide-active {
  transform: scale(2) !important;
}

.mySwiper .swiper-slide-prev-next {
  transform: scale(1) !important;
}

.mySwiper .swiper-slide-next,
.mySwiper .swiper-slide-prev {
  transform: scale(0.8) !important;
}

.mySwiper .swiper-slide {
  transition: transform 0.3s ease;
}
</style>
