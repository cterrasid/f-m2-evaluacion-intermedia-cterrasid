'use strict';

//desarrollar una página web con un juego de "Adivinar el número".

//genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. 
function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}
console.log('> ' + getRandomNumber());
//LLAMO AL INPUT Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('')
//LLAMO AL BOTÓN Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('')
//LLAMO AL CONTADOR Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('')
//LLAMO AL FEEDBACK Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('')

//El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número.
// En la parte principal, el jugador introduce un número y da al botón de probar. En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, el juego termina.