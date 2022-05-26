let stringVar;

let skipNumber = 5;

for (let i = 0; i < 10; i++) {
  if(i === skipNumber){
    break;
  }
  if(i === 9) {
    stringVar += i;
  } else {
    stringVar += i + ", ";
  }
  
}

console.log(stringVar);