<template>
  <main>
    <div class="page">
      <button
        v-if="currentIndex > 0"
        class="button prev-button"
        @click="emit('update-index', currentIndex - 1)">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" class="sass-icon" />
        <span class="sr-only">Go to previous</span>
      </button>

      <div class="layout">
        <slot />
      </div>
      <button
        v-if="currentIndex > 0 && currentIndex < views.length - 1"
        class="button next-button"
        @click="setCurrentIndex(currentIndex + 1)">
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="sass-icon" />
        <span class="sr-only">Go to next</span>
      </button>
    </div>
  </main>
</template>

<script setup>
import views from "./views";

const props = defineProps({
  currentIndex: Number,
});

const emit = defineEmits({
  "update-index": (index) => typeof index === "number",
});
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.layout {
  padding: 1rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95vw;
  height: 97vh;
  text-align: center;
  max-width: 1440px;
}

.page {
  display: flex;
}

.button {
  align-self: center;
  border: none;
  color: $sassy;
  font-size: 3rem;
  background: transparent;
  cursor: pointer;
  z-index: 100;

  &:hover {
    opacity: 0.7;
  }
  position: fixed;
  & .prev-button {
    margin-left: 0;
    margin-right: auto;
  }

  & .next-button {
    margin-right: 0;
    margin-left: auto;
  }
}
</style>
