<template>
  <div class="p-4 md:p-10 lg:px-32">
    <h1 class="lg:text-center lg:px-72 text-3xl font-bold">
      <span class="text-kiriminaja">Memberi solusi teknologi</span> untuk
      kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia
      berkembang.
    </h1>
    <p class="lg:text-center mt-4 text-lg">
      Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat Indonesia.
    </p>
    <div class="mx-auto w-fit mt-6 rounded-md overflow-hidden">
      <img src="@/assets/images/team-image.jpg" alt="Team Image" class="" />
    </div>
    <div class="mt-8">
      <h3 class="font-bold text-3xl text-center">Our Teams</h3>
      <div class="flex flex-wrap">
        <Team v-for="(team, index) in teams" :key="index" :team="team" />
      </div>
    </div>
  </div>
</template>

<script>
import Team from "~/components/Team.vue";
export default {
  name: "AboutPage",
  computed: {
    teams() {
      return this.$store.state.team.teams;
    },
  },
  async mounted() {
    await this.$store.dispatch("team/getTeams");
    console.log(this.teams);
  },
};
</script>
