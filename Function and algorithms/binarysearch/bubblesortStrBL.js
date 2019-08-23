/*
* N is a variable for storing the length of input string
* bubblesortstr is a user defind fucntion which takes the original string and sort it
* 
*/

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
module.exports = { bubblesortstr}