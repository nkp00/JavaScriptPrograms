const input=require('readline-sync');
const windchillbject=require('../windchill/windBL');
let t=0,Tk=0,v=0;


while(1){
    t=input.questionInt("Enter temperature(in Fahrenheit):");
    Tk=(t+459.67)*(5/9);
    if(Tk>=50)
    console.log("please enter temperature bellow absolute 50");
    else
    break;
}
while(1){
    v=input.questionInt("Enter wind speed(in miles per hour):");

    if(v<3||v>120)
    console.log("The wind speed should be between 3 to 120 miles per hour");
    else
    break;
}
console.log(windchillbject.effective(t,v));

