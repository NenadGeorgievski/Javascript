//Creating objects in Javascript

let myCar = {
  make: 1998,
  model: "Seat Leon",
  fast: true,
  color: "black",
  maxVelocity: 180,
  drive(){
    
    return "I'm driving!";
  },
  stop() {
    console.log("Stopping");
  },
  accelerate(){
    console.log("I'm speeding up!");
  }
};

let carColor = myCar.color;

console.log(carColor);

myCar.forSale = true;

console.log(myCar.make);
console.log(myCar.model);
console.log("Is my car for sale? " + myCar.forSale);

myCar.accelerate();
myCar.stop();


console.log(myCar.drive());

if(myCar.stop() === "I'm speeding up!") {
  console.log("The car is stopping.");
} else {
  console.log("The car has no intention of stopping. Run!");
}
