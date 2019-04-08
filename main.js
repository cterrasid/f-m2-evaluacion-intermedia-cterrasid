'use strict';

//desarrollar una página web con un juego de "Adivinar el número".

//genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. 
function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}
console.log('> ' + getRandomNumber());

//LLAMO AL INPUT Y LO GUARDO EN UNA VARIABLE
const inputEl = document.querySelector('.game__input');
//LLAMO AL BOTÓN Y LO GUARDO EN UNA VARIABLE
const buttonEl = document.querySelector('.game__button');
//LLAMO AL CONTADOR Y LO GUARDO EN UNA VARIABLE
const counterEl = document.querySelector('.game__counter');
//LLAMO AL FEEDBACK Y LO GUARDO EN UNA VARIABLE
const feedbackEl = document.querySelector('.game__feedback');
//LLAMO AL NUMERO GANADOR

//ESCUCHO AL CLICK DEL BOTON
//MUESTRO EL NUMERO DE CLICKS EN EL CONTADOR
//MANEJO EL VALOR DEL INPUT (KEYUP)
//SI EL VALOR DEL INPUT ES MUY ALTO, MUESTRO MENSAJE1 EN EL FEEDBACK
//SI EL VALOR DEL INPUT ES MUY BAJPO, MUESTRO MENSAJE2 EN EL FEEDBACK
//SI ACIERTA EL NUMERO, MUESTRO MENSAJE3 EN EL FEEDBACK

// En la parte principal, el jugador introduce un número y da al botón de probar. En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, el juego termina.