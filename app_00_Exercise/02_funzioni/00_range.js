/* Scrive una funzione che accetti come argomenti un **start** ed un **end** e resituisca un array compreso tra il range specificato */

range = (start, stop) =>{
    let res = [];
    for(let i = start; i <= stop; i++){
        res.push(i);
    }
    return res;
}

/**funzione per esportare le funzione tra un modulo ed un altro */
/*export function createArrayInRange(start, stop){
    return range(start, stop);
}*/

//module.exports = range; 

let start = 10;
let end = 23;
console.log(`ho generato un bellissimo array ${range(start, end)} che va da ${start} a ${end}`);

