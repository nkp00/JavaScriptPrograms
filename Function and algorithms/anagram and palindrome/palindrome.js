const input=require('readline-sync');
const primeNumberbject=require('../anagram and palindrome/palindromeBL');
let x=input.questionInt("enter number greater than 0:")
let y=input.questionInt("enter number lesser than 1000:")



console.log(primeNumberbject.check(x,y));