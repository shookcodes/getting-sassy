import { library } from "@fortawesome/fontawesome-svg-core";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faXmark, faRightLong } from "@fortawesome/free-solid-svg-icons";

console.log("LIB", library);

export const fontAwesomeLib = () =>
  library.add(
    // Solid
    faXmark,
    faRightLong,

    //Brands
    faSass
  );
