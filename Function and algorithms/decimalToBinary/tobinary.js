/************************************************************************
 * @purpose :Temperature conversion 
 * @file: utility.js
 * @overview: converting a decimal number to a binary number
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 24/08/2019
 */

const input=require("readline-sync");
const decimalToBinaryobjec = require('../Utility/utility');
let number = input.questionInt("Enter a decimal number");
//let T = input.questionInt("enter the Temperature:");

console.log( decimalToBinaryobjec.binary(number));
