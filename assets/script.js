


const btnPlay = document.querySelector('#btnPlay');
let points = 0;


btnPlay.addEventListener("click", function() {
    const containerCard = document.querySelector('.container');
    const level = document.getElementById("level");
    
    if (level.value == "Easy") {
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("easy"); 
        griglia(100, containerCard);
    }
    else if(level.value == "Hard"){
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("hard");
        griglia(81, containerCard);
    }
    else if(level.value == "Crazy"){
        containerCard.classList.remove("easy", "hard", "crazy");
        containerCard.classList.add("crazy");
        griglia(49, containerCard);
    }
    
    const listCard = document.querySelectorAll('.cell');
    
    for (let i = 0; i < listCard.length; i++) {
        const cell = listCard[i];

        cell.addEventListener('click', function(){
            this.classList.toggle("clicked");
            // if(level.value == "Hard"){
              
            //     this.classList.toggle("color3");
            // }
            
            // if (level.value == "Crazy") {
                
            //     this.classList.toggle("color2");
            // }
        })
        
    }
});
function griglia(numCard, containerCard) {
    containerCard.innerHTML = "";
    for (let i = 1; i < numCard + 1; i++) {
        containerCard.innerHTML += `<div class="cell">${i}</div>`;
        
        
    } 
}
