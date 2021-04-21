//Constantes

const d = new Date();
let ar = document.getElementById('aremplir');
//Déclarations de variables

let dateheure = document.getElementById('dateheure');

//concernant la date
let today;
today = d;

let mday;
mday = d.getDate();

let day;

let year;
year = d.getFullYear();

//concernant l'heure 

let heure;
heure = d.getHours();

let minute;
minute = d.getMinutes();

let seconde;
seconde = d.getSeconds();

// Corps de nos variables

//Jours de la semaine
switch (new Date().getDay()) {
    case 0:
        day = "Dimanche";
        break;
    case 1:
        day = "Lundi";
        break;
    case 2:
        day = "Mardi";
        break;
    case 3:
        day = "Mercredi";
        break;
    case 4:
        day = "Jeudi";
        break;
    case 5:
        day = "Vendredi";
        break;
    case 6:
        day = "Samedi";
        break;
}

//Mois de l'année

let month = new Array();
month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Août";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";


let mois = month[d.getMonth()];

function horloge() {
    
    ar.innerHTML = (`Nous sommes le : ${day} ${mday} ${mois} ${year}, il est : ${heure}h ${minute}m ${seconde}s`);
}


let run = setInterval(horloge(), 1000);



