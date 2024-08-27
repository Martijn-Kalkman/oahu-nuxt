<template>
  <!--  Section banner-->
  <section class="relative">
    <div class="relative ">
      <img class="lg:w-screen h-[700px] lg:h-auto object-cover" src="/toursbanner.png" alt=""/>
      <div class="absolute inset-0 bg-[#000000] opacity-40"></div>
      <div class="absolute bottom-0 inset-x-0">
        <div data-aos="fade-down" data-aos-duration="1500" class="container mx-auto">
          <h2 class="Bebas text-7xl text-center lg:text-left font-medium mb-32 text-white">TOURS</h2>
        </div>
      </div>
    </div>
  </section>
  <!--Section discover oahu-->
  <section>
    <div data-aos="zoom-in" data-aos-duration="2000" class="flex lg:flex-row flex-col text-center py-20 items-center">
      <h1 class="lg:w-3/4 Bebas text-5xl lg:mb-0 mb-12">DISCOVER OAHU WITH US - EXPERIENCE THE MAGIC TODAY!</h1>
      <router-link
          class="lg:w-auto w-48 border border-[#F58C1F] border-2 bg-[#F58C1F] px-8 py-2 rounded-3xl text-white text-xl font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F]"
          >BOOK NOW
      </router-link>
    </div>
  </section>
  <!--  Section cards-->
  <section>
    <div class="bg-[#EBE9E2]">
      <div class="grid grid-cols-1 sm:grid-cols-2 p-8 lg:grid-cols-3 gap-4 container mx-auto  justify-center items-center">
        <Card
            title="Full Day Oahu Tour with Byodo Temple & Waimea Waterfalls"
            image="/waimeawaterfalls.png"
            description="The ultimate circle island tour with TWO premium sites, Waimea Waterfall and Byodo-In Temple!"
            price="$149.00"
            duration="8-9 Hours"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559776/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
            title="The Pineapple EXP - Circle Island Tour"
            image="/pineappleexp.png"
            description="We at The Pineapple EXP want to make sure you have the best experience here in Hawaii without paying the world known Hawaii high prices. This is why the company was founded; to truly spread aloha."
            price="$143.00"
            duration="9 Hours"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/561556/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
            title="HALF DAY PEARL HARBOR WITH USS ARIZONA MEMORIAL AND CITY TOUR"
            image="/halfdaypearlharbour.jpg"
            description="A trip to Hawaii isn’t complete without a visit to the Pearl Harbor National Memorial Center and the USS Arizona Memorial, let us take you there!"
            price="$55.00"
            duration="4-5 Hours"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/559773/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
            title="THE COMPLETE EXPERIENCE FROM OAHU"
            image="/thecompleteexperiencefromoahu.jpg"
            description="Our Complete Pearl Harbor experience gives you the best, most personal overview of the United States entry into and subsequent commitment to the World War II effort."
            price="$194.99"
            duration="10 hours"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/560833/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
            title="USS ARIZONA MEMORIAL AND HISTORIC HONOLULU TOUR"
            image="/ussarizonamemorial.jpg"
            description="Our journey takes you to the World War II Valor in the Pacific National Monument where the Pearl Harbor Visitor Center and the USS Arizona Memorial await you."
            price="$68.99"
            duration="2 Hours 30 Minutes"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/560839/calendar/2024/07/?flow=no&full-items=yes"
        />
        <Card
            title="PEARL HARBOR MEMORIAL AND BATTLESHIP MISSOURI TOUR FROM OAHU"
            image="/pearlharbormemorial.jpg"
            description="Your friendly tour guide will drive you all around Honolulu in our very comfortable, Mercedes sprinter vans. We take you directly to Pearl Harbor where you will spend almost 4.5-hours exploring the areaʻs attractions."
            price="$144.99"
            duration="4 Hours 30 Minutes"
            foodProvided="No Food Provided"
            bookingLink="https://fareharbor.com/embeds/book/thetourconsultants/items/563912/calendar/2024/07/?flow=no&full-items=yes"
        />
      </div>
    </div>

  </section>
</template>
<script>
import { onMounted } from "vue";
import AOS from "aos";

export default {
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>