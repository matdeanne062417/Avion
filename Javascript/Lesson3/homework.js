// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return temp = arr[0]
}

// const returnFirst = (arr) => temp = arr[0]

function returnLast(arr) {
  // return the last item of the array
  return temp = arr[arr.length -1]
}

// const returnLast = (arr) => temp = arr[arr.length -1]

function getArrayLength(arr) {
  // return the length of the array
  return `The length of the array is ${arr.length}`

}

// const getArrayLength = (arr) =>  `The length of the array is ${arr.length}`

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  arr.forEach(element => {
    console.log(element + 1)
  });
}


// const incrementByOne = (arr) => {arr.forEach(element => {  element + 1;  })}


function addItemToArray(arr, item) {
  // add the item to the end of the array
  arr.push(item)
  return arr;
}

// const addItemToArray = (arr, item) => {
//   arr.push(item)
//   return arr;
// } 

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

// const addItemToFront = (arr, item) => {
//     arr.unshift(item);
//     return arr;
// }

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
    
  return words.join(' ');
}
// const wordsToSentence = words => words.join(' ');

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
    if(arr.indexOf(item) !== -1){
        return true;
    } else {
      return false;
    }
 }

// const contains = (arr, item) => { arr.indexOf(item) !== -1 ? true : false }
 
function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  numbers.forEach(el => {
      sum += el
  })
  return sum;
}

// const addNumbers = (numbers) => {
//       let sum = 0;
//       numbers.forEach(el => {
//           sum += el
//       })
//       return sum;
// }

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  testScores.forEach(el => {
      sum += el

  })
  return sum / testScores.length;
}

// const averageTestScore = (testScores) => {
//   // testScores is an array.  Iterate over testScores and compute the average.
//   // return the average
//   let sum = 0;
//   testScores.forEach(el => {
//       sum += el
//   })
//   return sum / testScores.length;
// }

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
   let temp = 0;
  numbers.forEach( el => {
    
      if( el > temp){
        temp = el;
      }
  })
  return `largest number is ${temp}`;
}

// const  largestNumber = (numbers) => {
//   // numbers is an array of integers
//   // return the largest integer
//    let temp = 0;
//   numbers.forEach( el => {
//       if( el > temp){
//         temp = el;
//       }
//   })
//   return `largest number is ${temp}`;
// }


function multiplyArguments(...args) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let temp = 1;
  if(args.length === 0) {
    return 0;
  } 
  args.forEach(el => {   
        if(el.length === 1){
           return el;
        } else {
          temp *=el
        }    
    })
    return temp;
}

// const  multiplyArguments = (...args) => {
//   // use the arguments keyword to multiply all of the arguments together and return the product
//   // if no arguments are passed in return 0
//   // if one argument is passed in just return it
//   let temp = 1;
//   if(args.length === 0) {
//     return 0;
//   } 
//   args.forEach(el => {   
//         if(el.length === 1){
//            return el;
//         } else {
//           temp *=el
//         }    
//     })
//     return temp;
// }



// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
