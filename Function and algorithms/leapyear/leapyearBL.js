var leapyear= (year) =>{
    if(year%4==0||(year%100==0&&year%400==0)){
        return "This year is a leapyear";
    }
    else
    return "this year is not a leapyear"
    
}
module.exports ={leapyear}