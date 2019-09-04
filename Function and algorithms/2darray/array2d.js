const input=require('readline-sync');
const array2dbject=require('../2darray/array2dBL');
function arrayinput()
{
let c=input.question("Number of coloumn:");          // c=number of coloums
                                                    // r= number of rows
let r=input.question("Number of row:");
let items=new Array(r);
for (i=0;i<r;i++)
{
    items[i]=new Array(c);
}
    console.log(`enter ${c*r} elements`);
    for (i=0;i<r;i++)
    {
        for(j=0;j<c;j++)
        {
            items[i][j]=input.questionInt();
        }
    }
    console.log(array2dbject.array(items));

}
arrayinput();