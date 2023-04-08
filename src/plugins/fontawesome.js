import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // eslint-disable-line
import { fontAwesomeLib } from "../utils/fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

// You can add your icons directly in this plugin, but we use our library utility to only add the icons we'll actually use
fontAwesomeLib();

export default {
  install(app) {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
  },
};
