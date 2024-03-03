// Game will be played against the computer - start with get getComputerChoice function - rock, paper, scissors
// Create a function that plays a single round, includes the player's and computer's choice
    // function should be case insensitive and declare the winner
// Create a game function to play 5 rounds, keeping track of winner and loser


let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundNumber = 0;

const playerScoreUI = document. querySelector('#playerscoretotal')
const computerScoreUI = document. querySelector('#computerscoretotal')

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => { 
    const choice = 'rock'
    playRound(choice);
});

paper.addEventListener('click', () => { 
    const choice = 'paper'
    playRound(choice);
});

scissors.addEventListener('click', () => { 
    const choice = 'scissors'
    playRound(choice);
});


function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3) +1;
 
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
        playerScoreUI.textContent = playerScore;
    }
    else if (playerChoice === computerChoice) {

        console.log(`No one wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        drawScore++;
        
    }
    else {
        console.log(`Computer wins! Player: ${playerChoice} Computer: ${computerChoice}`);
        
        computerScore++;
        computerScoreUI.textContent = computerScore;
    }
    
    roundNumber++;
    trackRound(playerChoice, computerChoice);
    checkGameWinner();

}

function checkGameWinner() {
    
    const winnerAnnouncement = document.querySelector('.scoreboard')

    if (playerScore === 5) {
        gameWinner = 'Player';
        winnerItem = document.createElement('p');
        winnerItem.setAttribute("class", "winnerannouncer");
        winnerItem.style.color ='green';
        winnerItem.textContent = `${gameWinner} Wins the Game!`;
        winnerAnnouncement.prepend(winnerItem);

    }
    else if (computerScore === 5) {
        gameWinner = 'Computer';
        winnerItem = document.createElement('p');
        winnerItem.setAttribute("class", "winnerannouncer");
        winnerItem.style.color ='Red';
        winnerItem.textContent = `${gameWinner} Wins the Game!`;
        winnerAnnouncement.prepend(winnerItem);
}

function trackRound(playerChoice, computerChoice) {

    const playerScoreItem = document.querySelector('.playerscore');
    const roundNum = document.querySelector('.roundnumber')
    const computerScoreItem = document.querySelector('.computerscore');
    
    const paraPlayer = document.createElement('p');
    const paraRound = document.createElement('p');
    const paraComputer = document.createElement('p');
    
    paraPlayer.textContent = playerChoice;
    playerScoreItem.prepend(paraPlayer);
    
    paraRound.textContent = `ROUND ${roundNumber}`;
    roundNum.prepend(paraRound);
     
    paraComputer.textContent = computerChoice;
    computerScoreItem.prepend(paraComputer);
        
}