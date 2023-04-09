<template>
  <div class="intro">
    <h2 class="title">
      Scale & Translate
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

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
}

.title {
  font-size: 3rem;
  position: fixed;
  display: flex;
  align-items: center;
  border: 2px solid green;
  gap: 1rem;
  overflow: visible;
}
</style>
