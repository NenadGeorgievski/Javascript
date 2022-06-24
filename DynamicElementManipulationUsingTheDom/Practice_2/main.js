let myElement = document.getElementById("two");
console.log(myElement);

let mySecondElement = document.getElementById("one");
console.log(mySecondElement);

let myThirdElement = document.getElementById("three");
myThirdElement.innerHTML = "<p>THis is now A paRagraPh.</p>";

document.getElementById("unorderedList").innerHTML = "";
let myList = ["Apple", "Pear", "Kiwi"];

myList.forEach(element => {
  document.getElementById("unorderedList").innerHTML += "<li>" + element + "</li>";
});