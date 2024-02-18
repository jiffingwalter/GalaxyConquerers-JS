// Topmost game object
export class objectGeneric{
    id = "";
    sprite = "";
    element = null;

    constructor(){
        this.id = typeof(this) + this.genID();
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
        return this.sprite;
    }

    /**
     * Assigns game object element variable to it's respective HTML element
     * @returns HTMLElement
     */
    bindElement(elementID){
        this.element = document.getElementById(elementID);
        return this.element;
    }
    get element(){
        return this.element;
    }
    setElementX(x){
        this.element.style.left = `{x}px`;
    }
    setElementY(y){
        this.element.style.top = `{y}px`;
    }
    getElementCoords(){
        return{
            'x':this.element.style.left,
            'y':this.element.style.top
        };
    }

    // positioning and movement
    
}