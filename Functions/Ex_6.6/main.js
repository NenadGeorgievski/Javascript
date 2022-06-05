function calcFactorial(num){
  console.log(num);
  if(num === 0){
    return 1;
  } else {
    return (num * calcFactorial(num - 1))
  }
}

console.log(calcFactorial(8));