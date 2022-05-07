
//Global variable
let lName = "Georgievski";
let age = 23;

//Global const variable
const height = 180;

function FirstName(firstname) {
  let fName = firstname;  //Local variable
  console.log(fName + " " + lName);
}

function LastName(){
  console.log(lName);
}

function bio(){
  let fname = "Nenad";

  age++;
  height++;

  console.log(fname + " " + lName + " Age:" + age + " Height:" + height);
}

FirstName("Nenad");
LastName();

bio();
bio();