class MenuItems {
  #item1 = 15;
  #item2 = 33;

  constructor(amount1,amount2){
    this.amount1 = amount1;
    this.amount2 = amount2;
  }

  mixIngredients(){
    return this.amount1 * this.#item1 + this.amount2 * this.#item2;
  }

  get getPrice(){
    return this.mixIngredients();
  }
}

let order1 = new MenuItems(10,12);
console.log(order1.getPrice);

let order2 = new MenuItems(1,1);
console.log(order2.getPrice);