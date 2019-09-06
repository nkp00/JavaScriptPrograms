/************************************************************************
 * @purpose :Stock account management
 * @file: stockAccountBL.js
 * @overview: The StockAccount maintains a list of CompanyShares object 
 * which has Stock Symbol and Number of Shares as well as DateTime of the transaction. 
 * When buy or sell is initiated StockAccount checks if CompanyShares are available and
 * accordingly update or create an Object.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 03/09/2019
 */

const input = require("readline-sync");
const stockAccountbject = require("../CommercialData/stockAccountBL");
const fs = require('fs')
var buyerArray = JSON.parse(fs.readFileSync("../CommercialData/buyerlist.json"));  // reading the input JSON file
var companyArray = JSON.parse(fs.readFileSync("../CommercialData/companyList.json"))

console.log("Initial Status");
console.log(companyArray);
while (1) {
    var choice = input.questionInt("1.Buy\n2.Sell\n3.Print report\n")
    switch (choice) {
        case 1:
            stockAccountbject.buy(buyerArray, companyArray);
            break;
        case 2:
            stockAccountbject.sell(buyerArray, companyArray);
            break;
        case 3:
            stockAccountbject.printReport(companyArray);
            break;
        default:
            console.log("you have entered a wrong choice");
    }
}
///console.log(report.sold);
//stockAccountbject.getTime();