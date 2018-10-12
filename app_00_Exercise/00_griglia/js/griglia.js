/**
 * griglia.sj : Marchesini Francesco  Alessandro Chellini
 * description : programma che stampa a video una tastiera
 */

/**
 * definsco le costanti del programma
 */
 const size = 32;
const dim = size * size;
let array = [];

/**
 * Prova di funzione uno che non stampa l'alternanza delle linee
 */
function generateGrid(){
    /**
     * inizializzazione della stringa 
     */
    for(let i = 0; i < dim; i++){
        if(i%2==0){
            array.push("X");
        }else{
            array.push("O");
        }
    }

    /**
     * converto l'array in una stringa
     */
    let arrayToString = array.join('')
    console.log("la stringa iniziale: " + arrayToString);

    /**
     * itero all'interno della stringa
     */
    let pezzo=[];
    let step=0;
    for(let i = 1; i<arrayToString.length +1; i++){
        if(i%size==0){
            pezzo.push( arrayToString.substring(step, i) + "\n");
            step += size;
        }
    }
   
    /**
     * stampa a video
     */
    let griglia = pezzo.join('');
    console.log("griglia:\n" + griglia)
};

/**
 * funzione per la generazione della griglia
 */
generaGriglia = () => {
    /**
     * Creazione della matrice ed inserimento dei valori per rappresentare il bianco(" ") e nero("X")
     * della scacchiera
     */
    
     //dichiaro di vettore
    var N = [];
    //itero per la lunghezza dell'array o righe
    for(var row=0; row<size; row++) {
        //creazione della matrice a partire dell'array
        N[row] = [];
        //itero per la lunghezza dell'array o le collonne
        for(var col=0; col<size; col++) {
            //inizializzo la matrice con valore X
            N[row][col] = "X";
            //se l'indice della riga è dispare
            if(row%2!=0){
                //e se l'indice della colonna è pari
                if(col%2==0){
                    //setto il valore della matrice come " "
                    N[row][col] = " ";
                }
            //se il valore dell'indice della colonna è pari
            }else if(row%2==0){
                // e se l'indice della colonna è dispari
                if(col%2!=0){
                    //setto il valore come " "
                    N[row][col] = " ";
                }
            }
        }
    }

    /**
     * Conversione della Matrice in un array 1D e relativa conversione in stringa
     */

    //dichiarazione di un array
    let stringa = [];
    //iterazione nelle compenti della matrice
    for(var i = 0; i < N.length; i++){
        //concatenzazione dei valori in un unico array
        stringa = stringa.concat(N[i]);
    }
    //conversione dell'array in strinfa
    stringa = stringa.join('');
    console.log(`stringa : ${stringa}`)
    
   
     /**
     * Split del vettore ed aggiunto del carattere speciale "\n" per andare a capo 
     * ogni size
     */

     //dichiarazione del vettore
    let pezzo=[];
    //dichiarazione dello step per dividere l'array
    let step=0;
    //iterazione per la grandezza della stringa
    for(let i = 1; i<stringa.length +1; i++){
        //se sono alla lunghezza desiderata
        if(i%size==0){
            //carico nell'array il pezzo di stringa con l'aggiunta del carattere speciale "\n"
            pezzo.push( stringa.substring(step, i) + "\n");
            //incremento lo step per spotarmi nel segmento successivo della stringa
            step += size;
        }
    }
   
    /**
     * stampa a video
     */

    //conversione della stringa
    let griglia = pezzo.join('');
    //stampa a video
    console.log(`griglia:\n${griglia}`)

    /**
     * fine del funzione :)
     */
};

/**
 * lancio della funzione
 */
generaGriglia();

const restFunction = (param1, param2, ...reParam ) =>{
    console.log(param1);
    console.log(param2);
    console.log(reParam);
    [parm3, param4, param5, parSei='Italia'] = reParam;
    console.log(parm3);
    console.log(param5);
    console.log(parsei);
}
