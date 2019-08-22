const input=require('readline-sync');
const stringpermutationbject=require('../stringpermutation/stringpermBL');
let x=input.question("Enter a string:");

console.log(stringpermutationbject.perm(x));
