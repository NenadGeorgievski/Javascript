let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

let filteredArr = arr.filter((element, index) => {
  console.log(element, " at position: ", index);
  return arr.indexOf(element) === index;
})

console.log(filteredArr);