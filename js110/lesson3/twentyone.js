// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.
const readline = require('readline-sync');

let deck = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'],
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'],
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'],
];

function dealCards() {
  let cardOne = deck[Math.floor(Math.random() * 52)];
  let cardTwo = deck[Math.floor(Math.random() * 52)];

  return [cardOne, cardTwo];
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function calculateTotal(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum; 
}

function busted() {
  return score > 21;
}



function playerTurn() {
  while (true) {
    console.log("hit or stay?");
    let answer = readline.question();



    if (answer === 'stay' || busted()) break;
  }
  
  if (busted()) {
    // probably end the game? or ask the user to play again?
    console.log('Too bad, the dealer won!')
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }
}

function dealerTurn() {
  while (true) {
    if (calculateTotal(dealerTurn) < 17) {

    }

    if (busted()) break;
  }
  
  if (busted()) {
    // probably end the game? or ask the user to play again?
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }
}

function keepTotal(playerTotal, dealerTotal) {
  return {
    playerTotal: playerTotal,
    dealerTotal: dealerTotal,
  }
}

function startRound() {
  shuffle(deck);

  let playerHand = dealCards();
  let dealerHand = dealCards();

  console.log(`Dealer has: ${dealerHand[0][1]} and unknown card`);
  console.log(`You have: ${playerHand[0][1]} and ${playerHand[1][1]}`);

  let playerTotal = calculateTotal(playerHand);
  let dealerTotal = calculateTotal(dealerHand);

  keepTotal(playerTotal, dealerTotal);



  playerTurn();

  dealerTurn();
}
 
startRound();
