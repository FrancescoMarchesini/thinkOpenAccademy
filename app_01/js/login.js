request = (url) => {
    let user = document.getElementById("myNm").value;
    let pw = document.getElementById("myPw").value;
    console.log(`${user} && ${pw}`);
       
    return new Promise(function (succed, fail) {
        let req = new XMLHttpRequest();
        req.open("POST", "https://reqres.in/api/login", true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.addEventListener("load", function () {
            if (req.status < 400) {
                succed(JSON.parse(req.responseText));
            } else {
                fail(new Error(`richiesta fallita:${req.status}`));
            }
        });
        req.send(`email=${user}&password=${pw}`);
    });
}



myreq = () => {
    debugger;
    request().then(function (text) {
        if (text.token == "QpwL5tke4Pnpja7X") {
                window.location.href = "./index.html";
        }
    }, function (error) {
        alert(`fottiti coglione fallito ${error}`)
    });

}


window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
       myreq()
    }
}, false);
