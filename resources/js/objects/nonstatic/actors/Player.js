import { ObjectNonstatic } from '../ObjectNonstatic.js';
import { PrimeEngine as pe } from "../../../PrimeEngine/PrimeEngine.js";

export class Player extends ObjectNonstatic{

    constructor(){
        super();
        // Attributes
        this.hp = 100;
        this.speed = 50;

        // CSS styling
        this.width = 50;
        this.height = 50;

        // Flags
        this.allowHorizontalMovement = true;
        this.allowVerticalMovement = false;
        //this.originIsCentered = true;
        
    }
    
    // ATTRIBUTES -------------------------------------------------------------------------------------
    
    // FLAGS -------------------------------------------------------------------------------------

    // MOVEMENT -------------------------------------------------------------------------------------

    // ACTIONS -------------------------------------------------------------------------------------
}