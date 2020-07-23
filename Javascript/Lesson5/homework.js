// Do not change any of the function names

function createUserClass(username, name, email, password) {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string
  // 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
  this.username = username;
  this.name     = name;
  this.email    = email;
  this.password = password;
}


createUserClass.prototype.sayHi = function(){
  return ` 'Hello, my name is ${name}`
}

// function addPrototypeMethod(Constructor) {
//   // add a method to the constructor's prototype
//   // the method should be called 'sayHi' and should return the string 'Hello World!'
// }

// function addReverseString(str) {
//   // add a method to the string constructor's prototype that returns a reversed copy of the string
//   // name this method reverse
//   // hint:
//   // you will need to use 'this' inside of reverse
//   this.str = str;
// }

createUserClass.prototype.reverse = function(){
  let len = this.name.length
  for(var i = len; i >= 0; i--){
      console.log(this.name[i])
  }
}


class User{
  constructor(username, name , email, password){
    this.username = username
    this.name     = name;
    this.email    = email;
    this.password = password;
  }
  sayHi(){
    return `Hi my name is ${this.name}`
  }
  reverseName(){
    let len = this.name.length;
    for(let i = len; i > 0;  i--){
      console.log(this.name[i])
    }
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
