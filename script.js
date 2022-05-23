function randomInt() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

function computerPlay() {
    let testNumber = randomInt();
    if (testNumber === 1) {
        return 'Rock';
    } else if (testNumber === 2) {
        return 'Paper';
    } else if (testNumber === 3) {
        return 'Scissors';
    }
}

function playRound(playerSelection = prompt('rock, paper, or scissors?').toUpperCase(), computerSelection = computerPlay().toUpperCase()) {    
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerScore++;
        return 'You lose, PAPER beats ROCK! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScore++;
        return 'You lose, SCISSORS beats PAPER! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++;
        return 'You lose, ROCK beats SCISSORS! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScore++;
        return 'You win, ROCK beats SCISSORS! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        playerScore++;
        return 'You win, PAPER beats ROCK! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++;
        return 'You win, SCISSORS beats PAPER! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') {
        return 'It was a tie! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        return 'It was a tie! The score is ' + playerScore + ' to ' + computerScore + '!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return 'It was a tie! The score is ' + playerScore + ' to ' + computerScore + '!';
    }
}

function game() {
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        console.log(playRound());
    } if (playerScore > computerScore) {
        return 'The score was ' + playerScore + ' to ' + computerScore + '. Game over, you win!';
    } else if (playerScore < computerScore) {
        return 'The score was ' + playerScore + ' to ' + computerScore + '. Game over, you lose!';
    } else {
        return 'The score was ' + playerScore + ' to ' + computerScore + '. Game over, it was a tie, bummer!';
    }    
}

let playerScore = 0;
let computerScore = 0;

console.log(game())