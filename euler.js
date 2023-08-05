// If we list all the natural numbers below 10 that are multiples of
// 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// const sumMultiples = (num) => {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };

// // console.log(sumMultiples(1000))

// const evenFibonacciNumbers = () => {
//   let fibs = [1, 2];
//   let newTerm;
//   let sum = 0;
//   while (!newTerm || newTerm < 4000000) {
//     newTerm = fibs[fibs.length - 1] + fibs[fibs.length - 2];
//     fibs.push(newTerm);
//   }
//   for (let i = 0; i < fibs.length; i++) {
//     if (fibs[i] % 2 === 0) {
//       sum += fibs[i];
//     }
//   }
//   return sum;
// };

// // console.log(evenFibonacciNumbers())

// const isPrime = (num) => {
//   if (num < 2) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (let i = 3; i * i <= num; i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const largestPrimeFactor = (num) => {
//   if (num < 2) return undefined;
//   if (num === 2) return 2;

//   while (num % 2 === 0) {
//     num /= 2;
//   }

//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     while (num % i === 0) {
//       num /= i;
//     }
//   }

//   if (num > 2) {
//     return num;
//   }
//   return undefined;
// };

// console.log(largestPrimeFactor(600851475143));

// const largestPalindromeProduct = () => {
//   let largest = 0
//   for(let i = 100; i < 1000; i++) {
//     for(let j = 100; j < 1000; j++) {
//       let product = i * j
//       let productString = product.toString()
//       let productLength = product.toString().length
//       if(product > largest && productString.slice(0,productLength / 2) === productString.slice(productLength / 2).split("").reverse().join("")) {
//         largest = product;
//       }
//     }
//   }
//   return largest
// }

// console.log(largestPalindromeProduct())

// const countingPairs = (nums, k) => {
//   let counter = 0;
//   let count = {};

//   for(let i = 0; i < nums.length; i++) {
//     let a = nums[i]
//     for(let j = 0; j < nums.length; j++) {
//       let b = nums[j]
//       if(a + k === b && !count[a]) {
//         count[a] = b
//         counter++
//       }
//     }
//   }
//   return counter
// }

// console.log(countingPairs([1,2], 0))

// const isHappy = (num) => {
//   let digits = num.toString().split("")
//     for(let i = 0; i < digits.length; i++) {
//         num += parseInt(digits[i]) ** 2
//     }
// };

// isHappy(19)

// const range = (start,end, step = 1) => {
//   let arr = [];
//   if(start < end) {
//     for(let i = start; i <= end; i+= step) {
//   		arr.push(i)
//   	}
//   }
//   else {
//   	for(let i = start; i >= end; i += step) {
//   		arr.push(i)
//     	}
//     }
//   return arr;
// }

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

// const arrayToList = (arr) => {
//   let list = null
//   for(let i = arr.length - 1; i >= 0; i--) {
//    	list = {value: arr[i], rest: list}
//   }
//   return list
// }

// const listToArray = (list) => {
//   let arr = [];
//   let current = list
//   while (list !== null) {
//     arr.push(list.value)
//     list = list.rest
//   }
//   return arr;
// }

// console.log(arrayToList([10,20]))
// console.log(listToArray(arrayToList([10,20])))

// const splitSentence = (sentence) => {
//   // Write your code here
//   let output = [];
//   let word = "";
//   sentence += " ";
//   for (let i = 0; i < sentence.length; i++) {
//     let char = sentence[i];
//     if (char !== " ") {
//       word += char;
//     } else if (char === " " || i === sentence.length - 1) {
//       output.push(word);
//       word = "";
//     }
//   }
//   return output;
// };

// console.log(splitSentence("The quick brown fox"));

// const strFunc = (str) => {
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (i % 2 === 0 || i % 3 === 0) {
//       output += char;
//     }
//   }
//   return output;
// };

// console.log(strFunc("When faced with a problem you do not understand, do any part of it you do understand, then look at it again. --Robert A. Heinlein").length);

// const numFunc = (int) => {
//   let current = int;
//   for(let i = 0; i < int; i++) {
//     current = ((current ** 2) % 99)
//   }
//   return current
// }

// console.log(numFunc(3))
// console.log(numFunc(5))
// console.log(numFunc(30))

// function makeGrid(numRows, numColumns) {
//   let output = []
//   for(let i = 0; i < numColumns; i++) {
//       let subOutput = [];
//       for(let j = 0; j < numRows; j++) {
//           subOutput.push(i + 1)
//       }
//       output.push(subOutput)
//   }
//   return output;
// }

// console.log(makeGrid(3,4))

// function arrayFlattener(arr) {
//   let output = [];
//   for(let i = 0; i < arr.length; i++) {
//       if(!Array.isArray(arr[i])) {
//           output.push(arr[i])
//       }
//       else {
//           for(let j = 0; j < arr[i].length; j++) {
//               output.push(arr[i][j])
//           }
//       }
//   }
//   return output;
// }

// console.log(arrayFlattener([1,[2, 3], 4]));

// function getRow(puzzle, row) {
//   // YOUR CODE
//   return puzzle[row];
// }

// function getColumn(puzzle, col) {
//   // YOUR CODE
//   let output = [];
//   for(let i = 0; i < puzzle.length; i++) {
//       output.push(puzzle[i][col])
//   }
//   return output;
// }


// function getSection(puzzle, x, y) {
//   // YOUR CODE
//   let output = [];
//   for(let i = y; i < y + 3; i++) {
//       for(let j = x; j < x + 3; j++) {
//           output.push(puzzle[i][j])
//       }
//   }
//   return output;
// }

// let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
//               [ 2,7,1,   9,6,3,   4,8,5 ],
//               [ 4,6,3,   5,8,1,   7,9,2 ],

//               [ 9,3,4,   6,1,7,   2,5,8 ],
//               [ 5,1,7,   2,3,8,   9,6,4 ],
//               [ 6,8,2,   4,5,9,   3,7,1 ],

//               [ 1,5,9,   8,7,4,   6,2,3 ],
//               [ 7,4,6,   3,2,5,   8,1,9 ],
//               [ 3,2,8,   1,9,6,   5,4,7 ]];

// console.log(getSection(puzzle, 0, 0));
// // -> [ 8,9,5,2,7,1,4,6,3 ]

// console.log(getSection(puzzle, 1,0));
// -> [ 7,4,2,9,6,3,5,8,1 ]

// function includes1To9(arr) {
//   // YOUR CODE
//   if (arr.length !== 9) return false;
//   let fullSet = new Set([1,2,3,4,5,6,7,8,9])
//   for(let i = 0; i < arr.length; i++) {
//       let num = arr[i]
//       if (!fullSet.has(num)) return false;
//       fullSet.delete(num)
//   }
//   return fullSet.size === 0;
// }

// console.log(includes1To9([1,2,3,4,5,6,7,8,9])) // => true
// console.log(includes1To9([1,1,2,3,4,5,6,7,8])) // => false (no 9)

// function sudokuIsValid(puzzle) {
//   // YOUR CODE
//   for(let i = 0; i < puzzle.length; i++) {
//       let row = getRow(puzzle,i)
//       let col = getColumn(puzzle,i)
//       let sect;
//       if(i % 3 === 0) {
//           sect = getSection(puzzle, i, i)
//       }
//       if(!includes1To9(row)) return false;
//       if(!includes1To9(col)) return false;
//       if(sect && !includes1To9(sect)) return false;
//   }
//   return true;
// }

// let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
//               [ 2,7,1,   9,6,3,   4,8,5 ],
//               [ 4,6,3,   5,8,1,   7,9,2 ],

//               [ 9,3,4,   6,1,7,   2,5,8 ],
//               [ 5,1,7,   2,3,8,   9,6,4 ],
//               [ 6,8,2,   4,5,9,   3,7,1 ],

//               [ 1,5,9,   8,7,4,   6,2,3 ],
//               [ 7,4,6,   3,2,5,   8,1,9 ],
//               [ 3,2,8,   1,9,6,   5,4,7 ]];

// console.log(sudokuIsValid(puzzle));
// // => true

// let puzzleTwo = [[ 8,9,5,  7,4,2,  1,3,6 ],
//                  [ 8,7,1,  9,6,3,  4,8,5 ],
//                  [ 4,6,3,  5,8,1,  7,9,2 ],

//                  [ 9,3,4,  6,1,7,  2,5,8 ],
//                  [ 5,1,7,  2,3,8,  9,6,4 ],
//                  [ 6,8,2,  4,5,9,  3,7,1 ],

//                  [ 1,5,9,  8,7,4,  6,2,3 ],
//                  [ 7,4,6,  3,2,5,  8,1,9 ],
//                  [ 3,2,8,  1,9,6,  5,4,7 ]];

// console.log(sudokuIsValid(puzzleTwo));
// // => false

// function maxMin(k, arr) {
//   // Write your code here
//   let sorted = arr.sort()
//   let min = -Infinity
//   for(let i = 0; i < arr.length; i++) {
//     let curr = arr[i]
//     let last = arr[i +k]
//     if((last - curr) < min) {
//       min = last - curr
//     }
//   }
//   return min
// }

