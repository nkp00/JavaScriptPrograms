var game= (s,g,n) =>{
var a=s;
var c=0,l=0;
    for(i=0;i<n;i++)
    { 
        s=a;
        while(s>0&&s<g)
        {   
            var x=Math.random()
            if(x>0.5)
            {
                s++;
            }
            else
            {
                s--;
            }
         }
        if(s==g)
         c++;
        else
          l++;
    }

    var w=c*100/(c+l);
    var z=100-w;
    console.log("number of win:"+c+"win %"+w+"loss %"+z);
return "";

}
    

module.exports ={game}