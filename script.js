let player = {
    name:"jith",
    chips:145
}
let cards = []
sum = 0
let hasblackjack = false
let isAlive = false
let message=""
let messageEl = document.getElementById("message-el");
let cardel= document.getElementById("card")
let sumel = document.getElementById("sum-el")


let playerEl = document.getElementById("player-el")
playerEl.textcontent = player.name + ": $" + player.chips

function getrandomcard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber >10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    sum=firstcard+ secondcard
    cards = [firstcard,secondcard]
    rendergame()
}

function rendergame(){
    cardel.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardel.textContent += cards[i] + " "
    }
    sumel.textContent = "Sum: "+sum
if(sum<=20){
    message = "Do you want to draw a new card?"
}
else if(sum === 21){
    message="Wohoo! you've got the Blackjack"
    hasblackjack = true
}
else{
    message= "you're out of the game!"
    isAlive = false
}
    messageEl.textContent = message 
}

function ncard(){
    if(isAlive==true && hasblackjack == false){
    let thirdcard = getrandomcard()
    sum+=thirdcard
    cards.push(thirdcard)
    console.log(cards)
    rendergame()
    }
}