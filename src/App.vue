<template>
  <router-view>
    <Layout :current-index="currentIndex" :onUpdateIndex="(value) => setCurrentIndex(value)">
      <TransitionGroup name="views">
        <div v-for="(view, index) in views" :key="index">
          <div class="views" :class="[
            index === currentIndex ? 'active' : 'inactive',
            index === currentIndex ? 'views-enter' : 'views-leave-to',
          ]">
            <component :is="views[currentIndex]" :path="currentPath" :key="currentIndex" :current-index="currentIndex"
              :end-animation="clicked" :onUpdateIndex="(value) => setCurrentIndex(value)" />
          </div>
        </div>
      </TransitionGroup>
    </Layout>
  </router-view>
</template>


<script setup>
import { computed, ref, onMounted, watch, TransitionGroup } from "vue";
import Layout from "./components/Layout.vue";
import views from "./components/views";
import { useRoute, useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  routeChanged: Boolean,
  currentIndex: Number,
});


const routes = router.options.routes;

// get the current index based on the current route's index in the router
const currentIndex = ref(0);

const clicked = ref(false);

const setCurrentIndex = (value) => {
  currentIndex.value = value;


  router.push({
    path: routes[currentIndex.value].path,
  })

};

const currentPath = computed(() => {
  return window.location.pathname;
});



onMounted(() => {
  // if matching route is found, get it's index

  const found = router.options.routes.findIndex((routeItem) => routeItem.path === currentPath.value);


  // set initial current index based on route index; otherwsie default to 0
  if (found) {
    setCurrentIndex(found)
  }
  else {
    setCurrentIndex(0)
  }
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


  &>div {
    width: 100%;
    min-width: 85vw;
    height: 100%;
    min-height: 90vh;
  }
}

.active {
  position: static;
  opacity: 1;
}

.views-enter-active,
.views-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}

.views-enter-from {
  opacity: 0;
  transform: translateX(-200vw);
}

.views-leave-to {
  opacity: 0;
  // height: 0;
  transform: translateX(200vw);
}
</style>
