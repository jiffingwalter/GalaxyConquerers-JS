// nonstatic object generic - parent of objects that might have interactivitiy, eg. health, collision, response to different events
import { objectGeneric } from "../objectGeneric.js"
export class objectNonstatic extends objectGeneric{
    _hp = Number;
    constructor(){
        super();
    }
}