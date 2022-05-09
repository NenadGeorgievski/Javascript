// BMI calculator

const height_conv_ratio = 2.54;
const weight_conv_ratio = 2.2046;

var height = prompt("Please enter your height:");
var weight = prompt("Now enter your weight:");

height_in_cm = height * height_conv_ratio;
weight_in_kg = weight / weight_conv_ratio;

console.log("Your height in cm is: " + height_in_cm);
console.log("Your weight in kilograms is: " + weight_in_kg);

var bmi = weight / (height ** 2);
console.log("Your BMI is: " + bmi.toFixed(2));