<template>
  <div
    class="py-2 px-4 md:px-10 lg:px-32 flex sticky top-0 justify-between items-center z-50"
    :class="{ 'shadow-md bg-white': !topPosition }"
  >
    <button class="lg:hidden">
      <svg
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <NuxtLink to="/">
      <img
        src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
        width="145px"
        alt="Company Logo"
      />
    </NuxtLink>
    <a href="#" class="lg:hidden no-shadow border-0">
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
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
    </a>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="/">Beranda</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="#">Blog</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="#">Kabar</NuxtLink>
        </li>
        <li>
          <div class="relative">
            <button
              class="hover:opacity-70 relative py-2 px-4 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-4 after:border-t-black after:border-x-transparent after:border-x-4"
              @click="openOtherMenu"
            >
              Lainnya
            </button>
            <div
              v-if="showOtherMenu"
              class="absolute bg-white -left-10 top-full translate-y-4 border p-4 shadow-md rounded-md"
            >
              <ul>
                <li
                  class="group hover:border-kiriminaja border-2 rounded border-transparent"
                >
                  <NuxtLink
                    class="flex items-center gap-x-2 p-2 text-kiriminaja"
                    to="/api-integration"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon d-none d-lg-inline"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                    <div class="min-w-max">
                      <p
                        class="group-hover:text-kiriminaja text-black font-semibold"
                      >
                        Manajemen Order
                      </p>
                      <p class="text-sm text-gray-400">
                        Platform management order dengan multi ekspedisi
                      </p>
                    </div>
                  </NuxtLink>
                </li>
                <li
                  class="group hover:border-kiriminaja border-2 rounded border-transparent"
                >
                  <NuxtLink
                    class="flex items-center gap-x-2 p-2 text-kiriminaja"
                    to="/api-integration"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="icon d-none d-lg-inline"
                    >
                      <circle cx="18" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                      <line x1="6" y1="9" x2="6" y2="21"></line>
                    </svg>
                    <div class="min-w-max">
                      <p
                        class="group-hover:text-kiriminaja text-black font-semibold"
                      >
                        Integrasi API
                      </p>
                      <p class="text-sm text-gray-400">
                        Hubungkan toko online mu dengan kami
                      </p>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="#">Cek Ongkir</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="#">Lacak</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <div class="hidden xl:block w-0.5 h-8 bg-black"></div>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4" to="#">Daftar</NuxtLink>
        </li>
        <li>
          <Button label="Masuk"></Button>
        </li>
      </ul>
    </div>
    <!-- <div class="fixed h-full bg-white w-full">
      <ul class="flex flex-col gap-y-4">
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="/">Beranda</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="#">Blog</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="#">Kabar</NuxtLink>
        </li>
        <li>
          <div class="relative">
            <button
              class="font-medium hover:opacity-70 relative py-2 px-4 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-4 after:border-t-black after:border-x-transparent after:border-x-4"
              @click="openOtherMenu"
            >
              Lainnya
            </button>
            <div v-if="showOtherMenu" class="px-4">
              <ul class="flex flex-col gap-y-2">
                <li>
                  <NuxtLink to="/api-integration" class="font-normal">
                    Management Order
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/api-integration" class="font-normal">
                    Integrasi API
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="#">Cek Ongkir</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="#">Lacak</NuxtLink>
        </li>
        <li class="hover:opacity-70">
          <div class="hidden xl:block w-0.5 h-8 bg-black"></div>
        </li>
        <li class="hover:opacity-70">
          <NuxtLink class="py-2 px-4 font-medium" to="#">Daftar</NuxtLink>
        </li>
        <li>
          <Button label="Masuk"></Button>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Navbar",
  data: () => ({
    topPosition: true,
    showOtherMenu: false,
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      const body = document.body;
      let element = document.documentElement;
      element = element.clientHeight ? element : body;

      this.topPosition = element.scrollTop === 0;
    });
  },
  methods: {
    openOtherMenu() {
      this.showOtherMenu = !this.showOtherMenu;
    },
  },
};
</script>
