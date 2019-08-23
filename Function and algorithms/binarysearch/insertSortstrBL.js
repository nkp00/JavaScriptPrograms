/*
* i is a variable storing the 2nd index of the array
* l is a variable storing the last index of the array
* insertsort is user defined function to search for an ineteger in a sorted array
*/
let temp = 0; // declaring a temporary variable
array2=[];

function insertsortstr(string1) {

    var N=string1.length;
    array2=string1.split("");
    for (i = 1; i < N; i++) {
        j = i - 1;
        temp = array2[i];
        while (j >= 0 && temp <= array2[j]) {    
            array2[j + 1] = array2[j];               // shifting the higher values to left
            j--;
        }
        array2[j + 1] = temp;
    }
    console.log(array2);
    return "";

}
module.exports = { insertsortstr}