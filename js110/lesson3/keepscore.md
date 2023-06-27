matchScore(winner) {
  let computerScore = 0;
  let playerScore = 0;

  if (winner === 'Player') {
    playerWonGames += 1;
  } else if (winner === 'Computer') {
    computerWonGames += 1;
  } else if (winner === null) {
    continue;
  }

  return `Player has won ${playerWonGames} games, Computer has won ${computerWonGames} games`;
}

keepScore(winner) {


  return 
}


keep score across games
returns games won for player and computer

displayScore()
logs the score after each game



matchWinner
if computer or player has won 5 games, return computer or player

displayWinner
logs the winner, ends the match

Problem

input: game outcomoe
output: score for player, score for computer

test cases