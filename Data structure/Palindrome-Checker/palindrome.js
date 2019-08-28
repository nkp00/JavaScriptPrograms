/************************************************************************
 * @purpose :Creating a Stack
 * @file: parBalanceBL.js
 * @overview: checking parentheses balance in an arithmatic expression
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 28/08/2019
 */

const input=require("readline-sync");
const palindromeobject=require("../Palindrome-Checker/palindromeBL");

var str=input.question("enter a word:");
let l=new palindromeobject.Dqueue();
var dataArray=[];
dataArray=str.split("");
for(i in dataArray)
{
    l.addRear(dataArray[i]);
}
for(fori=dataArray.length;i>=0;i--)
{
    if(dataArray[i]!=l.removeRear())
    break;
}

console.log(l.Isempty());