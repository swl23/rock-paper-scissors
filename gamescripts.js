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

function getHumanChoice(input) {
    input = prompt('Make your selection: Rock? Paper? Scissors? ')
    console.log(input)
    return input
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let computerVictory = 'The computer wins!';
        let humanVictory = 'You win!';
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(computerVictory);
            computerScore += 1;
            return computerScore
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(humanVictory);
            humanScore += 1;
            return humanScore
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(humanVictory);
            humanScore += 1;
            return humanScore
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(computerVictory);
            computerScore += 1;
            return computerScore
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(computerVictory);
            computerScore += 1;
            return computerScore
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(humanVictory);
            humanScore += 1;
            return humanScore
        }
        else if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log('HUMAN: ' + humanScore);
        console.log('COMPUTER: ' + computerScore)
        console.log('---------------------------------')
    }
}

playGame()