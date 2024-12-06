import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  typescript: {
    typeCheck: false,
  },

  vue: {
    propsDestructure: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    // Will be available in both server and client
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],


  // nitro: {
  //   plugins: ["~/server/index.ts"],
  // },
});
