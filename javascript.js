let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Would you like to choose rock, paper, or scissor?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        console.log("You Lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor") {
        console.log("You Win! Rock beats scissor");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log("You Win! Paper beats rock");
        humanScore++;
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissor") {
        console.log("You Lose! Scissor beats paper");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "rock") {
        console.log("You Lose! Rock beats scissor");
        computerScore++;
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper") {
        console.log("You Win! Scissor beats paper");
        humanScore++;
    }
    else {
        console.log("It's a draw!");
    }
}

function playGame() {
    let round = 0;
    while (round != 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }
    if (humanScore > computerScore) {
        console.log("Final: You Win!");
    }
   else if (computerScore > humanScore){
        console.log("Final: You Lose!");
   }
   else {
        console.log("Final: It's a Tie!");
   }

}

console.log(playGame());