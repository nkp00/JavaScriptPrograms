var fact= (y) =>{
    var s=0;
    var x=Math.floor(Math.sqrt(y));
    if(y%2==0)
    {
    console.log("2");
    y=y/2;
    }

    for(i=3;i<=x;i+=1)
        {
            if(y%i==0)
            {
                console.log(i);
                y=y/i;
                s+=1;
            }
            
        }
        if(y>2&&y%2!=0)
        console.log(y);
      return "";
  }
  module.exports ={fact}