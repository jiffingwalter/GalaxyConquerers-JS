// OBJECT CONTROLLER - contains the global object list, any active objects in the window will be added to this list
// and will be added and removed as needed
export class ObjectControllerClass{
    objectList = {};
    get objectList(){
        return this.objectList;
    }
    /** Adds an object to the global object list */
    add(obj){
        this.objectList[obj.id] = obj;
        return true;
    }
    /** Gets an object by ID from the global object list */
    get(objID){
        return this.objectList[objID];
    }
    /** Removes an object by ID from the global object list */
    remove(objID){
        this.objectList.delete(objID);
        return true;
    }
}
export let ObjectController = new ObjectControllerClass;