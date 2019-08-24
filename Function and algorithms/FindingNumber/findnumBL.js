/*
*findMynum is a user defined function which takes the number entered by user(number)
 and convert that into an array having elements from 0 to number
*findnum is an user defined function which takes array, initial index and last index as argument
* s is a variable

*/

array1 = [];
let s = 0;
function findMynum(number) {
    let l = number;

    for (i = 0; i <= number; i++)
        array1[i] = i;
    findnum(array1, s, l);
    return "";
}
function findnum(array1, s, l) {
    const input = require('readline-sync');
    m = parseInt((s + l) / 2)
    if (l - s >0 && m>0) {
         //m = parseInt((s+l) / 2)
        answer = input.question(`Is your number between ${s} and ${m}: Y/N :`);
        if (answer == "Y") {
            l = m;
            findnum(array1, s, l)
        }
        else if (answer == "N") {
            s = m + 1;
            findnum(array1, s, l)

        }
        else {
            console.log("you have enter the wrong key");
            findnum(array1, s, l);

        }
    }

    else
        if (m == 0)
            console.log(`YOUR NUMBER IS : ${array1[m + 1]}`);
        else
            console.log(`YOUR NUMBER IS : ${array1[m]}`);

    return "";
}
module.exports = { findMynum }

// The bellow code for the same program using itrative method
/*function findMynum(Number)
{
    const input = require('readline-sync');
    for(i=0;i<=Number;i++)
        array1[i]=i;

        var i=0;
        var l=Number;
       // m=parseInt((i+l)/2);
        while(l-i>1)
        {
            m=parseInt((i+l)/2);
            answer=input.question(`Is your number between ${i} and ${m}: Y/N :`);
            if(answer=="N")
            {
                answer=input.question(`Is your number between ${m} and ${l}: Y/N :`);
                if(answer=="Y")
                {
                    i=m;
                }
                else
                {
                    console.log("Your number is beyond the limit you entered ")
                    return "";
                }
            }
            else
            {
                l=m;
            }
        }
        console.log(`Your number is: ${array1[m]}`);

return "";
}*/


