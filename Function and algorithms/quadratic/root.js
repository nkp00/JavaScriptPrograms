const input=require('readline-sync');
const quadraticbject=require('../quadratic/rootBL');

let a=input.questionInt("Enter the value of a:");
let b=input.questionInt("Enter the value of b:");
let c=input.questionInt("Enter the value of c:");

console.log(quadraticbject.root(a,b,c));
