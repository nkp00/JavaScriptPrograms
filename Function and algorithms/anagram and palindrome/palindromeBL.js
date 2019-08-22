/************************************************************************
 * @purpose :checking prime numbers and finding all the anagrams and palindromes
 * @file: anagramBL.js
 * @overview: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
let c=0;
arr=[];
let flag=0;
newarr=[];
function check(x,y)
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
        arr.push(i)   // printing the prime numbers
    }
}

function anagram(arr)
{
    for(i in arr)
    {
        k=i+1
        for(k in arr)
        {
                var num= arr[i].toString();
                newarr=num.split('');
                var num1= arr[k].toString();
                newarr1=num1.split('');
                for (j in newarr)
                {
                    if()
                }
        }
    }



}


console.log("anagrams numbers are:")
    for(i in arr)
    {
        //console.log(abc(arr[i]));
        j=i+1;
        for(j in arr)
       {
           //str=arr[i];
           //console.log("rt");
           //for( k in str)
               //{
                  // console.log("rt");
                  var s=0;
                  m=arr[i];
                  while(m>0)
                    {
                        s=s+(m%10);
                        m=Math.floor(m/10);
                        c++;
                        if(arr.includes(m))

                            {
                                flag++;
                            }
               
                   }
           if(flag==c)
           {
               console.log(arr[i],arr[j]);
           }

        }
    }



return "";
}

function abc(m)
{
    var s=0;
    while(m>0)
    {
        s=s+(m%10);
        m=Math.floor(m/10);
    }
    return s;
}

module.exports ={check}