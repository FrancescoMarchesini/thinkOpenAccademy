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

/**
 * aggiungo la classe stick alla navbar in modo dinamico quando scrollo il mouse e la tolgo
 * nel momento in cui non scrollo
 */
function myStickFunction(){
    if(window.pageYOffset >= stick){
        navbar.classList.add("sticky")
        console.log("aggiunta classe stiky")
    }else{
        navbar.classList.remove("sticky")
        console.log("tolta classe sticky")
    }
}