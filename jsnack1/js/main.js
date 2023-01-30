// RICHIESTA INPUT UTENTE

// Valore minimo

let minValue = prompt("Inserire un valore minimo.");

console.log(minValue);

// Valore massimo

let maxValue = prompt("Inserire un valore massimo.")

console.log(maxValue);

// FORMULA DI CALCOLO

const generatedNumber = Math.floor(Math.random() * maxValue) + 1;

console.log(generatedNumber);

