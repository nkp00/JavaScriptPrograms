const input=require('readline-sync');
const replacestringObject=require('../replacestring/replacestringBL');
var name=input.question("enter name:");
console.log(replacestringObject.replaceName(name));

