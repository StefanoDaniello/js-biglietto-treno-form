/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

let elUsernome = document.getElementById('userNome');

let elKilometers = document.getElementById('kilometers');

let elAge = document.getElementById('age')

let elButton = document.getElementById('generate');

console.log(elUsernome, elKilometers, elAge, elButton);

let elBox = document.querySelector('.box');
let elNome =  document.getElementById('nome');
console.log(elBox,elNome)


elButton.addEventListener('click', function(){
    // console.log('hai cliccato il bottone');
    const valuenome = elUsernome.value;
    const km = elKilometers.value;
    const age = elAge.value;
    console.log(valuenome, km, age);

    elNome.innserHTML = valuenome;
    
})