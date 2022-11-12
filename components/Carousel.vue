<template>
  <div class="lg:px-32">
    <div style="width: 100%; margin: 20px auto; height: 400px">
      <div ref="slider" class="swiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in banners"
            :key="index"
          >
            <Banner :index="index" :banner="banner"></Banner>
          </div>
        </div>
        <!-- If pagination is needed -->
        <div class="swiper-pagination"></div>
        <!-- If navigation buttons are needed -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import { Swiper, Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  name: "Carousel",

  computed: {
    banners() {
      return this.$store.state.banner.banners;
    },
  },

  async mounted() {
    await this.$store.dispatch("banner/getBanners");

    await this.$nextTick();

    const swiper = new Swiper(this.$refs.swiper, {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: false,
      effect: "cards",
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 1500,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
