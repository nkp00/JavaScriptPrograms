/*
*findMynum is a user defined function which takes the number entered by user(number)
 and convert that into an array having elements from 0 to number
*findnum is an user defined function which takes array, initial index and last index as argument
* s is a variable

*/
/*
array1 = [];
let s = 0;
function findMynum(number) {
    let l = number;

    for (i = 0; i <= number; i++)
        array1[i] = i;
    findnum(array1, s, l);
    return "";
}
function findnum(array1, s, l) {
    const input = require('readline-sync');
    m = parseInt((s + l) / 2)
    if (l - s >0 && m>0) {
         //m = parseInt((s+l) / 2)
        answer = input.question(`Is your number between ${s} and ${m}: Y/N :`);
        if (answer == "Y") {
            l = m;
            findnum(array1, s, l)
        }
        else if (answer == "N") {
            s = m + 1;
            findnum(array1, s, l)

        }
        else {
            console.log("you have enter the wrong key");
            findnum(array1, s, l);

        }
    }

    else
        if (m == 0)
            console.log(`YOUR NUMBER IS : ${array1[m + 1]}`);
        else
            console.log(`YOUR NUMBER IS : ${array1[m]}`);

    return "";
}


/***************************************************************************************
program will take three command-line arguments: m (month), d (day), and y (year).
 For m use 1 for January, 2 for February, and so forth. 
For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
*/

/*
function day(date, month, year) {
    d = date;
    m = month;
    y = year;
    y0 = y - parseInt((14 - m) / 12);
    x = (y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(y0 / 400));
    m0 = m + 12 * parseInt((14 - m) / 12) - 2;
    d0 = ((d + x + parseInt(31 * m0 / 12)) % 7);
    array = ['Sunday', 'Monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday'];
    console.log(array[d0]);
    return "";
}

/****************************************************************************************
* N is a variable for storing the length of input string
* bubblesortstr is a user defind fucntion which takes the original string and sort it
* 
*/
/*
function bubblesortstr(string1) {

    var N=string1.length;
    array1=string1.split("");
    for(i=0;i<N;i++)
    {
        for (j=0;j<N;j++)
        {
            if(array1[j+1]<array1[j])          // comparing the adjacent element
            {
                temp=array1[j+1];
                array1[j+1]=array1[j];         // interchanging the element
                array1[j]=temp;
            }
        }
    }
    console.log(array1);                       // prinring the sorted array
    return "";

}


*/




//module.exports ={findMynum,bubblesortstr,day}
/*
var element=0;
function Linkedlist() {
    this.head = null;
}

Linkedlist.prototype.push=function(element)
{
    var node = {
        value: element,
        next: null
    }
    if (!this.head) {
        this.head=node;
    }
    else{
        currentnode=this.head;
        while(currentnode.next)
        {
            currentnode=currentnode.next;
        }
        currentnode.next=node;
    }
}

Linkedlist.prototype.pop=function()
{
    if(!this.head)
    return "List is empty";
    else
    {
        currentnode=this.head;
       let previousnode=currentnode
        while(currentnode.next)
        {   
            previousnode=currentnode
            currentnode=currentnode.next;
        }
        previousnode.next=null;


    }
}
Linkedlist.prototype.popf=function(){
    if(!this.head)
    return "Empty list";
    else
    {
        currentnode=this.head;
        this.head=currentnode.next;
    }

}

var l=new Linkedlist()

l.push(4);
l.push(8);
l.push(9);
l.popf();
l.push(7);
console.log(l.head);

*/


const input = require('readline-sync');


const nkp={
    name:"xyz",
    place:"varanasi",
    age:"xy"
}

nkp.job="capg";

console.log(nkp);