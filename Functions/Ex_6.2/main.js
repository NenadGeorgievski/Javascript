var descArr = ["cute", "cool", "fun", "slow"];



function greetUser(){
  let userName = prompt("Enter your name:");
  let randomNum = Math.floor(Math.random()*4);

  let userChar = descArr[randomNum];

  console.log("Hey " + userName + " you are very " + userChar + ".");
}

greetUser();