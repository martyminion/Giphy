import { css } from "@giphy/js-brand";

import { VanillaJSGrid } from "./grid";


const gridTarget = document.getElementById("grid")!;


if (gridTarget) new VanillaJSGrid(gridTarget);
