//Creating classes

class Dog {
  constructor(param1,param2,param3,param4){
    this.dogName = param1;
    this.dogWeight = param2;
    this.color = param3;
    this.breed = param4;
  }
}

let dog = new Dog("Johnny", 34, "white", "labrador");
console.log(dog);

class Person {
  #firstName;
  #lastName;

  constructor(firstName,lastName){
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName(){
    return this.#firstName;
  }

  set firstName(fName){
    this.#firstName = fName;
  }

  fullName(){
    return this.#firstName + " " + this.#lastName;
  }
}

let Person1 = new Person("John","Doe");
let Person2 = new Person("Jane", "Doe");

console.log("Hello, " + Person1.firstName);
Person1.firstName = "Johnny";
console.log("Hello, " + Person1.firstName);

console.log("Hello, " + Person2.fullName());

class Vehicle {
  constructor(color,currentSpeed,maxSpeed){
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move(){
    console.log("Moving at: " + this.currentSpeed);
  }

  accelerate(amount){
    this.currentSpeed += amount;
  }
}

class Motorcycle extends Vehicle {
  constructor(color,currentSpeed,maxSpeed,fuel){
    super(color,currentSpeed,maxSpeed);
    this.fuel = fuel;
  }
  doWheelie(){
    console.log("Driving on one wheel!");
  }
}


Motorcycle.prototype.stop = function(){
  this.currentSpeed = 0;
}


let motor = new Motorcycle("black", 120, 220, "gasoline");

console.log(motor.move());
motor.accelerate(120);

console.log(motor.move());

motor.stop();
console.log(motor.move());