let myVar = "1000";

(
  () => {
    let myVar = "Local 1000";
    console.log(myVar);
  }
)();

console.log(myVar);

let resultVar = (
  function (){
    let myVar = "Local myVar value";
    return myVar;
  }
)();

console.log(resultVar);
console.log(myVar);

(
  param => myVar = param
)("myVar value from parametar");

console.log(myVar);