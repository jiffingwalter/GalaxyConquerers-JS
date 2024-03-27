import { ObjectNonstatic } from '../ObjectNonstatic.js';
export class Player extends ObjectNonstatic{

    constructor(){
        super();
        this.hp = 100;
        this.speed = 50;
        this.allowHorizontalMovement = true;
        this.allowVerticalMovement = false;
        this.originIsCentered = true;
    }
    
    // ATTRIBUTES -------------------------------------------------------------------------------------
    
    // FLAGS -------------------------------------------------------------------------------------

    // MOVEMENT -------------------------------------------------------------------------------------

    // ACTIONS -------------------------------------------------------------------------------------
}