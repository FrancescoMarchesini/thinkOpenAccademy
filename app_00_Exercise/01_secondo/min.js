//scrivi una funzione che dati due valori restituisca quello minore

getMinValue = (a, b) => {
    if(a > b){
        return b;
    }else{
        return a;
    }
}

let a = 11;
let b = 12;
console.log(`tra ${a} e ${b} il valore minore è ${getMinValue(a, b)}`);