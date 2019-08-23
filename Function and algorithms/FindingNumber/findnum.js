/************************************************************************
 * @purpose :binary search
 * @file: binaryIntBL.js
 * @overview: taking an sorted array and searching for an element using binary search algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const findingNumobject = require('../FindingNumber/findnumBL');
let Number = input.questionInt("enter a number:");

console.log(findingNumobject.findMynum(Number));