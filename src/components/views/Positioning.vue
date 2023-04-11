<template>
  <div class="scaleAndTranslate">
    <h2 class="title">
      <span class="scale">Scale</span>
      <span class="and">&</span>
      <span class="translate">Translate</span>
    </h2>
    <Demo :code="code" />
  </div>
</template>

<script setup>
import Demo from "@/components/Demo.vue";

const code = `
  .pizza {
      transform: translateX(20vw);
  }`;
</script>

<style scoped lang="scss">
@use "sass:color";
@import "@/styles/_variables.scss";

.scaleAndTranslate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  .title {
    font-size: 3rem;
    display: flex;
    align-items: center;

    gap: 1rem;
    overflow: visible;
  }

  .scale {
    transform: scale(0);
    opacity: 0;
    animation: scaleIn 1.5s ease-in-out forwards 1s;
  }

  .and {
    opacity: 0;
    animation: fadeIn 0.5s linear forwards 1.7s;
  }

  .translate {
    transform: translateX(200vw);
    opacity: 0;
    animation: slideInFromRight 1s linear forwards 2.2s;
  }
}
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  10% {
    opacity: 1;
  }
  60% {
    transform: scale(2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(200vw);
  }
  10% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
    // @include end-slideIn();
  }
}
</style>
