import { createRouter, createWebHistory } from "vue-router";
import Intro from "./components/views/Intro.vue";
import ScaleAndTranslate from "./components/views/ScaleAndTranslate.vue";

const routes = [
  {
    path: "/",
    name: "Intro",
    component: Intro,
    // component: () => import("./components/views/Intro.vue"),
  },
  {
    path: "/scale-and-translate",
    name: "Scale And Translate",
    component: ScaleAndTranslate,
    // component: () => import("./components/views/ScaleAndTranslate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
