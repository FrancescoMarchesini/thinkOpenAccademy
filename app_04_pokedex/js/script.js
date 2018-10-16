/**
 * funzione onload per fare la richiesta di tutti i pokemon
 * nel momento in cui si è caricata tutta la pagina
 */
window.onload = function () {
    searchPoke(`https://pokeapi.co/api/v2/pokemon/`).then(function (text) {
        getPockemonNameList(text);
    }, function (error) {
        console.log(`fallito ${error}`);
    });

};


/**
 * Funzione promise con callback per fare la richiesta verso il server
 */
searchPoke = (url) => {
    return new Promise(function (succed, fail) {
        let req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.addEventListener("load", function () {
            if (req.status < 400)
                succed(JSON.parse(req.responseText));
            else
                fail(new Error(`Request failed:${req.statusText}`));
        });
        req.send();
    });
}

/**
 * funzione per riempire il vettore con i nomi di tutti pokemon
 */
let pockemonNameList = [];
getPockemonNameList = (responseJson) => {
    for (let i = 0; i < responseJson["count"]; i++) {
        pockemonNameList[i] = responseJson["results"][i].name;
    }
}

/**
 * funzioni per la ricerca del pokemon tramite bottoni
 */
const uri = `https://pokeapi.co/api/v2/pokemon/`;
let count = 1;
queryNextPockemon = (responseJson) => {
    console.log(`eseguo funzione next pockemon`);
    searchPoke(`${uri}${count}/`).then(function (text) {
        seeNewPockemon(text);
    }, function (error) {
        console.log(`fallito ${error}`);
    });
    count = count + 1;
};

queryBeforePockemon = (responseJson) => {
    console.log(`eseguo funzione prima pockemon`);
    if (count > 0) {
        searchPoke(`${uri}${count}/`).then(function (text) {
            seeNewPockemon(text);
        }, function (error) {
            console.log(`fallito ${error}`);
        });
        console.log()
        count = count - 1;
    } else {
        alert("Non puoi andare in dietro se prima non vai avanti :)");
    }
};


queryRandomPockemon = () => {
    //"ottimizzazione https://davidwalsh.name/javascript-debounce-function"
    let rand = Math.floor((Math.random() * pockemonNameList.length) + 1);
    searchPoke(`${uri}${rand}/`).then(function (text) {
        seeNewPockemon(text);
    },function (error) {
        console.log(`fallito ${error}`);
    });
    count = rand;   
}

let x = setInterval(queryRandomPockemon, 100);

stopRandomPockemon = () =>{
    clearInterval(x);
};


/**
 * funzione per disegnare il pokemon nel riqadro con il rispettivo nome
 */
seeNewPockemon = (oggetto) => {
    document.querySelector("#img").src = oggetto["sprites"].front_default;
    document.querySelector("#myInput").placeholder = oggetto.name;
}

/**
 * funzione per disegnare un loader in tanto che si carica la pagina
 */
waitNewPockemon = () => {
    //  document.querySelector("#img").innerHTML = "STO CARICANDO";
}

/**
 * fonte del codice : https://www.w3schools.com/howto/howto_js_autocomplete.asp
 */

/*
 * param {*} inp : il valore di input dalla tastiera
 * param {*} arr : l'array dei possibll valori con cui fare il match
*/
autocomplete = (inp, arr) => {
    var currentFocus;

    /*esegui tutto quello che c'è qui dentro quando viene premuto un tasto*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
       
        /*chiudi tutte le liste aperte*/
        closeAllLists();
        if (!val) {
            return false;
        }

        currentFocus = -1;
        //creo un array che conterra il valore dei singoli elementi:
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*al div di input aggiungo il div degli elementi:*/
        this.parentNode.appendChild(a);
        /*itero alla'interno dell'array ed estraggo gli elementi */
        arr.forEach(function(item, index){
            /*faccio il check se la prima lettera dell'item dell'array è uguale all'input per evidenziarla:*/
            if (item.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*creo un div per utti gli elementi che fanno il match :*/
                b = document.createElement("DIV");
                /*metto in grassetto la lettera che match:*/
                b.innerHTML = "<strong>" + item.substr(0, val.length) + "</strong>";
                b.innerHTML += item.substr(val.length);
                /*inserisco un input negli elmenti in modo da poter fare azionioni nel momento in cui lo clicco:*/
                b.innerHTML += "<input type='hidden' value='" + item + "'>";

                /*grazi all'input metto sui divi posso mettermi in asclto sui ingoli tasti e far delle azioni su queste
                 *la prima azione è appunto quella di modificare il nome nella barra di ricerca*/
                b.addEventListener("click", function (e) {
                    /*infatti inserisco il valore di questo elemento nell'input value della ricerca:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*una volta cliccato chiudo tutti gli altri list*/
                    searchPoke(`${uri}${this.getElementsByTagName("input")[0].value}/`).then(function (text) {
                        document.querySelector("#img").src = text["sprites"].front_default;
                    }, function (error) {
                        console.log(`fallito ${error}`);
                    });
                   
                    closeAllLists();
                });

                //aggiungo gli elementi al div
                a.appendChild(b);
            }
        });
    });

    /**
     * questa funzione mi occorre per i tasti speciali SU GIU INVIO e CLICK
     */
    inp.addEventListener("keydown", function (e) {
        //prendo l'id di queste elemento
        var x = document.getElementById(this.id + "autocomplete-list");
        //if x esiste vado a prendere al suo interno l'elemento div
        if (x) x = x.getElementsByTagName("div");

        
        // se è premuta la freccia in basso 
        if (e.keyCode == 40) {
            //incrementa di uno la variabile currentFocus
            currentFocus++;
            /*e colora l'elemnto in questione*/
            addActive(x);
        // Altrimenti se è premuto la freccia in alto 
        } else if (e.keyCode == 38) {
            //decresi la varibile current focus:*/
            currentFocus--;
            /*e colora l'elemnto in questione*/
            addActive(x);
        // se è premuto invio 
        } else if (e.keyCode == 13) {
            /*previeni la richiesta prima che si a fatta*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*e simulata l'attivazione del tasto*/
                if (x) x[currentFocus].click();
            }
        }
    });
    
    function addActive(x) {
        /*fnzione per attivare l'attivazione dell'oggetto:*/
        if (!x) return false;
        /*tolgo tutti gli attivi dalle classi:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        /*aggiungo la classe all'oggetto:*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    
    function removeActive(x) {
        /*togli attivo da tutte le classi*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    
    /**
     * @param {elmt} elmnt : elemento che non vera chiuso
     * chiudi tutte le liste degli oggetti aperti 
     */
    closeAllLists = (elmnt) => {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /**
     * pulisci le liste qunado uno esegue clicca all'interno della pagina
     */
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/**
 * funzione per l'auto completamento
 */
//Chiedere perche se lo metto qui non mi chiama
//autocomplete(document.getElementById("myInput"), pockemonNameList);
