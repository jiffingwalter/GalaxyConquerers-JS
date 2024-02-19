// Topmost game object
export class objectGeneric{
    // technical values
    _id = String;
    _sprite = String;
    _element = HTMLObjectElement;
    _class = String;
    _x = Number;
    _y = Number;
    _r = Number; // rotation

    // attribute values
    _speed = Number;
    _allowVerticalMovement = Boolean;
    _allowHorizontalMovement = Boolean;

    constructor(){
        this._id = typeof(this) + this.genID();
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
        return this._id;
    }

    set sprite(sprite){
        this._sprite = sprite;
    }
    get sprite(){
        return this._sprite;
    }

    // ELEMENT HANDLING ----------------------------------------------------------------------------
    /**
     * Assigns game object element variable to it's respective HTML element
     * @returns HTMLElement
     */
    bindElement(htmlElement){
        this._element = htmlElement;
        return this._element;
    }
    get element(){
        return this._element;
    }
    /** Returns an object's element coordinates and rotation */ 
    getElementPosition(){ 
        return{
            'x':this._element.style.left,
            'y':this._element.style.top,
            'r':this._r
        };
    }
    // POSITIONING AND MOVEMENT ----------------------------------------------------------------------------
    get x(){
        return this._x;
    }
    set x(x){
        this.element.style.left = `${x}px`;
        this._x = x;
    }
    get y(){
        return this._y;
    }
    set y(y){
        this.element.style.top = `${y}px`;
        this._y = y;
    }

    // DEBUG ------------------------------------------------------------------------------------------------
    /**
     * Returns a JavaScript object with current values of a game object
     */
    dumpThis(){
        return Object.entries(this);
    }
}