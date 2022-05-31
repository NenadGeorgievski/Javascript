/* let d = new Date();
let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Sample output: Today is: " + daysArr[d.getDay()]);
console.log("Current time is: " + d.getHours() + " PM : " + d.getMinutes() + " : " + d.getSeconds());
console.log("---------------------------------------------------------------------------------");
let print = prompt("Type yes if you want to print the content of the current window.");
if(print === "yes"){
  window.print();
} else {
  console.log("OK, no printing for you. :(");
} */
/* console.log("---------------------------------------------------------------------------------");

let date = new Date();
console.log(date.getDate() + "." + date.getMonth() + "." + date.getFullYear());

console.log("---------------------------------------------------------------------------------");

let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
let triangleArea = Math.sqrt(s * (s - a)*(s - b)*(s - c));
console.log(triangleArea);

console.log("---------------------------------------------------------------------------------");

var stringToModify = "w3resource";


setInterval(function(){
  stringToModify = stringToModify[stringToModify.length - 1] + stringToModify.substring(0, stringToModify.length - 1);
  console.log(stringToModify);
},1000);

console.log("---------------------------------------------------------------------------------"); */

/* let year = prompt("Please enter a year: ");

if((year % 4) === 0) {
  console.log("This is a leap year. COngratazZ!");
} else {
  console.log("This is not a leap year. Sozz!");
}
 */
/* console.log("---------------------------------------------------------------------------------");

for (var year = 2014; year <= 2050; year++) {
  
  let d = new Date(year,0,1);
  if(d.getDay() === 0){
    console.log("The following year has Sunday as first of January: " + year);
  }
}

console.log("---------------------------------------------------------------------------------");

let x = prompt("Please enter a number between 0 and 10");
if(x > 10) {
  console.log("You are not playing by my rules. Shame on you! Go away.");
} else {
  let randomNum = Math.floor(Math.random() *10 + 1);
  console.log(randomNum);
  if(x == randomNum){
    console.log("Congratz.You guessed right!");
  } else {
    console.log("Better luck next time.");
  }
} */

/* console.log("---------------------------------------------------------------------------------");

let currentDay = new Date();
const christmasDay = new Date(currentDay.getFullYear(),0,6);
if(currentDay.getMonth() == 0 && currentDay.getDate() > 6) {
  christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}
const one_day_time = 1000 * 60 * 60 * 24;
console.log(`${Math.ceil((christmasDay.getTime() - currentDay.getTime()) / (one_day_time))} days left until Christmas.`); 
 */
console.log("---------------------------------------------------------------------------------");




