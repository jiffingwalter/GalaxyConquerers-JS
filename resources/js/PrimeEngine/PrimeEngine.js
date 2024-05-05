import { globals } from "./globals.js";
import { GameWindowController } from "./controllers/GameWindowController.js";
import { ObjectController } from "./controllers/ObjectController.js";

// core Primordial Engine functionality
export class PrimeEngineCore{
    gameWindow = GameWindowController.getWindowNode();

    // CORE -----------------------------------------------------------------------------------------------------------------------
    /** Initialize game  */
    initalizeGame(){
        this.debug.print('initalizing game...');
        globals.gameState = "running";
    
        // create player object and initalize controls
        let player = createPlayer(400,800);
        //pe.debug.dumpObject(player);
        createControlsEventListener();
    }
    /** Begin tick manager for updating game window and events */
    runTickManager(){
        let ticks = 0;
        let frames = 0;
        let delta = 0;

        while(globals.gameState == "running"){
            
        }

        function tick(){
            ticks++;
        }
    }
    /**
     * Creates a new player object
     * @returns newly created player object
     */
    createPlayer(x,y){
        let newPlayer = pe.createObject(new palette.generic.Player,x,y);
        return newPlayer;
    }
    
    /**
     * Creates and controls player controls/interaction
     */
    createControlsEventListener(){
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
    // OBJECT HANDLING --------------------------------------------------------------------------------------------------------------
    /** 
     * Creates a specified game object in the game world at the given x and y coordinates.
     * Declares HTML elements and respective classes & ID
     * @param {GameObjectGeneric} object type of game object
     * @param {number} x coordinate
     * @param {number} y coordinate
     * @return Newly created object
     */
    createObject(object,x,y){
        object.x = x;
        object.y = y;
        object.r = 0;
        
        this.gameWindow.append(object.element);
        ObjectController.add(object);
        
        return object;
    }

    /**
     * Returns a game object from global object list
     * @param {string} id of object to query for
     * @returns Game object
     */
    getObject(id){
        return ObjectController.get(id);
    }

    /**
     * Deletes a game object
     * @param {string} id of object to delete
     * @returns boolean if successful
     */
    deleteObject(id){
        return ObjectController.delete(id);
    }

    // UTILITY -------------------------------------------------------------------------------------
    /**
     * Tests if a coordinate is outside the game window
     * @param {Number} coord - A coordinate to test
     * @param {Number} gridBuffer - Optional, a buffer number for game objects with offset origins. Adds this number to the check of coordinates
     * beyond the window size
     * @returns boolean
     */
    isCoordinateOffScreen(coord,gridBuffer = 0){
        let screen = {
            'width':this.gameWindow.clientWidth,
            'height':this.gameWindow.clientHeight
        }
        // is the coordinate outside the game window width and/or height?
        return (coord < 0 || coord + gridBuffer > screen.width) && (coord < 0 || coord + gridBuffer > screen.height);
    }
    
    // DEBUG ---------------------------------------------------------------------------------------------------------------------
    debug = {
        /**
         * Default debug print. Takes any input, checks if debug is currently enabled and prints contents to console if so
         * @param {*} input 
         */
        print(input,type = 'generic'){
            if (globals.debug[type]){
                console.log(`DEBUG[${type.toUpperCase()}]: ${input}`);
            }
        },
        /** Prints a dump of all of an object's keys and values to the debug console */
        dumpObject(object){
            if (globals.debug){
                let objectKeys = Object.keys(object);
                let objectValues = Object.values(object);
    
                objectKeys.map((element,index)=>{
                    this.print(`${element} = ${objectValues[index]}`);
                });
            }
        },
    }
}

// exports
export let PrimeEngine = new PrimeEngineCore();
export let ObjectPalette = ObjectController.ObjectPalette;
export let globals = globals;