/**
 * Call Back : utilizzate molto per comuicare con il server
 *  
 */

/**
 * Funzioni anomime passate direttamente ad altre funzioni
 * @param {*} varuno 
 * @param {*} cback 
 */
//ESEMPIO
function esempio(varuno, cback){
    var vardue = 'ciao' + varuno;
    cback(vardue);
}

esempio('pippo', function(valore){
    cosole.log(valore);
})