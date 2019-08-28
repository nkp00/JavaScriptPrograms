const input=require("readline-sync");
const Hashingobject = require('../HashingFunction/hashBL');

const fs=require('fs');
//const Linkedlist=require("../unorderedList/list")
var text=fs.readFileSync("../HashingFunction/input.txt", "utf-8"); // reading the input file
var dataArray=text.split(' ');
ar=[];
for(i=0;i<11;i++)
{
     ar[i]= new Hashingobject.Linkedlist();
}
for(i in dataArray)
{
    var x=dataArray[i]%11;
    ar[x].add(dataArray[i])
}
var s=input.questionInt("Enter a number to search:");
var r=s%11;
ar[r].search(s);
var str='';
for(i=0;i<11;i++)
{
    str=str+String(ar[i].print())+"\n";
    //console.log(String(ar[i].print()));
   // fs.writeFileSync('output.txt',String(ar[i].print()));    // writing to the output file.
}
fs.writeFileSync('output.txt',str);    // writing to the output file.