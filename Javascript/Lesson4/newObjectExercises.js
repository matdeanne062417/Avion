// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name,sclass,rollno

const  displayObj = (obj) => {
    return Object.getOwnPropertyNames(obj)
}

// Write a JavaScript program to
// delete the rollno property from the 
//following object.
// Also print the object before or after 
//deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

const delObj = (obj) => {
    setTimeout( (data) => {        
        console.log(data)
        delete data;
        console.log(`obj deleted`)
    }, 2000, obj)
}

// Write a JavaScript program to get the 
//length of a JavaScript object.

// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

const getObjlen = (obj) => {
    console.log(obj.length)
}

// Write a JavaScript program to display 
//the reading status

// (i.e. display book name, author name 
//and reading status) of the following books.

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];


const dispReadingStatus = (obj) => {
            obj.forEach(elem => {
                let { readingStatus } = elem
                console.log(readingStatus)
        });
}

// Write a JavaScript program to sort 
// an array of JavaScript objects.
// Sample Object :
var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
// Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

const dispLibObj = (obj) => {
    // let arr = []
    let temp = 0;
      for (let i = 0; i < obj.length; i++){
            for (let j = i + 1; j < obj.length; j++) { 
                 if (obj[i].libraryID > obj[j].libraryID){
                        temp =  obj[i];
                        obj[i] = obj[j];
                        obj[j] = temp;
                       
                    }            
        }
    }
    return obj;
}

// Write a JavaScript function to
// print all the methods in an JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", 
//"prototype", "isArray", "observe", "unobserve"]

const dispAllObj  = () => {
    // TODO
    // ask if that is the prototype props
    var obj = { name: 'Harry', age: '25', sex: 'male'};
    console.log(obj.__proto__)
}

// Write a JavaScript function to retrieve 
//all the names of object's own and inherited 
//properties.

function Student(name, studentNum){
    this.name = name;
    this.studentNum = studentNum;
}

Student.prototype.displayName = function(){
    return `Hi ${this.name}`
}


// class Student {
//     constructor(name, studentNum){
//         this.name = name;
//         this.studentNum = studentNum;
//     }
//     displayName(){
//         return `Hello ${this.name}`
//     }
// }


// Write a JavaScript function to convert an object
// into a list of `[key, value]` pairs.
var obj = { name: 'Harry', age: '25', sex: 'male'};

const displJSobj = (obj) => {
    let result = Object.keys(obj).map((key) => [key, obj[key]]);
    return result;
}

// Write a JavaScript function to check whether 
//an object contains given property.

var obj = { name: 'Harry', age: '25', sex: 'male'};

const chkObject = (obj, property) => {
    //TODO
    // modify obj.property to he obj given
    return  obj.hasOwnProperty(property)
}


