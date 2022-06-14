

let basicString = "ThIs wIlL bE CapITaLiZeD FoR EveRY wORd";

function capitalizeFirstWord(str1){

  let loweredStr = str1.toLowerCase();
  
  let newArr = [];
  let arr = loweredStr.split(" ");
  

  arr.forEach(element => {
    let firstChar = element.charAt(0).toUpperCase();
    let restChar = element.slice(1);
    newArr.push(firstChar.concat(restChar));
  })

  loweredStr = newArr.join(" ");

  return loweredStr;
}

console.log(capitalizeFirstWord(basicString));