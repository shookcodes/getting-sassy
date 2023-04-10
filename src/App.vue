<template>
  <router-view>
    <Layout
      :current-index="currentIndex"
      :onUpdateIndex="(value) => setCurrentIndex(value)">
      <TransitionGroup name="views">
        <div v-for="(view, index) in views" :key="index">
          <div
            class="views"
            :class="[
              index === currentIndex ? 'active' : 'inactive',
              index === currentIndex ? 'views-enter' : 'views-leave-to',
            ]">
            <component
              :is="view"
              :key="currentIndex"
              :current-index="currentIndex"
              :end-animation="clicked"
              :onUpdateIndex="(value) => setCurrentIndex(value)" />
          </div>
        </div>
      </TransitionGroup>
    </Layout>
  </router-view>
</template>

<script setup>
import { ref, onMounted, watch, TransitionGroup } from "vue";
import Layout from "./components/Layout.vue";
import views from "./components/views";
const props = defineProps({
  routeChanged: Boolean,
  currentIndex: Number,
});

const currentIndex = ref(0);

const clicked = ref(false);

const setCurrentIndex = (value) => {
  currentIndex.value = value;
};
onMounted(() => {
  // if clicked is true then the view's animations will end
  document.addEventListener("click", () => {
    clicked.value = true;
  });
});
</script>

<style scoped lang="scss">
.views {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all 0.5s ease;
}

.active {
  position: static;
  opacity: 1;
  transform: none;
}

.views-enter-active,
.views-leave-active {
  transition: all 0.5s ease;
}
.views-enter-from,
.views-leave-to {
  opacity: 0;
  // height: 0;
  transform: translateX(200vw);
}

.views-enter-active,
.views-leave-active {
  transition: all 0.5s ease;
}
</style>
