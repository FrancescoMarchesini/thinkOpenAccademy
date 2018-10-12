/**
 * event listener per lo scroll del mouse
 */
//window.onscroll = function() { console.log("ciao")};
window.onscroll = function() { myStickFunction()};

/**
 * accedo all'id della navbar
 */
var navbar = document.getElementById("navbar");

/**
 * prendo l'offset della navbar
 */
var stick = navbar.offsetTop;
console.log("stick", stick);

/**
 * aggiungo la classe stick alla navbar in modo dinamico quando scrollo il mouse e la tolgo
 * nel momento in cui non scrollo
 */
function myStickFunction(){
    console.log("sto scrollando la")
    if(window.pageYOffset >= stick){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
}

