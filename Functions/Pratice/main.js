function sayHello(){
  let name = prompt("Please enter your name:");
  console.log("Hello " + name + "!");
}
//sayHello();




/* addTwoNumber(10, 20);
addTwoNumber(30, 20);


let varFunctionAddTwoNumbers = function(x,y) {
  console.log(x + y);
}

varFunctionAddTwoNumbers(10, 10);
varFunctionAddTwoNumbers(20, 20);

let arrowFunctionAddTwoNumbers = (param1, param2) =>  console.log(param1 + param2);
let arrowFunctionSayHallo = x => console.log("Hello", x + "!");

arrowFunctionAddTwoNumbers(5, 1);
arrowFunctionAddTwoNumbers(1, 3);

arrowFunctionSayHallo("Boban");

let arrowFunctionSayHelloWithArr = (...myArray) => myArray.forEach(e => console.log(e));

let nameArray = ["Neno", "Marija","Dusha"];

arrowFunctionSayHelloWithArr(...nameArray); */

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

let resultsArr = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumber(i, 2*i);
  resultsArr.push(result);
  
}

console.log(resultsArr);