'use strict';
const inputEl = document.querySelector('.game__input');
const buttonEl = document.querySelector('.game__button');
const counterEl = document.querySelector('.game__counter');
const feedbackEl = document.querySelector('.game__feedback');

//NÚMERO AL AZAR 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Número Ganador: ', randomNumber);

//EVENTO
function handleButtonClick() {
    const inputValue = parseInt(inputEl.value);
    console.log('Elección del usuario: ', inputValue);
    if (inputValue === randomNumber) {
        feedbackEl.innerHTML = (`¡Enhorabuena! ${inputValue} es el número ganador`)
    } else if (inputValue > randomNumber) {
        feedbackEl.innerHTML = (`${inputValue} es un número muy alto`)
    } else if (inputValue < randomNumber) {
        feedbackEl.innerHTML = (`${inputValue} es un número muy bajo`)
    }
}

buttonEl.addEventListener('click', handleButtonClick);

//CONTADOR

