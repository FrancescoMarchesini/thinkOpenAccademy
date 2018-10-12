/**
 * sintassi
 */

/**
 * condizionale
 */
var x = 10;
 if ( x === 10 ){
     console.log("bella_li");
 }else{
     console.log("yes");
 }

/**
 * operatori ternari 
 */
var uno, due;
uno = 1;
due = 2;
uno > due ? console.log("vero") : console.log("false")

/**
 * strutture switch 
 */
var carta = "cuori";
switch(carte){
    case "cuori": console.log(cuori);break;
    case "fiori": console.log(cuori);break;
    case "picche": console.log(cuori);break;
    case "quadri": console.log(cuori);break;
    default: "una carta"; break;
}

/**
 * funzioni : sono a loro volta oggetti
 */

//in questo caso funzione poichè a livello di interprete vengono prima prese in considerazione
// le funzioni e poi le variabile. questo è il concetto di hosting
var somma = sum(12, 4);

//metodo di scritttura 1
function sum(a, b){
    return a + b;
}
alert(sum(uno, due));

//metodo di scrittura 2
var sum2 = function(a, b){
    return a + b;
}

//funzione tre
var ciccio = 20;
molt(ciccio);
console.log(ciccio);
function molt(a){
    a = a* a;
    return a;
}

/**
 * array : collezione di dati mutabili
 */
 var a = ["ciao", "mondo"];
console.log(a[0]);
a.push("jo")

//ritornare tutti gli elmeneti dell'array separati da spazio
a.join(' ');

//togliere gli elementi da un array
a.pop();

//taglia un fetta dell'array e dammelo come risultato in un altro array
var y = a.slice(1, 2)
console.log(y)

//contare gli elementi all'interno dell'array
console.log(a.length)

/**
 * oggetti:  è un tipo di dato che permette di mappare ad una chiave univoca un determinato valore
 * un oggetto è un tipo di dato mutabile
 * le chiavi possono essere qualsiasi tipo di dato serializzabile
 * i valori possono essere di qualsiasi tipo di dato
 * 
 * L'oggetto è anche un oggetto json
 */

 var Oggetto = {     
      "k1" : 1,
      "k2": 2,
      "k3" : {
          "ka": 3,
           "nomw" : "antonio"
      }
 };

 console.log(Oggetto.k1)
 console.log(Oggetto.k3.nomw)

 /**
  * Iterazioni : fai un'operazione un numero n di volte fino ad una deteminata condizione di uscita
  */

//----------------------------------

/**
 * Window : un oggetto non inserito all'interno di una funzione è associato alloggetto globale window
 * var lastName = pippo ---> lastName === window.lastName
 */

 //stack di esecuzione

 var nome = 'Jhon';

 function first(){
     var a = "ciao";
     second();
     var x = a + name;
     console.logx(x);
 }

 function second(){
     var b = "h1!";
     third();
     var z = b + name;
     console.log(z);
 }

 function third(){
     var c = "Ciao Bella";
     var z = c + name;
     console.log(z)
 }

first();

/**
 * scoping
 */
 var ciao = 'ciao';                 //primo scope
 primo();

 function primo(){
     var b = 'come';                //secondo scope
     secondo();                     

     function secondo(){            // terzo scope
         var c = 'stati?';
         console.log(a+b+c);
     }
 }

 /**
  * operatore this: ogni funzione ha l'operaew this, ovvero una variabile che rappresenta tutte le variabili e le funzioni che la 
  * funzione stessa possiede
  */

//fare un esempio con this

/**
 * Ereditarietà: un oggettto che eredita le proprieta ed i metodi di un'altro oggetto
 */