import { globals, gameWindow } from "./globals.js";
import { Player } from "../objects/nonstatic/Player.js"

// core Primordial Engine functionality
export class PrimeEngine{
    // GENERAL ---------------------------------------------------------------------------------------------------------------------
    /**
     * Takes any input, checks if debug is currently enabled and prints contents to console if so
     * @param {*} input 
     */
    debugPrint(input){
        if (globals.debug){
            console.log('DEBUG: ' + input);
        }
    }

    // OBJECT HANDLING --------------------------------------------------------------------------------------------------------------
    /** 
     * Creates a specified game object in the game world at the given x and y coordinates.
     * Declares HTML elements and respective classes & ID
     * @param {objectGeneric} object type of game object
     * @param {number} x coordinate
     * @param {number} y coordinate
     * @return Newly created object
     */
    createObject(object,x,y){
        let newElement = document.createElement('object');
        newElement.id = object.id;
        object.bindElement(newElement);
        gameWindow.append(newElement);
        object.x = x;
        object.y = y;
        object.r = 0;
        
        return object;
    }

    /**
     * Returns a game object from global object list
     * @param {string} id of object to query for
     * @returns Game object
     */
    getObject(id){
        // will need to create a script that puts active game objects in a global list to keep track of them and remove them as needed
        return null;
    }

    /**
     * Deletes a game object
     * @param {string} id of object to delete
     * @returns boolean if successful
     */
    deleteObject(id){
        return null;
    }

    /**
     * Creates a new player object
     * @returns newly created player object
     */
    createPlayer(){
        let newPlayer = this.createObject(new Player,100,100);
        return newPlayer;
    }

    /**
     * Prints a dump of all of an object's keys and values to the debug console
     */
    debugDumpObject(object){
        if (globals.debug){
            let objectKeys = Object.keys(object);
            let objectValues = Object.values(object);

            objectKeys.map((element,index)=>{
                this.debugPrint(`${element} = ${objectValues[index]}`);
            });
        }
    }
}