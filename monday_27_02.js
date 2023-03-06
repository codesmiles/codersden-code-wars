// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  //   rearrange the digits to create the highest possible number
  // n.sort().reverse();
//   const dictionary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const dictionary = Array(10).fill(0)

  let mod;
  while (n > 0) {
    mod = n % 10;
    dictionary[mod] += 1;
    n = Math.floor(n / 10);
  }
  return dictionary.reduceRight((acc, curr, index) => {
    while (curr) {
      acc += index;
      curr--;
    }
    return acc;
  }, "")* 1 || 0;
}

console.log(descendingOrder(42145));

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  return (num * (num + 1)) / 2;
};

console.log(summation(3));

// console.log(Array(10).fill(0))


// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    // n raised to the power of 3
    return n**3
}

console.log(rowSumOddNumbers(5))