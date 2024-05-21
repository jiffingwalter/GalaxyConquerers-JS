/** Global environment variables */
export let globals ={
    /** Debug values */
    debug:{
        enabled: true,
        generic: true,
        engine: true,
        input: false,
        player: false,
    },

    /** Engine variables */
    engine:{
        running: false,
    },

    /** Current game state variables  */
    gameState: {
        /** TECHNICAL */
        status: null,
        gameSpeed: 60,
        ticks: 0,

        /** OTHER */
        playerPos:{
            x:0,
            y:0,
            r:0
        }
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