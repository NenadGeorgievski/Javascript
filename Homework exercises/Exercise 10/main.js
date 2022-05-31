function multiply(){
  let x = document.getElementById("number1").value;
  let y = document.getElementById("number2").value;

  let score = x * y;
  document.getElementById("result").innerHTML = score;
}

function divide(){
  let x = document.getElementById("number1").value;
  let y = document.getElementById("number2").value;

  let score = x / y;
  document.getElementById("result").innerHTML = score;
}