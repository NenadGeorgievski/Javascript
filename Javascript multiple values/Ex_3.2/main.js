//Practicing push, splice, indexOf, concat, lastIndexOf methods

let shoppingList  = [];
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples")

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

let lastItem = shoppingList.pop();
console.log(lastItem);

shoppingList.sort();

let index = shoppingList.indexOf("Milk");
console.log("The position of the Milk element is: " + index);
console.log(shoppingList);

shoppingList.splice(1,0, "Carrots", "Lettuce");
console.log(shoppingList);

let shoppingList2 = ["Juice", "Pop"];
let newList = shoppingList.concat(shoppingList2).concat(shoppingList2);
console.log(newList);

let popIndex = newList.lastIndexOf("Pop");

console.log("The index position of the last item Pop is: " + popIndex);
console.log("The final list should look like this: " + newList);