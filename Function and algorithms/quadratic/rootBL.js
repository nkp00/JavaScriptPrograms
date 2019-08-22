/************************************************************************
 * @purpose : finding the roots of a quadratic equation
 * @file: rootBL.js
 * @overview:Prinitng and finding the  roots of a quadratic equation
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
var root= (a,b,c) =>{  
    let delta=Math.sqrt((b*b)-4*a*c);
    let x1=(-b+delta)/2*a;
    let x2=(-b-delta)/2*a;
    if(delta>=0)
    console.log(`The roots are ${x1}, ${x2}`);
    else
    {
        realpart=-b/(2*a);
        imgpart=(Math.sqrt(-((b*b)-(4*a*c))))/(2*a);
        let x12=`${realpart}+${imgpart}i`;
        let x22=`${realpart}-${imgpart}i`;
        if(imgpart==1&&realpart==0)
        console.log("Roots are +i,-i");
        else
        console.log(`The roots are ${x12},  ${x22}`);
    }

return "";
}
module.exports ={root}