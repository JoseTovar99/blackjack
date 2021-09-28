let playerObject = {
    name: "",
    chips: 200
};

let lost = 50;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let checkBtn = document.getElementById("sup").addEventListener("click", startGame);
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let PlayerEl = document.getElementById("player-el");
PlayerEl.textContent = playerObject.name + "$" + playerObject.chips;

//Get a random card function
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 + 1);
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) { 
        return 11
    } else {
        return randomNumber;
    }
}

//Function called startGame that calls renderGame()
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    
    playerEl.textContent = ("$") + (playerObject.chips - 50);

    renderGame();
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Draw card?"    
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true;
        moneyGain = true;
    } else {
        message = "You Lose..."
        isAlive = false;

    }
   
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}




