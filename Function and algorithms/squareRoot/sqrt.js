/************************************************************************
 * @purpose :SQUARE ROOT OF A NUMBER
 * @file: utility.js
 * @overview:  function sqrt  to compute the square root of a nonnegative number c 
 * given in the input using Newton's method
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 23/08/2019
 */

const input=require("readline-sync");
const squarerootobject = require('../Utility/utility');
let number = input.questionInt("Enter a number:")
try {
    if(number>0)
    console.log( squarerootobject.squareroot(number));
    else
    throw error;
    
} catch (error) {

    console.log("Negative number error");
    
}
//console.log( squarerootobject.squareroot(number));