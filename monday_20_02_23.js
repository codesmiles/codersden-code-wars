// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

function rpsls(pl1, pl2) {
  const map = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    spock: ["scissors", "rock"],
    lizard: ["paper", "spock"],
  };

  console.log(map[pl1].includes(pl2));

  if (map[pl1].includes(pl2)) {
    return "Player 1 Won!";
  } else if (map[pl2].includes(pl1)) {
    return "Player 2 Won!";
  } else {
    return "Draw!";
  }
}

console.log(rpsls("rock", "lizard"));
console.log(rpsls("lizard", "scissors"));
console.log(rpsls("scissors", "scissors"));

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  //   const numbersArr = numbers.split(" ").sort((a, b) => b - a);
  //   return `${numbersArr[0]} ${numbersArr[numbersArr.length - 1]}`;

  const numbersArr = numbers.split(" ");
  let max = +numbersArr[0];
  let min = +numbersArr[0];

  console.log(Math.max(...numbersArr));
  console.log(Math.min(...numbersArr));
  // for (let i = 0; i < numbersArr.length; i++) {
  //     if (+numbersArr[i] < min) {
  //         min = numbersArr[i];
  //     }
  //     else if (+numbersArr[i] > max) {
  //         max = numbersArr[i];
  //     }

  // }
  return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string
function fakeBin(x) {
    const valArr = x.split("");

    for (let i = 0; i < x.length; i++) {
        if (+valArr[i] >= 5) {
            valArr[i] = "1"
        } else {
            valArr[i] ="0"
        }
    }
    return valArr.join("");
}
console.log(fakeBin("45385593107843568"));



