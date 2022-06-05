function consoleSomething(x){
  console.log(x);
}

consoleSomething(123);
consoleSomething("Yahoo");
consoleSomething(true);

console.log("--------------------------------");

function writeTwoNumbers(x,y){
  if(typeof x === "number" && typeof y === "number"){
    console.log(x + " is a number, and also " + y + " is a number.");
    console.log(x + " * " + y +  " = " + x*y);
  } else {
    console.log("This function was not called with two numbers as it's arguments.");
  }
}

writeTwoNumbers(12,122);

writeTwoNumbers(true, 122);

console.log("--------------------------------");


console.log("--------------------------------");

function checkNumber(x){
  if(x >= 0){
    console.log(x + " is a positive number.");
  } else {
    console.log(x + " is a negative number");
  }
}
checkNumber(223);

console.log("--------------------------------");

function checkEvenOrOddNumber(x){
  if(x % 2 === 0) {
    console.log(x + " is an even number.");
  } else {
    console.log(x + " is an odd number.");
  }
}
checkEvenOrOddNumber(22);
checkEvenOrOddNumber(21);

console.log("--------------------------------");

let evenOrOdd = x => x % 2 === 0 ? console.log(`${x} is an even number.`) : console.log(`${x} is an odd number.`);

evenOrOdd(233);
evenOrOdd(4);

console.log("--------------------------------");

function isPalindrome(word){
  let reversedWord = word.split("").reverse().join("");

  if(word.toLowerCase() === reversedWord.toLowerCase()){
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
}

isPalindrome("kalabalak");
isPalindrome("palindrome");