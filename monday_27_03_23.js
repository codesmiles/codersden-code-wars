/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
function position(x, y, n) {
    const arr = [];
    let sum = 0
    for (let i = 1; i < x; i++) {
        sum += i;
    }
    let b = (y - sum) / x;
    for (let i = b; i < b+x; i++) {
        arr.push(i);
    }
    console.log(arr);
    return arr[n];
}

// function position(x, y, n) {
//   return y / x - (x - 1) / 2 + n;
// }

// function position(x, y, n) {
//   return Math.ceil(y / x) - Math.floor(x / 2) + n;
// }
console.log(position(2, 25, 0));

// Write a function
// titleToNumber(title) or title_to_number(title) or titleToNb title ...
// (depending on the language)
// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:
// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27

// describe("Initial tests", () => {
//   Test.assertEquals(titleToNumber("A"), 1);
//   Test.assertEquals(titleToNumber("Z"), 26);
//   Test.assertEquals(titleToNumber("AA"), 27);
//   Test.assertEquals(titleToNumber("AZ"), 52);
//   Test.assertEquals(titleToNumber("BA"), 53);
//   Test.assertEquals(titleToNumber("CODEWARS"), 28779382963);
// });
function titleToNumber(title) {
  
    let strObj = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21, "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26 }
    
    let result = 0;
    
    for (i = 0; i < title.length; i++){
        result += strObj[title[i]] * Math.pow(26,title.length - 1 - i);
    }
    

    
    return result
}
// function titleToNumber(title) {
//   return title
//     .split("")
//     .map((x) => x.charCodeAt(0) - 64)
//     .reduce((x, y) => x * 26 + y);
// }

// const alpha = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const titleToNumber = (t) =>
//   t.length == 0
//     ? 0
//     : alpha.indexOf(t.charAt(0)) * Math.pow(26, t.length - 1) +
//       titleToNumber(t.slice(1));

// function titleToNumber(title) {
//   var arr = title.split("");
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charCodeAt(0) - 64;
//   }
//   arr.reverse();
//   var sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i] * Math.pow(26, i);
//   }
//   return sum;
// }


// const titleToNumber = (title) =>
//   [...title].reduce((pre, val) => pre * 26 + val.charCodeAt() - 64, 0);
console.log(titleToNumber("CODEWARS"));
