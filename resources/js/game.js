import {
    PrimeEngine as pe,
    ObjectPalette as palette,
    globalsObj as globals
} from "./PrimeEngine/PrimeEngine.js";

/** Main game engine function calls and event script - will eventually be where score, object creation, and other similar things happen */
function main(){
    pe.initalize();

    // Start the game
    globals.gameState = "running";
    pe.createPlayer(400,800);
    //pe.debug.dumpObject(pe.player);
    pe.createControlsEventListener();
}
main();
