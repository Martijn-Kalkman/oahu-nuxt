<template>
  <div class="">
    <div class="relative h-screen">
      <!-- Background Image -->
      <img :src="headerImage" alt="Category Header Image" class="absolute inset-0 w-full h-full object-cover">

      <!-- Centered Text Container -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 class="text-4xl font-bold mb-2">{{ headerTitle }}</h1>
        <h2 class="text-2xl">{{ headerSubTitle }}</h2>
        <a :href="slug">Book now</a>
      </div>


    </div>
    <div class="py-10 container mx-auto">
      <h4 class="text-center text-2xl font-bold">{{ title }}</h4>
      <p class="text-center text-xl mt-10">{{ text }}</p>
      <iframe class=" w-full h-[900px]" width="100%" height="100%" :src="video" frameborder="0"></iframe>
    </div>
    <div class="py-10 container mx-auto">
      <div class="flex flex-row flex-wrap w-full justify-between gap-10">
        <div v-for="card in cards" :key="card.slug" class="w-[30%] bg-white shadow-xl">
          <img :src="card.headerImage" :alt="card.headerTitle">
          <div class="p-6">
            <h3>{{ card.headerTitle }}</h3>
            <h4>{{ card.headerSubTitle }}</h4>
            <p>{{ card.text }}</p>
            <p>Price: ${{ card.price }}</p>
            <p>Discount: {{ card.discountPercentage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerTitle: '',
      headerSubTitle: '',
      headerImage: '',
      title: '',
      text: '',
      video: '',
      slug: '',
      cards: []
    };
  },
  mounted() {
    // Fetch the data from the backend API
    fetch('http://localhost:3000/api/tours')
      .then(response => response.json())
      .then(data => {
        const category = data.categories[0]; // First category
        console.log(category)
        this.headerTitle = category.headerTitle;
        this.headerSubTitle = category.headerSubTitle;
        this.headerImage = category.headerImage;
        this.cards = category.cards;
        this.slug = category.slug;
        this.video = category.video;
        this.title = category.title;
        this.text = category.text;
      })
      .catch(error => console.error('Error fetching data:', error));
  }
};
</script>