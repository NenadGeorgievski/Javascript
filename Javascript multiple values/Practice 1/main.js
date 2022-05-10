let arr = ["Hello there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);
console.log(arr);

console.log("The first item of the array is: " + arr[0] + " which is of the type: " + typeof(arr[0]));
console.log("The second item of the array is: " + arr[1] + " which is of the type: " + typeof(arr[1]));
console.log("The third item of the array is: " + arr[2] + " which is of the type: " + typeof(arr[2]));

let colors = ["yellow", "green", "blue"];

let index = colors.indexOf("green");
console.log(index);

let booleans = [true,false,true,false];
let emptyArr = [];

console.log("The length of the colors array is " + colors.length);
console.log("The length of the booleans array is " + booleans.length);
console.log("The length of the emptyArr is " + emptyArr.length);

let arr10 = [0,1,2,3,4,5,6,7,8,9];
console.log(arr10.length);
console.log("The last item of this array is: " + arr10[arr10.length - 1]);

let shoppingList = ["Milk", "Bread", "Apples"];
console.log("The length of the shoppingList array is: " + shoppingList.length);
shoppingList[1] = "Bananas";
console.log("The newly updated array now looks like this: " + shoppingList);

let favoriteFruit = ["Bananas", "Kiwi", "Pomegranate"];
console.log(favoriteFruit);

favoriteFruit.push("Tangerine");
console.log("The new array has the following items: " + favoriteFruit);

let arrayLength = favoriteFruit.push("Watermellon");
console.log(arrayLength);

console.log(favoriteFruit);

favoriteFruit.splice( 2, 0, "Mango", "Passion fruit");
console.log(favoriteFruit);

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = arr1.concat(arr2);
console.log(arr3);
