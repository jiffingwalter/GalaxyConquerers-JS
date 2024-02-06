// Topmost game object
export class Generic{
    id = "";
    sprite = "";
    element = null;

    constructor(){
        this.id = typeof(this) + genID();
    }

    /** 
     * Generates a unique 10 digit id for an object automatically on creation 
     * @returns number
     */
    genID(){
        return Math.random() * 10;
    }
    get id(){
        return this._id;
    }

    set sprite(sprite){
        this.sprite = sprite;
    }
    get sprite(){
        return this._sprite;
    }

    /**
     * Assigns game object element variable to it's respective HTML element
     * @returns HTMLElement
     */
    bindElement(){
        this.element = document.getElementById(this.id);
    }
}