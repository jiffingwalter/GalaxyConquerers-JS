import { globals } from "./globals.js";

// core Primordial Engine functionality
export class PrimeEngine{
    // GENERAL ---------------------------------------------------------------------------------------------------------------------
    /**
     * Takes any input, checks if debug is currently enabled and prints contents to console if so
     * @param {*} input 
     */
    debugPrint(input){
        if (globals.debug){
            console.log(input);
        }
    }

    // OBJECT HANDLING --------------------------------------------------------------------------------------------------------------
    /** 
     * Creates a specified game object in the game world at the given x and y coordinates.
     * Declares HTML elements and respective classes & ID
     * @param {objectGeneric} object type of game object
     * @param {number} x coordinate
     * @param {number} y coordinate
     * @return New object's unique ID
     */
    createObject(object,x,y){
        let newElement = document.createElement('object');
        newElement.ID = object.id;
        
        object.bindElement(newElement.ID);
        
        return object.id;
    }

    /**
     * Returns a game object
     * @param {string} id 
     * @returns Game object
     */
    getObject(id){
        // will need to create a script that puts active game objects in a global list to keep track of them and remove them as needed
        return null;
    }

    // delete an object
}