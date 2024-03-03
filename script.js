// Game will be played against the computer - start with get getComputerChoice function - rock, paper, scissors
// Create a function that plays a single round, includes the player's and computer's choice
    // function should be case insensitive and declare the winner
// Create a game function to play 5 rounds, keeping track of winner and loser


let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => { 
    const choice = 'rock'
    console.log('clicked on rock');
    playRound(choice);
});

paper.addEventListener('click', () => { 
    const choice = 'paper'
    console.log('clicked on paper');
    playRound(choice);
});

scissors.addEventListener('click', () => { 
    const choice = 'scissors'
    console.log('clicked on scissors');
    playRound(choice);
});


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

function playRound(playerChoice) {

    const computerChoice = getComputerChoice();

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {

        console.log(`Player wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        playerScore++;
    }
    else if (playerChoice === computerChoice) {

        console.log(`No one wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        drawScore++;
        
    }
    else {
        console.log(`Computer wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        
        computerScore++;
        
    }
    
    scoreRound(playerChoice, computerChoice);

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

function scoreRound(playerChoice, computerChoice) {

    const playerScoreItem = document.querySelector('.playerscore');
    const computerScoreItem = document.querySelector('.computerscore');

    const paraPlayer = document.createElement('p');
    const paraComputer = document.createElement('p');

    paraPlayer.textContent = `${playerScore} - ${playerChoice}`;
    playerScoreItem.prepend(paraPlayer);
    
    paraComputer.textContent = `${computerChoice} - ${computerScore}`;
    computerScoreItem.prepend(paraComputer);

    paraPlayerScoreTotal1 = document.createElement('p');
    paraPlayerScoreTotal1.textContent =`${playerScore}`;
    
}   


