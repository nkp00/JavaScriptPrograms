/************************************************************************
 * @purpose : finding the distance 
 * @file: distBL.js
 * @overview:Prinitng and finding the  distance of a point x,y from the origin
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 21/08/2019
 */
var dist= (x,y) =>{  

    let d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));

return d;
}
module.exports ={dist}
