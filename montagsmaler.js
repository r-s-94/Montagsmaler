const wordEL = document.querySelector(".word");
const oldWordsEL = document.querySelector(".old-words");

let words = [];
let currentWord = "";
let previousWord = [];

fetch("word.text")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
  });

function onClick() {
  if (currentWord) {
    previousWord.push(currentWord);
    oldWordsEL.innerHTML = previousWord.join(", ");
  }
  currentWord = getRandomWord();
  wordEL.innerHTML = currentWord;
}

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
  return words[getRandomNumber(words.length)];
}
