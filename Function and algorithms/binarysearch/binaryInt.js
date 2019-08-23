/************************************************************************
 * @purpose :binary search
 * @file: binaryIntBL.js
 * @overview: taking an sorted array and searching for an element using binary search algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const binarysearchobject = require('../binarysearch/binaryIntBL');
let N = input.questionInt("enter the number in the array:");
array1=[];
console.log(`enter ${N}  elements`);
for(i=0;i<N;i++)
{
    array1[i]=input.questionInt();
}
console.log(array1);
let s=input.questionInt("enter the number you want to search in the array:");

console.log(binarysearchobject.searchInt(array1,N,s));
