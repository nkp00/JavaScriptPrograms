/* sum is function to calculate the each element(weight*price)of inventory
*/

var calculate = (inventory) => {
    var total = sum(inventory);
    // console.log(total);
    return total;
}

var str = {};                       // declaring a empty object to store the sum.
var sum = (inventory) => {
    for (let i in inventory) {
        var summation = 0;
        for (let j in inventory[i])
            summation += inventory[i][j].weight * inventory[i][j].price;
        str[i] = summation;
    }
    return str;

}

module.exports = { calculate }
