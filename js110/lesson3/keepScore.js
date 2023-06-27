const GAMES_TO_WIN = 5;

function keepScore(player) {
  let computerWonGames = 0;
  let playerWonGames = 0

  if (player === 'Player') {
    playerWonGames += 1;
    console.log(`Player has won ${playerWonGames} games`);
    console.log(`Computer has won ${computerWonGames} games`);
  } else if (player === 'Computer') {
    computerWonGames += 1;
    console.log(`Player has won ${playerWonGames} games`);
    console.log(`Computer has won ${computerWonGames} games`);
  } else if (player === null) {
    console.log(`Player has won ${playerWonGames} games, Computer has won ${computerWonGames} games`); 
  }

  if (computerWonGames === 5 || playerWonGames === 5) {
    console.log('Niceeee');
  }
}


keepScore

displayScore

