'use strict';
const inputEl = document.querySelector('.game__input');
const buttonEl = document.querySelector('.game__button');
const counterEl = document.querySelector('.game__counter');
const feedbackEl = document.querySelector('.game__feedback');

//NÚMERO AL AZAR 
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
//Guardo la ejecucion de getRandomNumber y lo muestro en la consola
const randomNumber = getRandomNumber(100);
console.log('Número Ganador: ', randomNumber);

//EVENTO
//Escucho el click del boton
buttonEl.addEventListener('click', handleButtonClick);

//Manejo el click y muestro resultados
function handleButtonClick() {
    //Convierto el contenido del input a número y lo muestro en la consola
    const inputValue = parseInt(inputEl.value);
    console.log('Elección del usuario: ', inputValue);
    //Establezco condiciones
    if (inputValue === randomNumber) {
        feedbackEl.innerHTML = (`¡Excelente! ${inputValue} es el número ganador`)
    } else if (inputValue > randomNumber) {
        feedbackEl.innerHTML = (`${inputValue} es un número muy alto`)
    } else if (inputValue < randomNumber) {
        feedbackEl.innerHTML = (`${inputValue} es un número muy bajo`)
    }
}


//CONTADOR
//Crear un contador que contabilice el numero de intentos del jugador
    //Controlar el click del boton --> YA ESTA CON LA FUNCION handleButtonClick
