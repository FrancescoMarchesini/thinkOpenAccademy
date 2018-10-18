request = (url) => {
    return new Promise(function (succed, fail) {
        let req = new XMLHttpRequest();
        req.open("GET", "https://reqres.in/api/users/2", true);
        req.addEventListener("load", function () {
            if (req.status < 400) {
                succed(JSON.parse(req.responseText));
            } else {
                fail(new Error(`richiesta fallita:${req.status}`));
            }
        });
        req.send();
    });
}



myreq = () => {

    request().then(function (text) {
        let user = document.getElementById("myNm").value;
        let pw = document.getElementById("myPw").value;
       
        if (user == text.data.first_name) {
            if (pw == text.data.last_name) {
                window.location.href = "./index.html"; 
            }else{
                alert("password sbagliata");
            }
        }else{
            alert("user fallato");
        }
    }, function (error) {
        console.log('fottiti coglione')
        console.log(`fallito ${error}`);
    });

}


window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
       myreq()
    }
}, false);
