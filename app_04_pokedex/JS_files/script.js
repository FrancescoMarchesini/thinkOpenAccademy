let count = 1;
incrementa = () => {
    count = count + 1;
    console.log(count);
};

decrementa = () => {
    count = count  - 1;
    console.log(count);
};

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState = 4){
        if(xmlhttp.status == 200){
            console.log(xmlhttp.responseText);
        }else{
            alert("c'è stato un errore")
        }
    }
}

let index= count;
let uri = `https://pokeapi.co/api/v2/pokemon/${index}/`
console.log(uri);
xmlhttp.open("GET", uri);
xmlhttp.send();