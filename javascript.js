// UI
const container = document.querySelector("#container");

const result = document.createElement("div");



// the Game
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

// function getHumanChoice() {
//     let choice = prompt("Would you like to choose rock, paper, or scissor?");
//     return choice;
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | It's a Draw!`;
    }
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        computerScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Lose! Paper beats rock`;
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor") {
        humanScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Win! Rock beats scissor`;
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        humanScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Win! Paper beats rock`;
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissor") {
        computerScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Lose! Scissor beats paper`;
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "rock") {
        computerScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Lose! Rock beats scissor`;
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper") {
        humanScore++;
        return `You chose: ${humanChoice} | Computer chose: ${computerChoice} | You Win! Scissor beats paper`;
    }
}
// event listeners
const choice_rock = document.querySelector("#btn_rock");
const choice_paper = document.querySelector("#btn_paper");
const choice_scissor = document.querySelector("#btn_scissor");
const button_playAgain = document.querySelector("#playagain");

function handleRound(humanChoice) {
    const message = playRound(humanChoice, getComputerChoice());
    if (humanScore === 5) {
            result.textContent = "You WIN!";
            button_playAgain.style.display = "block";
            choice_rock.disabled = true;
            choice_paper.disabled = true;
            choice_scissor.disabled = true;
            return;
        }
        else if (computerScore === 5) {
            result.textContent = "You LOSE!";
            button_playAgain.style.display = "block";
            choice_rock.disabled = true;
            choice_paper.disabled = true;
            choice_scissor.disabled = true;
            return;
        }
        else {
            result.textContent = `${message} | Human Score: ${humanScore} | Computer Score: ${computerScore}`;
        }
}

function playGame() {
    button_playAgain.style.display = "none";

    choice_rock.addEventListener("click", () => {
        handleRound("rock");
    });
    choice_paper.addEventListener("click", () => {
        handleRound("paper");
    });
    choice_scissor.addEventListener("click", () => {
       handleRound("scissor");
    });
    container.appendChild(result);

}
button_playAgain.addEventListener("click", () => {
    choice_rock.disabled = false;
    choice_paper.disabled = false;
    choice_scissor.disabled = false;
    humanScore = 0;
    computerScore = 0;

    result.textContent = "Choose Rock, Paper, or Scissor!";
});

playGame();