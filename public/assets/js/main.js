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
    if (inputValue === randomNumber) {
        getInnerHTMLFeedback(`¡Excelente! ${inputValue} es el número ganador`);
    } else if (inputValue > randomNumber) {
        getInnerHTMLFeedback(`${inputValue} es un número muy alto`)
    } else if (inputValue < randomNumber) {
        getInnerHTMLFeedback(`${inputValue} es un número muy bajo`)   
    }
}

const counterEl = document.querySelector('.game__counter');
let counterValue = 0;
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
