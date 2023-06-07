// Understand the Problem

// input: number (an amount of blocks)
// output: number (of blocks left over)
//
// rules
//   explicit requirements
//      - structure is built in layers
//      - top layer is a single block
//      - A block in an upper layer must be supported by four blocks in a lower layer
//      - A block in a lower layer can support more than one block in an upper layer
//      - You cannot leave gaps between blocks 
//   implicit requirements
//      - layer number correlates with blocks in a layer
//        - layer number * layer number = number of blocks in a layer
// questions
//      - is a cube a single block?
//      - must supporting blocks from lowerlayers be directly below upper layer block?
//      - is it possible to have zero blocks left over?

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

// notes on test cases
// - it's possible to have zero blocks left over
// - they seem to confirm there is a maximum numbers of blocks for a valid layer
//
// Overall structure 
// - Different layers
// - Layers are made up of a max number of items
// - Each layer is essentially an integer (number of blocks)
// > Logical choice might be a nested array, each nested element representing a layer
// [
//  ['x'],
//  ['x','x','x','x'],
//  ['x','x','x','x','x','x','x','x'],
//  ...
// ]
//
// 
// ** Algorithm **
//
// 1. Start with:
// - A count of the 'number of blocks remaining' equal to the input
// - A count of the 'current layer' equal to 0
// 2. Calculate the number for the 'next layer' by adding 1 to the value for the 'current layer'
// 3. Using the number for the 'next layer', calculate the 'number of blocks required' to build that layer, by multiplying the number by itself
// 4. Determine if the 'number of blocks remaining' is greater than or equal to the 'number of blocks required' to build the layer
// - If it is:
//   - Subtract the 'number of blocks required' from the 'number of blocks remaining'
//   - Increment the 'current layer' by 1
//   - Go back to Step 2
// - If it isn't:
//   - Return the 'number of blocks remaining'

function calculateLeftoverBlocks(number) {
  let remainingBlocks = number;
  let currentLayer = 0;
  let nextLayer = currentLayer + 1;
  let requiredBlocks = nextLayer * nextLayer;

  while (remainingBlocks >= requiredBlocks) {
    currentLayer += 1;
    nextLayer = currentLayer + 1;
    remainingBlocks = remainingBlocks - requiredBlocks;
    requiredBlocks = nextLayer * nextLayer;
    console.log({remainingBlocks}, {currentLayer}, {requiredBlocks});
  }

  return remainingBlocks;
}