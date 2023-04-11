import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fontAwesomeLib } from "./utils/fontawesome";
import router from "./router";

fontAwesomeLib();

// Create Vue app instance
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component("FontAwesomeIcon", FontAwesomeIcon);

// register router for use
app.use(router);

// Mount your app to the DOM
app.mount("#app");
