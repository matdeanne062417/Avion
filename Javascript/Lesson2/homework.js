// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
   if(x > y){
      console.log(`x: ${x} is greater than y: ${y}`)   
   } else if( y > x ){
     console.log(`y: ${y} is greater than x: ${x}`)
   } else if( x === y){
      console.log('x and y are the same')
   } 
}

// const getBiggest = (x, y) => { 
//    if(x > y){
//       console.log(`x: ${x} is greater than y: ${y}`)   
//     } else if( y > x ){
//       console.log(`y: ${y} is greater than x: ${x}`)
//     } else if( x === y){
//       console.log('x and y are the same')
//     } 
// }

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch (language){
    case  'german': 
    case 'German': 
        console.log('Guten Tag!'); break;
    case  'mandarin':
    case  'Mandarin':
       console.log('Ni Hao!'); break;
    case  'spanish':
    case  'Spanish':  
      console.log('Hola!');break;
    default: console.log('Hello!'); break;
  }
}

// const greeting = (language) => {
//   switch (language){
//     case  'german': 
//     case 'German': 
//         console.log('Guten Tag!'); break;
//     case  'mandarin':
//     case  'Mandarin':
//        console.log('Ni Hao!'); break;
//     case  'spanish':
//     case  'Spanish':  
//       console.log('Hola!');break;
//     default: console.log('Hello!'); break;
//   }
// }


function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return (num === 5 || num === 10) ? true : false
}

// const isTenOrFive = (num) => (num === 5 || num === 10) ? true : false

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  return (num >= 20 && num <= 50 ) ? true : false
}

// const isInRange = (num) => (num >= 20 && num <= 50 ) ? true : false
 

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if( num % 1 === 0) {
    return true;
  } else {
     return false
  }
}

// const isInteger = (num) =>  Number.isInteger(num);

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if((num % 3 === 0) && (num % 5 === 0)){
    console.log('fizzBuzz')
  } else if(num % 3 === 0){
    console.log('fizz')
  } else if( num % 5 === 0){
    console.log('buzz')
  } else {
    return num;
  }
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
