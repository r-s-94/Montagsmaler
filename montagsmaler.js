const wordEL = document.querySelector(".word");
//  main-div
function changeToFeatureDiv() {
  document.getElementsByClassName("main-div")[0].style.display = "none";
  document.getElementsByClassName("feature-div")[0].style.display = "block";
}

//  feature-div
function changeToFeatureDivOne() {
  document.getElementsByClassName("feature-div")[0].style.display = "none";
  document.getElementsByClassName("main-div")[0].style.display = "none";
  document.getElementsByClassName("feature-div1-repeat")[0].style.display =
    "none";
  document.getElementsByClassName("feature-div1")[0].style.display = "block";
  timeStart();
}
function changeToMainDiv() {
  document.getElementsByClassName("feature-div")[0].style.display = "none";
  document.getElementsByClassName("main-div")[0].style.display = "block";
}

//  feature-div1-repeat
function changeToFeatureDivOne() {
  document.getElementsByClassName("feature-div1-repeat")[0].style.display =
    "none";
  document.getElementsByClassName("main-div")[0].style.display = "none";
  document.getElementsByClassName("feature-div")[0].style.display = "none";
  document.getElementsByClassName("feature-div1")[0].style.display = "block";
  timeStart();
  resetWords();
}

function changeToFeatureDiv() {
  document.getElementsByClassName("feature-div1-repeat")[0].style.display =
    "none";
  document.getElementsByClassName("main-div")[0].style.display = "none";
  document.getElementsByClassName("feature-div1")[0].style.display = "none";
  document.getElementsByClassName("feature-div")[0].style.display = "block";
  timeStop();
}

//  first-feature-div
const oldWordsEL = document.querySelector(".old-words");
const roundTime = 1000 * 15;
let words = [];
let currentWord = "";
let trueWords = [];
let falseWords = [];
let currentStorage = [];
let guess = 0;
let currentTime = new Date();
let timeDifference = roundTime;
let timeControle;
let text = "";
let text2 = "";

fetch("word.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
  });

function rightWords() {
  guess++;
  if (currentWord) {
    trueWords.push(currentWord);
    currentStorage.push(currentWord);
    oldWordsEL.innerHTML = currentStorage.join(", ");
  }
  currentWord = getRandomWord();
  wordEL.innerHTML = currentWord;
}

function notRightWords() {
  guess++;
  if (currentWord) {
    falseWords.push(currentWord);
    currentStorage.push(currentWord);
    oldWordsEL.innerHTML = currentStorage.join(", ");
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

function timeStart() {
  timeDifference = roundTime;
  timeControle = setInterval(timeCalculation, 100);
}

function timeCalculation() {
  let currentTime2 = new Date();

  timeDifference -= currentTime2 - currentTime;
  currentTime = new Date();

  let s = timeDifference;
  let sString = String(s);
  sString = sString.slice(0, -3);

  sString = sString < 10 ? "0" + sString : sString;
  document.getElementsByClassName("timerOut")[0].innerHTML = sString;

  if (sString == 0) {
    document.getElementsByClassName("main-div")[0].style.display = "none";
    document.getElementsByClassName("feature-div")[0].style.display = "none";
    document.getElementsByClassName("feature-div1")[0].style.display = "none";
    document.getElementsByClassName("feature-div1-repeat")[0].style.display =
      "block";
    timeStop();
    document.getElementsByClassName("scoreOut")[0].innerHTML = guess;
    for (let i = 0; i < trueWords.length; i++) {
      text += trueWords[i] + "<br>";
    }
    for (let i = 0; i < falseWords.length; i++) {
      text2 += falseWords[i] + "<br>";
    }
    document.getElementsByClassName("true-word-list")[0].innerHTML = text;
    document.getElementsByClassName("false-word-list")[0].innerHTML = text2;
  }
}

function timeStop() {
  clearInterval(timeControle);
}

function resetWords() {
  trueWords.pop(0, "");
  falseWords.pop(0, "");
}
