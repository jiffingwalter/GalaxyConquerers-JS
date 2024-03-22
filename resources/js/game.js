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
                        case "a":
                            player.x -= player.speed;
                            break;
                        case "d":
                            player.x += player.speed;
                            break;
                    }
                }
                if(player.allowVerticalMovement){
                    switch(event.key.toLowerCase()){
                        case "w":
                            player.y -= player.speed;
                            break;
                        case "s":
                            player.y += player.speed;
                            break;
                    }
                }
            }
            //console.log(event);
            /* Menu controls */
            // menu controls go here!
        });
    }
}