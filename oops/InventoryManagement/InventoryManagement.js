/************************************************************************
 * @purpose :InventoryManagement
 * @file: inventoryManagementBL.js
 * @overview:  Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
   Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. Calculate the value for every Inventory.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 30/08/2019
 */
const input = require("readline-sync");
const inventoryManagementobject = require('../InventoryManagement/InventoryManagementBL');
const fs = require('fs')
var items = fs.readFileSync("../InventoryManagement/InventoryManagement.json");  // reading the input JSON file
var dataArray = JSON.parse(items);
var total = inventoryManagementobject.calculate(dataArray)

fs.writeFileSync("../InventoryManagement/output.json", JSON.stringify(total)); // writing in output file

//console.log(total);