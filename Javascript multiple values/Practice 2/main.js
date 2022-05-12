let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

let multiDimArray = [array1, array2, array3];

console.log(multiDimArray[2][0]);

let array4 = [1,2,3];
let array5 = [array4, array4, array4];
console.log(array5[1][1]);

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true
};

console.log(dog);

console.log(dog.breed);

dog.breed = "Husky";

console.log(dog.breed);

dog.age = "55 years old I think";

console.log(`This dog is ${dog.age}.`);