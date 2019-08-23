/*temp is varible 
* bubblesort is an user defined function which takes two arguments array and total element in the array



*/

let temp=0;
function bubblesort(array1,N)
{
    for(i=0;i<N;i++)
    {
        for (j=0;j<N;j++)
        {
          //  console.log(array1[j]);
            if(array1[j+1]<array1[j])          // checking the adjacent values
            {
               // console.log("hello");
                temp=array1[j+1];
                array1[j+1]=array1[j];
                array1[j]=temp;
            }
        }
    }
    console.log("The sorted array is ");
    console.log(array1);
    return "";
}
module.exports = {bubblesort}