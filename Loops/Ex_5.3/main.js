let myWork = [];
let stat = false;
for (let i = 1; i <= 10; i++) {
  stat = !stat;
  myWork.push(
    {
      name: "Lesson " + i,
      status: i % 2 === 0 ? true : false
    }
  );
  
}
console.log(myWork);
