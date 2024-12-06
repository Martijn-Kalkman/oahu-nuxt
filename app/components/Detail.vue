<template>
  <h1>olla</h1>
  <div v-if="tour">
    <h2>{{ tour.tour_name }}</h2>
    <p>{{ tour.tour_description }}</p>
  </div>
  <div v-else>
    <p>Tour not found.</p>
  </div>
</template>

<script>
import { pearlHarborTours } from '../static/pearlharbortours.js';

export default {
  async asyncData({ params }) {
    const tourName = params.tour_name;
    console.log('Tour Name:', tourName); // Debugging
    const tour = pearlHarborTours.find(t => t.tour_name === tourName) || null;
    console.log('Tour:', tour); // Debugging
    return { tour };
  }
</script>
