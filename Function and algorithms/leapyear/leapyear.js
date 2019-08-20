const input=require('readline-sync');
const leapyearObject=require('../leapyear/leapyearBL');
var year=input.questionInt("enter year:");
console.log(leapyearObject.leapyear(year));
