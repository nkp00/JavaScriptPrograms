

array1=[];
function findMynum(Number)
{
    const input = require('readline-sync');
    for(i=0;i<=Number;i++)
        array1[i]=i;

        var i=0;
        var l=Number;
       // m=parseInt((i+l)/2);
        while(l-i>1)
        {
            m=parseInt((i+l)/2);
            answer=input.question(`Is your number between ${i} and ${m}: Y/N :`);
            if(answer=="N")
            {
                answer=input.question(`Is your number between ${m} and ${l}: Y/N :`);
                if(answer=="Y")
                {
                    i=m;
                }
                else
                {
                    console.log("Your number is beyond the limit you entered ")
                    return "";
                }
            }
            else
            {
                l=m;
            }
        }
        console.log(`Your number is: ${array1[m]}`);

return "";
}
module.exports = {findMynum}