const rockbutton = document.querySelector('#rock');
const paperbutton = document.querySelector('#paper');
const scissorsbutton = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;

const scores = document.querySelector('#scores');

let points = document.createElement('p');
points.classList.add('points');

const winner = document.createElement('p');
winner.classList.add('winner');

let roundUpdates = document.createElement('p');
roundUpdates.classList.add('roundUpdates');

const playAgain = document.createElement('button');
playAgain.classList.add('playAgain');
playAgain.innerHTML = 'PLAY AGAIN OR RESET';
playAgain.addEventListener('click', () => {
  endGame();
});

scores.appendChild(roundUpdates);
scores.appendChild(points);
scores.appendChild(winner);
scores.appendChild(playAgain);

function randomInt(min, max) {
  min = Math.ceil(1)
  max = Math.floor(3)
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

function turnOffButtons() {
  rockbutton.setAttribute('disabled', 1);
  paperbutton.setAttribute('disabled', 1);
  scissorsbutton.setAttribute('disabled', 1);
}

function endGame() {
  playerScore = 0;
  computerScore = 0;

  winner.innerHTML = '';
  points.innerHTML = 'The score is You: ' + playerScore + ' vs ' + 'Computer: ' + computerScore + '.';

  rockbutton.removeAttribute('disabled');
  paperbutton.removeAttribute('disabled');
  scissorsbutton.removeAttribute('disabled');
}

rockbutton.addEventListener('click', () => {
  if (computerPlay() === 'Rock') {
    roundUpdates.textContent = 'it was a tie!';
  } else if (computerPlay() === 'Paper') {
    roundUpdates.textContent = 'computer wins this round!';
    computerScore++;
  } else {
    roundUpdates.textContent = 'you win this round!';
    playerScore++;
  }
  points.textContent = 'The score is You: ' + playerScore + ' vs ' + 'Computer: ' + computerScore + '.';
  if (computerScore === 5) {
    winner.textContent = 'THE COMPUTER WINS! WOMP WOMP BEEP BOOP';
    turnOffButtons();
  } else if (playerScore === 5) {
    winner.textContent = 'YOU WIN! THE HUMAN IS BETTER THAN THE MACHINE!';
    turnOffButtons();
  }
});

rockbutton.addEventListener('mouseover', () => {
  rockbutton.setAttribute('style', 'opacity:0.8;');
});

rockbutton.addEventListener('mouseout', () => {
  rockbutton.setAttribute('style', 'opacity:1;');
});

paperbutton.addEventListener('click', () => {
  if (computerPlay() === 'Rock') {
    roundUpdates.textContent = 'you win this round!';
    playerScore++;
  } else if (computerPlay() === 'Paper') {
    roundUpdates.textContent = 'it was a tie!';
  } else {
    roundUpdates.textContent = 'computer wins this round!';
    computerScore++;
  }
  points.textContent = 'The score is You: ' + playerScore + ' vs ' + 'Computer: ' + computerScore + '.';
  if (computerScore === 5) {
    winner.textContent = 'THE COMPUTER WINS! WOMP WOMP BEEP BOOP';
    turnOffButtons();
  } else if (playerScore === 5) {
    winner.textContent = 'YOU WIN! THE HUMAN IS BETTER THAN THE MACHINE!';
    turnOffButtons();
  }
});

paperbutton.addEventListener('mouseover', () => {
  paperbutton.setAttribute('style', 'opacity:0.8;');
});

paperbutton.addEventListener('mouseout', () => {
  paperbutton.setAttribute('style', 'opacity:1;');
});

scissorsbutton.addEventListener('click', () => {
  if (computerPlay() === 'Rock') {
    roundUpdates.textContent = 'computer wins this round!';
    computerScore++;
  } else if (computerPlay() === 'Paper') {
    roundUpdates.textContent = 'you win this round!';
    playerScore++;
  } else {
    roundUpdates.textContent = 'it was a tie!';
  }
  points.textContent = 'The score is You: ' + playerScore + ' vs ' + 'Computer: ' + computerScore + '.';
  if (computerScore === 5) {
    winner.textContent = 'THE COMPUTER WINS! WOMP WOMP BEEP BOOP';
    turnOffButtons();
  } else if (playerScore === 5) {
    winner.textContent = 'YOU WIN! THE HUMAN IS BETTER THAN THE MACHINE!';
    turnOffButtons();
  }
});

scissorsbutton.addEventListener('mouseover', () => {
  scissorsbutton.setAttribute('style', 'opacity:0.8;');
});

scissorsbutton.addEventListener('mouseout', () => {
  scissorsbutton.setAttribute('style', 'opacity:1;');
});

playAgain.addEventListener('mouseover', () => {
  playAgain.setAttribute('style', 'background-color:darkgray;');
});

playAgain.addEventListener('mouseout', () => {
  playAgain.setAttribute('style', 'background-color:lightgray;');
});