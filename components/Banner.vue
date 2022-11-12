<template>
  <div class="flex px-12 gap-x-8">
    <div>
      <img :src="`banner/${banner?.image}`" :alt="banner?.title" />
    </div>
    <div class="max-w-xl">
      <div
        class="bg-orange-100 text-orange-600 mb-4 py-2 px-4 rounded-full w-fit"
      >
        #{{ index + 1 }} {{ banner?.type }}
      </div>
      <h1 class="font-bold text-4xl">{{ banner?.title }}</h1>
      <p class="text-xl">{{ banner?.description }}</p>
      <ul v-if="banner" class="flex flex-col gap-y-1 mb-6 mt-4">
        <li
          v-for="benefit in banner.benefit"
          :key="benefit"
          class="flex gap-x-4 items-center"
        >
          <svg
            class="inline"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 58 (84663) - https://sketch.com -->
            <title>Shape</title>
            <desc>Created with Sketch.</desc>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="check" fill="#FF8030" fill-rule="nonzero">
                <path
                  d="M10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 C15.5228475,20 20,15.5228475 20,10 C19.9839811,4.48380139 15.5161986,0.01601893 10,0 Z M8.3333333,14.5116667 L3.82166667,10 L5,8.8216667 L8.3333333,12.155 L15,5.48833333 L16.1783333,6.66666667 L8.3333333,14.5116667 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </svg>
          <span>{{ benefit }}</span>
        </li>
      </ul>
      <Button label="Selengkapnya"></Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Banner",
  props: ["index", "banner"],
};
</script>
