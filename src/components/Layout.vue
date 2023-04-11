<template>
  <main>
    <div class="page">
      <div class="buttons">
        <button
          v-if="route.path !== '/'"
          class="nav-button prev-button"
          @click="(value) => handlePrevClick(value)">
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" class="sass-icon" />
          <span class="sr-only">Go to previous</span>
        </button>
        <button
          v-if="route.path !== '/' && currentIndex < views.length - 1"
          class="nav-button next-button"
          @click="(value) => handleNextClick(value)">
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="sass-icon" />
          <span class="sr-only">Go to next</span>
        </button>
      </div>
      <div class="layout">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
import views from "./views";
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const props = defineProps({
  currentIndex: Number,
});

const route = useRoute();

const emit = defineEmits({
  "update-index": (index) => typeof index === "number",
});

const handlePrevClick = (value) => {
  emit("update-index", props.currentIndex - 1);
};

const handleNextClick = (value) => {
  emit("update-index", props.currentIndex + 1);
};

function setLocalhostCookie(name, value, daysToExpire) {
  let cookie = name + "=" + value + "; domain=localhost;";
  if (daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    cookie += "expires=" + date.toUTCString() + ";";
  }

  document.cookie = cookie;
}

const routeWatch = watch(() => {
  const newCookie = setLocalhostCookie("currentIndex", props.currentIndex, 7);
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
  max-width: 1280px;
}

.page {
  display: flex;
  position: relative;
  max-width: 1440px;
}

.buttons {
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-self: center;
  border: none;
  color: $sassy;
  font-size: 3rem;

  right: 0;
  left: 0;
  height: max-content;
  width: 95vw;
  margin: auto;
  max-width: 1620px;

  background: transparent;

  z-index: 10;

  .nav-button {
    border: none;
    color: $sassy;
    font-size: 3rem;
    position: relative;
    height: max-content;
    background: transparent;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    &.prev-button {
      margin-left: 0;
      margin-right: auto;
    }

    &.next-button {
      margin-right: 0;
      margin-left: auto;
    }

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
