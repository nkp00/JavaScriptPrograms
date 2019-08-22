/************************************************************************
 * @purpose :checking anagram
 * @file: anagramBL.js
 * @overview: One string is an anagram of another if the second is simply a rearrangement of the first. program to check that.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */

function check(string1, string2)
{
    if(string1.length!=string2.length) //comparing the lenght of two string 
    {
        console.log("The two string are not anagrams")
    }
    else
    {
        for(i=0;i<string1.length;i++)
        {
            if(!string2.includes(string1[i])) // checking if the 2nd string includes the letters of first string
            {
                console.log("The two string are not anagrams")
                break;
            }
            else
            {
                console.log("The two string are anagrams")
                break;
            }
        }
    }
    return "";
}



module.exports ={check}