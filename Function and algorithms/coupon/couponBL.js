/************************************************************************
 * @purpose :
 * @file: couponBL.js
 * @overview:generating distinct coupon numbers
 * @author:Neeraj kr prajapati
 * @version: v8.15.0
 * @since: 20/08/2019
 */




var generateCoupon= (n) =>{
    var coupon=[]; // defining an array
    var c=0;
    for(i=0;i<n;i++){
        var x=Math.floor(Math.random()*10);
        while(coupon.includes(x))
        {
            x=Math.floor(Math.random()*10);
            c++
        }
        coupon.push(x);
    }

   for(a=0;a<n;a++)
    console.log(coupon[a]); // priniting the coupons
    console.log("total number of count: " +c);

return "";

}
    

module.exports ={generateCoupon}