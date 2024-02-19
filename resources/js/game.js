import { PrimeEngine } from "./PrimeEngine/PrimeEngine.js";
let pe = new PrimeEngine();

// Parent game script
// Will handle game initilization, game events, score related functions

let gamePaused = false;
initalizeGame();

function initalizeGame(){
    pe.debugPrint('initalizing game...');

    // create player object and initalize controls
    let player = pe.createPlayer();
    pe.debugDumpObject(player);
    createControlsEventListener();


    // FUNCTIONS --------------------------------------------------------------------------------------
    /**
     * Creates and controls player controls/interaction
     */
    function createControlsEventListener(){
        document.addEventListener("keydown", event=>{
            if (event.key.startsWith("Arrow") && !gamePaused){
                event.preventDefault();
                switch(event.key){
                    case "ArrowLeft":
                        player.x -= player.speed;
                        break;
                    case "ArrowRight":
                        player.x += player.speed;
                        break;
                }
                console.log(player.getElementPosition());
            }
        });
    }
}