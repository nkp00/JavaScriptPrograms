/************************************************************************
 * @purpose :Replacing a string with another string
 * @file: regexpBL.js
 * @overview: 
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 30/08/2019
 */
const input=require("readline-sync");
const regularexpobject=require('../regularExpression/regexpBL');
const fs=require('fs')
var items=fs.readFileSync("../regularExpression/input.txt","utf-8");
console.log(regularexpobject.replace1(items));
//console.log(items);