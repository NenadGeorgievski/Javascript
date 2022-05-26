let tableArray = [];
let numOfMultiplication = 7;

for (let i = 0; i <= numOfMultiplication; i++) {
  let tempArray = [];

  for (let j = 0; j <= numOfMultiplication; j++) {
    tempArray.push(i * j);
  }
  
  tableArray.push(tempArray);
}

console.table(tableArray);