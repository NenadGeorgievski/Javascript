let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (const element of arr) {
  console.log(element);
}