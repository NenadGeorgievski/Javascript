
let myCardData = [
  {
     imgName: "img/slika1.jpg",
     name: "Boban Srezovski",
     description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
     linkedIn: "https://www.linkedin.com/in/boban-srezovski/",
  },
  {
     imgName: "img/slika2.jpg",
     name: "Ljupcho Shemov",
     description:"Some quick example text to build on the card title and make up",
     linkedIn: "https://www.linkedin.com/in/ljupcho-shemov-4a07161a/",
  },
  {
     imgName: "img/slika3.jpg",
     name: "Ljupco Trajanovski",
     description: "Some quick example text to build",
     linkedIn: "https://www.linkedin.com/in/ljupco-trajanovski-78b4832b/",
  },
  {
     imgName: "img/slika4.jpg",
     name: "Kristijan Pecev",
     description: "Some quick text",
     linkedIn: "https://www.linkedin.com/",
   },
   {
       imgName: "img/slika5.jpg",
       name: "Ilija Trajkovski",
       description: "Some quick text",
       linkedIn: "https://www.linkedin.com/in/ilija-trajkovski-488248232/",
   }
];

let main = document.getElementById("main");
myCardData.forEach(obj => {
  main.innerHTML += `
  <div class="card" style="width: 18rem; height: fit-content;" >
  <img src="./${obj.imgName}" class="card-img-top" alt="..." height="250">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text">${obj.description}</p>
    <a href="${obj.linkedIn}" class="btn btn-primary">Visit LinkedIn page</a>
  </div>
</div>
  `
});