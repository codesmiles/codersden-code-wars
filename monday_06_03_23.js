// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  // return arrayOfSheep.filter((sheep) => sheep).length;

  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

// console.log(countSheeps([true, true, true, false,]));

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let ans = a + b;
  let res = "";

  // return ans.toString(2);

  while (ans > 0) {
    res = `${ans % 2}${res}`;
    ans = Math.floor(ans / 2);
  }

  return res;

  //     console.time("While loop")
  //   while (ans) {
  //     res = `${ans & 1}${res}`;
  //     ans >>= 1;
  //   }
  //   console.timeEnd("While loop");
  //   return res;
}

// console.log(addBinary(5, 9))
// console.log(1 % 2);

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  //your code here
    let arr = Array(num).fill(1);
    return arr.length < 1 ? "" : arr
      .map((item, idx) => {
        return `${idx + 1} sheep...`;
      })
      .join("");
    
    // let result = "";
    // for (let i = 1; i <= num; i++){
    //     result += `${i} sheep...`;
    // }
    
    // return result;
};

console.log(countSheep(3));


// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
//   reorganize the numbers
  let sortedNum = numbers.sort((a, b) => a - b);

  console.log(sortedNum);
  // sum the lowest number
  return sortedNum[0] + sortedNum[1];


}

console.log(sumTwoSmallestNumbers([20,44,50,15,81,9]))