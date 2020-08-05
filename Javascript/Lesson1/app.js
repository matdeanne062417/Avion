//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "hello" ;

//create a number variable, it an be any number
const newNum = 20;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5  === 5;

//Solve the following math problem
const newMultiply = 10 * 8 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
    return str;
};

// const returnString = str => str

function add(x, y) {
    return x +  y;
};

// const add = (x, y ) => x + y


function subtract(x, y) {
   return x - y;
};

// const subtract = (x, y) => x -y

function multiply(x, y) {
  // multiply x by y and return the value
    return x * y;
};
// const multiply =  (x, y) => x * y

function divide(x, y) {
  // divide x by y and return the value
    return x / y;
};
// const divide = (x,y) => x / y

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if( x === y){
      return true;
  }
   else {
       return false
   }
};

const areEqual = (x, y) => x === y ?  true :  false

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
    if(str1.length === str2.length){
        return true;
    } else {
        return false;
    }
};

const areSameLength = (str1, str2) => str1.length === str2.length ? true : false;

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  if(num < 90){
      return true;
  } else {
      return false;
  }
};

const lessThanNinety = (num) => num < 90 ? true : false;

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false 
  if(num > 50 ){
      return true;
  } else {
      return false;
  }
}

const greaterThanFifty = (num) => num > 50 ? true : false; 

function getRemainder(x, y) {
  // return the remainder from dividing x by y
    return x % y
}

// const getRemainder = (x,y) => x % y; 

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if(num % 2 === 0){
      return true;
  } else {
      return false;
  }
}

const isEven = (num) => num % 2 === 0 ? true : false;

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  if(num % 2 === 0){
    return false;
    } else {
        return true;
    }
}
const isOdd = (num) => num % 2 === 0 ? false : true;


function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  return num*= num
}

const square = (num) => num*num;

function cube(num) {
  // cube num and return the new value
  // code here
    return num*= num * num;
}

function cube(num) {
    // cube num and return the new value
    // code here
      return Math.pow(3, num);
}

 const cube = (num) => Math.pow(3, num)
  

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
 let pow = 1
  for(let i = 0; i < exponent; i++){
      pow = pow * num;
  }
  return pow;
}

// const raisedToPower = (num, exp) => {
//     let pow = 1
//     for(let i = 0; i < exp; i++){
//         pow = pow * num;
//     }
//     return pow;
// }

function roundNumber(num) {
  // round num and return it
  return Math.round(num)
}

const  round = (num, dec) => {
    num = parseFloat(num)
    if(!precision){
        return num;
    } else {
       return (Math.round(num / dec) * dec)
    }
};

function roundUp(num) {
  // round num up and return it
  // code here
}

const  roundUp= (num, dec) => {
    num = parseFloat(num)
    if(!dec)  return num 
     return (Math.ceil(num / dec) * dec)
};

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
    return  str + " " + "!"
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  return `${firstName} ${lastName} `
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let date = new Date();
  let hours = date.getHours();

    if(hours < 12){
        return `Good Morning ${name}` 
    } else if( hours >= 12 ){
        return `Good Afternoon ${name}` 
    } else if( hours >= 18){
        return `Good Evening ${name}` 
    } 
}

// const getGreeting = (name) => {
//     let date = new Date();
//     let hours = date.getHours();
  
//       if(hours < 12){
//           return `Good Morning ${name}` 
//       } else if( hours >= 12){
//           return `Good Afternoon ${name}` 
//       } else if( hours >= 18){
//           return `Good Evening ${name}` 
//       } 
// }

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
    return length * width;
}

// const getRectangleArea = (length , width) =>  length * width

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  return (base * height) / 2;
}

// const getTriangleArea = (base , height) => {
//     return (base * height) / 2;
// }