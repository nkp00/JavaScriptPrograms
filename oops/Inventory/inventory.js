/************************************************************************
 * @purpose :Inventory
 * @file: inventoryBL.js
 * @overview:  Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg. 
   Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON. Calculate the value for every Inventory.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 30/08/2019
 */
const input = require("readline-sync");
const inventoryobject = require('../Inventory/inventoryBL');
const fs = require('fs')
var items = fs.readFileSync("../Inventory/inventory.json");  // reading the input JSON file
var dataArray = JSON.parse(items);
var str = {};                                               // declaring a empty object

for (i in dataArray) {
    var sum = 0;
    for (j in dataArray[i])
        sum += (dataArray[i][j].weight * dataArray[i][j].price);         // calculating the sum of elements
    str[i] = sum;
}
total = {                                                    // calculating the total
    inventory: {
        Rice: str.Rice,
        Pulse: str.Pulses,
        wheat: str.Wheat
    }
}

fs.writeFileSync("../Inventory/output.json", JSON.stringify(total)); // writing in output file

console.log(total);