// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((val, i) =>`${i+1}: ${val}`)
};

console.log(number(["a", "b", "c"]));

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    let sum = 0;
  for (let i = 0,j=1; i < n; i++,j+=3) {
    // sum += 1/(2*i+1)
      sum+=1/j
    }
    return Math.round(sum*100)/100
}

console.log(SeriesSum(1));


// factorials
function factorials(n) {
    if (n < 0) {
        return -1
    }else if (n == 0) {
        return 1
    };
    console.log(n);
    return n * factorials(n - 1);
}

console.log(factorials(5))


// The fusc function is defined recursively as follows:

// 1. fusc(0) = 0
// 2. fusc(1) = 1
// 3. fusc(2 * n) = fusc(n)
// 4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
// The 4 rules above are sufficient to determine the value of fusc for any non-negative input n. For example, let's say you want to compute fusc(10).

// fusc(10) = fusc(5), by rule 3.
// fusc(5) = fusc(2) + fusc(3), by rule 4.
// fusc(2) = fusc(1), by rule 3.
// fusc(1) = 1, by rule 2.
// fusc(3) = fusc(1) + fusc(2) by rule 4.
// fusc(1) and fusc(2) have already been computed are both equal to 1.
// Putting these results together fusc(10) = fusc(5) = fusc(2) + fusc(3) = 1 + 2 = 3

// Your job is to produce the code for the fusc function. In this kata, your function will be tested with small values of n, so you should not need to be concerned about stack overflow or timeouts.

// Hint: Use recursion.

function fusc(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }
    else if (n % 2 === 0) {
        return fusc(n / 2);
    } else if (n % 2 !== 0) {
        return fusc((n-1)/2) + fusc((n + 1)/2)
    }
}

console.log(fusc(19))