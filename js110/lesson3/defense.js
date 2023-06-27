// input: current board state
// output: defense board selection
// 
// if immediate threat, defend the 3rd square
// 
// if no immediate threat, pick random


const WINNING_LINES = [
  [1, 2 , 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];


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