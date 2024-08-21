import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const api = axios.create({
        baseURL: process.env.API_BASE_URL || 'http://localhost:5000', // Use environment variable for production
      });
      

  // Inject Axios instance into Nuxt context
  nuxtApp.provide('api', api);
});
