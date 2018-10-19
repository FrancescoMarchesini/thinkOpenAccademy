/*definire se un numero è pari o dispari senza utilizzare il modulo 
zero è pari,
uno è dispari
quale altro numero è pari se è pari il risultato di N-2
scrivere un a funzione isEven che accetta come argomento un numero e restituisca un bool, provate con 50 75 e  -1*/

isEven = (args) =>{
    if (args < 0){
        console.log("il numero è minore di zero quindi lo moltiplico per -1")
        args = args * (-1);
        console.log(`ora args non è piu minore di zero e vale ${args}`)
        if(args == 1){
            return false;
        }
    }

    for(let i=0; i<args; i = i - 2){
        args = args - 2;
        if(args == 0 ){
            return true
        }else if (args == 1){
            return false;
        }
    }
}

let value = -1;
console.log(`il numero ${value} è pari ? ${isEven(value)}`);