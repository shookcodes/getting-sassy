<template>
  <div class="transition-transform">
    <h2 class="title">
      Transitions & Transform
      <!-- <span class="scale">Scale</span>
      <span class="and">&</span>
      <span class="translate">Translate</span> -->
    </h2>
    <Demo>
      <PizzaSlice />
    </Demo>
  </div>
</template>

<script setup>
import Demo from "@/components/Demo.vue";
import PizzaSlice from "@/components/PizzaSlice.vue";

const props = defineProps({
  currentIndex: Number,
});
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";
@import "@/styles/_animations.scss";

.transition-transform {
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  height: max-content;
  text-align: center;
}
</style>
