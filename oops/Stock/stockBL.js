
ar = [];
var sum=0;
function Stock() {

    this.setname = function (name) {
        this.name = name;
        //return Stock.name;
    }

    this.setprice = function (price) {
        this.price = price;
    }
    this.number = function (number) {
        this.number = number;
    }
    this.get = function () {
        return this.name;
    }
    // this.total=function(Portfolio)
    // {
    //     Stock.total=Portfolio.cal;
    // }

}

function Portfolio(Stock) {

    this.cal = function (Stock) {
        var s = (Stock.number * Stock.price);
        ar.push(s)
        return s;
    }
    this.final=function()
    {   
        for(i in ar)
        sum=sum+ar[i];
        return sum;
    }
}

module.exports = { Stock, Portfolio }