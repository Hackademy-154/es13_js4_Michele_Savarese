let numeroTiri = parseInt(prompt(`Quanti tiri effettuare?`));

let players = 2;
let sommatiri1 = 0;
let sommatiri2 = 0;
let totaletiri = numeroTiri * players;

// let giocatore1 = sommatiri1;
// let giocatore2 = sommatiri2;


function gioco(totaletiri) {
    for (let i = 0; i < totaletiri; i++) {
        
        let risultatodado = Math.floor(Math.random() * (6 - 1) + 1);
        
        if (i % 2 == 0) {
            sommatiri1 = risultatodado +  sommatiri1;
            
        } else {
            sommatiri2 = risultatodado + sommatiri2;
            
        }
        
    } 
    if(sommatiri1 > sommatiri2){
        alert(`Complimenti giocatore1 hai vinto! Hai ottenuto ${sommatiri1} punti.`)
    }
    

    
    else if (sommatiri1 == sommatiri2) {
        alert(`Incredibile scontro, pareggio!`)
        // {alert(`Complimenti giocatore2 hai vinto!`)
        
    }
    
    else {alert(`Complimenti giocatore2 hai vinto! Hai ottenuto ${sommatiri2} punti`)

    }
    
}




gioco(totaletiri);