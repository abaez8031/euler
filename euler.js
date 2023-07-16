// If we list all the natural numbers below 10 that are multiples of 
// 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const sumMultiples = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

console.log(sumMultiples(1000))

const evenFibonacciNumbers = () => {
  let fibs = [1,2]
  let newTerm;
  let sum = 0
  while (!newTerm || newTerm < 4000000) {
    newTerm = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(newTerm)
  }
  for(let i = 0; i < fibs.length; i++) {
    if(fibs[i] % 2 === 0) {
      sum += fibs[i]
    }
  }
  return sum
}

console.log(evenFibonacciNumbers())