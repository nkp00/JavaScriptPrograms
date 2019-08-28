ar1=[];
function tree(ar)
{
    var x=0
    for(i=0;i<ar.length;i++)
    {
       x=count(ar[i]);
       //console.log(x);
       ar1.push(x);
    }
    return ar1;

}
function count(N)
{
    if(N==0||N==1)
    return 1;
    else
    {
        let sum=0;
        let left=0;
        let right=0;
        for(let k=1;k<=N;k++)
        {   
            left=count(k-1);
            right=count(N-k);
            sum+=(left*right);

        }
        return sum;
    }
    
}
module.exports={tree}