<template>
  <button
    class="py-2 px-4 bg-kiriminaja hover:bg-kiriminaja-darker text-white rounded-full shadow-sm"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["label"],
};
</script>
