<template>
  <div class="rounded-lg bg-white border-2 p-6 flex flex-col gap-y-3">
    <slot />
    <div>
      <h6 class="text-lg font-medium mb-1">{{ title }}</h6>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAPI",
  props: ["title", "description"],
};
</script>
