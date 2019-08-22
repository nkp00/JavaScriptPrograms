const input=require('readline-sync');
const couponObject=require('../coupon/couponBL');
var n=input.question("Number of coupon you want to generate:");
console.log(couponObject.generateCoupon(n));
