/************************************************************************
 * @purpose :checking prime numbers
 * @file: anagramBL.js
 * @overview: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
let c=0;
function primenumber(x,y)
{
for(i=x;i<y;i++)
{   
    c=0;
    for (j=2;j<i;j++)
    {
        if(i%j==0)      // checking if the number is divisible by any other number except 1 and itself
        {
            c++;
        }
    }
    if(c==0&&i>=2)
    {
        console.log(i)   // printing the prime numbers
    }

}
return "";
}

module.exports ={primenumber}