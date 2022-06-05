let num1 = 115;
let num2 = 22;
let operator = "+";

function calculator(number1,number2,operatorChoice){
  switch (operatorChoice) {
    case "+":
      return number1 + number2;
      
      break;
    case "-":
      return number1 - number2;
      break;
    case "*":
      return number1 * number2;
        
      break;
    case "/":
        return number1 / number2;
          
        break;
    default: 
    return number1 + number2;
      break;
  }
}


console.log(calculator(num1,num2,operator));
console.log(calculator(12,10,"-"));