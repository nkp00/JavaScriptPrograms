var flip= (y) =>{
    if(y.includes('-')||y.includes('.')){
        return "please enter a positive integer";
    }
    else
    {
        var h=0,t=0 // defining two variable
        var x=0;
        while(y)
        {
            x=Math.random();//Generating a random number between 0to 1
            if(x>0.5)
            h++;
            else
            t++;
            y--;
        }
        var h1=h/(h+t)*100;// Calculating the percentage of heads
        var t1=t/(h+t)*100;
        return 'Percentage of heads vs tails :'+h1+','+t1;
    }
    
}
module.exports ={flip}