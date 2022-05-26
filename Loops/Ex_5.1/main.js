let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let rightNumber = false;

console.log(randomNumber);

while (!rightNumber) {
  let userNumber = prompt("Enter a number between 0 and " + maxNumber);
  userNumber = Number(userNumber);

  if(userNumber === randomNumber){
    alert("You guessed the right number. Congratz!");
    rightNumber = true;
  } else if(userNumber > randomNumber){
    alert("You guessed higher than our number. Try again! The right number was: " + randomNumber);
  } else {
    alert("You guessed lower than our number. Please try again! The right number was: " + randomNumber);
  }
}