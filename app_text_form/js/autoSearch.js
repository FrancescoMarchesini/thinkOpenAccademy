/**
 * fonte del codice : https://www.w3schools.com/howto/howto_js_autocomplete.asp
 */

var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];


/*
 * param {*} inp : il valore di input dalla tastiera
 * param {*} arr : l'array dei possibll valori con cui fare il match
 */
function autocomplete(inp, arr) {
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
