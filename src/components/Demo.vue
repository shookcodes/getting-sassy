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

// const stylesArr = ref(props.code || [{ color: `pink` }]);

// const pizzaStyles = ref(null);
const pizzaRef = ref(null);

onMounted(() => {
  pizzaRef.value = document.querySelector(".pizza");
});

// const pizzaClasses = computed(() => {
//     console.log("CLAS", pizzaStyles.value);
//     return pizzaStyles.value ? pizzaStyles.value : [];
// });
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .display {
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (min-width: 768px) {
    }
  }
}
</style>
