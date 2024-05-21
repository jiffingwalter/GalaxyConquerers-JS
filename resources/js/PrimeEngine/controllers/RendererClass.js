// RENDER CONTROLLER - holds render queue and handles all render actions, game window related logic
export class RendererClass{
    renderQueue = Array;

    // initalize the game window
    initialize(){
        let element = document.createElement('game-window');
        document.body.appendChild(element);
        this.windowElement = document.getElementsByTagName('game-window')[0];
    }

    getWindowNode(){
        return this.windowElement;
    }

    // RENDERER
    /** Update the screen for each action in the render queue */
    updateFrame(){
        if (this.renderQueue.length > 0)
        for (let action in this.renderQueue){
            // change the position of the object as needed
        }
    }

    /** Add an action to the render queue
     * @param entity the game entity to be acted upon
     * @param action the change that has been requested
     */
    renderAction(entity,action){
        return this.renderQueue.push({
            entity:entity,
            action:action
        });
    }
}
export let Renderer = new RendererClass;