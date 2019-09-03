/************************************************************************
 * @purpose :binary search
 * @file: stockBL.js
 * @overview: Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.

 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 31/08/2019
 */
const input = require('readline-sync');
const stockobject = require('../Stock/stockBL');
let number=input.questionInt("Enter the number of stock:");
var portfolio= new stockobject.Portfolio(stock);

for (let i=0;i<number;i++){
let stockName= input.question("enter the name of stock:");
let shareNumber=input.questionInt("Enter the number of shares:");
let price=input.questionInt("enter the share price :");
var stock=new stockobject.Stock();


stock.setname(stockName);
stock.number(shareNumber);
stock.setprice(price);
//console.log(l.name);
console.log(`value=${portfolio.calculate(stock)}`);
}
console.log(`Total value=${portfolio.final(stock)}`);