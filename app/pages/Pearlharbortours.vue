<template>
  <!--  Section banner-->
  <section class="relative">
    <div class="relative">
      <img class="lg:w-screen h-[700px] lg:h-auto object-cover" src="/toursbanner.png" alt="" />
      <div class="absolute inset-0 bg-[#000000] opacity-40"></div>
      <div class="absolute bottom-0 inset-x-0">
        <div data-aos="fade-down" data-aos-duration="1500" class="container mx-auto">
          <h2 class="Bebas text-7xl text-center font-medium text-white">Pearl Harbor tours</h2>
          <h3 class="Bebas text-xl text-center mb-12 text-white">
            Arizona half day city, Arizona/Missouri, Full day
          </h3>
          <div class="lg:w-96 w-48 mb-16 mx-auto">
            <a
              class="text-center flex justify-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-8 py-2 rounded-3xl text-white lg:text-lg text-sm font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F]"
              href=""
              >BOOK PEARL HARBOR TOURS
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Section swiper-->
  <section>
    <div data-aos="fade-right" data-aos-duration="1500" class="container mx-auto">
      <h2 class="mt-20 Bebas text-7xl text-center lg:text-left font-medium mb-8">
        There Is Nothing Like Pearl Harbor, O’ahu
      </h2>
      <p class="Montserratreg mt-4 leading-[3]">
        Commemorate the events of December 7th, 1941, by paying a visit to the historical Pearl
        Harbor National Monument. Nearly 2 million visitors per year visit the site of the World War
        II attacks President FDR famously referred to as “…a date which will live in infamy.” See
        footage and photos capturing the tragedy of this remarkable and humbling day. The Axis
        attack changed America and the world forever. After the devastating losses of the Pacific
        Fleet at Pearl Harbor, learn about how the United States rallied together and mobilized the
        industrial might of America and its citizens.
      </p>
      <div class="grid-cols-2 flex">
        <div class="col-span-1 w-full">
          <video src="/oahutoursvideo.mp4" autoplay class="mb-6"></video>
          <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper custom-pagination w-[360px] h-[390px]"
          >
            <swiper-slide class="px-6"><img src="/aboutimg.png" /></swiper-slide>
            <swiper-slide class="px-6">Slide 2 </swiper-slide
            ><swiper-slide class="px-6">Slide 3</swiper-slide>
            <swiper-slide class="px-6">Slide 4</swiper-slide>
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
  <!--  Section cards-->
  <section>
    <div class="bg-[#EBE9E2]">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 container mx-auto justify-center items-center"
      >
        <Card
          title="CLASSIC SEATING"
          image="/classicseating.jpg"
          description="Join our ʻOhana for an exciting evening under the stars as we take you on a voyage across Ka Moana (the ocean). Witness world-class entertainment at the best luau on Oahu, that begins and ends with fire!"
          price="$129.00"
          duration="2 Hours 15 Minutes"
          foodProvided="Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559776/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Magnum Helicopters"
          image="/helicopteradventure.png"
          description="This tour immerses you in the natural beauty of Oahu.
          Flying with the doors off the aircraft will give you a spectacular unobstructed view of the island’s best landmarks and attractions."
          price="$329.00"
          duration="50 Minutes"
          foodProvided="No Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/541365/calendar/2024/07/?flow=1075951&full-items=yes"
        />
        <Card
          title="Experience Nutridge"
          image="/experiencenutridge.png"
          description="This is a unique combination of Hawaiian history and culture through hands-on excursions. Come up to our historical estate and allow your senses to be engaged during this hands-on, interactive tour."
          price="$180.00"
          duration="4 Hours"
          foodProvided="Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559658/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Jetski Oahu"
          image="/jetski.png"
          description="Get out on the water and ride along the beautiful blue waters of Waikiki Beach! Our state-of-the-art Jet Skis have the speed and capability to skim across the water, and easy to use for any first-time riders."
          price="$110.00"
          duration="1 Hour 15 Minutes"
          foodProvided="No Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561897/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="X-treme Parasail"
          image="/xtremeparasail.png"
          description="Up to 1,000 feet of tow line allows you and a friend to enjoy perfect views of Diamond Head from Oahu’s south shore. Choose the length that will satisfy your craving for adventure: 700, 850, 900  or 1,000 feet."
          price="$75.00"
          duration="1 Hour"
          foodProvided="No Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561901/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Hawaii Shark Encounters"
          image="/sharkcagediving.png"
          description="This tour takes you into the open ocean, over three miles offshore, where you can observe Galapagos and Sandbar sharks in their natural environment. A floating cage keeps humans and sharks safely separate."
          price="$125.00"
          duration="2 Hours"
          foodProvided="No Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561902/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Mauka Warriors Luau - Koa Classic Package: Rear Seating"
          image="/rearseating.png"
          description="Join us at Mauka Warriors Luau for an authentic experience of traditional culture and history, overlooking the spectacular Honolulu skyline and Diamond Head. "
          price="$139.00"
          duration="3 Hours 15 Minutes"
          foodProvided="Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/558960/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Mauka Warriors Luau - Ali’i Premium Package: Midsection Seating"
          image="/midseating.png"
          description="Join us at Mauka Warriors Luau for an authentic experience of traditional culture and history, overlooking the spectacular Honolulu skyline and Diamond Head. "
          price="$169.00"
          duration="3 Hours 15 Minutes"
          foodProvided="Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559365/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Mauka Warriors Luau - Mōʻī Royal Package: Front Seating"
          image="/frontseating.png"
          description="Join us at Mauka Warriors Luau for an authentic experience of traditional culture and history, overlooking the spectacular Honolulu skyline and Diamond Head.  "
          price="$199.00"
          duration="3 Hours 15 Minutes"
          foodProvided="Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559223/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
          title="Three Tikis Sailing - Sail & Snorkel"
          image="/frontseating.png"
          description="Embark on a mesmerizing journey through the crystal clear waters of Hawaii. Get ready to witness an underwater wonderland of tropical fish and majestic sea turtles, and sail past iconic Diamond Head."
          price="$99.00"
          duration="2 Hours"
          foodProvided="No Food Provided"
          bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561910/calendar/2024/07/?flow=no&full-items=yes"
        />
      </div>
    </div>
  </section>
</template>
<script>
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '~/app/components/Card.vue';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules'; // Adjust the import path as necessary

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
};
</script>
