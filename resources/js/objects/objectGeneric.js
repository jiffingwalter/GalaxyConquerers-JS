// Topmost game object
export class objectGeneric{
    // technical values
    id = String;
    sprite = String;
    element = HTMLObjectElement;
    class = String;
    x = Number;
    y = Number;
    r = Number; // rotation

    // attribute values
    speed = Number;
    allowVerticalMovement = Boolean;
    allowHorizontalMovement = Boolean;

    constructor(){
        this.id = typeof(this) + this.genID();
    }

    // GENERIC ----------------------------------------------------------------------------
    /** 
     * Generates a unique 10 digit id for an object automatically on creation 
     * @returns number
     */
    genID(){
        return Math.floor(Math.random() * 9999999999);
    }
    get id(){
        return this.id;
    }

    set sprite(sprite){
        this.sprite = sprite;
    }
    get sprite(){
        return this.sprite;
    }

    // ELEMENT HANDLING ----------------------------------------------------------------------------
    /**
     * Assigns game object element variable to it's respective HTML element
     * @returns HTMLElement
     */
    bindElement(htmlElement){
        this.element = htmlElement;
        return this.element;
    }
    get element(){
        return this.element;
    }
    /** Returns an object's element coordinates and rotation */ 
    getElementPosition(){ 
        return{
            'x':this.element.style.left,
            'y':this.element.style.top,
            'r':this.r
        };
    }
    // POSITIONING AND MOVEMENT ----------------------------------------------------------------------------
    get x(){
        return this.x;
    }
    set x(x){
        this.element.style.left = `${x}px`;
        this.x = x;
    }
    get y(){
        return this.y;
    }
    set y(y){
        this.element.style.top = `${y}px`;
        this.y = y;
    }

    // DEBUG ------------------------------------------------------------------------------------------------
    /**
     * Returns a JavaScript object with current values of a game object
     */
    dumpThis(){
        return Object.entries(this);
    }
}