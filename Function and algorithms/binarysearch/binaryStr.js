/************************************************************************
 * @purpose :binary search
 * @file: binaryStrBL.js
 * @overview: taking an sorted array and searching for an element using binary search algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const binarysearchstrobject = require('../binarysearch/binaryStrBL');
var string1 =input.question("Enter the string:")
var s=input.question("Enter the character to search : ")

console.log(binarysearchstrobject.searchStr(string1,s));
