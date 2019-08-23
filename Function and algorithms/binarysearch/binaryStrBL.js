/*
* i is a variable storing the first index of the array
* l is a variable storing the last index of the array
* searchInt is user defined function to search for an ineteger in a sorted array
*/
array1=[];
array3=[];

function searchStr(array2,s) {
  // var N=array2.length;
 
   array1= array2.split("");
   array3= array1.sort();
   N=array3.length;
   i = 0;                // first index of the array
   l = N-1;              // last index of the array

     while (i <= l) {
        var m = parseInt((i + l) / 2); // calculating the mid point of the array
        if (s == array3[m]) {
           var z= array2.indexOf(s);
            console.log(`found the element, at position ${z} `);
            return "";
        }
        else if (s < array3[m]) {
            l = m - 1;
        }
        else {
            i = m + 1;
        }

    }
    return "character not found";

//console.log(array3)

}
module.exports = { searchStr}