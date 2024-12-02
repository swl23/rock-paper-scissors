let humanScore = 0;
let computerScore = 0;

function updateScore() {
    let oldHuman = document.getElementById('human-score');
    let oldComputer = document.getElementById('computer-score');

    oldHuman.textContent = humanScore;
    oldComputer.textContent = computerScore
}

function checkWinner(x, y) {
    if (x === 5) {
        alert('YOU WIN, HUMAN!');
    }
    else if (y === 5) {
        alert('COMPUTER WINS!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateScore();
    
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        let choice = 'rock';
        playRound(choice);
        updateScore();
        checkWinner(humanScore, computerScore);
    });

    paper.addEventListener('click', () => {
        let choice = 'paper';
        playRound(choice);
        updateScore();
        checkWinner(humanScore, computerScore);
    });

    scissors.addEventListener('click', () => {
        let choice = 'scissors';
        playRound(choice);
        updateScore();
        checkWinner(humanScore, computerScore);
    });
})

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)
    if (x === 0) {
        choice = "rock"
    }
    else if (x === 1) {
        choice = "paper"
    }
    else if (x === 2) {
        choice = "scissors"
    }
    console.log(choice)
    return choice
}

function playRound(humanChoice) {
    let computerVictory = 'The computer wins!';
    let humanVictory = 'You win!';
    let scoreboard = document.querySelector('.scoreboard');
    const result = document.createElement('p');
    const computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = computerVictory;
        scoreboard.appendChild(result);
        computerScore += 1;
        return computerScore
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = humanVictory;
        scoreboard.appendChild(result);
        humanScore += 1;
        return humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = humanVictory;
        scoreboard.appendChild(result);
        humanScore += 1;
        return humanScore
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = computerVictory;
        scoreboard.appendChild(result);
        computerScore += 1;
        return computerScore
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = computerVictory;
        scoreboard.appendChild(result);
        computerScore += 1;
        return computerScore
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = humanVictory;
        scoreboard.appendChild(result);
        humanScore += 1;
        return humanScore
    }
    else if (humanChoice === computerChoice) {
        result.textContent = 'It\'s a tie!';
        scoreboard.appendChild(result);
    }
}