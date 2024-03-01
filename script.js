// Game will be played against the computer - start with get getComputerChoice function - rock, paper, scissors
// Create a function that plays a single round, includes the player's and computer's choice
    // function should be case insensitive and declare the winner
// Create a game function to play 5 rounds, keeping track of winner and loser


let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Create function for the computer to select either rock, paper, or scissors randomly and is case insensitive

function getPlayerChoice() {
    const choice = prompt('Enter One: Rock, Paper, Scissors').toLowerCase();
    
    return choice;
}

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

    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {

        console.log(`Player wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        playerScore++;
        return 'Player';
    }
    else if (playerChoice === computerChoice) {

        console.log(`No one wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        drawScore++;
        return `Draw`;

    }
    else {
        console.log(`Computer wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        computerScore++;
        return 'Computer';        
    }
}

// Create a function to execute the round 5 times, outputting and tracking the winner and loser of each round

function playGame(numOfRounds) {

    for(i = 0; i < numOfRounds; i++) {

        playRound();
        console.log(`Round ${i + 1}`);
        console.log('-------------------------')
    }
    checkGameWinner();

    while (i === numOfRounds && playerScore === computerScore){
        console.log('TIE BREAKER!')
        playRound();
    }
}

function checkGameWinner() {
    if (playerScore > computerScore ) {
        console.log(`Player Wins! ${playerScore} to ${computerScore}`)
    }
    else if (computerScore > playerScore) {
            
            console.log(`Computer Wins! ${computerScore} to ${playerScore}`)
    }
    else {
        console.log(`No one wins! It's a Draw! ${computerScore} to ${playerScore}`)
        console.log('-------------------------')
    }
}