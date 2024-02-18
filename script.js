// Game will be played against the computer - start with get getComputerChoice function - rock, paper, scissors
// Create a function that plays a single round, includes the player's and computer's choice
    // function should be case insensitive and declare the winner
// Create a game function to play 5 rounds, keeping track of winner and loser


// Create function for the computer to select either rock, paper, or scissors randomly and is case insensitive

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3) +1;
    // console.log(choice)playRound();
 
    switch(choice) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        default:
            return undefined

    }
}

// Create a function to play a single round of game using the user and computer choices

function playRound() {

    let playerChoice = prompt('Enter One: Rock, Paper, Scissors').toLowerCase();
    let computerChoice = getComputerChoice();

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        let playRound = 'player';
        console.log(`Player wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        return playRound;
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock') {
        let playRound = 'player';
        console.log(`Player wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        return playRound;
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        let playRound = 'player';
        console.log(`Player wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        return playRound;
    }
    else if (playerChoice === computerChoice) {
        let playRound = 'draw';
        console.log(`Draw! Player: ${playerChoice} Computer: ${computerChoice}`);
        return playRound;
    }
    else {
        let playRound = 'computer';
        console.log(`Computer wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        return playRound;
    }
}

// Create a function to execute the round 5 times, outputting and tracking the winner and loser of each round

function playGame() {

}