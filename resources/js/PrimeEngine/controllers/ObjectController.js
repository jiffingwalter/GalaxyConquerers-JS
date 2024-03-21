import { GameObjectGeneric } from "../../objects/GameObjectGeneric.js";
import { Player } from "../../objects/nonstatic/actors/Player.js";


// OBJECT CONTROLLER - contains the global object list, any active objects in the window will be added to this list
// and will be added and removed as needed
export class ObjectControllerClass{
    globalObjectList = {};
    get globalObjectList(){
        return this.globalObjectList;
    }
    /** Adds an object to the global object list */
    add(obj){
        this.globalObjectList[obj.id] = obj;
        return true;
    }
    /** Gets an object by ID from the global object list */
    get(objID){
        return this.globalObjectList[objID];
    }
    /** Removes an object by ID from the global object list */
    remove(objID){
        this.globalObjectList.delete(objID);
        return true;
    }
    // Collection of objects that are expected to be used - saves from having to do tons of imports in engine for objects and keeps them all in one spot
    ObjectPallet = {
        generic:{
            GameObjectGeneric:GameObjectGeneric,
            Player:Player
        },
        actors:{

        },
        items:{

        },
        props:{
            
        }
    };
}
export let ObjectController = new ObjectControllerClass;