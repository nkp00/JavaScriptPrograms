const input=require('readline-sync');
const crossGamebject=require('../crossGame/gameBL');
function arrayinput()
{
let c=3;
let r=3;
let items=new Array(r);
for (i=0;i<r;i++)
{
    items[i]=new Array(c);
}
    //console.log(`enter ${c*r} elements`);
    for (i=0;i<r;i++)
    {
       for(j=0;j<c;j++)
        {
            items[i][j]="-";
        }
    }
    console.log(crossGamebject.game(items));

}
arrayinput();
