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

let elAge = document.getElementById('age');

let elButton = document.getElementById('generate');
let elButton2= document.getElementById('anulla');


console.log(elUsernome, elKilometers, elAge, elButton);

let elBox = document.querySelector('.box');
let elNome =  document.getElementById('nome');
let elClasse =  document.getElementById('classe');
let elDear = document.getElementById('dear');
let elCode = document.getElementById('code');
let elTicket =  document.getElementById('ticket');
console.log(elBox,elNome)




elButton.addEventListener('click', function(){
    // console.log('hai cliccato il bottone');
    // if (elUsernome.value === !isNaN){
    //     elNome.innerHTML='errore!';
    // }else{
    //     valuenome= elUsernome.value;
    // }
    const valuenome = elUsernome.value;
    const km = elKilometers.value;
    const age = elAge.value;
    elClasse.innerHTML='Biglietto Standard';
    const numberdear = getRndInteger(1,12) ;
    const numbercode = getRndInteger(1000,99999) ;
    const pTicket = km*0.21;
    const ageclass = (age ==='adult') ? pTicket :
    (age ==='underage') ? pTicket*20/100 :
    (age ==='old') ? pTicket*40/100 : '';

    console.log(elBox,valuenome, km, age, numberdear,numbercode ,pTicket,ageclass);

    elNome.innerHTML = valuenome;
    elDear.innerHTML=numberdear;
    elCode.innerHTML=numbercode;
    elTicket.innerHTML = ageclass.toFixed(2) + (" \u20AC");
})

elButton2.addEventListener('click', function(){    
    document.getElementById('userNome').value="";
   document.getElementById('kilometers').value="";
   elNome.innerHTML='';
   elClasse.innerHTML='';


})


