<template>
  <div class="basis-1/3 p-4">
    <div class="rounded-md overflow-hidden">
      <img :src="`teams/${team.image}`" :alt="team.name" />
    </div>
    <div class="mt-2">
      <h4 class="font-medium text-lg">{{ team.name }}</h4>
      <p>{{ team.position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: ["team"],
};
</script>
