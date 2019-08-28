/************************************************************************
 * @purpose :calculating the number of binary search tree
 * @file: nbtBL.js
 * @overview: First line will contain an integer, T, number of test cases. Then T lines follow, where each line represent a test case. Each test case consists a single integer, N,
 *  where N is the number of nodes in the binary search tree. 
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input=require("readline-sync");
const numerofTreeobject=require('../NumberOfTree/nbtBL');

var Testcases=input.questionInt("Enter the number of test cases:");
ar=[];
for(i=0;i<Testcases;i++)
{
    ar[i]=input.questionInt();
}

console.log(numerofTreeobject.tree(ar));