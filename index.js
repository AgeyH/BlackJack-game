//player object
let player = {
    name: "Hope",
    chips: 230
}
//variables for the game
let hasBlackJack = false
let isAlive = false // is the game still alive?
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//function to generate random card numbers
function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else{
        return randomNumber
    }
}

//function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //cards array
    sum = firstCard + secondCard
    renderGame()
}

//function to render the game
function renderGame() {
    cardsEl.textContent =  "Cards: "
// loop that renders all the cards 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to draw another card?")
    } else if( sum === 21) {
        message = ("Congratulations!! You've got Blackjack!")
        hasBlackJack = true
    } else {
        message = ("Sorry!! You're out of the game!")
        isAlive = false
    }

   messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card) // adding the new card to the cards array
        renderGame()
    }
   
}


