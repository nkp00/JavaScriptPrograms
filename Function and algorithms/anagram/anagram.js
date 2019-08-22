const input=require('readline-sync');
const anagrambject=require('../anagram/anagramBL');

var string1=input.question("Please enter the 1st string:");
var string2=input.question("please enter the 2nd string:");

console.log(anagrambject.check(string1, string2));
