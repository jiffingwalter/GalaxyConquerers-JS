import { objectNonstatic } from './objectNonstatic.js';
export class Player extends objectNonstatic{

    constructor(){
        super();
        this.hp = 100;
        this.speed = 1;
        this.allowVerticalMovement = false;
    }
}