// Do not change any of the function names

const displayStr = () => 'hello' 

const invokeCallback = (cb) => cb();


// sum up all of the integers in the numbers array
// pass the result to cb
// no return is necessary

const sumArray = (numbers, cb) => cb(numbers);


let summation = (arr) => { return total =  arr.reduce((acc, next) => { return  acc + next})}


// function forEach(arr, cb) {
//   // iterate over arr and pass its values to cb one by one
//   // hint: you will be invoking cb multiple times (once for each value in the array)
//   arr.forEach( elem => {
//       cb(elem)
//   })
// }

const myForEach = (arr, cb) => arr.forEach( elem => { cb(elem) }  ) 

const displayArray = (val) => console.log(val);

// function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

//   return cb(arr)
// }

const map = (arr, cb) => cb(arr)

const getNewArr = (arr) => { return newArr = arr.map( elem => elem ) }


// ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // Array.prototype.map()
    
    let yearBorn = (arr) => {
      return newArr = arr.map(item => {
        if((item.year >= 1500) && (item.year < 1600)){
          return item;
         }
      }).filter((data)  => data != null);
    }


    // 2. Give us an array of the inventors first and last names
    // Array.prototype.sort()
      let sortFirstName4 = (arr) => {
        return newArr = arr.sort((a,b) => {
                return (a.first < b.first) ? -1 : 1                        
        }).map((names) => names.first)
      }
      let sortLastName = (arr) => {
        return newArr = arr.sort((a,b) => {
                return (a.last < b.last) ? -1 : 1                        
        }).map((names) => names.last)
      }
    // 3. Sort the inventors by birthdate, oldest to youngest
      let sortbirthdate = (arr) => {
        return newArr = arr.sort((a,b) => {
                return (a.year < b.year) ? -1 : 1
                                       
        }).map((data) => {
              return `FullName:${data.first} ${data.last} Birthdate: ${data.year}`
        })
      }
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
      let computeForFullAge2 = (arr) => {
        return newArr = arr.reduce((acc, next) => {
                let temp = next.passed - next.year 
                console.log('Full age:'+  temp);
          }, 0)
      }
    // 5. Sort the inventors by years lived
      let sortFullAge = (arr) => {
        return newArr = arr.sort((a,b) => {
            let temp = a.passed - a.year;
            let temp2 = b.passed - b.year;
            
            return (temp < temp2) ? -1 : 1       
        }).reduce((acc, next) => {
                let data = next.passed - next.year;
                console.log(`First Name: ${next.first} YearsLive: ${data}`)
        }, {})
      }

      let sortByYearsLive = (arr, props) => {
        return arr.reduce(function (acc, next) {
              let key = next[props]
              if (!acc[next]) {
                acc[key] = []
              }
              let getAge = next.passed - next.year
              acc[key].push(next.first, getAge )
              return acc
            }, {})
      }
    
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      let Paris = [
          "Thiers wall"
        ,"Wall of Charles V"
        ,"Wall of Philip II Augustus"
        ,"City gates of Paris"
        ,"Haussmann's renovation of Paris"
        ,"Boulevards of the Marshals"
        ,"Boulevard Auguste-Blanqui"
        ,"Boulevard Barbès"
        ,"Boulevard Beaumarchais"
        ,"Boulevard de l'Amiral-Bruix"
        ,"Boulevard Mortier"
        ,"Boulevard Poniatowski"
        ,"Boulevard Soult"
        ,"Boulevard des Capucines"
        ,"Boulevard de la Chapelle"
        ,"Boulevard de Clichy"
        ,"Boulevard du Crime"
        ,"Boulevard du Général-d'Armée-Jean-Simon"
        ,"Boulevard Haussmann"
        ,"Boulevard de lHôpital"
        ,"Boulevard des Italiens"
        ,"Boulevard Lefebvre"
        ,"Boulevard de la Madeleine"
        ,"Boulevard de Magenta"
        ,"Boulevard Marguerite-de-Rochechouart"
        ,"Boulevard Montmartre"
        ,"Boulevard du Montparnasse"
        ,"Boulevard Raspail"
        ,"Boulevard Richard-Lenoir"
        ,"Boulevard Saint-Germain"
        ,"Boulevard Saint-Michel"
        ,"Boulevard de Sébastopol"
        ,"Boulevard de Strasbourg"
        ,"Boulevard du Temple"
        ,"Boulevard Voltaire"
        ,"Boulevard de la Zone"]

        let sortBlvdStrings = (arr) => { return newArr = arr.filter((elem) => elem.includes('de'))}

      // 7. sort Exercise
     // Sort the people alphabetically by last name
        let sortLastNamenew = (arr) => {
          return newArr =  arr.map((data) => {
                    let item =  data.split(",")
                    console.log(item)
                      return item;      
            }).sort((a,b) => {
                if(a[1] < b[1]){
                    return -1;
                }    
            })
        }
      
     // 8. Reduce Exercise
    // Sum up the instances of each of these
        const data = ['car', 'car', 
                    'truck', 'truck', 'bike', 'walk', 
                    'car', 'van', 'bike', 'walk', 'car',
                    'van', 'car', 'truck' ];
    
        let countNumInstance1 = (arr) => {
          return arr.reduce(function(acc, curr){
                  acc[curr] = (acc[curr] || 0) +1
                  return acc;
              },{})
        }

        let countNumInstance2 = (arr) => {
          return arr.reduce( function(acc, cur) {
                  if(cur in acc){
                    acc[cur]++;
                  }else {
                      acc[cur] =1;    
                  };
              return acc; 
          }, {})
        }
    


// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
