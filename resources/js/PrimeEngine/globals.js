/** Global environment variables */
export let globals ={
    /** Debug values */
    debug:{
        generic: true,
        engine: true,
        input: false,
    },

    /** Current game state value */
    gameState: {
        running: false,
        ticks: 0
    },

    /** Game tick speed */
    gameSpeed: 60,

    /** Get current time in milliseconds */
    time: ()=>{return performance.now()},

    /** Player controls bindings */
    controls:{
        MOVE_UP:'w',
        MOVE_DOWN:'s',
        MOVE_LEFT:'a',
        MOVE_RIGHT:'d',
        SHOOT:'space'
    }
}