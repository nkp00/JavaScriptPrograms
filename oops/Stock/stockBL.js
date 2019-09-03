/* calculate is fucntion which is calculating the price of shares.
*  total is a function which calculates the total price of all the shares.
*/
array = [];                   // defining an array
var sum=0;
function Stock() {

    this.setname = function (name) {
        this.name = name;
        //return Stock.name;
    }
    this.setprice = function (price) {           // setting the name of the stack
        this.price = price;
    }
    this.number = function (number) {
        this.number = number;
    }
    this.get = function () {
        return this.name;
    }

}

function Portfolio(Stock) {                            // function to calculate the share price

    this.calculate = function (Stock) {
        var value= (Stock.number * Stock.price);        // calculating the share price
        array.push(value)                               // pushing in a array to calculate the total share price
        return value;
    }
    this.final=function()
    {   
        for(i in array)
        sum=sum+array[i];
        return sum;
    }
}

module.exports = { Stock, Portfolio }