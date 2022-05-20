let userInput = prompt("Please enter a number:");

userInput = Number(userInput);

while(isNaN(userInput)){
 userInput = prompt("You have not entered a valid number. Please try again:");
}

let randomNumber = Math.floor(Math.random()*100);

let message;

if(userInput < randomNumber) {
  message = "You have entered " + userInput + " which is smaller than our random number " + randomNumber;
} else if(userInput === randomNumber) {
  message = "You have entered " + userInput + " which is equal to our random number " + randomNumber;
} else {
  message = "You have entered " + userInput + " which is greater than our random number " + randomNumber;
}

console.log(message);
