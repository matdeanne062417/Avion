// Do not change any of the function names


function invokeCallback(cb) {
  // invoke cb
  return cb();
}

const displayStr = () => 'hello' 
// const invokeCallback = (cb) => cb();

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  return cb(numbers)
}

// const sumArray = (numbers, cb) => cb(numbers);

// const  summation = (arr) => {
//   let temp = 0;
//   arr.forEach( elem => {
//       temp+=elem;
//   })
//   return temp;  
// }

// let summation = (arr) => {
//   return total =  arr.reduce((acc, next) => {
//      return acc + next
//   }, 0) 
//  }

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach( elem => {
      cb(elem)
  })
}

// const myForEach = (arr) => arr.forEach( elem => { cb(elem) }) 

const displayArr = (val) => val;

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

  return cb(arr)
}

// const map = (arr, cb) => cb(arr)

const getNewArr = (arr) => {
  return newArr = arr.map( elem => {
      return elem;
  }) 
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
