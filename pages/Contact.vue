<template>
  <section class="relative">
    <div class="relative">
      <img
  class="w-full lg:w-screen -h-[700px] object-contain lg:object-cover"
  src="/contact.svg"
  alt="Contact Image"
/>

      <div class="absolute inset-0 bg-[#DBDBDB]/10 opacity-50"></div>
      <div class="absolute bottom-0 inset-x-0">
        <div class="container mx-auto">
          <h2
            class="Bebas text-7xl text-center lg:text-left font-medium mb-32 text-white"
          >
            CONTACT US
          </h2>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-[#140B0B]">
      <div class="container mx-auto">
        <div class="flex lg:flex-row flex-col">
          <div class="lg:w-4/12 text-center">
            <p class="text-white Bebas xl:text-5xl md:text-4xl text-5xl lg:my-12 mt-12">
              REACH OUT TO OUR TEAM!
            </p>
          </div>
          <div class="4/12 mx-auto lg:my-12 mt-12">
            <div>
              <div class="flex flex-row">
                <div class="my-auto text-center">
                  <img class="mr-4 w-8" src="/mailbig.png" />
                </div>
                <div>
                  <p class="text-white text-2xl">info@gobeyondhawaii.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="4/12 mx-auto my-12 text-white">
            <div>
              <div class="flex flex-row">
                <div class="mx-auto text-center">
                  <img class="mr-4 w-6" src="/phonebig.png" />
                </div>
                <div class="text-2xl">
                  <p>(808) 562-3222</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="lg:container mx-auto">
      <form
  ref="form"
  class="flex mt-12 px-8 mb-12 flex-col space-y-6 lg:w-10/12 mx-auto"
  @submit.prevent="sendEmail"
>
  <div class="flex lg:flex-row flex-col space-y-4 sm:space-y-0 justify-between lg:space-x-10">
    <div class="flex flex-col w-full pb-4 lg:pb-0">
      <label class="Bebas text-3xl mb-4">YOUR NAME</label>
      <input
        class="bg-[#F3F3F3] px-2 py-3 text-black"
        type="text"
        name="fullname"
        id="fullname"
        placeholder=""
      />
    </div>
    <div class="flex flex-col w-full">
      <label class="Bebas text-3xl mb-4">YOUR EMAIL</label>
      <input
        class="bg-[#F3F3F3] px-2 py-3 text-black"
        type="email"
        name="email"
        id="email"
        placeholder=""
      />
    </div>
  </div>
  <div class="flex lg:flex-row flex-col space-y-4 sm:space-y-0 justify-between lg:space-x-10">
    <div class="flex pb-4 lg:pb-0 flex-col w-full">
      <label class="Bebas text-3xl mb-4">YOUR PHONE NUMBER</label>
      <input
        class="bg-[#F3F3F3] px-2 py-3 text-black"
        type="tel"
        name="phone"
        id="phone"
        placeholder=""
      />
    </div>
    <div class="flex flex-col w-full">
      <label class="Bebas text-3xl mb-4">REASON FOR CONTACTING</label>
      <select
        class="bg-[#F3F3F3] px-2 py-3 text-black"
        name="reason"
        id="reason"
      >
        <option value="">Select a reason</option>
        <option value="sales">Sales</option>
        <option value="support">Support</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <div class="flex flex-col">
    <label class="Bebas text-3xl mb-4">MESSAGE</label>
    <textarea
      class="bg-[#F3F3F3] px-2 py-3 text-black"
      placeholder=""
      name="message"
      id="message"
      cols="20"
      rows="4"
    ></textarea>
  </div>

  <button
    type="submit"
    value="Send"
    class="Montserratreg font-bold bg-[#96B53D] text-white border-black rounded-3xl py-3 w-32"
  >
    SUBMIT
  </button>
  <div class="w-96 mx-auto text-center px-2 py-4 text-red-600 font-bold text-xl">
    {{ errorMessage }}
  </div>
</form>

    </div>
  </section>
</template>


<script setup lang="ts">
import emailjs from "@emailjs/browser";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const errorMessage = ref("");

const form = ref(null);

const sendEmail = () => {
  let counter = 0;

  if (form.value.fullname !== "") {
    counter++;
  } else {
    errorMessage.value = "Enter your name";
  }

  if (form.value.email !== "") {
    counter++;
  } else {
    errorMessage.value = "Enter your email";
  }

  if (form.value.phone !== "") {
    counter++;
  } else {
    errorMessage.value = "Enter your phonenumber ";
  }

  if (counter === 3) {
    errorMessage.value = "";

    emailjs
      .sendForm(
        "SERVICE_ID",
        "template_ID",
        form.value,
        "ID"
      )
      // .then(() => {
      //   router.push("../bedankt");
      // });
  }
};
</script>