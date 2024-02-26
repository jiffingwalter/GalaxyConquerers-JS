import { PrimeEngine } from "./PrimeEngine/PrimeEngine.js";
import { Player } from "./objects/nonstatic/Player.js"
let pe = new PrimeEngine();

// Parent game script
// Will handle game initilization, game events, score related functions

let gamePaused = false;
initalizeGame();

function initalizeGame(){
    pe.debug.print('initalizing game...');

    // create player object and initalize controls
    let player = createPlayer();
    pe.debug.dumpObject(player);
    createControlsEventListener();

    // FUNCTIONS --------------------------------------------------------------------------------------
    /**
     * Creates a new player object
     * @returns newly created player object
     */
    function createPlayer(){
        let newPlayer = pe.createObject(new Player,400,800);
        return newPlayer;
    }
    
    /**
     * Creates and controls player controls/interaction
     */
    function createControlsEventListener(){
        document.addEventListener("keydown", event=>{
            /* Player directional controls */
            if (event.key.startsWith("Arrow") && !gamePaused){
                event.preventDefault();
                if(player.allowHorizontalMovement){
                    switch(event.key){
                        case "ArrowLeft":
                            player.x -= player.speed;
                            break;
                        case "ArrowRight":
                            player.x += player.speed;
                            break;
                    }
                }
                if(player.allowVerticalMovement){
                    switch(event.key){
                        case "ArrowUp":
                            player.y -= player.speed;
                            break;
                        case "ArrowDown":
                            player.y += player.speed;
                            break;
                    }
                }
            }
            /* Menu controls */
            // menu controls go here!

        });
    }
}