let userName = prompt("Please enter your name: ");

userName = String(userName);

while(!typeof userName === "string"){
  userName = prompt("You have not entered a valid name. Please try again:");
}
let message;

switch (userName.toLowerCase()) {
  case "nenad":
  case "neno":
       message = "You are me.";
    
    break;
  case "dario": message = "Hello buddy.";
    
    break;  

  case "mario": message = "You are not my friend.";  
    break;

  default: message = "I dont know anyone by that name.";
    break;
}

console.log(message);