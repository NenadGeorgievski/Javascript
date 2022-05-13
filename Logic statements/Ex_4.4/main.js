// Switch statement

let randomNumber = Math.random();

randomNumber = randomNumber * 6;

randomNumber = Math.floor(randomNumber);

let userQuestion = prompt("What do you want to know about your future?");

var userResponse;


switch (randomNumber) {
  case 0:  userResponse = "Nothing good is coming for you.";
    
  break;
  case 1:  userResponse = "You're going on an adventure.";
  
  break;
  case 2:  userResponse = "You will meet the love of your life.";
  
  break;
  case 3:  userResponse = "You're gonna get hit by a bus.";
  
  break;
  case 4:  userResponse = "Your wife will leave you.";
  
  break;
  case 5:  userResponse = "Tomorrow you will win the lottery.";
  
  break;

 
}

console.log("You asked the following question: " + userQuestion);
console.log("The eight ball answered: " + userResponse);