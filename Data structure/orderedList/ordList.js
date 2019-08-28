/************************************************************************
 * @purpose :Creating a linkedlist and searching an element
 * @file: listBL.js
 * @overview:  There is a text file(input.text), which is our input file and the output file is 
 * out2.text.Enter a word to search in the text file if it is found the word will be removed
 * and the output will be saved in the out2.txt file. And if it is not found it will get added
 * @author:Neeraj kr Prajapati
 * @version: v8.15.0
 * @since: 26/08/2019
 */

const input=require("readline-sync");
const nkp1object = require('../orderedList/ordListBL');

const fs=require('fs');
const Linkedlist1=require("../orderedList/ordListBL")
var text=fs.readFileSync("../orderedList/input1.txt", "utf-8"); // reading the input file
var dataArray=text.split(' ');
let l= new nkp1object.Linklist1()
console.log(dataArray);
for(element of dataArray)
{
    l.add(element);
}
console.log(l.print());
let x=input.questionInt("enter a word to search: ")
l.search(x);
var text2=l.print();
console.log(text2);
fs.writeFileSync('output1.txt',text2);    // writing to the output file.