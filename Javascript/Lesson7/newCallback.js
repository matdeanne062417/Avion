// Write a myFilter function that takes 2 parameters: myArray and callback.
// Here myArray is an array of strings and callback is a function that takes the elements of myArray
// as its parameter and returns a boolean true if the element is even or false if the element is odd.
// The myFilter function should return the filtered array.


// Simple problems to solve using the native .reduce and .map array methods. Each of these problems can be solved in many
// different ways, but try to solve them using the requested higher order function.

// MAP

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
var capitalize = function(string){
   return string.toUpperCase();
}

// Now write a new function called swapCase that takes a string of words and uses .map and 
//your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){
    let len = string.split(',');
    return newStr = len.map(elem => {
            return elem.toUpperCase();
    }).join('');
};
// REDUCE

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function(string){
  let len = string.toLowerCase().split('')
  return len.reduce( function(acc, next) {
          if(next in acc){
            acc[next]++;
          } else {
          acc[next] = 1;
        }
       return acc; 
  }, {})
};

// Write a function that takes a string and a target, and returns true or false if the target 
//is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function(string, target) {
    var len = string.toLowerCase().split('')
    return len.reduce(function(acc, next){
          if(next === target){
             acc = true;
          }
          return  acc;
    }, false)
}


var isPresent = function(string, target) {
  var chk = string.includes(target)
  return chk;
}


  
// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*

// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message! 
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"
const decode = function(string, cb){
  let arr1 = string.split(' ')
  return output = arr1.map( data => {
        let arr2 = data.split('');
        return  String.fromCharCode(cb(arr2))
     });
}

const getSummation = arr => {
      return  arr.reduce((acc , next) =>  parseInt(acc) + parseInt(next))
} 