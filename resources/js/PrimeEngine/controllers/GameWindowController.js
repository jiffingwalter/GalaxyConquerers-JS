// class for controlling the game window as needed
export class GameWindowControllerClass{
    constructor(){
        let element = document.createElement('game-window');
        document.body.appendChild(element);
        this.windowElement = document.getElementsByTagName('game-window')[0];
    }
    getWindowNode(){
        return this.windowElement;
    }
}
export let GameWindowController = new GameWindowControllerClass;