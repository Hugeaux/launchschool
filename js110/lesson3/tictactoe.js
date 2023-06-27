const readlineSync = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const FIRST_PLAYER = 'Player';
const WINNING_LINES = [
  [1, 2 , 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(string) {
  console.log(string);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(` ${board['1']}   |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['4']}   |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['7']}   |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializedBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readlineSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    
    prompt('Sorry, that\'s nog a valid choice');
  }

  board[square] = HUMAN_MARKER;
};

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board,  HUMAN_MARKER);
      if (square) break;
    }

  }

  if (!square) {
    if (board['5'] === INITIAL_MARKER) {
      square = '5';
    }
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let  line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(arr, separator = ', ') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1){
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return `${arr[0]} or ${arr[1]}`;
  } else {
    return `${arr.join(separator).slice(0, -1).trimEnd()} or ${arr[arr.length - 1]}`;
  }
}

function currentScore(player) {
  return scores[player];
}

function displayScore() {
  console.log(`Player has won ${currentScore('Player')} games, Computer has won ${currentScore('Computer')} games`); 
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(value => value === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function chooseSquare(board, player) {
  if (player === 'Player') {
    return playerChoosesSquare(board);
  } else if (player === 'Computer') {
    return computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  if (player === 'Player') {
    return 'Computer';
  } else if (player === 'Computer') {
    return 'Player';
  }
}

function startRound() {

  while (true) {
    let board = initializedBoard();
    let currentPlayer = FIRST_PLAYER;
    
    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      debugger;
      if (someoneWon(board) || boardFull(board)) break;
    }
    
    displayBoard(board);
    
    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won that round!`);
      scores[detectWinner(board)] += 1;
      displayScore();
    } else {
      prompt("It's a tie!");
    }

    if (scores['Player'] === GAMES_TO_WIN || scores['Computer'] === GAMES_TO_WIN) break;
    
    playAgain();
    break;
  }
}

function playAgain() {

  while (true) {
    prompt('Play again? (yes or no)');
    let answer = readlineSync.question().toLowerCase();
    if (answer === 'yes') {
      startRound();
      break;
    } else if (answer === 'no') {
      break;
    } 

    prompt("Sorry, that's not a valid input (yes or no)");
  }
}

startRound();

prompt('Thanks for playing Tic Tac Toe!');
