/** Global environment variables */
export let globals ={
    /** Debug values */
    debug:{
        enabled: true,
        generic: true,
        engine: true,
        tick_sync: false,
        input: false,
        player: false,
    },

    /** Engine variables */
    engine:{
        on: false,
    },

    /** Current game state variables  */
    gameState: {
        status: null,
        gameSpeed: 30,
        ticks: 0,
        player: {}
    },

    /** Get current time in milliseconds */
    time: ()=>{return performance.now()},

    /** Player controls bindings */
    controls:{
        MOVE_UP:'w',
        MOVE_DOWN:'s',
        MOVE_LEFT:'a',
        MOVE_RIGHT:'d',
        SHOOT:'space'
    },

    /** Object for temporary storage of conditions so they may be referenced cross-script */
    cond: {
        test: false,
    }
}