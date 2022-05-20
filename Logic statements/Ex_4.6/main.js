let prize = prompt("Please select a value between 0 and 10.");
prize = Number(prize);
outputMessage = "My selection: ";
console.log(prize);

switch (prize) {
  case 0: userOutput = "You have won nothing!";
    break;

  case 1:
  case 2: userOutput = "You have won everything you want!";
    break;

  case 3:
  case 4:
  case 5:
  case 6:  userOutput = "You don't need anything from me.";
    break;
  
  case 7:
  case 8:
  case 9:
  case 10: userOutput = "You won the lottery. COngratz.!";
    break;

  default: userOutput = "Take whatever you want baby.";
    break;
}

console.log(outputMessage + prize + " has yielded the following result: " + userOutput);

function betting(){
  let bet = document.getElementById("bet").value;
  console.log(bet);
  let randomNumber = Math.floor(Math.random() * 10);
  let message;
  switch (randomNumber) {
    case 1:
    case 2:
    case 3:
    case 5:
    case 9:
            message = "Congratulations. You have won: " + bet* 2.45;
                  
      break;
    case 7:
    case 4:
            message = "Congratulations. You have won: " + bet * 100;
      break;
    default: message = "Sorry, try again.";
      break;
  }
  document.getElementById("message").innerHTML = message;
}