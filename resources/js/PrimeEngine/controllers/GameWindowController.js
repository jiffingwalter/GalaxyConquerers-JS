// class for controlling the game window as needed
export class GameWindowController{
    constructor(){
        let element = document.createElement('game-window');
        document.body.appendChild(element);
        this.windowElement = document.getElementsByTagName('game-window')[0];
    }
    getWindowNode(){
        return this.windowElement;
    }
}