const same = (arr1,arr2)=>{
    if (arr1.length !== arr2.length) return false;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
     }
     for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
     }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) { 
        if (!(key ** 2 in frequencyCounter2)) return false;
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true
}

console.log(same([1,2,3,2,5],[9,1,4,4,11]))

// given two strings write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (str1, str2) => { 
    str1.toLowerCase();
    str2.toLowerCase();
    if (str1.length !== str2.length) return false;
    
    const frequencyCounter1 = {};
    for (let val of str1) { 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // console.log(frequencyCounter1)
    for (let val of str2) { 
        if (!frequencyCounter1[val]) return false;
        frequencyCounter1[val] -= 1;
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('cinema', 'iceman')) // false


// MULTIPLE POINTER PATTERN
// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
const sumZero = (arr) => { 
    let left = 0;
    let right = arr.length - 1;
    while (left < right) { 
        let sum = arr[left] + arr[right];
        if (sum === 0) { 
            return [arr[left], arr[right]];
        } else if (sum > 0) { 
            right--;
        } else { 
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5])) // [-2,2]


// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

const countUniqueValues = (arr) => { 
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) { 
        if (arr[i] !== arr[j]) { 
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}