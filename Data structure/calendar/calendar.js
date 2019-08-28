/************************************************************************
 * @purpose :Printing a particular month of a year
 * @file: calendarBL.js
 * @overview: Calendar is a program that takes the month and year as command-line arguments 
 * and prints the Calendar of the month. Store the Calendar in an 2D Array,
 *  the first dimension the week of the month and the second dimension stores the day of the week. 
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 22/08/2019
 */
const input=require("readline-sync");
const calendarobject=require('../calendar/calendarBL');

var month=input.questionInt("Enter the month number:");
var year=input.questionInt("Enter Year:");


console.log(calendarobject.calMonth(month,year));