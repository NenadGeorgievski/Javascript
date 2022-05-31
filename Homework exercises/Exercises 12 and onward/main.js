console.log(window.location.hostname);

console.log("-----------------------------------");

var firstValue = 'someName';
var secondValue = 10;

//This refers to the global object, the object window

this[firstValue] = secondValue;
console.log(this[firstValue]);

console.log("-----------------------------------");

var file1 = "docs.html";
var file2 = "javascript.js";

function getFileExtension(filename) {
  return filename.split('.').pop();
}

console.log(getFileExtension(file1));
console.log(getFileExtension(file2));


console.log("--------------------------------------");

function difference(x){
  if (x <= 13) {
    return x - 13;
  } else {
    return 2 * (x - 13);
  }
}


console.log(difference(5));
console.log(difference(225));

console.log("--------------------------------------");

function sum(x,y){
  if(x == y){
    return 3 * (x + y);
  }
  return x + y;

}
console.log(sum(4,5));
console.log(sum(5,5));


console.log("--------------------------------------");

function differenceWithNineteen(x){
  if(x <= 19){
    return x - 19;
  } else {
    return 3 * (x - 19);
  }
  
}

console.log(differenceWithNineteen(20));
console.log(differenceWithNineteen(10));

console.log("----------------------------------------");

function checker(x,y){
  if( x == y || x + y == 50){
    return console.log("It is true!");
  }
  return console.log("It it false!");
}

checker(23,30);
checker(20,30);
checker(20,20);

console.log("----------------------------------------");

function withinTwenty(x){
  if((x - 100 <= 20) || (x - 400 <= 20)){
   console.log("It is within 20 of 100 or 400.");
  } else {
    console.log("It is not!");
  }
  

}

withinTwenty(115);
withinTwenty(430);
withinTwenty(120);

console.log("----------------------------------------");

function positiveOrNegative(x,y){
  if((x > 0  && y < 0) || (x < 0 && y > 0)){
    console.log("One of the supplied numbers is positive and the other one is negative.");
  } else {
    console.log("The condition is not met.");
  }
}

positiveOrNegative(2, -1);
positiveOrNegative(1,1);
positiveOrNegative(-2,-4);