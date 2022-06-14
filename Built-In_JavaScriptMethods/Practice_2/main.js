let arr = ["grapefruit", 4, "hello", 6.6, true];

function printStuff(ele,ind){
  console.log("element: " + ele + " index " + ind);
  console.log("type of element: ", typeof ele);
}

arr.forEach(printStuff);

let someArr = ["squirrel", 5, "cat", new Date(), true];

function checkString(element, index){
  return typeof element === "string";
}

let filterArr = someArr.filter(checkString);
console.log(filterArr);

let arrToMap = [1,2,3,4,5];
let mapiranArr = arrToMap.map(x => x + 1);
console.log(mapiranArr);