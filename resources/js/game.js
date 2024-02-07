// Parent game script
// Will handle game initilization, game events, score related functions
import "./objectHandler.js";
import { PrimeUtils } from "./utility/utilities.js";

let gamePaused = false;

/**
 * Creates and controls player controls/interaction
 */
function controlsEventListener(){
    document.addEventListener("keydown", event=>{
        
        PrimeUtils.debugPrint(event);

        if (event.key.startsWith("Arrow") && !gamePaused){
            event.preventDefault();
            switch(event.key){
                case "ArrowLeft":
                    x -= moveAmount;
                    break;
                case "ArrowRight":
                    x += moveAmount;
                    break;
            }
        }
    });
}
