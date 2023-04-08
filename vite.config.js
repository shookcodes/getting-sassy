import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
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
});
