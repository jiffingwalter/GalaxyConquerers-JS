import {
    PrimeEngine as pe,
    ObjectPalette as palette,
    globalsObj as globals
} from "./PrimeEngine/PrimeEngine.js";

/** Main game engine function calls and event script - will eventually be where score, object creation, and other similar things happen */
function main(){
    pe.initalizeEngine();

    pe.createPlayer((pe.gameWindow.clientWidth / 2) - 25, pe.gameWindow.clientHeight - 50);
    //pe.debug.dumpGameObject(pe.playerObj);
    pe.createControlsEventListener();
}
main();
