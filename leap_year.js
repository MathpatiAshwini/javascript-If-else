// var year = require("readline-sync");
// var leap_year=year.questionInt("Enter the year :")
// if (leap_year%4==0){
//     console.log("leap year")
// }else{
//     console.log("not leap year")
//     console.log("enter the valid year to get leap year")
// }


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}