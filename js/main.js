//Main js

var sectionBiglietto = document.getElementById('biglietto');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');

//Evento genera biglietto
genera.addEventListener('click', function() {

    //Dati utente
    var name = document.getElementById('name').value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;
    console.log(name);
    console.log(km);
    console.log(eta);

    //Calcolo prezzo biglietto
    var prezzoKm = 0.21;
    var prezzoBiglietto = prezzoKm * km;
    var offerta = 'Biglietto standard';

    //Calcolo eventuale sconto
    if (eta == 'minorenne') {
        //20% di sconto
        prezzoBiglietto -= prezzoBiglietto * 0.2;
        var offerta = 'Sconto minorenni';
    } else if (eta == 'over65') {
        //40% di sconto
        prezzoBiglietto -= prezzoBiglietto * 0.4;
        var offerta = 'Sconto over 65';
    } 

    prezzoBiglietto = prezzoBiglietto.toFixed(2) + ('€');

    var carrozza = Math.floor( Math.random() *10 ) + 1;

    var codiceCp = Math.floor( Math.random() * (10000 - 9000) ) + 9000;

    document.getElementById('nome-passeggero').innerHTML = name;
    document.getElementById('offerta-applicata').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto;

    sectionBiglietto.className = 'show';
})

//Evento bottone annulla
annulla.addEventListener('click', function() {
    sectionBiglietto.className = 'hidden';

    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';
})
