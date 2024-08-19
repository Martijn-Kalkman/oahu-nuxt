<template>
  <div>
    <component :is="detailComponent" :tour="tour" />
  </div>
  <div>
    <div v-for="pearlHarborTour in pearlHarborTours" :key="pearlHarborTour.id">
      <h2>{{ pearlHarborTour.tour_name }}</h2>
      <p>{{ pearlHarborTour.tour_description }}</p>
      <NuxtLink :to="`/testpage/${pearlHarborTour.tour_name}`">
        <button>View Details</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { pearlHarborTours } from "../static/pearlharbortours.js";

export default {
  data() {
    return {
      pearlHarborTours: pearlHarborTours
    };
  }
};
</script>
