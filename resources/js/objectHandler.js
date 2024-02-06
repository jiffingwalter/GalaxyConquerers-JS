// Script for handling object placement in the game window

/** 
 * Creates a specified game object at the given x and y coordinates.
 * Declares HTML elements and respective classes & ID
 * @param {*} type 
 * @param {number} x coordinate
 * @param {number} y coordinate
 * @return New object's unique ID
 */
function createObject(object,x,y){
    let newElement = document.createElement('object');
    newElement.ID = object.id;
    return object.id;
}

/**
 * Returns a game object
 * @param {string} id 
 * @returns Game object
 */
function getObject(id){
    return null;
}
// delete an object
