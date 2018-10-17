//ES6-----------------------------------------------
Templete Litterale : servono per imbeddare codice javascript all'interno del codice  html

dicitura per la cocatenzazione di stringhe
'${codice_javascript}'

//dichiarazione di funzioni
//questa dichiarazione permette di mantenere lo scopo di una varibili globale all'interno della nomeFunzione
narrow function

nomeFunzione = (argomento) =>{}

esempio(valore =>{
    console.log(yo)
})

dichiarazione di varibili hanno mandato in pensione var sostituendolo con 
    - let : non permette di avere una seconda variabile con lo stesso nome
    - const : const assegna un valore costante alla varibile

parametri di default

//-------------------
rest paramiter


# Da Ajax alle rest

## Argomento
come prendere i dati dal server al client
[Babel!]https://babeljs.io/ : compilatore javascript che permette di tradurre in automatico l'ultima versione di javascript nella versione ES5

## note
<br>Rest<br> : è uno stile di architetture per la progrettazione di applicazioni di rete che utilizza il protoccolo http per gestire ed effeturare chimate da due punti

applicazione rest = RESTFull -> operazioni:
                                    CRUD: Create, Read, Update, Delete

Indirizzabilità : URI (unique resource identtfier)

il servizi rest mette in cumnicazione con le API: interfaccie con la quale il client 
comunica con il DB

interfacci unica:
struttura server client:
Assenza di stato: la comunicazione è diretta tra client server
Diverse rappresentazioni di risorse


# Prima
in passato si usava Ajax : un gestore di chiamate asincrone
XMLHttpRequest : oggetto che prende il protocollo http e lo implementa per mettere in cumunicazione client - server
Questo oggetto  è indipendende dal browew e si possono fare richeist get e post
get : prelevare dati secondo il CRDU
post : prelevare passando dei paramentri CRUD
metodi:
    open: apre flusso comunicazione con cliente server
          args(get, post, put, delete)
          uri : chi chiamimao
          [async] : boolean specifica se la chiamata è sincrono o asincrona
    send(data): effettua la vera e propria richiesta
    setreQuestHeadr(): inmposta il tipo di richiesta
    abord() : interrompe le operazioni
    getAllresponseHeader: che tipo di dato il server deve ridarci in base al setRequest

Parametri Ajax:
    *readState:
        1. 0 l'oggetto XMLRe esiste ma non è stato chiamto da nessun funzione 
        2. 1 open : èstato chiamato il metodo open ma non sono stati inviati i dati
        3. 2 Sent : il metodo send è stato chimato e fatta una richiesta
        4. 3 Recivier : 
    
    *Status: risposta che ci da il server, gli errori sono divisi in blocchi di 100
        1. 500 : piu gravi , problemi al server non possiamo farci niente
        2. 400 : sono errori che vengono dal lato client quando gli fa una richiesta
        3. 300 : problemi di redirect, ovverro a ciò cui puntiamo
        4. 200 : tutto è andato ok
        5. 100 : informazioni che il serivizio ci da

        ##in base al tipo di errorre devo guidare l'utente, ovvero noi dobiamo mappare gli errori per far capire la situazine
        ##e comnicare all'utente

    *responsetext e responseXML : controllo della risposta ottenuta

    *onreadystate: ogni volta che c'è un cambio di passaggio viene lasciato 

    Esempio di chiamta

    let xmlHttp : new XMLHttpRequest();
    xmlhttp.onreadystatechace = function(){
        if(readstea = 4){  
        }
    }