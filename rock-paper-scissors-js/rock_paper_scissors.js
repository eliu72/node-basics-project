    

function computerPlay() {
    options = ["ROCK", "PAPER", "SCISSORS"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection, resultMsgElem) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        result = ["TIE", `It's a tie! Both players played ${playerSelection}.`];
        resultMsgElem.textContent = result[1];
        return [0,0];
    }
    combinations = {
        "ROCK":{
            "PAPER": ["WIN", "You lose this round! Paper beats rock."],
            "SCISSORS": ["LOSE", "You win this round! Rock beats scissors."]
        },
        "PAPER":{
            "ROCK": ["WIN", "You win this round! Paper beats rock."],
            "SCISSORS": ["LOSE", "You lose this round! Scissors beats paper."]
        },
        "SCISSORS":{
            "ROCK": ["LOSE", "You lose this round! Rock beats scissors"],
            "PAPER": ["WIN", "You win this round! Scissors beats paper."]
        }
    }
    result = combinations[playerSelection][computerSelection];
    resultMsgElem.textContent = result[1];
    
    if (result[0] == "WIN")
        return [1,0];
    else
        return [0,1];
}

function updateScore(userScore, computerScore, winningScore=5, resultMsgElem){
    if (userScore == winningScore){
        resultMsgElem.textContent += ` Final scoreboard. User: ${userScore}. Computer: ${computerScore}. Yon won ${winningScore} rounds. Congrats!`;
    }
    else if (computerScore == winningScore) {
        resultMsgElem.textContent += ` Final scoreboard. User: ${userScore}. Computer: ${computerScore}. Computer won ${winningScore} rounds. GAME OVER!`;
    }
    else {
        resultMsgElem.textContent += ` Current scoreboard. User: ${userScore}. Computer: ${computerScore}.`
    }
}

function playGame(rounds = 5) {
    let userScore = 0, computerScore = 0;
    for (let i = 0; i < rounds; i++){
        let userChoice = prompt("Please input 'rock', 'paper', or 'scissors': ");
        let computerChoice = computerPlay();
        console.log(`You played ${userChoice.toUpperCase()}. The Computer played ${computerChoice.toUpperCase()}.`);
        
        result = playRound(userChoice, computerChoice);
        console.log(result[1]);
        if (result[0] === "WIN") {
            userScore += 1;
        }
        else if (result[0] === "LOSE"){
            computerScore += 1;
        }
    }
    if (userScore > computerScore) {
        console.log(`You won ${userScore} out of ${rounds} rounds. You win the game!`);
    }
    else if (userScore === computerScore){
        console.log(`You both won ${userScore} rounds. You tied with the computer!`)
    }
    else {
        console.log(`You only won ${userScore} out of ${rounds} rounds. You lose the game :(`);
    }
}