/************************************************************************
 * @purpose : Cross game
 * @file: gameBL.js
 * @overview:simulating the cross game where one player is computer and second player is user
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
const input1=require('readline-sync');
ar1=[2];
ar2=[2];
ar3=[];
ar4=[];

const SIDE=3;
function game(items){  
    count1=0;
    count2=0;
    count=0;
    c=0;

    while(count<=9)

{   
    
        //if(!(items[0].includes("-")&&((items[1].includes("-")&&(items[2].includes("-"))))))
        if(c>=9)
    {
        console.log("The game is over match is drawn")
        break;
    }
    console.log("Current board");
    print(items);
    cellpc(items);
    ++c;
    console.log("updated board");
    print(items)
    
    w=check(items)
    if(w==1)
       { 
           console.log("PC wins")
           break;
       }
    console.log("Your turn now");
    celluser(items);
    ++c;
    console.log("updated board");
    print(items)
    p=check(items)
    if(p==1)
       { 
           console.log("you win")
           break;
       }

    }
    count++;
    return"";

}


function print(items){
    for(i=0;i<SIDE;i++){
        var str="";
        for(j=0;j<SIDE;j++){
                str+=items[i][j]+ " ";      
        }
        console.log(str);
       // console.log(ar4.length);
        
    }
}

    function cellpc(items)
    {
        var i=random(ar3);
        switch(i)
        {
            case 0: items[0][0]="0";break;
            
            case 1:items[0][1]="0"; break;
        
            case 2:items[0][2]="0";break;
        
            case 3: items[1][0]="0";break;
        
            case 4: items[1][1]="0";break;
            
            case 5: items[1][2]="0";break;

            case 6: items[2][0]="0";break;
            
            case 7: items[2][1]="0";break;
            
            case 8: items[2][2]="0"; break;
            
        }
        ar4.push("0");
        
        count1++;
    }

    function celluser(items)
    {
            var z=playuser(ar3);
        switch(z)
        {
            case 0:items[0][0]="x";break;
            
            case 1:items[0][1]="x"; break;
        
            case 2:items[0][2]="x";break;
        
            case 3:items[1][0]="x";break;
        
            case 4:items[1][1]="x";break;
            
            case 5:items[1][2]="x";break;

            case 6:items[2][0]="x";break;
            
            case 7:items[2][1]="x";break;
            
            case 8:items[2][2]="x"; break;
            
        }
        // var p=check(items);
        // if(p==1)
        // {
        //     console.log(" You wins");
               // break;
        // }
        ar4.push("x");
        count2++;
    }
function playuser(ar3)
    {
        l=input1.questionInt("enter the cell number");
        while(ar3.includes(l)&&ar3.length<9)
        l=input1.questionInt("enter the cell number which is available");

        ar3.push(l);
        return  l;
    }
function random(ar3)
    {   
        var s=Math.floor(Math.random()*10);
        while(ar3.includes(s) ||(s>8))
        {
            s=Math.floor(Math.random()*10)
        }
        ar3.push(s);
        return s;

    }
    function check(items){

        if(((items[0][0]==items[0][1]&&items[0][1]==items[0][2]) && items[0][0]!="-"|| (items[0][2]==items[1][2]&&items[1][2]==items[2][2]) && items[0][2]!="-"|| (items[2][0]==items[2][1]&&items[2][1]==items[2][2])&& items[2][1]!="-" ||(items[2][0]==i&&tems[1][0]==items[0][0])&& items[1][0]!="-" || (items[1][0]==items[1][1]&&items[1][1]==items[1][2]) && items[1][1]!="-" || (items[0][1]==items[1][1]&&items[1][1]==items[2][1]) && items[2][1]!="-"|| (items[0][2]==items[1][1]&&items[1][1]==items[2][0] )&& items[0][2]!="-"||(items[0][0]==items[1][1]&&items[1][1]==items[2][2])&& items[0][0]!="-"))
            return 1;
        else
        return 0;

    }   

   
    

module.exports ={game}


/*
for(i=0;i<SIDE;i++)
{
    for(j=0;j<SIDE;j++)
    {
        if((i<=j&&items[i][j]=="x")|| (i==j&&items[i][j]=="x")||(i>=j&&items[i][j]=="x"))
        {
            console.log("You wins");
        }
        else if ((i<=j&&items[i][j]=="0")|| (i==j&&items[i][j]=="0")||(i>=j&&items[i][j]=="0"))
        {
            console.log("pc wins");
        }
        else(count==9)
        "Game draw"

function check(items){

        if(c>1&& (items[0][0]==items[0][1]==items[0][2] || items[0][2]==items[1][2]==items[2][2] || items[2][0]==items[2][1]==items[2][2] ||items[2][0]==items[1][0]==items[0][0] || items[1][0]==items[1][1]==items[1][2] || items[0][1]==items[1][1]==items[2][1] || items[0][2]==items[1][1]==items[2][0] ||items[0][0]==items[1][1]==items[2][2]))
            return 1;
        else
        return 0;
        if(items.includes("-"))
        return 5;
    }   

for(i=0;i<SIDE;i++)
{
    for(j=0;j<SIDE;j++)
    {
        if(items[0][j]==x)
        c++
        else if(items[0][j]==x)
        u++;


}

*/