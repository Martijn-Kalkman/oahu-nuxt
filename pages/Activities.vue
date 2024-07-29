<template>
  <!--  Section banner-->
  <section class="relative">
    <div class="relative">
      <img
        class="lg:w-screen h-[700px] lg:h-auto object-cover"
        src="/toursbanner.png"
        alt=""
      />
      <div class="absolute inset-0 bg-[#000000] opacity-40"></div>
      <div class="absolute bottom-0 inset-x-0">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          class="container mx-auto"
        >
          <h2
            class="Bebas text-7xl text-center lg:text-left font-medium mb-32 text-white"
          >
            Activities
          </h2>
        </div>
      </div>
    </div>
  </section>

  <!--Section discover oahu-->
  <section>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="flex lg:flex-row flex-col text-center py-20 items-center"
    >
      <h1 class="lg:w-3/4 Bebas text-5xl lg:mb-0 mb-12">
        DISCOVER OAHU WITH US - EXPERIENCE THE MAGIC TODAY!
      </h1>
      <a
        class="lg:w-auto w-48 border border-[#F58C1F] border-2 bg-[#F58C1F] px-8 py-2 rounded-3xl text-white text-xl font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F]"
        href=""
        >BOOK NOW
      </a>
    </div>
  </section>

  <!--  Section cards-->
  <section>
    <div class="bg-[#EBE9E2]">
    <div class="grid grid-cols-1 sm:grid-cols-2 p-8 lg:grid-cols-3 gap-4 container mx-auto  justify-center items-center">
      <Card
        title="CLASSIC SEATING"
        image="/classicseating.jpg"
        description="Join our ʻOhana for an exciting evening under the stars as we take you on a voyage across Ka Moana (the ocean)..."
        price="$129.00"
        duration="2 Hours 15 Minutes"
        foodProvided="Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559776/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="Magnum Helicopters"
        image="/helicopteradventure.png"
        description="This tour immerses you in the natural beauty of Oahu..."
        price="$329.00"
        duration="50 Minutes"
        foodProvided="No Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/541365/calendar/2024/07/?flow=1075951&full-items=yes"
      />
      <Card
        title="Experience Nutridge"
        image="/experiencenutridge.png"
        description="This is a unique combination of Hawaiian history and culture through hands-on excursions..."
        price="$180.00"
        duration="4 Hours"
        foodProvided="Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559658/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="Jetski Oahu"
        image="/jetski.png"
        description="Get out on the water and ride along the beautiful blue waters of Waikiki Beach!"
        price="$110.00"
        duration="1 Hour 15 Minutes"
        foodProvided="No Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561897/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="X-treme Parasail"
        image="/xtremeparasail.png"
        description="Up to 1,000 feet of tow line allows you and a friend to enjoy perfect views of Diamond Head..."
        price="$75.00"
        duration="1 Hour"
        foodProvided="No Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561901/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="Hawaii Shark Encounters"
        image="/sharkcagediving.png"
        description="This tour takes you into the open ocean, over three miles offshore, where you can observe sharks..."
        price="$125.00"
        duration="2 Hours"
        foodProvided="No Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561902/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="Mauka Warriors Luau - Koa Classic Package: Rear Seating"
        image="/rearseating.png"
        description="Join us at Mauka Warriors Luau for an authentic experience of traditional culture and history..."
        price="$139.00"
        duration="3 Hours 15 Minutes"
        foodProvided="Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/558960/calendar/2024/07/?flow=no&full-items=yes"
      />
      <Card
        title="Mauka Warriors Luau - Ali’i Premium Package: Midsection Seating"
        image="/midseating.png"
        description="Join us at Mauka Warriors Luau for an authentic experience of traditional culture and history..."
        price="$169.00"
        duration="3 Hours 15 Minutes"
        foodProvided="Food Provided"
        bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559365/calendar/2024/07/?flow=no&full-items=yes"
      />
    </div>
  </div>
  </section>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import Card from "../components/Card.vue"; // Adjust the import path as necessary

export default {
  components: {
    Card,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });

    return {};
  },
};
</script>