/**
 *  Dato un mazzo di 40 carte ordinale ordinarle per classi quadri, fiori, picche, 
 *  inoltre le carte devono essere odirndate dall'asso al re
 */

/**
 * funzione presa dal sito sviluppatori di mozzilla
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso}
}

/**
 * funzione per pescar un valore e lo togli
 */
function pescaArray(collezione){
 
    //lunghezza dell'array
    var lunghezza = collezione.length;
    //console.log('lunghezza: ', lunghezza);

    // indice di valore random
    var indice = getRandomInt(0, lunghezza);
    //console.log('indice: ', indice)

    //prendo l'elemto dell'array di indice indice
    var elemento = collezione.slice(indice, indice+1);
    //console.log('elemeto: ', elemento);

    // rimuove l'elemento dall'array di indice indice
    collezione.splice(indice, 1);
    //onsole.log(collezione);

    return [elemento, collezione];
}

/**
 * funzione per generare un mazzo con i vari semi
 */
function mazzo() {
    //debugger;
    var res = [];
    var semi = ['Q', 'C', 'P', 'F'];
    for(var i=0; i<4; i++){
        var carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var seme = semi.slice(i, i+1)[0];
        for(var k=0; k<10; k++){
            var temp = pescaArray(carte);
            carte = temp[1];
            var carta = seme + ":" + temp[0];
            res.push(carta);
        }
    }

    var risultato = [];
    for(var i=0; i<40; i++){
        var temp = pescaArray(res);
        risultato.push(temp[0]);
        res = temp[1];
    }
    return risultato;
};


/**
 * definisco i vettori dei mazzi che andranno a riempirsi
 */
var smazzo = mazzo();
var curCarta = '';
var cuori = [];
var picche = [];
var fiori = [];
var quadri = [];

function pescaDalMazzo(){
    curCarta = pescaArray(smazzo)[0]; 
    console.log("pesco una carta del mazzo: " + curCarta);
    
    if(curCarta.length !== 0){
        document.querySelector("#smazza").innerHTML = curCarta;
    }else{
        document.querySelector("#smazza").innerHTML = "Mazzo Finito"
    }
}

function dividiCarta(carta){
    var tmp = carta[0]
    var s = tmp[0][0];
    var c = tmp[0][2];
    return[s, c]
}


function mettiNellaPila(){
    console.log("metto nella pila la carta");
    var cd = dividiCarta(curCarta)
    switch(cd[0]){
        case "C": 
            cuori.push(cd[1]);
            document.querySelector("#cuori").innerHTML = cd;      
            break;
        case "Q": 
            quadri.push(cd[1]);
            document.querySelector("#quadri").innerHTML = cd;
            break;
        case "F": 
            fiori.push(cd[1]);
            document.querySelector("#fiori").innerHTML = cd;
            break;
        case "P": 
            picche.push(cd[1]);
            document.querySelector("#picche").innerHTML = cd;
            break;
        default: 
            curCarta='nada';
            break;
    }
    document.querySelector('#smazza').innerHTML = "";
}

//ordina mazzo fare funzione sort e bubble sort

//window [seme] va a prendere l'oggetto globale seme 