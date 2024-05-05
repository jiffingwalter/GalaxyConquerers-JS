/** Global environment variables */
export let globals ={
    /** Debug values */
    debug:{
        generic: true,
        input: true
    },

    /** Current game state value */
    gameState: null,

    /** Game tick speed */
    gameSpeed: 1,

    /** Player controls variables */
    controls:{
        MOVE_UP:'w',
        MOVE_DOWN:'s',
        MOVE_LEFT:'a',
        MOVE_RIGHT:'d',
        SHOOT:'space'
    }
}