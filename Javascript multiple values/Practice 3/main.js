//Nesting objects in objects

let company = {
  companyName: "Healthy Candy",
  activity: ["food manufacturing", "improving kid's health", "manufacturing toys"],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  yearOfEstablishment: 2021
};

console.log("The zip code of the company is " + company.address.zipcode);

company.address.zipcode = "33117";

console.log("The new zip code of the company is " + company.address.zipcode);

company["address"]["city"] = "New York";

console.log("The new city address is: " + company.address.city);

let specificActivity = company.activity[1];
console.log(specificActivity);

