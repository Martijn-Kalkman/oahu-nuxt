<template>
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
            src="../assets/images/logooahu.png"
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
    