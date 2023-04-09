<template>
  <TransitionGroup name="views">
    <div class="view" v-for="(view, index) in views" :key="view">
      <div v-if="index === currentIndex">
        <component
          :is="view"
          :key="index"
          :current-index="currentIndex"
          :end-animation="clicked"
          :onUpdateIndex="(value) => setCurrentIndex(value)" />
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, TransitionGroup } from "vue";
import views from "./components/views";

// current view index
const currentIndex = ref(0);

const clicked = ref(false);

const setCurrentIndex = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  // if clicked is true then the view's animations will end
  document.addEventListener("click", () => {
    clicked.value = true;
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("click", () => {
    clicked.value = true;
  });
});
</script>

<style scoped lang="scss">
@import "./styles/_variables.scss";
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 100%;
  text-align: center;
}

.views-enter-active,
.views-leave-active {
  transition: all 0.5s ease;
}
.views-enter-from,
.views-leave-to {
  opacity: 0;
  transform: translateX(-200vw);
}
</style>
