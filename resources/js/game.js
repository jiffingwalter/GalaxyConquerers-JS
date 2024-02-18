import { PrimeEngine } from "./PrimeEngine/PrimeEngine";
let pe = new PrimeEngine();

// Parent game script
// Will handle game initilization, game events, score related functions

let gamePaused = false;

/**
 * Creates and controls player controls/interaction
 */
function controlsEventListener(){
    document.addEventListener("keydown", event=>{
        
        pe.debugPrint(event);

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

/**
 * Creates player object and initalizes player controls
 */
function createPlayer(){
    pe.createObject(new Player,50,50);
}
