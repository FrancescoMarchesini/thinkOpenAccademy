function myMove() {
    var elem = document.getElementById("bt"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 2000) {
            clearInterval(id);
        } else {
            pos++; 
            console.log(pos)
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}