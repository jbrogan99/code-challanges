`
--- Day 2: Rock Paper Scissors ---
The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant Rock Paper Scissors tournament is already in progress.

Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.

Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z
This strategy guide predicts and recommends the following:

In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?

`;

/*
Everything written in comments is my thought process.
All text in backticks is the task description set by another user.
*/

//Outcome

const win = 6;
const draw = 3;
const lose = 0;

//Rock, Paper or Scissors

// rock  // X, A
// paper  // Y, B
// scissors // Z, C

// A > Z || X > C - Rock beats Scissors
// B > X || Y > A - Paper beats Rock
// C > Y || Z > B - Scissors beats Paper

/*

(outcome is 0 extra points for losing so is not added on)

Losing Combinations:

A > Z  - points = 3
B > X  - points = 1
C > Y  - points = 2

Winning Combinations:

X > C  - points 1 + 6 (win) = 7
Y > A  - points 2 + 6 (win) = 8
Z > B  - points 3 + 6 (win) = 9

Draw Combinations:

A > X - points 1 + 3 (draw) = 4
B > Y - points 2 + 3 (draw) = 5
C > Z - points 3 + 3 (draw) = 6

Method-
// Store each two values in separate arrays
// Find index of each letter
// Assign score to each letter based on the outcomes listed above 

*/
import { combinations } from "./data.mjs";

let score = 0;

const combinationsInSeparateArrays = (combos) => {
  let combinations_array = combos.split(/\n/);
  combinations_array.splice(0, 1); // removing empty ""
  combinations_array.splice(-1, 1); // removing empty ""
  console.log("combinations_array:", combinations_array);
  getIndexOfEachUserAddCalculations(combinations_array);
  console.log("total score test:", score);
};

const drawCombinations = (elf, human) => {
  if (elf == "A" && human == "X") {
    score += 4;
  } else if (elf == "B" && human == "Y") {
    score += 5;
  } else if (elf == "C" && human == "Z") {
    score += 6;
  }
};

const loosingCombinations = (elf, human) => {
  if (elf == "A" && human == "Z") {
    score += 3;
  } else if (elf == "B" && human == "X") {
    score += 1;
  } else if (elf == "C" && human == "Y") {
    score += 2;
  }
};

const winningCombinations = (elf, human) => {
  if (elf == "C" && human == "X") {
    score += 7;
  } else if (elf == "A" && human == "Y") {
    score += 8;
  } else if (elf == "B" && human == "Z") {
    score += 9;
  }
};

const getIndexOfEachUserAddCalculations = (combo_array) => {
  combo_array.forEach((el) => {
    let elfUserOne = el[0];
    let humanUserTwo = el[2];
    loosingCombinations(elfUserOne, humanUserTwo);
    winningCombinations(elfUserOne, humanUserTwo);
    drawCombinations(elfUserOne, humanUserTwo);
  });
};

`
Your puzzle answer was 12156.

The first half of this puzzle is complete! It provides one gold star: *

--- Part Two ---
The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.
`;

let score2 = 0;
const combinationsInSeparateArraysPtTwo = (combos) => {
  let combinations_array = combos.split(/\n/);
  combinations_array.splice(0, 1); // removing empty ""
  combinations_array.splice(-1, 1); // removing empty ""
  console.log("combinations_array:", combinations_array);
  getIndexOfEachUserAddCalculationsPtTwo(combinations_array);
  console.log("total score pt 2:", score2);
};

const getIndexOfEachUserAddCalculationsPtTwo = (combo_array) => {
  combo_array.forEach((el) => {
    let elfUserOne = el[0];
    let humanUserTwo = el[2];
    loosingCombinationsPtTwo(elfUserOne, humanUserTwo);
    winningCombinationsPtTwo(elfUserOne, humanUserTwo);
    drawCombinationsPtTwo(elfUserOne, humanUserTwo);
  });
};

// lose = X
// draw = Y
// win = Z

// A > Z  - points = 3
// B > X  - points = 1
// C > Y  - points = 2

const loosingCombinationsPtTwo = (elf, human) => {
  if (elf == "A" && human == "X") {
    score2 += 3;
  } else if (elf == "B" && human == "X") {
    score2 += 1;
  } else if (elf == "C" && human == "X") {
    score2 += 2;
  }
};

const drawCombinationsPtTwo = (elf, human) => {
  if (elf == "A" && human == "Y") {
    score2 += 4;
  } else if (elf == "B" && human == "Y") {
    score2 += 5;
  } else if (elf == "C" && human == "Y") {
    score2 += 6;
  }
};

const winningCombinationsPtTwo = (elf, human) => {
  if (elf == "C" && human == "Z") {
    score2 += 7;
  } else if (elf == "A" && human == "Z") {
    score2 += 8;
  } else if (elf == "B" && human == "Z") {
    score2 += 9;
  }
};

combinationsInSeparateArrays(combinations);
combinationsInSeparateArraysPtTwo(combinations);

`
Your puzzle answer was 10835.

Both parts of this puzzle are complete! They provide two gold stars: **
`;
