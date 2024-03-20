// nonstatic object generic - parent of objects that might have interactivitiy, eg. health, collision, response to different events
import { ObjectGeneric } from "../ObjectGeneric.js"
export class ObjectNonstatic extends ObjectGeneric{
    _hp = Number;
    constructor(){
        super();
    }

    // ATTRIBUTES
    set hp(num){
        this._hp = num;
    }
    get hp(){
        return this._hp;
    }

    // FLAGS

    // MOVEMENT
}