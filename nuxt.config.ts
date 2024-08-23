import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  plugins: ['~/plugins/axios.js'], // Include the proxy plugin
  nitro:{
    plugins: ['~/server/index.ts'],
  }
})
