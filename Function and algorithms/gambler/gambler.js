const input=require('readline-sync');
const gambleObject=require('../gambler/gamblerBL');
var s=input.question("enter the total stake:");
var g=input.question("enter the goal:");
var n=input.question("number of time:");
console.log(gambleObject.game(s,g,n));
