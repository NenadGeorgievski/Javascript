let myTable = [];

let numberOfRows = prompt("Enter the number of rows: ");
numberOfRows = Number(numberOfRows);
let numberOfColumns = prompt("Enter the number of columns: ");
numberOfColumns = Number(numberOfColumns);

for (let i = 0; i < numberOfRows; i++) {
  myTable.push([]);
  for (let j = 0; j < numberOfColumns; j++) {
    myTable[i].push(`Row ${i} Col ${j}`);
    
  }
  
}

console.table(myTable);