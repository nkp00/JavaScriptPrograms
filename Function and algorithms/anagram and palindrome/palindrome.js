/************************************************************************
 * @purpose :checking prime numbers and finding all the anagrams and palindromes
 * @file: anagramBL.js
 * @overview: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
const input = require('readline-sync');
const primeNumberbject = require('../anagram and palindrome/palindromeBL');
let N1 = input.questionInt("enter number greater than 0:")
let N2 = input.questionInt("enter number lesser than 1000:")



console.log(primeNumberbject.check(N1, N2));