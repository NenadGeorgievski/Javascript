
let word = "Konkatinacija";

function wordScrambler(stringParametar = "") {
  let maxLenght = stringParametar.length;
  let scarmbledWord = "";

  for (let i = 0; i < maxLenght; i++) {
    let randomIndex = Math.floor(Math.random() * stringParametar.length);
    //console.log(stringParametar[randomIndex]);
    let randomCharacter = stringParametar[randomIndex];
    scarmbledWord = scarmbledWord + randomCharacter;
    stringParametar = stringParametar.substring(0,randomIndex) + stringParametar.substring(randomIndex + 1);
  }

  return scarmbledWord;
}

let scWord = wordScrambler(word);
console.log(scWord);