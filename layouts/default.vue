<template>
  <div class="min-h-screen relative">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "DefaultLayout",
};
</script>
