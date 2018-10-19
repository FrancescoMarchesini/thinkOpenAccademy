/*scrivere una funzione countB che accetti la string come unico argomento e restituisca il numero che indichi quante lettere B maiuscole si trovano nella stringa
scrivere la funzione sopra ma con un secondo alrgomento che indichi quale lettere contare.*/

countB = (char, elm) =>{
    let cnt = 0;
    char.split('').forEach(letter => {
        if(letter == elm){
            cnt = cnt + 1;
        }
    });
    return cnt;
}

let char = "buona Questa bella mela blu";
let elm = 'b'
console.log(`la lettera "${elm}" nella stringa "${char}" compare ${countB(char, elm)} volte`);