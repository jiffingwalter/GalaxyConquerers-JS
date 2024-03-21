import { globals } from "./globals.js";
import { GameWindowController } from "./controllers/GameWindowController.js";
import { ObjectController } from "./controllers/ObjectController.js";

// core Primordial Engine functionality
export class PrimeEngineCore{
    gameWindow = GameWindowController.getWindowNode();

    // DEBUG ---------------------------------------------------------------------------------------------------------------------
    debug = {
        /**
         * Takes any input, checks if debug is currently enabled and prints contents to console if so
         * @param {*} input 
         */
        print(input){
            if (globals.debug){
                console.log('DEBUG: ' + input);
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
        let newElement = document.createElement('object');
        newElement.id = object.id;
        object.bindElement(newElement);
        this.gameWindow.append(newElement);
        object.x = x;
        object.y = y;
        object.r = 0;

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
}
// exports
export let PrimeEngine = new PrimeEngineCore();
export let ObjectPallet = ObjectController.ObjectPallet;