'use strict';

//desarrollar una página web con un juego de "Adivinar el número".

//genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. 
const getRandomNumber = function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}


//LLAMO AL INPUT Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('.game__input');
//LLAMO AL BOTÓN Y LO GUARDO EN UNA VARIABLE
const buttonEl = document.querySelector('.game__button');
//LLAMO AL CONTADOR Y LO GUARDO EN UNA VARIABLE
const counterEl = document.querySelector('.game__counter');
//LLAMO AL FEEDBACK Y LO GUARDO EN UNA VARIABLE
const feedbackEl = document.querySelector('.game__feedback');

//ESCUCHO AL CLICK DEL BOTON
buttonEl.addEventListener('click', handleButtonClick);
 
//3. MANEJO EL VALOR DEL INPUT
function handleButtonClick() {
    const inputValue = inputEl.value;
    //LO MUESTRO EN LA CONSOLA
    console.log(inputValue);
}
//4. COMPARAR CON EL NUMERO ALEATORIO
function name() {
    if (inputValue === getRandomNumber) {
        feedbackEl.innerHTML = (`¡Enhorabuena! ${inputValue} es el número ganador`)
    } else if (inputValue > getRandomNumber) {
        
    }{
        
    }
}
    //SI EL VALOR DEL INPUT ES MUY ALTO, MUESTRO MENSAJE1 EN EL FEEDBACK
    //SI EL VALOR DEL INPUT ES MUY BAJPO, MUESTRO MENSAJE2 EN EL FEEDBACK
    //SI ACIERTA EL NUMERO, MUESTRO MENSAJE3 EN EL FEEDBACK