/************************************************************************
 * @purpose : finding the triplets in a array whose sum is 0
 * @file: sumof3BL.js
 * @overview:Prinitng and finding the  number of triplets in a array whose sum is 0
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */


var triplets= (array,n) =>{  // collecting array and number of element in the array
    let count=0;             // initizing the counter

for(i=0;i<n;i++)
{
    for(j=i+1;j<n;j++)
    {
        for(k=j+1;k<n;k++)
        {
            if(array[i]+array[j]+array[k]==0)     // checking the sum
            {
                console.log(`${array[i]},${array[j]},${array[k]}`);
                console.log("abc");
                count++
            }
        }
    }
}
console.log(`Number of triplets is: ${count}`); // printing the number of triplets
return"";
}

module.exports ={triplets}
