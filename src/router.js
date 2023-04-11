import { createRouter, createWebHistory } from "vue-router";
import Intro from "./components/views/Intro.vue";
import TransitionAndTransform from "./components/views/TransitionAndTransform.vue";
import Positioning from "./components/views/Positioning.vue";
import BeforeAndAfter from "./components/views/BeforeAndAfter.vue";
const routes = [
  {
    path: "/",
    name: "Intro",
    component: Intro,
    // component: () => import("./components/views/Intro.vue"),
  },
  {
    path: "/transition-and-transform",
    name: "Transition and Transform",
    component: TransitionAndTransform,
    // component: () => import("./components/views/TransitionAndTransform.vue"),
  },
  {
    path: "/positioning",
    name: "Positioning",
    component: Positioning,
    // component: () => import("./components/views/TransitionAndTransform.vue"),
  },
  {
    path: "/before-and-after",
    name: "Before and After",
    component: BeforeAndAfter,
    // component: () => import("./components/views/TransitionAndTransform.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
