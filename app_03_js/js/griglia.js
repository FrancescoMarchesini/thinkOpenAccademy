var size = 4;
var dim = size * size;
var array = [];


function ciao(){
    /**
     * inizializzazione della stringa 
     */
    for(var i = 0; i < dim; i++){
        if(i%2==0){
            array.push("X");
        }else{
            array.push("O");
        }
    }

    /**
     * converto l'array in una stringa
     */
    var arrayToString = array.join('')
    console.log("la stringa iniziale: " + arrayToString + "\n");

    /**
     * itero all'interno della stringa
    
    var stringa;
    var step = 0;
    for(var i=1; i<=dim; i++){
        console.log(i)
        if( i % size == 0){
            console.log("modulo ogni " + i)
            stringa = arrayToString.substr(step, i) + "\n" + arrayToString.substr(step+1, array.join('').length);
            step = step + size;
            console.log("step: " + step);
        }
    }
   console.log("la griglia: "+ "\n"+ stringa);
    */

    /**
     * test vari
     */
    var pezzo=[];
    var step=0;
    for(var i = 1; i<arrayToString.length +1; i++){
        if(i%size==0){
            console.log("lettera: " + arrayToString[i] + " indice: " + i + " dopo questo voglio inserire l'emeneto");
            var chunck = arrayToString.substr(step, i);
            console.log(chunck)
            //for(var x=0; x<chunck.length; x++){
               // pezzo[i][x] = chunck[x];
                //console.log("da: " + step + "   " + "a: " + i + " valori: " + pezzo);
            //}
            step += size;
        }else{
            console.log("lettera: " + arrayToString[i] + " indice: " + i );
        }
    }
};

ciao();