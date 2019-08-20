const input=require('readline-sync');
const flipObject=require('../Flip coin/flipcoinBL');
var y=input.question("enter a number:");
console.log(flipObject.flip(y));
