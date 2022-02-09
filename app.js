// creo lista con le mail tra cui effettuare la verifica

const listaMail = [
"federica.pellegrini@gmail.com", 
"gianmarco.tamberi@gmail.com", 
"marcel.jacobs@gmail.com", 
"gregorio.paltrinieri@gmail.com", 
"filippo.tortu@gmail.com"
];

console.log(listaMail);
const userMail = document.getElementById("user-mail");

// al click del pulsante si effettua il confronto della mail con listaMail

const buttonSubmit = document.getElementById("button_submit");
buttonSubmit.addEventListener("click", function(){
    const valUserMail = userMail.value;
    const j = listaMail.length;
    console.log(j);
    console.log(valUserMail);


    let k = 0; 

    for(i=0; i<j; i++){
        if(valUserMail==listaMail[i]){
            alert("utente riconosiuto puoi proseguire");
            continue;
        }else{
            k++;
        }
    }

    // se nel ciclo for l'indirzzo inserito non è uguale a uno di quelli presente nella lista 
    // appare l'alert per avvisare l'utente

    if(k===j){
        alert("non sei autorizzato a proseguire")
    }
})


// esercizio 2 dadi

// creo i due numeri random

const number1 = Math.floor(Math.random()*6+1);
console.log("number1",number1);

const number2 = Math.floor(Math.random()*6+1);
console.log("number2", number2);

const lancioUtente = document.getElementById("lancio-utente");
const lancioComputer = document.getElementById("lancio-computer");

lancioUtente.append(number1);
lancioComputer.append(number2);

const giudiceGara = document.getElementById("giudice_gara");

if(number1<number2){
    giudiceGara.append ("Il Computer ha vinto");
} else if(number2<number1){
    giudiceGara.append ("L'utente ha vinto");
} else {
    giudiceGara.append ("Assoluta parità non ha vinto nessuno");
}



