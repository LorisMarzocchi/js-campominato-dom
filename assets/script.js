/*Ciao ragazzi,
Esercizio di oggi: Campo Minato
nome repo: js-campominato-dom
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.*/


const btnPlay = document.querySelector('#btnPlay');
const btnReset = document.querySelector('#btnReset');
let points = 0;
let bombs = [];
let maxTry = 0;



btnPlay.addEventListener("click", function() {
    const containerCard = document.querySelector('.container');
    const level = document.getElementById("level");


    if (level.value == "Easy") {
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("easy"); 
        griglia(100, containerCard);
        maxTry = 84;
       

    }
    else if(level.value == "Hard"){
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("hard");
        griglia(81, containerCard);
        maxTry = 64;
     
        
    }

    else if(level.value == "Crazy"){
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("crazy");
        griglia(49, containerCard);
        maxTry = 34;

        

    }
    bombs = arrBomb(maxTry);

    const listCard = document.querySelectorAll('.cell');
    for (let i = 0; i < listCard.length; i++) {
        const cell = listCard[i];

        cell.addEventListener('click', function(){
            this.classList.toggle("clicked");
            if (bombs.includes(parseInt(this.textContent))) {
                this.classList.add('color2');
                // document.getElementById('punteggio').innerHTML = (points);
                resetGame();
            }
            else {
                this.classList.add('clicked');
                points++;

                if (points == maxTry - bombs.length) {
                document.getElementById('risPunti').innerHTML = ('hai vinto');
                resetGame();
                }
            }
      
        })
        
    }
});

function reset() {
    window.location.reload();
}


// FUNZIONE GENERATE GRIGLIA
function griglia(numCard, containerCard) {
    containerCard.innerHTML = "";
    for (let i = 1; i < numCard + 1; i++) {
        containerCard.innerHTML += `<div class="cell">${i}</div>`;
        
    } 
}
// FUNZIONE GENERATE BOMBE
function arrBomb(maxTry) {
    const bombs = [];
    while (bombs.length < 16) {
        const bomb = Math.floor(Math.random() * maxTry) + 1;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }        
    }
    return bombs;
}
// FUNZIONE RESET GAME
function resetGame() {
//   points = 0;
//   bombs = [];
  const allElements = document.querySelectorAll('.cell, #btnPlay, #level');
  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.pointerEvents = 'none';
    document.getElementById('punteggio').innerHTML = ((points) + '...Clicca il pulsante reset');
  }
}