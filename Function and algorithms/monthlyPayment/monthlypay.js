
/************************************************************************
 * @purpose :Monthly pay
 * @file: utility.js
 * @overview:  monthlyPayment that reads in three command-line arguments P, Y, and R and 
 calculates the monthly payments 
 you would have to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 23/08/2019
 */
const input=require("readline-sync");
const temperatureobject = require('../Utility/utility');

var P=input.questionInt("Enter the principle amount:");
var Y=input.questionInt("number of years:");
var R=input.questionFloat("Interest rate:");


console.log( temperatureobject.pay(P,Y,R));