/* function logName(){
  console.log("Nenad");
}

function logNameWithParametars(name){
  console.log(name);
}

function convertToHours(minutes){
  let remainder = minutes % 60;
  let hours = Math.floor(minutes / 60);
  return "Your number contains " + hours + " h and " + remainder + " minutes.";
  
}


console.log(convertToHours(455));
console.log(convertToHours(35)); */


let countryArray = ["Macedonia", "Northern Greater Albania", "Kosovo", "Bugarija", "Srbija"]; 


function longestCountryName(arrayOfC){
   let longestName = "";
   if(typeof arrayOfC === "object" && arrayOfC.length > 0){
     for (let i = 0; i < arrayOfC.length; i++) {
       const element = arrayOfC[i];
       if(longestName === ""){
         longestName = element;
       } else if(longestName.length < element.length){
         longestName = element;
       }
       
     }
     return longestName;
   } else {
     return longestName;
   }

 
}
let longName = longestCountryName(countryArray);
console.log(longName, longName.length);

//Recursive function

function getRecursive(num){
  console.log(num);
  if(num > 0) {
    getRecursive(--num);
    console.log("End of call", ++num);
  }
}

getRecursive(3);

function logRecursive(nr){
  console.log("Started function", nr);
  if(nr > 0){
    logRecursive(nr - 1)
  } else {
    console.log("Done with recursion");
  }
  console.log("Ended function:", nr);
}

logRecursive(5);

let arr = [1,2,3,4,5,6];

function reverseArray(arr){
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);   
  }
  return reversedArr;
}
console.log(reverseArray(arr));