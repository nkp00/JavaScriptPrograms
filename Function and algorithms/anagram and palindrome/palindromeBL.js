/* c and c1 are two counter variables
*  arr[] is an array where we are pushing all the prime numbers
*  check is a function which is checking the prime number
    and pushing that into the array arr
*
*/
let c = 0;
let c1 = 0
arr = [];
let flag = 0;
newarr = [];
ar4 = [];
function check(N1, N2) {
    for (i = N1; i < N2; i++) {
        c = 0;
        for (j = 2; j < i; j++) {
            if (i % j == 0)      // checking if the number is divisible by any other number except 1 and itself
            {
                c++;
            }
        }
        if (c == 0 && i >= 2) {
            arr.push(i)   // printing the prime numbers
        }

    }
    anagram(arr);

}

function anagram(arr) {
    for (i=0;i<arr.length;i++) {
        c = 0;
        ar4.push(arr[i]);
        var num = arr[i].toString();
        newarray = num.split("");
        var num1 = arr[1+i].toString();
        newarray1 = num1.split("");
        for (k in newarray) {
            //c=0;
            
            //for (j in arr) {
                for (l in newarray1) {
                    if (newarray[k] == newarray1[l])
                        c++;
                }
           // }
            if ((c == newarray1.length) && (c == newarray.length))
                ar4.push(num1);
            else
                ar4.pop();
        }
        console.log(ar4);
    }
}
module.exports = { check }