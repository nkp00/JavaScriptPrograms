ar = [];
ar1 = [];
ar2 = [];
ar3 = [];
let a = 0;
let y = 100;
let z = 2;
let n = 0;


var prime = () => {
    for (let i = 0; i < 10; i++) {
        ar[i] = []
        ar[i][0] = (`${a}-${y} :`);
        a = y;
        y = y + 100;

    }
    let max = 100;                       // defining a range
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
    for (var i = 0; i < 10; i++) {
        ar2 = anagram(ar[i]);
        ar3 = anagram(ar[i]);
        ar3 = ar2;
        //console.log(ar2);            // printing prime anagrams in a range
        ar2.splice(0, ar2.length)
    }
    console.log(ar3);                   // printing all prime anagrams

    /* for (let i = 0; i < 10; i++) {                  
         var str = "";
         for (let j = 0; j < ar[i].length; j++)
             str = str + ar[i][j] + " ";
         console.log(str);                       // printing prime number in a range
     }*/
}

newarray = [];
ar4 = [];
newarray1 = [];
finalarray = [];

function anagram(arr) {
    for (let i = 0; i < arr.length; i++) {
        var flag = 0;
        ar4.push(arr[i]);
        var num = arr[i].toString();
        newarray = num.split("");
        for (let j = i + 1; j < arr.length; j++) {

            var num1 = String(arr[j]);
            newarray1 = num1.split("");
            if ((JSON.stringify(newarray.sort()) == JSON.stringify(newarray1.sort())) && (ar4.includes(arr[j]) == false)) {
                ar4.push(arr[j]);
                flag++;
            }

        }
        if (flag == 0)
            ar4.pop();
    }
    return (ar4);
}




module.exports = { prime }