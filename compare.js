var  u = require("readline-sync");
var user = u.questionFloat("enter your number:-");
if (user<20 && user>=10){
    if(user>=20 && user<=30){
        console.log("higer")
    }else{
        console.log("medel")
    }
}else{
    console.log("lower");
}
