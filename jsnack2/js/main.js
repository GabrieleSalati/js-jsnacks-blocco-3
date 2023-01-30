// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// Array vuoto

const numbers = [];

console.log(numbers);

// Ciclo e condizioni

let sum = 0

let i = 0;

while (sum < 50) {

    // Richiesta numero all'utente

    let inputNumber = prompt('Aggiungi un numero!');

    numbers.push(inputNumber);

    let sum = sum + numbers[i];

    i++
}