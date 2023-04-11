<template>
  <div class="demo-with-code">
    <div class="display">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  code: String,
});

const pizzaRef = ref(null);

onMounted(() => {
  pizzaRef.value = document.querySelector(".pizza");
});
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";

.demo-with-code {
  width: 100%;
  height: 100%;
  border: 2px solid $sassy;
  border-radius: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @include sassyShadow();

  .display {
    width: 100%;
    height: 100%;
    display: flex;
    flex-grow: 1;
    // position: relative;
    @media screen and (min-width: 768px) {
    }
  }
}
</style>
