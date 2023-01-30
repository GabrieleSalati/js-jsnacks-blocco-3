// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// Richiesta numero utente

const inputNumber = prompt("Inserisci un numero!");

console.log(inputNumber);

// Generazione array

const list = [];

console.log(list);

let groups = list * inputNumber;

console.log(groups);

// Ciclo generazione elementi array

let i = 0;

while (list.length < 10) {
    list.push(Math.floor(Math.random() * 100) + 1);

    i++
}

