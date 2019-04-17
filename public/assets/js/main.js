'use strict';

const inputEl = document.querySelector('.game__input');
const inputValue = parseInt(inputEl.value);
const buttonEl = document.querySelector('.game__button');
const feedbackEl = document.querySelector('.game__feedback');
const counterEl = document.querySelector('.game__counter');
let counterValue = 0;
const unvalidNumber = ' no es un número válido';
const winnerNumber = ' ¡Es el número ganador!';
const lowNumberHint = ' es un número muy bajo';
const highNumberHint = ' es un número muy alto';
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const getInnerHTMLFeedback = (feedback) => {feedbackEl.innerHTML = feedback;};
const feedbackMood = (userNumber, mood) => {getInnerHTMLFeedback(userNumber+mood);};

function showFeedbackToUser() {
  const inputValue = parseInt(inputEl.value);
  if (inputValue === randomNumber) {
    feedbackMood(inputValue, winnerNumber);
  } else if (inputValue > randomNumber) {
    feedbackMood(inputValue, highNumberHint);
  } else if (inputValue < randomNumber) {
    feedbackMood(inputValue, lowNumberHint);
  }
  if (inputValue > 100) {
    feedbackMood(inputValue, unvalidNumber);
  } else if (inputValue < 0) {
    feedbackMood(inputValue, unvalidNumber);
  }
}

function countUserClicks() {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
}

function handleButtonClick() {
  showFeedbackToUser();
  countUserClicks();
}

buttonEl.addEventListener('click', handleButtonClick);
//# sourceMappingURL=main.js.map
