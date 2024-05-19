import { globals } from "./globals.js";
import { GameWindowController } from "./controllers/GameWindowController.js";
import { ObjectController } from "./controllers/ObjectController.js";

// core Primordial Engine functionality
export class PrimeEngineCore{
    gameWindow = GameWindowController.getWindowNode();
    playerObj = null;

    // CORE -----------------------------------------------------------------------------------------------------------------------
    initalizeEngine(){
        this.debug.print('initalizing...');
        globals.gameState.running = true;
        
        this.gameLoopController();
    }
    gameLoopController(){
        this.debug.print('game loop has begun...','engine');
        let lastTime = 0;
        getTick();

        function getTick(){
            lastTime = globals.time();
            globals.gameState.ticks++;
            gameloop();
        }

        function gameloop(){
            console.log(`frame ${globals.gameState.ticks}`);
            const delta = globals.time() - lastTime;

            //update gamestate...


            //update render...


            //wait to request next frame...
            setTimeout(()=>{
                getTick();
            }, 1000 / globals.gameState.gameSpeed);
        }
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

    // Player specific
    /**
     * Spawns a player at given coordinates, if provided
     * @returns newly created player object
     */
    createPlayer(x = 0,y = 0){
        this.playerObj = this.createObject(new ObjectPalette.generic.Player,x,y);
        return this.playerObj;
    }
    
    /**
     * Creates and controls player controls/interaction
     */
    createControlsEventListener(){
        document.addEventListener("keydown", event=>{
            /* Player directional controls */
            if (globals.gameState.running){
                event.preventDefault();
                if(this.playerObj.allowHorizontalMovement){
                    switch(event.key.toLowerCase()){
                        case globals.controls.MOVE_LEFT:
                            this.playerObj.x -= this.playerObj.speed;
                            break;
                        case globals.controls.MOVE_RIGHT:
                            this.playerObj.x += this.playerObj.speed;
                            break;
                    }
                }
                if(this.playerObj.allowVerticalMovement){
                    switch(event.key.toLowerCase()){
                        case globals.controls.MOVE_UP:
                            this.playerObj.y -= this.playerObj.speed;
                            break;
                        case globals.controls.MOVE_DOWN:
                            this.playerObj.y += this.playerObj.speed;
                            break;
                    }
                }
                // debug
                this.debug.print(`captured: ${event.key}`,'input');
            }
            //console.log(event);
            /* Menu controls */
            // menu controls go here!
        });
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
         * Default debug print. Takes any input, checks if debug is currently enabled for the category and prints contents to console if so.
         * @param {*} input 
         * @param {String} type Category of debug. Defaults to generic if none provided.
         */
        print(input,type = 'generic'){
            if (globals.debug[type]){
                switch (typeof input){
                    case 'array':
                        for (let line in input) log(line);
                        break;

                    case 'object':
                        log('dumping object')
                        let line = Object.entries(input);
                        line.map((element)=>{
                            log(`${element[0]} : ${element[1]}`);
                        });
                        break;

                    default:
                        log(input);
                        break;
                }
            }

            function log(line){
                console.log(`DEBUG[${type.toUpperCase()}]: ${line}`);
            }
        },
        /** Prints a dump of all of an object's keys and values to the debug console */
        dumpGameObject(object){
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
export let globalsObj = globals;