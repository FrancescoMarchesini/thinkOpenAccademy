/* Scrive una funzione che accetti come come argomento un array e ne restituisca la somma degli elementi*/


range = (start, stop) =>{
    let res = [];
    for(let i = start; i <= stop; i++){
        res.push(i);
    }
    return res;
}

sum = (array) => {
    let res = 0;
    array.forEach(function(element) {
        res += element;
    });
    return res;
}


let start = 20;
let end = 30
console.log(`la somma degli elemeti del seguente array "${range(start, end)}" è ${sum(range(start, end))} `)