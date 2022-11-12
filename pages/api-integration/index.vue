<template>
  <div>
    <div class="bg-gray-100 py-16 px-32">
      <div class="mb-16">
        <h1 class="text-3xl font-medium text-center">
          Modern REST API's, Simply Delivered
        </h1>
        <p class="text-xl text-center">
          Kami menggunakan teknologi REST API terbaru yang lebih mudah
          dimengerti oleh developer ber skala kecil
        </p>
      </div>

      <div class="flex flex-wrap">
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Ongkos Kirim Up to Date"
            description="Ongkos kirim langsung dari ekspedisi, tanpa perubahan"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-yellow-500 bg-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
                  ></path>
                  <polyline points="13 14 11 18 14 18 12 22"></polyline>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Pickup & Dropoff"
            description="Tentukan dan pilih opsi pengiriman dropoff dan pickup"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-green-500 bg-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6"
                  ></path>
                  <path d="M18 4l3 3l-3 3"></path>
                  <path d="M3 7h5l7 10h6"></path>
                  <path d="M18 20l3 -3l-3 -3"></path>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="AWB Terpusat"
            description="Gak perlu pusing menunggu dapet AWB, kami yang antrikan"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-red-500 bg-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="4.5" cy="9.5" r="1"></circle>
                  <circle cx="9.5" cy="4.5" r="1"></circle>
                  <circle cx="9.5" cy="14.5" r="1"></circle>
                  <circle cx="4.5" cy="19.5" r="1"></circle>
                  <circle cx="14.5" cy="9.5" r="1"></circle>
                  <circle cx="19.5" cy="4.5" r="1"></circle>
                  <circle cx="14.5" cy="19.5" r="1"></circle>
                  <circle cx="19.5" cy="14.5" r="1"></circle>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Tracking Satu Pintu"
            description="Hasil ekspedisi kami buat dengan satu konsep penyajian"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-indigo-500 bg-indigo-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="18" r="2"></circle>
                  <circle cx="7" cy="6" r="2"></circle>
                  <circle cx="17" cy="6" r="2"></circle>
                  <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"></path>
                  <line x1="12" y1="12" x2="12" y2="16"></line>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Jangkauan Terluas"
            description="Selalu terbuka untuk seluruh area origin dan destinasi"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-blue-500 bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
                  <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Selalu Ada"
            description="Kami selalu ada setiap hari tanpa libur"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-pink-500 bg-pink-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-headset"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="13" rx="2" width="4" height="6"></rect>
                  <rect x="16" y="13" rx="2" width="4" height="6"></rect>
                  <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                  <path d="M18 19a6 3 0 0 1 -6 3"></path>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Server Optimal"
            description="Server dapat diakses kapanpun dan dimanapun"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-orange-500 bg-orange-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-armchair-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4"></path>
                  <path
                    d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2"
                  ></path>
                  <path d="M8 12h8"></path>
                  <path d="M7 19v2"></path>
                  <path d="M17 19v2"></path>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
        <div class="flex-1 basis-1/4 p-2">
          <CardAPI
            title="Tim teknis friendly"
            description="Ngga perlu worry untuk bertanya tentang teknis"
          >
            <template>
              <div
                class="inline-flex p-2 bg-opacity-25 rounded-full w-10 h-10 text-cyan-500 bg-cyan-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-heart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                  ></path>
                </svg>
              </div>
            </template>
          </CardAPI>
        </div>
      </div>
    </div>
    <div class="px-32 py-16">
      <div class="mb-16">
        <h1 class="text-3xl font-medium text-center">Dipercaya oleh</h1>
        <p class="text-xl text-center">
          KirimiAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan
          UMKM di seluruh Indonesia
        </p>
      </div>

      <div v-if="clients.length" class="flex justify-center flex-wrap">
        <div
          v-for="client in clients"
          class="shrink-0 grow-0 basis-1/6 py-1 px-2"
        >
          <div
            class="h-10 bg-contain bg-no-repeat bg-center min-h-[50px]"
            :style="{
              backgroundImage:
                client.name === 'Blanja24'
                  ? `url('https://kiriminaja.com/assets/home-2/${client.image}'`
                  : `url('https://kiriminaja.com/assets/atrust/${client.image}')`,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAPI from "~/components/CardAPI.vue";

export default {
  name: "APIPage",
  components: { CardAPI },
  computed: {
    clients() {
      return this.$store.state.client.clients;
    },
  },
  async mounted() {
    await this.$store.dispatch("client/getClients");
  },
};
</script>
