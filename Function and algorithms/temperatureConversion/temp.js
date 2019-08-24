/************************************************************************
 * @purpose :Temperature conversion 
 * @file: utility.js
 * @overview:  convert is a user defined function, 
 * given the temperature in fahrenheit as input outputs the temperature in Celsius or viceversa 
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 23/08/2019
 */

const input=require("readline-sync");
const temperatureobject = require('../Utility/utility');
let choice = input.questionInt("1 for Celsius to Fahrenheit \n2 Fahrenheit to Celsius \n")
let T = input.questionInt("enter the Temperature:");

console.log( temperatureobject.convert(T,choice));
