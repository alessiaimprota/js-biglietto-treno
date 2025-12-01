/*Chiedere il kilometraggio da percorrere in treno all'utente (userKm)
 Moltiplicare il kilometraggio per la tariffa fissa per avere il prezzo pieno del biglietto
priceTicket:(userKm * 0.21 Euro)
 Scontistiche
SE l'user ha meno di 18 anni (priceTicket -20%)
 userAge<=18 
ALTRIMENTI SE  l'user ha più di 60 anni (priceTicket-40%)
 userAge=> 65
ALTRIMENTI il prezzo resta invariato
*/

//Setup

//Prezzo fisso per km
const priceKm = 0.21;
let result;
//console.log(priceKm);

//prezzo intero

//iNPUT
//chiedo all'utente i km da  percorrere e l'età

const userKm = parseFloat(
  prompt("Inserisci il numero di km da percorrere in treno!")
);
//console.log(userKm, typeof userKm);

const userAge = parseInt(prompt("Inserisci la tua età per degli sconti!"));
//console.log(userAge, typeof userAge);

//Elaborazione

const priceTicket = (userKm * priceKm).toFixed(2);

//discount

if (userAge < 18) {

    let discount = parseFloat(
        priceTicket - ((priceTicket * 20) / 100)
    ).toFixed(2);
    
    result = `
    Hai il 20% di sconto! Il prezzo del biglietto intero è di ${priceTicket}\u20AC.
    Adesso puoi acquistare il biglietto al prezzo di: ${discount}\u20AC!
    `;
    console.log(result);
} else if (userAge >= 65) {

    let discount = parseFloat(
        priceTicket - ((priceTicket * 40) / 100)
    ).toFixed(2);

    result = `
    Hai il 40% di sconto! Il prezzo del biglietto intero è di ${priceTicket}\u20AC.
    Adesso puoi acquistare il biglietto al prezzo di: ${discount}\u20AC!
    `;
  console.log(result);
} else {
  result = `Nessuno sconto trovato. Acquista il tuo biglietto al prezzo di ${priceTicket}\u20AC`;
  console.log(result);
}

//Visualizzazione in pagina

document.getElementById("discount-result").innerHTML = result;
