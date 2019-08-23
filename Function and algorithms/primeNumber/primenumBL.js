/* 
* x is the first input number
* y is the second input numer
* c is counter variable
* primenumber() id a function which takes the range of number entered by the user and generates all the prime numbers in thst range

*/
let c = 0;
try {

    function primenumber(x, y) {
        for (i = x; i < y; i++) {
            c = 0;
            for (j = 2; j < i; j++) {
                if (i % j == 0)      // checking if the number is divisible by any other number except 1 and itself
                {
                    c++;
                }
            }
            if (c == 0 && i >= 2) {
                console.log(i)   // printing the prime numbers
            }

        }
        return "";
    }
}

catch (error) {
    console.log(error)
}


module.exports = { primenumber }