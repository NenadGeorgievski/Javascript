class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log("Hello, how are you " + this.firstName + "?");
  }
}

let person1 = new Person("Nenad", "Georgievski");
console.log(person1.firstName + ", you are the man.");
let person2 = new Person("Marija", "Popovska");
console.log(person2.firstName + ", you are not a man.");

person2.greet();