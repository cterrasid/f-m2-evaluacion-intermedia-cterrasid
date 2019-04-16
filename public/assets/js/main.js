'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getInnerHTMLFeedback(feedback) {
  const feedbackEl = document.querySelector('.game__feedback');
  return feedbackEl.innerHTML = feedback;
}

const inputEl = document.querySelector('.game__input');
const buttonEl = document.querySelector('.game__button');
const randomNumber = getRandomNumber(100);

function showFeedbackToUser() {
  const inputValue = parseInt(inputEl.value);
  for (let inputValue = 0; inputValue <= 100; inputValue++) {
    if (inputValue === randomNumber) {
      getInnerHTMLFeedback(`¡Excelente! ${inputValue} es el número ganador`);
    } else if (inputValue > randomNumber) {
      getInnerHTMLFeedback(`${inputValue} es un número muy alto`);
    } else if (inputValue < randomNumber) {
      getInnerHTMLFeedback(`${inputValue} es un número muy bajo`);
    }
  }
  if (inputValue > 100) {
    getInnerHTMLFeedback('');
    alert(`${inputValue} no es un número válido`);
  } else if (inputValue < 0) {
    getInnerHTMLFeedback('');
    alert(`${inputValue} no es un número válido`);
  }
}

const counterEl = document.querySelector('.game__counter');
let counterValue = 0;
function countUserClicks() {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
}

function handleInputValue() {
  const emptyInput = '';
  inputValue === emptyInput;
}

function handleButtonClick() {
  showFeedbackToUser();
  countUserClicks();
  //   handleInputValue();
}

buttonEl.addEventListener('click', handleButtonClick);
// inputEl.addEventListener('blur', handleInputValue);
//# sourceMappingURL=main.js.map