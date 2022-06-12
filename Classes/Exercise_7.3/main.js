class Animal {
  constructor(species, sound){
    this.species = species;
    this.sound = sound;
  }

  printAnimal(){
    console.log(this.species + " makes this sound " + this.sound);
  }
}

Animal.prototype.fly = function(){
  switch (String(this.species).toLowerCase()) {
    case "cow":
      console.log("Cows don't fly");
      break;
    case "owl":
      console.log("Owls can fly, yes indeed.");
      break;
    default:
      console.log("I'm not sure about this one.");
      break;
  }
}

let cow = new Animal("Cow","Mooooo");
let owl = new Animal("Owl"," whooo whooo");
let cat = new Animal("cat","miyauuu");

cow.printAnimal();
cow.fly();

owl.printAnimal();
owl.fly();

cat.printAnimal();
cat.fly();