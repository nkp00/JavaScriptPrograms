/************************************************************************
 * @purpose :Sorting 
 * @file: insertSortBL.js
 * @overview: taking an array and sorting it using insertion sort algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const insertionsortobject = require('../binarysearch/insertSortBL');
let N = input.questionInt("enter the number in the array:");
array1=[];
console.log(`enter ${N}  elements`);
for(i=0;i<N;i++)
{
    array1[i]=input.questionInt();
}
console.log(array1);

console.log(insertionsortobject.insertsort(array1,N));