/************************************************************************
 * @purpose :checking anagram
 * @file: anagramBL.js
 * @overview: One string is an anagram of another if the second is simply a rearrangement of the first. program to check that.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
let c = 0;
let c1 = 0;
array1 = [];
array2 = [];

function check(string1, string2) {
    if (string1.length != string2.length) //comparing the lenght of two string 
    {
        console.log("The two string are not anagrams")
    }
    else {
        array1 = string1.split("");
        array2 = string2.split("");
        m = array1.length;
        for (i in array1) {
            for (j in array2) {
                if (array1[i] == array2[j])
                    c++;
            }
        }
        if (c == m)
            console.log("strings are anagrams");
        else
            console.log("the string are not anagrams");
    }
    return "";
}



module.exports = { check }