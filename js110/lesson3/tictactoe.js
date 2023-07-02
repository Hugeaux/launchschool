const readlineSync = require('readline-sync');
const PLAYER = 'Player';
const COMPUTER = 'Computer';
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const FIRST_PLAYER = PLAYER;
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
}

function loopLines(board, marker) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) return square;
  }

  return null;
}

function computerChoosesSquare(board) {
  let square;

  square = loopLines(board, COMPUTER_MARKER);

  if (!square) {
    square = loopLines(board, HUMAN_MARKER);
  }

  if (!square && board['5'] === INITIAL_MARKER) {
    square = '5';
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
      return PLAYER;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return COMPUTER;
    }
  }

  return null;
}

function joinOr(arr, separator = ', ') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return `${arr[0]} or ${arr[1]}`;
  } else {
    return `${arr.join(separator).slice(0, -1).trimEnd()} or ${arr[arr.length - 1]}`;
  }
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
  if (player === PLAYER) {
    playerChoosesSquare(board);
  } else if (player === COMPUTER) {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  if (player === PLAYER) {
    return COMPUTER;
  } else if (player === COMPUTER) {
    return PLAYER;
  }

  return null;
}

function updateScores(scores, winner) {
  if (winner === PLAYER)   scores[PLAYER]   += 1;
  if (winner === COMPUTER) scores[COMPUTER] += 1;
}

function playAgain() {
  while (true) {
    prompt('Do you want to play again? (yes or no)');
    let answer = readlineSync.question().toLowerCase();
    if (answer === 'yes' || answer === 'y') {
      return true;
    } else if (answer === 'no' || answer === 'n') {
      return false;
    }

    prompt("Sorry, that's not a valid input (yes or no)");
  }
}

function displayScore(scores) {
  console.log(`Player has won ${scores[PLAYER]} games, Computer has won ${scores[COMPUTER]} games`);
}

function gameOver(scores) {
  return (scores[PLAYER] === GAMES_TO_WIN || scores[COMPUTER]
    === GAMES_TO_WIN);
}

function resetScores(scores) {
  scores[PLAYER] = 0;
  scores[COMPUTER] = 0;
}

function endGame() {
  prompt('Thanks for playing Tic Tac Toe!');
  return false;
}

function determineWinner(board, scores) {
  if (someoneWon(board)) {
    updateScores(scores, detectWinner(board));
    prompt(`${detectWinner(board)} won the game!`);
  } else {
    prompt("It's a tie!");
  }
}

function trackRounds(board, scores, currentPlayer) {
  while (true) {
    displayBoard(board);
    displayScore(scores);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
}

function startGame() {
  let scores = {
    Player: 0,
    Computer: 0
  };

  while (true) {
    let board = initializedBoard();
    let currentPlayer = FIRST_PLAYER;

    trackRounds(board, scores, currentPlayer);

    displayBoard(board);
    determineWinner(board, scores);

    if (gameOver(scores)) {
      if (playAgain()) {
        resetScores(scores);
      } else {
        return endGame();
      }
    }
  }
}

startGame();