/************************************************************************
 * @purpose :Creating a Stack
 * @file: parBalanceBL.js
 * @overview: checking parentheses balance in an arithmatic expression
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 28/08/2019
 */

const input=require("readline-sync");
const nkpobject = require('../balanceParentheses/parBalanceBL');
//const Stack=require("../balanceParentheses/parBalance")
var str=input.question("enter an arithmatic expression:");
array1=[];
array1=str.split('');
let l= new nkpobject.Stack()
for(i in array1)
{
    if(array1[i]=="(")
    l.push(array1[i]);
    if(array1[i]==")")
    l.pop();
}
console.log(l.Isempty());








