/* 
     Modificare la funzione 1 in modo che accetti un terzo argomento **step** per  la creazione dell'array, 
    la chimata range(1, 10, 2) deve restituire [1, 3, 5, 7, 9 ] 
    deve funzionare anche per gli step negativi ed in mancanza di step il valore è 1 
*/

range = (start, stop, step) =>{
    let res = [];

    if (step == 0){
        step = 1;
    }else if(step > 0){
        for( let i = start; i < stop; i = i + step ){
            res.push(i);
        }
    }else if(step < 0){
        step = step * (-1);
        for( let i = stop; i > start; i = i - step ){
            res.push(i);
        }
    }

    return res;
}

let start = 1;
let end = 10;
let step = 2;
if (step > 0){
    console.log(`ho generato un bellissimo array ${range(start, end, step)} che va da ${start} a ${end} con step ${step}`);
}else{
    console.log(`ho generato un bellissimo array decrescente ${range(start, end, step)} che va da ${start} a ${end} con step ${step}`);
}