class Person {
  constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(){
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new Person("Neno","Konopishki");

console.log("Very nice to meet you " + person1.getFullName());