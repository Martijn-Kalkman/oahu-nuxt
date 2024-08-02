<template>
  <nav class="p-4 px-8 xl:px-32 flex items-center justify-between absolute z-40 w-full text-white mobile-nav">
    <button
      class="md:hidden flex items-center px-3 py-2 text-black rounded"
      @click="toggleMenu"
    >
      <svg v-if="!isMenuOpen" class="fill-current h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0zM0 7h20v2H0zM0 11h20v2H0z" />
      </svg>
      <svg v-else class="fill-current h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" />
      </svg>
    </button>

    <div class="flex items-center space-x-4">
      <a href="/"><img src="/logooahu.png" alt="Logo" class="hidden md:block" /></a>
      <img src="/logooahu.png" alt="Logo" class="block md:hidden h-8" />
    </div>

    <!-- Centered Middle Links Section for Desktop -->
    <div class="hidden md:flex justify-center flex-grow space-x-8">
      <a href="about" class="block text-white hover:text-[#F58C1F]">ABOUT</a>
      <a href="tours" class="block text-white hover:text-[#F58C1F]">TOURS</a>
      <a href="activities" class="block text-white hover:text-[#F58C1F]">ACTIVITIES</a>
      <a href="contact" class="block text-white hover:text-[#F58C1F]">CONTACT</a>
    </div>

    <div class="hidden md:flex items-center space-x-6 md:ml-auto">
      <div class="flex items-center relative hover:text-[#FFDB00] group">
        <img src="/yellow.svg" alt="Logo" class="ml-2 h-8" />
        <a href="activities" class="relative z-10">OHAU</a>
        <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#FFDB00] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
      </div>

      <div class="flex items-center relative hover:text-[#FF53A7] group">
        <img src="/pink.svg" alt="Logo" class="mr-2 h-8" />
        <a href="#" class="relative z-10">MAUI</a>
        <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#FF53A7] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
      </div>

      <div class="flex items-center relative hover:text-[#FC3743] group">
        <img src="/red.svg" alt="Logo" class="mr-2 h-8" />
        <a href="#" class="relative z-10">BIG ISLAND</a>
        <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#FC3743] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
      </div>

      <div class="flex items-center relative hover:text-[#A84BCA] group">
        <img src="/purple.svg" alt="Logo" class="mr-2 h-8" />
        <a href="#" class="relative z-10">KAUAI</a>
        <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#A84BCA] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
      </div>
    </div>

    <div class="hidden md:flex items-center space-x-4">
      <img class="mr-4 h-8 ml-6" src="../public/phoneicon.png" />
      <img class="mr-4 h-8" src="../public/mailicon.png" />
      <a href="activities">
        <button
          class="py-3 Aileron font-bold px-8 bg-[#F58C1F] text-white rounded-3xl hover:bg-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 focus:outline-none focus:ring focus:ring-[#F58C1F] focus:ring-opacity-50"
        >
          BOOK NOW
        </button>
      </a>
    </div>
  </nav>

  <div :class="{'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen}" 
       class="fixed inset-0 bg-white z-50 w-64 text-black transform transition-transform duration-300 ease-in-out md:hidden">
    <div class="px-2 pt-2 pb-3">
      <button class="absolute top-0 right-0 m-4" @click="toggleMenu">
        <svg v-if="isMenuOpen" class="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <!-- Centered Middle Links Section for Mobile -->
      <div class="mt-16 flex flex-col space-y-4">
        <div class="flex items-center relative hover:text-[#F58C1F] group">
          <img src="/yellow.svg" alt="Logo" class="h-8 mb-2" />
          <a href="activities" class="relative z-10">OAHU</a>
          <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#F58C1F] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div class="flex items-center relative hover:text-[#F58C1F] group">
          <img src="/pink.svg" alt="Logo" class="h-8 mb-2" />
          <a href="#" class="relative z-10">MAUI</a>
          <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#F58C1F] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div class="flex items-center relative hover:text-[#F58C1F] group">
          <img src="/red.svg" alt="Logo" class="h-8 mb-2" />
          <a href="#" class="relative z-10">BIG ISLAND</a>
          <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#F58C1F] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div class="flex items-center relative hover:text-[#F58C1F] group">
          <img src="/purple.svg" alt="Logo" class="h-8 mb-" />
          <a href="#" class="relative z-10">KAUKAI</a>
          <span class="absolute left-0 right-0 bottom-0 mt-0 mb-[-10px] h-1.5 bg-[#F58C1F] transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </div>
        <div class="flex items-center pt-8 mx-auto  relative hover:text-[#F58C1F] group">
          <a href="about" class="block text-black hover:text-[#F58C1F]">ABOUT</a>
        </div>
        <div class="flex items-center relative mx-auto hover:text-[#F58C1F] group">
          <a href="tours" class="block text-black hover:text-[#F58C1F]">TOURS</a>
        </div>
        <div class="flex items-center relative mx-auto hover:text-[#F58C1F] group">
          <a href="activities" class="block text-black hover:text-[#F58C1F]">ACTIVITIES</a>
        </div>
        <div class="flex items-center relative mx-auto hover:text-[#F58C1F] group">
          <a href="contact" class="block text-black hover:text-[#F58C1F]">CONTACT</a>
        </div>

        <div class="flex items-center space-x-4 px-3 py-2">
          <img class="h-6" src="../public/phoneicon.png" />
          <img class="h-6" src="../public/mailicon.png" />
        </div>

        <div class="flex mx-auto justify-center flex-col space-y-2">
</div>


        <button
          class="w-full py-3 Aileron font-bold px-8 bg-[#F58C1F] text-white rounded-3xl hover:bg-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 focus:outline-none focus:ring focus:ring-[#F58C1F] focus:ring-opacity-50"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  </div>
</template>










<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>


<style scoped>
.mobile-nav {
  z-index: 50; /* Ensure it stays above other elements */
}

/* Make the navbar sticky only on mobile and give it a white background */
@media (max-width: 768px) { /* Adjust this value based on your breakpoint */
  .mobile-nav {
    position: sticky;
    top: 0;
    background-color: white; /* White background for mobile */
  }
}

/* Styles for the desktop navbar */
@media (min-width: 769px) { /* Adjust this value based on your breakpoint */
  .mobile-nav {
    background-color: transparent; /* Transparent background for desktop */
  }
}
</style>






<!-- <template>
    <div class="container mx-auto pt-4 z-50 absolute lg:visible invisible w-0 lg:w-full lg:mx-auto flex  justify-end text-white ">
    
    <div class="flex  flex-row mr-20">
        <div>
            <div class="flex flex-row mr-10">
                <div class="my-auto">
                    <img class="mr-4" src="/mail.png">
                </div>
                <div>
                    <p>info@gobeyondhawaii.com</p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex flex-row">
                <div>
                    <img class="mr-4" src="../public/phone.png">
                </div>
                <div>
                    <p> (808) 562-3222</p>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    
    
    
    <nav class="">
      <div class="absolute top-0 lg:visible invisible w-0 lg:w-full left-0 w-full h-full flex  justify-center">
        <div class="container mx-auto">
          <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between p-4"
          >
            <NuxtLink to="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="/logooahu.png"
                class="z-40"
                alt="logo"
                width="original_width"
                height="original_height"
              />
            </NuxtLink>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto z-40" id="navbar-default">
              <ul
                class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
              >
                <li class="px-6 my-auto">
                  <NuxtLink to="/about">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >About</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-6 my-auto">
                  <NuxtLink to="/tours">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Tours</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-6 my-auto">
                  <NuxtLink to="/activities">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Activities</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-6 my-auto">
                  <NuxtLink to="/contact">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 bg-blue-700 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Contact</a
                  >
                  </NuxtLink>
                </li>
                <li>
                  <button class="py-3 Aileron font-bold px-8 bg-[#F58C1F] text-white rounded-3xl hover:bg-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 focus:outline-none focus:ring focus:ring-[#F58C1F] focus:ring-opacity-50">
                    BOOK NOW
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    
      <div class="z-50 absolute lg:invisible visible w-full lg:w-0">
    
    <ul
                class="font-medium justify-center mx-32 md:justify-between  flex flex-row p-4 rounded-lg md:flex-row"
              >
                <li class="px-2 my-auto">
                  <NuxtLink to="/about">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >About</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-2 my-auto">
                  <NuxtLink to="/tours">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Tours</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-2 my-auto">
                  <NuxtLink to="/activities">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Activities</a
                  >
                  </NuxtLink>
                </li>
                <li class="px-2 my-auto">
                  <NuxtLink to="/contact">
                  <a
                    href="#"
                    class="block py-2 px-3 font-bold Aileron text-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                    >Contact</a
                  >
                  </NuxtLink>
                </li>
              </ul>
              
              <div class="flex flex-row mx-12 justify-between items-center">
      <div>
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../assets /images/logooahu.png"
            class="z-40"
            alt="logo"
            width="original_width"
            height="original_height"
          />
        </a>
      </div>
      <div>
        <button class="py-3 Aileron font-bold px-8 bg-[#F58C1F] text-white rounded-3xl hover:bg-white hover:text-[#F58C1F] hover:underline hover:underline-offset-4 focus:outline-none focus:ring focus:ring-[#F58C1F] focus:ring-opacity-50">
          BOOK NOW
        </button>
      </div>
    </div>
    
    
      </div>
    
    
    </nav>
    
    
    </template>
     -->
