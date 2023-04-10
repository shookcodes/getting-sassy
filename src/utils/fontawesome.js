import { library } from "@fortawesome/fontawesome-svg-core";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";

console.log("LIB", library);

export const fontAwesomeLib = () =>
  library.add(
    // Solid
    faChevronRight,
    faChevronLeft,
    faXmark,
    faRightLong,

    //Brands
    faSass
  );
