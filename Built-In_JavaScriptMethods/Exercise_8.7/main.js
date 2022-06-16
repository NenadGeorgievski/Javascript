let myDate = new Date();
myDate.setFullYear(2332);
console.log(myDate);

monthsArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

console.log("The current date is: " + myDate.getDate());
console.log("The current year is: " + myDate.getFullYear());
console.log("The current month is: " + myDate.getMonth());


let namedMonth = monthsArr[myDate.getMonth()];
console.log(namedMonth);