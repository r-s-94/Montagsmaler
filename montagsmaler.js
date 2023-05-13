const wordEL = document.querySelector(".word");
const oldWordsEL = document.querySelector(".old-words");

let words = [];
let currentWord = "";
let previousWord = [];

fetch("word.txt")
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

function getRandomNumber(minNumber) {
  return Math.floor(Math.random() * minNumber);
}

function getRandomWord() {
  return words[getRandomNumber(words.length)];
}
