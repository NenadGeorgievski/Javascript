class Person {

  constructor(firstName,lastName,yearsWorked){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }
}
let arrayOfPersons = [];

let person1 = new Person("Boban","Panzovski", 5);
let person2 = new Person("Ivan", "Panzovski", 4);
let person3 = new Person("Sashe", "Panzovski", 3);

arrayOfPersons.push(person1,person2,person3);

Person.prototype.bio = function() {
  return this.firstName + " " + this.lastName + " has worked here for " + this.yearsWorked + " years.";
}

console.log(person1.bio());

console.log(arrayOfPersons);

arrayOfPersons.forEach(element => {
  console.log(element.bio());
});