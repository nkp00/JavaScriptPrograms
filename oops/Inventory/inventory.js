/************************************************************************
 * @purpose :
 * @file: inventoryBL.js
 * @overview: 
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 30/08/2019
 */
const input=require("readline-sync");
const inventoryobject=require('../Inventory/inventoryBL');
const fs=require('fs')
var items=fs.readFileSync("../Inventory/inventory.json");
var nkp=JSON.parse(items)
var ar2=[];
//str=inventoryobject.cal(nkp);
//console.log(ar2);
for(i in nkp)
{

}

fs.writeFileSync("../Inventory/output.json",JSON.stringify(str));
