const input=require('readline-sync');
const sumof3bject=require('../sumof3/sumof3BL');

let n=input.questionInt("please enter the number of element in the array:");
let array =[n];
console.log(`please enter ${n} elements`);
for(let i=0;i<n;i++)
{
    array[i]=input.questionInt();
}
console.log(sumof3bject.triplets(array,n));

