import { TET } from "./TET.js";
import { RIZ } from "./RIZ.js";
import { LEGO_FIX } from "./LEGO_FIX.js";

export function TETRIZ(x,y,z){

    const lego = LEGO_FIX(x);

    const forward = TET(y);
    const backward = RIZ(z);

    return {
        x,
        y,
        z,
        lego,
        forward,
        backward,
        formula: "(x(TET(y(RIZ(z(LEGO(x))x)RIZ)y)z))"
    };
}
