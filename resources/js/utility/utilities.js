// any useful functions and variables
import { globals } from "./globals.js"

export const PrimeUtils = new PrimeUtils;
class PrimeUtils{
    /**
     * Takes any input, checks if debug is currently enabled and prints to console if so
     * @param {*} input 
     */
    debugPrint(input){
        if (globals.debug){
            console.log(input);
        }
    }
}