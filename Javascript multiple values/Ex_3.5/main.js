//Exercise for objects and arrays

let people = {
  friends: []
};

let firstFriend = {
  name: "Filip",
  lastName: "Acevski",
  id: "A023253"
};
let secondFriend = {
  name: "Darko",
  lastName: "Dimitrijevikj",
  id: "A022332"
};

let thirdFriend = {
  name: "Stefan",
  lastName: "Velkovski",
  id: "A012621"
};

people.friends.push(firstFriend, secondFriend, thirdFriend);


console.log(people.friends);
