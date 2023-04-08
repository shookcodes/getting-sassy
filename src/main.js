import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import FontawesomePlugin from "./plugins/fontawesome";

createApp(App).mount("#app");

const app = createApp(App);

app.mount("#app");
// Register FontawesomePlugin as a plugin
app.use(FontawesomePlugin);
