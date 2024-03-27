import { PrimeEngine as pe } from "../PrimeEngine/PrimeEngine.js";

// Topmost game object
export class GameObjectGeneric{
    // technical values
    _id = String; // Unique identifier for the object
    _sprite = String; // Sprite name of object (optional)
    _element = HTMLObjectElement; // HTML element of the object
    _offset = Object; // Offset origin of the object's HTML element
    _classes = Array; // CSS classes to be applied (optional)
    _x = Number; // width positon
    _y = Number; // height position
    _r = Number; // rotation

    // attribute values
    _speed = Number;

    // flags 
    _allowVerticalMovement = Boolean;
    _allowHorizontalMovement = Boolean;
    _restrictToScreen = Boolean;
    _originIsCentered = Boolean;

    constructor(){
        this._id = typeof(this) + this.genID();
        this._offset = {'x':0,'y':0};
        let newElement = document.createElement('object');
        newElement.id = this.id;
        this.bindElement(newElement);
    }

    // GENERIC ---------------------------------------------------------------------------------------
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

    // ATTRIBUTES -------------------------------------------------------------------------------------
    set speed(num){
        this._speed = num;
    }
    get speed(){
        return this._speed;
    }

    // ELEMENT HANDLING --------------------------------------------------------------------------------
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
    set x(xIn){
        xIn += this._offset.x; // adjust coordinate for offset
        // if restrictToScreen flag is true and the new coordinate is outside the window, return and do not allow the coordinate update
        if (this.restrictToScreen && pe.isCoordinateOffScreen(x,this._element.clientWidth)){
            return false;
        }
        this._element.style.left = `${xIn}px`;
        this._x = xIn;
        return true;
    }
    get y(){
        return this._y;
    }
    set y(yIn){
        yIn += this._offset.y; // adjust coordinate for offset
        // if restrictToScreen flag is true and the new coordinate is outside the window, return and do not allow the coordinate update
        if (this.restrictToScreen && pe.isCoordinateOffScreen(y,this.element.clientHeight)){
            return false;
        }
        this._element.style.top = `${yIn}px`;
        this._y = yIn;
        return true;
    }
    /**
     * Sets the object's offset (or origin). If nothing provided and originIsCentered is true, origin is automatically set to center
     * @param {Object} coords New coordinates in JS format
     * @returns {Object} Newly set offset coordinates
     */
    set offset(coords){
        if (this._originIsCentered){
            this._offset.x = (this._element.clientWidth / 2) * -1;
            this._offset.y = (this._element.clientHeight / 2) * -1;
        } else {
            this._offset.x = coords.x * -1;
            this._offset.y = coords.y * -1;
        }
        return this._offset;
    }
    get offset(){
        return this._offset;
    }

    // DEBUG ------------------------------------------------------------------------------------------------
    /**
     * Returns a JavaScript object with current values of a game object
     */
    dumpThis(){
        return Object.entries(this);
    }

    // FLAGS ------------------------------------------------------------------------------------------------
    // return themselves after setting new values, for logging/debug purposes
    /** Can this object move horizontally? */
    set allowHorizontalMovement(bool){
        this._allowHorizontalMovement = bool;
        return this._allowHorizontalMovement;
    }
    get allowHorizontalMovement(){
        return this._allowHorizontalMovement;
    }
    /** Can this object move vertically? */
    set allowVerticalMovement(bool){
        this._allowVerticalMovement = bool;
        return this._allowVerticalMovement;
    }
    get allowVerticalMovement(){
        return this._allowVerticalMovement;
    }
    /** Can this object move beyond the game window? */
    set restrictToScreen(bool){
        this.restrictToScreen = bool;
        return this._restrictToScreen;
    }
    get restrictToScreen(){
        return this._restrictToScreen;
    }
    /** Is this object's origin in the center? Sets to center if true */
    set originIsCentered(bool){
        this._originIsCentered = bool;
        if (bool == true){
            this._offset = null; // force origin update
        }
        return this.originIsCentered;
    }
    get originIsCentered(){
        return this._restrictToScreen;
    }
    // FUNCTIONS -------------------------------------------------------------------------------------------------
    // general functions area - likely flag implementations
    
}