let s1 = "Javascript";
let s2 = "Boolean";

console.log(s1.concat(s2), "!");

let result = "Hello Javascript";

let splitArr = result.split(" ");
console.log(splitArr);

let result2 = "Boban,Simona,Barbara,Ljupco";
let splitArr2 = result2.split(",");
console.log(splitArr2);

splitArr2.forEach(element => {
  let hello = "Hello ";
  console.log(hello, element);
})

let letters = ["t", "i", "p","s", "i"];
let x = letters.join("");

console.log(x);



let poem = "Roses are red, violets are blue, and so are you.";

let index_of_re = poem.indexOf("re");

console.log(index_of_re);

let string = "Hello cowboy";

let substring1 = string.slice(5);
let substring2 = string.slice(0,3);

console.log(substring1);
console.log(substring2);

let hi = "Hi buddy";

let hi2 = hi.replace("buddy", "cowboy");

console.log(hi2);

let helou = "Hello Hello";

let replacedHelou = helou.replace("llo", "ll");
console.log(replacedHelou);

let replacedHelou2 = helou.replaceAll("llo", "ll");
console.log(replacedHelou2);