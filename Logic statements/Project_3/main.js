let gameArray = ['rock', 'paper', 'scissors'];

let userChoice = prompt("Enter rock, paper or scissors");
let computerRandomNumber = Math.floor(Math.random() * 3);

let userNumber = gameArray.indexOf(userChoice);

let message;

if(userNumber !== -1){
  if (computerRandomNumber === 0 && userNumber === 2) {
    message = "You have entered: " + gameArray[userNumber] + " and the computer chose: " + gameArray[computerRandomNumber] + ". The computer wins!";
  }   else if(computerRandomNumber === 2 && userNumber === 0) {
    message = "You have entered: " + gameArray[userNumber] + " and the computer chose: " + gameArray[computerRandomNumber] + ". You win!";

  }  else if(computerRandomNumber > userNumber) {
      message = "You have entered: " + gameArray[userNumber] + " and the computer chose: " + gameArray[computerRandomNumber] + ". The computer wins!";

  }  else if(userNumber > computerRandomNumber) {
      message = "You have entered: " + gameArray[userNumber] + " and the computer chose: " + gameArray[computerRandomNumber] + ". You win!";

  }  else {
    message = "You have entered: " + gameArray[userNumber] + " and the computer chose: " + gameArray[computerRandomNumber] + ". It's a tie!";
  }
} else {
  console.log("You have not entered a valid choice");
}

alert(message);