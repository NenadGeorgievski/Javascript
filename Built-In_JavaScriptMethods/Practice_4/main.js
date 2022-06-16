let currentDateTime = new Date();

console.log(currentDateTime);

let dateNow = Date.now();
console.log(dateNow);

let miliDate = new Date(1000);
console.log(miliDate);

let newTime = new Date(dateNow + 3600*1000);
console.log(newTime);

let specificDate = new Date(2022,0,23,33);
console.log(specificDate);

let d = new Date();

console.log("The year is " + d.getFullYear());
console.log("The months is " + d.getMonth());
console.log("The date is " + d.getDate());
console.log("The day is " + d.getDay());
console.log("The hour is " + d.getHours());
console.log("The number of minutes is " + d.getMinutes());
console.log("The number of seconds is " + d.getSeconds());

d.setFullYear(2010);
console.log("The year is " + d.getFullYear());

let myDate = Date.parse("06/05/2022");
console.log(new Date(myDate));