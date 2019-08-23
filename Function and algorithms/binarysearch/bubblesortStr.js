/************************************************************************
 * @purpose :Sorting 
 * @file: bubblesortStrBL.js
 * @overview: taking a string and sorting it using bubble sort algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const bubblesortStrobject = require('../binarysearch/bubblesortStrBL');
let string1= input.question("enter the string:"); // taking an string as input
console.log(bubblesortStrobject.bubblesortstr(string1));