console.log('this is a test:hi Jasmine')
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

const difficulty = {
  "easy": 5,
  "medium": 10,
  "hard": 15
}

// Variables
let cards, message, matchesRemaining, turn, seconds, tickInterval, waitingForTimeout, card1Idx, card1Val, card2Idx, card2Val


// Element Refernces
const resetDiv = document.getElementById('reset-div')
const difficutlyBtns=document.getElementById('difficulty-buttons')
const messageEl= document.getElementById('message')
const playArea= document.getElementById('play-area')
const resetBtn= document.getElementById('reset-button')

// Event Listenters
difficutlyBtns.addEventListener('click',function (evt) {
    if(evt.target.classList.contains('btn')) {
        difficutlyBtns.classList.add('hidden')
        resetDiv.classList.remove('hidden')
        setDifficulty(difficulty[evt.target.id])
    }
})

resetBtn.addEventListener('click',init) 


playArea.addEventListener('click',function (evt) {
    console.log(evt.target)
})

// Functions

init()

function init () {
    difficutlyBtns.classList.remove('hidden')
    resetDiv.classList.add('hidden')
    message = 'Please select difficulty '
    waitingForTimeout = false
    turn = 1
    playArea.innerHTML = ""
    cards = []
    matchesRemaining = 0 
    seconds = 0
    clearInterval(tickInterval)
    tickInterval = setInterval(tick,1000)
    render()
}


function tick (){
    seconds++
}


function handleCardClick () {
//if turn is 1, handle the first card begin picked
//if turn is -1, handle the second card begin picked
    turn *= -1

}


function setDifficulty (numCards) {
    // shuffle
    message = 'pick a card'
    let deckCopy = [...deck]
    let randomCard
    let cardsToshuffle =[]
    console.log(numCards)
    render()
    shuffle()
}


function shuffle (cardsIn) {
//shuffle cars passed in 

}

function render() {
    messageEl.textContent = message
}
