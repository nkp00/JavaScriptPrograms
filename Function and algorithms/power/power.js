const input=require('readline-sync');
const powerObject=require('../power/powerBL');
var y=input.questionInt("Please enter a number");
if(y<0||y>31)
    console.log("please enter a number between 0 to 31");
else
    console.log(powerObject.power(y));
