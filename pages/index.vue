<template>
  <div class="py-24 px-32">
    <SsrCarousel
      v-model="currentBanner"
      :autoplay-delay="3"
      loop
      center
      show-dots
    >
      <template>
        <slide :index="0">
          <Banner :index="0" :banner="banners[0]"></Banner>
        </slide>
        <slide :index="1">
          <Banner :index="1" :banner="banners[1]"></Banner>
        </slide>
      </template>
    </SsrCarousel>

    <div class="shadow-md p-6 my-16 rounded-lg flex justify-between">
      <div class="flex flex-col gap-y-2">
        <label for="">Form <span class="text-red-500">*</span></label>
        <p class="cursor-pointer text-gray-400 font-medium">Kelurahan Asal</p>
      </div>
      <div
        class="px-4 border-l border-dashed border-gray-400 flex flex-col gap-y-2"
      >
        <label for="">Destionation <span class="text-red-500">*</span></label>
        <p class="cursor-pointer text-gray-400 font-medium">Kelurahan Tujuan</p>
      </div>
      <div
        class="px-4 border-l border-dashed border-gray-400 flex flex-col gap-y-2"
      >
        <label for="">Berat (Gram) <span class="text-red-500">*</span></label>
        <input
          v-model="weight"
          class="focus:outline-none"
          type="number"
          name=""
          id=""
        />
      </div>
      <button class="bg-kiriminaja p-4 text-white rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
      </button>
    </div>

    <SsrCarousel
      v-if="logistics.length"
      :autoplay-delay="3"
      :slides-per-page="6"
      loop
    >
      <template>
        <slide v-for="(logistic, index) in logistics" :index="index">
          <div class="w-24">
            <img
              class="object-contain"
              :src="`logistics/${logistic.image}`"
              :alt="logistic.name"
            />
          </div>
        </slide>
      </template>
    </SsrCarousel>

    <div class="my-24 rounded-md shadow-md overflow-hidden">
      <img src="@/assets/images/pesta-pora-new.png" alt="Pesta Pora" />
    </div>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";

export default {
  name: "HomePage",

  components: { SsrCarousel },

  data() {
    return {
      currentBanner: 0,
      weight: 1000,
    };
  },

  computed: {
    banners() {
      return this.$store.state.banner.banners;
    },
    logistics() {
      return this.$store.state.logistic.logistics;
    },
  },

  async mounted() {
    await this.$store.dispatch("banner/getBanners");
    await this.$store.dispatch("logistic/getLogistics");
  },
};
</script>
