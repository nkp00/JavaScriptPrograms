const input=require('readline-sync');
const harNumObject=require('../harNum/harNumBL');
var y=input.questionInt("Please enter a number");
if(y!=0)
{
    console.log(harNumObject.har(y));
}
else
    console.log("please enter a non zero number");