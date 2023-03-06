// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
  let nItems = Array(n)
    .fill(0)
    .map((_, index) => index);

  const findNearestStations = (num) => {
    if (c.includes(num)) {
      return 0;
    } else {
      const arr = [];
      for (let i = 0; i < c.length; i++) {
        arr.push(Math.abs(num - c[i]));
      }
      return Math.min(...arr);
    }
  };

  const emptArr = [];

  for (let index = 0; index < nItems.length; index++) {
    emptArr.push(findNearestStations(nItems[index]));
  }

  return Math.max(...emptArr);
}

// console.log(flatlandSpaceStations(5, [0, 4]));

// var bigi = 41234563232789012327892787227897329n;
// output: 41234563232789012327892787227897329;
function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  // return parseInt(`${sum}n`);
  return Number(`${sum}n`);
}

// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  const arrEmpty = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  arrEmpty.push(aliceScore, bobScore);
  return arrEmpty;
}

// console.log(compareTriplets([1, 2, 3], [3, 2, 1]))

function miniMaxSum(arr) {
  arr.sort();
  // let arr1 = arr.slice(0, arr.length - 1);
  // let arr2 = arr.slice(1, arr.length);
  // let lowestAdditionSum = arr1.reduce((acc, curr,index) => {
  //     return [acc[0] + arr1[index], acc[1] + arr2[index]];

  // }, [0,0]);
  // return `${lowestAdditionSum[0]} ${lowestAdditionSum[1]}`;

  let lowestAdditionSum = arr.reduce(
    (acc, curr, index) => {
      if (index == 4) {
        return acc;
      }
      return [
        acc[0] + arr.slice(0, arr.length - 1)[index],
        acc[1] + arr.slice(1, arr.length)[index],
      ];
    },
    [0, 0]
  );
  return `${lowestAdditionSum[0]} ${lowestAdditionSum[1]}`;

  // let highestAdditionSum = arr2.reduce((a,b)=>a + b,0);
  // ${highestAdditionSum}

  // for (let i = 0; i < arr1.length; i++) {
  //     lowestAdditionSum += arr1[i];
  //     highestAdditionSum += arr2[i];
  // }
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
