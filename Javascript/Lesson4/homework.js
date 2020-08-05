// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  let cat = {
      name,
      age,
      catMethod: () => {
          return `${this.name} ${this.age} Meow`;
      }
  }
  return cat;
}

// const makeCat = (name, age) => {
//     let cat = {
//       name,
//       age,
//       catMethod: () => {
//           return `${this.name} ${this.age} Meow`;
//       }
//   }
//   return cat;
//}

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object.age = property;
  return object
}

let person = {
  name: 'john doe',
  displayName: function() {
      return ` my name is ${this.name}`
  },
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
    let temp = method.bind(object)
    return temp();
}

let mysteryNumberObject = {
  mysteryNumber: 5,
 displayProduct: function(){
      return  this.mysteryNumber * 5;
  }
}

let  multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  let obj = new Object(mysteryNumberObject)
  return obj.displayProduct()
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  let cat = {
      name,
      age,
      catMethod: () => {
          return `${this.name} ${this.age} Meow`;
      }
  }

   delete cat.age;

   return cat;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
    let newObj = {
      name,
      email,
      password,
      display: () => {
          return `${this.name} ${this.email} ${this.password}`
      }
    }
  return newObj;
}
let user = {
  name: 'John Doe',
  password: 'password123',
  email: 'email@email.com'
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false  
  return user.email ? true : false;
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  if(object in property){
    return true;
  } else {
    return false
  }
// return object.hasOwnProperty(property) 
}

let user = {
  name: 'John Doe',
  password: 'password123'
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  return user.password === password ? true : false;
}

let user = {
  name: 'John Doe',
  password: 'password123'
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user.password = newPassword
  return user
}

let users = {
  friends: ['FriendA','FriendB','FriendC'],
}

function addFriend(users, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  let obj = new Object(users)
  obj.friends.push(newFriend)
  return obj;
}

let users = [{
            user: {
                isPremium: false,
                post: [23,12,31]
            }
          },          {
            user: {
                isPremium: false,
                post: [23,12,31]
            }
          },          {
            user: {
                isPremium: false,
                post: [23,12,31]
            }
          }]
   

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  for(let data of users){
      if(data.user.isPremium === false){
        data.user.isPremium = true 
      }
  }
  return users;
}



let users = {
  posts: [{
           likes: 21, 
         },{
           likes: 50, 
         },
          {
           likes: 32, 
         }]    
  }

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum

  let temp = 0;

  user.posts.forEach(elem => {
      temp+=elem.likes;
  })
 
  return `sum: ${temp}`
}



let storeItem = {
  itemName: 'Item',
  expirationdate: 2020,
  price: 20,
  discountPercentage: .2,
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 
  //'calculateDiscountPrice'
  // this method should multiply the storeItem's 
  //'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the
  // price and returns the discounted price
  // return storeItem at the end of the function
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  let obj = new Object(storeItem)

  obj.calculateDiscountPrice = (price ,discountPercentage) => {
      let discountPrice = price - (price * discountPercentage)
      return discountPrice;
  }
  return obj.calculateDiscountPrice(obj.price, obj.discountPercentage)
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod,
};
