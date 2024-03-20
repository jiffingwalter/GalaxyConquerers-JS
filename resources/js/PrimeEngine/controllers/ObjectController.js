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
}
export let ObjectController = new ObjectControllerClass;
// Object Collection - collection of object classes in use to save on imports
export let ObjectCollection = {
    
};