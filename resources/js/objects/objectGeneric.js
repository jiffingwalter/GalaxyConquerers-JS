import { PrimeEngine } from "../PrimeEngine/PrimeEngine.js";
let pe = new PrimeEngine();

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

    // flags 
    _allowVerticalMovement = Boolean;
    _allowHorizontalMovement = Boolean;
    _restrictToScreen = Boolean;

    constructor(){
        this._id = typeof(this) + this.genID();
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
    set x(x){
        if (this.restrictToScreen && pe.isCoordinateOffScreen(x,this.element.clientWidth)){
            // if restrictToScreen flag is true and the new coordinate is outside the window, return and do not allow the coordinate update
            return;
        }
        this.element.style.left = `${x}px`;
        this._x = x;
    }
    get y(){
        return this._y;
    }
    set y(y){
        if (this.restrictToScreen && pe.isCoordinateOffScreen(y,this.element.clientHeight)){
            // if restrictToScreen flag is true and the new coordinate is outside the window, return and do not allow the coordinate update
            return;
        }
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

    // FLAGS ------------------------------------------------------------------------------------------------
    set allowHorizontalMovement(bool){
        this._allowHorizontalMovement = bool;
    }
    get allowHorizontalMovement(){
        return this._allowHorizontalMovement;
    }
    set allowVerticalMovement(bool){
        this._allowVerticalMovement = bool;
    }
    get allowVerticalMovement(){
        return this._allowVerticalMovement;
    }
    set restrictToScreen(bool){
        this.restrictToScreen = bool;
    }
    get restrictToScreen(){
        return this._restrictToScreen;
    }

    // FUNCTIONS -------------------------------------------------------------------------------------------------
    // general functions area - likely flag implementations
}