const input=require('readline-sync');
const factorObject=require('../factors/factorBL');
var y=input.questionInt("Please enter a number");
if (y<=2)
{
    console.log("2");
}
else
  console.log(factorObject.fact(y));

