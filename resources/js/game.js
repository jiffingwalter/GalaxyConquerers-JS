import { PrimeEngine as pe, ObjectPalette as palette, globals } from "./PrimeEngine/PrimeEngine.js";

// Parent game script
// Will handle game initilization, game events, score related functions

function main(){
    pe.initalizeGame();
    pe.runTickManager();
}

/** Initialization of the game */
