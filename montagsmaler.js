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

let words = [];
let currentWord = "";
let previousWord = [];
let guess = 0;
let currentTime = new Date();
let timeDifference = 2100 * 10;
let timeControle;

fetch("word.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
  });

function zählerHoch() {
  guess++;
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

function timeStart() {
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
  }
}

function timeStop() {
  clearInterval(timeControle);
}
