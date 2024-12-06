<template>
  <div>
    <Navbar />
<NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/app/components/Navbar.vue'
import Footer from '~/app/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
};

</script>
