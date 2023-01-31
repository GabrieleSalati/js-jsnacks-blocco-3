// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// Richiesta numero utente

const inputNumber = parseInt(prompt("Inserisci un numero!"));

console.log(inputNumber);

// Ciclo generazione elementi array

let i = 0;

while (i < inputNumber) {

    // Generazione array

    let list = [];

    console.log(list);

    // Generazione elementi array

    let y = 0;

    while (y < 10) {

        list.push(Math.floor(Math.random() * 100) + 1);

        y++;

    }

    i++;
}

