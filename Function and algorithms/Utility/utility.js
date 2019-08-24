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
    if (l - s > 0 && m > 0) {
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


/***************************************************************************************
program will take three command-line arguments: m (month), d (day), and y (year).
 For m use 1 for January, 2 for February, and so forth. 
For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
*/


function day(date, month, year) {
    d = date;
    m = month;
    y = year;
    y0 = y - parseInt((14 - m) / 12);
    x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(y0 / 400));
    m0 = m + 12 * parseInt((14 - m) / 12) - 2;
    d0 = ((d + x + parseInt(31 * m0 / 12)) % 7);
    array = ['Sunday', 'Monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday'];
    console.log(array[d0]);
    return "";
}

/****************************************************************************************
* N is a variable for storing the length of input string
* bubblesortstr is a user defind fucntion which takes the original string and sort it
* 
*/

function bubblesortstr(string1) {

    var N = string1.length;
    array1 = string1.split("");
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (array1[j + 1] < array1[j])          // comparing the adjacent element
            {
                temp = array1[j + 1];
                array1[j + 1] = array1[j];         // interchanging the element
                array1[j] = temp;
            }
        }
    }
    console.log(array1);                       // prinring the sorted array
    return "";

}

// Temperature conversion

var f = 0;   // f is a variable storing temperature in Fahrenheit
var c = 0;   // c is a variable storing temperature in celsius

function convert(T, choice) {
    f = T;
    if (choice == 1) {
        f = (c * 9 / 5) + 32;
        console.log(`Temperature in Fahrenheit: ${f}`);
    }
    else if (choice == 2) {
        c = (f - 32) * 5 / 9;
        console.log(`Temperature in celsius: ${c}`);
    }
    else
        console.log("You have enter a wrong input");
    return "";
}

// monthly payment

function pay(P, Y, R) {
    var payment = 0;
    n = 12 * Y;
    r = (R / (12 * 100));
    payment = ((P * r) / (1 - (Math.pow((1 + r), (-1 * n)))));
    console.log(`Total monthly payment is ${payment}`);
    return "";
}

// squreRoot using newtons method
var t = 0;
//var c = 0;


function squareroot(c) {
   // c = number;
 // var epsilon = 10-15;
    t = 0.0001;
    //c=((c/t)+t)/2;
    while (Math.abs(t*t - c) >= Math.pow(10,-15) )
     { 
         t = ((c / t) + t) / 2;
     }
    console.log(`square Root of ${c} is ${t}`);
    return "";
}

module.exports = { findMynum, bubblesortstr, day, convert, pay, squareroot }