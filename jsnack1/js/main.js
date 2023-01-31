// RICHIESTA INPUT UTENTE

// Valore minimo

let minValue = parseInt(prompt("Inserire un valore minimo."));

console.log(minValue);

// Valore massimo

let maxValue = parseInt(prompt("Inserire un valore massimo."));

console.log(maxValue);

// FORMULA DI CALCOLO

const generatedNumber = Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue);

console.log(generatedNumber);

