<template>
  <div class="scaleAndTranslate">
    <h2 class="title">
      <span class="scale">Scale</span>
      <span class="and">&</span>
      <span class="translate">Translate</span>
      <!-- <span>Let's </span> <span>get</span> -->
    </h2>
  </div>
</template>

<script setup>
import PepperoniPizza from "@/components/PepperoniPizza.vue";
import Button from "@/components/Button.vue";
// import Button from "./Button";
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
    animation: scaleIn 1s ease-in-out forwards 2s;
  }

  .and {
    opacity: 0;
    animation: fadeIn 0.5s linear forwards 3s;
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
</style>
