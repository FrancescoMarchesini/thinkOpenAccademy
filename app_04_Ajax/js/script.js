checkReadyState = (readyState) => {
    let go = false
    switch(readyState){
        case 0:
            console.log(`inizializzazione`);
            go = false; 
            break;
        case 1:
            console.log(`apro la comunicazione`);
            go = false; 
            break;
        case 2:
            console.log(`richiesta effetuata`);
            go = false; 
            break;
        case 3:
            console.log(`Ricezione dei dati`);
            go = true; 
            break;
        case 4:
            console.log(`richiesta conclusa`);
            go = true;
            break;
        default:
            go = false;
    }
    return go;
}

/*
askNewPockemon = (uri) =>{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(checkReadyState(this.readyState)){
            if(xmlhttp.status == 200){
                    seeNewPockemon(JSON.parse(xmlhttp.responseText));
            }else{
                alert("c'è stato un errore");
                document.querySelector("#img").src = ""
            }
        }else{
            waitNewPockemon();
        }
    }
    xmlhttp.open("GET", uri, false);
    xmlhttp.send();
}
*/

//----------------------------------------------------------------------------

queryPockemon = (uri) =>{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(checkReadyState(this.readyState)){
            if(xmlhttp.status == 200){
                let a = JSON.parse(xmlhttp.responseText);
                if(yo){
                    incrementa(a);
                }
            }
        }else{
            //waitNewPockemon();
        }
    }
    xmlhttp.open("GET", uri, false);
    xmlhttp.send();
}

let uri = "https://pokeapi.co/api/v2/pokemon/";
let allPockemon = [];
let count = 1;
//allPockemon = queryPockemon(uri);
//----------------------------------------------------------------------------

yo =() =>{
    let toogle = false;
    if(!toogle){
        return true;
    }
}


incrementa = (responseJson) => {
    debugger;
    seeNewPockemon((responseJson));
    count = count + 1;
};

decrementa = (responseJson) => {
    if(count > 0){
        seeNewPockemon(queryPockemon(responseJson));
        count = count  - 1;
    }else{
        alert("Non puoi andare in dietro se prima non vai avanti :)");
    }
};

seeNewPockemon = (url) =>{
    document.querySelector("#img").src = url["sprites"].front_default;
    document.querySelector("#pockemo").placeholder = url.name;
}

waitNewPockemon = () =>{
    document.querySelector("#img").innerHTML = "STO CARICANDO";
}

queryPockemonFromKeyboard= (event) =>{
    //"ottimizzazione https://davidwalsh.name/javascript-debounce-function"
    console.log(event.target.value)   
}



