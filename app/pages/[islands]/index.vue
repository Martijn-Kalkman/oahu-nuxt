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

    <section>
      <div data-aos="fade-right" data-aos-duration="1500" class="container mx-auto">
        <h2 class="mt-20 Bebas text-7xl text-center font-medium mb-8">
          {{ title }}
        </h2>
        <p class="text-center">
          {{ headerSubTitle }}
        </p>
        <p class="Montserratreg mt-4 leading-[3] mx-6">
          {{ text }}
        </p>

        <div class="flex flex-col xl:flex-row gap-8">
          <div class="w-full lg:h-[900px] md:h-[600px] h-[400px]">
            <iframe class="w-full h-2/3 mb-4" :src="video" frameborder="0"></iframe>

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
              class="mySwiper h-[200px] lg:w-[800px] md:w-[650px] w-[300px]"
            >
              <swiper-slide
                class="relative transform transition-all duration-300 scale-90 swiper-slide-prev-next"
              >
                <img src="/aboutimg.png" alt="Slide 1" class="w-full object-cover shadow-lg" />
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
          <div class="w-full justify-center">
            <div class="py-10 container mx-auto">
              <div
                v-for="(card, index) in cards.slice(0, 1)"
                :key="card.slug"
                class="bg-white shadow-xl"
              >
                <div
                  :style="{ backgroundImage: `url(${card.headerImage})` }"
                  class="hover:scale-105 duration-500 overflow-hidden relative bg-cover bg-center bg-no-repeat w-full h-96 flex justify-center items-center overflow-hidden"
                >
                  <!-- Overlay -->
                  <div class="absolute inset-0 bg-black opacity-50"></div>

                  <!-- Content -->
                  <h3 class="Bebas absolute bottom-4 left-4 text-white text-3xl">
                    {{ card.headerTitle }}
                  </h3>
                </div>
                <div class="p-6 Montserratreg">
                  <h4 class="mb-4 h-12 overflow-y-hidden">{{ card.headerSubTitle }}</h4>
                  <p class="h-24">{{ card.text }}</p>
                  <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-black" />
                  <div class="grid grid-cols-12">
                    <div class="col-span-6">
                      <p class="line-through decoration-red-500 decoration-2 text-xl">
                        ${{ card.price }}
                      </p>
                      <p class="text-xs">Now from</p>
                      <p class="text-4xl text-[#F58C1F]">${{ discountedPrice[index] }}</p>
                    </div>
                    <div class="col-span-6">
                      <div class="">
                        <button
                          class="w-[150px] text-center border border-[#F58C1F] bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:text-[#F58C1F] mb-4"
                        >
                          <a> BOOK NOW </a>
                        </button>
                      </div>
                      <div class="Aileron font-bold ml-4">
                        <a href="tel:8085623222" class="flex flex-row gap-4">
                          <img draggable="false" src="/phoneblack.png" alt="phone icon" />(808)
                          562-3222</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="py-10 container mx-auto">
      <div
        class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 flex-wrap w-full justify-between gap-6 mx-auto"
      >
        <div
          v-for="(card, index) in cards"
          :key="card.slug"
          class="w-full bg-white shadow-xl col-span-1"
        >
          <div
            :style="{ backgroundImage: `url(${card.headerImage})` }"
            class="hover:scale-105 duration-500 relative bg-cover bg-center bg-no-repeat w-full h-96 flex justify-center items-center overflow-hidden"
          >
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <h3 class="Bebas absolute bottom-4 left-4 text-white text-3xl">
              {{ card.headerTitle }}
            </h3>
          </div>
          <div class="p-6 Montserratreg">
            <h4 class="mb-4 h-12 overflow-y-hidden">{{ card.headerSubTitle }}</h4>
            <p class="h-24">{{ card.text }}</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-black" />
            <div class="grid grid-cols-12">
              <div class="col-span-6">
                <p class="line-through decoration-red-500 decoration-2 text-xl">
                  ${{ card.price }}
                </p>
                <p class="text-xs">Now from</p>
                <p class="text-4xl text-[#F58C1F]">${{ discountedPrice[index] }}</p>
              </div>
              <div class="col-span-6">
                <div class="">
                  <button
                    class="w-[150px] text-center border border-[#F58C1F] bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:text-[#F58C1F] mb-4"
                  >
                    <NuxtLink> BOOK NOW </NuxtLink>
                  </button>
                </div>
                <div class="Aileron font-bold ml-4">
                  <a href="tel:8085623222" class="flex flex-row gap-4">
                    <img draggable="false" src="/phoneblack.png" alt="phone icon" />(808)
                    562-3222</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import Card from '~/components/Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

// let discountedPrice = price * (discountPercentage/100);
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
      headerTitle: '',
      headerSubTitle: '',
      headerImage: '',
      title: '',
      text: '',
      video: '',
      slug: '',
      cards: [],
      discountedPrice: [],
    };
  },
  mounted() {
    const slug = this.$route.params.slug;

    // Fetch the data from the backend API
    fetch(`http://localhost:3000/api/tours/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        const category = data.category; // First category
        console.log(data.category);
        this.headerTitle = category.headerTitle;
        this.headerSubTitle = category.headerSubTitle;
        this.headerImage = category.headerImage;
        this.cards = category.cards;
        this.slug = category.slug;
        this.video = category.video;
        this.title = category.title;
        this.text = category.text;

        this.cards.forEach((card, index) => {
          const discount = (card.price * parseFloat(card.discountPercentage)) / 100;
          console.log('price:' + parseFloat(card.discountPercentage));
          this.discountedPrice[index] = (card.price - discount).toFixed(0);
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
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
