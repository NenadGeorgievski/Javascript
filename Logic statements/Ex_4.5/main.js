let userInput = prompt("Ask a question?");
let message;

switch (userInput) {
  case "How are you doing?":
    message = "I'm doing fine."
    break;
  case "Who is your daddy?" :
    message = "You are daddy."
    break;
  case "Who buys you items at the groceries store?" :
    message = "My nephew.";
    break;  
  case "Which is your favorite spice girl?" :
    message = "Sugar spice";
    break;  
  default: 
  message = "I don't like your question!";
    break;
}

console.log(message);