'use strict';
// ELEMENTOS DEL JUEGO
const inputEl = document.querySelector('.game__input');
const buttonEl = document.querySelector('.game__button');
const feedbackEl = document.querySelector('.game__feedback');
//ELEMENTOS DEL CONTADOR
const counterEl = document.querySelector('.game__counter');
//defino el contenido del contador como una variable porque es un elemento cambiante
    //lo inicio en 0
let counterValue = 0;

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

    //CONTADOR
    //Llamo a counterValue y le sumo 1 cada vez
    counterValue += 1;
    //asigno el valor del counter value al HTML
    counterEl.innerHTML = counterValue;
    //counterEl.innerHTML = parseInt(counterEl.innerHTML)+1;

}
