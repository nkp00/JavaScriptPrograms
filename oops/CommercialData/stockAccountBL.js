/*
getTime is a fucntion which return the current date and time
buy is a fucntion which takes buyerArray and companyArray and argument and update the number of shares.
sell is a fucntion which takes buyerArray and companyArray and argument and update the number of shares.

*/
const input = require("readline-sync");
var count = 0;
var array = [];
report = { bought: {}, sold: {} };

var buy = (buyerArray, companyArray) => {

    var name = input.question("Enter the buyer name:");
    for (let i in buyerArray) {
        if (name == buyerArray[i].name)
            buyer = name;
    }
    var number = input.questionInt("Enter the number of share you want to buy :")
    var stock = input.question("Enter the company name(kfc,pizzahut,mcd,google) :")
    for (let i in companyArray) {
        if (stock == companyArray[i].name) {
            company = stock;
            if (companyArray[i].share > number) {
                companyArray[i].share = companyArray[i].share - number
                count += 1;
                report.bought.name = buyer;
                report.bought.number = number;
                report.bought.company = stock;
                report.bought.time = getTime()
            }
        }
    }
    if (count == 0) {                                           // counter 
        console.log("company don't have enough share");
        count = 0;
        return "";
    }
}

var sell = (buyerArray, companyArray) => {
    var name = input.question("Enter the seller name:");
    var number = input.questionInt("Enter the number of share you want to sell :")
    for (let i in buyerArray) {
        if (name == buyerArray[i].name) {
            seller = name;
            if (buyerArray[i].share > number)
                count += 1;
        }
    }
    if (count == 0) {
        console.log("You don't have enough share to sell");
        count = 0;
        return "";
    }

    var stock = input.question("Enter the company name(kfc,pizzahut,mcd,google) :")
    for (let i in companyArray) {
        if (stock == companyArray[i].name) {
            company = stock;
            companyArray[i].share = companyArray[i].share + number;
            report.sold.name = seller;
            report.sold.number = number;
            report.sold.company = stock;
            report.sold.time = getTime()
        }
    }
}

var printReport = (companyArray) => {
    console.log("..............sold report....................");
    console.log(report.sold);
    console.log("..............bought Report...................")
    console.log(report.bought)
    console.log("...........Status of companies..................")
    console.log(companyArray);
}

var getTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
    //console.log(dateTime);
}



module.exports = { buy, sell, getTime, printReport }