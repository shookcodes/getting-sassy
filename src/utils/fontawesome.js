import { library } from "@fortawesome/fontawesome-svg-core";
import { faSass } from "@fortawesome/free-brands-svg-icons";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

console.log("SASS", faSass);

export const fontAwesomeLib = () =>
  library.add(
    // Solid
    faSass,
    faXmark
  );
