/************************************************************************
 * @purpose :Sorting 
 * @file: insertSortstrBL.js
 * @overview: taking an array and sorting it using insertion sort algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const insertionsortstrobject = require('../binarysearch/insertSortstrBL');
let string1= input.question("enter the string:");
console.log(insertionsortstrobject.insertsortstr(string1));