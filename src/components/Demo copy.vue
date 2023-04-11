<template>
    <div class="demo-with-code">
        <div class="display">
            <PizzaSlice class="pizza pizzaDefault" />
        </div>
        <!-- <CodeBox :styles="stylesArr" @update-styles="handleUpdateStyles" /> -->
        <CodeBox>

            {{ code }}


        </CodeBox>
    </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import CodeBox from "./CodeBox.vue";
import PizzaSlice from "./PizzaSlice.vue";

const props = defineProps({
    code: String,
});

const stylesArr = ref(props.code || [{ color: `pink` }]);

const pizzaStyles = ref(null);
const pizzaRef = ref(null);
const handleUpdateStyles = (styles) => {
    console.log("hand update demo", styles);
    pizzaStyles.value = styles;
};

onMounted(() => {
    pizzaRef.value = document.querySelector(".pizza");
    console.log(
        "piz",
        pizzaRef.value,
        "\n classes",
        pizzaClasses.value,
        "\n ARR from DEM",
        stylesArr.value
    );
});

const pizzaClasses = computed(() => {
    console.log("CLAS", pizzaStyles.value);
    return pizzaStyles.value ? pizzaStyles.value : [];
});
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.demo-with-code {
    width: 100%;
    height: 100%;
    border: 5px solid pink;
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    .display {
        width: 100%;
        height: 100%;
        display: flex;

        @media screen and (min-width: 768px) {}
    }



    .pizzaDefault {
        width: 20%;
        height: auto;
        // color: $coral;
    }
}
</style>
