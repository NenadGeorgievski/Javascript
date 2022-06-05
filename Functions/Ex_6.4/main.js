let myArr = [];

function addNumbers(x,y){
  return x + y;
}

for (let i = 0; i < 10; i++) {

  let responseVar = addNumbers(i * 5, i * i);

  myArr.push(responseVar);
  
}


console.log(myArr);


(()=> {console.log("samopovikuvacka arrow funkcija");})();