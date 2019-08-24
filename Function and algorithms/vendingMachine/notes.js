/************************************************************************
 * @purpose :Retrun change
 * @file: notesBL.js
 * @overview: Taking an amount from user and returning the change
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 23/08/2019
 */
const input = require('readline-sync');
const notesobject = require('../vendingMachine/notesBL');
let amount = input.questionInt("enter the amount:");

console.log(notesobject.change(amount));