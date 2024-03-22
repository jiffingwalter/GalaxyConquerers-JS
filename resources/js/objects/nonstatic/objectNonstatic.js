// nonstatic object generic - parent of objects that might have interactivitiy, eg. health, collision, response to different events
import { GameObjectGeneric } from "../GameObjectGeneric.js"
export class ObjectNonstatic extends GameObjectGeneric{
    _hp = Number;
    
    constructor(){
        super();
    }

    // ATTRIBUTES -------------------------------------------------------------------------------------
    set hp(num){
        this._hp = num;
    }
    get hp(){
        return this._hp;
    }

    // FLAGS -------------------------------------------------------------------------------------

    // MOVEMENT -------------------------------------------------------------------------------------

    // ACTIONS -------------------------------------------------------------------------------------
    // functions to be called on specific events for an object
    action = {
        /** Create a projectile pointed at an angle  */
        createProjectile:(projectile,angle,velocity)=>{

        },
    }
}