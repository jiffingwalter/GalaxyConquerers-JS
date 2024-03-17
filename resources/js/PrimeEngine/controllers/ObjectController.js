// OBJECT CONTROLLER - contains the global object list, any active objects in the window will be added to this list
// and will be added and removed as needed
export class ObjectControllerClass{
    objectList = {};
    get objectList(){
        return this.objectList;
    }
    add(obj){
        this.objectList[obj.id] = obj; 
    }
    remove(objID){
        this.objectList.delete(objID);
    }
}
export let ObjectController = new ObjectControllerClass;