let firstcard =  0
let secondcard = 0
let newcard = 0
let cards = []
let bodyel = document.querySelector("body")


let sum = firstcard + secondcard
let add = sum + 0
let hasBlackjack = false
let isAlive = false
let messageEl = document.querySelector("#message-El")
let sumEl = document.querySelector("#sum-El")
let cardEl = document.querySelector("#card-El")
let playercash = document.querySelector("#player-cash")

let playerinfo = {
     name: "Sparky: ",
     currency: "$",
     money: 100,
     broke:  "You are out of money! Leave before you get beaten up!"
}

messageEl.textContent = "Wanna play a game of black jack?"

function renderGame () {
 if (sum <= 20) {
    message = "Do you want to draw a new card? "
    isAlive = true
    hasBlackjack === false
}else if (sum === 21) {
     message = "You've got blackjack 🎉 "
     hasBlackjack = true
     isAlive = true
}else {
     message = "You're out of the game "
     hasBlackjack = false
     isAlive = false
}
  
   cardEl.textContent = "Cards: "
   for (let i = 0; i < cards.length; i++) {
     cardEl.textContent += cards [i] + " "
   }
  
   playercash.textContent = playerinfo.name + playerinfo.currency + playerinfo.money 
   sumEl.textContent = "Sum :" + sum
   messageEl.textContent = message
}

function startGame(){
     if (playerinfo.money > 0 ){
     firstcard = randomcard ()
     secondcard = randomcard()
     cards = [firstcard, secondcard,]
     sum = firstcard + secondcard
    
     cardEl.textContent = "Cards: " 
     playerinfo.money = playerinfo.money
     hasBlackjack = false
    
     renderGame ()
     if (hasBlackjack === true){
          playerinfo.money +=  10
       }else if(isAlive === false){
          playerinfo.money += -10
       }else{
          playerinfo.money = playerinfo.money
       }
       playercash.textContent = playerinfo.name + playerinfo.currency + playerinfo.money 

       if(playerinfo.money === 0) {
          messageEl.textContent = " Game over"
       }
     }
     else if (playerinfo.money < 1) {
          playercash.textContent = playerinfo.broke 
          
     }
}

function terminategame () {
      firstcard =  0
      secondcard = 0
      newcard = 0
      cards = []
      messageEl.textContent = "Game over"
}
   
function addCard () {

     if(hasBlackjack === false && isAlive === true){        
          newcard = randomcard()
          sum += newcard
          cards.push(newcard)
          renderGame()
          if (hasBlackjack === true){
               playerinfo.money += 10
          }else if (isAlive === false && hasBlackjack === false){
               playerinfo.money+= - 10
          }
          if(playerinfo.money === 0) {
               messageEl.textContent = " Game over"}
    
              playercash.textContent = playerinfo.name + playerinfo.currency + playerinfo.money
               } 
     } 
          
     
      
    
    
function randomcard() { 
     randomNumber = Math.floor ( Math.random( ) * 12) + 1
     if (randomNumber > 10) {
          randomNumber = 11
     }else if (randomNumber < 2 ){
          randomNumber = 10
     }
      return randomNumber  
}

