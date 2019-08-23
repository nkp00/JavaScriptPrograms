/************************************************************************
 * @purpose :checking prime numbers
 * @file: anagramBL.js
 * @overview: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
const input=require('readline-sync');
const primeNumberbject=require('../primeNumber/primenumBL');
let x=input.questionInt("enter number greater than 0:")
let y=input.questionInt("enter number lesser than 1000:")

try {
    if(x<0||y>1000)
    throw error;
} catch (error) {
    console.log("Error in input");
    return '';
}

console.log(primeNumberbject.primenumber(x,y));