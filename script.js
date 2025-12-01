//Chiedere il kilometraggio da percorrere in treno all'utente (userKm)
// Moltiplicare il kilometraggio per la tariffa fissa per avere il prezzo pieno del biglietto
// priceTicket:(userKm * 0.21 Euro)
//Scontistiche
// SE l'user ha meno di 18 anni (priceTicket -20%)
// ALTRIMENTI SE  l'user ha più di 60 anni (priceTicket-40%)
//ALTRIMENTI il prezzo resta invariato

//Setup
const priceKm = 0.21;
console.log(priceKm);

let message;

//iNPUT
//chiedo all'utente i km da  percorrere

const userKm = parseFloat(
  prompt("Inserisci il numero di km da percorrere in treno!")
);
console.log(userKm, typeof userKm);

//calcolo in base all'età il prezzo pieno del bieglietto

const priceTicket = userKm * priceKm;
console.log(priceTicket);


