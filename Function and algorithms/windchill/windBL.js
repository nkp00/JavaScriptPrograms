/************************************************************************
 * @purpose : Calculating the effective temperature
 * @file: windBL.js
 * @overview:t and v,temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
             calculating effective temperature (the wind chill) 
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
var effective= (t,v) =>{  
  
    let w1=35.74+0.6215*t;
    let w2=(0.4275*t)-35.75;
    let w3=Math.pow(v,0.16);

    let w= w1+(w2*w3);

return `The windchill is ${w}`;
}
module.exports ={effective}