const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];
const  WINNING_SCORE = 3;

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
    return choice;
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    prompt('Computer wins this round!');
    return computerChoice;
  } else {
    prompt("It's a tie!");
  }
}

let finalWinner = '';
let playerScore = 0;
let computerScore = 0;

function keepScore(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    playerScore += 1;
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    computerScore += 1;
  }
  prompt(`Your current score is ${playerScore}. Computer's score is ${computerScore}.`);
}

function calculateWinner(playerScore, computerScore) {
  if (playerScore === WINNING_SCORE) {
    prompt('Congratulations, you have won the game!');
    finalWinner = 'player';
    return finalWinner;
  } else if (computerScore === WINNING_SCORE) {
    prompt('Too bad, computer has won the game!');
    finalWinner = 'computer';
    return finalWinner;
  }
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer !== 'yes' && answer !== 'no' && answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if ((answer[0] === 'y' && answer.length === 1) || answer === 'yes') {
    return true;
  } else if ((answer[0] === 'n' && answer.length === 1) || answer === 'no')   {
    return false;
  } else {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}

function resetAndPlay(answer) {
  if (answer === true) {
    playerScore = 0;
    computerScore = 0;
    finalWinner = '';
    startGame();
  } else {
    prompt('Thanks for playing, see you next time!');
  }
}

function computerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function playerChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ').slice(0,36)} or${VALID_CHOICES.join(', ').slice(37)}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  return choice;
}

function startGame() {
  console.clear();
  prompt("Welcome to RPSLS! Best 3 out of 5 rounds wins.");
  while (finalWinner !== 'player' && finalWinner !== 'computer') {
    let computerPick = computerChoice();
    let playerPick = playerChoice();

    displayWinner(playerPick, computerPick);
    keepScore(playerPick, computerPick);
    calculateWinner(playerScore, computerScore);
  }
  prompt("Thanks for playing!");
  let playAgainChoice = playAgain();
  resetAndPlay(playAgainChoice);
}

startGame();
