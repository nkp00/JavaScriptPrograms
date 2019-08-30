ar = [];
let c = 0;
let y = 100;
let z = 2;
let n = 0;


var prime = () => {
    for (let i = 0; i < 10; i++) {
        ar[i] = []
        ar[i][0] = (`${c}-${y} :`);
        c = y;
        y = y + 100;

    }
    let max = 100;
    let k = 1;
    for (let j = 2; j < 1000; j++) {
        let s = 0;
        for (i = 2; i < j; i++) {
            if (j % i == 0)
                s++;
        }
        if (s == 0) {
            if (j <= max) {
                ar[n][k] = j;
                k++;
            }
            else {
                max = max + 100;
                n = n + 1;
                k = 1;
                ar[n][k] = j;
                k++;
            }

        }
    }
    for (i = 0; i < 10; i++) {
        var str = "";
        for (j = 0; j < ar[i].length; j++)
            str = str + ar[i][j] + " ";
        console.log(str);
    }
}

module.exports = { prime }