const readline = require('readline-sync');
const DEALER_MAX = 17;
const MAXIMUM_NUM = 21;

let deck = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'], ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J'], ['H', 'Q'], ['H', 'K'], ['H', 'A'],
  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'], ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'J'], ['D', 'Q'], ['D', 'K'], ['D', 'A'],
  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'], ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'J'], ['C', 'Q'], ['C', 'K'], ['C', 'A'],
  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'], ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'J'], ['S', 'Q'], ['S', 'K'], ['S', 'A'],
];

function dealCards() {
  return [deck.pop(), deck.pop()];
}

function prompt(message) {
  console.log(`=> ${message}`);
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
    if (sum > MAXIMUM_NUM) sum -= 10;
  });

  return sum;
}

function busted(score) {
  return score > MAXIMUM_NUM;
}

function hit(hand) {
  hand.push(deck.pop());
  let handTotal = calculateTotal(hand);
  return handTotal;
}

function compareCards(playerHand, dealerHand) {
  let playerCards = joinAnd(displayHand(playerHand));
  let dealerCards = joinAnd(displayHand(dealerHand));
  console.log('==============');
  prompt(`You have ${playerCards} for a total score of ${calculateTotal(playerHand)}. Dealer has ${dealerCards} for a total score of ${calculateTotal(dealerHand)}.`);
  console.log('==============');
}

function joinAnd(arr, separator = ', ') {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return `${arr[0]}`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]}`;
  } else {
    return `${arr.slice(0, -1).join(separator)} and ${arr[arr.length - 1]}`;
  }
}

function displayHand(hand) {
  let values = hand.map(card => card[1]);

  let cards = [];
  values.forEach(value => {
    if (value === 'A') {
      cards.push('Ace');
    } else if (value === 'J') {
      cards.push('Jack');
    } else if (value === 'Q') {
      cards.push('Queen');
    } else if (value === 'K') {
      cards.push('King');
    } else {
      cards.push(value);
    }
  });

  return cards;
}

function determineWinner(playerHand, dealerHand) {
  let playerTotal = calculateTotal(playerHand);
  let dealerTotal = calculateTotal(dealerHand);

  if (playerTotal > dealerTotal) {
    prompt(`You won the game!`);
  } else if (dealerTotal > playerTotal) {
    prompt(`Dealer won the game.`);
  } else {
    prompt('It was a tie, Dealer wins.');
  }
}

function playerTurn(hand) {
  let handTotal;

  while (true) {
    prompt("Hit or stay?");
    let answer = readline.question();

    if (answer.toLowerCase() === 'hit') {
      handTotal = hit(hand);
      let cards = joinAnd(displayHand(hand));
      prompt(`You have ${cards} for a total score of ${handTotal}.`);
    }

    if (answer.toLowerCase() === 'stay' || busted(handTotal)) break;
  }

  if (busted(handTotal)) {
    prompt(`Bust, dealer wins!`);
    return false;
  } else {
    prompt("You chose to stay!");  // if player didn't bust, must have stayed to get here
    return true;
  }
}

function dealerTurn(score, hand) {
  let handTotal = score;

  while (handTotal < DEALER_MAX) {
    handTotal = hit(hand);
    console.log('Dealer hit!');
    if (busted(handTotal)) break;
  }

  if (busted(handTotal)) {
    prompt(`Dealer busts with ${joinAnd(displayHand(hand))} for a total of ${handTotal}, you won!`);
    return false;
  } else {
    prompt("Dealer chose to stay!");  // if player didn't bust, must have stayed to get here
    return true;
  }
}

function playAgain() {
  while (true) {
    console.log('-------------');
    prompt('Do you want to play again? (yes or no)');
    let answer = readline.question().toLowerCase();
    if (answer === 'yes' || answer === 'y') {
      return true;
    } else if (answer === 'no' || answer === 'n') {
      prompt('Thanks for playing Twenty One!');
      return false;
    }

    prompt("Sorry, that's not a valid input (yes or no)");
  }
}

while (true) {
  console.clear();
  console.log('Welcome to Twenty One!');
  console.log('==============');

  shuffle(deck);

  let playerHand = dealCards();
  let dealerHand = dealCards();

  prompt(`Dealer has: ${dealerHand[0][1]} and unknown card`);
  prompt(`You have: ${joinAnd(displayHand(playerHand))}`);

  let playerResult = playerTurn(playerHand);
  let dealerResult;
  let dealerTotal;

  if (playerResult) {
    dealerTotal = calculateTotal(dealerHand);
    dealerResult = dealerTurn(dealerTotal, dealerHand);
  }

  if (playerResult && dealerResult) {
    compareCards(playerHand, dealerHand);
    determineWinner(playerHand, dealerHand);
  }

  if (!playAgain()) break;
}