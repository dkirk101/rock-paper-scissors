// Game will be played against the computer - start with get getComputerChoice function - rock, paper, scissors
// Create a function that plays a single round, includes the player's and computer's choice
    // function should be case insensitive and declare the winner
// Create a game function to play 5 rounds, keeping track of winner and loser

// Declare variables rock, paper, scissors and assigne 1, 2, and 3

const rock = 1;
const paper = 2;
const scissors = 3;

// Declare a variable via user prompt for user's selection of rock, paper, or scissors

let playerChoice = prompt('Enter One: Rock, Paper, Scissors').toLowerCase();
console.log(playerChoice);

const computerChoice = getComputerChoice();

// Create function for the computer to select either rock, paper, or scissors randomly and is case insensitive

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3) +1;
    console.log(choice)
 
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
    return choice;
}
console.log(computerChoice);

// Create a function to play a single round of game using the user and computer choices
// Create a function to execute the round 5 times, outputting and tracking the winner and loser of each round
