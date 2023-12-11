/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/ 
let dataTypesJs ="Nel linguaggio di programazione Java Script esistono vari tipi di dati assegnati ai valori delle variabili." + " " + "'string'" + "'number'" +"'boolean'" + "'undefined'" + "'null'." + " " + "String, identifica una sequenza di caratteri." + " " + "Number, identifica un numero." + " " + "Boolean, è un entità logica e serve per identificare un true o un false (vero o falso) all'interno di un algoritmo." + " " + "Undefined, identifica un valore che non è definito." + " " + "Null, identifica una variabile che non contiene nulla, è vuota.";
console.log(dataTypesJs);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
let objectDescription = "Un oggetto è un raggruppamento di variabili che servono a descrivere un entità." + " " + "Ad esempio per descrivere l'entità di una persona serviranno il nome, cognome, età, altezza, colore occhi ecc ecc." + " " + "Tutto queste variabili vengono raggruppate in un unico gruppo, quello sarà un oggetto."
console.log(objectDescription);

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12
let num2 = 20

let somma = num1 + num2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Davide";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let number4 = 4;

let differenza = number4 - x;
console.log(differenza);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/ 
let name1 = "john"
let name2 = "John";

let falso = name1 == name2;
console.log(falso)

let nameOne = "john";
let nameTwo = "john";

let vero = nameOne == nameTwo;
console.log(vero)