// TET final — trägt ESSO, ROLLER, KASSE

import { ESSO } from "./ESSO.js";
import { ROLLER } from "./ROLLER.js";
import { KASSE } from "./KASSE.js";

export const TET = {
    run() {
        return [
            ESSO(),
            ROLLER(),
            KASSE()
        ];
    }
};
