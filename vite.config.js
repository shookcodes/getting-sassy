import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
// import FontAwesomePlugin from "./src/plugins/fontawesome";
// import postcssConfig from "./postcss.config";
export default defineConfig({
  plugins: [vue()],
  // postcss: postcssConfig,
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    include: [
      "vue",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/scss/abstracts/_variables.scss",
  ],
  transformCSS: "default",
  // globalComponents: [FontAwesomeIcon],
});
