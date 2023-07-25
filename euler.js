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

const isHappy = (num) => {
  let digits = num.toString().split("")
    for(let i = 0; i < digits.length; i++) {
        num += parseInt(digits[i]) ** 2
    }
};

isHappy(19)