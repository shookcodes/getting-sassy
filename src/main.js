import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fontAwesomeLib } from "./utils/fontawesome";

// Add your FontAwesome icons to the library
fontAwesomeLib();

// Create your Vue app instance
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component("FontAwesomeIcon", FontAwesomeIcon);

// Mount your app to the DOM

app.mount("#app");
// Register FontawesomePlugin as a plugin
// app.use(FontawesomePlugin);
