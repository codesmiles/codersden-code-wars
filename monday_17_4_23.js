// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
    
//     let sum = yourPoints;

//     for (let i = 0; i < classPoints.length; i++){
//         sum += classPoints[i];
//     }
//     let average = sum / (classPoints.length + 1);
//     return yourPoints > average;
// } 

function betterThanAverage(classPoints, yourPoints) {
    // classPoints.push(yourPoints);
    // const arrSum = classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
    // return arrSum <= yourPoints;
    console.log (classPoints.length)
    return yourPoints > classPoints.reduce((yourPoints, classPoints) => yourPoints + classPoints) / classPoints.length;   
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([2, 3], 5))


// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  
    const odds = array.filter(val => val % 2 !== 0).sort((a,b)=>a-b);
    console.log(odds)
    // for (let odd of array) {
    //     if (odd % 2 !== 0) {
    //         odds.push(odd);
    //     }
    // }

    // odds.sort((a, b) => a - b );

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
          array[i] = odds[0];
          odds.shift()
      }
    }

    // for (let i = 0; i < array.length; i++){
    //     if (array[i] % 2 !== 0) {
    //         array[i] = odds.shift();
    //     }
        
    // }
    return array
}

function sortArray(array) {
        const odds = array.filter((val) => val % 2 !== 0).sort((a, b) => a - b);

        return array.map((val) => (val % 2 !== 0 ? odds.shift() : val));

}
console.log(sortArray([5, 8, 6, 3, 4]));
