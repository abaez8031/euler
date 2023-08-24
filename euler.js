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

// const sumSquares = () => {
//   let squaresum = 0;
//   let sum = 0;
//   for(let i = 1; i <= 100; i++) {
//     squaresum += i * i
//     sum += i
//   }
//   return (sum * sum) - squaresum
// }

// console.log(sumSquares())

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) return false;
//   }
//   return true;
// }

// const nthPrime = (num) => {
//   let primes = [];
//   let i = 0
//   while (primes.length < num) {
//     if(isPrime(i)) {
//       primes.push(i)
//     }
//     i++
//   }
//   return primes[primes.length - 1]
// }

// console.log(nthPrime(10001));

const largestSeries = (num) => {
  let largest = 0;
  for (let i = 0; i < num.length - 12; i++) {
    let series = num.slice(i, i + 13);
    let product = 1;
    for (let j = 0; j < series.length; j++) {
      let curr = parseInt(series[j]);
      product *= curr;
    }
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
};

// console.log(largestSeries("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"))

// const findPyTriplet = (targetSum) => {
//   for(let a = 1; a < targetSum / 2; a++) {
//     for(let b = 1; b < targetSum / 2; b++) {
//       const c = targetSum - a - b;
//       if(a ** 2 + b ** 2 === c ** 2) return a * b * c
//     }
//   }
//   return null
// }

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const primesSummation = (num) => {
//   let primes = [];
//   let sum = 0;
//   for (let i = 2; i < num; i++) {
//     if (isPrime(i)) primes.push(i);
//   }
//   for (let i = 0; i < primes.length; i++) {
//     sum += primes[i];
//   }
//   return sum
// };

// const largestProduct = (grid) => {
//   let largest = -Infinity;
//   for(let i = 0; i < 20; i++) {
//     for(let j = 0; j < 20; j++) {
//     }
//   }
// }

// const triangleNumbers = () => {
//   let curr = 0;
//   for(let i = 1; true; i++) {
//     let numFactors = 0;
//     curr += i;
//     for(let j = 1; j <= Math.sqrt(curr); j++) {
//       if(curr % j === 0) {
//         numFactors += 2
//       }
//     }
//     if (numFactors > 500) return curr;
//   }
// }

// console.log(triangleNumbers())

// const sumNums = (arr) => {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     sum += curr;
//   }
//   return sum;
// }

// const nums = [
// 37107287533902102798797998220837590246510135740250,
// 46376937677490009712648124896970078050417018260538,
// 74324986199524741059474233309513058123726617309629,
// 91942213363574161572522430563301811072406154908250,
// 23067588207539346171171980310421047513778063246676,
// 89261670696623633820136378418383684178734361726757,
// 28112879812849979408065481931592621691275889832738,
// 44274228917432520321923589422876796487670272189318,
// 47451445736001306439091167216856844588711603153276,
// 70386486105843025439939619828917593665686757934951,
// 62176457141856560629502157223196586755079324193331,
// 64906352462741904929101432445813822663347944758178,
// 92575867718337217661963751590579239728245598838407,
// 58203565325359399008402633568948830189458628227828,
// 80181199384826282014278194139940567587151170094390,
// 35398664372827112653829987240784473053190104293586,
// 86515506006295864861532075273371959191420517255829,
// 71693888707715466499115593487603532921714970056938,
// 54370070576826684624621495650076471787294438377604,
// 53282654108756828443191190634694037855217779295145,
// 36123272525000296071075082563815656710885258350721,
// 45876576172410976447339110607218265236877223636045,
// 17423706905851860660448207621209813287860733969412,
// 81142660418086830619328460811191061556940512689692,
// 51934325451728388641918047049293215058642563049483,
// 62467221648435076201727918039944693004732956340691,
// 15732444386908125794514089057706229429197107928209,
// 55037687525678773091862540744969844508330393682126,
// 18336384825330154686196124348767681297534375946515,
// 80386287592878490201521685554828717201219257766954,
// 78182833757993103614740356856449095527097864797581,
// 16726320100436897842553539920931837441497806860984,
// 48403098129077791799088218795327364475675590848030,
// 87086987551392711854517078544161852424320693150332,
// 59959406895756536782107074926966537676326235447210,
// 69793950679652694742597709739166693763042633987085,
// 41052684708299085211399427365734116182760315001271,
// 65378607361501080857009149939512557028198746004375,
// 35829035317434717326932123578154982629742552737307,
// 94953759765105305946966067683156574377167401875275,
// 88902802571733229619176668713819931811048770190271,
// 25267680276078003013678680992525463401061632866526,
// 36270218540497705585629946580636237993140746255962,
// 24074486908231174977792365466257246923322810917141,
// 91430288197103288597806669760892938638285025333403,
// 34413065578016127815921815005561868836468420090470,
// 23053081172816430487623791969842487255036638784583,
// 11487696932154902810424020138335124462181441773470,
// 63783299490636259666498587618221225225512486764533,
// 67720186971698544312419572409913959008952310058822,
// 95548255300263520781532296796249481641953868218774,
// 76085327132285723110424803456124867697064507995236,
// 37774242535411291684276865538926205024910326572967,
// 23701913275725675285653248258265463092207058596522,
// 29798860272258331913126375147341994889534765745501,
// 18495701454879288984856827726077713721403798879715,
// 38298203783031473527721580348144513491373226651381,
// 34829543829199918180278916522431027392251122869539,
// 40957953066405232632538044100059654939159879593635,
// 29746152185502371307642255121183693803580388584903,
// 41698116222072977186158236678424689157993532961922,
// 62467957194401269043877107275048102390895523597457,
// 23189706772547915061505504953922979530901129967519,
// 86188088225875314529584099251203829009407770775672,
// 11306739708304724483816533873502340845647058077308,
// 82959174767140363198008187129011875491310547126581,
// 97623331044818386269515456334926366572897563400500,
// 42846280183517070527831839425882145521227251250327,
// 55121603546981200581762165212827652751691296897789,
// 32238195734329339946437501907836945765883352399886,
// 75506164965184775180738168837861091527357929701337,
// 62177842752192623401942399639168044983993173312731,
// 32924185707147349566916674687634660915035914677504,
// 99518671430235219628894890102423325116913619626622,
// 73267460800591547471830798392868535206946944540724,
// 76841822524674417161514036427982273348055556214818,
// 97142617910342598647204516893989422179826088076852,
// 87783646182799346313767754307809363333018982642090,
// 10848802521674670883215120185883543223812876952786,
// 71329612474782464538636993009049310363619763878039,
// 62184073572399794223406235393808339651327408011116,
// 66627891981488087797941876876144230030984490851411,
// 60661826293682836764744779239180335110989069790714,
// 85786944089552990653640447425576083659976645795096,
// 66024396409905389607120198219976047599490197230297,
// 64913982680032973156037120041377903785566085089252,
// 16730939319872750275468906903707539413042652315011,
// 94809377245048795150954100921645863754710598436791,
// 78639167021187492431995700641917969777599028300699,
// 15368713711936614952811305876380278410754449733078,
// 40789923115535562561142322423255033685442488917353,
// 44889911501440648020369068063960672322193204149535,
// 41503128880339536053299340368006977710650566631954,
// 81234880673210146739058568557934581403627822703280,
// 82616570773948327592232845941706525094512325230608,
// 22918802058777319719839450180888072429661980811197,
// 77158542502016545090413245809786882778948721859617,
// 72107838435069186155435662884062257473692284509516,
// 20849603980134001723930671666823555245252804609722,
// 53503534226472524250874054075591789781264330331690]

// const collatzSeq = () => {
//   let longest = 0;
//   for(let i = 2; i < 1000000; i++) {
//     let seq = [];
//     let curr = i;
//     if(curr % 2 === 0) {
//       seq.push(curr / 2)
//     }
//     else {
//       i = (i * 3) + 1
//     }
//   }
// }

// const powerDigitSum = () => {
//   let power = 1;
//   let sum = 0
//   for(let i = 0; i < 1000; i++) {
//     power *= 2
//   }
//   let num = BigInt(power)
//   for(let j = 0; j < num.toString().length; j++) {
//     sum += Number(num.toString()[j])
//   }
//   return sum
// }

let testArr = [[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 4, 82, 47, 65],
[19, 1, 23, 75, 3, 34],
[88, 2, 77, 73, 7, 63, 67],
[99, 65, 4, 28, 6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 2]]