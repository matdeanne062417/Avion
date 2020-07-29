// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)

    if( n < 0){
        return -1; 
    } else if (n === 0 ){
        return 1;
    } else {
        return (n * nFactorial(n - 1));
    }
}

// without recursion
function isFactorial(num){
  if( num === 0 || num === 1){
      return 1; 
  } 
  for( i =num -1  ; i>=1; i--){
     num =num * i;
  }
  return num;
}

function nFibonacci(num) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence

  var n1=0,
      n2=1,
      n3 =0;   
      if( n1 <= 1 && n2 <= 1 ){
        console.log(n1)
        console.log(n2)
      }
      for(let i =2; i <= num; i++){
          n3 = n1 + n2;
          console.log(n3)
          n1 = n2;
          n2 = n3;
      }
  }
      // num 10
      //  let i; i < num ; i++
      //  2    ; true ; i++; n3 = 0 + 1 ; n3 = 1;
      //  3    ; true; i++ ; n3 = 1 + 1 ; n3 = 2;
      //  4    ; true; i++;  n3 = 1 + 2 ; n3 = 3 ;
      //  5     ; true; i++; n3 = 2 + 3 ; n3 = 5;
//}    


//recursion
function isFibonacci(num){
  if(num == 1){
    return [0,1]
  } else {
    let fib = isFibonacci(num - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length -2])
    return fib;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
