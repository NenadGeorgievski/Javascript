function convertToFahrenheit(){

  let temp = document.getElementById("celsius").value;

  let convertedTemp = (temp * 1.8) + 32;

  document.getElementById("farResult").innerHTML = convertedTemp;
}


function convertToCelsius(){

  let temp = document.getElementById("fahreinheit").value;

  let convertedTemp = (temp - 32) / 1.8;

  document.getElementById("celResult").innerHTML = convertedTemp;
}