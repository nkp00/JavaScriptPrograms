/*
Suffle is a function which arrange the cards and stores in array(array1);
deckSuffle is a function which suffle the deck of cards
print is a fucntion which distribute and print the cards.
*/
var suffle=()=>{
    deck={
        suit:["♣","♦","♥","♠ "],
        rank:["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
    }
    var array1=[];            // storing 52 cards in a array
    for(let i in deck.suit){
    for(let j in deck.rank)
    array1.push(` ${deck.rank[j]} of ${deck.suit[i]} `);}

    print(deckSuffle(array1));
    return "";
}

var deckSuffle=(array1)=>{
    for(let i in array1){
    var n=Math.floor(Math.random()*10);    // generating a random number between 0 to 10
   let temp=array1[i];
    array1[i]=array1[n];
    array1[n]=temp;
    }
    return array1;
}
var print=(array1)=>{
    var array=[];
    for(i=0;i<9;i++)
    {
        array[i]=[];
    }
    for( let j=0;j<9;j++)
    {  
        for (let i=0;i<4;i++)
        {
            array[j][i]=array1.pop();
        }
    }
    console.table(array);                  // printing the 2d array in a tabular form
    return "";
}
module.exports={suffle}