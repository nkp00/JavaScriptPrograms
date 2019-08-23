/*
* i is a variable storing the first index of the array
* l is a variable storing the last index of the array
* searchInt is user defined function to search for an ineteger in a sorted array
*/


function searchInt(array2, N, s) {
    i = 0;                // first index of the array
    l = N - 1;              // last index of the array
    while (i <= l) {
        var m = parseInt((i + l) / 2); // calculating the mid point of the array
        if (s == array2[m]) {
            console.log(`found the element, at position ${m}`);
            return "";
        }
        else if (s < array2[m]) {
            l = m - 1;
        }
        else {
            i = m + 1;
        }

    }
    return "Number not found";


}
module.exports = { searchInt }

