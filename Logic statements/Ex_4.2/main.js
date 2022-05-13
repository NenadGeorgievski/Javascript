let message;
let userAge = prompt("Please enter your age:");

let age = Number(userAge);

if(isNaN(age)) {
  alert("You have not entered a valid number.");
}


console.log(age);

if(age >= 21) {
  message = "You are free to purchase alcohol";
} else if(age >= 19) {
  message = "You can enter, but no booze";
} else {
  message = "You shall not pass."
}

console.log(message);


//Ternary operator

let id = false;

let pass = id ? "allowed" : "not allowed";
console.log(pass);