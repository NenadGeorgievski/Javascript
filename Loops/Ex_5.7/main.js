let simpleObj = {
  basic: "thing",
  nothing: "special",
  special: "k"
};

for (const key in simpleObj) {
  console.log("The name of the property is: " + key + " and the value is: " + simpleObj[key]);
}

let array = [];

for (const prop in simpleObj) {
  array.push(simpleObj[prop]);
    
  }
console.log(array);
console.log(Object.keys(simpleObj));

for (const keys of Object.keys(simpleObj)) {
  console.log(`${keys} : ${simpleObj[keys]}`);
}