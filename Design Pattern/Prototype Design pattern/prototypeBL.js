
function laptop () {                  // defining an object having two properties

    this.Ram='8GB';
    this.Rom='1TB';
}
laptop.prototype.start=function(){     // adding a method start.
    return "lapop is starting";
    
}
var hp=laptop();                    // Creating an instance.
console.log(hp);
console.log(hp.start());
module.exports={laptop}