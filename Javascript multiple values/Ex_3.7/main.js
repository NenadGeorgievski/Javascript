//Company products array

let storeArray = [];

let product1 = {
  name: "Remote",
  model: "Phillips",
  cost: 120,
  quantity: 12
};

let product2 = {
  name: "Bath soap",
  model: "Alkaloid",
  cost: 1202,
  quantity: 11
};

let product3 = {
  name: "Ice Cube",
  model: "Watery",
  cost: 0,
  quantity: "unlimited"
};

storeArray.push(product1, product2, product3);
console.log(storeArray);

console.log(storeArray[2].quantity);

storeArray[0].name = "TV Remote";
storeArray[1].model = "Galafarm";

console.log("The name of the first product is: " + storeArray[0].name);
console.log("The model of the second product is: " + storeArray[1].model);