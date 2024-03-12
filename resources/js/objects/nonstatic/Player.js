import { objectNonstatic } from './objectNonstatic.js';
export class Player extends objectNonstatic{

    constructor(){
        super();
        this.hp = 100;
        this.speed = 50;
        this.allowHorizontalMovement = true;
        this.allowVerticalMovement = false;
    }
}