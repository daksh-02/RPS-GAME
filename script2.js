
const scoreDiv = document.getElementById('player-score')
const hand = document.getElementById('hands')
const res = document.getElementById('result')
let s = 0;
function getComputerChoice(){
    const dummy = Math.floor(Math.random()*3)

    if(dummy == 0)return 'Rock'
    if(dummy == 1)return 'Scissors'
    return 'Paper'
}


function getResult(playerChoice, compChoice){
    if(playerChoice === 'Rock'){
        if(compChoice=== 'Paper')return -1;
        else if(compChoice === 'Scissors') return 1;
        else return 0;
    }

    if(playerChoice === 'Paper'){
        if(compChoice === 'Paper')return 0;
        else if(compChoice === 'Scissors') return -1;
        else return 1;
    }
   
    if(compChoice === 'Paper')return 1;
    else if(compChoice === 'Scissors') return 0;
    else return -1;

}

function showResult(score, playerChoice, compChoice){
    s += score
    scoreDiv.innerText = s
    hand.innerText = playerChoice+' VS '+compChoice
    if(score==0)res.innerText = 'DRAW'
    else if(score == 1)res.innerText = 'YOU WIN'
    else res.innerText = 'YOU LOSE'
    
}

function onClickRPS(playerChoice){
    const compChoice = getComputerChoice()
    const winner = getResult(playerChoice,compChoice)
    showResult(winner,playerChoice, compChoice)
}

function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    }) 
}


function endGame(){
    const end = document.getElementById('endButton')
    end.onclick = () =>{
        scoreDiv.innerText = ''
        res.innerText = ''
        hand.innerText = ''
        s = 0
    }
}

playGame()
endGame()