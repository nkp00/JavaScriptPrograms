const input=require('readline-sync');
const distancebject=require('../distance/distBL');
let x=input.questionInt("Enter the value of x:");
let y=input.questionInt("Enter the value of y:");
console.log(distancebject.dist(x,y));

