var readlineSync = require("readline-sync");
var userName = readlineSync.question("your name please!");
console.log("welcome "+ userName);
console.log("\n enter your birth-date");
var userYear = readlineSync.question("\n enter year ")

var userMonth= readlineSync.question("\n enter month no.")
if(userMonth > 12)
{
    console.log("invalid")
}
else{
var userDate = readlineSync.question("\n enter day no.")
 if (userDate > 31)
 {
    console.log("invalid")
 }
 else{
    console.log("your birthday is "+userDate+"-"+ userMonth +"-"+ userYear);
    
if((userYear%4 ==0) && (userYear%100 != 0)||( userYear%400==0))
{
    console.log("\n you were born in an leap year");

}
else{
    console.log("\n you were NOT born in an leap year");   
}
 }
}