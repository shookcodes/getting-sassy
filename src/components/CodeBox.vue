<template>
  <div class="codebox">
    <div class="code">
      .pizza {
      <pre
        contenteditable="true"
        ref="editablePre"><slot name="code" @input="(e) => handleUserInput(e)"/></pre>
      }
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const editablePre = ref(null);
const handleUserInput = (event) => {
  const value = event.target.innerText;
  console.log("user input", value);
};

onMounted(() => {
  editablePre.value.addEventListener("keyup", handleUserInput);
});
</script>

<style lang="scss" scoped>
.codebox {
  width: 100%;
  height: 100%;
  text-align: left;
  background: #423f45;
  flex-grow: 1;
  color: white;
  z-index: 40;

  @media screen and (min-width: 768px) {
    height: 70vh;
    width: 80%;
  }
}

.code {
  flex: 1;
  margin-right: 20px;
  width: 100%;
  height: 100%;
}

pre {
  height: 100%;
  padding: 0.5rem;
}

.demo {
  flex: 1;
}
</style>
