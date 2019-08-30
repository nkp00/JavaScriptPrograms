ar1 = [];
var str= "Inventory:";
function cal(nkp) {
    for (let i in nkp) {
        let sum = 0;
        for (let j in nkp[i]) {
            sum += (nkp[i][j].weight * nkp[i][j].price);
        }

    }
   // return ar1;
    var final=`Inventory: Rice:${ar1[0]},Pulse:${ar1[1]},wheat:${ar1[2]}`
    return str;
}
module.exports={cal}
