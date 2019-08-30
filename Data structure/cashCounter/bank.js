/************************************************************************
 * @purpose :Creating a cash counter in bank
 * @file: notesBL.js
 * @overview: Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. 
 * Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. 
 * Maintain the Cash Balance.

 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 29/08/2019
 */
const input = require('readline-sync');
const cashcounterobject = require('../cashCounter/bankBL');
let amount = input.questionInt("enter the amount:");

console.log(cashcounterobject.bank(amount));