/************************************************************************
 * @purpose :binary search
 * @file: binaryIntBL.js
 * @overview: taking an sorted array and searching for an element using binary search algorithm
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input = require('readline-sync');
const stockobject = require('../Stock/stockBL');
let number=input.questionInt("Enter the number of stock:");
var p= new stockobject.Portfolio(l);

for (let i=0;i<number;i++){
let stockName= input.question("enter the name of stock:");
let shareNumber=input.questionInt("Enter the number of shares:");
let price=input.questionInt("enter the share price :");
var l=new stockobject.Stock();


l.setname(stockName);
l.number(shareNumber);
l.setprice(price);
//console.log(l.name);
console.log(`value=${p.cal(l)}`);
}
console.log(`Total value=${p.final(l)}`);