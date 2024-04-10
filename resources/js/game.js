import { PrimeEngine as pe, ObjectPallet as pallet } from "./PrimeEngine/PrimeEngine.js";
import { globals } from "./PrimeEngine/globals.js";

// Parent game script
// Will handle game initilization, game events, score related functions


initalizeGame();

function initalizeGame(){
    pe.debug.print('initalizing game...');
    globals.gameState = "running";

    // create player object and initalize controls
    let player = createPlayer();
    //pe.debug.dumpObject(player);
    createControlsEventListener();

    // FUNCTIONS --------------------------------------------------------------------------------------
    /**
     * Creates a new player object
     * @returns newly created player object
     */
    function createPlayer(){
        let newPlayer = pe.createObject(new pallet.generic.Player,400,800);
        return newPlayer;
    }
    
    /**
     * Creates and controls player controls/interaction
     */
    function createControlsEventListener(){
        document.addEventListener("keydown", event=>{
            /* Player directional controls */
            if (globals.gameState == "running"){
                event.preventDefault();
                if(player.allowHorizontalMovement){
                    switch(event.key.toLowerCase()){
                        case globals.controls.MOVE_LEFT:
                            player.x -= player.speed;
                            break;
                        case globals.controls.MOVE_RIGHT:
                            player.x += player.speed;
                            break;
                    }
                }
                if(player.allowVerticalMovement){
                    switch(event.key.toLowerCase()){
                        case globals.controls.MOVE_UP:
                            player.y -= player.speed;
                            break;
                        case globals.controls.MOVE_DOWN:
                            player.y += player.speed;
                            break;
                    }
                }
                // debug
                pe.debug.print(`captured: ${event.key}`,'input');
            }
            //console.log(event);
            /* Menu controls */
            // menu controls go here!
        });
    }
}