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
          to="">BOOK NOW
      </router-link>
    </div>
  </section>
  <!--  Section cards-->
  <section>
    <div class="flex lg:flex-row flex-col bg-[#EBE9E2] justify-center items-center">
<!--        Card 1-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] md:mx-2 bg-white relative lg:mt-24 mt-14 mx-8 lg:mx-0 pb-8 lg:pb-0">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/waimeawaterfalls.png" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2">
          <h2 class="text-white Bebas text-2xl">Full Day Oahu Tour with Byodo Temple & Waimea Waterfalls</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">The ultimate circle island tour with TWO premium sites, Waimea Waterfall and Byodo-In Temple!</p>
          <div class="border-b-2 mx-8 border-black mb-4"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$149.00</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>8-9 Hours</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/559776/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
      </div>
      <!--      Card 2-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] lg:ml-4 bg-white relative lg:mt-24 mt-14 mx-8 xl:ml-16 lg:mr-0 pb-8 lg:pb-0">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/pineappleexp.png" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2">
          <h2 class="text-white Bebas text-2xl">The Pineapple EXP - Circle Island Tour</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">We at The Pineapple EXP want to make sure you have the best experience here in Hawaii without paying the world known Hawaii high prices. This is why the company was founded; to truly spread aloha.</p>
          <div class="border-b-2 mx-8 border-black mb-4 mb-4 text-center lg:text-left"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$143.00</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>9 Hour tour</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/561556/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
      </div>
      <!--      Card 3-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] lg:ml-4 bg-white relative lg:mt-24 mt-14 mx-8 xl:ml-16 lg:mr-0 pb-8 lg:pb-0 lg:mb-0 mb-16">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/halfdaypearlharbour.jpg" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2">
          <h2 class="text-white Bebas text-2xl">HALF DAY PEARL HARBOR WITH USS ARIZONA MEMORIAL AND CITY TOUR</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">A trip to Hawaii isn’t complete without a visit to the Pearl Harbor National Memorial Center and the USS Arizona Memorial, let us take you there!</p>
          <div class="border-b-2 mx-8 border-black mb-4"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$55.00</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>4-5 Hours tour</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/559773/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex lg:flex-row flex-col bg-[#EBE9E2] justify-center lg:pb-36 items-center">
<!--      Card 4-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] md:mx-2 bg-white relative lg:mt-24 mt-14 mx-8 lg:mx-0 pb-8 lg:pb-0">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/thecompleteexperiencefromoahu.jpg" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2">
          <h2 class="text-white Bebas text-2xl">THE COMPLETE EXPERIENCE FROM OAHU</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">Our Complete Pearl Harbor experience gives you the best, most personal overview of the United States entry into and subsequent commitment to the World War II effort. </p>
          <div class="border-b-2 mx-8 border-black mb-4"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$194.99</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>10 Hours</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/560833/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
      </div>
<!--      Card 5-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] lg:ml-4 bg-white relative lg:mt-24 mt-14 mx-8 xl:ml-16 lg:mr-0 pb-8 lg:pb-0">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/ussarizonamemorial.jpg" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D]  px-3 py-2">
          <h2 class="text-white Bebas text-2xl">USS ARIZONA MEMORIAL AND HISTORIC HONOLULU TOUR</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">Our journey takes you to the World War II Valor in the Pacific National Monument where the Pearl Harbor Visitor Center and the USS Arizona Memorial await you.</p>
          <div class="border-b-2 mx-8 border-black mb-4"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$68.99</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>2 Hours 30 Minutes</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/560839/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
      </div>
<!--     Card 6-->
      <div data-aos="fade-up" data-aos-duration="1500" class="xl:w-[380px] lg:w-[500px] md:w-[600px] lg:ml-4 bg-white relative lg:mt-24 mt-14 mx-8 xl:ml-16 lg:mr-0 pb-8 lg:pb-0 mb-36 lg:mb-0">
        <img draggable="false" class="z-10 w-full h-[200px] object-cover" src="/pearlharbormemorial.jpg" alt="">
        <div class="absolute lg:top-32 top-36 left-4 bg-[#96B53D] px-3 py-2">
          <h2 class="text-white Bebas text-2xl">PEARL HARBOR MEMORIAL AND BATTLESHIP MISSOURI TOUR FROM OAHU</h2>
        </div>
        <div>
          <p class="h-[210px] Montserratreg text-sm mx-8 mt-4 leading-[3] mb-4 text-center lg:text-left">Your friendly tour guide will drive you all around Honolulu in our very comfortable, Mercedes sprinter vans. We take you directly to Pearl Harbor where you will spend almost 4.5-hours exploring the areaʻs attractions.</p>
          <div class="border-b-2 mx-8 border-black mb-4"></div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-1/2 flex flex-col lg:ml-8 mb-8">
            <ul class="lg:ml-4 Montserratreg text-xs lg:text-left text-center">
              <li class="p-2"><span class="text-l font-bold">• </span><span class="font-bold text-l">$144.99</span> per person</li>
              <li class="p-2"><span class="text-l font-bold">• </span>4 Hours 30 Minutes</li>
              <li class="p-2"><span class="text-l font-bold">• </span>No Food Provided</li>
            </ul>
          </div>
          <div class="lg:w-1/2 flex flex-col items-center">
            <a
                class="w-[150px] text-center border border-[#F58C1F] border-2 bg-[#F58C1F] px-4 py-2 rounded-3xl text-white text-l font-semibold hover:bg-white hover:border-[#F58C1F] hover:text-[#F58C1F] mb-4"
                href="https://fareharbor.com/embeds/book/thetourconsultants/items/563912/calendar/2024/07/?flow=no&full-items=yes">BOOK NOW
            </a>
            <div class="flex flex-row">
              <img draggable="false" src="/phoneblack.png" alt="phone icon">
              <p class="Aileron font-bold ml-4">(808) 562-3222</p>
            </div>
          </div>
        </div>
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