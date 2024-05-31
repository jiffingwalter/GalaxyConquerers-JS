import { globals } from "./globals.js";
import { ObjectController } from "./controllers/ObjectController.js";
import { Renderer } from "./controllers/RendererClass.js";

// core Primordial Engine functionality
export class PrimeEngineCore{
    gameWindow = Element;
    playerObj = null;

    // CORE -----------------------------------------------------------------------------------------------------------------------
    initalizeEngine(){
        this.debug.print('initalizing...','engine');
        Renderer.initialize();
        this.gameWindow = Renderer.getWindowNode();
        globals.engine.on = true;
        globals.gameState.status = "running";
        
        this.engineLoop();

        this.debug.print('initialized successfully!','engine');
    }
    async engineLoop(){
        this.debug.print('game loop has begun...','engine');
        let lastTime = 0;
        let tickStep = 0;
        let loopStep = 0;

        // Core engine loop
        while(globals.engine.on){
            // Game status loop
            while(globals.gameState.status == "running"){
                getTick();
                gameloop();
                this.debug.print(testEngineSync(),'engine');
                await this.sleep(1000 / globals.gameState.gameSpeed);
            }
            await this.sleep(1000 / globals.gameState.gameSpeed);
        }

        function getTick(){
            lastTime = globals.time();
            globals.gameState.ticks++;
            tickStep++;
        }

        function gameloop(){
            const delta = globals.time() - lastTime;

            //update gamestate...
            let GameState = "";

            //update render...
            Renderer.updateFrame();

            loopStep++;
        }

        // Ensure main engine functions are keeping in step with each other
        function testEngineSync(){
            if (globals.gameState.ticks == loopStep && globals.gameState.ticks == tickStep){
                return globals.gameState.ticks;
            } else return `OUT OF SYNC on TICK: ${globals.gameState.ticks} ${tickStep} ${loopStep}`;
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
            if (globals.gameState.status == 'running'){
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
    /** Do absolutely nothing (filler for promises) */
    null(){
        return null;
    }
    /** Sleep for a specified amount of time. Defaults to 1000 ms. - AWAIT ONLY */
    sleep(duration = 1000){
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }
    /** Sleep until a condition is tested as true
     * @param condition string name of condition to test for, must exist in globals.cond object - TODO: do this another way
     * @param testSpeed how long to wait inbetween the each test for the condition. Defaults to 1000 milliseconds
     * @param object string name of which globals object to test in. 'cond' by default -  TODO: do this another way
     */
    sleepUntil(condition,testSpeed = 1000,object = 'cond'){
        return new Promise(async (resolve) => {
            if (globals[object][condition] == undefined) resolve();
            while (globals[object][condition] == false){
                console.log('waiting for condition...');
                await this.sleep(testSpeed);
            }
            resolve();
        });
    }
    /** Creates a condition object from an input */
    cond(condtion){
        // take condition statement
        // assign it to the cond globals...
        // return an object with newly created path to globals object {condition name, globals category}
    }
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
            if (globals.debug[type] && globals.debug.enabled){
                switch (typeof input){
                    case 'array':
                        for (let line in input) log(line);
                        break;

                    case 'object':
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