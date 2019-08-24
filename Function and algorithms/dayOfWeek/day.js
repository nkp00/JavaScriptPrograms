/************************************************************************
 * @purpose :calculating day of the week 
 * @file: dayBL.js
 * @overview: taking date, month and year as input and printing the output as day of the week
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input=require("readline-sync");
const dayofweekobject=require('../dayOfWeek/dayBL');

var date=input.questionInt("Date:");
var month=input.questionInt("Month:");
var year=input.questionInt("year:");

console.log(dayofweekobject.day(date,month,year));
