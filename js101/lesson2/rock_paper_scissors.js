const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard', 'sc', 'l'],
  paper: ['rock', 'spock', 'r', 'sp'],
  scissors: ['paper', 'lizard', 'p', 'l'],
  lizard: ['paper', 'spock', 'p', 'sp'],
  spock: ['rock', 'scissors', 'r', 'sc'],
  r: ['scissors', 'lizard', 'sc', 'l'],
  p: ['rock', 'spock', 'r', 'sp'],
  sc: ['paper', 'lizard', 'p', 'l'],
  l: ['paper', 'spock', 'p', 'sp'],
  sp: ['rock', 'scissors', 'r', 'sc']
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt('You win this round!');
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    prompt('Computer wins this round!');
  } else {
    prompt("It's a tie!");
  }
}

let playerScore = 0;
let computerScore = 0;
let finalWinner = '';

function keepScore(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    playerScore += 1;
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    computerScore += 1;
  }
}

function calculateWinner(playerScore, computerScore) {
  if (playerScore === 3) {
    finalWinner = 'player';
    prompt('Congratulations, you have won the game!');
  } else if (computerScore === 3) {
    finalWinner = 'computer';
    prompt('Too bad, computer has won the game!');
  }
}

function playAgain() {
  while (true) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();

    if (answer[0] === 'y') {
      playerScore = 0;
      computerScore = 0;
      finalWinner = '';
      startGame();
      break;
    } else if (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    } else {
      break;
    }
  }
}

function startGame() {
  console.clear();
  while (finalWinner.length === 0) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ').slice(0,36)} or${VALID_CHOICES.join(', ').slice(37)}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
    keepScore(choice, computerChoice);
    calculateWinner(playerScore, computerScore);
  }
  playAgain();
}

startGame();